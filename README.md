# React Next Portfolio 2026

2026年度「Web基礎」後期授業で使用する、Next.jsポートフォリオ制作の学生向け雛形です。

このリポジトリは完成品ではありません。第5回以降の授業で、ページ構成、コンポーネント、microCMS連携、Vercelへの公開、デザイン改善を順番に追加します。

## この雛形に含まれるもの

- Next.js App Routerを使った最小構成
- TOP、プロフィール、ブログ一覧、ブログ詳細の基本ページ
- 共通のヘッダー、フッター、レイアウト
- microCMSへ置き換える前のサンプル記事データ
- ESLint、TypeScript、ビルド確認用のスクリプト
- microCMS用環境変数の記入例

## 使用する主な技術

- Next.js 16.3.3
- React 19.2.8
- TypeScript
- CSS Modules
- microCMS JavaScript SDK 3.4.0
- Vercel

## 必要な環境

- Node.js 24系
- npm
- Git
- GitHubアカウント
- Visual Studio Code

## 開発を始める

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで次のURLを開きます。

```text
http://localhost:3000
```

## 確認コマンド

```bash
npm run lint
npm run typecheck
npm run build
```

3つを順番に確認する場合は、次のコマンドを使用します。

```bash
npm run check
```

## 環境変数

第7回のmicroCMS連携で使用します。最初の段階では設定しなくても、サンプル記事を使ってサイトを起動できます。

```bash
cp .env.example .env.local
```

Windowsのコマンドプロンプトでは、次のようにコピーします。

```bat
copy .env.example .env.local
```

`.env.local` に、各自のmicroCMSサービスで発行された値を設定します。APIキーをGitHubへコミットしてはいけません。

## 授業での進め方

1. 第5回では、雛形を起動し、サイトの目的とページ構成を決めます。
2. 第6回では、レイアウトとコンポーネントを確認し、自分のプロフィールへ書き換えます。
3. 第7回では、サンプル記事をmicroCMSのデータへ置き換えます。
4. 第8回では、記事詳細、エラー処理、Vercelへの初回公開を行います。
5. 第9回では、検索またはカテゴリー機能を追加します。
6. 第10回では、メタデータ、画像、レスポンシブ対応、品質確認を行います。
7. 第11回以降は、必須要件を維持しながら、デザインと独自機能を改善します。

## ディレクトリ構成

```text
.
├── app/                  # App Routerのページとレイアウト
├── components/           # 複数ページで使用するコンポーネント
├── data/                 # 授業前半で使用するサンプルデータ
├── lib/                  # データ取得処理
├── types/                # TypeScriptの型定義
├── public/               # 画像などの静的ファイル
├── .env.example          # 環境変数の記入例
└── package.json          # 依存関係とコマンド
```

## 注意事項

- 授業資料と、このリポジトリの `package.json` に記載されたバージョンを基準にしてください。
- 検索結果や生成AIが、異なるNext.jsのバージョンを前提にしている場合があります。
- 生成AIが提示したコードは、そのまま貼り付けず、変更対象と処理内容を確認してください。
- 授業終了前に変更をコミットし、GitHubへプッシュしてください。
- 提出時には、READMEを自分の作品を説明する内容へ書き換えてください。
