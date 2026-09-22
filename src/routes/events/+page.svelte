<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import EventsLayout from '../../components/EventsLayout.svelte';
	import Button from '../../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { displayDate, displayDateRange, displayTimeRange, localDate, splitEvents, type CalendarEvent } from '$lib/events';
	import { eventCategory, TIMELINE_CATEGORIES, type TimelineCategory } from '$lib/semesterTimeline';
	import { groupEventRuns, ORIENTATION_2026_RSVP_EVENTS, type EventRun } from '$lib/eventCollections';
	import { getEventMedia, type EventMedia } from '$lib/eventMedia';
	import EventAttendance from '$lib/components/EventAttendance.svelte';
	import { reveal } from '$lib/reveal';
	import { PARTNER_PROGRAMS } from '$lib/programHistory';

	export let data: { events: CalendarEvent[]; fetchedAt: string };
	let now = new Date();
	let activeCategory: TimelineCategory | 'all' = 'all';
	// Planned fall events from the activities sheet, Partiful, and organizer updates.
	const plannedEvents: { title: string; category: TimelineCategory; description: string; url?: string; date?: string; media?: EventMedia; imageCredit?: string }[] = [
		{
			title: 'Dwarkesh Fireside Chat with MAIA Members',
			category: 'talks',
			date: '2026-09-23',
			media: { imageUrl: '/images/events/speaker-dwarkesh-patel.jpg', imageAlt: 'Dwarkesh Patel portrait', sourceUrl: 'https://www.dwarkesh.com/about', kind: 'portrait' },
			description: 'A fireside chat with Dwarkesh for MAIA members on Wednesday, September 23.'
		},
		{
			title: 'Talk with Stephen Casper',
			category: 'talks',
			date: '2026-10-06',
			media: { imageUrl: '/images/events/speaker-stephen-casper.jpg', imageAlt: 'Stephen Casper portrait', sourceUrl: 'https://www.hks.harvard.edu/faculty/stephen-casper', kind: 'portrait' },
			description: 'Tuesday, October 6.'
		},
		{
			title: 'Talk with Garrison Lovely',
			category: 'talks',
			media: { imageUrl: '/images/events/speaker-garrison-lovely.jpg', imageAlt: 'Garrison Lovely portrait', sourceUrl: 'https://www.garrisonlovely.com/', kind: 'portrait' },
			imageCredit: 'Photo: Min Goodman-Cheng',
			description: 'Planned for fall.'
		},
		{
			title: 'Estimation & Forecasting Challenge',
			category: 'hackathons',
			description: 'Test your intuition, confidence, and calibration through interactive questions and puzzles in a friendly small-team competition. Come with friends or meet new teammates. Planned for Fall 2026; date and time TBD.',
			url: ORIENTATION_2026_RSVP_EVENTS.find(event => event.name === 'Estimation and Forecasting Challenge')!.href
		}
	];
	$: eventRows = data.events.filter(event => event.kind !== 'initiative');
	const highlightTitles: Record<string, string> = {
		'6ja895bhclgqneiankcah6ugl0@google.com/2026-09-07T21:30:00Z': 'Sunset Cruise',
		'maia-archive-33a39a9fe19563f56735abe5684b7fa5@mitaialignment.org/2026-02-10': 'Nicholas Carlini: AI Security Talk and Q&A',
		'ihbf247eorb6sscc2g5lmfiqsc@google.com/2026-04-18T17:00:00Z': 'CPW Midway (MIT’s Club Fair)',
		'5oa8mnfra5idfaeotp3g5s0clc@google.com/2026-09-05T22:00:00Z': 'OpenAI Hacking Incident Explained'
	};
	$: highlights = eventRows.filter(event => highlightTitles[event.id]);
	async function openHighlight(click: MouseEvent, event: CalendarEvent) {
		if (click.ctrlKey || click.metaKey || click.shiftKey || click.altKey) return;
		click.preventDefault();
		activeCategory = 'all';
		await tick();
		const details = document.getElementById(`details-${encodeURIComponent(event.id)}`) as HTMLDetailsElement;
		openParents(details);
		details.querySelector('summary')!.focus({ preventScroll: true });
		details.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
	}
	// Open collapsed archive years when following existing event or year links.
	function openParents(target: HTMLElement) {
		let element: HTMLElement | null = target;
		while (element) {
			if (element instanceof HTMLDetailsElement) element.open = true;
			element = element.parentElement;
		}
	}
	async function revealHashTarget() {
		const id = window.location.hash.slice(1);
		if (!id) return;
		if (id.startsWith('details-') || id.startsWith('year-')) activeCategory = 'all';
		await tick();
		const target = document.getElementById(id);
		if (!target) return;
		openParents(target);
		target.scrollIntoView({ block: 'start' });
	}
	afterNavigate(() => { void revealHashTarget(); });

	$: categoryCounts = new Map(TIMELINE_CATEGORIES.map(category => [category.id, data.events.filter(event => eventCategory(event) === category.id).length + plannedEvents.filter(event => event.category === category.id).length + (category.id === 'programs' ? PARTNER_PROGRAMS.length : 0)]));
	$: categories = TIMELINE_CATEGORIES.filter(category => categoryCounts.get(category.id)! > 0);
	$: visibleCount = activeCategory === 'all' ? data.events.length + plannedEvents.length + PARTNER_PROGRAMS.length : categoryCounts.get(activeCategory) ?? 0;
	onMount(() => {
		now = new Date();
		window.addEventListener('hashchange', revealHashTarget);
		const timer = setInterval(() => now = new Date(), 60000);
		return () => {
			clearInterval(timer);
			window.removeEventListener('hashchange', revealHashTarget);
		};
	});
	$: grouped = splitEvents(eventRows, now);
	$: programs = splitEvents(data.events.filter(event => event.kind === 'initiative'), now);
	function eventYear(event: CalendarEvent) {
		return (event.start.length === 10 ? event.start : localDate(new Date(event.start))).slice(0, 4);
	}
	function categoryDetails(event: CalendarEvent | { category: TimelineCategory }) {
		const categoryId = 'category' in event ? event.category : eventCategory(event);
		return TIMELINE_CATEGORIES.find(category => category.id === categoryId)!;
	}
	function openEventImage(button: HTMLButtonElement) {
		const details = button.closest('article')!.querySelector('details')!;
		details.open = true;
		details.querySelector<HTMLAnchorElement>('.event-artwork')!.focus();
	}
	function eventLinks(event: CalendarEvent, mediaSource?: string) {
		const links = new Map<string, { href: string; label: string; caption: string; icon: string }>();
		for (const href of [...(event.url ? [event.url] : []), ...(mediaSource ? [mediaSource] : []), ...(event.descriptionParts ?? []).flatMap(part => part.href ? [part.href] : [])]) {
			if (!/^https?:\/\//.test(href)) continue;
			const host = new URL(href).hostname.replace(/^www\./, '');
			const ticket = host === 'partiful.com' || host === 'luma.com' || host === 'lu.ma';
			links.set(href, {
				href, label: host === 'partiful.com' ? 'View on Partiful' : ticket ? 'View on Luma' : host === 'arena.education' ? 'Visit ARENA' : 'Explore the source',
				caption: ticket ? 'Original event page' : host, icon: ticket ? 'fa-ticket' : 'fa-arrow-up-right-from-square'
			});
		}
		return [...links.values()].sort((a, b) => Number(b.icon === 'fa-ticket') - Number(a.icon === 'fa-ticket'));
	}

	function eventRuns(events: CalendarEvent[], includePlanned: boolean): (EventRun & { planned?: boolean })[] {
		if (!includePlanned) return groupEventRuns(events);
		const foodTruckIndex = events.findLastIndex(event => /bon me.*food truck/i.test(event.title));
		const insertionIndex = foodTruckIndex + 1;
		return [
			...groupEventRuns(events.slice(0, insertionIndex)),
			{ collection: null, events: [], planned: true },
			...groupEventRuns(events.slice(insertionIndex))
		];
	}

	$: sections = [
		{ title: 'Upcoming', id: 'upcoming', events: grouped.upcoming, programs: programs.upcoming, undatedPrograms: PARTNER_PROGRAMS, hasPlannedEvents: true },
		...Array.from(new Set([...grouped.past, ...programs.past].map(eventYear))).sort().reverse().map(year => ({
			title: `Past · ${year}`, id: `year-${year}`, events: grouped.past.filter(event => eventYear(event) === year),
			programs: programs.past.filter(event => eventYear(event) === year), undatedPrograms: [], hasPlannedEvents: false
		}))
	];
	$: visiblePlannedEvents = plannedEvents.filter(event => activeCategory === 'all' || event.category === activeCategory);
	$: filteredSections = sections.map(section => ({
		...section,
		hasPlannedEvents: section.hasPlannedEvents && visiblePlannedEvents.length > 0,
		events: section.events.filter(event => activeCategory === 'all' || eventCategory(event) === activeCategory),
		programs: activeCategory === 'all' || activeCategory === 'programs' ? section.programs : [],
		undatedPrograms: activeCategory === 'all' || activeCategory === 'programs' ? section.undatedPrograms : []
	})).filter(section => section.events.length || section.programs.length || section.undatedPrograms.length || section.hasPlannedEvents);

</script>

<EventsLayout view="list">
	<section>
		<div class="category-controls">
			<div class="category-select">
				<label for="event-category">Category</label>
				<select id="event-category" bind:value={activeCategory}>
					<option value="all">All events & programs</option>
					{#each categories as category}<option value={category.id}>{category.label}</option>{/each}
				</select>
			</div>
			<a href={CONFIG.events.calendarLink} target="_blank" rel="noopener noreferrer">View calendar <span aria-hidden="true">↗</span></a>
			<p class="sr-only" role="status">{visibleCount} listings across all dates</p>
		</div>
		<nav aria-label="Event archive" class="mb-8 flex flex-wrap gap-x-6 gap-y-3">
			{#if filteredSections.some(section => section.id === 'upcoming')}<a href="#upcoming" class="upcoming-link">Upcoming</a>{/if}
			{#if filteredSections.some(section => section.id !== 'upcoming')}<a href="#past">Past events</a>{/if}
			<a href="/events/semester/">Semester timeline</a>
		</nav>
		{#each filteredSections as section}
			{@const visibleEvents = section.events}
			{#if section.id === filteredSections.find(period => period.id !== 'upcoming')?.id}
				<header class="archive-divider" id="past">
					<h2 class="font-heading">Past events</h2>
					<p>Previous talks, workshops, and community gatherings.</p>
				</header>
		{#if highlights.length && activeCategory === 'all'}
			<section class="highlights" aria-labelledby="highlights">
				<div class="highlights-header">
					<h2 id="highlights" class="font-heading">Past event highlights</h2>
				</div>
				<div class="highlight-grid">
					{#each highlights as event}
						{@const media = getEventMedia(event)}
						<a class="highlight-card" href={`#details-${encodeURIComponent(event.id)}`} on:click={(click) => openHighlight(click, event)}>
							{#if media}<img src={media.imageUrl} alt={media.imageAlt} loading="lazy" />{/if}
							<div class="highlight-copy">
								<div class="highlight-meta"><p>{displayDateRange(event)}</p><EventAttendance {event} /></div>
								<h3>{highlightTitles[event.id]}</h3>
								<span class="highlight-link">View event <span aria-hidden="true">→</span></span>
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/if}
			{/if}
			{#if section.events.length || section.programs.length || section.undatedPrograms.length || section.hasPlannedEvents}
				<svelte:element this={section.id === 'upcoming' ? 'section' : 'details'} class="event-period" class:upcoming={section.id === 'upcoming'} aria-labelledby={section.id}>
				<svelte:element this={section.id === 'upcoming' ? 'header' : 'summary'} class="period-header">
				<h2 id={section.id} class="scroll-mt-[calc(var(--header-height,4rem)+1rem)] font-heading text-2xl font-[650]">
					{section.id === 'upcoming' ? (activeCategory === 'programs' ? 'Upcoming programs' : 'Upcoming events') : section.title}
				</h2>
				{#if section.id === 'upcoming' && visibleEvents.length}<p class="mt-2 text-sm text-maia-950/70 dark:text-maia-100/70">Times in Eastern Time</p>{/if}
				</svelte:element>
				<div class="section-grid">
					{#if activeCategory !== 'programs'}<div class="event-list" class:has-events={visibleEvents.length > 0 || section.hasPlannedEvents}>
					{#each eventRuns(visibleEvents, section.hasPlannedEvents) as run}
					{#if run.planned}
					<div class="event-run">
						{#each visiblePlannedEvents as event}
							{@const category = categoryDetails(event)}
							<article class="event-row" use:reveal>
								<div class="event-meta"><p class="text-sm font-medium text-maia-950/60 dark:text-maia-100/60">{event.date ? displayDate(event.date, false) : 'Fall 2026'}<span class="mt-1 block">{event.date ? 'Time TBD' : 'Date TBD'}</span></p></div>
								<div class="event-body">
									<div class="event-heading" class:has-media={!!event.media}>
										<div class="min-w-0">
											<p class="event-category" data-category={category.id}><i class="fa-solid {category.icon}" aria-hidden="true"></i> {category.label}</p>
											<h3 class="font-heading text-xl font-[650]">{event.title}</h3>
											<p class="event-intro">{event.description}</p>
											{#if event.url}<a href={event.url} target="_blank" rel="noopener noreferrer">View on Partiful <span aria-hidden="true">→</span></a>{/if}
										</div>
									{#if event.media}
										<figure>
											<a class="event-thumbnail" href={event.media.imageUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${event.media.imageAlt}`}><img src={event.media.imageUrl} alt={event.media.imageAlt} loading="lazy" /></a>
											{#if event.imageCredit}<figcaption class="mt-1 text-xs text-maia-950/60 dark:text-maia-100/60"><a href={event.media.sourceUrl} target="_blank" rel="noopener noreferrer">{event.imageCredit}</a></figcaption>{/if}
										</figure>
									{/if}
									</div>
								</div>
							</article>
						{/each}
					</div>
					{:else}
					<div class="event-run" class:collection={run.collection}>
						{#if run.collection}<p class="collection-label"><i class="fa-solid {run.collection.icon}" aria-hidden="true"></i> {run.collection.label}</p>{/if}
					{#each run.events as event (event.id)}
						{@const category = categoryDetails(event)}
						{@const media = getEventMedia(event)}
						{@const links = eventLinks(event, media?.sourceUrl)}
						<article class="event-row" use:reveal>
						<div class="event-meta">
						<time class="text-sm font-medium text-maia-950/60 dark:text-maia-100/60" datetime={event.start}>
							{displayDateRange(event, false)}
							{#if displayTimeRange(event.start, event.end, false)}
								<span class="mt-1 block">{displayTimeRange(event.start, event.end, false)}</span>
							{:else if category.id !== 'workshops' && category.id !== 'deadlines'}<span class="mt-1 block">All day</span>
							{/if}
						</time>
						<EventAttendance {event} />
						</div>
						<div class="event-body">
							<div class="event-heading" class:has-media={!!media}>
								<div class="min-w-0">
									<p class="event-category" data-category={category.id}><i class="fa-solid {category.icon}" aria-hidden="true"></i> {category.label}</p>
									<h3 class="font-heading text-xl font-[650]">{event.title}</h3>
									{#if event.summary}<p class="event-intro">{event.summary}</p>{/if}
								</div>
								{#if media}
									<button class="event-thumbnail" class:photo={media.kind === 'photo'} type="button" aria-label={`View ${media.kind ?? 'artwork'} for ${event.title}`} aria-controls={`details-${encodeURIComponent(event.id)}`} on:click={(click) => openEventImage(click.currentTarget)}><img src={media.imageUrl} alt="" loading="lazy" /><span aria-hidden="true"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></span></button>
								{/if}
							</div>
							{#if event.description || event.location || links.length || media}
								<details class="event-details" id={`details-${encodeURIComponent(event.id)}`}>
									<summary>Event details</summary>
									<div class="detail-panel">
										{#if media}<a class="event-artwork" href={media.imageUrl} target="_blank" rel="noopener noreferrer"><img src={media.imageUrl} alt={media.imageAlt} loading="lazy" /><span class="image-caption">View full size <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span></a>{/if}
										{#if event.location}<p class="event-location"><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>{event.location}</span></p>{/if}
										{#if event.description}
											<p class="event-description">{#each event.descriptionParts ?? [{ text: event.description, href: undefined }] as part}{#if part.href}<a href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>{:else}{part.text}{/if}{/each}</p>
										{/if}
										{#if links.length}<div class="event-links" aria-label="Event pages and sources">{#each links as link}<a class="source-card" href={link.href} target="_blank" rel="noopener noreferrer"><i class="fa-solid {link.icon}" aria-hidden="true"></i><span>{link.label}<small>{link.caption}</small></span><i class="fa-solid fa-arrow-up-right-from-square external-icon" aria-hidden="true"></i></a>{/each}</div>{/if}
									</div>
								</details>
							{/if}
						</div>
					</article>
					{/each}
					</div>
					{/if}
					{/each}
					{#if !visibleEvents.length && !section.hasPlannedEvents}<p class="empty-category">No individual events listed for this period.</p>{/if}
					</div>{/if}
					{#if section.programs.length || section.undatedPrograms.length}
						<details class="programs" open={activeCategory === 'programs'}>
							<summary>{section.id === 'upcoming' ? 'Current & upcoming programs' : 'Programs that year'} <span>({section.programs.length + section.undatedPrograms.length})</span></summary>
							<p class="programs-intro">MAIA programs and opportunities from AISST at Harvard and CBAI. Each listing names its organizer.</p>
							<div class="program-grid">
							{#each section.programs as program}
								{@const programMedia = getEventMedia(program)}
								<article class="program-card" use:reveal>
									{#if /AI Safety Fundamentals/.test(program.title)}
										<img class="program-logo" src="/images/maia_mark.svg" alt="MAIA logo" loading="lazy" />
									{:else if programMedia}<img class="program-logo" src={programMedia.imageUrl} alt={programMedia.imageAlt} loading="lazy" />{/if}
									<h4>{program.title}</h4>
									<p class="program-dates">{displayDateRange(program)}</p>
									{#if program.description}<details><summary>About this program</summary><p class="program-description">{program.description}</p></details>{/if}
									{#if program.url}<a href={program.url}>{program.id === 'aisf-fall-2026' ? 'Apply for Fall AISF' : program.url.includes('arena.education') ? 'Visit ARENA' : 'Explore the program'} <span aria-hidden="true">→</span></a>{/if}
								</article>
							{/each}
							{#each section.undatedPrograms as program}
								<article class="program-card" use:reveal>
									<img class="program-logo" src={program.organizer === 'AISST' ? '/images/logos/aisst.png' : '/images/logos/cbai.png'} alt={`${program.organizer} logo`} loading="lazy" />
									<h4>{program.title} · {program.organizer}</h4>
									<p class="program-dates">{program.timing}</p>
									<details><summary>About this program</summary><p class="program-description">{program.description}</p></details>
									<a href={program.url}>Explore the program <span aria-hidden="true">→</span></a>
								</article>
							{/each}
							</div>
						</details>
					{/if}
				</div>
				</svelte:element>
			{/if}
		{/each}

		{#if !grouped.upcoming.length}<p>No dated upcoming events are currently listed.</p>{/if}
		{#if !data.events.length}
			<p class="text-maia-950/70 dark:text-maia-100/70">No events are listed yet.</p>
		{/if}

		<div class="mt-8">
			<a class="timeline-link" href="/events/semester/">Explore the semester timeline <span aria-hidden="true">→</span></a>
			<p class="mb-4 text-sm">Calendar refreshed {new Date(data.fetchedAt).toLocaleDateString('en-US', { timeZone: 'America/New_York' })}. This archive reflects the available calendar records, not every MAIA event.</p>
			<Button
				text="View the MAIA calendar"
				icon="fa-solid fa-arrow-up-right-from-square"
				type="text"
				href={CONFIG.events.calendarLink}
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</section>
</EventsLayout>

<style>
	.event-period { margin-top: 2rem; }
	.period-header { margin-bottom: 1.5rem; }
	.upcoming { padding-top: 1.5rem; border-top: 2px solid var(--maia-accent); }
	.upcoming h2 { font-size: clamp(1.65rem, 4vw, 2.15rem); }
	.upcoming .event-meta > p, .upcoming .event-meta time { color: var(--maia-accent); font-weight: 650; }
	.upcoming-link { font-weight: 700; color: var(--maia-accent); text-decoration: underline; text-underline-offset: .3rem; }
	.archive-divider { margin-top: 4rem; padding-top: 2rem; border-top: 2px solid var(--maia-border); scroll-margin-top: calc(var(--header-height, 4rem) + 1rem); }
	.archive-divider h2 { font-size: 2rem; font-weight: 650; margin-bottom: .5rem; }
	.archive-divider > p { color: var(--maia-muted); }
	.archive-divider + .highlights { margin-top: 2rem; }

	@media (max-width: 600px) {
		.archive-divider { margin-top: 3rem; }
	}
	.highlights { margin-bottom: 2.5rem; }
	.highlights-header { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
	.highlights-header h2 { font-size: 1.5rem; font-weight: 650; scroll-margin-top: calc(var(--header-height, 4rem) + 1rem); }
	.highlight-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
	.highlight-card { overflow: hidden; border: 1px solid var(--maia-border); border-radius: .65rem; background: var(--maia-nav-surface); color: var(--maia-ink); text-decoration: none; }
	.highlight-card > img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block; }
	.highlight-copy { padding: 1.1rem 1.25rem 1.25rem; }
	.highlight-copy p { color: var(--maia-muted); font-size: .8rem; margin: 0 0 .45rem; }
	.highlight-meta { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: .4rem 1rem; margin-bottom: .6rem; }
	.highlight-meta p { margin: 0; }
	.highlight-copy h3 { font-size: 1.2rem; font-weight: 650; line-height: 1.35; margin: 0 0 .7rem; }
	.highlight-link { color: var(--maia-accent); font-size: .85rem; }
	.highlight-card:hover { border-color: var(--maia-accent); }
	.highlight-card:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
	@media (max-width: 600px) { .highlight-grid { grid-template-columns: 1fr; } }
	.category-controls { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; }
	.category-select { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; }
	.category-select label { font-size: 1rem; }
	.category-select select { min-height: 44px; max-width: 100%; padding: .5rem 2rem .5rem .75rem; border: 1px solid var(--maia-border); border-radius: .3rem; background: var(--maia-nav-surface); color: var(--maia-ink); font: inherit; }
	.category-controls a { color: var(--maia-accent); padding-block: .5rem; text-decoration: underline; text-underline-offset: .25rem; }
	.category-select select:focus-visible { outline: 2px solid var(--maia-accent); outline-offset: 3px; }
	.event-category { display: inline-flex; align-items: center; gap: .4rem; margin-bottom: .5rem; padding: 0; color: var(--maia-ink); font-size: .85rem; font-weight: 500; }
	.event-category i { color: var(--category-color); }
	.empty-category { color: var(--maia-muted); font-size: .85rem; padding: .5rem 0 1.5rem; }
	.event-run + .event-run { margin-top: 1.5rem; }
	.event-run.collection { position: relative; margin-block: 1.5rem; }
	.event-run.collection::before { content: ''; position: absolute; top: 0; bottom: 0; left: calc(var(--timeline-axis) - var(--timeline-gutter) - 1.5px); width: .7rem; border-left: 4px solid var(--maia-accent); border-top: 4px solid var(--maia-accent); border-bottom: 4px solid var(--maia-accent); pointer-events: none; }
	.event-run.collection:first-child { margin-top: 0; }
	.event-run.collection:last-child { margin-bottom: 0; }
	.collection-label { display: flex; align-items: center; gap: .45rem; margin-bottom: 1.15rem; color: var(--maia-accent); font-size: .85rem; font-weight: 700; }
	.event-body { min-width: 0; container-type: inline-size; }
	.event-meta :global(.event-attendance) { margin-top: .85rem; }
	.event-heading.has-media { display: grid; grid-template-columns: minmax(0, 1fr) 7.5rem; align-items: start; gap: 1rem; }
	.program-logo { width: 7.5rem; max-height: 5rem; object-fit: contain; margin-bottom: .75rem; }
	.event-thumbnail { position: relative; display: block; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid var(--maia-border); border-radius: .45rem; background: var(--maia-canvas); cursor: zoom-in; }
	.event-thumbnail img { display: block; width: 100%; height: 100%; object-fit: contain; }
	.event-thumbnail.photo img { object-fit: cover; }
	.event-thumbnail > span { position: absolute; right: .3rem; bottom: .3rem; display: grid; place-items: center; width: 1.35rem; height: 1.35rem; border-radius: .25rem; background: var(--maia-nav-surface); color: var(--maia-ink); font-size: .65rem; }
	.event-thumbnail:hover { border-color: var(--maia-accent); }
	.event-thumbnail:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
	@container (max-width: 24rem) { .event-heading.has-media { grid-template-columns: minmax(0, 1fr) 5.5rem; gap: .75rem; } }
	@container (max-width: 16rem) { .event-heading.has-media { grid-template-columns: minmax(0, 1fr); } .event-thumbnail { max-width: 12rem; } }
	.event-details { margin-top: .6rem; }
	.event-details > summary { width: fit-content; min-height: 36px; padding: .4rem 0; cursor: pointer; font-size: .85rem; color: var(--maia-accent); }
	.event-details > summary:focus-visible, .source-card:focus-visible, .event-artwork:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
	.detail-panel { padding-top: .65rem; }
	.event-artwork { display: block; overflow: hidden; margin-bottom: 1rem; background: var(--maia-nav-surface); border: 1px solid var(--maia-border); border-radius: .5rem; }
	.event-artwork img { display: block; width: 100%; max-height: 22rem; object-fit: contain; }
	.image-caption { display: flex; justify-content: center; align-items: center; gap: .4rem; padding: .55rem; border-top: 1px solid var(--maia-border); color: var(--maia-accent); font-size: .75rem; }
	.event-location { display: flex; align-items: baseline; gap: .55rem; margin-bottom: .85rem; font-size: .8rem; line-height: 1.6; color: var(--maia-muted); }
	.event-location i { color: var(--maia-accent); }
	.event-description { white-space: pre-line; overflow-wrap: anywhere; font-size: .9rem; line-height: 1.8; color: var(--maia-ink); }
	.event-description a { color: var(--maia-accent); text-decoration: underline; text-underline-offset: 3px; }
	.event-intro { margin-top: .5rem; color: var(--maia-muted); font-size: .9rem; line-height: 1.6; max-width: 65ch; }
	.event-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr)); gap: .6rem; margin-top: 1.15rem; }
	.source-card { display: flex; align-items: center; gap: .65rem; padding: .85rem; border: 1px solid var(--maia-border); border-radius: .45rem; background: var(--maia-nav-surface); font-size: .82rem; font-weight: 600; color: var(--maia-ink); }
	.source-card:hover { border-color: var(--maia-accent); }
	.source-card > i { color: var(--maia-accent); }
	.source-card span { min-width: 0; overflow-wrap: anywhere; }
	.source-card small { display: block; margin-top: .2rem; color: var(--maia-muted); font-size: .72rem; font-weight: 400; }
	.source-card .external-icon { margin-left: auto; font-size: .65rem; }
	.section-grid { display: flex; flex-direction: column; gap: 2rem; }
	.section-grid > * { width: 100%; }
	.event-list { order: 0; }
	.programs { order: 1; }
	.program-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
	.programs > summary { cursor: pointer; padding: 1rem 0; border-top: 1px solid var(--maia-border); font-size: 1.1rem; font-weight: 600; }
	.programs > summary span { color: var(--maia-muted); font-weight: 400; }
	details.event-period { border-top: 1px solid var(--maia-border); }
	details.event-period > summary { cursor: pointer; padding: 1rem 0; margin-bottom: 0; }
	details.event-period > summary h2 { margin: 0; }
	details.event-period:global([open]) > summary { margin-bottom: 1.5rem; }
	details.event-period > summary:focus-visible, .programs > summary:focus-visible { outline: 2px solid var(--maia-accent); outline-offset: 4px; }
	.event-list { --timeline-gutter: 1.75rem; --timeline-axis: .35rem; position: relative; min-width: 0; }
	.event-list.has-events { padding-left: var(--timeline-gutter); }
	.event-list.has-events::before { content: ''; position: absolute; top: .35rem; bottom: .35rem; left: var(--timeline-axis); width: 1px; background: color-mix(in srgb, var(--maia-accent) 35%, var(--maia-border)); pointer-events: none; }
	.event-row::before { content: ''; position: absolute; top: 1.7rem; left: calc(var(--timeline-axis) - var(--timeline-gutter) - 1px); width: .6rem; height: .6rem; transform: translateX(-50%); border: 2px solid var(--maia-accent); border-radius: 50%; background: var(--maia-canvas); pointer-events: none; }
	.event-row { position: relative; display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1.25rem; padding: 1.25rem 0; margin-bottom: .5rem; border-bottom: 1px solid var(--maia-border); }
	.event-row:last-child { margin-bottom: 0; }
	.programs-intro { font-size: .9rem; line-height: 1.6; color: var(--maia-muted); margin: .5rem 0 1.2rem; }
	.program-card { border-top: 1px solid var(--maia-border); padding: 1.25rem 0; }
	.program-card h4 { font-size: 1rem; font-weight: 650; line-height: 1.4; }
	.program-dates { font-size: .8rem; line-height: 1.65; margin: .65rem 0; color: var(--maia-muted); }
	.program-card details { font-size: .78rem; margin: .85rem 0; }
	.program-description { margin-top: .65rem; line-height: 1.7; }
	.program-card > a, .timeline-link { display: inline-block; color: var(--maia-accent); font-size: .8rem; text-decoration: underline; text-underline-offset: 3px; padding: .4rem 0; }
	.timeline-link { margin-bottom: 1rem; }

	@media (max-width: 540px) {
		.program-grid { grid-template-columns: 1fr; }
		.event-row { grid-template-columns: minmax(0, 1fr); gap: .75rem; padding: .9rem; }
		.event-list { --timeline-gutter: 1.2rem; --timeline-axis: .25rem; }
		.event-row::before { top: 1.45rem; width: .5rem; height: .5rem; }
	}
	summary { display: flex; align-items: center; gap: .65rem; list-style: none; overflow-wrap: anywhere; }
	summary::-webkit-details-marker { display: none; }
	summary::marker { content: ''; }
	summary::before {
		content: '';
		width: .5rem;
		height: .625rem;
		flex: 0 0 .5rem;
		background: currentColor;
		clip-path: polygon(0 0, 100% 50%, 0 100%);
	}
	details:global([open]) > summary::before { transform: rotate(90deg); }
</style>
