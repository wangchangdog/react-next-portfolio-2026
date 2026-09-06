import "server-only";
import sanitizeHtml from "sanitize-html";
import styles from "./RichTextBody.module.css";

/** 講師提供の安全用部品。学生は呼び出し側でhtmlを渡します。 */
export function RichTextBody({ html }: { html: string }) {
  const clean = sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "figure", "figcaption"],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
    },
    allowedSchemes: ["https", "http", "mailto"],
    allowedSchemesByTag: { img: ["https"] },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
  });
  return <div className={styles.body} dangerouslySetInnerHTML={{ __html: clean }} />;
}
