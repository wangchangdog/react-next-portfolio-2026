import type { Post } from "@/types/post";

export const samplePosts: Post[] = [
  {
    id: "first-post",
    slug: "first-post",
    title: "ポートフォリオ制作を始めました",
    description:
      "Next.jsの雛形を起動し、これから制作するサイトの目的を整理しました。",
    content: `
      <p>このサイトは、授業で学んだ内容と制作物を第三者へ伝えるために作ります。</p>
      <p>最初の段階ではサンプルデータを表示しています。第7回の授業で、microCMSから取得した記事へ置き換えます。</p>
      <p>授業ごとの変更をGitHubへ記録し、どのようにサイトが成長したか分かる状態にします。</p>
    `,
    publishedAt: "2026-11-07T00:00:00.000Z",
    category: {
      id: "lesson",
      name: "授業",
    },
  },
  {
    id: "react-learning",
    slug: "react-learning",
    title: "Reactポケモン図鑑で学んだこと",
    description:
      "コンポーネント、Props、外部API、ルーティングを使った制作を振り返ります。",
    content: `
      <p>Reactポケモン図鑑では、画面を役割ごとのコンポーネントに分割しました。</p>
      <p>PokeAPIから取得したデータを一覧と詳細の画面へ表示し、URLに応じて表示内容を切り替えました。</p>
      <p>Next.jsの制作でも、Reactで学んだコンポーネントの考え方を引き続き使用します。</p>
    `,
    publishedAt: "2026-10-31T00:00:00.000Z",
    category: {
      id: "react",
      name: "React",
    },
  },
  {
    id: "future-plan",
    slug: "future-plan",
    title: "これから追加したい内容",
    description:
      "プロフィール、作品紹介、ブログをどのように充実させるか計画します。",
    content: `
      <p>プロフィールには、学習している技術だけでなく、どのようなものを作りたいかを記載します。</p>
      <p>作品紹介では、完成画面だけでなく、目的、担当した内容、工夫した点も説明します。</p>
      <p>ブログには、授業で発生した問題と、その問題をどのように解決したかを記録します。</p>
    `,
    publishedAt: "2026-10-24T00:00:00.000Z",
  },
];
