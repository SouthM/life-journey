window.__ModuleLoader__.load({
  id: '@wangnanshan/life-journey',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PANEL_ID = 'life-journey';
    const API = '/api/life-journey';
    const NS = 'life-journey';
    const TAGS = ['growth', 'learning', 'work', 'life', 'health', 'relation', 'other'];

    const DICTIONARIES = {
      zh: {
        'nav.title': '【南山】成长历程',
        'page.title': '【南山】成长历程',
        'page.subtitle': '把每一步都记下来，内容只保存在这台电脑上。',
        'action.new': '写一条',
        'action.back': '返回对话',
        'action.save': '保存',
        'action.cancel': '取消',
        'action.edit': '编辑',
        'action.delete': '删除',
        'action.retry': '重新加载',
        'action.keep': '保留',
        'confirm.delete': '确认删除这条记录？',
        'stats.total': '记录条数',
        'stats.days': '记录天数',
        'stats.since': '开始于',
        'stats.unit.entries': '条',
        'stats.unit.days': '天',
        'filter.all': '全部',
        'filter.clearDate': '取消日期筛选',
        'calendar.label': '月历',
        'calendar.prev': '上个月',
        'calendar.next': '下个月',
        'calendar.today': '今天',
        'calendar.monthSummary': '本月 {n} 条记录',
        'calendar.monthSummaryOne': '本月 {n} 条记录',
        'weekday.mon': '一',
        'weekday.tue': '二',
        'weekday.wed': '三',
        'weekday.thu': '四',
        'weekday.fri': '五',
        'weekday.sat': '六',
        'weekday.sun': '日',
        'empty.day.title': '这天还没有记录',
        'empty.day.body': '选中的这一天还是空的，现在补上也来得及。',
        'empty.day.cta': '在这一天写一条',
        'form.new': '新的一条',
        'form.edit': '编辑这一条',
        'form.date': '日期',
        'form.tag': '方向',
        'form.title': '标题',
        'form.titlePlaceholder': '给这一刻起个名字',
        'form.content': '发生了什么',
        'form.contentPlaceholder': '今天学到了什么、尝试了什么、改变了什么？',
        'empty.title': '从第一条开始',
        'empty.body': '写下一件值得记住的小事，它会在时间线上留下来。',
        'empty.cta': '写下第一条',
        'loading': '正在读取你的成长记录…',
        'error.load': '没能读取成长记录。',
        'error.save': '没能保存这条记录。',
        'error.delete': '没能删除这条记录。',
        'notice.saved': '已保存到本机',
        'storage': '保存在',
        'yearSuffix': '年',
        'tag.growth': '成长',
        'tag.learning': '学习',
        'tag.work': '工作',
        'tag.life': '生活',
        'tag.health': '身体',
        'tag.relation': '关系',
        'tag.other': '其他',
      },
      en: {
        'nav.title': '【南山】Life journey',
        'page.title': '【南山】Life journey',
        'page.subtitle': 'Keep every step. Entries stay on this computer only.',
        'action.new': 'New entry',
        'action.back': 'Back to conversation',
        'action.save': 'Save',
        'action.cancel': 'Cancel',
        'action.edit': 'Edit',
        'action.delete': 'Delete',
        'action.retry': 'Try again',
        'action.keep': 'Keep',
        'confirm.delete': 'Delete this entry?',
        'stats.total': 'Entries',
        'stats.days': 'Days recorded',
        'stats.since': 'Started',
        'stats.unit.entries': '',
        'stats.unit.days': '',
        'filter.all': 'All',
        'filter.clearDate': 'Clear date filter',
        'calendar.label': 'Calendar',
        'calendar.prev': 'Previous month',
        'calendar.next': 'Next month',
        'calendar.today': 'Today',
        'calendar.monthSummary': '{n} entries this month',
        'calendar.monthSummaryOne': '{n} entry this month',
        'weekday.mon': 'M',
        'weekday.tue': 'T',
        'weekday.wed': 'W',
        'weekday.thu': 'T',
        'weekday.fri': 'F',
        'weekday.sat': 'S',
        'weekday.sun': 'S',
        'empty.day.title': 'Nothing on this day',
        'empty.day.body': 'This day is still empty — there is room for one more memory.',
        'empty.day.cta': 'Write on this day',
        'form.new': 'New entry',
        'form.edit': 'Edit entry',
        'form.date': 'Date',
        'form.tag': 'Area',
        'form.title': 'Title',
        'form.titlePlaceholder': 'Name this moment',
        'form.content': 'What happened',
        'form.contentPlaceholder': 'What did you learn, try, or change today?',
        'empty.title': 'Start with the first entry',
        'empty.body': 'Write down one moment worth remembering; it stays on your timeline.',
        'empty.cta': 'Write the first entry',
        'loading': 'Reading your journey…',
        'error.load': 'Your journal could not be read.',
        'error.save': 'This entry could not be saved.',
        'error.delete': 'This entry could not be deleted.',
        'notice.saved': 'Saved on this computer',
        'storage': 'Stored at',
        'yearSuffix': '',
        'tag.growth': 'Growth',
        'tag.learning': 'Learning',
        'tag.work': 'Work',
        'tag.life': 'Life',
        'tag.health': 'Health',
        'tag.relation': 'Relations',
        'tag.other': 'Other',
      },
    };

    const STYLES = [
      '.jr{--jr-ink:74,65,54;--jr-green:#6fa87f;--jr-green-soft:143,195,154;--jr-apricot:#e9a06a;--jr-apricot-soft:242,185,139;--jr-rose:#d98586;--jr-lilac:#a58fc9;--jr-lilac-soft:185,167,214;--jr-sky:#7fa9c9;--jr-sky-soft:168,200,223;--jr-butter:#e6bf5f;--jr-brush:"Kaiti SC","STKaiti","KaiTi","Songti SC","SimSun",Georgia,serif;height:100%;overflow-y:auto;color:var(--dsw-alias-label-primary);font-family:inherit;-webkit-font-smoothing:antialiased;background-color:var(--dsw-alias-bg-base);background-image:radial-gradient(58% 38% at 88% -6%,rgba(242,185,139,.30),rgba(242,185,139,0) 70%),radial-gradient(46% 32% at 2% 4%,rgba(143,195,154,.28),rgba(143,195,154,0) 72%),radial-gradient(52% 40% at 104% 62%,rgba(185,167,214,.22),rgba(185,167,214,0) 72%),radial-gradient(48% 34% at -6% 96%,rgba(168,200,223,.24),rgba(168,200,223,0) 70%);background-repeat:no-repeat;background-attachment:local}',
      '.jr__inner{box-sizing:border-box;max-width:1060px;margin:0 auto;padding:calc(var(--dsh-frame-top-clearance,0px) + 32px) 32px 64px;position:relative}',
      '.jr__header{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;flex-wrap:wrap}',
      '.jr__heading{display:flex;align-items:center;gap:14px;min-width:0}',
      '.jr__mark{display:grid;place-items:center;flex:none;width:60px;height:60px;filter:drop-shadow(0 10px 16px rgba(var(--jr-ink),.16))}',
      '.jr__mark svg{display:block;width:100%;height:100%}',
      '.jr__titles{min-width:0}',
      '.jr__title{position:relative;display:inline-block;margin:0;font-family:var(--jr-brush);font-size:27px;font-weight:500;line-height:1.3;letter-spacing:.03em}',
      `.jr__title::after{content:"";display:block;height:9px;margin-top:3px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 10' preserveAspectRatio='none'%3E%3Cpath d='M2 7.4C22 3.6 44 5.9 62 4.6c18-1.3 38 1.9 56-1.4' fill='none' stroke='%23e9a06a' stroke-width='3' stroke-linecap='round' opacity='.9'/%3E%3Cpath d='M12 9.1c18-2 38-1 58-2' fill='none' stroke='%236fa87f' stroke-width='1.6' stroke-linecap='round' opacity='.65'/%3E%3C/svg%3E") no-repeat left center/100% 100%}`,
      '.jr__subtitle{margin:4px 0 0;font-size:13px;line-height:1.55;color:var(--dsw-alias-label-secondary)}',
      '.jr__actions{display:flex;gap:8px;flex-wrap:wrap}',
      '.jr__button{appearance:none;padding:8px 16px;border:1.5px solid rgba(var(--jr-ink),.28);border-radius:14px 12px 15px 11px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;line-height:1.2;cursor:pointer;box-shadow:0 2px 0 rgba(var(--jr-ink),.06);transition:transform .12s ease,background-color .12s ease}',
      '.jr__button:hover:not(:disabled){transform:translateY(-1px);background-color:rgba(242,185,139,.16)}',
      '.jr__button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}',
      '.jr__button:disabled{opacity:.45;cursor:default;transform:none}',
      '.jr__button--primary{border-color:rgba(111,168,127,.6);background-image:linear-gradient(115deg,rgba(143,195,154,.4),rgba(242,185,139,.34))}',
      '.jr__stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:24px}',
      '.jr__stat{padding:13px 15px;border:1.5px solid rgba(var(--jr-ink),.22);border-radius:18px 24px 16px 26px;background-color:var(--dsw-alias-bg-layer-1);background-repeat:no-repeat;box-shadow:0 14px 24px -24px rgba(var(--jr-ink),.75)}',
      '.jr__stat:nth-child(1){background-image:radial-gradient(120% 110% at 0% 0%,rgba(143,195,154,.36),rgba(143,195,154,0) 70%)}',
      '.jr__stat:nth-child(2){background-image:radial-gradient(120% 110% at 100% 0%,rgba(242,185,139,.34),rgba(242,185,139,0) 70%)}',
      '.jr__stat:nth-child(3){background-image:radial-gradient(120% 110% at 50% 100%,rgba(185,167,214,.30),rgba(185,167,214,0) 72%)}',
      '.jr__stat-label{display:block;font-size:12px;line-height:1.4;color:var(--dsw-alias-label-secondary)}',
      '.jr__stat-value{margin-top:6px;font-family:var(--jr-brush);font-size:25px;font-weight:600;line-height:1.15;font-variant-numeric:tabular-nums}',
      '.jr__stat-unit{margin-left:3px;font-family:inherit;font-size:12px;font-weight:400;color:var(--dsw-alias-label-secondary)}',
      '.jr__filters{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 4px}',
      '.jr__chip{appearance:none;padding:5px 12px;border:1.5px solid rgba(var(--jr-ink),.22);border-radius:999px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:1.3;cursor:pointer;transition:background-color .12s ease}',
      '.jr__chip:hover{background-color:rgba(143,195,154,.16);color:var(--dsw-alias-label-primary)}',
      '.jr__chip:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}',
      '.jr__chip.is-active{border-color:rgba(111,168,127,.62);background-color:rgba(143,195,154,.26);color:var(--dsw-alias-label-primary);font-weight:600}',
      '.jr__chip--date{border-color:rgba(233,160,106,.62);background-color:rgba(242,185,139,.24);color:var(--dsw-alias-label-primary)}',
      '.jr__layout{display:grid;grid-template-columns:minmax(0,1fr) 264px;gap:28px;align-items:start;margin-top:24px}',
      '.jr__main{min-width:0}',
      '.jr__aside{position:sticky;top:12px;align-self:start;min-width:0}',
      '.jr__calendar{padding:14px 13px 12px;border:1.5px solid rgba(var(--jr-ink),.24);border-radius:20px 26px 18px 28px;background-color:var(--dsw-alias-bg-layer-1);background-image:radial-gradient(130% 90% at 100% 0%,rgba(242,185,139,.22),rgba(242,185,139,0) 62%),radial-gradient(90% 70% at 0% 100%,rgba(143,195,154,.20),rgba(143,195,154,0) 60%);box-shadow:0 16px 28px -26px rgba(var(--jr-ink),.8)}',
      '.jr__cal-head{display:flex;align-items:center;gap:4px;margin-bottom:10px}',
      '.jr__cal-title{flex:1;min-width:0;font-family:var(--jr-brush);font-size:16px;font-weight:500;line-height:1.4;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.jr__cal-nav{appearance:none;display:grid;place-items:center;flex:none;width:26px;height:26px;padding:0;border:1.5px solid transparent;border-radius:50% 46% 52% 48%;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:14px;line-height:1;cursor:pointer}',
      '.jr__cal-nav:hover{background-color:rgba(168,200,223,.26);color:var(--dsw-alias-label-primary)}',
      '.jr__cal-nav:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.jr__cal-weekdays{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:4px}',
      '.jr__cal-weekday{text-align:center;font-size:10px;line-height:1.6;letter-spacing:.04em;color:var(--dsw-alias-label-secondary)}',
      '.jr__cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}',
      '.jr__cal-blank{height:30px}',
      '.jr__cal-day{box-sizing:border-box;position:relative;display:grid;place-items:center;height:30px;padding:0;border:1.5px solid transparent;border-radius:50% 46% 52% 48%;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;line-height:1;cursor:pointer;font-variant-numeric:tabular-nums;transition:background-color .12s ease}',
      '.jr__cal-day:hover{background-color:rgba(168,200,223,.28)}',
      '.jr__cal-day:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.jr__cal-day.is-today{border:1.5px dashed rgba(var(--jr-ink),.45)}',
      '.jr__cal-day.is-selected{border:2px solid rgba(111,168,127,.75);background-color:rgba(143,195,154,.26);font-weight:700}',
      '.jr__cal-dot{position:absolute;left:50%;bottom:3px;width:6px;height:6px;border-radius:50% 45% 55% 48%;transform:translateX(-50%);background:var(--jr-apricot);box-shadow:0 0 0 2px rgba(242,185,139,.3)}',
      '.jr__cal-foot{display:flex;align-items:center;gap:8px;margin-top:12px;padding-top:10px;border-top:1.5px dashed rgba(var(--jr-ink),.2)}',
      '.jr__cal-today{appearance:none;flex:none;padding:3px 10px;border:1.5px solid rgba(111,168,127,.55);border-radius:999px;background-color:rgba(143,195,154,.18);color:var(--dsw-alias-label-primary);font:inherit;font-size:11px;line-height:1.5;cursor:pointer}',
      '.jr__cal-today:hover{background-color:rgba(143,195,154,.32)}',
      '.jr__cal-today:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.jr__cal-count{flex:1;min-width:0;font-size:11px;line-height:1.4;color:var(--dsw-alias-label-secondary);text-align:right}',
      '.jr__year{display:flex;align-items:center;gap:12px;margin:28px 0 8px;font-family:var(--jr-brush);font-size:17px;font-weight:500;letter-spacing:.08em;color:var(--dsw-alias-label-secondary)}',
      '.jr__year::after{content:"";flex:1;height:2px;border-radius:2px;background:linear-gradient(90deg,rgba(var(--jr-ink),.3),rgba(var(--jr-ink),0))}',
      '.jr__entry{display:grid;grid-template-columns:72px 22px minmax(0,1fr)}',
      '.jr__date{display:flex;flex-direction:column;align-items:flex-end;gap:2px;padding:15px 10px 0 0;text-align:right}',
      '.jr__date-main{font-family:var(--jr-brush);font-size:15px;font-weight:600;line-height:1.3;font-variant-numeric:tabular-nums}',
      '.jr__date-year{font-size:11px;line-height:1.3;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}',
      '.jr__spine{position:relative}',
      '.jr__spine::before{content:"";position:absolute;left:50%;top:0;bottom:0;width:0;transform:translateX(-50%);border-left:2px dotted rgba(var(--jr-ink),.3)}',
      '.jr__entry:first-of-type .jr__spine::before{top:18px}',
      '.jr__entry:last-of-type .jr__spine::before{bottom:auto;height:18px}',
      '.jr__dot{position:absolute;left:50%;top:16px;width:13px;height:13px;border-radius:52% 46% 54% 48%;transform:translateX(-50%);background:var(--jr-green);box-shadow:0 0 0 4px var(--dsw-alias-bg-base);z-index:1}',
      '.jr__entry--growth .jr__dot{background:#6fa87f}',
      '.jr__entry--learning .jr__dot{background:#7fa9c9}',
      '.jr__entry--work .jr__dot{background:#e9a06a}',
      '.jr__entry--life .jr__dot{background:#e6bf5f}',
      '.jr__entry--health .jr__dot{background:#d98586}',
      '.jr__entry--relation .jr__dot{background:#a58fc9}',
      '.jr__entry--other .jr__dot{background:#8f867a}',
      '.jr__body{min-width:0;margin:0 0 12px;padding:13px 17px 15px;border:1.5px solid rgba(var(--jr-ink),.24);border-radius:10px 24px 12px 26px;background-color:var(--dsw-alias-bg-layer-1);box-shadow:0 16px 26px -26px rgba(var(--jr-ink),.85)}',
      '.jr__entry:hover .jr__body{border-color:rgba(var(--jr-ink),.38);box-shadow:0 18px 28px -24px rgba(var(--jr-ink),.9)}',
      '.jr__entry-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
      '.jr__tag{flex:none;padding:2px 9px;border-radius:10px 12px 9px 13px;background-color:rgba(143,195,154,.22);color:var(--dsw-alias-label-primary);font-size:11px;line-height:1.6}',
      '.jr__tag--growth{background-color:rgba(143,195,154,.24)}',
      '.jr__tag--learning{background-color:rgba(168,200,223,.26)}',
      '.jr__tag--work{background-color:rgba(242,185,139,.28)}',
      '.jr__tag--life{background-color:rgba(230,191,95,.26)}',
      '.jr__tag--health{background-color:rgba(217,133,134,.22)}',
      '.jr__tag--relation{background-color:rgba(185,167,214,.26)}',
      '.jr__tag--other{background-color:rgba(var(--jr-ink),.12)}',
      '.jr__entry-title{margin:0;font-family:var(--jr-brush);font-size:16px;font-weight:500;line-height:1.5;min-width:0;overflow-wrap:anywhere}',
      '.jr__entry-actions{margin-left:auto;display:flex;gap:4px;opacity:0;transition:opacity .12s ease}',
      '.jr__entry:hover .jr__entry-actions,.jr__entry:focus-within .jr__entry-actions{opacity:1}',
      '@media (hover:none){.jr__entry-actions{opacity:1}}',
      '.jr__mini{appearance:none;padding:3px 9px;border:1.5px solid transparent;border-radius:10px 9px 11px 8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:1.4;cursor:pointer}',
      '.jr__mini:hover{background-color:rgba(var(--jr-ink),.08);color:var(--dsw-alias-label-primary)}',
      '.jr__mini:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.jr__mini--danger:hover{background-color:rgba(217,133,134,.16);color:var(--dsw-alias-state-error-primary)}',
      '.jr__entry-text{margin:8px 0 0;font-size:13px;line-height:1.85;white-space:pre-wrap;overflow-wrap:anywhere}',
      '.jr__composer{margin-top:24px;padding:16px 16px 14px;border:1.5px dashed rgba(var(--jr-ink),.38);border-radius:20px 26px 18px 28px;background-color:var(--dsw-alias-bg-layer-1);background-image:radial-gradient(120% 90% at 0% 0%,rgba(143,195,154,.16),rgba(143,195,154,0) 60%),radial-gradient(120% 90% at 100% 100%,rgba(242,185,139,.16),rgba(242,185,139,0) 60%)}',
      '.jr__composer-title{margin:0 0 14px;font-family:var(--jr-brush);font-size:17px;font-weight:500;line-height:1.4;letter-spacing:.02em}',
      '.jr__field{display:block;min-width:0;margin-bottom:12px}',
      '.jr__field-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}',
      '.jr__label{display:block;margin-bottom:5px;font-size:12px;line-height:1.3;color:var(--dsw-alias-label-secondary)}',
      '.jr__input,.jr__textarea,.jr__select{box-sizing:border-box;display:block;width:100%;padding:8px 11px;border:1.5px solid rgba(var(--jr-ink),.22);border-radius:12px 14px 11px 15px;background-color:var(--dsw-alias-bg-layer-2);color:inherit;font:inherit;font-size:13px;line-height:1.6;outline:none}',
      '.jr__textarea{min-height:132px;resize:vertical;line-height:1.8}',
      '.jr__input:focus,.jr__textarea:focus,.jr__select:focus{border-color:rgba(111,168,127,.7);box-shadow:0 0 0 3px rgba(143,195,154,.2)}',
      '.jr__input::placeholder,.jr__textarea::placeholder{color:var(--dsw-alias-label-secondary);opacity:.8}',
      '.jr__composer-foot{display:flex;align-items:center;gap:8px;margin-top:14px}',
      '.jr__empty{margin-top:26px;padding:38px 24px;border:1.5px dashed rgba(var(--jr-ink),.32);border-radius:24px 30px 22px 32px;background-color:var(--dsw-alias-bg-layer-1);background-image:radial-gradient(80% 70% at 50% 0%,rgba(242,185,139,.18),rgba(242,185,139,0) 70%),radial-gradient(70% 60% at 50% 100%,rgba(143,195,154,.18),rgba(143,195,154,0) 70%);text-align:center}',
      '.jr__empty-mark{display:grid;place-items:center;width:64px;height:64px;margin:0 auto 14px;filter:drop-shadow(0 10px 16px rgba(var(--jr-ink),.16))}',
      '.jr__empty-mark svg{display:block;width:100%;height:100%}',
      '.jr__empty-title{margin:0;font-family:var(--jr-brush);font-size:19px;font-weight:500;line-height:1.4;letter-spacing:.02em}',
      '.jr__empty-body{margin:8px auto 20px;max-width:380px;font-size:13px;line-height:1.7;color:var(--dsw-alias-label-secondary)}',
      '.jr__status{margin-top:16px;font-size:12px;line-height:1.6;color:var(--dsw-alias-label-secondary)}',
      '.jr__status--error{color:var(--dsw-alias-state-error-primary)}',
      '.jr__notice{display:inline-block;margin-top:16px;padding:3px 10px;border-radius:999px;background-color:rgba(143,195,154,.2);font-size:12px;line-height:1.5;color:var(--dsw-alias-label-primary)}',
      '.jr__loading{padding:64px 0;font-family:var(--jr-brush);font-size:15px;letter-spacing:.04em;color:var(--dsw-alias-label-secondary);text-align:center}',
      '.jr__footer{margin-top:32px;font-size:11px;line-height:1.6;color:var(--dsw-alias-label-secondary);word-break:break-all}',
      '.jr__footer code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;background-color:rgba(var(--jr-ink),.08);padding:1px 6px;border-radius:6px}',
      '.jr__error{padding:32px 0;text-align:center}',
      '.jr__error-text{margin:0 0 16px;font-size:13px;line-height:1.6;color:var(--dsw-alias-state-error-primary)}',
      '@media (max-width:980px){.jr__layout{grid-template-columns:minmax(0,1fr);gap:18px}.jr__aside{position:static;order:-1}.jr__cal-day{height:34px}.jr__cal-blank{height:34px}}',
      '@media (max-width:720px){.jr__inner{padding-left:18px;padding-right:18px}.jr__title{font-size:23px}.jr__stats{grid-template-columns:repeat(2,minmax(0,1fr))}.jr__entry{grid-template-columns:56px 18px minmax(0,1fr)}.jr__field-row{grid-template-columns:minmax(0,1fr)}}',
    ].join('');

    function JourneyIcon(props) {
      const size = typeof props.size === 'number' ? props.size : 16;
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        focusable: 'false',
        style: { display: 'block' },
      },
        h('path', { d: 'M8 13.2V7.4' }),
        h('path', { d: 'M8 9.1C6.2 9.1 4.7 7.8 4.7 6.1c1.8 0 3.3 1.3 3.3 3Z' }),
        h('path', { d: 'M8 8.3c1.8 0 3.3-1.3 3.3-3-1.8 0-3.3 1.3-3.3 3Z' }),
        h('path', { d: 'M3.1 13.4h9.8' }),
      );
    }

    /** Painted sprout used inside the page; the sidebar rail keeps the line icon. */
    function JourneyMark(props) {
      const size = typeof props.size === 'number' ? props.size : 60;
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 64 64',
        'aria-hidden': 'true',
        focusable: 'false',
        style: { display: 'block' },
      },
        h('defs', null,
          h('linearGradient', {
            id: 'jr-mark-wash',
            x1: '10',
            y1: '6',
            x2: '54',
            y2: '58',
            gradientUnits: 'userSpaceOnUse',
          },
            h('stop', { offset: '0', stopColor: '#e9f2e4' }),
            h('stop', { offset: '1', stopColor: '#f8e9d7' }),
          ),
        ),
        h('path', {
          d: 'M13 44c-2-13 5-27 18-31 12-4 24 4 25 15 1 12-9 22-24 22-9 0-17-2-19-6Z',
          fill: 'url(#jr-mark-wash)',
        }),
        h('path', { d: 'M32 46V25', stroke: '#4f7a5c', strokeWidth: '3', strokeLinecap: 'round' }),
        h('path', { d: 'M32 33c-7.5 0-13-5-13-11.5C26.5 21.5 32 26.5 32 33Z', fill: '#7fb08b' }),
        h('path', { d: 'M32 28c7.5 0 13-5 13-11.5C37.5 16.5 32 21.5 32 28Z', fill: '#a6c9a4' }),
        h('path', { d: 'M20 46h24', stroke: '#c0916a', strokeWidth: '3', strokeLinecap: 'round' }),
        h('circle', { cx: '44', cy: '17', r: '3', fill: '#e9a06a' }),
        h('circle', { cx: '17', cy: '19', r: '2', fill: '#b9a7d6' }),
      );
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        const localeService = ctx.get('locale');
        const layoutService = ctx.get('layout');

        if (localeService && typeof localeService.register === 'function') {
          ctx.effect(() => localeService.register(NS, 'zh', DICTIONARIES.zh), 'life-journey: zh strings');
          ctx.effect(() => localeService.register(NS, 'zh-CN', DICTIONARIES.zh), 'life-journey: zh-CN strings');
          ctx.effect(() => localeService.register(NS, 'en', DICTIONARIES.en), 'life-journey: en strings');
        }

        const translate = localeService && typeof localeService.bind === 'function'
          ? localeService.bind(NS)
          : (key) => DICTIONARIES.en[key] || key;

        function activeLocaleTag() {
          if (!localeService || typeof localeService.getSnapshot !== 'function') return 'en';
          const snapshot = localeService.getSnapshot();
          return snapshot && typeof snapshot.active === 'string' ? snapshot.active : 'en';
        }

        function useTranslate() {
          const [, increment] = React.useState(0);
          React.useEffect(() => {
            if (!localeService || typeof localeService.subscribe !== 'function') return undefined;
            return localeService.subscribe(() => increment((value) => value + 1));
          }, []);
          return translate;
        }

        function formatDay(iso) {
          const date = new Date(`${iso}T00:00:00`);
          if (Number.isNaN(date.getTime())) return iso.slice(5).replace('-', '/');
          try {
            return date.toLocaleDateString(activeLocaleTag(), { month: 'short', day: 'numeric' });
          } catch (error) {
            return iso.slice(5).replace('-', '/');
          }
        }

        function todayIso() {
          const now = new Date();
          const pad = (value) => String(value).padStart(2, '0');
          return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
        }

        function groupByYear(rows) {
          const groups = [];
          let current = null;
          for (const entry of rows) {
            const year = entry.date.slice(0, 4);
            if (!current || current.year !== year) {
              current = { year, rows: [] };
              groups.push(current);
            }
            current.rows.push(entry);
          }
          return groups;
        }

        const WEEKDAY_KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

        function monthKeyOf(date) {
          return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        }

        function shiftMonthKey(key, delta) {
          const parts = key.split('-').map(Number);
          return monthKeyOf(new Date(parts[0], parts[1] - 1 + delta, 1));
        }

        function monthTitleOf(key) {
          const parts = key.split('-').map(Number);
          try {
            return new Date(parts[0], parts[1] - 1, 1).toLocaleDateString(activeLocaleTag(), {
              year: 'numeric',
              month: 'long',
            });
          } catch (error) {
            return `${parts[0]}-${String(parts[1]).padStart(2, '0')}`;
          }
        }

        /** Month grid with one dot per day that already holds an entry. */
        function CalendarPanel(props) {
          const t = props.t;
          const parts = props.month.split('-').map(Number);
          const year = parts[0];
          const month = parts[1];
          const total = new Date(year, month, 0).getDate();
          const offset = (new Date(year, month - 1, 1).getDay() + 6) % 7;
          const cells = [];

          for (let blank = 0; blank < offset; blank += 1) {
            cells.push(h('span', { key: `blank-${blank}`, className: 'jr__cal-blank' }));
          }
          for (let day = 1; day <= total; day += 1) {
            const iso = `${props.month}-${String(day).padStart(2, '0')}`;
            const count = props.counts.get(iso) || 0;
            const classes = ['jr__cal-day'];
            if (iso === props.today) classes.push('is-today');
            if (iso === props.selected) classes.push('is-selected');
            cells.push(h('button', {
              key: iso,
              type: 'button',
              className: classes.join(' '),
              title: count > 0 ? `${iso} · ${count}` : iso,
              'aria-pressed': iso === props.selected,
              onClick: () => props.onSelect(iso),
            },
              h('span', null, String(day)),
              count > 0 ? h('span', { className: 'jr__cal-dot' }) : null,
            ));
          }

          const monthTotal = props.entries.filter((entry) => entry.date.indexOf(`${props.month}-`) === 0).length;
          const summary = (monthTotal === 1 ? t('calendar.monthSummaryOne') : t('calendar.monthSummary'))
            .replace('{n}', String(monthTotal));

          return h('section', {
            className: 'jr__calendar',
            role: 'group',
            'aria-label': t('calendar.label'),
          },
            h('div', { className: 'jr__cal-head' },
              h('button', {
                type: 'button',
                className: 'jr__cal-nav',
                'aria-label': t('calendar.prev'),
                onClick: () => props.onShift(-1),
              }, '\u2039'),
              h('div', { className: 'jr__cal-title' }, monthTitleOf(props.month)),
              h('button', {
                type: 'button',
                className: 'jr__cal-nav',
                'aria-label': t('calendar.next'),
                onClick: () => props.onShift(1),
              }, '\u203a'),
            ),
            h('div', { className: 'jr__cal-weekdays' },
              WEEKDAY_KEYS.map((day) => h('span', { key: day, className: 'jr__cal-weekday' }, t(`weekday.${day}`)))),
            h('div', { className: 'jr__cal-grid' }, cells),
            h('div', { className: 'jr__cal-foot' },
              h('button', { type: 'button', className: 'jr__cal-today', onClick: props.onToday }, t('calendar.today')),
              h('span', { className: 'jr__cal-count' }, summary),
            ),
          );
        }

        function JourneyPage() {
          const t = useTranslate();
          const [status, setStatus] = React.useState('loading');
          const [entries, setEntries] = React.useState([]);
          const [warning, setWarning] = React.useState(null);
          const [storagePath, setStoragePath] = React.useState('');
          const [failure, setFailure] = React.useState(null);
          const [notice, setNotice] = React.useState(null);
          const [composer, setComposer] = React.useState(null);
          const [filter, setFilter] = React.useState('all');
          const [pendingDelete, setPendingDelete] = React.useState(null);
          const [busy, setBusy] = React.useState(false);
          const [month, setMonth] = React.useState(() => monthKeyOf(new Date()));
          const [selectedDate, setSelectedDate] = React.useState(null);
          const scrollRef = React.useRef(null);

          const load = React.useCallback(async (signal) => {
            setStatus('loading');
            setFailure(null);
            try {
              const response = await fetch(API, { method: 'GET', credentials: 'same-origin', signal });
              const payload = await response.json().catch(() => null);
              if (!response.ok || !payload || payload.ok !== true) {
                throw new Error((payload && payload.message) || 'journal request failed');
              }
              const rows = Array.isArray(payload.entries) ? payload.entries : [];
              setEntries(rows);
              setStoragePath(typeof payload.path === 'string' ? payload.path : '');
              setWarning(typeof payload.warning === 'string' ? payload.warning : null);
              // Land the calendar on the month holding the newest entry when the
              // current month has nothing to show yet.
              if (rows.length > 0) {
                const currentMonth = monthKeyOf(new Date());
                if (!rows.some((entry) => entry.date.indexOf(`${currentMonth}-`) === 0)) {
                  setMonth(rows[0].date.slice(0, 7));
                }
              }
              setStatus('ready');
            } catch (error) {
              if (error && error.name === 'AbortError') return;
              setFailure(t('error.load'));
              setStatus('error');
            }
          }, [t]);

          React.useEffect(() => {
            const controller = new AbortController();
            load(controller.signal);
            return () => controller.abort();
          }, [load]);

          React.useEffect(() => {
            if (!notice) return undefined;
            const timer = setTimeout(() => setNotice(null), 2600);
            return () => clearTimeout(timer);
          }, [notice]);

          React.useEffect(() => {
            if (composer && scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
          }, [composer]);

          React.useEffect(() => {
            if (!pendingDelete) return undefined;
            if (!entries.some((entry) => entry.id === pendingDelete)) setPendingDelete(null);
            return undefined;
          }, [entries, pendingDelete]);

          async function mutate(body) {
            setBusy(true);
            setFailure(null);
            try {
              const response = await fetch(API, {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(body),
              });
              const payload = await response.json().catch(() => null);
              if (!response.ok || !payload || payload.ok !== true) {
                throw new Error((payload && payload.message) || 'journal request failed');
              }
              setEntries(Array.isArray(payload.entries) ? payload.entries : []);
              return payload;
            } catch (error) {
              setFailure(t(body.action === 'delete' ? 'error.delete' : 'error.save'));
              return null;
            } finally {
              setBusy(false);
            }
          }

          function openComposer(mode, entry, date) {
            setFailure(null);
            setNotice(null);
            setPendingDelete(null);
            setComposer({
              mode,
              draft: entry
                ? { id: entry.id, date: entry.date, tag: entry.tag, title: entry.title, content: entry.content }
                : {
                    id: null,
                    date: typeof date === 'string' && date !== '' ? date : todayIso(),
                    tag: 'growth',
                    title: '',
                    content: '',
                  },
            });
          }

          function updateDraft(patch) {
            setComposer((current) => (current ? { ...current, draft: { ...current.draft, ...patch } } : current));
          }

          const draft = composer ? composer.draft : null;
          const draftEmpty = draft ? draft.title.trim() === '' && draft.content.trim() === '' : true;

          async function submit() {
            if (!composer || busy || draftEmpty) return;
            const payload = await mutate({ action: 'save', entry: composer.draft });
            if (payload) {
              const savedDate = composer.draft.date;
              setComposer(null);
              setFilter('all');
              setSelectedDate(null);
              if (typeof savedDate === 'string' && savedDate !== '') setMonth(savedDate.slice(0, 7));
              setNotice(t('notice.saved'));
            }
          }

          async function confirmDelete(id) {
            if (busy) return;
            const payload = await mutate({ action: 'delete', id });
            if (payload) setPendingDelete(null);
          }

          function goBack() {
            if (layoutService && typeof layoutService.selectPanel === 'function') layoutService.selectPanel(null);
          }

          function selectDate(iso) {
            setSelectedDate((current) => (current === iso ? null : iso));
            setMonth(iso.slice(0, 7));
          }

          function goToday() {
            setMonth(monthKeyOf(new Date()));
            setSelectedDate(todayIso());
          }

          const counts = React.useMemo(() => {
            const map = new Map();
            for (const entry of entries) map.set(entry.date, (map.get(entry.date) || 0) + 1);
            return map;
          }, [entries]);

          const visible = entries.filter((entry) => {
            if (filter !== 'all' && entry.tag !== filter) return false;
            if (selectedDate !== null && entry.date !== selectedDate) return false;
            return true;
          });
          const presentTags = TAGS.filter((tag) => entries.some((entry) => entry.tag === tag));
          const distinctDays = new Set(entries.map((entry) => entry.date)).size;
          const firstDate = entries.length > 0 ? entries[entries.length - 1].date : '';

          const header = h('header', { className: 'jr__header', key: 'header' },
            h('div', { className: 'jr__heading' },
              h('span', { className: 'jr__mark' }, h(JourneyMark, { size: 60 })),
              h('div', { className: 'jr__titles' },
                h('h1', { className: 'jr__title' }, t('page.title')),
                h('p', { className: 'jr__subtitle' }, t('page.subtitle')),
              ),
            ),
            h('div', { className: 'jr__actions' },
              status === 'ready'
                ? h('button', {
                    type: 'button',
                    className: 'jr__button jr__button--primary',
                    onClick: () => openComposer('new'),
                  }, t('action.new'))
                : null,
              h('button', { type: 'button', className: 'jr__button', onClick: goBack }, t('action.back')),
            ),
          );

          const children = [h('style', { key: 'styles' }, STYLES), header];

          if (failure) {
            children.push(h('p', { key: 'failure', className: 'jr__status jr__status--error' }, failure));
          } else if (notice) {
            children.push(h('div', { key: 'notice', className: 'jr__notice' }, t('notice.saved')));
          } else if (warning) {
            children.push(h('p', { key: 'warning', className: 'jr__status jr__status--error' }, warning));
          }

          if (status === 'loading') {
            children.push(h('div', { key: 'loading', className: 'jr__loading' }, t('loading')));
          }

          if (status === 'error') {
            children.push(h('div', { key: 'error', className: 'jr__error' },
              h('p', { className: 'jr__error-text' }, t('error.load')),
              h('button', {
                type: 'button',
                className: 'jr__button',
                onClick: () => { load(undefined); },
              }, t('action.retry')),
            ));
          }

          if (status === 'ready') {
            const mainRows = [];

            if (entries.length > 0) {
              mainRows.push(h('section', { key: 'stats', className: 'jr__stats' },
                h('div', { className: 'jr__stat' },
                  h('span', { className: 'jr__stat-label' }, t('stats.total')),
                  h('span', { className: 'jr__stat-value' }, String(entries.length),
                    t('stats.unit.entries') === '' ? null : h('span', { className: 'jr__stat-unit' }, t('stats.unit.entries'))),
                ),
                h('div', { className: 'jr__stat' },
                  h('span', { className: 'jr__stat-label' }, t('stats.days')),
                  h('span', { className: 'jr__stat-value' }, String(distinctDays),
                    t('stats.unit.days') === '' ? null : h('span', { className: 'jr__stat-unit' }, t('stats.unit.days'))),
                ),
                h('div', { className: 'jr__stat' },
                  h('span', { className: 'jr__stat-label' }, t('stats.since')),
                  h('span', { className: 'jr__stat-value' }, firstDate.replace(/-/g, '.')),
                ),
              ));
            }

            if (composer && draft) {
              mainRows.push(h('section', { key: 'composer', className: 'jr__composer' },
                h('h2', { className: 'jr__composer-title' }, composer.mode === 'edit' ? t('form.edit') : t('form.new')),
                h('div', { className: 'jr__field-row' },
                  h('label', { className: 'jr__field' },
                    h('span', { className: 'jr__label' }, t('form.date')),
                    h('input', {
                      type: 'date',
                      className: 'jr__input',
                      value: draft.date,
                      onChange: (event) => updateDraft({ date: event.target.value }),
                    }),
                  ),
                  h('label', { className: 'jr__field' },
                    h('span', { className: 'jr__label' }, t('form.tag')),
                    h('select', {
                      className: 'jr__select',
                      value: draft.tag,
                      onChange: (event) => updateDraft({ tag: event.target.value }),
                    }, TAGS.map((tag) => h('option', { key: tag, value: tag }, t(`tag.${tag}`)))),
                  ),
                ),
                h('label', { className: 'jr__field' },
                  h('span', { className: 'jr__label' }, t('form.title')),
                  h('input', {
                    type: 'text',
                    className: 'jr__input',
                    value: draft.title,
                    maxLength: 120,
                    placeholder: t('form.titlePlaceholder'),
                    onChange: (event) => updateDraft({ title: event.target.value }),
                  }),
                ),
                h('label', { className: 'jr__field' },
                  h('span', { className: 'jr__label' }, t('form.content')),
                  h('textarea', {
                    className: 'jr__textarea',
                    value: draft.content,
                    placeholder: t('form.contentPlaceholder'),
                    onChange: (event) => updateDraft({ content: event.target.value }),
                  }),
                ),
                h('div', { className: 'jr__composer-foot' },
                  h('button', {
                    type: 'button',
                    className: 'jr__button jr__button--primary',
                    disabled: busy || draftEmpty,
                    onClick: submit,
                  }, t('action.save')),
                  h('button', {
                    type: 'button',
                    className: 'jr__button',
                    onClick: () => setComposer(null),
                  }, t('action.cancel')),
                ),
              ));
            }

            if (entries.length === 0 && !composer) {
              mainRows.push(h('section', { key: 'empty', className: 'jr__empty' },
                h('span', { className: 'jr__empty-mark' }, h(JourneyMark, { size: 64 })),
                h('h2', { className: 'jr__empty-title' }, t('empty.title')),
                h('p', { className: 'jr__empty-body' }, t('empty.body')),
                h('button', {
                  type: 'button',
                  className: 'jr__button jr__button--primary',
                  onClick: () => openComposer('new'),
                }, t('empty.cta')),
              ));
            }

            if (entries.length > 0) {
              const chips = [h('button', {
                key: 'all',
                type: 'button',
                className: filter === 'all' ? 'jr__chip is-active' : 'jr__chip',
                onClick: () => setFilter('all'),
              }, t('filter.all'))];
              for (const tag of presentTags) {
                chips.push(h('button', {
                  key: tag,
                  type: 'button',
                  className: filter === tag ? 'jr__chip is-active' : 'jr__chip',
                  onClick: () => setFilter(tag),
                }, t(`tag.${tag}`)));
              }
              if (selectedDate !== null) {
                chips.push(h('button', {
                  key: 'selected-date',
                  type: 'button',
                  className: 'jr__chip jr__chip--date',
                  'aria-label': t('filter.clearDate'),
                  title: t('filter.clearDate'),
                  onClick: () => setSelectedDate(null),
                }, `${formatDay(selectedDate)} \u00d7`));
              }
              mainRows.push(h('div', { key: 'filters', className: 'jr__filters' }, chips));

              const timeline = [];
              for (const group of groupByYear(visible)) {
                timeline.push(h('div', { key: `year-${group.year}`, className: 'jr__year' },
                  `${group.year}${t('yearSuffix')}`));
                for (const entry of group.rows) {
                  const deleting = pendingDelete === entry.id;
                  const actions = deleting
                    ? [
                        h('button', {
                          key: 'confirm',
                          type: 'button',
                          className: 'jr__mini jr__mini--danger',
                          disabled: busy,
                          onClick: () => confirmDelete(entry.id),
                        }, t('action.delete')),
                        h('button', {
                          key: 'keep',
                          type: 'button',
                          className: 'jr__mini',
                          onClick: () => setPendingDelete(null),
                        }, t('action.keep')),
                      ]
                    : [
                        h('button', {
                          key: 'edit',
                          type: 'button',
                          className: 'jr__mini',
                          onClick: () => openComposer('edit', entry),
                        }, t('action.edit')),
                        h('button', {
                          key: 'delete',
                          type: 'button',
                          className: 'jr__mini jr__mini--danger',
                          onClick: () => setPendingDelete(entry.id),
                        }, t('action.delete')),
                      ];

                  timeline.push(h('article', { key: entry.id, className: `jr__entry jr__entry--${entry.tag}` },
                    h('div', { className: 'jr__date' },
                      h('span', { className: 'jr__date-main' }, formatDay(entry.date)),
                      h('span', { className: 'jr__date-year' }, entry.date.slice(0, 4)),
                    ),
                    h('div', { className: 'jr__spine' }, h('span', { className: 'jr__dot' })),
                    h('div', { className: 'jr__body' },
                      h('div', { className: 'jr__entry-head' },
                        h('span', { className: `jr__tag jr__tag--${entry.tag}` }, t(`tag.${entry.tag}`)),
                        entry.title === '' ? null : h('h3', { className: 'jr__entry-title' }, entry.title),
                        h('div', { className: 'jr__entry-actions' },
                          deleting ? h('span', { className: 'jr__tag' }, t('confirm.delete')) : null,
                          actions,
                        ),
                      ),
                      entry.content === '' ? null : h('p', { className: 'jr__entry-text' }, entry.content),
                    ),
                  ));
                }
              }
              if (visible.length === 0) {
                mainRows.push(h('section', { key: 'no-match', className: 'jr__empty' },
                  h('span', { className: 'jr__empty-mark' }, h(JourneyMark, { size: 64 })),
                  h('h2', { className: 'jr__empty-title' },
                    selectedDate !== null ? t('empty.day.title') : t('empty.title')),
                  h('p', { className: 'jr__empty-body' },
                    selectedDate !== null ? t('empty.day.body') : t('empty.body')),
                  selectedDate === null
                    ? null
                    : h('button', {
                        type: 'button',
                        className: 'jr__button jr__button--primary',
                        onClick: () => openComposer('new', null, selectedDate),
                      }, t('empty.day.cta')),
                ));
              } else {
                mainRows.push(h('div', { key: 'timeline', className: 'jr__timeline' }, timeline));
              }
            }

            children.push(h('div', { key: 'layout', className: 'jr__layout' },
              h('div', { key: 'main', className: 'jr__main' }, mainRows),
              h('aside', { key: 'right', className: 'jr__aside' },
                h(CalendarPanel, {
                  key: 'calendar',
                  t,
                  month,
                  selected: selectedDate,
                  today: todayIso(),
                  counts,
                  entries,
                  onSelect: selectDate,
                  onShift: (delta) => setMonth((current) => shiftMonthKey(current, delta)),
                  onToday: goToday,
                }),
              ),
            ));

            if (storagePath !== '') {
              children.push(h('p', { key: 'footer', className: 'jr__footer' },
                `${t('storage')} `,
                h('code', null, storagePath),
              ));
            }
          }

          return h('div', { className: 'jr', ref: scrollRef }, h('div', { className: 'jr__inner' }, children));
        }

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 30,
          label: () => translate('nav.title'),
        }, JourneyIcon));

        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
        }, JourneyPage));
      },
    };
  },
});
