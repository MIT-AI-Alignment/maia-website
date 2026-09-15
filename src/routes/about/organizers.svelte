<script lang="ts">
	import Profile from './profile.svelte';
	import { getOrganizers } from '$lib/people';

	const orgs = getOrganizers().filter((person) => !person.imageUrl.startsWith('data:image/svg+xml'));
</script>

<p class="text-sm text-gray-600 dark:text-gray-400">Fall 2026</p>
<div class="flex my-6 flex-wrap">
	{#each orgs as org}
		<Profile personId={org.id} showSocials={true} showExpandButton={true} />
	{/each}
</div>
