# ジュウジュツフィード

柔術・グラップリングのニュースサイト「ジュウジュツフィード」(Notion + Wraptas)の見た目を決めるファイルです。

- `jf.css` — 見た目(色、カード、帯の色、PC用の並べ方など)
- `jf.js` — タブ・メニュー・フッターを足し、一覧と記事ページに目印を付けるスクリプト
- `icons/` — ポッドキャストのアイコン

Wraptasの「サイトデザイン編集」→「HTML直接追記」から、GitHub Pages経由で読み込んでいます。

```html
<!-- headタグ -->
<link rel="stylesheet" href="https://life-memo.github.io/jiujitsu-feed/jf.css">
<!-- bodyタグ -->
<script src="https://life-memo.github.io/jiujitsu-feed/jf.js" defer></script>
```

このリポジトリのファイルを書き換えると、数分でサイトに反映されます。

人物を足すときは、Notionの「人物」データベースに足したうえで、`jf.js` の `PEOPLE` にも1行足します。
