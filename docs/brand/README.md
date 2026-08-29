# MAIA brand assets

This directory is the source of truth for the visual assets used by the website. It contains only the files needed to keep implementation consistent: the approved logo exports, semantic tokens, and accessibility reference. Preview sheets, PDFs, and presentation screenshots live outside the repository.

## Use

- Use **Manrope 650** for public-facing website type. Use **IBM Plex Mono** only for small labels, metadata, and indexes.
- Use the horizontal lockup in the site header; use the vertical lockup in narrow columns; use the mark-only asset for square contexts such as avatars and favicons.
- Use the `light-*` assets on off-white fields and the `dark-*` assets on plum fields. Transparent exports require their matching background color.
- Keep the identity flat: no gradients, shadows, gloss, or decorative texture.

## Files

- `logos/` — canonical size-5 horizontal and vertical lockups.
- `logos/marks/` — canonical mark-only exports.
- `tokens.json` — machine-readable source tokens.
- `tokens.css` — implementation-facing CSS variable reference.
- `contrast.md` — permitted foreground/background pairings.
- `manifest.json` — exact asset selection by context and theme.

The active website copies its two header assets into `static/images/brand/` so they are served directly at runtime. When the mark is updated, update both locations in the same change.
