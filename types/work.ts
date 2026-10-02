import type { Thumbnail } from "@/types/media";

export type Work = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  thumbnail?: Thumbnail;
};
