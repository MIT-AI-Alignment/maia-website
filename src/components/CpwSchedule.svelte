<script lang="ts">
	import { CPW_SCHEDULE } from '$lib/cpwEvents';
</script>

<div class="flex flex-col gap-8">
	{#each CPW_SCHEDULE as day}
		<div>
			<div class="flex items-baseline gap-3 mb-4 border-b border-border-light dark:border-maia-800 pb-2">
				<h3 class="text-xl md:text-2xl font-heading font-[550] text-maia-800 dark:text-maia-400">
					{day.label}
				</h3>
				<span class="text-base text-gray-500 dark:text-gray-400">{day.date}</span>
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				{#each day.events as event}
					<div
						class="rounded-lg p-4 bg-surface-light dark:bg-maia-950/40 border border-border-light dark:border-maia-800 hover:border-maia-500/60 dark:hover:border-maia-500/60 transition-colors"
					>
						<h4 class="text-lg font-[550] font-heading mb-2 leading-snug">
							{event.title}
						</h4>
						{#if event.hook}
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
								{event.hook}
							</p>
						{/if}
						<div class="flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
							<div class="flex items-center gap-2">
								<i class="fa-solid fa-location-dot text-maia-500 w-4 text-center"></i>
								<span>{event.location}</span>
							</div>
							<div class="flex items-center gap-2">
								<i class="fa-solid fa-clock text-maia-500 w-4 text-center"></i>
								<span>{event.time}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<p class="text-sm text-gray-500 dark:text-gray-400 italic">
		All events are open to prefrosh, no RSVP needed. Questions? Email
		<a
			href="mailto:maia-exec@mit.edu"
			class="text-maia-800 dark:text-maia-400 underline">maia-exec@mit.edu</a
		>.
	</p>
</div>
