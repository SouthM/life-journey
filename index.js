/**
 * Host half of the life-journey bundle.
 *
 * Owns one journal file on this machine and the small JSON API the panel page
 * calls: `GET /api/life-journey` returns every entry, `POST` applies exactly one
 * mutation (`save` or `delete`). Entries never enter a session log, so the
 * journal outlives Sessions and profile edits; it is a plain file the user can
 * copy, back up, or read outside DSH.
 */
import { randomUUID } from 'node:crypto'
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'

export const inject = ['webServer']

const ROUTE = '/api/life-journey'
const MAX_BODY_BYTES = 512 * 1024
const MAX_ENTRIES = 5000
const MAX_TITLE = 120
const MAX_CONTENT = 20000
const TAGS = new Set(['growth', 'learning', 'work', 'life', 'health', 'relation', 'other'])
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/
const ENTRY_ID = /^[A-Za-z0-9-]{8,64}$/

export function apply(ctx) {
  const home = process.env.DSH_HOME || join(homedir(), '.dsh')
  const directory = join(home, 'life-journey')
  const journalPath = join(directory, 'journal.json')

  const store = { version: 1, entries: [] }
  let loaded = false
  let loadWarning = null
  let chain = Promise.resolve()

  /** One write at a time, so two saves can never interleave a read-modify-write. */
  function exclusive(task) {
    const next = chain.then(task, task)
    chain = next.then(
      () => undefined,
      () => undefined,
    )
    return next
  }

  async function ensureLoaded() {
    if (loaded) return
    await mkdir(directory, { recursive: true })
    let text
    try {
      text = await readFile(journalPath, 'utf8')
    } catch (error) {
      if (error && error.code === 'ENOENT') {
        loaded = true
        return
      }
      throw error
    }
    try {
      const parsed = JSON.parse(text)
      const rows = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.entries) ? parsed.entries : []
      store.entries = rows.map((row) => normalizeEntry(row, null)).filter(Boolean)
    } catch (error) {
      // Never overwrite a file we cannot parse: move it aside and tell the user.
      const backup = `${journalPath}.corrupt-${Date.now()}`
      await rename(journalPath, backup)
      loadWarning = `The previous journal file could not be parsed and was kept at ${backup}.`
    }
    loaded = true
  }

  function sorted() {
    return store.entries.slice().sort((left, right) => {
      if (left.date !== right.date) return left.date < right.date ? 1 : -1
      return left.createdAt < right.createdAt ? 1 : -1
    })
  }

  async function persist() {
    const temporary = `${journalPath}.${process.pid}.${Date.now()}.tmp`
    await writeFile(temporary, `${JSON.stringify(store, null, 2)}\n`, 'utf8')
    await rename(temporary, journalPath)
  }

  async function save(raw) {
    await ensureLoaded()
    const requestedId = raw && typeof raw.id === 'string' ? raw.id : ''
    const index = requestedId === '' ? -1 : store.entries.findIndex((entry) => entry.id === requestedId)
    const previous = index >= 0 ? store.entries[index] : null
    const entry = normalizeEntry(raw, previous)
    if (!entry) {
      return { status: 400, body: { ok: false, error: 'invalid', message: 'An entry needs a valid date and some text.' } }
    }
    if (!previous && store.entries.length >= MAX_ENTRIES) {
      return { status: 409, body: { ok: false, error: 'limit', message: `The journal holds at most ${MAX_ENTRIES} entries.` } }
    }
    if (previous) store.entries[index] = entry
    else store.entries.push(entry)
    await persist()
    return { status: 200, body: { ok: true, entries: sorted(), entry } }
  }

  async function remove(raw) {
    await ensureLoaded()
    const id = raw && typeof raw.id === 'string' ? raw.id : ''
    const index = store.entries.findIndex((entry) => entry.id === id)
    if (index < 0) {
      return { status: 404, body: { ok: false, error: 'missing', message: 'That entry no longer exists.' } }
    }
    store.entries.splice(index, 1)
    await persist()
    return { status: 200, body: { ok: true, entries: sorted() } }
  }

  function state() {
    return { ok: true, entries: sorted(), path: journalPath, warning: loadWarning }
  }

  async function handle(request, response) {
    let pathname = ROUTE
    try {
      pathname = new URL(request.url || ROUTE, 'http://localhost').pathname
    } catch {
      pathname = ROUTE
    }
    if (pathname !== ROUTE) {
      return send(response, 404, { ok: false, error: 'not-found', message: 'Unknown journal route.' })
    }
    if (request.method === 'HEAD') {
      response.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
      response.end()
      return
    }
    try {
      if (request.method === 'GET') {
        await ensureLoaded()
        return send(response, 200, state())
      }
      if (request.method !== 'POST') {
        response.setHeader('allow', 'GET, HEAD, POST')
        return send(response, 405, { ok: false, error: 'method', message: 'Use GET or POST.' })
      }
      if (!sameOrigin(request)) {
        return send(response, 403, { ok: false, error: 'origin', message: 'Cross-origin journal writes are refused.' })
      }
      const body = await readJson(request)
      if (!body || typeof body !== 'object') {
        return send(response, 400, { ok: false, error: 'invalid', message: 'Expected a JSON object body.' })
      }
      let result
      if (body.action === 'save') {
        result = await exclusive(() => save(body.entry))
      } else if (body.action === 'delete') {
        result = await exclusive(() => remove(body))
      } else {
        result = { status: 400, body: { ok: false, error: 'action', message: 'Unknown journal action.' } }
      }
      return send(response, result.status, result.body)
    } catch (error) {
      const status = error && typeof error.status === 'number' ? error.status : 500
      return send(response, status, {
        ok: false,
        error: status === 500 ? 'internal' : 'request',
        message: error && error.message ? String(error.message) : 'Unexpected journal error.',
      })
    }
  }

  ctx.effect(
    () => ctx.webServer.register({ kind: 'exact', path: ROUTE, handler: handle }),
    'life-journey: journal api',
  )
}

function send(response, status, payload) {
  const body = Buffer.from(JSON.stringify(payload), 'utf8')
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': String(body.length),
    'cache-control': 'no-store',
  })
  response.end(body)
}

function sameOrigin(request) {
  const origin = request.headers.origin
  if (typeof origin !== 'string' || origin === '') return true
  try {
    return new URL(origin).host === request.headers.host
  } catch {
    return false
  }
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let size = 0
    const chunks = []
    request.on('data', (chunk) => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('The request body is too large.'), { status: 413 }))
        request.destroy()
        return
      }
      chunks.push(chunk)
    })
    request.on('end', () => {
      try {
        const text = Buffer.concat(chunks).toString('utf8')
        resolve(text === '' ? null : JSON.parse(text))
      } catch {
        reject(Object.assign(new Error('The request body is not valid JSON.'), { status: 400 }))
      }
    })
    request.on('error', reject)
  })
}

function trimText(value, limit) {
  if (typeof value !== 'string') return ''
  const text = value.trim()
  return text.length > limit ? text.slice(0, limit) : text
}

function normalizeEntry(raw, previous) {
  if (!raw || typeof raw !== 'object') return null
  const fallbackDate = previous ? previous.date : null
  const date = typeof raw.date === 'string' && ISO_DATE.test(raw.date) ? raw.date : fallbackDate
  if (!date) return null
  const title = trimText(raw.title, MAX_TITLE)
  const content = trimText(raw.content, MAX_CONTENT)
  if (title === '' && content === '') return null
  const now = new Date().toISOString()
  const tag = TAGS.has(raw.tag) ? raw.tag : previous ? previous.tag : 'other'
  const id = previous
    ? previous.id
    : typeof raw.id === 'string' && ENTRY_ID.test(raw.id)
      ? raw.id
      : randomUUID()
  const createdAt = previous
    ? previous.createdAt
    : typeof raw.createdAt === 'string' && !Number.isNaN(Date.parse(raw.createdAt))
      ? raw.createdAt
      : now
  return {
    id,
    date,
    tag,
    title,
    content,
    createdAt,
    updatedAt: previous ? now : typeof raw.updatedAt === 'string' ? raw.updatedAt : now,
  }
}
