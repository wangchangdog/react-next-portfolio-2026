import type { Work } from "@/types/work";

export const sampleWorks: Work[] = [
  {
    id: "react-pokemon-zukan",
    slug: "react-pokemon-zukan",
    title: "Reactポケモン図鑑",
    description: "React、TypeScript、外部API、ルーティングを使って制作したポケモン図鑑です。",
    content: "<p>PokeAPIのデータを使い、ポケモンの一覧と詳細を表示しました。</p><p>画面をコンポーネントに分け、Propsでデータを受け渡しています。</p><p>制作中の問題と解決方法も記録します。</p>",
    thumbnail: { url: "/images/sample-work-01.svg", width: 1200, height: 675 },
  },
  {
    id: "about-me-site",
    slug: "about-me-site",
    title: "自己紹介サイト",
    description: "HTML、CSS、JavaScriptを使って制作した、自分の学習内容を紹介するWebサイトです。",
    content: "<p>プロフィール、学習中の技術、制作物を複数のページに分けました。</p><p>スマートフォンとPCで読みやすいレイアウトに調整しています。</p><p>GitHub Pagesで公開しました。</p>",
    thumbnail: { url: "/images/sample-work-02.svg", width: 1200, height: 675 },
  },
];
