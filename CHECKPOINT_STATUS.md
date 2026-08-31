# reference/optional-category-complete

このブランチは、カテゴリー機能を発展課題として実装した教員確認用の完成例です。学生が通常の授業開始地点として使用するブランチではありません。

## 完了していること

- microCMSの`blogs` APIから一覧と詳細を取得する
- microCMSの`categories` APIからカテゴリーを取得する
- `blogs.category`のコンテンツ参照を画面用の型へ変換する
- 記事カードと記事詳細からカテゴリー別一覧へ移動する
- 存在しないカテゴリーをNot Foundとして扱う
- 公開記事を最大60秒ごとに再検証する
- 環境変数がない場合はサンプル記事とサンプルカテゴリーへフォールバックする

## 利用する授業

- 第13回以降に、必須要件を完成した学生が発展課題として参照する
- 教員がカテゴリー機能の完成状態と差分を説明するときに使用する
- チェックポイントからの復帰には使用しない

## microCMSの構成

### blogs

- `title`：テキストフィールド
- `description`：テキストエリア
- `content`：リッチエディタ
- `category`：`categories`へのコンテンツ参照、1件

### categories

- `name`：テキストフィールド

## 確認するURL

- `/blog`
- `/blog/記事のコンテンツID`
- `/blog/category/カテゴリーのコンテンツID`
- 存在しない記事とカテゴリーのURL

## 学生へ提示するときの確認順序

1. `types/post.ts`のカテゴリー型
2. `lib/posts.ts`の取得・変換・再検証
3. `components/PostCard.tsx`のカテゴリーリンク
4. `app/blog/[slug]/page.tsx`の記事詳細リンク
5. `app/blog/category/[id]/page.tsx`の一覧とNot Found

完成コードを一括でコピーさせず、目的と差分を確認しながら必要な箇所だけ実装します。
