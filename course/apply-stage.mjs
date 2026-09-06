import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// CIの使い捨てcheckout専用。学生の作業場所では実行させません。
if (process.env.CI !== "true") throw new Error("This script is for disposable CI checkouts only.");
const stage = process.argv[2];
if (!["starter", "list", "detail"].includes(stage)) throw new Error("Invalid stage");
if (stage !== "starter") {
  for (const file of ["posts", "works"]) {
    const source = resolve(`course/steps/${stage}/lib/${file}.ts.txt`);
    writeFileSync(resolve(`lib/${file}.ts`), readFileSync(source));
  }
}
console.log(`Course stage applied: ${stage}`);
