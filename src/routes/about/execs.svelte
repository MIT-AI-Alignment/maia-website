<script>
	import Profile from './profile.svelte';
	import { getActiveExecs, getInactiveExecs } from '$lib/people';

	const activeExecs = getActiveExecs();
	// const inactiveExecs = getInactiveExecs();
</script>

<div class="flex my-6 flex-wrap">
	<!-- <UpdateNotification message="🌹 To be updated Spring 2025! 🌹" /> -->
	{#each activeExecs as exec}
		<Profile 
			personId={exec.id} 
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
