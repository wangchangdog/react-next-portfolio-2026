import type { Work } from "@/types/work";

export const sampleWorks: Work[] = [
  {
    id: "react-pokemon-zukan",
    slug: "react-pokemon-zukan",
    title: "Reactポケモン図鑑",
    description:
      "React、TypeScript、外部API、ルーティングを使って制作したポケモン図鑑です。",
    content: [
      "PokeAPIから取得したデータを使い、ポケモンの一覧と詳細を表示するWebアプリを制作しました。",
      "画面を役割ごとのコンポーネントに分け、Propsを使って必要なデータを受け渡しています。",
      "制作中に発生した問題と解決方法を記録し、第三者が実装内容を確認できる状態を目指しました。",
    ],
    thumbnail: {
      url: "/images/sample-work-01.svg",
      width: 1200,
      height: 675,
    },
  },
  {
    id: "about-me-site",
    slug: "about-me-site",
    title: "自己紹介サイト",
    description:
      "HTML、CSS、JavaScriptを使って制作した、自分の学習内容を紹介するWebサイトです。",
    content: [
      "自分のプロフィール、学習中の技術、制作物を複数のページに分けて掲載しました。",
      "スマートフォンとPCの両方で読みやすくなるように、画面幅に応じてレイアウトを調整しています。",
      "GitHub Pagesへ公開し、第三者がURLから閲覧できる状態にしました。",
    ],
    thumbnail: {
      url: "/images/sample-work-02.svg",
      width: 1200,
      height: 675,
    },
  },
];
