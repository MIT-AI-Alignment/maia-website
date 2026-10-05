# Vercel migration and maintenance

This branch prepares hosting; merging, Vercel deployment, DNS cutover, and the
Athena redirect are separate checks. Do not upload this branch's output to Athena.

## Setup

- Import MIT-AI-Alignment/maia-website into the MAIA-controlled Vercel team.
- SvelteKit preset, Node 22, npm ci (package-lock.json is authoritative), build
  command from vercel.json; do not override output directory to build/.
- Review branch preview before merging. Configure main as production branch and
  PR previews via Git integration. Protect main with review requirements.
- Output is .vercel/output, not build/. No calendar API key or private calendar is required.
- Keep preview deployment protection enabled; production metadata points to
  https://mitaialignment.org, not preview hosts.

## Calendar behavior

/events/ and /events/semester/ use Vercel ISR with a 600-second expiration;
all other pages remain prerendered. Each view's HTML and SvelteKit data responses
are cached. Tracking queries do not create independent caches. Google is fetched
on cold generation or revalidation, not every visit. Each route may refresh independently.
After 10 minutes the next visit triggers background regeneration: this is not a
cron job or a guarantee that idle pages refresh exactly every 10 minutes.

The existing parser, recurrence handling, grouping, program history and content
overrides are unchanged. Timeout, HTTP errors and malformed ICS fail regeneration
instead of publishing an empty archive. Vercel retains the last successful ISR
response on error. A brand-new deployment has no last-good cache: warm and verify
both routes before domain cutover; if Google is unavailable, delay promotion.

## Release checks

    npm ci
    npm run build
    node scripts/verify-built-site.mjs
    node scripts/verify-events-runtime.mjs
    npm run check
    node --experimental-strip-types --test scripts/*.test.mjs

Use Node 22.18+ or Node 24 for the TypeScript-importing tests. npm run preview
checks rendering locally but does not simulate Vercel's CDN/ISR. On the Vercel
preview check both event routes, their client navigation and direct loads,
photos, redirects, canonical/social metadata, and MISS then HIT cache headers.
After expiration verify refreshed fetchedAt and stale-while-revalidate behavior.
Exercise an upstream-failure scenario in an isolated preview before claiming
last-good cache retention is platform-verified. No production calendar edits needed.

## Cutover (separate approval)

Keep registration/nameservers at Squarespace. Add .org and www to the Vercel
project and apply only Vercel's required web DNS records, preserving Google
MX/SPF/DKIM/DMARC and unrelated records. Configure www to redirect to the apex.
Verify HTTPS and nested routes at .org before touching the MIT site.

Athena vanity-host mapping and existing .htaccess.mit still need an authenticated
read. Preserve existing directives and back up live files outside public www.
Test path/query-preserving temporary redirects on the actual hostname before
making them permanent. Do not guess a universal / redirect for locker aliases.
Keep the old site/previous Vercel deployment available for rollback.

## Follow-up: public Partiful enrichment

Not included in this migration. Preserve existing curated event images meanwhile.
A separate change should extract only public Partiful event links from the public
calendar, cache metadata separately, bound requests/timeouts/response size, validate
hosts and redirect targets, and fall back to calendar data/curated images on error.
Do not scrape guest lists, private events or authenticated data. Verify images and
attribution before replacing curated overrides. Scraping must never block calendar rendering.

## Maintenance

Calendar edits need no code release; other content uses reviewed PRs. Inspect
Vercel build/function logs and spend alerts. ISR cache is deployment-scoped.
SvelteKit is updated within 2.x for the security-fixed Vercel adapter's builder API;
Svelte and Vite remain unchanged. Rollup's locked 4.x version is refreshed to fix
incorrect tree-shaking of the newer server's environment initialization. Existing dependency
audit findings should be assessed separately, not hidden by an automatic force upgrade.
