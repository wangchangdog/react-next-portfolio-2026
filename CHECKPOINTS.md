# 授業用チェックポイント

このファイルは、欠席や大きな破損から授業へ復帰するための手順をまとめたものです。通常の制作では、自分のリポジトリの作業をそのまま続けてください。

チェックポイントは、学生の進度を揃えるための停止地点ではありません。Notionに示された標準到達点を終えた学生は、次回以降の内容へ先行して構いません。チェックポイントは、現在のコードを修復できない場合に、必要な地点へ復帰するためだけに使用します。

## ブランチの意味

| ブランチ | 想定する利用場面 | 含まれる状態 |
|---|---|---|
| `checkpoint/week-07-start` | 第5回・第6回の作業を修復できない | サンプル作品、サンプル記事、サムネイル、主要ページの静的な雛形 |
| `checkpoint/week-10-start` | 第9回の一覧接続を修復できない | `blogs` APIと`works` APIから一覧を取得できる。詳細取得は未完成 |
| `checkpoint/week-11-start` | 第10回の詳細実装を修復できない | 作品・記事の一覧、詳細、リッチエディタ本文、Not Foundまで動作する |
| `reference/optional-category-complete` | 教員が発展機能の完成状態を説明する | ブログのカテゴリー別一覧と最大60秒ごとの再検証まで実装済み |

第8回はmicroCMS管理画面の準備、第9回は作品と記事の一覧接続を行うため、コードの復帰地点としては第7回開始時と第10回開始時を用意しています。授業日より先の内容へ進んでいる学生は、そのまま自分のリポジトリで制作を続けてください。

## 復帰時の原則

- 現在の作業を削除せず、新しいブランチへ切り替えます。
- `.env.local`はブランチへ含まれません。自分の環境で再設定します。
- チェックポイントのコードを使った場合でも、プロフィール、作品、記事、サムネイル、配色、文字組み、情報配置は自分の内容と判断へ変更します。
- デザイン上の変更と選んだ理由を、自分のREADMEへ記録します。
- `reference`ブランチは提出物や復帰地点ではありません。発展機能の説明にだけ使用します。
- 自分のコードが正常に動いている場合は、授業回に対応するチェックポイントへ戻る必要はありません。

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

第10回開始時の状態から復帰する例です。

```bash
git switch -c recovery-week-10 curriculum/checkpoint/week-10-start
npm install
npm run check
```

第11回開始時の状態から復帰する場合は、次のように変更します。

```bash
git switch -c recovery-week-11 curriculum/checkpoint/week-11-start
npm install
npm run check
```

第7回開始時の静的な状態へ戻る場合は、次のブランチを使用します。

```bash
git switch -c recovery-week-07 curriculum/checkpoint/week-07-start
npm install
npm run check
```

現在の作業ブランチへ直接上書きしないでください。必要な変更だけを比較し、自分の作業へ移す場合は、教員と確認してから行います。

## microCMSを使用するチェックポイント

第10回以降のチェックポイントでは、次の環境変数を`.env.local`へ設定します。

```text
MICROCMS_SERVICE_DOMAIN=自分のサービスドメイン
MICROCMS_API_KEY=自分のAPIキー
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

APIキーをGitHubへ追加してはいけません。公開サイト用のAPIキーは`GET`権限だけにし、環境変数を変更した後は開発サーバーを再起動してください。

## 確認順序

1. `npm install`が完了する。
2. `npm run dev`でTOP、作品一覧、作品詳細、ブログ一覧、ブログ詳細が表示される。
3. `.env.local`を使う場合は、秘密情報がGitの追跡対象に入っていないことを確認する。
4. 作品と記事のサムネイルが一覧と詳細に表示されることを確認する。
5. `npm run check`が成功する。
6. その回のNotionページにある「最低限の完了条件」を確認する。
7. 標準到達点を終えている場合は、次回以降のNotionページへ進んでよい。
8. 授業終了時点までの変更をコミットし、GitHubへプッシュする。
