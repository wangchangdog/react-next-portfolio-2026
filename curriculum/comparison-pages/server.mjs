import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const comparisonRoot = dirname(fileURLToPath(import.meta.url));
const sourceRoot = join(comparisonRoot, '..', 'images');
const optionValue = (name) => {
  const index = process.argv.indexOf(name);
  if (index >= 0) return process.argv[index + 1];
  return process.argv.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
};
const port = Number(optionValue('--port') || process.env.PORT || 4173);
const host = optionValue('--host') || '127.0.0.1';
const originals = new Set([
  't06-css-before.jpg', 't06-css-after.jpg',
  't06-top-one-post.jpg', 't06-blog-three-posts.jpg',
  't06-learning-note-closed.jpg', 't06-learning-note-open.jpg',
]);

const crop = (filename, alt, box, displayWidth) => {
  const [x, y, width, height] = box;
  const scale = displayWidth / width;
  return `<div class="crop" style="width:${displayWidth}px;height:${height * scale}px"><img src="/images/${filename}" alt="${alt}" draggable="false" style="width:${1348 * scale}px;height:${926 * scale}px;left:${-x * scale}px;top:${-y * scale}px"></div>`;
};
const shell = (title, kind, content, caption) => `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><link rel="stylesheet" href="/style.css"></head>
<body><main class="canvas ${kind}"><h1>${title}</h1><figure><div class="comparison">${content}</div><figcaption>${caption}</figcaption></figure></main></body></html>`;
const section = (label, screen) => `<section><h2>${label}</h2>${screen}</section>`;
const pages = {
  '/css': shell('自己紹介の行間を変更する', 'css',
    section('変更前　行間 1.8', crop('t06-css-before.jpg', '行間を変更する前の自己紹介', [240, 260, 850, 220], 1120)) +
    section('変更後　行間 2.2', crop('t06-css-after.jpg', '行間を2.2に変更した自己紹介', [240, 260, 850, 220], 1120)),
    '同じ文章のまま、CSSで自己紹介の行間が広がります。'),
  '/posts': shell('TOPとブログ一覧の表示件数を比べる', 'posts',
    section('TOP <span class="count">1件</span>', crop('t06-top-one-post.jpg', 'TOPの最近の記事に1件だけ表示されている実画面', [240, 500, 860, 310], 580)) +
    section('/blog <span class="count">3件</span>', crop('t06-blog-three-posts.jpg', 'ブログ一覧に3件の記事が表示されている実画面', [240, 90, 860, 750], 580)),
    'TOPを1件にしても、ブログ一覧には3件の記事が表示されます。'),
  '/state': shell('ボタンで学習メモを開閉する', 'state',
    section('閉じた状態', crop('t06-learning-note-closed.jpg', '学習メモが閉じている実画面', [240, 650, 850, 170], 1120)) +
    section('開いた状態', crop('t06-learning-note-open.jpg', '学習メモが開いている実画面', [240, 590, 850, 200], 1120)),
    'ボタンを押すと、学習メモの本文が表示・非表示に切り替わります。'),
};

http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname.replace(/\/$/, '') || '/';
  try {
    if (pathname === '/style.css') {
      res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
      res.end(await readFile(join(comparisonRoot, 'style.css')));
    } else if (pathname.startsWith('/images/') && originals.has(pathname.slice(8))) {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(await readFile(join(sourceRoot, pathname.slice(8))));
    } else if (pages[pathname] || pathname === '/') {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store'});
      res.end(pages[pathname] || pages['/css']);
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
      res.end('Not found');
    }
  } catch {
    res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Unable to load this comparison.');
  }
}).listen(port, host, () => console.log(`Comparison pages: http://${host}:${port}/css · /posts · /state`));
