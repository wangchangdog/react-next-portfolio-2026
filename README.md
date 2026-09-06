# React Next Portfolio 2026

2026年度Web基礎の学生用雛形です。Notionの指示から、サンプル表示のサイトを自分のポートフォリオ兼ブログへ育てます。教科書どおりの企業サイトを別に作る必要はありません。

授業ポータル: https://app.notion.com/p/kyototech/Web-2026-3cc24b6a67ce80a980c7fdcfed1e842a

## 教材版

本文照合版 `textbook-walkthrough-2026-09-06` を使用します。対応ブランチは `curriculum/textbook-walkthrough` です。PRのマージ前はこのブランチで確認してください。旧チェックポイントを混ぜず、`curriculum/edition.json`を確認します。

出発点にはTOP、プロフィール、ブログ一覧・詳細、作品一覧・詳細、サンプル画像、共通部品があります。CMSの一覧・詳細の取得はまだサンプルを返すため、NotionのT09とT10で実装します。安全な本文表示と環境変数の確認は講師提供部分として用意しています。

## 個別進度で進める

授業日のページには標準的な到達目安を示します。開始条件を満たすタスクから自分の進度で進め、完了したら次へ進んで構いません。教員は実装、エラー解決、設計、デザインを個別に支援します。共通の提出日はNotionを確認してください。

| 標準回 | 作業 |
|---|---|
| 5 | 起動、プロフィール、URLとファイルの対応 |
| 6 | CSS、画像、配列とmap、props、共通部品、Server/Client |
| 7 | 既習内容の定着と個別の進度調整。完了済みなら先へ進む |
| 8 | blogsとworksのAPI、記事2件・作品1件、環境変数 |
| 9 | ブログ一覧を実装した後、作品一覧へ応用 |
| 10 | ブログ詳細を実装した後、作品詳細へ応用 |
| 11 | Vercel公開とCMSの変更反映確認 |
| 12 | メタデータ、画像、表示、アクセシビリティ、Lighthouse |
| 13〜15 | 個人制作、発展課題、提出、講評 |

## 起動と確認

Node.js 24系とnpm、Gitを使用します。自分用のリポジトリを作る手順はNotionのT05に記載しています。

````bash
npm install
npm run dev
````

http://localhost:3000 を開きます。最初は環境変数がなくてもサンプルで動きます。

````bash
npm run check
npm run test:curriculum
````

checkはLint、TypeScript型検査、本番ビルドです。test:curriculumは教材用コードの検証です。

## microCMS

blogsとworksはリスト形式です。titleはテキストフィールドで必須、descriptionはテキストエリア、contentはリッチエディタ、thumbnailは画像として用意します。後ろの3項目はスキーマ上は任意ですが、提出用記事2件と作品1件には内容と画像を登録します。

`.env.example`を`.env.local`へコピーし、MICROCMS_SERVICE_DOMAINとMICROCMS_API_KEYを設定します。サービスIDにはURLを入れません。キーはGET専用にし、NEXT_PUBLIC_を付けません。APIキーの値をGitHubや提出物へ含めないでください。

````bash
node --env-file=.env.local scripts/check-cms.mjs
````

T09以降、接続設定の不足をサンプルへ切り替えて隠しません。サイトが表示されただけでなく、自分がCMSで作成したタイトルと更新が反映されることを確認します。

## デザイン

単一カラム、無彩色、文字、余白、境界線を基本とする中立的な土台です。学生は色、文字組み、情報配置を自分で決め、その理由を自分のREADMEへ記録します。グラデーションや装飾を増やすことは必須ではありません。

## 実装例と復帰

Notionのコードは `curriculum/steps` と対応しています。[教材の設計と検証](curriculum/README.md)、[復帰時の注意](CHECKPOINTS.md)を参照してください。普段は自分のコードを続け、解答へ一括切り替えたり、毎回チェックポイントへ戻ったりしません。

変更したファイルを確認し、秘密情報を含めずにコミット・プッシュします。完成時は、このREADMEを自分の作品、公開URL、使用技術、起動方法、工夫、生成AIの検証記録へ書き換えます。
