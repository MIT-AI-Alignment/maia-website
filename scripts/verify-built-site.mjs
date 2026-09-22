import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const read = path => readFileSync(path, 'utf8');
const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const htmlFiles = files('build').filter(path => path.endsWith('.html'));
assert.ok(htmlFiles.length >= 38, 'Expected all public routes to prerender');
for (const path of htmlFiles) {
  const html = read(path);
  assert.ok(!/Felix Tudose|felixrt|Ryan Baylon|ryan-baylon/.test(html), `Removed person in ${path}`);
  assert.ok(!/mailto:undefined|orientation2026QrRedirected/.test(html), `Invalid link or redirect in ${path}`);
  if (!html.includes('http-equiv="refresh"')) {
    assert.match(html, /property="og:image" content="https:\/\/aialignment\.mit\.edu\/images\/brand\/maia-social-preview\.png"/, `Missing MAIA preview image in ${path}`);
    assert.equal((html.match(/property="og:image" /g) ?? []).length, 1, `Conflicting preview images in ${path}`);
  }
}
const home = read('build/index.html');
const about = read('build/about/index.html');
assert.match(home, /property="og:title" content="MAIA - MIT AI Alignment"/);
assert.match(home, /property="og:description" content="MIT AI Alignment \(MAIA\)/);
const previewImage = readFileSync('build/images/brand/maia-social-preview.png');
assert.equal(previewImage.subarray(1, 4).toString(), 'PNG');
assert.equal(previewImage.readUInt32BE(16), 1200);
assert.equal(previewImage.readUInt32BE(20), 630);
for (const page of [home, read('build/events/index.html')]) {
  assert.doesNotMatch(page, /href="\/orientation-2026\/"/, 'Orientation archive must not be promoted');
}
const popupConfig = read('src/lib/config.ts').match(/popup:\s*\{[^}]*\}/)[0];
assert.doesNotMatch(popupConfig, /orientation/i, 'Retired orientation popup must not return');
for (const name of ['Roman Ross', 'Jason Chin', 'Ionut Stan']) {
  assert.ok(home.includes(name), `Homepage missing ${name}`);
  assert.ok(about.includes(name), `About missing ${name}`);
}
assert.ok(home.includes('https://calendar.app.google/GL1Zcbd9FEFQTQPr9'));
assert.doesNotMatch(home, /Ionut Gabriel Stan/);
const fellows = JSON.parse(read('src/lib/fellowsSummer2026.json'));
assert.equal(new Set(fellows.map(person => person.name)).size, fellows.length);
for (const person of fellows) {
  assert.deepEqual(Object.keys(person).sort(), ['imageUrl', 'name']);
  assert.ok(existsSync(`static${person.imageUrl}`));
}
const gallery = read('build/aisf/summer-2026/fellows/index.html');
assert.doesNotMatch(gallery, /Thank you for eight weeks|This page lists approved completers/);
assert.match(gallery, /<strong>For corrections or to remove your name or photo/);
for (const path of ['events', 'events/semester', 'resources/merch']) {
  assert.ok(existsSync(`build/${path}/index.html`));
}
console.log(`Verified ${htmlFiles.length} rendered pages and ${fellows.length} public fellow records.`);
