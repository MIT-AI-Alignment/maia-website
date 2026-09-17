# MAIA website: context for future agents

## Start here

- Repository: https://github.com/MIT-AI-Alignment/maia-website
- Live site: https://aialignment.mit.edu
- Stack: SvelteKit, TypeScript, Tailwind; static production output is `build/`.
- Hosting: MIT Athena, in `/mit/aialignment/www`. A GitHub commit or merge does **not** deploy the site.
- Fetch current `origin/main` before editing; other maintainers work here. Preserve unrelated local changes and untracked files. Build the exact revision you intend to publish.

## Where content lives

| Content | Files |
| --- | --- |
| Application links, deadlines, banners, popups | `src/lib/config.ts` |
| Organizer profiles, emails, LinkedIns | `src/lib/people.ts`; `src/lib/organizerPhotos2026.json` can override photos |
| Events layout and undated planned events | `src/routes/events/+page.svelte` |
| Public calendar import | `src/routes/events/+page.server.ts`, `src/lib/server/calendar.ts` |
| Semester programs, including AISF and partner programs | `src/lib/programHistory.ts` |
| Event photos, attendance, collections/categories | `src/lib/eventMedia.ts`, `eventAttendance.ts`, `eventCollections.ts`, `semesterTimeline.ts` |
| Local images and merch files | `static/images/`, `static/merch/` |

The Events page reads the **public** MAIA calendar configured in `config.ts` at build time. Calendar changes need a rebuild and Athena upload to appear on the website. Keep the private planning calendar private. Verify dates, links, and photos against current sources; do not invent missing details. Undated events can stay website-only with “Date TBD.” All-day calendar end dates are exclusive.

Keep the compact event dates, Orientation/CPW groupings, and mobile layout. Store organizer photos locally so they do not depend on expiring links. Profiles without photos are currently hidden. Use verified contact details and distinguish partner-run programs from MAIA programs.

## Preview and check

Install dependencies with `npm ci` when needed, then:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Run relevant `scripts/*.test.mjs` checks for logic changes. Also review and run `node scripts/verify-built-site.mjs`; its content assertions must match the intended release. At present, its legacy “Orientation popup must remain disabled” assertion conflicts with the AISF application popup added on main, so reconcile that check before the next deployment. Check desktop/mobile for layout changes, image loading, and link destinations. Restart the preview server after rebuilding if newly added assets return 404. Use the user's task browser panel and reuse existing tabs.

## Deploy to Athena

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
