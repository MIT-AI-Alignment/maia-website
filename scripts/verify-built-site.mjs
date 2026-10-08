import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const read = path => readFileSync(path, 'utf8');
const files = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
  entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const output = '.vercel/output/static';
const built = path => read(`${output}/${path}`);
const htmlFiles = files(output).filter(path => path.endsWith('.html'));
const removedCurriculumDoc = '1j9D16VU0IzxiYHKfJ_8YwkWnnuZFUTr57-MctXXm4N0';
assert.ok(htmlFiles.length >= 38, 'Expected all public routes to prerender');
for (const path of htmlFiles) {
  const html = read(path);
  assert.ok(!/Felix Tudose|felixrt|Ryan Baylon|ryan-baylon/.test(html), `Removed person in ${path}`);
  assert.ok(!/mailto:undefined|orientation2026QrRedirected/.test(html), `Invalid link or redirect in ${path}`);
  if (!html.includes('http-equiv="refresh"')) {
    assert.match(html, /property="og:image" content="https:\/\/mitaialignment\.org\/images\/brand\/maia-social-preview\.png"/, `Missing MAIA preview image in ${path}`);
    assert.equal((html.match(/property="og:image" /g) ?? []).length, 1, `Conflicting preview images in ${path}`);
    const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
    assert.equal(canonicals.length, 1, `Missing or conflicting canonical URL in ${path}`);
    assert.match(canonicals[0][1], /^https:\/\/mitaialignment\.org\/[^?#]*\/$|^https:\/\/mitaialignment\.org\/$/);
    assert.ok(html.includes(`property="og:url" content="${canonicals[0][1]}"`), `Social URL differs from canonical in ${path}`);
    const organization = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(organization['@type'], 'Organization');
    assert.equal(organization.url, 'https://mitaialignment.org/');
  }
}
for (const path of files(output).filter(path => /\.(html|js)$/.test(path))) {
  assert.ok(!read(path).includes(removedCurriculumDoc), `Removed curriculum document leaked into ${path}`);
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
for (const name of ['Aidan Taha', 'Liam Sheldon', 'Jean Onyuro']) {
  assert.ok(gallery.includes(name), `Fellows gallery missing ${name}`);
}
assert.ok(about.includes('Emily Yu'), 'About page missing restored organizer Emily Yu');
assert.doesNotMatch(gallery, /Thank you for eight weeks|This page lists approved completers/);
assert.match(gallery, /<strong>For corrections or to remove your name or photo/);
assert.ok(existsSync(`${output}/resources/merch/index.html`));
const workshops = built('initiatives/spring-workshops/index.html');
assert.ok(workshops.includes('Technical &amp; Policy Workshops, Spring 2025'));
assert.ok(workshops.includes('around 150 students and 20 speakers'));
assert.ok(!existsSync(`${output}/aisf-hack-s26/index.html`), 'Intentionally deleted hackathon page must stay deleted');
for (const file of ['campfire-2', 'campfire', 'nature-walk', 'nature', 'speaker-session', 'workshop-discussion', 'workshop-group']) {
  assert.ok(existsSync(`${output}/images/initiatives/spring-workshops/${file}.jpg`));
}
for (const path of ['events', 'events/semester']) {
  assert.ok(!existsSync(`${output}/${path}/index.html`), `${path} must not be frozen at build time`);
  for (const suffix of ['', '/__data.json']) {
    const config = JSON.parse(read(`.vercel/output/functions/${path}${suffix}.prerender-config.json`));
    assert.equal(config.expiration, 600);
    assert.deepEqual(config.allowQuery.filter(key => key !== '__pathname'), []);
  }
}
const sitemapUrls = [...built('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Duplicate sitemap URL');
for (const url of sitemapUrls) {
  assert.match(url, /^https:\/\/mitaialignment\.org\//);
  const pathname = new URL(url).pathname;
  assert.ok(!/^\/aisf\/week[2-8]\/$/.test(pathname), 'Redirecting AISF weeks must stay out of the sitemap');
  if (pathname === '/events/' || pathname === '/events/semester/') continue;
  const path = pathname === '/' ? 'index.html' : `${pathname.slice(1)}index.html`;
  assert.ok(existsSync(`${output}/${path}`), `Sitemap points to an absent page: ${url}`);
  assert.ok(!built(path).includes('http-equiv="refresh"'), `Sitemap points to a redirect: ${url}`);
  assert.ok(built(path).includes(`rel="canonical" href="${url}"`), `Sitemap differs from canonical: ${url}`);
}
assert.ok(built('robots.txt').includes('https://mitaialignment.org/sitemap.xml'));
console.log(`Verified ${htmlFiles.length} rendered pages and ${fellows.length} public fellow records.`);
