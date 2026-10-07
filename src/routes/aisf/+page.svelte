<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	const weeks = Array.from({ length: 9 }, (_, number) => number);
</script>

<PageLayout
	title="AISF Fall 2026 Curriculum"
	description="The Fall 2026 AI Safety Fundamentals curriculum. Weeks 0 and 1 are available with original reading links and the Fall reading packet. Weeks 2–8 are coming soon."
	heroIcon="fa-solid fa-graduation-cap"
	heroTitle="AI Safety Fundamentals"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg text-maia-950/70 dark:text-maia-200">Fall 2026 Curriculum</p>
	</svelte:fragment>

	<ul class="week-grid" aria-label="Fall 2026 curriculum weeks">
		{#each weeks as week}
			{#if week === 0}
				<li>
					<a href="/aisf/week0/" class="week-card available-card">
						<h2 class="font-heading">Week 0</h2>
						<span class="availability">Introduction to Machine Learning <span aria-hidden="true">→</span></span>
					</a>
				</li>
			{:else if week === 1}
				<li>
					<a href="/aisf/week1/" class="week-card available-card">
						<h2 class="font-heading">Week 1</h2>
						<span class="availability">The trajectory of AI <span aria-hidden="true">→</span></span>
					</a>
				</li>
			{:else}
			<li class="week-card">
				<h2 class="font-heading">Week {week}</h2>
				<span class="availability">
					<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="9" />
						<path d="M12 7v5l3 2" />
					</svg>
					Coming soon
				</span>
			</li>
			{/if}
		{/each}
	</ul>
	<p class="text-center mb-8">
		<a href="/aisf/summer-2026/" class="text-maia-800 dark:text-maia-400 underline underline-offset-4">View the Summer 2026 curriculum →</a>
	</p>
</PageLayout>

<style>
	.week-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin: 0 0 2rem; padding: 0; list-style: none; }
	.week-card { padding: 1.5rem; border: 1px solid color-mix(in srgb, var(--maia-border) 65%, transparent); border-radius: 12px; background: color-mix(in srgb, var(--maia-card) 45%, transparent); color: var(--maia-muted); }
	.week-card h2 { margin: 0 0 .75rem; font-size: 1.25rem; }
	.availability { display: flex; align-items: center; gap: .5rem; font-size: .875rem; }
	.available-card { display: block; height: 100%; background: var(--maia-card); color: var(--maia-ink); border-color: var(--maia-accent); text-decoration: none; }
	.available-card:hover, .available-card:focus-visible { outline: 2px solid var(--maia-accent); outline-offset: 2px; }
	@media (max-width: 900px) { .week-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
	@media (max-width: 540px) { .week-grid { grid-template-columns: 1fr; } .week-card { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem; } .week-card h2 { margin: 0; } }
</style>
