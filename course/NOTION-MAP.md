# Notionと検証用コードの対応

教材版2026-v2。Notionが学生の入口です。この文書は教員の照合用です。

| タスク | NotionページID | 対応する検証用コード |
|---|---|---|
| 05-04・06-04・06-06 | 33f24b6a67ce819281c0e4c6f83c04e9 / 33f24b6a67ce8172b8d4d15eef668435 | course/steps/foundation |
| 09-02 | 33f24b6a67ce813398b6d5dd1646b4b4 | course/steps/list/lib/posts.ts.txt |
| 09-04 | 33f24b6a67ce813398b6d5dd1646b4b4 | course/steps/list/lib/works.ts.txt |
| 10-02 | 33f24b6a67ce811e9c3df223d0e5ab97 | course/steps/detail/lib/posts.ts.txt |
| 10-03 | 33f24b6a67ce811e9c3df223d0e5ab97 | course/steps/detail/lib/works.ts.txt |

Notion第9回はファイル全体の置換コードです。第10回はimportを追加し、詳細取得関数だけを置換します。後者の結果をdetailスナップショットで検証します。CSS、個人プロフィール、独自コンテンツを全上書きする手順ではありません。

CIはstarter→foundation→list→detailで必要になる各到達状態を独立checkoutで構成し、Lint、型、本番ビルド、モックテスト、サンプルデータのHTTPルートを検証します。HTTP検証はJavaScriptを操作するブラウザテストでも、実CMSへのE2Eテストでもありません。

教材を変更したら、同じタスクのNotion掲載コードとこのスナップショットを同時に更新します。教科書の版差・参照ページ・省略禁止の前提説明も確認します。
