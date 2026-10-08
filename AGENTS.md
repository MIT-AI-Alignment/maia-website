# MAIA website: context for future agents

## Start here

- Repository: https://github.com/MIT-AI-Alignment/maia-website
- Canonical site: https://mitaialignment.org. The October 5 migration record verifies the Vercel cutover and matching-path legacy MIT redirects; refresh live state before reporting a new deployment.
- Stack: SvelteKit, TypeScript, Tailwind; Vercel output is `.vercel/output/`.
- Everyday edits: see `docs/website-editing-guide.md`. Hosting and rollback: see `docs/vercel-migration.md`. Vercel Git integration builds branch previews and auto-deploys main; do not equate a merge with verified live deployment. Never upload this output to Athena.
- Fetch current `origin/main` before editing; other maintainers work here. Preserve unrelated local changes and untracked files. Build the exact revision you intend to publish.

## Where content lives

| Content | Files |
| --- | --- |
| Application links, deadlines, banners, popups | `src/lib/config.ts` |
| Organizer profiles, emails, LinkedIns | `src/lib/people.ts`; `src/lib/organizerPhotos2026.json` can override photos |
| Events layout and undated planned events | `src/routes/events/+page.svelte` |
| Public calendar import | `src/routes/events/+page.server.ts`, `src/lib/server/calendar.ts` |
| Public RSVP metadata and verified link overrides | `src/lib/server/eventPages.ts`, `src/lib/eventSources.ts` |
| Semester programs, including AISF and partner programs | `src/lib/programHistory.ts` |
| Hermes Fellowship page (`/hermes/`): copy and mentor profiles | `src/lib/hermes.ts`; deadline and form link in `CONFIG.hermes` |
| Event photos, attendance, collections/categories | `src/lib/eventMedia.ts`, `eventAttendance.ts`, `eventCollections.ts`, `semesterTimeline.ts` |
| Local images and merch files | `static/images/`, `static/merch/` |

Both Events views read the **public** MAIA calendar configured in `config.ts` through 600-second Vercel ISR. Updates are request-triggered after expiration, without a rebuild. Errors must fail regeneration rather than overwrite the cache with empty content. Keep the private planning calendar private. Verify dates, links, and photos against current sources; do not invent missing details. Undated events can stay website-only with “Date TBD.” All-day calendar end dates are exclusive.

Daily Vercel cron requests also warm both Events views. Public Partiful/Luma links in the calendar URL or description supply optional summaries/photos; curated local media takes priority. Public-calendar titles, dates, and locations stay authoritative. Bound enrichment requests and preserve calendar/last-good metadata on event-page errors. Never import private RSVP data. Prefer adding missing public RSVP links to the calendar; use `eventSources.ts` only for verified overrides. Update this guide if cron paths or cache behavior changes.

Keep the compact event dates, Orientation/CPW groupings, and mobile layout. Store organizer photos locally so they do not depend on expiring links. Profiles without photos are currently hidden. Use verified contact details and distinguish partner-run programs from MAIA programs.

## Preview and check

Install dependencies with `npm ci` when needed, then:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Run `node --experimental-strip-types --test scripts/*.test.mjs`, `node scripts/verify-built-site.mjs`, and `node scripts/verify-events-runtime.mjs` after building. The latter verifies both Events HTML/data success and failure responses; CDN cache retention still needs a Vercel preview check. Check desktop/mobile for layout changes, image loading, and link destinations. Restart the preview server after rebuilding if newly added assets return 404. Follow the user's current browser instructions; use Aside for browser tasks in this session and reuse existing tabs.

## Legacy Athena deployment (pre-migration revisions only)

The following instructions apply only to a reviewed adapter-static revision that emits build/. They must NOT be used with the Vercel branch. Athena now hosts legacy redirects; inspect `docs/vercel-migration.md` and the current redirect/backup state before any operational rollback.

Deploy when requested or already authorized in the current session. Use the signed-in maintainer's MIT Kerberos username, replacing `YOUR_KERB` below. Their account needs membership in `aialignment-www`. Never store passwords, tokens, or private Slack/email exports in this public repository.

1. Save the approved source revision, build it, and run the checks above. Recheck `origin/main` before publishing so another maintainer's update is not silently overwritten.
2. Open a terminal in the user's side panel and establish a reusable SSH connection:

   ```sh
   ssh -M -S /tmp/maia-athena-%C -o ControlPersist=10m -o ServerAliveInterval=30 YOUR_KERB@athena.dialup.mit.edu
   ```

   Complete MIT password/Duo login if needed. Leave this connection open. Use an existing working connection when available; verify it with `ssh -S /tmp/maia-athena-%C -O check YOUR_KERB@athena.dialup.mit.edu`. SSH sessions expire, so do not assume a previous session is still connected.
3. Ensure a recoverable backup of the current live files exists outside the public web directory. Upload the verified build from the local repository:

   ```sh
   rsync -rltvzc --delay-updates --omit-dir-times -e 'ssh -S /tmp/maia-athena-%C' build/ YOUR_KERB@athena.dialup.mit.edu:/mit/aialignment/www/
   ```

   Keep the trailing slash on `build/`. Avoid `--delete` unless removal has been deliberately reviewed. Build locally, not on the shared Athena host. The older `scripts/deploy-reviewed-main.sh` contains maintainer-specific paths and an account; do not run it unchanged for another maintainer.
4. Verify the changed **public URLs**, including image files, against the build. Use cache-busting URLs or hashes when needed. Only then report “deployed.” If login or upload is blocked, distinguish saved source, local preview, and live deployment clearly.

Keep these instructions brief and update them when the workflow changes; semester-specific facts belong in the content files above.
