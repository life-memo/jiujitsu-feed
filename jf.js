/* ジュウジュツフィード: Wraptasのサイトに読み込むスクリプト。
   タブ・メニュー・フッターを足し、一覧と記事ページに目印(data-jf-*)を付ける。見た目は jf.css が決める。 */
(function () {
  if (window.__jfLoaded) return;
  window.__jfLoaded = true;
  // タブ・三本線のメニュー・フッター
  document.body.insertAdjacentHTML('beforeend', '<div class="jf-chrome">' + "<nav class=\"jf-tabs\" aria-label=\"カテゴリー\"><div class=\"jf-tabs-in\">\n<a href=\"/\">トップ</a>\n<a href=\"/3f4a6fb1972b8111b35acde92edb95c6\">試合</a>\n<a href=\"/3f4a6fb1972b81acafb0c003a41de503\">動向</a>\n<a href=\"/3f4a6fb1972b81278c42ca7be73c9d33\">運営</a>\n<a href=\"/3f4a6fb1972b81d5967bc73bcd7a5e0c\">文化</a>\n<span class=\"jf-gap\"></span>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b8180ae98e5da079356b7\">記事を探す</a>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b81759becfdc7d44f99d3\">大会から探す</a>\n<a class=\"jf-extra\" href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a>\n</div></nav>\n<button type=\"button\" class=\"jf-menu-btn\" aria-label=\"メニュー\" aria-expanded=\"false\" aria-controls=\"jf-drawer\"><i aria-hidden=\"true\"><span></span><span></span><span></span></i></button>\n<div class=\"jf-shade\"></div>\n<nav class=\"jf-drawer\" id=\"jf-drawer\" aria-label=\"メニュー\">\n<h2>ニュース</h2>\n<ul>\n<li><a href=\"/\">今日のヘッドライン</a></li>\n<li><a href=\"/3f4a6fb1972b8111b35acde92edb95c6\">試合</a></li>\n<li><a href=\"/3f4a6fb1972b81acafb0c003a41de503\">動向</a></li>\n<li><a href=\"/3f4a6fb1972b81278c42ca7be73c9d33\">運営</a></li>\n<li><a href=\"/3f4a6fb1972b81d5967bc73bcd7a5e0c\">文化</a></li>\n<li><a href=\"/3f4a6fb1972b8180ae98e5da079356b7\">記事を探す</a></li>\n<li><a href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a></li>\n<li><a href=\"/3f4a6fb1972b81759becfdc7d44f99d3\">大会から探す</a></li>\n</ul>\n<h2>このサイトについて</h2>\n<ul>\n<li><a href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a></li>\n<li><a href=\"/3f4a6fb1972b81bbbd91efa7948132e5\">帯の色について</a></li>\n<li><a href=\"/3f4a6fb1972b815da4cad0cf18063583\">カテゴリーについて</a></li>\n</ul>\n</nav>\n<footer class=\"jf-foot\"><div class=\"jf-foot-in\">\n<div class=\"jf-lead\"><div class=\"jf-brand\"><strong>ジュウジュツフィード</strong><span>あした道場で話したくなるニュース。</span>\n</div>\n<div class=\"jf-foot-pod\"><img src=\"https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/b4/41/10/b44110f5-e8a0-6d21-4ea7-0cdd03ad4736/mza_4669245238295162244.jpg/240x240bb.jpg\" width=\"72\" height=\"72\" alt=\"\" loading=\"lazy\" decoding=\"async\"><div><span>ポッドキャスト</span><strong>ジュウジュツニワカ</strong><p><a href=\"https://open.spotify.com/show/54049CgarXju0SngOoZ8Zn\" target=\"_blank\" rel=\"noopener\">Spotify</a><a href=\"https://podcasts.apple.com/jp/podcast/id1853188871\" target=\"_blank\" rel=\"noopener\">Apple Podcast</a><a href=\"https://music.amazon.co.jp/podcasts/51f983ab-e8c8-4edb-8e82-a7852ed2e15d\" target=\"_blank\" rel=\"noopener\">Amazon Music</a></p></div></div></div>\n<div class=\"jf-cols\">\n<nav aria-label=\"ニュース\"><h2>ニュース</h2><ul>\n<li><a href=\"/\">今日のヘッドライン</a></li>\n<li><a href=\"/3f4a6fb1972b8111b35acde92edb95c6\">試合</a></li>\n<li><a href=\"/3f4a6fb1972b81acafb0c003a41de503\">動向</a></li>\n<li><a href=\"/3f4a6fb1972b81278c42ca7be73c9d33\">運営</a></li>\n<li><a href=\"/3f4a6fb1972b81d5967bc73bcd7a5e0c\">文化</a></li>\n<li><a href=\"/3f4a6fb1972b8180ae98e5da079356b7\">記事を探す</a></li>\n<li><a href=\"/3f4a6fb1972b81ef88f3f81eb2192323\">人物から探す</a></li>\n<li><a href=\"/3f4a6fb1972b81759becfdc7d44f99d3\">大会から探す</a></li>\n</ul></nav>\n<nav aria-label=\"このサイトについて\"><h2>このサイトについて</h2><ul>\n<li><a href=\"/3f4a6fb1972b814197a3c91977d78b35\">運用方針</a></li>\n<li><a href=\"/3f4a6fb1972b81bbbd91efa7948132e5\">帯の色について</a></li>\n<li><a href=\"/3f4a6fb1972b815da4cad0cf18063583\">カテゴリーについて</a></li>\n</ul></nav>\n</div>\n<p class=\"jf-legal\">© 2026 ジュウジュツフィード</p>\n</div></footer>\n" + '</div>');
  // 人物の名前 → その人物のページ。Notionの「人物」に足したら、ここにも1行足す
  var PEOPLE = {"ゴードン・ライアン": "/3f4a6fb1972b81099802c4a490bd8aaf", "マイキー・ムスメシ": "/3f4a6fb1972b81acaae9de24d8e7104e", "ジョン・ダナハー": "/3f4a6fb1972b81298fd0cb39c97db5b7", "ヒクソン・グレイシー": "/3f4a6fb1972b81c292fee369024358f6", "クラウディア・ガデーリャ": "/3f4a6fb1972b81af9256ed72083093ea", "ヴィクトル・ウーゴ": "/3f4a6fb1972b817bbd39d9f0b08d5343", "ヘレナ・クレバー": "/3f4a6fb1972b814bb861c4e4f47145e1", "ギルバート・バーンズ": "/3f4a6fb1972b81a2a617ca519b492599", "ガブリエル・アルメイダ": "/3f4a6fb1972b812f8adef03d2524b8b1", "サラ・ガウヴァオン": "/3f4a6fb1972b81639c7fcdb2d25a71c3"};
  // ポッドキャストで取り上げた人物 → その回(人物のページのアドレス: [回の題, Spotify, Apple Podcast, Amazon Music])。
  // 新しい回は、番組の配信データから自動で拾う(下の loadFeed)。題に人物の名前が入っていれば、その人物につながる。
  // 自動で拾った回は、Amazon Musicだけ番組のページに飛ぶ。回そのものに飛ばしたいときは、ここに1行足す
  var SHOW = { amazon: 'https://music.amazon.co.jp/podcasts/51f983ab-e8c8-4edb-8e82-a7852ed2e15d', rss: 'https://anchor.fm/s/10b36b274/podcast/rss', lookup: 'https://itunes.apple.com/lookup?id=1853188871&entity=podcastEpisode&limit=200&country=jp', apple: 'https://podcasts.apple.com/jp/podcast/id1853188871' };
  var EPISODES = {
    '/3f4a6fb1972b81099802c4a490bd8aaf': [['#1 ゴードン・ライアン：最強はなぜ最強か', 'https://podcasters.spotify.com/pod/show/jiujitsuniwaka/episodes/1-e3aqh7f', 'https://podcasts.apple.com/jp/podcast/id1853188871?i=1000736843508', SHOW.amazon + '/episodes/e384a0bf-067f-4e6a-bff8-f384ec1230ee']],
    '/3f4a6fb1972b81acaae9de24d8e7104e': [['#12 マイキー・ムスメシ（前編）：世界一の技術オタク', 'https://podcasters.spotify.com/pod/show/jiujitsuniwaka/episodes/12-e3dqp3k', 'https://podcasts.apple.com/jp/podcast/id1853188871?i=1000750780712', SHOW.amazon + '/episodes/16f0d5d9-dc2f-4ff7-afeb-1a03b29f0254'], ['#13 マイキー・ムスメシ（後編）：世界一の技術オタク', 'https://podcasters.spotify.com/pod/show/jiujitsuniwaka/episodes/13-e3dqpbl', 'https://podcasts.apple.com/jp/podcast/id1853188871?i=1000752077507', SHOW.amazon + '/episodes/b7d9d92f-c470-42ef-86a1-326f10b42c37']],
    '/3f4a6fb1972b81c292fee369024358f6': [['#25 ヒクソン・グレイシー：不敗の神話、一族最強の男', 'https://podcasters.spotify.com/pod/show/jiujitsuniwaka/episodes/25-e3ig1f9', 'https://podcasts.apple.com/jp/podcast/id1853188871?i=1000770319415', SHOW.amazon + '/episodes/4214226b-fe45-495b-b6a9-689cdcaeb1dd']]
  };
  var EVENTS_PAGE = '3f4a6fb1972b81759becfdc7d44f99d3', EVENT_TAGS = ['UFC BJJ', 'ADCC', 'IBJJF', 'ONE', 'Polaris', 'RAF', 'その他の大会'];
  var BELTS = '3f4a6fb1972b81bbbd91efa7948132e5', ARCHIVE = '3f4a6fb1972b8180ae98e5da079356b7', PEOPLE_PAGE = '3f4a6fb1972b81ef88f3f81eb2192323', PEOPLE_DB = 'f8ceb4420ed948a6b63df206d4b9ea00', NEWS_DB = 'a956fb4cc7df46d69ac41768e5195c5e';
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
    if (c.indexOf('page_id-' + BELTS) >= 0) return 'belts';
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
  var PER_PAGE = 10, DAYS_PER_PAGE = 3, pageNow = {};
  function pager(c, pages, page, path) {
    var nav = c.querySelector(':scope > .jf-pager'), sig = pages + ':' + page;
    if (pages < 2) { if (nav) nav.remove(); return; }
    if (nav && nav.getAttribute('data-sig') === sig) return;
    if (!nav) { nav = document.createElement('nav'); nav.className = 'jf-pager'; nav.setAttribute('aria-label', 'ページ'); c.appendChild(nav); }
    nav.setAttribute('data-sig', sig);
    nav.textContent = '';
    var add = function (label, k, cur, aria) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = label;
      b.setAttribute('aria-label', aria || k + 'ページ目');
      if (cur) b.setAttribute('aria-current', 'page');
      b.addEventListener('click', function () { pageNow[path] = k; apply(); window.scrollTo(0, 0); });
      nav.appendChild(b);
    };
    // ページが多いときは、最初・最後・今のページの前後だけを出す
    var show = [], k;
    for (k = 1; k <= pages; k++) if (pages <= 7 || k === 1 || k === pages || Math.abs(k - page) <= 1) show.push(k);
    if (page > 1) add('←', page - 1, false, '前のページ');
    show.forEach(function (n, i) {
      if (i && n - show[i - 1] > 1) { var gap = document.createElement('span'); gap.textContent = '…'; nav.appendChild(gap); }
      add(String(n), n, n === page);
    });
    if (page < pages) add('→', page + 1, false, '次のページ');
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
    var me = readStory(main, path), plain = false;
    try { plain = sessionStorage.getItem('jf-nopick') === path; } catch (e) {}
    if (!me.date || !me.points.length) return;                 // 中身が読めないときは、ふつうの記事ページのままにする
    try { if (dnum(me.date) > (Number(localStorage.getItem('jf-latest')) || 0)) localStorage.setItem('jf-latest', String(dnum(me.date))); } catch (e) {}
    box = el('div', 'jf-day'); box.setAttribute('data-path', path);
    var p = me.date.split('/').map(Number), now = new Date(), isToday = now.getFullYear() === p[0] && now.getMonth() + 1 === p[1] && now.getDate() === p[2];
    var h = el('h1', 'jf-day-title'); h.appendChild(el('span', null, p[0] + '年' + p[1] + '月' + p[2] + '日')); h.appendChild(document.createTextNode(isToday ? '今日のヘッドライン' : p[1] + '月' + p[2] + '日のヘッドライン'));
    var list = el('ul', 'jf-stories'), nav = el('div', 'jf-daynav');
    box.appendChild(h); box.appendChild(list); box.appendChild(nav);
    list.appendChild(storyCard(me, !plain));
    main.parentNode.appendChild(box);
    root.setAttribute('data-jf-day', '1');
    var alive = function () { return box.isConnected && box.getAttribute('data-path') === path; };
    // 同じ日の記事は3か所から集める: これまでに見た一覧(端末に覚えてある分)、「記事を探す」のページ、トップページ。
    // 公開した直後は、サイト側の一覧がまだ古いことがあるので、1か所だけに頼らない。
    var shownKey = '';
    var show = function (all) {
      if (!alive()) return;
      var byHref = {}; all.forEach(function (x) { if (x && x.href && x.date) byHref[x.href] = x; });
      if (!byHref[path]) byHref[path] = { href: path, date: me.date, rank: Number(me.rank) || 99, cat: me.cat };
      all = Object.keys(byHref).map(function (k) { return byHref[k]; });
      var byRank = function (a, b) { return a.rank - b.rank; };
      var mates = all.filter(function (x) { return x.date === me.date; }).sort(byRank);
      var dates = []; all.forEach(function (x) { if (dates.indexOf(x.date) < 0) dates.push(x.date); });
      dates.sort(function (a, b) { return dnum(b) - dnum(a); });
      var key = mates.map(function (x) { return x.href; }).join(',') + '|' + dates.join(',');
      if (key === shownKey) return;
      shownKey = key;
      var di = dates.indexOf(me.date), first = function (d) { return all.filter(function (x) { return x.date === d; }).sort(byRank)[0]; };
      var short = function (d) { var q = d.split('/').map(Number); return q[1] + '月' + q[2] + '日(' + WD[new Date(q[0], q[1] - 1, q[2]).getDay()] + ')'; };
      nav.textContent = '';
      if (dates[di + 1]) { var a1 = el('a', null, '← 前の日 ' + short(dates[di + 1])); a1.href = first(dates[di + 1]).href; nav.appendChild(a1); }
      if (di > 0) { var a2 = el('a', 'jf-next', '次の日 ' + short(dates[di - 1]) + ' →'); a2.href = first(dates[di - 1]).href; nav.appendChild(a2); }
      Promise.all(mates.map(function (x) {
        if (x.href === path) return me;
        return getDoc(x.href).then(function (d) { var m = d.querySelector('main.contents'); var s = m ? readStory(m, x.href) : null; if (s) { s.rank = s.rank || String(x.rank); s.cat = s.cat || x.cat; } return s; }).catch(function () { return null; });
      })).then(function (stories) {
        if (!alive() || shownKey !== key) return;
        list.textContent = '';
        stories.forEach(function (s) { if (s && s.points.length) list.appendChild(storyCard(s, !plain && s.href === path)); });
        var mine = list.querySelector('.jf-picked');
        if (mine && mine !== list.firstElementChild) mine.scrollIntoView({ block: 'start' });
      });
    };
    var known = knownRows();
    if (known.some(function (x) { return x.href === path; })) show(known);
    var grab = function (url) { return getDoc(url).then(rowsFromDoc).catch(function () { return []; }); };
    Promise.all([grab('/' + ARCHIVE), grab('/')]).then(function (r) { show(known.concat(r[0], r[1])); });
  }
  // 一覧のデータを、ページに埋め込まれた情報から読む(一覧の見た目は後から描かれるので、HTMLには入っていない)
  function rowsFromDoc(doc) {
    var rm = JSON.parse(doc.getElementById('__NEXT_DATA__').textContent).props.pageProps.pageRecordMap;
    var val = function (o) { while (o && o.value && !o.type && !o.schema) o = o.value; return o || {}; };
    var key = {}, ids = [], seen = {}, all = [];
    Object.keys(rm.collection || {}).forEach(function (c) { var sc = val(rm.collection[c]).schema || {}; Object.keys(sc).forEach(function (k) { key[sc[k].name] = k; }); });
    (function find(o) {
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o.blockIds)) o.blockIds.forEach(function (i) { if (!seen[i]) { seen[i] = 1; ids.push(i); } });
      Object.keys(o).forEach(function (k) { find(o[k]); });
    })(rm.collection_query);
    ids.forEach(function (i) {
      var pr = val(rm.block[i]).properties; if (!pr) return;
      var st = pr[key['状態']], dt = pr[key['掲載日']], rk = pr[key['並び順']], d = '';
      if (st && st[0][0] !== '公開') return;
      try { d = dt[0][1][0][1].start_date.split('-').map(Number).join('/'); } catch (e) {}
      var ct = pr[key['カテゴリー']];
      if (d && rk) all.push({ href: '/' + i.replace(/-/g, ''), date: d, rank: Number(rk[0][0]) || 99, cat: ct ? ct[0][0] : '' });
    });
    return all;
  }
  // 見た一覧の中身(記事のアドレス・掲載日・並び順・カテゴリー)を端末に覚えておく。新しいものから400本まで
  var dnum = function (d) { var p = String(d || '').split('/').map(Number); return p.length === 3 ? p[0] * 10000 + p[1] * 100 + p[2] : 0; };
  var ROWS = null, rowsDirty = null;
  function knownRows() {
    if (!ROWS) { ROWS = {}; try { (JSON.parse(localStorage.getItem('jf-rows') || '[]') || []).forEach(function (x) { if (x && x.href) ROWS[x.href] = x; }); } catch (e) {} }
    return Object.keys(ROWS).map(function (k) { return ROWS[k]; });
  }
  function remember(href, date, rank, cat) {
    if (!href || !date || !rank) return;
    knownRows();
    var o = ROWS[href];
    if (o && o.date === date && o.rank === rank && o.cat === cat) return;
    ROWS[href] = { href: href, date: date, rank: rank, cat: cat };
    clearTimeout(rowsDirty);
    rowsDirty = setTimeout(function () {
      var keep = knownRows().sort(function (a, b) { return dnum(b.date) - dnum(a.date); }).slice(0, 400);
      try { localStorage.setItem('jf-rows', JSON.stringify(keep)); } catch (e) {}
    }, 400);
  }
  // トップに出ている日付が、すでに見たいちばん新しい日付より古いときは、古い控えが出ている。読み込み直して新しいほうを出す
  var clientNav = false;
  window.addEventListener('popstate', function () { clientNav = true; });
  function freshTop(shown) {
    var seenMax = 0, n = dnum(shown);
    try { seenMax = Number(localStorage.getItem('jf-latest')) || 0; } catch (e) {}
    if (!n) return;
    if (n >= seenMax) { if (n > seenMax) try { localStorage.setItem('jf-latest', String(n)); } catch (e) {} return; }
    if (!clientNav) return;                                      // 開いた直後の表示では読み込み直さない(繰り返しを防ぐ)。サイト内の移動や「戻る」で出たときだけ
    document.documentElement.classList.add('jf-leaving');
    location.reload();
  }
  var out = function (text, href) { var a = el('a', null, text); a.href = href; a.target = '_blank'; a.rel = 'noopener'; return a; };
  // ---- アーカイブの絞り込み(キーワード・日付・帯の色) ----
  var BELT_NAMES = ['黒帯', '茶帯', '紫帯', '青帯', '白帯'];
  var fQ = '', fBelt = 0, fOpen = '', calMonth = null;
  var filtering = function () { return !!(fBelt || fQ.trim()); };
  function filterBar(c, days, page, path, hits) {
    var box = c.querySelector(':scope > .jf-filter');
    if (!box) {
      box = el('div', 'jf-filter');
      var row = el('div', 'jf-filter-row'), q = el('input');
      q.type = 'search'; q.placeholder = 'キーワードで探す'; q.setAttribute('aria-label', 'キーワードで探す'); q.value = fQ;
      q.addEventListener('input', function () { fQ = q.value; pageNow[path] = 1; apply(); });
      row.appendChild(q);
      [['cal', '日付'], ['belt', '帯の色']].forEach(function (x) {
        var b = el('button', 'jf-filter-btn', x[1]); b.type = 'button'; b.setAttribute('data-k', x[0]);
        b.addEventListener('click', function () { fOpen = fOpen === x[0] ? '' : x[0]; apply(); });
        row.appendChild(b);
      });
      box.appendChild(row); box.appendChild(el('div', 'jf-filter-panel')); box.appendChild(el('p', 'jf-filter-note'));
      c.appendChild(box);
    }
    var ym = function (d) { var p = d.split('/').map(Number); return p[0] * 12 + p[1] - 1; };
    var newest = days.length ? ym(days[0]) : 0, oldest = days.length ? ym(days[days.length - 1]) : 0;
    if (calMonth == null || calMonth > newest || calMonth < oldest) calMonth = newest;
    var sig = [days.length, days[0], page, fOpen, calMonth, fBelt, fQ, hits].join('|');
    if (box.getAttribute('data-sig') === sig) return;
    box.setAttribute('data-sig', sig);
    var inp = box.querySelector('input'); if (inp.value !== fQ) inp.value = fQ;
    box.querySelectorAll('.jf-filter-btn').forEach(function (b) {
      var k = b.getAttribute('data-k');
      b.setAttribute('aria-expanded', fOpen === k ? 'true' : 'false');
      if (k === 'belt') { b.textContent = fBelt ? BELT_NAMES[fBelt - 1] : '帯の色'; set(b, 'data-on', fBelt ? '1' : null); }
    });
    var note = box.querySelector('.jf-filter-note'); note.textContent = '';
    if (filtering()) {
      note.appendChild(document.createTextNode(hits ? hits + '本のニュースが見つかりました。' : '当てはまるニュースがありません。'));
      var clr = el('button', null, '絞り込みをやめる'); clr.type = 'button';
      clr.addEventListener('click', function () { fQ = ''; fBelt = 0; fOpen = ''; pageNow[path] = 1; apply(); });
      note.appendChild(clr);
    }
    var panel = box.querySelector('.jf-filter-panel'); panel.textContent = ''; set(panel, 'data-k', fOpen || null);
    if (fOpen === 'belt') {
      BELT_NAMES.forEach(function (name, i) {
        var b = el('button', 'jf-belt-chip', name); b.type = 'button'; b.setAttribute('data-rank', String(i + 1));
        if (fBelt === i + 1) b.setAttribute('aria-pressed', 'true');
        b.addEventListener('click', function () { fBelt = fBelt === i + 1 ? 0 : i + 1; fOpen = ''; pageNow[path] = 1; apply(); });
        panel.appendChild(b);
      });
    }
    if (fOpen !== 'cal' || !days.length) return;
    // カレンダー: ニュースのある日だけ押せる。押すと、その日が入っているページに切り替えて、その日の見出しまで移る
    var y = Math.floor(calMonth / 12), m = calMonth % 12, head = el('div', 'jf-cal-head'), grid = el('div', 'jf-cal-grid');
    var step = function (label, to, aria) { var b = el('button', null, label); b.type = 'button'; b.setAttribute('aria-label', aria); b.disabled = to < oldest || to > newest; b.addEventListener('click', function () { calMonth = to; apply(); }); return b; };
    head.appendChild(step('←', calMonth - 1, '前の月')); head.appendChild(el('strong', null, y + '年' + (m + 1) + '月')); head.appendChild(step('→', calMonth + 1, '次の月'));
    WD.forEach(function (w) { grid.appendChild(el('span', 'jf-cal-wd', w)); });
    for (var i = 0, lead = new Date(y, m, 1).getDay(); i < lead; i++) grid.appendChild(el('span'));
    var shown = filtering() ? [] : days.slice((page - 1) * DAYS_PER_PAGE, page * DAYS_PER_PAGE);
    for (var d = 1, n = new Date(y, m + 1, 0).getDate(); d <= n; d++) (function (d) {
      var key = y + '/' + (m + 1) + '/' + d, at = days.indexOf(key);
      if (at < 0) { grid.appendChild(el('span', 'jf-cal-none', String(d))); return; }
      var b = el('button', shown.indexOf(key) >= 0 ? 'jf-cal-on' : null, String(d)); b.type = 'button'; b.setAttribute('aria-label', (m + 1) + '月' + d + '日のニュース');
      b.addEventListener('click', function () {
        fQ = ''; fBelt = 0; fOpen = ''; pageNow[path] = Math.floor(at / DAYS_PER_PAGE) + 1; apply();
        var hit = null;
        c.querySelectorAll('a.notion-list-item[data-jf-first]').forEach(function (a) { var x = a.querySelector('.notion-property-date-item'); if (x && x.textContent.trim() === key) hit = a; });
        if (hit) window.scrollTo(0, hit.getBoundingClientRect().top + window.pageYOffset - 170);
      });
      grid.appendChild(b);
    })(d);
    panel.appendChild(head); panel.appendChild(grid);
  }
  // ---- 大会から探す ----
  // 一覧の各記事に付いている大会の札を読み、札のボタンで絞り込む。札はNotionの「大会」の欄。
  var evTag = '';
  var tagsOf = function (a) {
    var found = [];
    a.querySelectorAll('.notion-list-item-property, .notion-list-item-property *').forEach(function (x) {
      if (x.children.length) return;
      var t = x.textContent.trim();
      if (EVENT_TAGS.indexOf(t) >= 0 && found.indexOf(t) < 0) found.push(t);
    });
    return found;
  };
  function eventBar(c, counts, total, path) {
    var box = c.querySelector(':scope > .jf-events'), sig = evTag + '|' + total + '|' + EVENT_TAGS.map(function (t) { return counts[t] || 0; }).join(',');
    if (box && box.getAttribute('data-sig') === sig) return;
    if (!box) { box = el('div', 'jf-events'); c.appendChild(box); }
    box.setAttribute('data-sig', sig);
    box.textContent = '';
    var chip = function (label, value, n) {
      var b = el('button', 'jf-event-chip'); b.type = 'button';
      b.appendChild(document.createTextNode(label)); b.appendChild(el('span', null, String(n)));
      if (evTag === value) b.setAttribute('aria-pressed', 'true');
      if (!n) b.disabled = true;
      b.addEventListener('click', function () { evTag = value; pageNow[path] = 1; apply(); });
      box.appendChild(b);
    };
    chip('すべて', '', total);
    EVENT_TAGS.forEach(function (t) { chip(t, t, counts[t] || 0); });
  }

  // ---- ポッドキャスト ----
  // トップ: おすすめの下に番組の案内。人物のページ: その人物を取り上げた回へのリンク
  var feedState = 0;
  function mergeFeed(found) {
    Object.keys(found).forEach(function (p) {
      var have = EPISODES[p] || (EPISODES[p] = []);
      found[p].forEach(function (x) { if (!have.some(function (h) { return h[0] === x[0]; })) have.push(x); });
      have.sort(function (a, b) { return (parseInt(a[0].slice(1), 10) || 0) - (parseInt(b[0].slice(1), 10) || 0); });
    });
  }
  function loadFeed() {
    if (feedState) return;
    feedState = 1;
    try { var saved = JSON.parse(localStorage.getItem('jf-feed') || 'null'); if (saved && Date.now() - saved.at < 6 * 3600 * 1000) { mergeFeed(saved.found); setTimeout(apply, 0); return; } } catch (e) {}
    var text = function (u) { return fetch(u).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }); };
    Promise.all([text(SHOW.rss), text(SHOW.lookup).catch(function () { return '{}'; })]).then(function (r) {
      var apple = {}, found = {};
      try { (JSON.parse(r[1]).results || []).forEach(function (x) { if (x.trackName && x.trackId) apple[x.trackName.trim()] = SHOW.apple + '?i=' + x.trackId; }); } catch (e) {}
      new DOMParser().parseFromString(r[0], 'text/xml').querySelectorAll('item').forEach(function (it) {
        var t = txt(it.querySelector('title')), link = txt(it.querySelector('link'));
        if (!t || !link) return;
        Object.keys(PEOPLE).forEach(function (name) { if (t.indexOf(name) >= 0) (found[PEOPLE[name]] = found[PEOPLE[name]] || []).push([t, link, apple[t] || SHOW.apple, SHOW.amazon]); });
      });
      mergeFeed(found);
      try { localStorage.setItem('jf-feed', JSON.stringify({ at: Date.now(), found: found })); } catch (e) {}
      apply();
    }).catch(function () {});
  }
  function episodes(c, path) {
    var eps = EPISODES[path], box = c.querySelector(':scope > .jf-ep');
    if (!eps) { if (box) box.remove(); return; }
    var sig = path + '|' + eps.length;
    if (box && box.getAttribute('data-path') === sig) return;
    if (box) box.remove();
    box = el('div', 'jf-ep'); box.setAttribute('data-path', sig);
    box.appendChild(el('span', 'jf-pod-label', 'ポッドキャストで聴く'));
    eps.forEach(function (x) {
      var row = el('p'); row.appendChild(el('strong', null, x[0]));
      var ls = el('span', 'jf-pod-links'); ls.appendChild(out('Spotify', x[1])); ls.appendChild(out('Apple Podcast', x[2])); ls.appendChild(out('Amazon Music', x[3] || SHOW.amazon)); row.appendChild(ls);
      box.appendChild(row);
    });
    c.appendChild(box);
  }

  // ---- 黒帯(その日の1本目)の絵 ----
  // 写真は使わず、人物の名前を大きく組んだ自作の札をカードの上に置く。名前は見出しから拾う(登録済みの人物の、フルネームか姓)。
  // 人物が見つからないときは、見出しの最初のひと区切りを使う。
  var LEAD_ART = false;   // 試しの札は、いまは出さない(出すときは true)
  function leadArt(a, on, date) {
    var art = a.querySelector(':scope > .jf-art');
    if (!on) { if (art) art.remove(); return; }
    var title = txt(a.querySelector('.notion-page-title-text')), sig = date + '|' + title;
    if (art && art.getAttribute('data-sig') === sig) return;
    if (art) art.remove();
    var who = '', at = 1e9;
    Object.keys(PEOPLE).forEach(function (name) {
      var parts = name.split('・'), k = title.indexOf(name);
      if (k < 0) k = title.indexOf(parts[parts.length - 1]);
      if (k >= 0 && k < at) { at = k; who = name; }
    });
    var lines = who ? who.split('・') : [title.split(/[、。「 　]/)[0].slice(0, 10)];
    var longest = lines.reduce(function (m, s) { return Math.max(m, s.length); }, 1), all = lines.join('・').length;
    art = el('div', 'jf-art'); art.setAttribute('data-sig', sig); art.setAttribute('aria-hidden', 'true');
    art.style.setProperty('--stack', Math.min(15, 62 / longest).toFixed(2) + 'cqw');
    art.style.setProperty('--line', Math.min(11, 74 / all).toFixed(2) + 'cqw');
    art.appendChild(el('span', 'jf-art-tag', '黒帯' + (date ? '　' + dayLabel(date) : '')));
    var name = el('span', 'jf-art-name'); lines.forEach(function (s) { name.appendChild(el('b', null, s)); });
    art.appendChild(name); art.appendChild(el('i'));
    a.insertBefore(art, a.firstChild);
  }
  var tabPath = null;
  function apply() {
    var root = document.querySelector('.notion.page');
    if (!root) return;
    var mode = pageMode(root), top = mode === 'top';
    set(root, 'data-jf-page', mode);
    var now = new Date(), today = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    var path = location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.jf-tabs a').forEach(function (a) { set(a, 'aria-current', a.getAttribute('href') === path ? 'page' : null); });
    // スマホのタブは横にスクロールできる。ページが替わったら、いまのタブが見える位置まで寄せる
    if (tabPath !== path) {
      tabPath = path;
      var tin = document.querySelector('.jf-tabs-in'), cur = tin && tin.querySelector('a[aria-current="page"]');
      if (tin) tin.scrollLeft = cur && cur.offsetParent ? Math.max(0, cur.offsetLeft - (tin.clientWidth - cur.offsetWidth) / 2) : 0;
    }
    document.querySelectorAll('.notion-collection').forEach(function (c, ci) {
      var recs = top && ci > 0, last = null, group = 0;
      set(c, 'data-jf-recs', recs ? '1' : null);
      // トップの見出しの右に出す日付(いちばん新しい日)
      var d0 = top && !recs ? c.querySelector('a.notion-list-item .notion-property-date-item') : null, p0 = d0 ? d0.textContent.trim().split('/') : [];
      set(c, 'data-jf-date', p0.length === 3 ? p0[0] + '年' + Number(p0[1]) + '月' + Number(p0[2]) + '日' : null);
      var events = root.className.indexOf('page_id-' + EVENTS_PAGE) >= 0;
      var paged = (mode === 'list' && !events) || mode === 'person', items = c.querySelectorAll('a.notion-list-item'), arch = mode === 'archive', days = [], pageOf = [], hits = 0;
      // 大会から探す: 選んだ札の記事だけを、10本ずつ
      if (events) {
        var counts = {};
        items.forEach(function (a, i) {
          var tags = tagsOf(a);
          tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
          pageOf[i] = !evTag || tags.indexOf(evTag) >= 0 ? Math.ceil(++hits / PER_PAGE) : 0;
        });
      }
      // アーカイブ: ふだんは3日分ずつ。絞り込んでいるときは、当てはまる記事を10本ずつ
      if (arch) {
        var words = fQ.toLowerCase().split(/[\s\u3000]+/).filter(Boolean), on = filtering();
        items.forEach(function (a, i) {
          var d = a.querySelector('.notion-property-date-item'), t = d ? d.textContent.trim() : '', n = a.querySelector('.notion-property-number');
          if (t && days[days.length - 1] !== t) days.push(t);
          if (!on) { pageOf[i] = Math.ceil(days.length / DAYS_PER_PAGE); return; }
          var text = a.textContent.toLowerCase(), ok = (!fBelt || (n && n.textContent.trim() === String(fBelt))) && words.every(function (w) { return text.indexOf(w) >= 0; });
          pageOf[i] = ok ? Math.ceil(++hits / PER_PAGE) : 0;
        });
      }
      var pages = paged ? Math.ceil(items.length / PER_PAGE) : events ? Math.ceil(hits / PER_PAGE) : arch ? (filtering() ? Math.ceil(hits / PER_PAGE) : Math.ceil(days.length / DAYS_PER_PAGE)) : 0, page = Math.min(Math.max(pageNow[path] || 1, 1), pages || 1);
      pager(c, pages, page, path);
      var stale = c.querySelector(':scope > .jf-filter'), ep = c.querySelector(':scope > .jf-ep');
      if (arch) filterBar(c, days, page, path, hits); else if (stale) stale.remove();
      if (mode === 'person' && ci === 0) episodes(c, path); else if (ep) ep.remove();
      var evBox = c.querySelector(':scope > .jf-events');
      if (events) eventBar(c, counts, items.length, path); else if (evBox) evBox.remove();
      set(c, 'data-jf-events', events ? '1' : null);
      items.forEach(function (a, idx) {
        set(a, 'data-jf-off', paged && Math.floor(idx / PER_PAGE) + 1 !== page ? '1' : null);
        set(a, 'data-jf-pod', mode === 'people' && EPISODES[(a.getAttribute('href') || '').split('?')[0]] ? '1' : null);
        if (arch && pageOf[idx] !== page) { set(a, 'data-jf-off', '1'); set(a, 'data-jf-first', null); set(a, 'data-day', null); return; }
        if (events) set(a, 'data-jf-off', pageOf[idx] !== page ? '1' : null);
        var d = a.querySelector('.notion-property-date-item'), n = a.querySelector('.notion-property-number');
        var date = d ? d.textContent.trim() : '', key, first;
        if (mode !== 'people') {
          var sel = a.querySelector('.notion-property-select-item');
          remember((a.getAttribute('href') || '').split('?')[0], date, n ? Number(n.textContent.trim()) || 0 : 0, sel ? sel.textContent.trim() : '');
          if (top && !recs && idx === 0) freshTop(date);
        }
        if (mode === 'people') {
          var y = a.querySelector('.notion-property-text');
          key = kanaRow(y ? y.textContent.trim() : ''); first = key !== last; last = key;
          set(a, 'data-jf-first', first ? '1' : null); set(a, 'data-day', first ? key : null);
          return;
        }
        if (recs || mode === 'list' || mode === 'person') {
          set(a, 'data-rank', null); set(a, 'data-jf-belt', null); set(a, 'data-jf-first', null); set(a, 'data-jf-today', null); set(a, 'data-jf-old', null);
          set(a, 'data-day', recs && date ? dayLabel(date) : null);
          var evs = events ? tagsOf(a).join('・') : '';
          set(a, 'data-jf-date', !recs && date ? dayLabel(date) + (evs ? '　' + evs : '') : null);
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
        leadArt(a, LEAD_ART && top && first && group === 1, date);
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
    if (mode === 'people' || mode === 'person') loadFeed();
    // 帯の色のページ: 説明の行に、ヘッドラインと同じ帯の絵を付ける
    if (mode === 'belts' && main) main.querySelectorAll(':scope > ul.notion-list').forEach(function (u, i) { set(u, 'data-jf-beltrow', String(i + 1)); });
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
  // スマホ: 下へスクロールしたら上の帯とタブを隠し、上へ戻したら出す(見た目は jf.css の html.jf-hide)
  var lastY = window.pageYOffset, ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = Math.max(window.pageYOffset, 0), d = y - lastY;
      if (y < 80 || html.classList.contains('jf-menu-open')) html.classList.remove('jf-hide');
      else if (d > 6) html.classList.add('jf-hide');
      else if (d < -6) html.classList.remove('jf-hide');
      if (Math.abs(d) > 6) lastY = y;
      ticking = false;
    });
  }, { passive: true });
  // サイト内のリンクは、ページを読み込み直さずに切り替える。切り替わるまで本文をふっと薄くする
  var shownPath = null, fadeTurn = 'b', leaveTimer;
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null, href = a ? a.getAttribute('href') : '';
    if (!a || a.target === '_blank' || href.charAt(0) !== '/' || href.charAt(1) === '/') return;
    var here = location.pathname.replace(/\/$/, '') || '/', there = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    var router = window.next && window.next.router;
    if (!router) return;
    // 「前の日」「次の日」で移ったときは、その日のページを出すだけにする(「選んだニュース」の印は付けない)
    try { if (a.closest('.jf-daynav')) sessionStorage.setItem('jf-nopick', there); else sessionStorage.removeItem('jf-nopick'); } catch (err) {}
    e.preventDefault(); menu(false);
    if (there === here) { window.scrollTo(0, 0); return; }
    html.classList.add('jf-leaving');
    clearTimeout(leaveTimer); leaveTimer = setTimeout(function () { html.classList.remove('jf-leaving'); }, 4000);
    clientNav = true;
    router.push(href);
  });
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
  apply();
})();
