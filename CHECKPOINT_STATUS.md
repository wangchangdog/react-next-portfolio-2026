# checkpoint/week-10-start

このブランチは、第10回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- microCMSの`blogs` APIと公開記事が用意されている前提で、記事一覧を取得できる
- `.env.local`に値がない場合はサンプル記事を表示し、CIとローカル起動を維持する
- microCMSのリッチエディタ本文を扱うため、`Post.content`をHTML文字列として定義している
- 本文表示用の`PostBody`コンポーネントを用意している
- Next.js 16の非同期`params`を使う詳細ページの骨格がある

## 第10回で学生が行うこと

- `lib/posts.ts`の`getPostBySlug()`を、microCMSから1件取得する処理へ置き換える
- 一覧から記事詳細へ移動し、`PostBody`を使って本文を表示する
- 存在しない記事をNot Foundとして扱う
- `npm run check`で一覧・詳細・型・ビルドを確認する

Vercelへの初回公開は第11回で行います。

## 必要なmicroCMS API

### blogs

- `title`：テキストフィールド
- `description`：テキストエリア
- `content`：リッチエディタ

カテゴリーは必須要件ではありません。第13回以降の発展課題で追加できます。
