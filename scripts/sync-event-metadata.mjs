// Optional fallback refresh; normal updates happen through Vercel ISR and daily cron.
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
 const { CONFIG } = await server.ssrLoadModule('/src/lib/config.ts');
 const { readCalendarEvents } = await server.ssrLoadModule('/src/lib/server/calendar.ts');
 const { EVENT_SOURCE_LINKS } = await server.ssrLoadModule('/src/lib/eventSources.ts');
 const { eventPageUrl, fetchEventPage } = await server.ssrLoadModule('/src/lib/server/eventPages.ts');
 const response = await fetch(CONFIG.events.calendarIcalLink, { signal: AbortSignal.timeout(20000) });
 if (!response.ok) throw new Error(`Public calendar returned ${response.status}`);
 const events = readCalendarEvents(await response.text());
 const snapshotPath = 'src/lib/eventPageMetadata.json';
 const snapshot = JSON.parse(await readFile(snapshotPath, 'utf8'));
 const recent = Date.now() - 90 * 86400000;
 const urls = [...new Set(events.filter(event => Date.parse(event.end ?? event.start) >= recent)
  .flatMap(event => [EVENT_SOURCE_LINKS[event.id.split('/')[0]], event.url, ...(event.descriptionParts ?? []).map(part => part.href)])
  .map(eventPageUrl).filter(Boolean))];
 let next = 0, successes = 0;
 const worker = async () => {
  while (next < urls.length) {
   const url = urls[next++];
   try {
    const data = await fetchEventPage(url, fetch, AbortSignal.timeout(7000));
    if (data) {
     const old = snapshot[url];
     snapshot[url] = { sourceUrl: url, description: data.description ?? old?.description, imageUrl: data.imageUrl ?? old?.imageUrl };
     successes++;
    }
   } catch (error) { console.warn('Kept fallback for', url, error.message); }
  }
 };
 await Promise.all(Array.from({ length: Math.min(4, urls.length) }, worker));
 if (urls.length && !successes) throw new Error('No public event metadata refreshed; keeping the existing snapshot.');
 const ordered = Object.fromEntries(Object.entries(snapshot).sort(([a], [b]) => a.localeCompare(b)));
 await writeFile(snapshotPath, JSON.stringify(ordered, null, 2) + '\n');
 console.log(`Refreshed ${successes}/${urls.length} public event pages; ${Object.keys(snapshot).length} fallback records.`);
} finally { await server.close(); }
