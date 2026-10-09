/* ジュウジュツフィード: Wraptasのサイトに読み込むスクリプト。
   タブ・メニュー・フッターを足し、一覧と記事ページに目印(data-jf-*)を付ける。見た目は jf.css が決める。 */
(function () {
  if (window.__jfLoaded) return;
  window.__jfLoaded = true;
  // タブ・三本線のメニュー・フッター
  document.body.insertAdjacentHTML('beforeend', '<div class="jf-chrome">' + "<nav class=\"jf-tabs\" aria-label=\"カテゴリー\"><div class=\"jf-tabs-in\">\n<a href=\"/\">トップ</a>\n<a href=\"/3f4a6fb1972b8111b35acde92edb95c6\">試合</a>\n<a href=\"/3f4a6fb1972b81acafb0c003a41de503\">動向</a>\n<a href=\"/3f4a6fb1972b81278c42ca7be73c9d33\">運営</a>\n<a href=\"/3f4a6fb1972b81d5967bc73bcd7a5e0c\">文化</a>\n<span class=\"jf-gap\"></span>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b8180ae98e5da079356b7\">アーカイブ</a>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a>\n</div></nav>\n<button type=\"button\" class=\"jf-menu-btn\" aria-label=\"メニュー\" aria-expanded=\"false\" aria-controls=\"jf-drawer\"><i aria-hidden=\"true\"><span></span><span></span><span></span></i></button>\n<div class=\"jf-shade\"></div>\n<nav class=\"jf-drawer\" id=\"jf-drawer\" aria-label=\"メニュー\">\n<ul>\n<li><a href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a></li>\n</ul>\n<ul>\n<li><a href=\"/\">今日のヘッドライン</a></li>\n<li><a href=\"/3f4a6fb1972b8180ae98e5da079356b7\">アーカイブ</a></li>\n<li><a href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a></li>\n<li><a href=\"/3f4a6fb1972b815da4cad0cf18063583\">カテゴリーについて</a></li>\n<li><a href=\"/3f4a6fb1972b81bbbd91efa7948132e5\">帯の色について</a></li>\n</ul>\n</nav>\n<footer class=\"jf-foot\"><div class=\"jf-foot-in\">\n<div class=\"jf-brand\"><strong>ジュウジュツフィード</strong><span>あした道場で話したくなるニュース。</span>\n<span class=\"jf-icons\">\n<a href=\"https://open.spotify.com/show/54049CgarXju0SngOoZ8Zn\" target=\"_blank\" rel=\"noopener\" aria-label=\"Spotifyで聴く\" title=\"Spotify\"><img src=\"https://life-memo.github.io/jiujitsu-feed/icons/spotify.png\" width=\"24\" height=\"24\" alt=\"\"></a>\n<a href=\"https://podcasts.apple.com/jp/podcast/id1853188871\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple Podcastで聴く\" title=\"Apple Podcast\"><img src=\"https://life-memo.github.io/jiujitsu-feed/icons/apple.png\" width=\"24\" height=\"24\" alt=\"\"></a>\n<a href=\"https://music.amazon.co.jp/search/%E3%82%B8%E3%83%A5%E3%82%A6%E3%82%B8%E3%83%A5%E3%83%84%E3%83%8B%E3%83%AF%E3%82%AB\" target=\"_blank\" rel=\"noopener\" aria-label=\"Amazon Musicで聴く\" title=\"Amazon Music\"><img src=\"https://life-memo.github.io/jiujitsu-feed/icons/amazon.png\" width=\"24\" height=\"24\" alt=\"\"></a>\n</span></div>\n<div class=\"jf-cols\">\n<nav aria-label=\"ニュース\"><h2>ニュース</h2><ul>\n<li><a href=\"/\">今日のヘッドライン</a></li>\n<li><a href=\"/3f4a6fb1972b8180ae98e5da079356b7\">アーカイブ</a></li>\n<li><a href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a></li>\n<li><a href=\"/3f4a6fb1972b8111b35acde92edb95c6\">試合</a></li>\n<li><a href=\"/3f4a6fb1972b81acafb0c003a41de503\">動向</a></li>\n<li><a href=\"/3f4a6fb1972b81278c42ca7be73c9d33\">運営</a></li>\n<li><a href=\"/3f4a6fb1972b81d5967bc73bcd7a5e0c\">文化</a></li>\n</ul></nav>\n<nav aria-label=\"案内\"><h2>案内</h2><ul>\n<li><a href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a></li>\n<li><a href=\"/3f4a6fb1972b815da4cad0cf18063583\">カテゴリーについて</a></li>\n<li><a href=\"/3f4a6fb1972b81bbbd91efa7948132e5\">帯の色について</a></li>\n</ul></nav>\n</div>\n<p class=\"jf-legal\">© 2026 ジュウジュツフィード</p>\n</div></footer>\n" + '</div>');
  // 人物の名前 → その人物のページ。Notionの「人物」に足したら、ここにも1行足す
  var PEOPLE = {"ゴードン・ライアン": "/3f4a6fb1972b81099802c4a490bd8aaf", "マイキー・ムスメシ": "/3f4a6fb1972b81acaae9de24d8e7104e", "ジョン・ダナハー": "/3f4a6fb1972b81298fd0cb39c97db5b7", "ヒクソン・グレイシー": "/3f4a6fb1972b81c292fee369024358f6", "クラウディア・ガデーリャ": "/3f4a6fb1972b81af9256ed72083093ea", "ヴィクトル・ウーゴ": "/3f4a6fb1972b817bbd39d9f0b08d5343", "ヘレナ・クレバー": "/3f4a6fb1972b814bb861c4e4f47145e1", "ギルバート・バーンズ": "/3f4a6fb1972b81a2a617ca519b492599", "ガブリエル・アルメイダ": "/3f4a6fb1972b812f8adef03d2524b8b1", "サラ・ガウヴァオン": "/3f4a6fb1972b81639c7fcdb2d25a71c3"};
  var ARCHIVE = '3f4a6fb1972b8180ae98e5da079356b7', PEOPLE_PAGE = '3f4a6fb1972b81ef88f3f81eb2192323', PEOPLE_DB = 'f8ceb4420ed948a6b63df206d4b9ea00', NEWS_DB = 'a956fb4cc7df46d69ac41768e5195c5e';
  var WD = ['日', '月', '火', '水', '木', '金', '土'];
  var ROWS = [['あ', 'アイウエオヴ'], ['か', 'カキクケコガギグゲゴ'], ['さ', 'サシスセソザジズゼゾ'], ['た', 'タチツテトダヂヅデド'], ['な', 'ナニヌネノ'], ['は', 'ハヒフヘホバビブベボパピプペポ'], ['ま', 'マミムメモ'], ['や', 'ヤユヨ'], ['ら', 'ラリルレロ'], ['わ', 'ワヲン']];
  var set = function (el, k, v) { if (v == null) { if (el.hasAttribute(k)) el.removeAttribute(k); } else if (el.getAttribute(k) !== v) el.setAttribute(k, v); };
  var dayLabel = function (date) { var p = date.split('/').map(Number); return p[1] + '月' + p[2] + '日(' + WD[new Date(p[0], p[1] - 1, p[2]).getDay()] + ')'; };
  var kanaRow = function (yomi) { var c = (yomi || '').charAt(0), r = ROWS.filter(function (x) { return x[1].indexOf(c) >= 0; })[0]; return r ? r[0] + '行' : 'そのほか'; };
  function pageMode(root) {
    var c = root.className;
    if (c.indexOf('page-_top') >= 0) return 'top';
    if (c.indexOf('page_id-' + ARCHIVE) >= 0) return 'archive';
    if (c.indexOf('page_id-' + PEOPLE_PAGE) >= 0) return 'people';
    if (c.indexOf('_' + PEOPLE_DB + '_') >= 0) return 'person';
    if (c.indexOf('_' + NEWS_DB + '_') >= 0) return 'article';
    return 'list';
  }
  // 箇条書きの中の人物名を、その人物のページへのリンクにする(1本の記事で、同じ人は最初の1回だけ)
  function linkNames(main) {
    if (main.getAttribute('data-jf-linked') === location.pathname) return;
    main.setAttribute('data-jf-linked', location.pathname);
    var used = {}, names = Object.keys(PEOPLE);
    var scan = function (tn) {
      var t = tn.nodeValue, who = null, at = -1;
      names.forEach(function (p) { if (used[p]) return; var k = t.indexOf(p); if (k >= 0 && (at < 0 || k < at)) { at = k; who = p; } });
      if (!who) return;
      used[who] = 1;
      var rest = tn.splitText(at);
      rest.nodeValue = rest.nodeValue.slice(who.length);
      var a = document.createElement('a'); a.className = 'jf-who'; a.href = PEOPLE[who]; a.textContent = who;
      rest.parentNode.insertBefore(a, rest);
      scan(rest);
    };
    main.querySelectorAll(':scope > ul.notion-list:not([data-jf-src]) li').forEach(function (li) {
      var w = document.createTreeWalker(li, NodeFilter.SHOW_TEXT), nodes = [], n;
      while ((n = w.nextNode())) nodes.push(n);
      nodes.forEach(scan);
    });
  }
  // カテゴリーと人物のページは10本ずつ。11本以上あるときは、一覧の下に 1 2 3 のページ番号を出す
  var PER_PAGE = 10, pageNow = {};
  function pager(c, pages, page, path) {
    var nav = c.querySelector(':scope > .jf-pager'), sig = pages + ':' + page;
    if (pages < 2) { if (nav) nav.remove(); return; }
    if (nav && nav.getAttribute('data-sig') === sig) return;
    if (!nav) { nav = document.createElement('nav'); nav.className = 'jf-pager'; nav.setAttribute('aria-label', 'ページ'); c.appendChild(nav); }
    nav.setAttribute('data-sig', sig);
    nav.textContent = '';
    for (var k = 1; k <= pages; k++) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = String(k);
      b.setAttribute('aria-label', k + 'ページ目');
      if (k === page) b.setAttribute('aria-current', 'page');
      b.addEventListener('click', (function (k) { return function () { pageNow[path] = k; apply(); window.scrollTo(0, 0); }; })(k));
      nav.appendChild(b);
    }
  }
  // ---- その日のページ ----
  // 記事を開くと、同じ日の記事を全部並べて、開いた1本に印を付ける。
  // 同じ日の記事はアーカイブの一覧から探し、中身はそれぞれの記事ページから読み込む。
  var cache = {};
  var getDoc = function (url) {
    if (!cache[url]) cache[url] = fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (t) { return new DOMParser().parseFromString(t, 'text/html'); });
    cache[url].catch(function () { delete cache[url]; });
    return cache[url];
  };
  var txt = function (el) { return el ? el.textContent.trim() : ''; };
  function readStory(main, href) {
    var s = { href: href, title: txt(main.querySelector('h1.title')), cat: '', date: '', rank: '', points: [], srcs: [] }, src = false;
    main.querySelectorAll('.notion-collection-row-property').forEach(function (r) {
      var k = txt(r.querySelector('.notion-collection-column-title-body')), v = r.querySelector('.notion-collection-row-value');
      if (k === 'カテゴリー') s.cat = txt(v); else if (k === '掲載日') s.date = txt(r.querySelector('.notion-property-date-item')); else if (k === '並び順') s.rank = txt(v);
    });
    Array.prototype.forEach.call(main.children, function (el) {
      if (el.classList.contains('notion-text') && txt(el) === '参照記事') { src = true; return; }
      if (!el.classList.contains('notion-list')) return;
      el.querySelectorAll('li').forEach(function (li) {
        if (!src) { s.points.push(txt(li)); return; }
        var a = li.querySelector('a[href]'); if (a) s.srcs.push([txt(a), a.getAttribute('href')]);
      });
    });
    return s;
  }
  function linkWho(node) {
    var used = {}, names = Object.keys(PEOPLE);
    var scan = function (tn) {
      var t = tn.nodeValue, who = null, at = -1;
      names.forEach(function (p) { if (used[p]) return; var k = t.indexOf(p); if (k >= 0 && (at < 0 || k < at)) { at = k; who = p; } });
      if (!who) return;
      used[who] = 1;
      var rest = tn.splitText(at);
      rest.nodeValue = rest.nodeValue.slice(who.length);
      var a = document.createElement('a'); a.className = 'jf-who'; a.href = PEOPLE[who]; a.textContent = who;
      rest.parentNode.insertBefore(a, rest);
      scan(rest);
    };
    var w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(scan);
  }
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  function storyCard(s, picked) {
    var li = el('li', 'jf-story' + (picked ? ' jf-picked' : ''));
    if (s.rank) li.setAttribute('data-rank', s.rank);
    var meta = el('p', 'jf-story-meta', s.cat);
    if (picked) meta.appendChild(el('span', 'jf-pick', '選んだニュース'));
    li.appendChild(meta);
    li.appendChild(el('h2', null, s.title));
    var ul = el('ul', 'jf-points');
    s.points.forEach(function (p) { ul.appendChild(el('li', null, p)); });
    linkWho(ul);
    li.appendChild(ul);
    if (s.srcs.length) {
      var d = el('div', 'jf-srcs'); d.appendChild(el('span', null, '参照記事'));
      s.srcs.forEach(function (x) { var a = el('a', null, x[0] + ' ↗'); a.href = x[1]; a.target = '_blank'; a.rel = 'noopener'; d.appendChild(a); });
      li.appendChild(d);
    }
    return li;
  }
  function dayView(root, main, path) {
    var box = document.querySelector('.jf-day');
    if (box && box.getAttribute('data-path') === path) return;
    if (box) box.remove();
    var me = readStory(main, path);
    if (!me.date || !me.points.length) return;                 // 中身が読めないときは、ふつうの記事ページのままにする
    box = el('div', 'jf-day'); box.setAttribute('data-path', path);
    var p = me.date.split('/').map(Number), now = new Date(), isToday = now.getFullYear() === p[0] && now.getMonth() + 1 === p[1] && now.getDate() === p[2];
    var h = el('h1', 'jf-day-title'); h.appendChild(el('span', null, p[0] + '年' + p[1] + '月' + p[2] + '日')); h.appendChild(document.createTextNode(isToday ? '今日のヘッドライン' : p[1] + '月' + p[2] + '日のヘッドライン'));
    var list = el('ul', 'jf-stories'), nav = el('div', 'jf-daynav');
    box.appendChild(h); box.appendChild(list); box.appendChild(nav);
    list.appendChild(storyCard(me, true));
    main.parentNode.appendChild(box);
    root.setAttribute('data-jf-day', '1');
    var alive = function () { return box.isConnected && box.getAttribute('data-path') === path; };
    getDoc('/' + ARCHIVE).then(function (doc) {
      // 一覧はページに埋め込まれたデータから読む(一覧の見た目は後から描かれるので、HTMLには入っていない)
      var rm = JSON.parse(doc.getElementById('__NEXT_DATA__').textContent).props.pageProps.pageRecordMap;
      var val = function (o) { while (o && o.value && !o.type && !o.schema) o = o.value; return o || {}; };
      var key = {}, ids = [], seen = {};
      Object.keys(rm.collection || {}).forEach(function (c) { var sc = val(rm.collection[c]).schema || {}; Object.keys(sc).forEach(function (k) { key[sc[k].name] = k; }); });
      (function find(o) {
        if (!o || typeof o !== 'object') return;
        if (Array.isArray(o.blockIds)) o.blockIds.forEach(function (i) { if (!seen[i]) { seen[i] = 1; ids.push(i); } });
        Object.keys(o).forEach(function (k) { find(o[k]); });
      })(rm.collection_query);
      var all = [];
      ids.forEach(function (i) {
        var pr = val(rm.block[i]).properties; if (!pr) return;
        var st = pr[key['状態']], dt = pr[key['掲載日']], rk = pr[key['並び順']], d = '';
        if (st && st[0][0] !== '公開') return;
        try { d = dt[0][1][0][1].start_date.split('-').map(Number).join('/'); } catch (e) {}
        if (d) all.push({ href: '/' + i.replace(/-/g, ''), date: d, rank: Number(rk && rk[0][0]) || 99 });
      });
      var mates = all.filter(function (x) { return x.date === me.date; }).sort(function (a, b) { return a.rank - b.rank; });
      if (!mates.some(function (x) { return x.href === path; })) return;
      var dates = []; all.forEach(function (x) { if (x.date && dates.indexOf(x.date) < 0) dates.push(x.date); });
      var di = dates.indexOf(me.date), first = function (d) { return all.filter(function (x) { return x.date === d; }).sort(function (a, b) { return a.rank - b.rank; })[0]; };
      var short = function (d) { var q = d.split('/').map(Number); return q[1] + '月' + q[2] + '日(' + WD[new Date(q[0], q[1] - 1, q[2]).getDay()] + ')'; };
      if (alive()) {
        if (dates[di + 1]) { var a1 = el('a', null, '← 前の日 ' + short(dates[di + 1])); a1.href = first(dates[di + 1]).href; nav.appendChild(a1); }
        if (di > 0) { var a2 = el('a', 'jf-next', '次の日 ' + short(dates[di - 1]) + ' →'); a2.href = first(dates[di - 1]).href; nav.appendChild(a2); }
      }
      return Promise.all(mates.map(function (x) {
        if (x.href === path) return me;
        return getDoc(x.href).then(function (d) { var m = d.querySelector('main.contents'); return m ? readStory(m, x.href) : null; }).catch(function () { return null; });
      })).then(function (stories) {
        if (!alive()) return;
        list.textContent = '';
        stories.forEach(function (s) { if (s && s.points.length) list.appendChild(storyCard(s, s.href === path)); });
        var mine = list.querySelector('.jf-picked');
        if (mine && mine !== list.firstElementChild) mine.scrollIntoView({ block: 'start' });
      });
    }).catch(function () {});
  }

  function apply() {
    var root = document.querySelector('.notion.page');
    if (!root) return;
    var mode = pageMode(root), top = mode === 'top';
    set(root, 'data-jf-page', mode);
    var now = new Date(), today = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    var path = location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.jf-tabs a').forEach(function (a) { set(a, 'aria-current', a.getAttribute('href') === path ? 'page' : null); });
    document.querySelectorAll('.notion-collection').forEach(function (c, ci) {
      var recs = top && ci > 0, last = null, group = 0;
      set(c, 'data-jf-recs', recs ? '1' : null);
      // トップの見出しの右に出す日付(いちばん新しい日)
      var d0 = top && !recs ? c.querySelector('a.notion-list-item .notion-property-date-item') : null, p0 = d0 ? d0.textContent.trim().split('/') : [];
      set(c, 'data-jf-date', p0.length === 3 ? p0[0] + '年' + Number(p0[1]) + '月' + Number(p0[2]) + '日' : null);
      var paged = mode === 'list' || mode === 'person', items = c.querySelectorAll('a.notion-list-item');
      var pages = paged ? Math.ceil(items.length / PER_PAGE) : 0, page = Math.min(Math.max(pageNow[path] || 1, 1), pages || 1);
      pager(c, pages, page, path);
      items.forEach(function (a, idx) {
        set(a, 'data-jf-off', paged && Math.floor(idx / PER_PAGE) + 1 !== page ? '1' : null);
        var d = a.querySelector('.notion-property-date-item'), n = a.querySelector('.notion-property-number');
        var date = d ? d.textContent.trim() : '', key, first;
        if (mode === 'people') {
          var y = a.querySelector('.notion-property-text');
          key = kanaRow(y ? y.textContent.trim() : ''); first = key !== last; last = key;
          set(a, 'data-jf-first', first ? '1' : null); set(a, 'data-day', first ? key : null);
          return;
        }
        if (recs || mode === 'list' || mode === 'person') {
          set(a, 'data-rank', null); set(a, 'data-jf-belt', null); set(a, 'data-jf-first', null); set(a, 'data-jf-today', null); set(a, 'data-jf-old', null);
          set(a, 'data-day', recs && date ? dayLabel(date) : null);
          set(a, 'data-jf-date', !recs && date ? dayLabel(date) : null);
          return;
        }
        first = date !== last;
        if (first) group++;
        var belted = top || mode === 'archive';
        set(a, 'data-rank', belted && n ? n.textContent.trim() : null);
        set(a, 'data-jf-belt', belted ? '1' : null);
        set(a, 'data-jf-first', first ? '1' : null);
        set(a, 'data-jf-old', top && group > 1 ? '1' : null);
        set(a, 'data-day', first && date ? (top && date === today ? '今日のヘッドライン' : dayLabel(date)) : null);
        set(a, 'data-jf-today', top && first ? '1' : null);
        last = date;
      });
    });
    document.querySelectorAll('.notion-collection-row-property').forEach(function (r) {
      var t = r.querySelector('.notion-collection-column-title-body'), k = t ? t.textContent.trim() : null;
      set(r, 'data-prop', k);
      if (k === '掲載日') {
        var v = r.querySelector('.notion-property-date-item'), p = v ? v.textContent.trim().split('/') : [];
        set(r, 'data-jf-text', p.length === 3 ? '掲載日：' + p[0] + '年' + Number(p[1]) + '月' + Number(p[2]) + '日' : null);
      }
    });
    var src = false, prev = null, main = document.querySelector('main.contents');
    document.querySelectorAll('main.contents > *').forEach(function (el) {
      if (el.classList.contains('notion-text') && el.textContent.trim() === '参照記事') { src = true; set(el, 'data-jf-src', '1'); if (prev) set(prev, 'data-jf-last', '1'); }
      else if (src && el.classList.contains('notion-list')) set(el, 'data-jf-src', '1');
      prev = el;
    });
    var day = document.querySelector('.jf-day');
    if (day && (mode !== 'article' || day.getAttribute('data-path') !== path)) { day.remove(); day = null; }
    if (mode === 'article' && main) { linkNames(main); dayView(root, main, path); }
    set(root, 'data-jf-day', document.querySelector('.jf-day') ? '1' : null);
    // ページが替わったら、本文をふわっと出し直す(a と b を交互に付けると、そのたびにアニメーションがかかる)
    if (main && (shownPath !== path || !main.getAttribute('data-jf-in'))) {
      shownPath = path; fadeTurn = fadeTurn === 'a' ? 'b' : 'a';
      main.setAttribute('data-jf-in', fadeTurn);
      html.classList.remove('jf-leaving');
      menu(false);
    }
    html.classList.add('jf-ready');
  }
  // 三本線のメニュー
  var html = document.documentElement, btn = document.querySelector('.jf-menu-btn'), shade = document.querySelector('.jf-shade');
  var menu = function (on) { html.classList.toggle('jf-menu-open', on); if (btn) btn.setAttribute('aria-expanded', on ? 'true' : 'false'); };
  if (btn) btn.addEventListener('click', function () { menu(!html.classList.contains('jf-menu-open')); });
  if (shade) shade.addEventListener('click', function () { menu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });
  // サイト内のリンクは、ページを読み込み直さずに切り替える。切り替わるまで本文をふっと薄くする
  var shownPath = null, fadeTurn = 'b', leaveTimer;
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null, href = a ? a.getAttribute('href') : '';
    if (!a || a.target === '_blank' || href.charAt(0) !== '/' || href.charAt(1) === '/') return;
    var here = location.pathname.replace(/\/$/, '') || '/', there = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    var router = window.next && window.next.router;
    if (!router) return;
    e.preventDefault(); menu(false);
    if (there === here) { window.scrollTo(0, 0); return; }
    html.classList.add('jf-leaving');
    clearTimeout(leaveTimer); leaveTimer = setTimeout(function () { html.classList.remove('jf-leaving'); }, 4000);
    router.push(href);
  });
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
  apply();
})();
