# checkpoint/week-09-start

このブランチは、第9回授業を開始するための途中復帰用チェックポイントです。

## 完了していること

- microCMSの`blogs` APIから記事一覧を取得する
- microCMSのコンテンツIDをURLの`slug`として使用する
- 記事詳細を1件取得し、リッチエディタ本文を表示する
- 存在しない記事をNot Foundとして扱う
- 環境変数がない場合はサンプル記事へフォールバックする
- Vercelへ公開できる構成

## 第9回で学生が行うこと

- microCMSへ`categories` APIを追加する
- `blogs` APIへコンテンツ参照の`category`フィールドを追加する
- 記事カードと記事詳細へカテゴリーを表示する
- カテゴリー別のブログ一覧ページを作る
- 公開記事を最大60秒ごとに再検証する

## 必要なmicroCMS API

### blogs

- `title`：テキストフィールド
- `description`：テキストエリア
- `content`：リッチエディタ

### categories

第9回の授業で作成します。
