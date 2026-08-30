import Link from "next/link";
import { Container } from "@/components/Container";
import styles from "./SiteHeader.module.css";

const navigation = [
  { href: "/", label: "TOP" },
  { href: "/profile", label: "プロフィール" },
  { href: "/blog", label: "ブログ" },
] as const;

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/">
          Portfolio 2026
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className={styles.navigation}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className={styles.navigationLink} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
