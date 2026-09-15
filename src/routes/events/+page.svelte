<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '../../components/PageLayout.svelte';
	import Button from '../../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { displayDateRange, displayTimeRange, splitEvents, type CalendarEvent } from '$lib/events';

	export let data: { events: CalendarEvent[]; fetchedAt: string };
	let now = new Date();
	let category = 'All';
	const categories = ['All', 'Workshops', 'Member meetings', 'Programs'];
	const matches = (event: CalendarEvent, category: string) => category === 'All' ||
		(category === 'Workshops' && /workshop|retreat/i.test(event.title)) ||
		(category === 'Member meetings' && /member meeting/i.test(event.title)) ||
		(category === 'Programs' && event.kind === 'initiative');
	$: visible = data.events.filter(event => matches(event, category));
	$: programRanges = data.events.filter(event => event.start.startsWith('2026') &&
		(event.kind === 'initiative' || (event.start.length === 10 && event.end && Date.parse(event.end) - Date.parse(event.start) >= 2 * 86400000)))
		.sort((a, b) => a.start.localeCompare(b.start));
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dayOffset = (date: string) => (Date.parse(date.slice(0, 10) + 'T00:00:00Z') - Date.UTC(2026, 0, 1)) / 86400000;
	onMount(() => {
		now = new Date();
		const timer = setInterval(() => now = new Date(), 60000);
		return () => clearInterval(timer);
	});
	$: grouped = splitEvents(visible, now);

	// Split a description into plain text and URL segments (odd indices are URLs).
	const urlPattern = /(https?:\/\/[^\s]+?)(?=[.,;:!?)]*(?:\s|$))/;
	function segments(text: string) {
		return text.split(urlPattern).map((part, i) => ({ text: part, isLink: i % 2 === 1 }));
	}

	$: sections = [
		{ title: 'Upcoming', id: 'upcoming', events: grouped.upcoming },
		...Array.from(new Set(grouped.past.map(event => displayDateRange(event).match(/\d{4}/)?.[0]))).map(year => ({
			title: `Past · ${year}`, id: `year-${year}`, events: grouped.past.filter(event => displayDateRange(event).includes(year || ''))
		}))
	];
</script>

<PageLayout
	title="Events"
	description="Upcoming events and the MAIA event archive."
	heroTitle="Events"
	heroIcon="fa-regular fa-calendar"
	centerTitle={true}
>
	<section class="mx-auto max-w-4xl">
		<p class="mb-6">Events, workshops, and conversations from the public MAIA calendar. Times are Eastern (EST/EDT).</p>
		{#if programRanges.length}
		<details class="program-overview">
			<summary>2026 programs at a glance</summary>
			<p>Bars show program duration, so overlapping programs can be seen together.</p>
			<div class="timeline-scroll"><div class="timeline">
				<div class="months"><span></span><div>{#each months as month}<span>{month}</span>{/each}</div></div>
				{#each programRanges as program}
				<div class="program-row"><a href={'#' + program.id} on:click={() => category = 'All'}>{program.title}</a><div class="track"><span class="bar" style:left={Math.max(0, dayOffset(program.start)) / 365 * 100 + '%'} style:width={Math.max(1, Math.min(365, dayOffset(program.end || program.start)) - Math.max(0, dayOffset(program.start))) / 365 * 100 + '%'} title={displayDateRange(program)}></span></div></div>
				{/each}
			</div></div>
		</details>
		{/if}
		<div class="event-filters" aria-label="Event type">
			{#each categories as option}<button class:chosen={category === option} aria-pressed={category === option} on:click={() => category = option}>{option}</button>{/each}
		</div>
		{#if !visible.length}<p>No matching events are recorded in this archive yet.</p>{/if}
		<nav aria-label="Event archive" class="mb-8 flex flex-wrap gap-x-6 gap-y-3">
			{#each sections as section}<a href={'#' + section.id}>{section.title}</a>{/each}
		</nav>
		{#each sections as section}
			{#if section === sections[1]}<div id="past" class="scroll-mt-28"></div>{/if}
			{#if section.events.length}
				<h2 id={section.id} class="mb-4 mt-10 scroll-mt-28 font-heading text-2xl font-[650]">
					{section.title}
					{#if section.title === 'Upcoming'}
						<span class="ml-2 text-sm">(times in Eastern Time)</span>
					{/if}
				</h2>
				<div
					class:past-events={section.id !== 'upcoming'}
				>
					{#each section.events as event}
						<article id={event.id} class="grid gap-3 py-6 md:grid-cols-[10rem_1fr] md:gap-8 scroll-mt-28">
						<time class="text-sm font-medium text-maia-950/60 dark:text-maia-100/60" datetime={event.start}>
							{displayDateRange(event)}
							{#if displayTimeRange(event.start, event.end)}
								<span class="mt-1 block">{displayTimeRange(event.start, event.end)}</span>
							{:else}<span class="mt-1 block">{event.kind === 'initiative' ? 'Program' : 'All day'}</span>
							{/if}
						</time>
						<div class="min-w-0">
							<h3 class="font-heading text-2xl font-[650]"><i aria-hidden="true" class={'event-icon fa-solid ' + (/workshop|retreat/i.test(event.title) ? 'fa-people-group' : event.kind === 'initiative' ? 'fa-graduation-cap' : 'fa-calendar-day')}></i>{event.title}</h3>
							{#if event.description || event.location}
								<details class="mt-2">
									<summary class="cursor-pointer">Details{event.location ? ` · ${event.location}` : ''}</summary>
								<p class="mt-2 max-w-2xl break-words text-maia-950/70 dark:text-maia-100/70">
									{#if event.description}
										{#each segments(event.description) as part}{#if part.isLink}<a href={part.text} target="_blank" rel="noopener noreferrer" class="break-all text-maia-800 underline underline-offset-4 hover:text-maia-700 dark:text-maia-400 dark:hover:text-maia-300">{part.text}</a>{:else}{part.text}{/if}{/each}{event.location ? ' · ' : ''}
									{/if}{#if event.location}{event.location}{/if}
								</p>
								{#if event.url}<a href={event.url}>More about this program →</a>{/if}
								</details>
							{/if}
						</div>
					</article>
				{/each}
				</div>
			{/if}
		{/each}

		{#if !grouped.upcoming.length}<p>No upcoming events are currently listed.</p>{/if}
		{#if !data.events.length}
			<p class="text-maia-950/70 dark:text-maia-100/70">No events are listed yet.</p>
		{/if}

		<div class="mt-8">
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
</PageLayout>

<style>
	.program-overview {background:var(--maia-nav-surface);padding:1.25rem;margin-bottom:2rem;} .program-overview summary{font-weight:650;} .program-overview p{font-size:.875rem;margin:.75rem 0;}
	.timeline-scroll{overflow-x:auto;} .timeline{min-width:650px;} .months,.program-row{display:grid;grid-template-columns:190px 1fr;gap:1rem;align-items:center;margin:.8rem 0;font-size:.8rem;}
	.months>div{display:grid;grid-template-columns:repeat(12,1fr);} .track{height:22px;position:relative;background:var(--maia-page-bg,#f6f4f1);} .bar{display:block;position:absolute;height:100%;background:var(--maia-accent);}
	.event-filters{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0 2rem;} .event-filters button{padding:.6rem .9rem;background:var(--maia-nav-surface);} .event-filters .chosen{background:var(--maia-accent);color:white;} .event-filters button:focus-visible{outline:2px solid var(--maia-accent);outline-offset:3px;} .event-icon{font-size:1rem;color:var(--maia-accent);margin-right:.75rem;}
	.past-events article { opacity: .5; transition: opacity .15s; }
	.past-events article:hover, .past-events article:focus-within { opacity: 1; }
	summary { overflow-wrap: anywhere; }
</style>
