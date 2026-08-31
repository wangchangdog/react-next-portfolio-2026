import type { MicroCMSListContent } from "microcms-js-sdk";
import { samplePosts } from "@/data/sample-posts";
import { getMicroCMSClient } from "@/lib/microcms";
import type { Thumbnail } from "@/types/media";
import type { Category, Post } from "@/types/post";

type MicroCMSCategory = {
  name: string;
} & MicroCMSListContent;

type MicroCMSBlog = {
  title: string;
  description?: string;
  content?: string;
  thumbnail?: Thumbnail;
  category?: MicroCMSCategory;
} & MicroCMSListContent;

const requestInit = {
  next: {
    revalidate: 60,
  },
} as const;

function sortPosts(posts: Post[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function toCategory(category: MicroCMSCategory): Category {
  return {
    id: category.id,
    name: category.name,
  };
}

function toPost(blog: MicroCMSBlog): Post {
  return {
    id: blog.id,
    slug: blog.id,
    title: blog.title,
    description: blog.description ?? "",
    content: blog.content ?? "",
    publishedAt: blog.publishedAt ?? blog.createdAt,
    thumbnail: blog.thumbnail,
    category: blog.category ? toCategory(blog.category) : undefined,
  };
}

function getSampleCategory(categoryId: string): Category | undefined {
  return samplePosts
    .map((post) => post.category)
    .find((category) => category?.id === categoryId);
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
    customRequestInit: requestInit,
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
      customRequestInit: requestInit,
    });

    return toPost(blog);
  } catch {
    return undefined;
  }
}

export async function getCategoryById(
  categoryId: string,
): Promise<Category | undefined> {
  const client = getMicroCMSClient();

  if (!client) {
    return getSampleCategory(categoryId);
  }

  try {
    const category = await client.getListDetail<MicroCMSCategory>({
      endpoint: "categories",
      contentId: categoryId,
      customRequestInit: requestInit,
    });

    return toCategory(category);
  } catch {
    return undefined;
  }
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  const client = getMicroCMSClient();

  if (!client) {
    return sortPosts(
      samplePosts.filter((post) => post.category?.id === categoryId),
    );
  }

  const { contents } = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${categoryId}`,
      orders: "-publishedAt",
    },
    customRequestInit: requestInit,
  });

  return contents.map(toPost);
}
