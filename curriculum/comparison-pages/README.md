# 実画面から比較図を再現する

`../images/`に保存した実画面をHTMLの`img`で読み込み、CSSで必要な範囲を抜き出して並べます。見出しと説明文はHTMLで付けています。元のJPEGファイルはそのまま使用します。

リポジトリのルートで次を実行します。追加の依存関係はありません。

```bash
node curriculum/comparison-pages/server.mjs --port 4173
```

| 開くURL | 作成する比較図 |
| --- | --- |
| `http://localhost:4173/css` | `t06-css-comparison.jpg`：自己紹介の行間 |
| `http://localhost:4173/posts` | `t06-posts-comparison.jpg`：TOPとブログ一覧の件数 |
| `http://localhost:4173/state` | `t06-state-comparison.jpg`：学習メモの開閉 |

元の実画面は1348×926pxで、比較用HTMLの幅も1348pxです。ブラウザで横幅を確保し、ページ先頭から見出し・比較部分・説明文が収まる状態を確認して撮影します。

抜き出す位置と大きさは`server.mjs`の`crop`呼び出し、見出しや余白は`style.css`で管理します。比較図を更新したら、文字切れ、画像の件数、本文の表示状態を元画像と見比べてください。終了時はCtrl+Cでサーバーを止めます。
