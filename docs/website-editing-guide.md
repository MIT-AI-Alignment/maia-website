# Editing the MAIA website

The public site is [mitaialignment.org](https://mitaialignment.org/). Most updates
are either a public calendar edit or a small change to a file in this repository.
Calendar edits refresh automatically. File changes need a reviewed pull request;
merging to `main` starts a Vercel production deployment.

## Add or update an event

Use the **public MAIA calendar**, linked from the Events page. The organizers'
planning calendar is separate and should stay private.

1. Set the event title, date, start/end time, and location in the public calendar.
   Those details are the website's source of truth. Use the Boston time zone.
2. Add a short public description. If there is a public Partiful or Luma page,
   paste its direct event URL into the description or calendar URL field.
3. Check that the RSVP page opens while signed out, then check both
   [Events](https://mitaialignment.org/events/) and the
   [semester view](https://mitaialignment.org/events/semester/).

The website uses public linked event pages for a short description and cover
photo. It keeps curated local photos when available. An unavailable event page
falls back to saved metadata or the calendar description; it does not replace the
calendar's title, dates, or location. Guest lists and private RSVP data are not
imported. Linked-page descriptions and photos may be cached for up to a day;
the calendar's event details refresh separately.

Both Events views have a 10-minute cache. A visit after expiration starts a
background refresh, so the first visitor may briefly see the previous version.
Daily scheduled requests also refresh each view when there are no visitors. A
calendar edit does not require a rebuild. If the public calendar itself cannot be
read, regeneration fails rather than publishing an empty Events page.

If the public calendar lacks an RSVP link, the preferred fix is to add it there.
Verified website-only link overrides live in `src/lib/eventSources.ts`, keyed by
the calendar event's stable ID. Curated photo overrides live in
`src/lib/eventMedia.ts`. Use overrides for confirmed details, not guessed dates
or copied private planning notes. Undated planned events can stay website-only
with “Date TBD.”

## Find the file for a change

Paths below are relative to the repository root.

| What to update | Where to edit |
| --- | --- |
| Application links, deadlines, top banner, popup | [`src/lib/config.ts`](../src/lib/config.ts) |
| Homepage text and community counts | [`src/routes/+page.svelte`](../src/routes/+page.svelte) |
| Organizer names, roles, bios, contact and booking links | [`src/lib/people.ts`](../src/lib/people.ts) |
| Organizer photo overrides | [`src/lib/organizerPhotos2026.json`](../src/lib/organizerPhotos2026.json) |
| Summer AISF fellows and photos | [`src/lib/fellowsSummer2026.json`](../src/lib/fellowsSummer2026.json), `static/images/fellows-summer-2026/` |
| Fall AISF overview | [`src/routes/aisf/+page.svelte`](../src/routes/aisf/+page.svelte) |
| Fall reading packet and integrated readings | [`src/lib/fall2026Curriculum.json`](../src/lib/fall2026Curriculum.json), `src/routes/aisf/week1/` |
| Archived AISF curricula | `src/routes/aisf/spring-2026/`, `src/routes/aisf/summer-2026/` |
| Hermes program and mentors | [`src/lib/hermes.ts`](../src/lib/hermes.ts); application settings in `CONFIG.hermes` |
| Held programs and partner programs | [`src/lib/programHistory.ts`](../src/lib/programHistory.ts) |
| Event photos, attendance, categories, collections | `src/lib/eventMedia.ts`, `eventAttendance.ts`, `eventCollections.ts`, `semesterTimeline.ts` |
| Member and alumni research | [`src/lib/researchShowcase.ts`](../src/lib/researchShowcase.ts) |
| Resource pages | `src/routes/resources/` |
| Navigation and footer | `src/routes/components/navbar.svelte`, `footer.svelte` |
| Local images | `static/images/`; reference them as `/images/...` |

For a profile, set the relevant active/organizer/exec flags as well as the name and
photo. Organizer profiles without photos are hidden. Store approved photos
locally so expired Slack or cloud links do not break them. Verify names,
permissions, and booking/contact destinations before publishing.

For a new semester, preserve the old curriculum under its dated archive. Publish
only ready current-week pages; leave unfinished weeks marked “Coming soon.” Keep
application deadlines, button labels, and the destination form consistent. The
Hermes deadline includes a time-zone-aware `deadlineAt`; update it alongside the
visible date and time.

## Make a small edit in GitHub

1. Open the file on [GitHub](https://github.com/MIT-AI-Alignment/maia-website) and
   choose Edit. Create a new branch and pull request for the change.
2. Explain what changed and link the approved public source when relevant. For
   a deadline or form update, include the exact new date and destination.
3. Check the Vercel preview attached to the pull request. Open the affected page
   on desktop and mobile; test buttons, links, photos, and both themes.
4. After review and passing checks, merge. Wait for the production deployment to
   be Ready, then reopen the changed page at `mitaialignment.org`.

Avoid simultaneous direct edits to `main`: other maintainers may be updating
the same files. A successful merge and a working public deployment are separate
checks. No Athena upload is needed for a routine update.

## Use an AI assistant

Give the assistant the exact copy, public source, and files or pages affected.
For example:

> Read AGENTS.md and update the approved homepage community count to “1400+ MAIA
> affiliates.” Make a small pull request, check the production build and preview,
> and verify the public page after deployment. Preserve unrelated changes.

For event edits, tell it to preserve public-calendar dates and use public RSVP
pages only. Ask for the changed pages and validation results, so you can review
the actual outcome.

For an optional refresh of the bundled fallback, first check the public RSVP
pages, then run `node scripts/sync-event-metadata.mjs` from the repository root.
Review the changes to `src/lib/eventPageMetadata.json`, including descriptions and
image destinations, before including that file in a pull request. The script
keeps existing records when a source cannot be fetched. Routine calendar updates
do not require this step.

## Search and link previews

Each page should have a specific title and description. Shared page metadata is
in `src/components/PageMetadata.svelte`; most pages receive it through
`PageLayout.svelte`. Canonical and social URLs use the public `.org` hostname,
without tracking queries, with one consistent trailing slash.

The shared social image and organization metadata are in `src/app.html`. The
social image is `static/images/brand/maia-social-preview.png` (1200 × 630). Add a
new public content page to `src/routes/sitemap.xml/+server.ts`; omit redirects,
unpublished pages, and demo content. `static/robots.txt` points to that sitemap.
Keep old links working through deliberate redirects rather than changing their
meaning silently. Search engines decide when to recrawl; a release does not
guarantee an immediate search-result or link-preview update.

## Before and after a release

For local checks, use the commands in the [README](../README.md). The built-site
check verifies public pages, fellow photos, metadata, sitemap targets, and removed
links. The Events runtime check verifies HTML/data responses and asset paths;
local preview does not reproduce Vercel's CDN cache behavior.

Check the Vercel preview and the final public site for the pages you changed.
For Events changes, check both views, direct loading, navigation between them,
the expected date/location, RSVP destination, cover photo, and absence of broken
images. If a release fails, use the Vercel deployment/build logs and the
[maintenance guide](vercel-migration.md). Keep deployment and calendar secrets in
Vercel environment settings, never in this public repository.
