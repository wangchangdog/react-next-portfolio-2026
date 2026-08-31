import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types/post";
import styles from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
  headingLevel?: "h2" | "h3";
};

export function PostCard({
  post,
  headingLevel = "h2",
}: PostCardProps) {
  const Heading = headingLevel;

  return (
    <article className={styles.item}>
      <time className={styles.date} dateTime={post.publishedAt}>
        {formatDate(post.publishedAt)}
      </time>
      <div>
        <Heading className={styles.title}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </Heading>
        <p className={styles.description}>{post.description}</p>
      </div>
    </article>
  );
}
