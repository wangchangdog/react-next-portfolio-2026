# checkpoint/week-08-start

このブランチは、第8回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- `.env.local`の値がある場合、microCMSの`blogs` APIから記事一覧を取得する
- 環境変数がない場合、サンプル記事を表示してCIとローカル起動を維持する
- microCMSのリッチエディタ本文を表示するための`PostBody`コンポーネント
- Next.js 16向けの非同期`params`を使う詳細ページの雛形

## 第8回で学生が行うこと

- `lib/posts.ts`の`getPostBySlug()`を、microCMSから1件取得する処理へ置き換える
- 一覧から詳細へ移動し、本文を表示する
- 存在しない記事でNot Foundを表示する
- Vercelへ環境変数を設定して公開する

## 必要なmicroCMS API

- エンドポイント：`blogs`
- `title`：テキストフィールド
- `description`：テキストエリア
- `content`：リッチエディタ

カテゴリーは第9回で追加します。
