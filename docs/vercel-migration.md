# Vercel migration and maintenance

The Vercel deployment and domain cutover were performed on October 5, 2026. PR #45
merged as `9a57b0a`; the restored workshop archive in PR #46 merged as `a5b8703`.
Production was Ready and the cutover checks below passed in the operator's live
session. A later check found stale Squarespace DNS on another client network;
those initial checks did not establish global DNS convergence. See the recovery
section below. Merging, successful deployment and public verification remain
separate release checks. Do not upload Vercel output to Athena.

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

### October 5 stale-DNS incident and recovery

At approximately 19:10 Eastern, the reporting client's recursive resolvers still
returned the four former Squarespace A records with 5,450 seconds of TTL left.
Authoritative DNS, Google, and Cloudflare returned Vercel's new address. Following
`https://aialignment.mit.edu/hermes/` reached the Squarespace parking page with
HTTP 200. The production alias, and the canonical hostname resolved directly to
Vercel with normal TLS verification, both served the real Hermes page.

Relevant history (Eastern time):

- `9a57b0a` / PR #45, 17:20: switched the build to Vercel and canonical metadata
  to `.org`. The DNS and Athena changes were separate operational actions.
- `a5b8703` / PR #46, 17:36: restored the workshop archive before cutover.
- `f5dc229` / PR #47, 17:46: recorded the DNS cutover and live permanent Athena
  redirects to `.org`. This documentation commit did not itself install them.
- `10b8859` / PR #48 and `6eac3c3` / PR #49, 17:52–17:56: fixed reading styles,
  event planning, and application error rendering. They do not produce the
  Squarespace parking page; affected requests never reach the Vercel app.

The migration exposed clients with cached old DNS to a parked destination when
Athena began redirecting them. Lowering the new record's TTL does not shorten
the lifetime of records already cached under the previous TTL.

Run the content-aware check on each relevant network, especially the affected
network, before declaring recovery:

```sh
node scripts/verify-public-site.mjs
```

It reports system/Google/Cloudflare IPv4 answers and remaining TTLs, and follows
the MIT, apex, www, and stable production-alias Hermes URLs. A 200 parking page,
missing application link, or failed request exits nonzero. DNS differences are
diagnostic, not a blanket failure: CDNs may legitimately return different IPs.
This is a client-network check, not proof of worldwide convergence or browser
cache invalidation. It does not submit applications or change any settings.

`ops/athena-dns-recovery.htaccess.mit` is a **temporary recovery template**, not
an automatically deployed file. It uses 302 redirects to the stable Vercel
production alias, preserving paths and queries and bypassing `.org` DNS.
Applying it requires authenticated Athena access:

1. Read and compare the live `/mit/aialignment/www/.htaccess.mit`; do not overwrite
   unexpected directives or another maintainer's changes.
2. Make a dated backup outside public `www`, under `.website-migration-backups`.
3. Stage the reviewed template beside the live file, preserve its permissions,
   recheck the original checksum, and rename the staged file into place.
4. Verify fresh HTTPS requests to the MIT homepage, Hermes, Events, a locker
   alias, and an unknown route. Check Location path/query preservation, real
   content at valid destinations, and a genuine 404 at the unknown destination.
   Restore the exact backup if these checks fail.

This mitigation does not repair direct `.org` requests using stale DNS. An
already-cached 301 can also bypass the updated MIT server; a fresh client or
unique query string is needed to test the new server behavior. Use the direct
production alias for immediate access in those cases. Do not change mail DNS,
disable TLS verification, or redeploy the application to address cached DNS.

After old TTLs have elapsed and the affected networks pass the content checks,
restore the canonical redirect deliberately from the saved configuration and
verify again. For future migrations, lower the **old** TTL in advance, wait out
its original lifetime, and verify the destination on affected networks before
switching the old site's redirect. Use temporary redirects during cutover.

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
The operator's read-only `stella aialignment -i` lookup resolved the alias to the
shared `HOST-TO-WEB-REWRITE-5.MIT.EDU` F5 front door (`18.9.107.56`), with contact
`ops@mit.edu` and many unrelated aliases. Do not modify that shared host record.
Ask MIT IS&T/Ops to preserve path/query in the HTTP-to-HTTPS front-door rule;
MAIA locker permissions are not authority to change shared MIT infrastructure.

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
