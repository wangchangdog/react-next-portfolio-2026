"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.page}>
      <p className={styles.label}>ERROR</p>
      <h1>ページの表示中に問題が発生しました</h1>
      <p>時間を置いて再度試すか、直前に行った操作を確認してください。</p>
      <button type="button" onClick={reset}>
        もう一度試す
      </button>
    </div>
  );
}
