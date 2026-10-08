import type { CalendarEvent } from '../events';

export type EventPageMetadata = { description?: string; imageUrl?: string; sourceUrl: string };
type Fetch = typeof globalThis.fetch;
type CacheEntry = { value: EventPageMetadata; refreshedAt: number };
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 24 * 60 * 60 * 1000;
const SOURCE_HOSTS = new Set(['partiful.com', 'www.partiful.com', 'luma.com', 'www.luma.com', 'lu.ma']);

export function eventPageUrl(value: string | undefined): string | undefined {
 try {
  const url = new URL(value ?? '');
  if (url.protocol !== 'https:' || url.port || url.username || url.password || !SOURCE_HOSTS.has(url.hostname)) return;
  if (url.hostname.includes('partiful')) {
   if (!/^\/e\/[A-Za-z0-9]+\/?$/.test(url.pathname)) return;
   url.hostname = 'partiful.com';
  } else {
   if (!/^\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) return;
   url.hostname = url.hostname.replace(/^www\./, '');
  }
  url.search = '';
  url.hash = '';
  url.pathname = url.pathname.replace(/\/$/, '');
  return url.href;
 } catch { return; }
}

function decodeEntities(value: string): string {
 const named: Record<string, string> = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
 return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, code: string) => {
  if (!code.startsWith('#')) return named[code.toLowerCase()];
  const point = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
  return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : entity;
 });
}

function plainText(value: unknown): string | undefined {
 if (typeof value !== 'string') return;
 const text = decodeEntities(value.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
  .replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
 return text || undefined;
}

function safeImage(value: unknown): string | undefined {
 if (typeof value !== 'string') return;
 try {
  const url = new URL(decodeEntities(value));
  const host = url.hostname;
  if (url.protocol !== 'https:' || url.username || url.password || url.port) return;
  // Use public event CDN artwork, never arbitrary calendar-supplied image URLs.
  if (host !== 'partiful.imgix.net' && host !== 'firebasestorage.googleapis.com' &&
      host !== 'images.lumacdn.com' && !host.endsWith('.lumacdn.com')) return;
  return url.href;
 } catch { return; }
}

function attributes(tag: string): Record<string, string> {
 const attrs: Record<string, string> = {};
 for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
  attrs[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4]);
 }
 return attrs;
}

export function readEventPage(html: string, sourceUrl: string): EventPageMetadata | undefined {
 const canonical = eventPageUrl(sourceUrl);
 if (!canonical) return;
 const meta: Record<string, string> = {};
 for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
  const attrs = attributes(match[0]);
  if (attrs.property || attrs.name) meta[attrs.property ?? attrs.name] = attrs.content;
 }
 let description: unknown, image: unknown;
 for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
  const attrs = attributes(match[1]);
  try {
   if (attrs.id === '__NEXT_DATA__') {
    const data = JSON.parse(match[2]);
    if (canonical.includes('partiful.com')) {
     const event = data?.props?.pageProps?.event;
     description = event?.description ?? description;
     // OG artwork uses the public image CDN rather than a signed upload URL.
     image = meta['og:image'] ?? event?.image?.url ?? event?.image?.upload?.url ?? image;
    } else {
     const event = data?.props?.pageProps?.initialData?.data?.event;
     description = event?.description ?? description;
     image = event?.cover_url ?? image;
    }
   }
   if (attrs.type === 'application/ld+json' && !canonical.includes('partiful.com')) {
    const data = JSON.parse(match[2]);
    const nodes = Array.isArray(data) ? data : data['@graph'] ?? [data];
    for (const event of nodes) {
     const types = Array.isArray(event['@type']) ? event['@type'] : [event['@type']];
     if (!types.includes('Event')) continue;
     description = event.description ?? description;
     const candidate = Array.isArray(event.image) ? event.image[0] : event.image;
     image = typeof candidate === 'object' ? candidate?.url : candidate ?? image;
    }
   }
  } catch { /* A malformed optional script does not hide valid public metadata. */ }
 }
 const result = {
  sourceUrl: canonical,
  description: plainText(description) ?? plainText(meta['og:description']) ?? plainText(meta.description),
  imageUrl: safeImage(image) ?? safeImage(meta['og:image'])
 };
 // Login/challenge pages must never replace real event descriptions.
 if (result.description && /^(?:partiful|luma|lu\.ma)\s*[|–-]|^you(?:'|’)re invited|^discover (?:local )?events|^sign (?:in|up)/i.test(result.description)) {
  result.description = undefined;
 }
 return result.description || result.imageUrl ? result : undefined;
}

export function shortEventSummary(description: string): string {
 // Use the source's opening two sentences, without generating or inventing copy.
 const sentences: string[] = [];
 for (const { segment } of new Intl.Segmenter('en', { granularity: 'sentence' }).segment(description)) {
  // Sentence segmentation may split a title before a capitalized surname.
  if (sentences.length && /\b(?:Dr|Mr|Mrs|Ms|Prof|St|vs)\.$/.test(sentences[sentences.length - 1].trim())) {
   sentences[sentences.length - 1] += segment;
  } else sentences.push(segment);
 }
 const summary = sentences.slice(0, 2).join(' ').replace(/\s+/g, ' ').trim();
 if (summary.length <= 440) return summary;
 return summary.slice(0, 437).replace(/\s+\S*$/, '').trimEnd() + '…';
}

export async function fetchEventPage(sourceUrl: string, fetch: Fetch, signal: AbortSignal): Promise<EventPageMetadata | undefined> {
 let url = eventPageUrl(sourceUrl);
 if (!url) return;
 for (let redirects = 0; redirects <= 3; redirects++) {
  const response = await fetch(url, { signal, redirect: 'manual', headers: { Accept: 'text/html' } });
  if (response.status >= 300 && response.status < 400) {
   const location = response.headers.get('location');
   url = location ? eventPageUrl(new URL(location, url).href) : undefined;
   if (!url) return;
   continue;
  }
  if (!response.ok) throw new Error(`Event source returned ${response.status}`);
  if (!response.headers.get('content-type')?.includes('text/html')) return;
  // A bounded body prevents unusually large source pages consuming the function.
  const reader = response.body?.getReader();
  if (!reader) return;
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
   while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 3 * 1024 * 1024) return;
    chunks.push(value);
   }
  } finally { await reader.cancel(); }
  const body = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.length; }
  return readEventPage(new TextDecoder().decode(body), url);
 }
}

export async function enrichEventPages(
 events: CalendarEvent[], fetch: Fetch, fallback: Record<string, EventPageMetadata> = {},
 options: { now?: number; budgetMs?: number } = {}
): Promise<CalendarEvent[]> {
 const now = options.now ?? Date.now();
 const recent = now - 90 * 24 * 60 * 60 * 1000;
 const candidates = events.filter(event => Date.parse(event.end ?? event.start) >= recent);
 candidates.sort((a, b) => {
  const upcomingA = Date.parse(a.end ?? a.start) >= now, upcomingB = Date.parse(b.end ?? b.start) >= now;
  return Number(upcomingB) - Number(upcomingA) || (upcomingA ? a.start.localeCompare(b.start) : b.start.localeCompare(a.start));
 });
 const sourceFor = (event: CalendarEvent) => [event.url, ...(event.descriptionParts ?? []).map(part => part.href)]
  .map(eventPageUrl).find(Boolean);
 const sources = [...new Set(candidates.map(sourceFor).filter((value): value is string => Boolean(value)))];
 const metadata = new Map<string, EventPageMetadata>(Object.entries(fallback));
 for (const [url, entry] of cache) metadata.set(url, entry.value);
 const signal = AbortSignal.timeout(options.budgetMs ?? 7000);
 let next = 0;
 const worker = async () => {
  while (next < sources.length && !signal.aborted) {
   const url = sources[next++];
   const refreshedAt = cache.get(url)?.refreshedAt ?? 0;
   // Refresh on the first regeneration of each UTC day. A rolling 24-hour
   // cache alone can make a scheduled morning request skip an entire day.
   if (now - refreshedAt < CACHE_TTL && Math.floor(now / 86400000) === Math.floor(refreshedAt / 86400000)) continue;
   try {
    const data = await fetchEventPage(url, fetch, signal);
    if (!data) continue;
    const value = { ...metadata.get(url), ...data, sourceUrl: url };
    // Partial metadata responses keep earlier successfully imported fields.
    value.description = data.description ?? metadata.get(url)?.description;
    value.imageUrl = data.imageUrl ?? metadata.get(url)?.imageUrl;
    cache.set(url, { value, refreshedAt: now });
    metadata.set(url, value);
   } catch { /* The calendar and bundled/last-good metadata remain usable. */ }
  }
 };
 await Promise.all(Array.from({ length: Math.min(4, sources.length) }, worker));
 // Only keep a bounded amount of public source data in each warm instance.
 while (cache.size > 200) cache.delete(cache.keys().next().value!);
 return events.map(event => {
  const url = sourceFor(event), data = url ? metadata.get(url) : undefined;
  if (!data) return event;
  return {
   ...event,
   url: event.url ?? url,
   summary: event.summary ?? (data.description ? shortEventSummary(data.description) : undefined),
   media: data.imageUrl ? { imageUrl: data.imageUrl, imageAlt: `Event artwork for ${event.title}`, sourceUrl: data.sourceUrl, kind: 'artwork' as const } : event.media
  };
 });
}
