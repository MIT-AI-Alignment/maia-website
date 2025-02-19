<script lang="ts">
	import PhoneLineAttacks from './PhoneLineAttacks.svelte';
	import type { ComponentType } from 'svelte';
	import Footer from '../../../components/footer.svelte';
	import Navbar from '../../../components/navbar.svelte';
	import Profile from '../../../about/profile.svelte';
	import Link from '../../../../components/Link.svelte';
	import BackLink from '../../../../components/BackLink.svelte';
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
				src="https://unsplash.com/photos/-bf9Q9RCQzI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fGF1ZGlvJTIwcmVjb3JkaW5nfGVufDB8fHx8MTczOTk5NDc3MXwy&force=true&w=1920"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-maia_white/70 to-maia_white dark:via-maia_black/70 dark:to-maia_black"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 max-w-7xl mx-auto relative">
			<!-- Main Title -->
			<BackLink/>
			<h1
				class="pt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-phone-slash"></i> AI Phone-line Attacks: Automated Social Engineering
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-2 gap-6">
					<Profile
						name="David Turturean"
						position="Lead on Phone-line Attack Demo"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QX294TRR-12923a51bae9-192"
					/>
					<Profile
						name="Gatlen Culp"
						position="Demo Assitant"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U04N2FE5BT9-f14f224d78bb-512"
					/>
				</div>
			</div>

			<PhoneLineAttacks />
		</div>
	</div>
	<Footer />
</main>
