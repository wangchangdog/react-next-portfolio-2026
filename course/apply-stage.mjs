import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

// CIの使い捨てcheckout専用。学生の作業場所では実行させません。
if (process.env.CI !== "true") throw new Error("This script is for disposable CI checkouts only.");
const stage = process.argv[2];
if (!["starter", "foundation", "list", "detail"].includes(stage)) throw new Error("Invalid stage");
function apply(group, path) {
  const target = resolve(path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, readFileSync(resolve(`course/steps/${group}/${path}.txt`)));
}
if (stage !== "starter") {
  for (const path of ["components/LearningNote.tsx", "components/LearningToggle.tsx", "app/learning/page.tsx"]) {
    apply("foundation", path);
  }
}
if (stage === "list" || stage === "detail") {
  for (const path of ["lib/posts.ts", "lib/works.ts"]) apply(stage, path);
}
console.log(`Course stage applied: ${stage}`);
