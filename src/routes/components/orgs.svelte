<script lang="ts">
	let organizations: {
		imagePath: string;
		name: string;
		link: string;
		invert: boolean;
	}[] = [
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

<div class="flex flex-wrap mt-20 justify-center sm:justify-between items-center gap-24">
	{#each organizations as { imagePath, name, link, invert }}
		<a href={link}>
			<img
				src={imagePath}
				alt={name}
				class="max-h-36 max-w-48 object-contain"
				class:dark:invert={invert}
			/>
		</a>
	{/each}
</div>
