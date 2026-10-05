import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

test('both event loaders use ISR and preserve successful calendar data; errors reject', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  try {
    for (const path of ['/src/routes/events/+page.server.ts', '/src/routes/events/semester/+page.server.ts']) {
      const route = await server.ssrLoadModule(path);
      assert.equal(route.prerender, false);
      assert.deepEqual(route.config.isr, { expiration: 600, allowQuery: [] });
      let calls = 0;
      const data = await route.load({ fetch: async (url, options) => {
        calls++;
        assert.match(url, /^https:\/\/calendar.google.com\//);
        assert.ok(options.signal instanceof AbortSignal);
        return new Response('BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nUID:test\r\nDTSTART:20261006T180000Z\r\nDTEND:20261006T190000Z\r\nSUMMARY:Calendar sync test\r\nEND:VEVENT\r\nEND:VCALENDAR');
      }});
      assert.equal(calls, 1);
      assert.ok(data.events.some(event => event.title === 'Calendar sync test'));
      assert.ok(data.events.length > 1, 'Keep program history alongside imported events');
      assert.ok(Number.isFinite(Date.parse(data.fetchedAt)));
      for (const fetch of [
        async () => new Response('unavailable', { status: 503 }),
        async () => new Response('<html>not an ICS feed</html>'),
        async () => { throw new Error('network timeout'); }
      ]) await assert.rejects(route.load({ fetch }));
    }
  } finally {
    await server.close();
  }
});
