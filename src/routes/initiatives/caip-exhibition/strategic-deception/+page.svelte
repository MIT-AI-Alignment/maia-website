<script lang="ts">
	import StrategicDeception from './StrategicDeception.svelte';
	import Footer from '../../../components/footer.svelte';
	import Navbar from '../../../components/navbar.svelte';
	import Profile from '../../../about/profile.svelte';
	import BackLink from '../../../../components/BackLink.svelte';
	import { getSortedPeopleByProject, getPersonProjectRole } from '$lib/people';
	
	// Get people involved in the strategic deception project, sorted by their project order
	const strategicDeceptionTeam = getSortedPeopleByProject('strategic-deception');
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[600px]">
			<img
				src="https://unsplash.com/photos/y0-dzC6KQGE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NDd8fHBpeGVsc3xlbnwwfHx8fDE3Mzk5OTQ5ODB8Mg&force=true&w=1920"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover object-[center_-50px]"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-maia_white/70 to-maia_white dark:via-maia_black/70 dark:to-maia_black"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 max-w-7xl mx-auto relative">
			<!-- Main Title -->
			<BackLink />
			<h1
				class="pt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-mask"></i> AI Strategic Deception: A Critical Safety Concern
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-2 gap-6">
					{#each strategicDeceptionTeam as person}
						<Profile
							personId={person.id}
							subtitle={getPersonProjectRole(person, 'strategic-deception')}
							showExpandButton={true}
						/>
					{/each}
				</div>
			</div>

			<!-- Strategic Deception Section -->
			<StrategicDeception />
		</div>
	</div>
	<Footer />
</main>
