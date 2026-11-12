# 【南山】成长历程（@wangnanshan/life-journey）

DSH 左侧栏里的个人成长记录面板。点开侧栏图标即可写下一条成长记录，按时间线回顾。

## 数据在哪里

所有记录保存在本机的一个 JSON 文件里：

```
$DSH_HOME/life-journey/journal.json
```

- 默认 `$DSH_HOME` 是 `~/.dsh`，所以完整路径通常是 `~/.dsh/life-journey/journal.json`。
- 文件是纯 JSON，可以直接复制、备份或迁移；退出 DSH、重启应用都不会丢失。
- 页面底部会显示当前实际使用的文件路径。

## 使用

1. 左侧栏「成长历程」图标进入面板。页面左侧是时间线，右侧是月历。
2. 「写一条」：选择日期与方向（成长／学习／工作／生活／身体／关系／其他），填写标题和正文。
3. 月历里有记录的日子会带一个小圆点；点某一天即筛选出当天的记录，再点一次取消。
   在空白的一天点击后可以直接「在这一天写一条」，补记过去的经历。
4. 月历可翻月，「今天」回到当月并选中今天；底部显示当月记录条数。
5. 时间线上悬停记录可以「编辑」或「删除」；删除需要再确认一次。
6. 顶部按方向筛选，统计卡显示记录条数、记录天数与起始日期。

## 实现

- Host 半点 `index.js` 注册 `GET/POST /api/life-journey`：GET 返回全部记录与文件路径，POST 只接受 `save` 或 `delete` 一个动作。写入按顺序串行，并通过临时文件 + rename 原子替换，避免写坏数据。
- Client 半点 `client.js` 注册 `sidebar.panellist`（侧栏图标）与 `main`（同名面板页）。面板为两栏布局：左栏统计、筛选、编辑表单与时间线，右栏是带记录圆点的月历；窄屏时月历移到最上方。
- 只监听本机回环地址的 DSH Web 服务；写入请求会拒绝跨站来源。

## 命名约定（改包名时三处一起改）

`patch` 里 `insert` 的 `name` 必须等于 `package.json` 的 `name`，改名时以下三处要保持一致，否则安装会报 “patch 的 name 与包名一致”：

| 位置 | 字段 |
|---|---|
| `package.json` | `name` |
| `cordis.patch.yml` | `insert[].name` |
| `client.js` | `window.__ModuleLoader__.load({ id })` 的 `id` |

`patch` 里的 `id`（这里是 `life-journey`）是行 id，与包名无关，改名时**不要**动它，否则面板 key、接口路径等都要跟着改。改完执行“移除 bundle → 重新安装”，让 profile 的依赖名、软链和 bundle 列表同步到新名字。

## 卸载

在 设置 → 插件 中关闭或移除本 bundle。`journal.json` 不会被删除；需要时手动删除 `~/.dsh/life-journey/` 即可。

## 许可证

MIT，见 [LICENSE](LICENSE)。
