import Link from "next/link";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { profile } from "@/data/profile";
import { getPosts } from "@/lib/posts";
import styles from "./page.module.css";

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>WEB PORTFOLIO</p>
            <h1>{profile.name}</h1>
            <p className={styles.role}>{profile.role}</p>
            <p className={styles.introduction}>{profile.introduction}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryAction} href="/profile">
                プロフィールを見る
              </Link>
              <Link className={styles.secondaryAction} href="/blog">
                ブログを見る
              </Link>
            </div>
          </div>
          <aside className={styles.summaryCard} aria-label="プロフィール概要">
            <span className={styles.avatar} aria-hidden="true">
              PF
            </span>
            <dl>
              <div>
                <dt>活動地域</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>学習中</dt>
                <dd>{profile.skills.slice(0, 3).join(" / ")}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>LATEST POSTS</p>
              <h2>最近の記事</h2>
            </div>
            <Link href="/blog">すべての記事を見る</Link>
          </div>
          <div className={styles.postGrid}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.sectionMuted}>
        <Container className={styles.goalsLayout}>
          <div>
            <p className={styles.eyebrow}>LEARNING GOALS</p>
            <h2>このサイトで伝えること</h2>
            <p>
              学習している技術だけでなく、何を考えて制作し、どのように改善したかを記録します。
            </p>
          </div>
          <ol className={styles.goalList}>
            {profile.learningGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
