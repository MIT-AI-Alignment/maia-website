<script lang="ts">
	import { onMount } from 'svelte';
	import EventsLayout from '../../components/EventsLayout.svelte';
	import Button from '../../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { displayDateRange, displayTimeRange, localDate, splitEvents, type CalendarEvent } from '$lib/events';

	export let data: { events: CalendarEvent[]; fetchedAt: string };
	let now = new Date();
	onMount(() => {
		now = new Date();
		const timer = setInterval(() => now = new Date(), 60000);
		return () => clearInterval(timer);
	});
	$: grouped = splitEvents(data.events.filter(event => event.kind !== 'initiative'), now);
	$: programs = splitEvents(data.events.filter(event => event.kind === 'initiative'), now);
	function eventYear(event: CalendarEvent) {
		return (event.start.length === 10 ? event.start : localDate(new Date(event.start))).slice(0, 4);
	}

	$: sections = [
		{ title: 'Upcoming', id: 'upcoming', events: grouped.upcoming, programs: programs.upcoming },
		...Array.from(new Set([...grouped.past, ...programs.past].map(eventYear))).sort().reverse().map(year => ({
			title: `Past · ${year}`, id: `year-${year}`, events: grouped.past.filter(event => eventYear(event) === year),
			programs: programs.past.filter(event => eventYear(event) === year)
		}))
	];
</script>

<EventsLayout view="list">
	<section>
		<nav aria-label="Event archive" class="mb-8 flex flex-wrap gap-x-6 gap-y-3">
			{#each sections as section}<a href={'#' + section.id}>{section.title}</a>{/each}
		</nav>
		{#each sections as section}
			{#if section === sections[1]}<div id="past" class="scroll-mt-28"></div>{/if}
			{#if section.events.length || section.programs.length}
				<h2 id={section.id} class="mb-4 mt-10 scroll-mt-28 font-heading text-2xl font-[650]">
					{section.title}
					{#if section.title === 'Upcoming'}
						<span class="ml-2 text-sm">(times in Eastern Time)</span>
					{/if}
				</h2>
				<div class="section-grid">
					{#if section.programs.length}
						<aside class="programs" aria-label={`${section.title} programs`}>
							<h3><i class="fa-solid fa-layer-group" aria-hidden="true"></i> {section.id === 'upcoming' ? 'Running this semester' : 'Programs that year'}</h3>
							<p class="programs-intro">Longer-running programs alongside our events.</p>
							{#each section.programs as program}
								<article class="program-card">
									<h4>{program.title}</h4>
									<p class="program-dates">{displayDateRange(program)}</p>
									{#if program.description}<details><summary>About this program</summary><p class="program-description">{program.description}</p></details>{/if}
									{#if program.url}<a href={program.url}>Explore the program <span aria-hidden="true">→</span></a>{/if}
								</article>
							{/each}
						</aside>
					{/if}
					<div class="event-list">
					{#each section.events as event}
						<article class="event-row">
						<time class="text-sm font-medium text-maia-950/60 dark:text-maia-100/60" datetime={event.start}>
							{displayDateRange(event)}
							{#if displayTimeRange(event.start, event.end)}
								<span class="mt-1 block">{displayTimeRange(event.start, event.end)}</span>
							{:else}<span class="mt-1 block">All day</span>
							{/if}
						</time>
						<div class="min-w-0">
							<h3 class="font-heading text-xl font-[650]">{event.title}</h3>
							{#if event.description || event.location}
								<details class="mt-2">
									<summary class="cursor-pointer">Details{event.location ? ` · ${event.location}` : ''}</summary>
								<p class="mt-2 max-w-2xl whitespace-pre-line break-words text-maia-950/70 dark:text-maia-100/70">
									{#if event.description}
										{#each event.descriptionParts ?? [{ text: event.description, href: undefined }] as part}{#if part.href}<a href={part.href} target="_blank" rel="noopener noreferrer" class="text-maia-800 underline underline-offset-4 hover:text-maia-700 dark:text-maia-400 dark:hover:text-maia-300">{part.text}</a>{:else}{part.text}{/if}{/each}{event.location ? ' · ' : ''}
									{/if}{#if event.location}{event.location}{/if}
								</p>
								{#if event.url}<a href={event.url}>More about this program →</a>{/if}
								</details>
							{/if}
						</div>
					</article>
					{/each}
					</div>
				</div>
			{/if}
		{/each}

		{#if !grouped.upcoming.length}<p>No upcoming events are currently listed.</p>{/if}
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
	.section-grid { display: grid; grid-template-columns: minmax(0, 1fr) 17rem; gap: 2.5rem; align-items: start; }
	.event-list { grid-column: 1; grid-row: 1; min-width: 0; }
	.event-row { display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1.25rem; padding: 1.5rem 0; border-bottom: 1px solid var(--maia-border); }
	.event-row:first-child { padding-top: 0; }
	.programs { grid-column: 2; grid-row: 1; min-width: 0; }
	.programs > h3 { display: flex; align-items: center; gap: .5rem; font-size: .9rem; font-weight: 600; }
	.programs > h3 i { color: var(--maia-accent); }
	.programs-intro { font-size: .78rem; line-height: 1.6; color: var(--maia-muted); margin: .5rem 0 1.2rem; }
	.program-card { border-left: 3px solid var(--maia-accent); background: var(--maia-nav-surface); padding: 1.15rem; margin-bottom: 1rem; border-radius: 0 .5rem .5rem 0; }
	.program-card h4 { font-size: 1rem; font-weight: 650; line-height: 1.4; }
	.program-dates { font-size: .8rem; line-height: 1.65; margin: .65rem 0; color: var(--maia-muted); }
	.program-card details { font-size: .78rem; margin: .85rem 0; }
	.program-description { margin-top: .65rem; line-height: 1.7; }
	.program-card > a, .timeline-link { display: inline-block; color: var(--maia-accent); font-size: .8rem; text-decoration: underline; text-underline-offset: 3px; padding: .4rem 0; }
	.timeline-link { margin-bottom: 1rem; }
	@media (max-width: 1000px) {
		.section-grid { grid-template-columns: minmax(0, 1fr); gap: 1.5rem; }
		.programs { grid-column: 1; grid-row: 1; }
		.event-list { grid-row: 2; }
		.event-list:first-child { grid-row: 1; }
	}
	@media (max-width: 540px) {
		.event-row { grid-template-columns: minmax(0, 1fr); gap: .6rem; }
	}
	summary { overflow-wrap: anywhere; }
</style>
