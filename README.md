# MAIA website

[MIT AI Alignment](https://mitaialignment.org/) is built with SvelteKit, TypeScript,
and Tailwind CSS, and hosted on Vercel. Vercel builds branch previews and deploys
`main` to production through the repository's Git integration.

Start with the [website editing guide](docs/website-editing-guide.md) for everyday
updates. [AGENTS.md](AGENTS.md) gives AI-assisted maintenance instructions, and
[Vercel maintenance](docs/vercel-migration.md) covers runtime behavior, domain
history, and rollback.

## Local development

Use Node 22.18+ or Node 24 and the checked-in npm lockfile.

```sh
npm ci
npm run dev
```

## Check a change

```sh
npm run build
node scripts/verify-built-site.mjs
node scripts/verify-events-runtime.mjs
npm run check
node --experimental-strip-types --test scripts/*.test.mjs
```

Preview the production build with `npm run preview`. Review layout, images, and
links on desktop and mobile, then check the Vercel branch preview before merging.
Verify the changed public pages after the production deployment is Ready.

## How content gets published

Code and content-file changes go through a reviewed pull request. Calendar events
come from the public MAIA calendar and refresh without a code release; see the
editing guide for dates, RSVP links, photos, and refresh behavior.

The production build is `.vercel/output/`. `npm run deploy` is intentionally
disabled to prevent uploading a stale static build to Athena. Athena now serves
legacy-host redirects; its earlier deployment workflow is historical. See
[Vercel maintenance](docs/vercel-migration.md) before operational changes.
