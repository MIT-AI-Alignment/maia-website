// Run after build. Exercises the built server, not Vercel's CDN.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Server } from '../.svelte-kit/output/server/index.js';
import { manifest } from '../.svelte-kit/output/server/manifest.js';

const originalFetch = globalThis.fetch;
const server = new Server(manifest);
await server.init({ env: process.env });
const paths = ['/events/', '/events/semester/', '/events/__data.json', '/events/semester/__data.json'];
const request = path => server.respond(new Request(`https://mitaialignment.org${path}`), {
  getClientAddress: () => '127.0.0.1'
});
try {
  for (const path of ['/nonexistent-regression-page/', '/aisf-hack-s26/']) {
    const response = await request(path);
    assert.equal(response.status, 404, path);
    assert.equal(response.headers.get('location'), null, path);
    const html = await response.text();
    assert.ok(html.includes('Page not found'), path);
    assert.ok(html.includes('Back to home') && html.includes('Explore events'), path);
    assert.ok(html.includes('name="robots" content="noindex"'), path);
  }
  globalThis.fetch = async () => new Response('BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:runtime-test\r\nDTSTART:20261006T180000Z\r\nDTEND:20261006T190000Z\r\nSUMMARY:Runtime calendar check\r\nEND:VEVENT\r\nEND:VCALENDAR');
  for (const path of paths) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    assert.ok((await response.text()).includes('Runtime calendar check'), path);
  }
  // Replay the emitted ISR rewrite and adapter's __pathname reconstruction.
  // Direct Server tests with only slash-terminated paths miss redirect loops.
  const routes = JSON.parse(readFileSync('.vercel/output/config.json', 'utf8')).routes;
  for (const base of ['/events', '/events/semester']) {
    for (const path of [base, `${base}/`, `${base}/__data.json`]) {
      const route = routes.find(route => route.dest?.includes('__pathname=') && new RegExp(route.src).test(path));
      assert.ok(route, `Missing ISR rewrite for ${path}`);
      const rewritten = new URL(route.dest, 'https://mitaialignment.org');
      const pathname = rewritten.searchParams.get('__pathname');
      const adapterPath = pathname + (rewritten.pathname.endsWith('/__data.json') ? '/__data.json' : '');
      const response = await request(adapterPath);
      assert.equal(response.status, 200, `ISR rewrite for ${path} must not redirect`);
      assert.equal(response.headers.get('location'), null, path);
      const body = await response.text();
      assert.ok(body.includes('Runtime calendar check'), path);
      if (!path.endsWith('/__data.json')) {
        const assets = [...body.matchAll(/["']([^"']*_app\/immutable\/[^"']+)["']/g)].map(match => match[1]);
        assert.ok(assets.some(asset => asset.endsWith('.css')), `Missing CSS for ${path}`);
        assert.ok(assets.some(asset => asset.endsWith('.js')), `Missing JS for ${path}`);
        for (const asset of assets) {
          assert.ok(asset.startsWith('/_app/immutable/'), `Non-root asset for ${path}: ${asset}`);
          assert.equal(new URL(asset, `https://mitaialignment.org${path}`).pathname, asset);
          assert.ok(readFileSync(`.vercel/output/static${asset}`).length, `Missing built asset ${asset}`);
        }
      }
    }
  }
  // External calendar text must not become HTML, handlers, or executable links.
  globalThis.fetch = async () => new Response([
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT', 'UID:untrusted-calendar',
    'DTSTART:20261006T180000Z', 'DTEND:20261006T190000Z',
    'SUMMARY:&lt;img src=x onerror=alert(12345)&gt;',
    'LOCATION:&lt;svg onload=alert(12345)&gt;',
    'DESCRIPTION:<a href="javascript:alert(12345)">Unsafe link</a> <img src=x onerror=alert(12345)> &lt;script&gt;alert(12345)&lt;/script&gt;',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n'));
  for (const path of paths.filter(path => !path.endsWith('.json'))) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes('&lt;img src=x onerror=alert(12345)'), path);
    assert.ok(!/<(?:img|svg|script)\b[^>]*alert\(12345\)/i.test(html), path);
    assert.ok(!/href=["']javascript:/i.test(html), path);
  }
  for (const failedFetch of [
    async () => new Response('upstream unavailable', { status: 503 }),
    async () => new Response('invalid ICS'),
    async () => { throw new Error('simulated timeout'); }
  ]) {
    globalThis.fetch = failedFetch;
    for (const path of paths) {
      const response = await request(path);
      assert.equal(response.status, 503, path);
      assert.equal(response.headers.get('cache-control'), 'no-store', path);
      if (!path.endsWith('.json')) {
        const html = await response.text();
        assert.ok(html.includes('Something went wrong'), path);
        assert.ok(!html.includes('Page not found'), path);
      }
    }
  }
  console.log('Verified both Events HTML/data routes: success and HTTP/parse/network failures.');
} finally {
  globalThis.fetch = originalFetch;
}
