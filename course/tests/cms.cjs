const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function load(path, dependencies = {}, env = {}) {
  const source = fs.readFileSync(path, 'utf8');
  const result = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
    reportDiagnostics: true,
  });
  assert.equal((result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error).length, 0);
  const module = { exports: {} };
  const context = { module, exports: module.exports, process: { env }, Error, console,
    require(name) {
      if (name === 'server-only') return {};
      if (Object.hasOwn(dependencies, name)) return dependencies[name];
      throw new Error(`Unexpected import: ${name}`);
    } };
  vm.runInNewContext(result.outputText, context, { filename: path });
  return module.exports;
}

const errors = load('lib/cms-errors.ts');
test('404 classification does not hide other failures', () => {
  assert.equal(errors.isCMSNotFound({ status: 404 }), true);
  assert.equal(errors.isCMSNotFound(new Error('fetch API response status: 404\n  message')), true);
  for (const error of [{ status: 401 }, { status: 403 }, { status: 500 }, new Error('Network Error'), new Error('user title 404')]) {
    assert.equal(errors.isCMSNotFound(error), false);
  }
});

test('explicit source mode and configuration errors', () => {
  const dependencies = { 'microcms-js-sdk': { createClient: value => value } };
  assert.equal(load('lib/microcms.ts', dependencies).getMicroCMSClient(), null);
  assert.throws(() => load('lib/microcms.ts', dependencies, { CONTENT_SOURCE: 'microcms' }).getMicroCMSClient());
  assert.throws(() => load('lib/microcms.ts', dependencies, { CONTENT_SOURCE: 'unknown' }).getMicroCMSClient());
  assert.throws(() => load('lib/microcms.ts', dependencies, { CONTENT_SOURCE: 'microcms', MICROCMS_SERVICE_DOMAIN: 'https://bad', MICROCMS_API_KEY: 'test-not-a-real-key' }).getMicroCMSClient());
  const value = load('lib/microcms.ts', dependencies, { CONTENT_SOURCE: 'microcms', MICROCMS_SERVICE_DOMAIN: 'classroom-test', MICROCMS_API_KEY: 'test-not-a-real-key' }).getMicroCMSClient();
  assert.equal(value.serviceDomain, 'classroom-test');
});

for (const kind of ['posts', 'works']) {
  const isBlog = kind === 'posts';
  const endpoint = isBlog ? 'blogs' : 'works';
  const listName = isBlog ? 'getPosts' : 'getWorks';
  const detailName = isBlog ? 'getPostBySlug' : 'getWorkBySlug';
  const sample = [{ id: 'sample', slug: 'sample', title: 'sample', content: '<p>sample</p>', publishedAt: '2026-01-01' }];
  function moduleFor(stage, client) {
    return load(`course/steps/${stage}/lib/${kind}.ts.txt`, {
      [`@/data/sample-${kind}`]: { [isBlog ? 'samplePosts' : 'sampleWorks']: sample },
      '@/lib/microcms': { getMicroCMSClient: () => client },
      '@/lib/cms-errors': errors,
    });
  }
  test(`${kind}: list mapping, no-store, empty result, source fallback`, async () => {
    const client = { getList: async request => {
      assert.equal(request.endpoint, endpoint);
      assert.equal(request.customRequestInit.cache, 'no-store');
      return { contents: [{ id: 'cms-id', title: 'CMS only', createdAt: '2026-08-01' }] };
    } };
    const data = await moduleFor('list', client)[listName]();
    assert.equal(data[0].slug, 'cms-id');
    assert.equal(data[0].content, '');
    assert.equal(data[0].description, '');
    assert.equal(data[0].thumbnail, undefined);
    assert.equal((await moduleFor('list', { getList: async () => ({ contents: [] }) })[listName]()).length, 0);
    assert.equal((await moduleFor('list', null)[listName]())[0].id, 'sample');
    assert.equal(await moduleFor('list', client)[detailName]('cms-id'), undefined);
  });
  test(`${kind}: detail success, missing record, endpoint failure, authentication failure`, async () => {
    const client = { getListDetail: async request => {
      assert.equal(request.endpoint, endpoint);
      assert.equal(request.customRequestInit.cache, 'no-store');
      return { id: 'cms-id', title: 'CMS only', content: '<p>body</p>', createdAt: '2026-08-01' };
    } };
    assert.equal((await moduleFor('detail', client)[detailName]('cms-id')).title, 'CMS only');
    const missing = { getListDetail: async () => { throw { status: 404 }; }, getList: async () => ({ contents: [] }) };
    assert.equal(await moduleFor('detail', missing)[detailName]('missing'), undefined);
    const broken = { ...missing, getList: async () => { throw new Error('endpoint is missing'); } };
    await assert.rejects(() => moduleFor('detail', broken)[detailName]('missing'), /endpoint is missing/);
    for (const status of [401, 403, 429, 500]) {
      await assert.rejects(() => moduleFor('detail', { getListDetail: async () => { throw new Error(`fetch API response status: ${status}`); } })[detailName]('id'));
    }
    await assert.rejects(() => moduleFor('detail', { getListDetail: async () => { throw new Error('Network Error'); } })[detailName]('id'), /Network Error/);
  });
}

test('RichTextBody removes dangerous tags, handlers and URLs', () => {
  const output = load('components/RichTextBody.tsx', {
    'sanitize-html': require('sanitize-html'),
    './RichTextBody.module.css': { body: 'body' },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
  });
  const rendered = output.RichTextBody({ html: '<p>safe</p><script>alert(1)</script><img src="https://example.com/a.png" onerror="alert(2)"><a href="javascript:alert(3)">link</a>' });
  const html = rendered.props.dangerouslySetInnerHTML.__html;
  assert.match(html, /<p>safe<\/p>/);
  assert.doesNotMatch(html, /<script|onerror|javascript:/);
  assert.match(html, /noopener noreferrer/);
});
