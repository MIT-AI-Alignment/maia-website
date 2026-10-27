import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const files = ['fall2026Curriculum.json', 'fall2026Week2.json', 'fall2026Week3.json', 'fall2026Week4.json'];
const plain = html => html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
for (const file of files) {
 const { articles } = JSON.parse(readFileSync(resolve('src/lib', file), 'utf8'));
 test(`${file}: reference metadata and captions are not section headings`, () => {
  for (const article of articles) {
   for (const heading of article.html.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/g)) {
    const title = plain(heading[1]);
    assert.ok(title, `${article.title}: empty heading`);
    assert.doesNotMatch(title, /^(?:sources?\s*:|references\s*:|https?:\/\/|(?:figure|fig\.)\s*\d+[.:\s])/i, `${article.title}: metadata promoted to heading`);
    if (article.byline.includes(',')) {
     const firstAuthor = article.byline.split(',')[0].trim();
     assert.ok(!title.startsWith(firstAuthor), `${article.title}: author byline promoted to heading`);
    }
   }
  }
 });
 test(`${file}: section navigation targets exist exactly once`, () => {
  for (const article of articles) {
   const ids = [...article.html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
   assert.equal(new Set(ids).size, ids.length, `${article.title}: duplicate section IDs`);
   assert.equal(new Set(article.toc.map(t => t.id)).size, article.toc.length, `${article.title}: duplicate navigation entries`);
   for (const section of article.toc) assert.equal(ids.filter(id => id === section.id).length, 1, `${article.title}: broken navigation to ${section.title}`);
  }
 });
 test(`${file}: reader figures have an available image source`, () => {
  for (const article of articles) for (const image of article.html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
   assert.ok(image[1].startsWith('/') ? existsSync(resolve('static', image[1].slice(1))) : image[1].startsWith('https://'), `${article.title}: invalid or missing figure ${image[1]}`);
  }
 });
}

for (const file of files) {
 const { articles, weeks } = JSON.parse(readFileSync(resolve('src/lib', file), 'utf8'));
 test(`${file}: only recent developments are published in the built-in reader`, () => {
  for (const article of articles) {
   if (article.kind === 'recent-developments') {
    assert.match(article.title, /Recent Developments/i);
    assert.ok(article.html.trim());
   } else {
    assert.equal(article.kind, 'external');
    assert.equal(article.html, '', `${article.title}: curated text must not ship`);
    assert.deepEqual(article.toc, []);
    assert.ok(article.sources.length, `${article.title}: original source required`);
    for (const source of article.sources) assert.equal(new URL(source.url).protocol, 'https:');
   }
  }
  for (const week of weeks) for (const group of week.groups) for (const item of group.items) {
   if (item.article > 0) assert.deepEqual(item.sources, articles[item.article].sources);
  }
 });
}
