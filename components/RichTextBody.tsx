import sanitizeHtml from "sanitize-html";
import styles from "./RichTextBody.module.css";

type RichTextBodyProps = {
  html: string;
};

export function RichTextBody({ html }: RichTextBodyProps) {
  const sanitizedHtml = sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "figure",
      "figcaption",
    ],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });

  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
