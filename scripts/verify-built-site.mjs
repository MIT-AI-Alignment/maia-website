import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const read = path => readFileSync(path, 'utf8');
const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const output = '.vercel/output/static';
const built = path => read(`${output}/${path}`);
const htmlFiles = files(output).filter(path => path.endsWith('.html'));
assert.ok(htmlFiles.length >= 38, 'Expected all public routes to prerender');
for (const path of htmlFiles) {
  const html = read(path);
  assert.ok(!/Felix Tudose|felixrt|Ryan Baylon|ryan-baylon/.test(html), `Removed person in ${path}`);
  assert.ok(!/mailto:undefined|orientation2026QrRedirected/.test(html), `Invalid link or redirect in ${path}`);
  if (!html.includes('http-equiv="refresh"')) {
    assert.match(html, /property="og:image" content="https:\/\/mitaialignment\.org\/images\/brand\/maia-social-preview\.png"/, `Missing MAIA preview image in ${path}`);
    assert.equal((html.match(/property="og:image" /g) ?? []).length, 1, `Conflicting preview images in ${path}`);
  }
}
const home = built('index.html');
const about = built('about/index.html');
assert.match(home, /property="og:title" content="MAIA - MIT AI Alignment \| AI Safety Research &amp; Community"/);
assert.match(home, /property="og:description" content="MIT AI Alignment \(MAIA\)/);
const previewImage = readFileSync(`${output}/images/brand/maia-social-preview.png`);
assert.equal(previewImage.subarray(1, 4).toString(), 'PNG');
assert.equal(previewImage.readUInt32BE(16), 1200);
assert.equal(previewImage.readUInt32BE(20), 630);
for (const page of [home]) {
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
const gallery = built('aisf/summer-2026/fellows/index.html');
assert.doesNotMatch(gallery, /Thank you for eight weeks|This page lists approved completers/);
assert.match(gallery, /<strong>For corrections or to remove your name or photo/);
assert.ok(existsSync(`${output}/resources/merch/index.html`));
for (const path of ['events', 'events/semester']) {
  assert.ok(!existsSync(`${output}/${path}/index.html`), `${path} must not be frozen at build time`);
  for (const suffix of ['', '/__data.json']) {
    const config = JSON.parse(read(`.vercel/output/functions/${path}${suffix}.prerender-config.json`));
    assert.equal(config.expiration, 600);
    assert.deepEqual(config.allowQuery.filter(key => key !== '__pathname'), []);
  }
}
assert.ok(built('sitemap.xml').includes('https://mitaialignment.org/'));
assert.ok(built('robots.txt').includes('https://mitaialignment.org/sitemap.xml'));
console.log(`Verified ${htmlFiles.length} rendered pages and ${fellows.length} public fellow records.`);
