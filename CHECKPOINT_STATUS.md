# checkpoint/week-10-start

このブランチは、第10回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- microCMSの`blogs` APIと`works` APIが用意されている前提で、記事一覧と作品一覧を取得できる
- 両一覧にサムネイル、タイトル、概要を表示し、ブログ一覧には公開日も表示する
- `.env.local`に値がない場合はサンプル作品とサンプル記事を表示し、CIとローカル起動を維持する
- microCMSのリッチエディタ本文を扱うため、`Post.content`と`Work.content`をHTML文字列として定義している
- 本文表示用の`RichTextBody`コンポーネントを用意している
- Next.js 16の非同期`params`を使う作品詳細と記事詳細の骨格がある

## 第10回で学生が行うこと

- `lib/posts.ts`の`getPostBySlug()`を、microCMSから記事を1件取得する処理へ置き換える
- `lib/works.ts`の`getWorkBySlug()`を、microCMSから作品を1件取得する処理へ置き換える
- 一覧から詳細へ移動し、サムネイルと`RichTextBody`による本文を表示する
- 存在しない作品と記事をNot Foundとして扱う
- `npm run check`で一覧・詳細・型・ビルドを確認する

Vercelへの初回公開は第11回で行います。

## 必要なmicroCMS API

`blogs`と`works`の両方に、次のフィールドを作ります。

- `title`：テキストフィールド、必須
- `description`：テキストエリア、任意
- `content`：リッチエディタ、任意
- `thumbnail`：画像、任意

カテゴリーは必須要件ではありません。第13回以降の発展課題でブログへ追加できます。
