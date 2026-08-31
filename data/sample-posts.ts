import type { Post } from "@/types/post";

export const samplePosts: Post[] = [
  {
    id: "first-post",
    slug: "first-post",
    title: "ポートフォリオ制作を始めました",
    description:
      "Next.jsの雛形を起動し、これから制作するサイトの目的を整理しました。",
    content: [
      "このサイトは、授業で学んだ内容と制作物を第三者へ伝えるために作ります。",
      "最初の段階ではサンプルデータを表示しています。第9回の授業で、microCMSから取得した記事へ置き換えます。",
      "授業ごとの変更をGitHubへ記録し、どのようにサイトが成長したか分かる状態にします。",
    ],
    publishedAt: "2026-11-07T00:00:00.000Z",
  },
  {
    id: "react-learning",
    slug: "react-learning",
    title: "Reactポケモン図鑑で学んだこと",
    description:
      "コンポーネント、Props、外部API、ルーティングを使った制作を振り返ります。",
    content: [
      "Reactポケモン図鑑では、画面を役割ごとのコンポーネントに分割しました。",
      "PokeAPIから取得したデータを一覧と詳細の画面へ表示し、URLに応じて表示内容を切り替えました。",
      "Next.jsの制作でも、Reactで学んだコンポーネントの考え方を引き続き使用します。",
    ],
    publishedAt: "2026-10-31T00:00:00.000Z",
  },
  {
    id: "future-plan",
    slug: "future-plan",
    title: "これから追加したい内容",
    description:
      "プロフィール、作品紹介、ブログをどのように充実させるか計画します。",
    content: [
      "プロフィールには、学習している技術だけでなく、どのようなものを作りたいかを記載します。",
      "作品紹介では、完成画面だけでなく、目的、担当した内容、工夫した点も説明します。",
      "ブログには、授業で発生した問題と、その問題をどのように解決したかを記録します。",
    ],
    publishedAt: "2026-10-24T00:00:00.000Z",
  },
];
