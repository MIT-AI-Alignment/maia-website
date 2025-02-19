<script lang="ts">
	import StrategicDeception from './strategic-deception/StrategicDeception.svelte';
	import PhoneLineAttacks from './phone-lines/PhoneLineAttacks.svelte';
	import Footer from '../../components/footer.svelte';
	import Navbar from '../../components/navbar.svelte';
	import Profile from '../../about/profile.svelte';
	import SectionHeader from '../../../components/SectionHeader.svelte';
	import Link from '../../../components/Link.svelte';
	import BackLink from '../../../components/BackLink.svelte';
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="relative">
		<!-- Hero Image -->
		<div class="absolute inset-0 h-[400px]">
			<img
				src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Crowd in building lobby"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-maia_white/70 to-maia_white dark:via-maia_black/70 dark:to-maia_black"
			/>
		</div>

		<!-- Content -->
		<div class="px-8 md:px-24 max-w-7xl mx-auto relative">
			<BackLink/>

			<!-- Main Title -->
			<h1
				class="pt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
			>
				<i class="fa-solid fa-building-columns"></i> Congressional Exhibition on Advanced AI, Feb 2025
			</h1>

			<!-- Introduction Section -->
			<div class="mt-12 space-y-8 max-w-5xl">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
					<Profile
						name="David Turturean"
						position="Lead on Phone-line Attack Demo"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QX294TRR-12923a51bae9-192"
					/>
					<Profile
						name="Alek Westover"
						position="Lead on AI Strategic Deception Demo"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U07QL45P0E8-bdaa4ff976fe-512"
					/>
					<Profile
						name="Gatlen Culp"
						position="Demo Assitant"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U04N2FE5BT9-f14f224d78bb-512"
					/>
					<Profile
						name="Alice Blair"
						position="Demo Assitant"
						imageUrl="https://ca.slack-edge.com/T040KLU5EHM-U06LUEP04FN-c59b408a7d62-512"
					/>
				</div>
				<p class="text-lg leading-relaxed">
					MAIA members traveled to DC to attend the Congressional Exhibition on Advanced AI (hosted
					by the <Link href="https://www.centeraipolicy.org/">Center for AI Policy or CAIP</Link>)
					in February 2025 to showcase the potential risks of AI misuse to congressional staffers.
				</p>
			</div>

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Phone-line Attacks Section -->
			<SectionHeader
				icon="fa-solid fa-phone-slash"
				iconColor="red-500"
				text="AI Phone-line Attacks: Automated Social Engineering"
			/>
			<div class="flex justify-end -mt-4 mb-4">
				<Link href="./phone-lines">
					<span class="flex items-center gap-2">
						See full demo <i class="fa-solid fa-arrow-right"></i>
					</span>
				</Link>
			</div>
			<PhoneLineAttacks />

			<hr class="my-16 border-gray-200 dark:border-gray-700" />

			<!-- Strategic Deception Section -->
			<SectionHeader
				icon="fa-solid fa-mask"
				iconColor="blue-500"
				text="AI Strategic Deception: A Critical Safety Concern"
			/>
			<div class="flex justify-end -mt-4 mb-4">
				<Link href="./strategic-deception">
					<span class="flex items-center gap-2">
						See full demo <i class="fa-solid fa-arrow-right"></i>
					</span>
				</Link>
			</div>
			<StrategicDeception />
		</div>
	</div>
	<Footer />
</main>
