import type { Thumbnail } from "@/types/media";

export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** サンプルとmicroCMSのどちらでもHTML文字列を使います。 */
  content: string;
  publishedAt: string;
  thumbnail?: Thumbnail;
};
