<script>
	import Profile from './profile.svelte';
	import { getAdvisors } from '$lib/people';

	const advisors = getAdvisors();
</script>

<div class="flex my-6 flex-wrap">
	{#each advisors as advisor}
		<Profile personId={advisor.id} showSocials={true} showExpandButton={true} />
	{/each}
</div>
