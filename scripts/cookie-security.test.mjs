import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const kitRequire = createRequire(require.resolve('@sveltejs/kit/package.json'));
const cookie = kitRequire('cookie');

test('Kit cookie serializer rejects delimiter injection and preserves normal cookies', () => {
  assert.equal(kitRequire('cookie/package.json').version, '0.7.2');
  assert.throws(() => cookie.serialize('name; injected=x', 'value'), TypeError);
  assert.throws(() => cookie.serialize('name', 'value', { path: '/; injected=x' }), TypeError);
  assert.throws(() => cookie.serialize('name', 'value', { domain: 'example.org; injected=x' }), TypeError);
  assert.equal(cookie.serialize('theme', 'light', { path: '/', httpOnly: true }), 'theme=light; Path=/; HttpOnly');
  assert.equal(cookie.parse('theme=light').theme, 'light');
});
