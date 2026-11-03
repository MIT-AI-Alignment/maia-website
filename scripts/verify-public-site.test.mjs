import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { checkPage } from './verify-public-site.mjs';

test('public checks reject parking pages, broken redirect destinations, and error statuses', async () => {
  const good = '<title>MAIA - Hermes Fellowship</title><script src="/_app/immutable/start.js"></script>' +
    '<a href="https://airtable.com/app2QxPIfTjgZX8Ih/pagqFpIYrvzDCS8J6/form">Apply</a>';
  const server = createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    if (request.url === '/redirect-bad') {
      response.writeHead(301, { Location: '/parking' });
      return response.end();
    }
    if (request.url === '/redirect-good') {
      response.writeHead(302, { Location: '/hermes' });
      return response.end();
    }
    if (request.url === '/parking') return response.end('<title>Coming Soon</title>Under construction');
    if (request.url === '/wrong-form') return response.end(good.replace('pagqFpIYrvzDCS8J6', 'wrong-form'));
    if (request.url === '/error') response.statusCode = 503;
    response.end(good);
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const path of ['/hermes', '/redirect-good']) {
      assert.equal((await checkPage(base + path)).ok, true, path);
    }
    for (const path of ['/parking', '/redirect-bad', '/wrong-form', '/error']) {
      assert.equal((await checkPage(base + path)).ok, false, path);
    }
    const parked = await checkPage(base + '/redirect-bad');
    assert.equal(parked.status, 200);
    assert.equal(parked.title, 'Coming Soon');
    assert.equal(parked.finalUrl, base + '/parking');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
  assert.equal((await checkPage(base + '/hermes')).ok, false, 'Connection failures cannot pass');
});
