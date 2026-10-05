# Vercel migration and maintenance

The Vercel migration and domain cutover completed on October 5, 2026. PR #45
merged as `9a57b0a`; the restored workshop archive in PR #46 merged as `a5b8703`.
Production was Ready and the cutover checks below passed in the operator's live
session. Merging, successful deployment and public verification remain separate
release checks. Do not upload Vercel output to Athena.

## Setup

- Project `maia-website` is connected to `MIT-AI-Alignment/maia-website` in the
  MAIA Vercel team `maia-0ed3b11d`, owned by `nvemuri4649`.
- SvelteKit preset, Node 22, npm ci (package-lock.json is authoritative), build
  command from vercel.json; do not override output directory to build/.
- Git integration builds branch previews and deploys `main` to production.
  Review the preview before merging and verify the resulting production release.
  Maintain review requirements on main; merging is not proof of a successful deploy.
- Output is .vercel/output, not build/. No calendar API key or private calendar is required.
- Keep preview deployment protection enabled; production metadata points to
  https://mitaialignment.org, not preview hosts.

## Calendar behavior

/events/ and /events/semester/ use Vercel ISR with a 600-second expiration;
all other pages remain prerendered. Each view's HTML and SvelteKit data responses
accept the Events route's `trailingSlash: 'ignore'` override: the adapter reconstructs
ISR pathnames without trailing slashes, so inheriting the global `always` setting
causes an HTML redirect loop. Existing slash-terminated links continue to work.
The rest of the site's slash policy is unchanged. Both HTML and data responses
are cached. Tracking queries do not create independent caches. Google is fetched
on cold generation or revalidation, not every visit. Each route may refresh independently.
After 10 minutes the next visit triggers background regeneration: this is not a
cron job or a guarantee that idle pages refresh exactly every 10 minutes.

`kit.paths.relative: false` emits root-relative CSS and JavaScript URLs. The site
is hosted at the domain root; this prevents ISR's slashless internal pathname from
producing relative assets that resolve to the wrong directory on external slash
URLs. The runtime rewrite test checks CSS/JS URLs and their built files for both forms.

The existing parser, recurrence handling, grouping, program history and content
overrides are unchanged. Timeout, HTTP errors and malformed ICS fail regeneration
instead of publishing an empty archive. Vercel is expected to retain the last
successful ISR response on error, but upstream-failure retention has not been
platform-verified for this project. A brand-new deployment has no last-good cache:
warm and verify both routes before promotion; if Google is unavailable, delay it.

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

## Current domains and DNS

Primary: `https://mitaialignment.org`. Registration and nameservers remain at
Squarespace; only web records changed. The October 5 cutover records are:

| Name | Type | Value | TTL |
| --- | --- | --- | --- |
| @ | A | 216.150.1.1 | 1800 |
| www | CNAME | 7505914e553749b2.vercel-dns-016.com | 1800 |

Both Vercel domains have valid TLS. `www` returns a path/query-preserving 308 to
the apex. Google MX, SPF, DKIM, DMARC and verification records were unchanged.
Recheck Vercel's current requirements before future DNS edits; these values are
a cutover record, not universal settings for another project.

Google/Cloudflare public resolvers and the MIT network resolved the new site at
cutover. The operator's local Tailscale resolver retained the old Squarespace IP
for about three hours. This was a resolver-specific observation, not a global
propagation guarantee. `https://maia-website-ten.vercel.app` is the production
alias for checking the deployment while diagnosing stale DNS.

## Athena redirect and verified paths

The locker web root is `/mit/aialignment/www`, resolving to
`/afs/athena.mit.edu/org/a/aialignment/www`. There was no previous `.htaccess` or
`.htaccess.mit`. The new `/mit/aialignment/www/.htaccess.mit` contains:

```apache
RedirectMatch 301 ^/(?:~aialignment|aialignment/www)(?:/(.*))?$ https://mitaialignment.org/$1
RedirectMatch 301 ^/(.*)$ https://mitaialignment.org/$1
```

The first rule strips supported locker alias prefixes; the second preserves the
path on the vanity host. Original query strings are preserved. This is an HTTP
redirect, not a homepage fallback or an in-place copy of the Vercel site.

The operator checked all 53 old Athena HTTPS page paths: all first-hop redirects
preserved the expected path/query; 52 destination paths worked, while the
intentionally deleted `/aisf-hack-s26/` returned a genuine 404. Existing intended
orientation-to-Airtable and AISF-week-to-summer redirects remain. A synthetic
unknown route also redirected to its matching .org path and returned a true 404.
`/initiatives/spring-workshops/` was recovered from the old dev branch in PR #46,
including its seven photos, and visually checked in both themes.

Known upstream HTTP exception: a request such as
`http://aialignment.mit.edu/events/?example=1` is first intercepted by MIT's BigIP
load balancer, which returns 302 to `https://aialignment.mit.edu/`, dropping the
path/query before Apache can apply `.htaccess.mit`. The 53-path preservation
verification above covers HTTPS, not this HTTP variant. The HTTPS
`www.mit.edu` locker alias was also verified. Correcting the HTTP exception
requires MIT-side load-balancer configuration; a repository or Apache redirect
change cannot recover a path already stripped upstream. That work remains open.

Hosted Events HTML (slash and non-slash), both data routes, asset loading,
images, and interactive semester selection passed; HTML/data cache HIT responses
were observed. These checks do not establish upstream-failure cache retention.

## Rollback

The cutover backup/rollback record is outside the public web root at
`/mit/aialignment/.website-migration-backups/20261005-vercel`. Old static files
were left intact. Inspect that record before rollback; do not guess prior DNS.

- For an application regression, restore a known-good Vercel production deployment
  and verify Events plus other critical routes. No DNS changes are needed.
- To serve the old MIT static site again, first copy the current `.htaccess.mit`
  into a new dated backup outside `www`, then move the redirect file out of `www`.
  There is no original redirect file to restore. Verify the old hostname directly.
- If DNS rollback is required, use the saved pre-cutover web records, leaving
  nameservers and Google mail/verification records untouched. Returning to the old
  Squarespace records does not itself restore a MAIA site at .org.
- Permanent 301 redirects may remain cached in clients after server rollback.
  Test with a fresh client and inspect response headers; communicate that caveat.

Rollback is an explicit operational action, not part of routine content releases.

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
audit findings are triaged in [dependency-security-review.md](dependency-security-review.md).
Kit's runtime cookie serializer is pinned to patched 0.7.2; remaining Svelte and
build-tool upgrades need separate compatibility testing, not an automatic force upgrade.
