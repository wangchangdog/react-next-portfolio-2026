export type Category = {
  id: string;
  name: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  category?: Category;
};
