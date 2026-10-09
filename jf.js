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
        set(a, 'data-rank', top && n ? n.textContent.trim() : null);
        set(a, 'data-jf-belt', top ? '1' : null);
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
    if (mode === 'article' && main) linkNames(main);
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
    var mine = !!a.closest('.jf-chrome') || a.classList.contains('jf-who');
    var here = location.pathname.replace(/\/$/, '') || '/', there = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (there === here) { if (mine) { e.preventDefault(); menu(false); window.scrollTo(0, 0); } return; }
    var router = window.next && window.next.router;
    if (mine && !router) return;
    html.classList.add('jf-leaving');
    clearTimeout(leaveTimer); leaveTimer = setTimeout(function () { html.classList.remove('jf-leaving'); }, 4000);
    if (mine) { e.preventDefault(); menu(false); router.push(href); }
  });
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
  apply();
})();
