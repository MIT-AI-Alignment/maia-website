<script lang="ts">
	type Organization = {
		name: string;
		link: string;
		imagePath?: string;
		wordmark?: string;
		invert?: boolean;
	};

	const organizations: Organization[] = [
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
		},
		{
			imagePath: '/images/logos/google-deepmind.svg',
			name: 'Google DeepMind',
			link: 'https://deepmind.google/',
			invert: true
		},
		{
			imagePath: '/images/logos/xai.svg',
			name: 'xAI',
			link: 'https://x.ai/',
			invert: true
		},
		{
			wordmark: 'ARC',
			name: 'ARC Evals',
			link: 'https://arcevals.org/'
		},
		{
			imagePath: '/images/logos/forethought.svg',
			name: 'Forethought',
			link: 'https://www.forethought.org/',
			invert: true
		},
		{
			imagePath: '/images/logos/rand.png',
			name: 'RAND',
			link: 'https://www.rand.org/'
		}
	];
</script>
<p class="mt-6 text-center text-maia-950/60 dark:text-maia-200 italic">
		This is a list of some of the organizations our members have worked with.<br>
		Not all organisations listed endorse or are affiliated with MAIA.
</p>

<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
	{#each organizations as { imagePath, wordmark, name, link, invert }}
		<div class="org-card last:md:col-span-2 last:md:col-start-2 flex flex-col items-center justify-center p-4 transition-all duration-300">
			<a href={link} class="flex flex-col items-center gap-2 w-full h-full" target="_blank" rel="noopener noreferrer">
				<div class="h-24 flex items-center justify-center">
					{#if imagePath}
						<img
							src={imagePath}
							alt={name}
							class="h-14 max-w-full object-contain transition-transform duration-300 hover:scale-110"
							class:dark:invert={invert}
						/>
					{:else}
						<span class="max-w-full px-2 text-center text-2xl font-extrabold tracking-[-0.06em] text-maia-950 dark:text-maia-50">{wordmark}</span>
					{/if}
				</div>
				<span class="text-sm font-medium text-maia-950/70 dark:text-maia-200 mt-2">{name}</span>
			</a>
		</div>
	{/each}
</div>
