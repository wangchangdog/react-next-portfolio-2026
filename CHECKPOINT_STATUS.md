# checkpoint/week-11-start

このブランチは、第11回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- microCMSの`blogs` APIから記事一覧を取得する
- microCMSのコンテンツIDをURL上の`slug`として使用する
- 記事詳細を1件取得し、`PostBody`でリッチエディタ本文を表示する
- Next.js 16の非同期`params`へ対応している
- 存在しない記事をNot Foundとして扱う
- 環境変数がない場合はサンプル記事へフォールバックする

## 第11回で学生が行うこと

- GitHubへ最新の変更をプッシュする
- Vercelへ自分のリポジトリをインポートする
- `MICROCMS_SERVICE_DOMAIN`と`MICROCMS_API_KEY`をVercelへ設定する
- 公開URLからTOP、プロフィール、ブログ一覧、ブログ詳細、Not Foundを確認する
- READMEへ公開URLと実装状況を記録する
- 冬休み前に未完了項目と改善計画を整理する

## 必要なmicroCMS API

### blogs

- `title`：テキストフィールド
- `description`：テキストエリア
- `content`：リッチエディタ

カテゴリー機能は必須要件ではありません。第13回以降の発展課題で追加できます。
