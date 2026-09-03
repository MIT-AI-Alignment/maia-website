<script>
	import Profile from './profile.svelte';
	import { getAdvisors } from '$lib/people';

	const advisors = getAdvisors();
</script>

<div class="flex mt-4 mb-0 md:my-6 flex-wrap">
	{#each advisors as advisor}
		<Profile 
			personId={advisor.id} 
		showSocials={true}
		showExpandButton={true}
		compact={true}
		/>
	{/each}
</div>
