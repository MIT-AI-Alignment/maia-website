<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import Button from '../../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { displayDate, displayTimeRange, type CalendarEvent } from '$lib/events';

	export let data: { upcoming: CalendarEvent[]; past: CalendarEvent[] };

	// Split a description into plain text and URL segments (odd indices are URLs).
	const urlPattern = /(https?:\/\/[^\s]+?)(?=[.,;:!?)]*(?:\s|$))/;
	function segments(text: string) {
		return text.split(urlPattern).map((part, i) => ({ text: part, isLink: i % 2 === 1 }));
	}

	$: sections = [
		{ title: 'Upcoming', events: data.upcoming },
		{ title: 'Past', events: data.past }
	];
</script>

<PageLayout
	title="Events"
	description="Upcoming MIT AI Alignment events."
	heroTitle="Events"
	heroIcon="fa-regular fa-calendar"
	centerTitle={true}
>
	<section class="mx-auto max-w-4xl">
		{#each sections as section}
			{#if section.events.length}
				<h2 class="mb-4 {section.title === 'Past' ? 'mt-16' : ''} font-heading text-2xl font-[650]">
					{section.title}
					{#if section.title === 'Upcoming'}
						<span class="ml-2 text-sm font-medium text-maia-950/60 dark:text-maia-100/60">(times in EST)</span>
					{/if}
				</h2>
				<div
					class="border-y border-maia-950/15 dark:border-maia-100/15"
					class:opacity-50={section.title === 'Past'}
				>
					{#each section.events as event}
					<article class="grid gap-3 border-b border-maia-950/15 py-6 last:border-0 md:grid-cols-[10rem_1fr] md:gap-8 dark:border-maia-100/15">
						<time class="text-sm font-medium text-maia-950/60 dark:text-maia-100/60" datetime={event.start}>
							{displayDate(event.start)}
							{#if displayTimeRange(event.start, event.end)}
								<span class="mt-1 block">{displayTimeRange(event.start, event.end)}</span>
							{/if}
						</time>
						<div class="min-w-0">
							<h3 class="font-heading text-2xl font-[650]">{event.title}</h3>
							{#if event.description || event.location}
								<p class="mt-2 max-w-2xl break-words text-maia-950/70 dark:text-maia-100/70">
									{#if event.description}
										{#each segments(event.description) as part}{#if part.isLink}<a href={part.text} target="_blank" rel="noopener noreferrer" class="break-all text-maia-800 underline underline-offset-4 hover:text-maia-700 dark:text-maia-400 dark:hover:text-maia-300">{part.text}</a>{:else}{part.text}{/if}{/each}{event.location ? ' · ' : ''}
									{/if}{#if event.location}{event.location}{/if}
								</p>
							{/if}
						</div>
					</article>
				{/each}
				</div>
			{/if}
		{/each}

		{#if !data.upcoming.length && !data.past.length}
			<p class="text-maia-950/70 dark:text-maia-100/70">No events are listed yet.</p>
		{/if}

		<div class="mt-8">
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
