import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types/post";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        {post.category ? (
          <Link
            className={styles.categoryLink}
            href={`/blog/category/${post.category.id}`}
          >
            {post.category.name}
          </Link>
        ) : null}
      </div>
      <h2 className={styles.title}>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className={styles.description}>{post.description}</p>
      <Link className={styles.moreLink} href={`/blog/${post.slug}`}>
        記事を読む
      </Link>
    </article>
  );
}
