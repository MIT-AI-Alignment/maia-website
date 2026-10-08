<script lang="ts">
	import '@fontsource-variable/newsreader/opsz.css';
	// Preloaded so the two motivation lines are measured in this face from the first paint.
	import newsreaderLatin from '@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2?url';
	import { onMount, tick } from 'svelte';
	import { slide } from 'svelte/transition';
	import PageLayout from '../../components/PageLayout.svelte';
	import { CONFIG } from '$lib/config';
	import { HERMES, MENTORS } from '$lib/hermes';

	const { deadlineDate, deadlineTime, deadlineAt, applicationLink } = CONFIG.hermes;
	const deadline = `${deadlineDate}, ${deadlineTime}`;

	// The site is prerendered, so whether applications have closed is checked in the visitor's
	// browser. Until then (and without JavaScript) the page shows them as open.
	let closed = false;

	onMount(() => {
		closed = Date.now() >= new Date(deadlineAt).getTime();
	});

	$: applicationLabel = closed ? 'Application form' : 'Apply';

	// Mentor profiles: selecting a mentor opens a panel right after the row they are in, so it
	// appears next to them at every width. The column count is read from the grid itself.
	let selectedMentor: number | null = null;
	let mentorColumns = 2;
	let mentorList: HTMLUListElement;
	let reduceMotion = false;

	onMount(() => {
		const countColumns = () => {
			const tracks = getComputedStyle(mentorList).gridTemplateColumns.split(' ').filter(Boolean);
			mentorColumns = Math.max(1, tracks.length);
		};
		const observer = new ResizeObserver(countColumns);
		observer.observe(mentorList);
		countColumns();

		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updateMotion = () => (reduceMotion = motion.matches);
		updateMotion();
		motion.addEventListener('change', updateMotion);
		return () => {
			observer.disconnect();
			motion.removeEventListener('change', updateMotion);
		};
	});

	// The title is set on two lines: "Hermes" above "Fellowship".
	const [titleFirst, ...titleRest] = HERMES.name.split(' ');

	// The grid ends with a "More mentors coming soon" cell, which counts toward the rows.
	const mentorCells = [...MENTORS.map((mentor, index) => ({ mentor, index })), null];

	$: detailAfter =
		selectedMentor === null
			? -1
			: Math.min(
					mentorCells.length - 1,
					Math.floor(selectedMentor / mentorColumns) * mentorColumns + mentorColumns - 1
				);

	async function toggleMentor(index: number) {
		selectedMentor = selectedMentor === index ? null : index;
		if (selectedMentor === null) return;
		await tick();
		document
			.getElementById('mentor-detail')
			?.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
	}

	// Bios may contain [text](https://...) links; split them into text and link pieces.
	function bioParts(paragraph: string) {
		const parts: { text: string; href?: string }[] = [];
		let last = 0;
		for (const match of paragraph.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
			if (match.index > last) parts.push({ text: paragraph.slice(last, match.index) });
			parts.push({ text: match[1], href: match[2] });
			last = match.index + match[0].length;
		}
		if (last < paragraph.length) parts.push({ text: paragraph.slice(last) });
		return parts;
	}

	function mentorLinks(mentor: (typeof MENTORS)[number]) {
		return [
			{ label: 'Website', url: mentor.website },
			{ label: 'LinkedIn', url: mentor.linkedin },
			{ label: 'Google Scholar', url: mentor.googleScholar }
		].filter((link) => link.url);
	}
</script>

<svelte:head>
	<link rel="preload" href={newsreaderLatin} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<PageLayout
	title={HERMES.name}
	description={`${HERMES.intro.program} Application deadline extended to ${deadline}.`}
	pageClass="hermes-page"
>
	<header class="hero">
		<h1 class="title">
			<span class="maia-icon-winged-shoe title-mark" aria-hidden="true"></span>
			<span class="title-text"><span>{titleFirst}</span> <span>{titleRest.join(' ')}</span></span>
		</h1>
		<p class="motivation">
			{#each HERMES.intro.motivation as sentence}<span>{sentence}</span>{' '}{/each}
		</p>
		<p class="program">{HERMES.intro.program}</p>
		<div class="cta">
			{#if applicationLink}
				<a
					class="apply-button"
					href={applicationLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open the Hermes Fellowship application form">{applicationLabel}</a
				>
			{/if}
			<p class="deadline">
				{#if closed}
					<span class="deadline-label">Extended deadline:</span> {deadline}. Applications have closed.
				{:else}
					<span class="deadline-label">Extended deadline:</span> {deadline}
				{/if}
			</p>
		</div>
	</header>

	<section id="details" class="section" aria-labelledby="details-title">
		<h2 id="details-title">Program details</h2>
		<div class="details-intro">
			{#each HERMES.detailsIntro as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<dl class="rows">
			{#each HERMES.details as row}
				<div>
					<dt>{row.label}</dt>
					<dd>{row.value}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section id="mentors" class="section" aria-labelledby="mentors-title">
		<h2 id="mentors-title">Mentors</h2>
		<p class="note">{HERMES.mentorsIntro}</p>
		<ul class="mentors" bind:this={mentorList}>
			{#each mentorCells as cell, cellIndex}
				{#if cell}
					<li>
						<button
							type="button"
							class="mentor-card"
							class:is-selected={selectedMentor === cell.index}
							aria-expanded={selectedMentor === cell.index}
							aria-controls="mentor-detail"
							on:click={() => toggleMentor(cell.index)}
						>
							<span class="mentor-photo">
								{#if cell.mentor.imageUrl}
									<img
										src={cell.mentor.imageUrl}
										alt=""
										width="400"
										height="500"
										loading="lazy"
										decoding="async"
									/>
								{:else}
									<i class="maia-icon-winged-shoe" aria-hidden="true"></i>
								{/if}
							</span>
							<span class="mentor-name">{cell.mentor.name}</span>
							{#if cell.mentor.short}
								<span class="mentor-meta">{cell.mentor.short}</span>
							{/if}
						</button>
					</li>
				{:else}
					<li class="mentor-soon">
						<span class="mentor-photo mentor-soon-tile">
							<span class="mentor-soon-text">More mentors<br />coming soon!</span>
						</span>
					</li>
				{/if}
				{#if cellIndex === detailAfter && selectedMentor !== null}
					{@const active = MENTORS[selectedMentor]}
					{@const links = mentorLinks(active)}
					<li
						class="mentor-detail"
						id="mentor-detail"
						role="region"
						aria-labelledby="mentor-detail-name"
						transition:slide={{ duration: reduceMotion ? 0 : 220 }}
					>
						<div class="mentor-detail-inner">
							<h3 id="mentor-detail-name">{active.name}</h3>
							{#if active.short}
								<p class="mentor-detail-meta">{active.short}</p>
							{/if}
							{#if active.bio?.length}
								{#each active.bio as block}
									{#if Array.isArray(block)}
										<ul class="mentor-detail-list">
											{#each block as item}
												<li>
													{#each bioParts(item) as part}{#if part.href}<a
																class="text-link"
																href={part.href}
																target="_blank"
																rel="noopener noreferrer">{part.text}</a
															>{:else}{part.text}{/if}{/each}
												</li>
											{/each}
										</ul>
									{:else}
										<p>
											{#each bioParts(block) as part}{#if part.href}<a
														class="text-link"
														href={part.href}
														target="_blank"
														rel="noopener noreferrer">{part.text}</a
													>{:else}{part.text}{/if}{/each}
										</p>
									{/if}
								{/each}
							{:else}
								<p>A short bio is coming soon.</p>
							{/if}
							{#if links.length}
								<p class="mentor-detail-links">
									{#each links as link}
										<a class="text-link" href={link.url} target="_blank" rel="noopener noreferrer"
											>{link.label}</a
										>
									{/each}
								</p>
							{/if}
						</div>
						<button
							type="button"
							class="mentor-detail-close"
							aria-label={`Close ${active.name}'s profile`}
							on:click={() => (selectedMentor = null)}
						>
							<i class="fa-solid fa-xmark" aria-hidden="true"></i>
						</button>
					</li>
				{/if}
			{/each}
		</ul>
	</section>

	<section id="timeline" class="section" aria-labelledby="timeline-title">
		<h2 id="timeline-title">Timeline</h2>
		<ol class="timeline">
			{#each HERMES.timeline as step}
				<li>
					<span class="timeline-marker" aria-hidden="true"></span>
					<div class="timeline-body">
						<p class="timeline-when">{step.when}</p>
						<div>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<!-- Keep the form reachable after the deadline while retaining the closed notice. -->
	<div id="apply" class="closing">
		<div class="closing-apply">
			{#if closed}
				<p class="closing-deadline">Applications for this round have closed.</p>
			{:else}
				<p class="closing-deadline">Extended deadline: {deadline}.</p>
			{/if}
			{#if applicationLink}
				<a
					class="apply-button apply-button-large"
					href={applicationLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open the Hermes Fellowship application form">{applicationLabel}</a
				>
			{/if}
		</div>
		<p class="closing-questions">
			Questions? Email <a class="text-link" href={`mailto:${HERMES.contactEmail}`}
				>{HERMES.contactEmail}</a
			>.
		</p>
	</div>
</PageLayout>

<style>
	/* Layout: a single column on a white page with one purple accent. Each section's title
	   sits above its content, and hairlines separate the sections. The hero, every section,
	   and the closing share one width (--h-measure), so text, lists, the mentor grid, and the
	   hairlines all end at the same right edge. */
	:global(main.hermes-page) {
		--h-measure: 48rem;
		/* Secondary text stays near-black (about 14:1 on white, 15:1 in dark mode), so nothing on
		   the page reads as faint gray; hierarchy comes from size and weight instead. */
		--h-bg: #ffffff;
		--h-ink: #17131d;
		--h-ink-2: #2e2935;
		--h-line: #e6e2eb;
		--h-fill: #f3f1f6;
		--h-accent: #70318d;
		--h-action: #70318d;
		--h-action-hover: #5a2672;
		--h-mark: #70318d;
		--h-display: 'Newsreader Variable', 'Newsreader', Georgia, 'Times New Roman', serif;
		--h-display-weight: 460;
		--h-title-weight: 360;
		/* The background art is drawn as a single muted gray-violet, kept faint so text over it
		   stays at full contrast. */
		--h-art: #74697f;
		--h-art-opacity: 0.2;

		/* Site tokens, so the shared header, button, and footer match this page. */
		--maia-canvas: var(--h-bg);
		--maia-nav-surface: var(--h-bg);
		--maia-card: var(--h-fill);
		--maia-ink: var(--h-ink);
		--maia-muted: var(--h-ink-2);
		--maia-border: var(--h-line);
		--maia-accent: var(--h-accent);
		--maia-action: var(--h-action);
	}
	:global(main.hermes-page .text-maia-950\/70) {
		color: var(--h-ink) !important;
	}
	:global(.dark main.hermes-page) {
		--h-bg: #131017;
		--h-ink: #f4f1f7;
		--h-ink-2: #e0d9e7;
		--h-line: #2e2836;
		--h-fill: #1e1925;
		--h-accent: #d0aaeb;
		--h-action: #7b3a9b;
		--h-action-hover: #8c4aad;
		--h-mark: #c9a0e6;
		--h-art: #cbbfd8;
		--h-art-opacity: 0.07;
	}

	/* Background art at the top of the page, in the style of LessWrong's post splash images: it
	   sits behind the hero, anchored right, and the image file itself fades it out toward the
	   left (where the text is), under the header, and at the bottom. The file is an alpha mask,
	   so the art takes its color from the theme tokens above. */
	:global(main.hermes-page)::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		z-index: 0;
		width: min(100%, 90rem);
		aspect-ratio: 4 / 3;
		background-color: var(--h-art);
		opacity: var(--h-art-opacity);
		-webkit-mask: url('/images/hermes/hermes-art.webp') right top / 100% 100% no-repeat;
		mask: url('/images/hermes/hermes-art.webp') right top / 100% 100% no-repeat;
		pointer-events: none;
	}

	/* Hero: the sandal and "Hermes Fellowship" form one lockup in the logo's purple. The hero is
	   a size container so the title and the motivation can scale with its width. */
	.hero {
		container-type: inline-size;
		max-width: var(--h-measure);
		padding-block: clamp(2.5rem, 6vw, 4.5rem) clamp(3.5rem, 8vw, 5.5rem);
	}
	/* The lockup is about 5.5em wide (the mark, the gap, and "Fellowship"), so 16% of the hero's
	   width keeps it inside the column on the narrowest phones; it stops growing at 5rem. The
	   optical size is fixed at Newsreader's display cut, so the cap height the mark is aligned
	   to is the same at every size. */
	.title {
		display: flex;
		align-items: flex-end;
		gap: 0.22em;
		margin: 0;
		font-family: var(--h-display);
		font-size: min(5rem, 16cqi);
		font-variation-settings: 'opsz' 72;
		font-weight: var(--h-title-weight);
		line-height: 1;
		letter-spacing: -0.02em;
		color: var(--h-mark);
	}
	/* The baseline of "Fellowship" sits on the sole of the sandal, and the top of "H" lines up
	   with the point halfway between the wing tip and the center of the ankle circle. The logo
	   SVG is cropped to the drawing (408.84 by 1245.74 units); that halfway point is 889.56 units
	   above the sole. The lettering is the cap height (0.715em in Newsreader) plus one line, so
	   1.715em covers those 889.56 units and sets the mark's size. At line-height 1 the baseline
	   sits 0.265em above the bottom of the line box, so the mark is raised by that much. */
	.title-mark {
		flex: none;
		height: calc(1.715em * 1245.74 / 889.56);
		width: calc(1.715em * 408.84 / 889.56);
		margin-bottom: 0.265em;
	}
	.title-text {
		min-width: 0;
	}
	.title-text > span {
		display: block;
	}
	/* The motivation: two sentences in the display face and the title's purple. Where the hero is
	   at least 34rem wide, each sentence stays on one line, and the longer one (24.14em wide)
	   spans the column: 4.14% of the hero's width is 1/24.14 of it. The optical size is fixed so
	   glyph widths do not change as the type scales. On narrower phones the sentences wrap at a
	   readable size instead. */
	.motivation {
		margin: 1.5rem 0 0;
		font-family: var(--h-display);
		font-size: clamp(1.375rem, 4.14cqi, 2.125rem);
		font-variation-settings: 'opsz' 32;
		font-weight: var(--h-display-weight);
		line-height: 1.3;
		letter-spacing: -0.01em;
		color: var(--h-mark);
	}
	/* Where the sentences must wrap, both break into balanced two-line blocks, so one never
	   sits on a single line next to the other wrapped. */
	.motivation > span {
		display: block;
		max-width: 14.5em;
		text-wrap: balance;
	}
	/* A small gap keeps the two sentences apart as separate blocks when they wrap on phones. */
	.motivation > span + span {
		margin-top: 0.35em;
	}
	@container (min-width: 34rem) {
		.motivation {
			margin-top: 2rem;
		}
		.motivation > span {
			max-width: none;
			white-space: nowrap;
		}
	}
	.program {
		margin: 1.25rem 0 0;
		font-size: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
		line-height: 1.6;
		color: var(--h-ink-2);
		text-wrap: pretty;
	}
	.cta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		margin-top: 2.25rem;
	}
	.deadline {
		margin: 0;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--h-ink-2);
	}
	.deadline-label {
		font-weight: 600;
		color: var(--h-ink);
	}
	/* The Apply button: a plain square block in the action purple. */
	.apply-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 8rem;
		padding: 0.85rem 2rem;
		border-radius: 0;
		background: var(--h-action);
		color: #fff;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.25;
		letter-spacing: 0.02em;
		text-decoration: none;
		transition: background-color 150ms ease;
	}
	.apply-button:hover {
		background: var(--h-action-hover);
	}
	.apply-button:focus-visible {
		outline: 2px solid var(--h-action);
		outline-offset: 3px;
	}

	/* Sections: the title sits above the content, and a hairline separates sections. */
	/* Each section is a size container: the layouts inside respond to the width the content
	   actually has, which differs from the window width because the page margins change too. */
	.section {
		container-type: inline-size;
		display: grid;
		max-width: var(--h-measure);
		gap: 1.75rem;
		padding-top: clamp(2rem, 4vw, 2.75rem);
		border-top: 1px solid var(--h-line);
		scroll-margin-top: calc(var(--header-height, 4rem) + 1rem);
	}
	.section > * {
		min-width: 0;
	}
	.section + .section {
		margin-top: clamp(4rem, 8vw, 6rem);
	}
	.section:last-child {
		margin-bottom: clamp(2rem, 5vw, 4rem);
	}
	h2 {
		margin: 0;
		font-family: var(--h-display);
		font-size: clamp(2rem, 1.6rem + 1.5vw, 2.75rem);
		font-weight: var(--h-display-weight);
		line-height: 1.05;
		letter-spacing: -0.015em;
		color: var(--h-ink);
		text-wrap: balance;
	}
	.note {
		margin: 0;
		font-size: 1.125rem;
		line-height: 1.65;
		color: var(--h-ink-2);
	}
	h2 + .note {
		margin-top: -0.75rem;
	}
	.details-intro {
		display: grid;
		gap: 1rem;
	}
	.details-intro p {
		margin: 0;
		font-size: 1.125rem;
		line-height: 1.65;
		color: var(--h-ink-2);
		text-wrap: pretty;
	}

	/* Label and value rows, for program details and the application */
	.rows {
		margin: 0;
	}
	.rows > div {
		display: grid;
		gap: 0.25rem;
		padding-block: 1rem;
		border-bottom: 1px solid var(--h-line);
	}
	.rows > div:first-child {
		padding-top: 0;
	}
	.rows > div:last-child {
		border-bottom: 0;
	}
	.rows dt {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.6;
		color: var(--h-ink);
	}
	.rows dd {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.6;
		color: var(--h-ink-2);
	}
	/* Label beside its text wherever there is room; stacked only on phones. */
	@container (min-width: 28rem) {
		.rows > div {
			grid-template-columns: 8rem minmax(0, 1fr);
			gap: 1.5rem;
		}
	}

	/* Mentors: a grid of portraits, four per row on wide screens. Each portrait is a button that
	   opens the mentor's profile in a panel under their row. */
	.mentors {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.75rem 1rem;
		min-width: 0;
		margin: 0.5rem 0 0;
		padding: 0;
		list-style: none;
	}
	.mentor-card {
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
	}
	.mentor-card:focus-visible {
		outline: 2px solid var(--h-accent);
		outline-offset: 4px;
	}
	.mentor-photo {
		display: grid;
		place-items: center;
		max-width: 100%;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--h-fill);
		color: var(--h-mark);
		transition: box-shadow 150ms ease;
	}
	.mentor-card.is-selected .mentor-photo {
		box-shadow: 0 0 0 2px var(--h-bg), 0 0 0 4px var(--h-ink);
	}
	.mentor-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.mentor-photo i {
		font-size: 3.25rem;
		opacity: 0.5;
	}
	/* The last cell has the same tile as a portrait, with the message on it. The text is sized
	   from the tile's width, so it looks the same at every column width. */
	.mentor-soon-tile {
		container-type: inline-size;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	/* The message in the title's purple, on two lines; the longer line ("More mentors", about
	   5.94em) spans 86% of the tile. The optical size is fixed so those proportions hold at every
	   size. */
	.mentor-soon-text {
		position: relative;
		font-family: var(--h-display);
		font-size: 14.5cqi;
		font-variation-settings: 'opsz' 24;
		font-weight: var(--h-display-weight);
		line-height: 1.1;
		color: var(--h-mark);
		white-space: nowrap;
	}
	.mentor-name,
	.mentor-meta {
		display: block;
	}
	.mentor-name {
		margin-top: 0.75rem;
		font-size: 1.0625rem;
		font-weight: 600;
		line-height: 1.35;
		color: var(--h-ink);
	}
	.mentor-meta {
		margin-top: 0.2rem;
		font-size: 0.9375rem;
		line-height: 1.5;
		color: var(--h-ink-2);
	}
	/* On hover, the portrait and name grow slightly to show they open a profile. */
	@media (hover: hover) and (pointer: fine) {
		.mentor-card .mentor-photo,
		.mentor-card .mentor-name {
			transition: transform 200ms ease;
		}
		.mentor-card .mentor-name {
			transform-origin: left center;
		}
		.mentor-card:hover .mentor-photo {
			transform: scale(1.03);
		}
		.mentor-card:hover .mentor-name {
			transform: scale(1.05);
		}
	}

	/* The profile panel spans the whole grid row under the selected mentor. */
	.mentor-detail {
		position: relative;
		grid-column: 1 / -1;
		margin: 0;
		background: var(--h-fill);
	}
	.mentor-detail-inner {
		padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.25rem, 4vw, 2.5rem);
		padding-right: 4rem;
	}
	.mentor-detail h3 {
		margin: 0;
		font-family: var(--h-display);
		font-size: clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem);
		font-weight: var(--h-display-weight);
		line-height: 1.15;
		letter-spacing: -0.01em;
		color: var(--h-ink);
	}
	.mentor-detail p {
		margin: 1rem 0 0;
		font-size: 1.0625rem;
		line-height: 1.65;
		color: var(--h-ink-2);
	}
	.mentor-detail .mentor-detail-meta {
		margin-top: 0.35rem;
		font-size: 1rem;
		font-weight: 600;
		color: var(--h-ink);
	}
	.mentor-detail-list {
		margin: 0.4rem 0 0;
		padding-left: 1.25rem;
		list-style: disc;
	}
	.mentor-detail-list li {
		margin-top: 0.35rem;
		font-size: 1.0625rem;
		line-height: 1.6;
		color: var(--h-ink-2);
	}
	.mentor-detail-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
	}
	.mentor-detail-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border: 0;
		background: none;
		color: var(--h-ink);
		font-size: 1.125rem;
		cursor: pointer;
	}
	.mentor-detail-close:hover {
		background: var(--h-line);
	}
	.mentor-detail-close:focus-visible {
		outline: 2px solid var(--h-accent);
		outline-offset: -2px;
	}
	/* Two portraits per row on phones, three in mid-width layouts, four on wide ones. */
	@container (min-width: 30rem) {
		.mentors {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 2.25rem 1.25rem;
		}
	}
	@container (min-width: 44rem) {
		.mentors {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	/* Timeline: a thin vertical line with a small square marker for each step. */
	.timeline {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.timeline li {
		position: relative;
		display: grid;
		grid-template-columns: 1.5rem minmax(0, 1fr);
		column-gap: 1rem;
		padding-bottom: 1.75rem;
	}
	.timeline li:last-child {
		padding-bottom: 0;
	}
	.timeline li::before {
		content: '';
		position: absolute;
		top: 1.2rem;
		bottom: -0.5rem;
		left: calc(0.75rem - 0.5px);
		width: 1px;
		background: var(--h-line);
	}
	.timeline li:last-child::before {
		display: none;
	}
	.timeline-marker {
		position: relative;
		z-index: 1;
		width: 0.625rem;
		height: 0.625rem;
		margin: 0.5rem auto 0;
		border: 1.5px solid var(--h-ink);
		background: var(--h-bg);
	}
	.timeline-body {
		display: grid;
		gap: 0.15rem;
	}
	.timeline-when {
		margin: 0;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.6;
		color: var(--h-ink-2);
	}
	.timeline h3 {
		margin: 0;
		font-size: 1.0625rem;
		font-weight: 600;
		line-height: 1.6;
		color: var(--h-ink);
	}
	.timeline-body p:not(.timeline-when) {
		margin: 0.1rem 0 0;
		font-size: 1.0625rem;
		line-height: 1.6;
		color: var(--h-ink-2);
	}
	/* Dates beside the descriptions only when there is room for both; otherwise above them. */
	@container (min-width: 40rem) {
		.timeline-body {
			grid-template-columns: 10rem minmax(0, 1fr);
			column-gap: 1.5rem;
		}
	}

	/* Closing call to action, set apart by a hairline rather than a section title. The deadline
	   and the Apply button share a line. The deadline (about 18.2em wide) is sized to the column,
	   so the two fit side by side wherever the column is at least about 44rem wide (desktop
	   layouts); on narrower screens the button wraps under the deadline. */
	.closing {
		container-type: inline-size;
		display: grid;
		justify-items: start;
		gap: 1.5rem;
		max-width: var(--h-measure);
		margin: clamp(4rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 4rem);
		padding-top: clamp(2rem, 4vw, 2.75rem);
		border-top: 1px solid var(--h-line);
	}
	.closing-apply {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.25rem 1.75rem;
	}
	.closing-deadline {
		margin: 0;
		font-family: var(--h-display);
		font-size: clamp(1.5rem, 3.9cqi, 2.25rem);
		font-weight: var(--h-display-weight);
		line-height: 1.2;
		letter-spacing: -0.01em;
		color: var(--h-ink);
		text-wrap: balance;
	}
	.apply-button-large {
		min-width: 11rem;
		padding: 1.05rem 2.75rem;
		font-size: 1.125rem;
	}
	.closing-questions {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.6;
		color: var(--h-ink-2);
	}
	.text-link {
		color: var(--h-accent);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2em;
	}
	.text-link:hover {
		text-decoration-thickness: 2px;
	}
	.section a:not(.apply-button):focus-visible,
	.text-link:focus-visible {
		outline: 2px solid var(--h-accent);
		outline-offset: 3px;
		border-radius: 2px;
	}
</style>
