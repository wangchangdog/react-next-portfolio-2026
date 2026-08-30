import type { MicroCMSListContent } from "microcms-js-sdk";
import { samplePosts } from "@/data/sample-posts";
import { getMicroCMSClient } from "@/lib/microcms";
import type { Post } from "@/types/post";

type MicroCMSBlog = {
  title: string;
  description?: string;
  content?: string;
} & MicroCMSListContent;

function sortPosts(posts: Post[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function toPost(blog: MicroCMSBlog): Post {
  return {
    id: blog.id,
    slug: blog.id,
    title: blog.title,
    description: blog.description ?? "",
    content: blog.content ?? "",
    publishedAt: blog.publishedAt ?? blog.createdAt,
  };
}

export async function getPosts(): Promise<Post[]> {
  const client = getMicroCMSClient();

  if (!client) {
    return sortPosts(samplePosts);
  }

  const { contents } = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: {
      orders: "-publishedAt",
    },
  });

  return contents.map(toPost);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const client = getMicroCMSClient();

  if (!client) {
    return samplePosts.find((post) => post.slug === slug);
  }

  try {
    const blog = await client.getListDetail<MicroCMSBlog>({
      endpoint: "blogs",
      contentId: slug,
    });

    return toPost(blog);
  } catch {
    return undefined;
  }
}
