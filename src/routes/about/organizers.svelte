<script>
	import Profile from './profile.svelte';
	import { getOrganizers } from '$lib/people';

	const orgs = getOrganizers();
</script>

<div class="flex my-6 flex-wrap">
	<!-- <UpdateNotification message="🌹 To be updated Spring 2025! 🌹" /> -->
	{#each orgs as org}
		<Profile 
			personId={org.id} 
			showSocials={true}
			showExpandButton={true}
		/>
	{/each}
</div>

<!-- <h3>Executives on Temporary Leave</h3> -->
<!-- <div class="flex my-6 flex-wrap">
	{#each inactiveExecs as exec}
		<Profile 
			personId={exec.id} 
			showSocials={true}
			showExpandButton={true}
		/>
	{/each}
</div> -->
