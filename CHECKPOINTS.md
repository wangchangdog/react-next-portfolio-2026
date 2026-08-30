# 授業用チェックポイント

このファイルは、欠席や大きな破損から授業へ復帰するための手順をまとめたものです。通常の制作では、自分のリポジトリの作業をそのまま続けてください。

## ブランチの意味

| ブランチ | 想定する利用場面 | 含まれる状態 |
|---|---|---|
| `checkpoint/week-07-start` | 第5回・第6回の作業をやり直す必要がある | サンプル記事、プロフィール、主要ページの静的な雛形 |
| `checkpoint/week-08-start` | 第7回のmicroCMS一覧接続で止まった | `blogs` APIから一覧を取得できる。詳細取得は未完成 |
| `checkpoint/week-09-start` | 第8回の記事詳細で止まった | 一覧、詳細、Not Foundまで動作する。カテゴリーは未実装 |
| `reference/week-09-complete` | 教員が完成状態を確認する | カテゴリー別一覧と最大60秒ごとの再検証まで実装済み |

## 復帰時の原則

- 現在の作業を削除せず、新しいブランチへ切り替えます。
- `.env.local`はブランチへ含まれません。自分の環境で再設定します。
- チェックポイントのコードを使った場合でも、プロフィール、記事、画像、公開URLは自分の内容へ変更します。
- `reference`ブランチは提出物ではありません。完成状態の確認と教員の説明に使用します。

## 元の雛形をリモートとして追加する

自分のリポジトリを開いたターミナルで、次を実行します。すでに`curriculum`が登録されている場合、最初のコマンドは不要です。

```bash
git remote add curriculum https://github.com/wangchangdog/react-next-portfolio-2026.git
git fetch curriculum
```

登録状況は次で確認できます。

```bash
git remote -v
```

## チェックポイントから新しい復帰ブランチを作る

第8回開始時の状態から復帰する例です。

```bash
git switch -c recovery-week-08 curriculum/checkpoint/week-08-start
npm install
npm run check
```

第9回開始時の状態から復帰する場合は、ブランチ名を変更します。

```bash
git switch -c recovery-week-09 curriculum/checkpoint/week-09-start
npm install
npm run check
```

現在の作業ブランチへ直接上書きしないでください。必要な変更だけを比較し、自分の作業へ移す場合は、教員と確認してから行います。

## microCMSを使用するチェックポイント

第8回以降のチェックポイントでは、次の環境変数を`.env.local`へ設定します。

```text
MICROCMS_SERVICE_DOMAIN=自分のサービスドメイン
MICROCMS_API_KEY=自分のAPIキー
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

APIキーをGitHubへ追加してはいけません。環境変数を変更した後は、開発サーバーを再起動してください。

## 確認順序

1. `npm install`が完了する。
2. `npm run dev`でTOPページが表示される。
3. `npm run check`が成功する。
4. その回のNotionページにある「最低限の完了条件」を確認する。
5. 自分用の変更をコミットし、GitHubへプッシュする。
