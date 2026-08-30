import { Container } from "@/components/Container";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>© {new Date().getFullYear()} Portfolio 2026</p>
        <p>Next.jsを使った授業制作</p>
      </Container>
    </footer>
  );
}
