import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getCategoryById, getPostsByCategory } from "@/lib/posts";
import styles from "../../page.module.css";

type CategoryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) {
    return {
      title: "カテゴリーが見つかりません",
    };
  }

  return {
    title: `${category.name}の記事`,
    description: `${category.name}カテゴリーのブログ記事を掲載します。`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = await getCategoryById(id);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category.id);

  return (
    <Container className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>BLOG CATEGORY</p>
        <h1>{category.name}の記事</h1>
        <p>
          {category.name}カテゴリーに登録されている記事を表示しています。
        </p>
        <p>
          <Link href="/blog">すべての記事へ戻る</Link>
        </p>
      </header>

      {posts.length > 0 ? (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>このカテゴリーには、公開中の記事がありません。</p>
      )}
    </Container>
  );
}
