# Vercel migration dependency review (2026-10-05)

Scope: PR #45's public Events SSR/ISR routes and generated Vercel function.
This is a scoped exposure review, not a claim that the dependency tree is clean.
Do not use `npm audit --omit=dev` as a runtime verdict: SvelteKit and Svelte are
dev dependencies whose code is used in production.

## Targeted fix

SvelteKit 2.70.3 depends on cookie 0.6.x. Override only Kit's cookie dependency
to 0.7.2, which rejects invalid cookie names, paths and domains
([advisory](https://github.com/advisories/GHSA-pxg6-pf52-xh8x)). No application
cookie writes were found, but this package ships in the function, so fix it
rather than relying on that fact. A regression test checks serialization and
parsing compatibility and rejection of delimiter injection. The rebuilt function
contains cookie 0.7.2.

## Runtime findings retained for a separate framework upgrade

Svelte 4 remains flagged by the audit's Svelte advisories; npm proposes Svelte 5.
No reachable exploit path was found in the current calendar rendering:

- Attribute-spreading XSS/prototype findings require untrusted attribute objects.
  Calendar fields are explicit text/attribute values, not spread attributes.
  Existing paper component spreads consume checked-in data.
- Dynamic element tags use fixed ternary choices (section/details, header/summary,
  a/button), never calendar/user-supplied tag names.
- No contenteditable text bindings were found.
- DOM-clobbering advisory prerequisites (user-controlled form attributes plus
  input/button names) were not found.
- Calendar HTML is converted to text/link data; allowed link schemes are HTTP(S).
  It never reaches `{@html}`. Existing raw HTML elsewhere is checked-in content,
  not calendar data. Shared hero titles are supplied by application code.

Sources: [spread attributes](https://github.com/sveltejs/svelte/security/advisories/GHSA-pr6f-5x2q-rwfp),
[inherited attributes](https://github.com/sveltejs/svelte/security/advisories/GHSA-crpf-4hrx-3jrp),
[dynamic tags](https://github.com/sveltejs/svelte/security/advisories/GHSA-m56q-vw4c-c2cp),
[DOM clobbering](https://github.com/advisories/GHSA-rcqx-6q8c-2c42).

The built-server test injects malicious calendar title/location/description data
and checks escaped markup and absence of executable links in both Events HTML
views. This is not a browser exploit suite or a universal XSS proof. Reassess if
introducing raw remote HTML, dynamic tag names, attribute spreads or user forms.
Plan a separately tested Svelte 5 migration rather than suppressing these alerts.

## Build/development findings

After the cookie fix, npm audit reports 36 package findings (3 low, 9 moderate,
24 high), including meta-dependency findings, not 36 independent exploits.
The generated function's external package inventory is Kit, esm-env, ical.js,
cookie, set-cookie-parser and devalue; compiled Svelte runtime is bundled too.
The audit reports no findings for ical.js, set-cookie-parser or devalue here.

Sharp/imagetools image-decoder issues concern build-time asset processing; no
runtime image optimizer is configured. Vite/esbuild dev-server findings concern
development servers, not the deployed adapter handler. PostCSS, Tailwind, glob,
braces/minimatch, YAML and ESLint-related findings concern the build/check tools.
These are still risks when processing untrusted repository/assets/build input:
keep previews protected, do not expose the Vite dev server, and upgrade tooling in
a separate compatibility-tested maintenance PR. Do not run `npm audit fix --force`.

## Verification

Build, static-output checks, built-server success/failure/XSS fixture tests,
cookie regression test and existing logic tests pass. Vercel CDN cache behavior
and isolated upstream-failure retention still require the hosted preview checks
in `vercel-migration.md`; local server tests do not verify the CDN.
