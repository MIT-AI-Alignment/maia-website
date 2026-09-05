# Harvard courses and research-card comparison

Approved layout and course additions, September 5, 2026. Deployment is a separate step.

## Course additions

Six Harvard options join the existing skill groups: CS 1810 and 1261 in Spring 2027; CS 1840, 2680, 2822R, and 1050 in Fall 2026. The existing CS 2881R AI Safety listing remains. The page and navigation now say “MIT & Harvard Classes”; the URL remains `/resources/mit-classes/` to preserve existing links.

Sources:

- [Harvard SEAS course listings](https://seas.harvard.edu/computer-science/courses): titles, instructors, terms, and descriptions. These are relevant foundations and adjacent topics, not six courses exclusively about AI safety.
- [Juncheng Yang's teaching page](https://juncheng.seas.harvard.edu/teaching): CS 2680 prerequisites and systems topics.
- [MIT Registrar](https://registrar.mit.edu/registration-academics/registration-information/cross-registration/harvard): eligibility and required approvals. First-year MIT undergraduates are ineligible; Extension and Summer School courses are excluded from this shortlist.

Exact prerequisites are shown only where verified. Other entries point readers to current course requirements; no prerequisites or enrollment availability have been inferred from course numbers.

## Research layout

- `/initiatives/#research`: three larger cards under “Highlighted papers,” above the complete compact list of 33 entries. Highlights Natural Emergent Misalignment, Harmonic Loss, and Alignment Faking, newest first. All three sit side by side on wide screens and stack on smaller screens; first-page previews fill the card's content width at their natural aspect ratio, with no height cap or cropping. Dates and authors come from the same research data as the compact list.
- NEM thumbnail: first page rendered from [arXiv 2511.18397](https://arxiv.org/abs/2511.18397), not an AI-generated image. The other two use their existing paper previews. Adversarial Go remains in the complete list but is no longer highlighted.
- No carousel, auto-animation, image inversion, colored tag pills, or decorative borders. The complete chronological list remains below; the three featured papers intentionally also appear there.
- The temporary `figures=1` comparison flag has been removed; highlighted papers render by default, including in the static HTML.
