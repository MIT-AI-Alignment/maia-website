<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const organizations = [
		{
			imagePath: '/images/logos/chai.png',
			name: 'CHAI',
			link: 'https://humancompatible.ai/',
			invert: false
		},
		{
			imagePath: '/images/logos/csail.png',
			name: 'MIT CSAIL',
			link: 'https://www.csail.mit.edu/',
			invert: false
		},
		{
			imagePath: '/images/logos/el.png',
			name: 'Eleuther AI',
			link: 'https://www.eleuther.ai/',
			invert: true
		},
		{
			imagePath: '/images/logos/redwood.png',
			name: 'Redwood Research',
			link: 'https://www.redwoodresearch.org/',
			invert: false
		},
		{
			imagePath: '/images/logos/anthropic.png',
			name: 'Anthropic',
			link: 'https://www.anthropic.com/',
			invert: true
		},
		{
			imagePath: '/images/logos/openai.png',
			name: 'OpenAI',
			link: 'https://www.openai.com/',
			invert: true
		},
		{
			imagePath: '/images/logos/epoch.png',
			name: 'Epoch AI',
			link: 'https://www.epoch.ai/',
			invert: true
		},
		{
			imagePath: '/images/logos/metr.png',
			name: 'METR',
			link: 'https://metr.org/',
			invert: true
		}
	];
</script>
<p class="mt-6 text-center text-maia-950/60 dark:text-maia-200 italic">
		This is a list of some of the organizations our members have worked with.<br>
		Not all organisations listed endorse or are affiliated with MAIA.
</p>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
	{#each organizations as { imagePath, name, link, invert }, i}
		{#if mounted}
			<div 
				in:scale={{ duration: 400, delay: 100 + i * 50, start: 0.8, opacity: 0 }}
				class="org-card flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-surface-light-alt dark:hover:bg-surface-dark-alt border border-border-maia-subtle dark:border-border-maia-subtle-dark"
			>
				<a href={link} class="flex flex-col items-center gap-2 w-full h-full" target="_blank" rel="noopener noreferrer">
					<div class="h-24 flex items-center justify-center">
						<img
							src={imagePath}
							alt={name}
							class="max-h-20 max-w-full object-contain transition-transform duration-300 hover:scale-110"
							class:dark:invert={invert}
						/>
					</div>
					<span class="text-sm font-medium text-maia-950/70 dark:text-maia-200 mt-2">{name}</span>
				</a>
			</div>
		{:else}
			<div class="org-card flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-surface-light-alt dark:hover:bg-surface-dark-alt border border-border-maia-subtle dark:border-border-maia-subtle-dark">
				<a href={link} class="flex flex-col items-center gap-2 w-full h-full" target="_blank" rel="noopener noreferrer">
					<div class="h-24 flex items-center justify-center">
						<img
							src={imagePath}
							alt={name}
							class="max-h-20 max-w-full object-contain transition-transform duration-300 hover:scale-110"
							class:dark:invert={invert}
						/>
					</div>
					<span class="text-sm font-medium text-maia-950/70 dark:text-maia-200 mt-2">{name}</span>
				</a>
			</div>
		{/if}
	{/each}
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		.org-card {
			transition: none !important;
		}
		
		.org-card img {
			transition: none !important;
		}
	}
</style>
