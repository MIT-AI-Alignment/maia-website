// Read-only checks from the current network. HTTP 200 alone can be a parking page.
import { Resolver } from 'node:dns/promises';
import { pathToFileURL } from 'node:url';

const domains = ['mitaialignment.org', 'www.mitaialignment.org'];
export const hermesMarkers = [
  '<title>MAIA - Hermes Fellowship</title>',
  '_app/immutable/',
  'https://airtable.com/app2QxPIfTjgZX8Ih/pagqFpIYrvzDCS8J6/form'
];

export async function checkPage(url, { markers = hermesMarkers, timeout = 15000 } = {}) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(timeout),
      headers: { 'Cache-Control': 'no-cache' }
    });
    const html = await response.text();
    const missing = markers.filter(marker => !html.includes(marker));
    return {
      url,
      finalUrl: response.url,
      status: response.status,
      title: html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? null,
      ok: response.status === 200 && missing.length === 0,
      missing
    };
  } catch (error) {
    return { url, ok: false, error: error.cause?.code ?? error.message };
  }
}

async function inspectDns(name, servers) {
  const resolver = new Resolver({ timeout: 3000, tries: 1 });
  if (servers) resolver.setServers(servers);
  const records = await Promise.all(domains.map(async domain => {
    try {
      return { domain, addresses: await resolver.resolve4(domain, { ttl: true }) };
    } catch (error) {
      return { domain, error: error.code ?? error.message };
    }
  }));
  return { resolver: name, servers: resolver.getServers(), records };
}

export async function verifyPublicSite() {
  const [dns, pages] = await Promise.all([
    Promise.all([
      inspectDns('system'),
      inspectDns('Google', ['8.8.8.8']),
      inspectDns('Cloudflare', ['1.1.1.1'])
    ]),
    Promise.all([
      'https://maia-website-ten.vercel.app/hermes/',
      'https://mitaialignment.org/hermes/',
      'https://www.mitaialignment.org/hermes/',
      'https://aialignment.mit.edu/hermes/'
    ].map(url => checkPage(url)))
  ]);
  return {
    checkedAt: new Date().toISOString(),
    // DNS differences are diagnostic: valid CDN addresses can differ by resolver.
    // Passing proves these pages on this network, not global DNS convergence.
    ok: pages.every(page => page.ok),
    dns,
    pages
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await verifyPublicSite();
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}
