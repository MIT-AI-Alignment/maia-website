<script lang="ts">
	import PhoneLineAttacks from './PhoneLineAttacks.svelte';
	import type { ComponentType } from 'svelte';
	import Footer from '../../../components/footer.svelte';
	import Navbar from '../../../components/navbar.svelte';
	import Profile from '../../../about/profile.svelte';
	import Link from '../../../../components/Link.svelte';
	import BackLink from '../../../../components/BackLink.svelte';
	import { getSortedPeopleByProject, getPersonProjectRole } from '$lib/people';
	
	// Get people involved in the phone-line attacks project, sorted by their project order
	const phoneLineTeam = getSortedPeopleByProject('phone-line-attacks');
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-surface-light dark:bg-surface-dark text-maia-950 dark:text-maia-50">
	<Navbar />
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[600px]">
			<img
				src="https://unsplash.com/photos/-bf9Q9RCQzI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fGF1ZGlvJTIwcmVjb3JkaW5nfGVufDB8fHx8MTczOTk5NDc3MXwy&force=true&w=1920"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-surface-light/70 to-surface-light dark:via-surface-dark/70 dark:to-surface-dark"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 relative">
			<!-- Main Title -->
			<BackLink />
			<h1
				class="pt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-maia-800 to-maia-600 dark:from-maia-400 dark:to-maia-300 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-phone-slash"></i>Targeted Phone-line Attacks: Automated Social
				Engineering & Manipulation using Public Information
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8">
				<div class="grid grid-cols-2 lg:grid-cols-2 gap-6">
					{#each phoneLineTeam as person}
						<Profile
							personId={person.id}
							subtitle={getPersonProjectRole(person, 'phone-line-attacks')}
							showExpandButton={true}
						/>
					{/each}
				</div>
			</div>

			<PhoneLineAttacks />
		</div>
	</div>
	<Footer />
</main>
