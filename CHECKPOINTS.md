# 2026-v2の保存と復帰

この教材では、完成ブランチへの切り替えを通常手順にしません。Notionのタスクを実行し、区切りで動く状態をコミットします。

## 作業前

````bash
git status
git diff
````

自分が変更したファイルを確認し、安全なファイルだけを指定して `git add`、`git commit`、`git push` を行います。`.env.local`、APIキー、個人情報を追加しません。

## 行き詰まった場合

現在のタスク番号、変更したファイル、期待した画面、エラーを教員へ示します。未コミットの作業を残したままreset、clean、checkoutで消さないでください。以前動いていたコミットと `git diff` で比べ、必要な箇所だけを修正します。

## 旧ブランチ

`checkpoint/week-07-start`、`checkpoint/week-10-start`、`checkpoint/week-11-start`、`reference/optional-category-complete` は旧教材用として保存しています。2026-v2のコードへ無条件にコピー・マージしません。削除はしていません。

## 教員用の再現

使い捨てのCI checkoutで `node course/apply-stage.mjs starter|list|detail` を実行し、各状態のLint・型・ビルドを検証します。これは復帰ツールや学生用の全自動完成ツールではありません。独自コンテンツがある作業場所では実行しません。
