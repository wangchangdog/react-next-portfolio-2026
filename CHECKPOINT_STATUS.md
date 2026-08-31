# checkpoint/week-11-start

このブランチは、第11回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- microCMSの`blogs` APIから記事一覧と記事詳細を取得する
- microCMSの`works` APIから作品一覧と作品詳細を取得する
- microCMSのコンテンツIDをURL上の`slug`として使用する
- 作品と記事の一覧・詳細にサムネイルを表示する
- `RichTextBody`でリッチエディタ本文をサニタイズして表示する
- Next.js 16の非同期`params`へ対応している
- 存在しない作品と記事をNot Foundとして扱う
- 環境変数がない場合はサンプル作品とサンプル記事へフォールバックする

## 第11回で学生が行うこと

- GitHubへ最新の変更をプッシュする
- Vercelへ自分のリポジトリをインポートする
- `MICROCMS_SERVICE_DOMAIN`と`MICROCMS_API_KEY`をVercelへ設定する
- 公開URLからTOP、プロフィール、作品一覧、作品詳細、ブログ一覧、ブログ詳細、Not Foundを確認する
- 作品と記事のサムネイルが公開環境でも表示されることを確認する
- READMEへ公開URLと実装状況を記録する
- 冬休み前に未完了項目と改善計画を整理する

## 必要なmicroCMS API

`blogs`と`works`の両方に、次のフィールドを作ります。

- `title`：テキストフィールド、必須
- `description`：テキストエリア、任意
- `content`：リッチエディタ、任意
- `thumbnail`：画像、任意

カテゴリー機能は必須要件ではありません。第13回以降の発展課題でブログへ追加できます。
