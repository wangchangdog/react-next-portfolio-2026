import type { Thumbnail } from "@/types/media";

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
  thumbnail?: Thumbnail;
  category?: Category;
};
