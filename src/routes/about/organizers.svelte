<script lang="ts">
	import Profile from './profile.svelte';
	import { getOrganizers } from '$lib/people';

	const orgs = getOrganizers().filter((person) => !person.imageUrl.startsWith('data:image/svg+xml'));
</script>

<p class="text-sm text-gray-600 dark:text-gray-400">Fall 2026</p>
<figure class="mx-auto my-6 max-w-3xl">
	<img
		src="/images/maia-organizer-retreat-fall-2026.webp"
		alt="MAIA organizers holding the MAIA banner at the fall 2026 organizer retreat"
		width="836"
		height="627"
		loading="lazy"
		decoding="async"
		class="m-0 h-auto w-full rounded-lg"
	/>
	<figcaption class="mt-2 text-sm text-gray-600 dark:text-gray-400">
		Organizer retreat, September 2026. Photo by Melissa Li.
	</figcaption>
</figure>
<div class="flex my-6 flex-wrap">
	{#each orgs as org}
		<Profile personId={org.id} showSocials={true} showExpandButton={true} />
	{/each}
</div>
