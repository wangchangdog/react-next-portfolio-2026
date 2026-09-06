import type { Post } from "@/types/post";

export const samplePosts: Post[] = [
  {
    id: "first-post",
    slug: "first-post",
    title: "ポートフォリオ制作を始めました",
    description: "Next.jsの雛形を起動し、これから制作するサイトの目的を整理しました。",
    content: "<p>このサイトは、授業で学んだ内容と制作物を第三者へ伝えるために作ります。</p><p>最初の段階ではサンプルデータを表示しています。接続タスクでmicroCMSの記事へ置き換えます。</p><p>変更をGitHubへ記録し、サイトが成長した過程を残します。</p>",
    publishedAt: "2026-11-07T00:00:00.000Z",
    thumbnail: { url: "/images/sample-blog-01.svg", width: 1200, height: 675 },
  },
  {
    id: "react-learning",
    slug: "react-learning",
    title: "Reactポケモン図鑑で学んだこと",
    description: "コンポーネント、Props、外部API、ルーティングを使った制作を振り返ります。",
    content: "<p>Reactポケモン図鑑では、画面を役割ごとのコンポーネントに分割しました。</p><p>PokeAPIのデータを一覧と詳細へ表示しました。</p><p>Next.jsでもReactのコンポーネントの考え方を使用します。</p>",
    publishedAt: "2026-10-31T00:00:00.000Z",
    thumbnail: { url: "/images/sample-blog-02.svg", width: 1200, height: 675 },
  },
  {
    id: "future-plan",
    slug: "future-plan",
    title: "これから追加したい内容",
    description: "プロフィール、作品紹介、ブログをどのように充実させるか計画します。",
    content: "<p>プロフィールには学習中の技術と作りたいものを記載します。</p><p>作品紹介では目的、担当内容、工夫した点を説明します。</p><p>ブログには問題と解決方法を記録します。</p>",
    publishedAt: "2026-10-24T00:00:00.000Z",
    thumbnail: { url: "/images/sample-blog-03.svg", width: 1200, height: 675 },
  },
];
