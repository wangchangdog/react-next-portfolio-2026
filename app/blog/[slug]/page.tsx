import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/format-date";
import { getPostBySlug } from "@/lib/posts";
import styles from "./page.module.css";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link className={styles.backLink} href="/blog">
            ブログ一覧へ戻る
          </Link>
          <ul className={styles.categories} aria-label="カテゴリー">
            {post.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <h1>{post.title}</h1>
          <p className={styles.description}>{post.description}</p>
          <time dateTime={post.publishedAt}>
            公開日: {formatDate(post.publishedAt)}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
