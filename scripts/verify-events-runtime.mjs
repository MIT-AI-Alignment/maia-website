// Run after build. Exercises the built server, not Vercel's CDN.
import assert from 'node:assert/strict';
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
  globalThis.fetch = async () => new Response('BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:runtime-test\r\nDTSTART:20261006T180000Z\r\nDTEND:20261006T190000Z\r\nSUMMARY:Runtime calendar check\r\nEND:VEVENT\r\nEND:VCALENDAR');
  for (const path of paths) {
    const response = await request(path);
    assert.equal(response.status, 200, path);
    assert.ok((await response.text()).includes('Runtime calendar check'), path);
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
    }
  }
  console.log('Verified both Events HTML/data routes: success and HTTP/parse/network failures.');
} finally {
  globalThis.fetch = originalFetch;
}
