# September website integration

This combines the event-archive draft, the website follow-ups, and Ionut's booking and display-name changes.

## Included

- Photo-backed event archive, category filters, attendance, and semester timeline.
- Merchandise and playing-card gallery; mailing-list messaging in place of orientation promotion.
- Roman Ross and Jason Chin on the executive board; Felix and Ryan removed from website profiles and historical roster listings. The source calendar remains unchanged; the website omits the removed names from displayed event descriptions.
- Ionut Stan's requested display name and public booking link.
- 45 Summer 2026 AISF fellows, each with recorded completion approval, photo and publication consent. The latest response check on September 15 found no additional eligible fellows. The public data contains only names and local photo paths.
- Consented Fall organizer photos, shorter About/Resources copy, clearer course guidance, and removal of unreliable citation counts.
- Automatic phone-to-Airtable homepage redirect removed.
- Readable background shading on all three CAIP exhibition pages. The old gradient overlay was disabled by the site's global gradient reset.

## Checks

- Production build: 40 rendered routes, including two orientation redirects.
- 22 calendar, grouping, category, and semester tests passed.
- Svelte checking: zero errors; six pre-existing accessibility/unused-property warnings remain.
- Built-site checks verify removals, contact links, public fellow field allowlist, photo files and all new routes.
- Desktop viewport previews captured for all 38 distinct pages; eight key pages also checked at 390px width with no page-level horizontal overflow.
- Fellow-name search and event-category filtering checked in the browser.

## Release boundary

Merging is separate from deploying to Athena. Use `scripts/deploy-reviewed-main.sh` with the approved main commit. Public calendar content is fetched at build time; fellow photos are an explicitly reviewed snapshot, not an automatic Airtable publication feed.

The old IAP PR #4 is excluded. No hosting migration is included.
