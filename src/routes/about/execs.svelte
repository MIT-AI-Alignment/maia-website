<script>
	import Profile from './profile.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';
	import { ACTIVE_EXECS, TEMP_LEAVE_EXECS } from '$lib/board';

</script>

<div class="flex my-6 flex-wrap">
	<UpdateNotification message="🌹 To be updated Spring 2025! 🌹" />
	<!-- {#each ACTIVE_EXECS as exec}
		<Profile
			name={exec.name}
			position={exec.position}
			imageUrl={exec.imageUrl}
		/>
	{/each} -->
</div>

<!-- <h3>Executives on Temporary Leave</h3> -->
<div class="flex my-6 flex-wrap">
	<!-- {#each TEMP_LEAVE_EXECS as exec}
		<Profile
			name={exec.name}
			position={exec.position}
			imageUrl={exec.imageUrl}
		/>
	{/each} -->
</div>
