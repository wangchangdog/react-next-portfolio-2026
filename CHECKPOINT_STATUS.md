# reference/week-09-complete

このブランチは、第9回授業の教員確認用完成例です。通常の学生用開始地点ではありません。

## 完了していること

- microCMSの`blogs` APIから一覧と詳細を取得する
- microCMSの`categories` APIからカテゴリーを取得する
- `blogs.category`のコンテンツ参照を画面用の型へ変換する
- 記事カードと記事詳細からカテゴリー別一覧へ移動する
- 存在しないカテゴリーをNot Foundとして扱う
- 公開記事を最大60秒ごとに再検証する
- 環境変数がない場合はサンプル記事とサンプルカテゴリーへフォールバックする

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

## 学生へ提示するときの注意

完成コードを一括でコピーさせず、次の順に差分を確認します。

1. `types/post.ts`のカテゴリー型
2. `lib/posts.ts`の取得と変換
3. `PostCard`のカテゴリーリンク
4. `app/blog/category/[id]/page.tsx`
5. `customRequestInit.next.revalidate`
