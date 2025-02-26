<script>
	import Profile from './profile.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';
	import { getActiveExecs, getInactiveExecs } from '$lib/people';

	const activeExecs = getActiveExecs();
	const inactiveExecs = getInactiveExecs();
</script>

<div class="flex my-6 flex-wrap">
	<!-- <UpdateNotification message="🌹 To be updated Spring 2025! 🌹" /> -->
	{#each activeExecs as exec}
		<Profile
			name={exec.name}
			position={exec.position}
			imageUrl={exec.imageUrl}
			github={exec.github}
			email={exec.email}
			linkedin={exec.linkedin}
			personalPage={exec.personalPage}
			twitter={exec.twitter}
			showSocials={true}
		/>
	{/each}
</div>

<!-- <h3>Executives on Temporary Leave</h3> -->
<div class="flex my-6 flex-wrap">
	{#each inactiveExecs as exec}
		<Profile
			name={exec.name}
			position={exec.position}
			imageUrl={exec.imageUrl}
			github={exec.github}
			email={exec.email}
			linkedin={exec.linkedin}
			personalPage={exec.personalPage}
			twitter={exec.twitter}
			showSocials={true}
		/>
	{/each}
</div>
