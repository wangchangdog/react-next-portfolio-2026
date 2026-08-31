# Codex作業方針

このリポジトリは、専門学校1年生が授業で段階的に実装するための学生向け雛形です。完成済みの高機能なポートフォリオへ一括変更せず、依頼された授業段階に必要な範囲だけを変更してください。

## ブランチ方針

- `master`は第5回開始時の学生用雛形として維持します。
- `checkpoint/week-07-start`は第7回開始時の復帰用です。
- `checkpoint/week-08-start`はmicroCMSの一覧接続まで完了した復帰用です。
- `checkpoint/week-09-start`は記事詳細とNot Foundまで完了した復帰用です。
- `reference/week-09-complete`はカテゴリーと再検証まで含む教員確認用です。
- チェックポイントや完成例のコードを`master`へ先回りして統合しません。

## Pull Request方針

- 変更を行うためにブランチを作成した場合は、コミットとプッシュの後に必ずPull Requestを作成します。
- `master`へ統合する通常の変更は、作業ブランチから`master`へPull Requestを作成します。
- チェックポイントは、直前のチェックポイントをBase、次のチェックポイントをHeadとするDraft Pull Requestを作成し、差分を小さく保ちます。
- 教員確認用の`reference`ブランチは、対応する開始チェックポイントをBaseとするDraft Pull Requestを作成します。
- レビュー専用のDraft Pull Requestはマージせず、授業段階の差分確認に使用します。
- Pull Request本文には、目的、BaseとHead、主な変更、意図的に未完成の部分、品質確認結果を記載します。
- 差分がないブランチではPull Requestを作成できません。ブランチを作る前に、そのブランチで管理する変更があることを確認します。

## 技術基準

- Node.js 24系、Next.js 16.3.3、React 19.2.8、TypeScript 5.9.3を基準とします。
- App Routerを使用します。
- Next.js 16の`params`と`searchParams`は、必要に応じてPromiseとして扱います。
- CSS Modulesを標準とし、追加のUIライブラリは明示的な依頼がある場合だけ導入します。
- サーバーで完結する処理はServer Componentに置き、ブラウザの状態やイベントが必要な部分だけClient Componentにします。

## データ取得の境界

- microCMSクライアントは`lib/microcms.ts`へ置きます。
- ページが呼び出す`getPosts()`や`getPostBySlug()`などは`lib/posts.ts`へ置きます。
- APIの取得処理を`page.tsx`へ直接書きません。
- 秘密情報がない状態でもCIを実行できるように、チェックポイントではサンプルデータへのフォールバックを残します。
- 第9回の標準コースでは、記事1件につきカテゴリー1件を参照します。
- 教員確認用の第9回完成例では、公開データを最大60秒ごとに再検証します。

## 教材としての制約

- サンプル記事は、第7回でmicroCMSへ置き換えるまで残します。
- TODOを先回りして大量に完成させないでください。
- コードは、1年生が追跡できる単純な構成を優先します。
- 抽象化は、同じ処理が複数箇所に現れた場合に行います。
- コメントは処理の説明ではなく、授業上の判断理由が必要な箇所に限定します。

## 品質確認

変更後は、可能な範囲で次を実行します。

```bash
npm run lint
npm run typecheck
npm run build
```

秘密情報をコード、README、テストデータへ記載しません。環境変数の名称だけを`.env.example`に記載します。
