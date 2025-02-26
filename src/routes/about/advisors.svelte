<script>
	import Profile from './profile.svelte';
	import { getAdvisors } from '$lib/people';

	const advisors = getAdvisors();
</script>

<div class="flex my-6 flex-wrap">
	{#each advisors as advisor}
		<Profile
			name={advisor.name}
			position={advisor.position}
			imageUrl={advisor.imageUrl}
			github={advisor.github}
			email={advisor.email}
			linkedin={advisor.linkedin}
			personalPage={advisor.personalPage}
			twitter={advisor.twitter}
			showSocials={true}
		/>
	{/each}
</div>
