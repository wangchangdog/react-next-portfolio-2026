import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

if (process.env.CI !== "true") throw new Error("Run only in disposable CI.");
const stage = process.argv[2];
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", "3100"], {
  stdio: "inherit", env: { ...process.env, CONTENT_SOURCE: "sample" },
});
const base = "http://127.0.0.1:3100";
try {
  let ready = false;
  for (let i = 0; i < 30; i++) {
    if (server.exitCode !== null) throw new Error("Next server exited");
    try {
      const response = await fetch(base, { signal: AbortSignal.timeout(2000) });
      if (response.status === 200) { ready = true; break; }
    } catch { /* startup may not have completed */ }
    await delay(500);
  }
  assert.ok(ready, "Server did not become ready");
  const routes = ["/", "/profile", "/works", "/works/react-pokemon-zukan", "/blog", "/blog/first-post"];
  if (stage !== "starter") routes.push("/learning");
  for (const route of routes) {
    const response = await fetch(base + route, { signal: AbortSignal.timeout(10000) });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /<h1[\s>]/, route);
    if (route === "/learning") assert.match(html, /aria-expanded="false"/);
  }
  for (const route of ["/blog/not-existing-test-id", "/works/not-existing-test-id"]) {
    const response = await fetch(base + route, { signal: AbortSignal.timeout(10000) });
    const html = await response.text();
    // App Routerではstream開始後のnotFoundは200になり得ます。
    // https://nextjs.org/docs/app/api-reference/file-conventions/not-found
    assert.ok([200, 404].includes(response.status), `${route}: ${response.status}`);
    assert.match(html, /ページが見つかりません/, route);
    assert.match(html, /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/, route);
  }
  console.log(`HTTP route smoke passed: ${stage}. Sample data only; not a browser/CMS end-to-end test.`);
} finally {
  server.kill("SIGTERM");
}
