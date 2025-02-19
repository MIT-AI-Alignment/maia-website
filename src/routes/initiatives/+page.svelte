<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import PapersExpandable from '../components/PapersExpandable.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';

	type Section = {
		id: string;
		title: string;
		icon: string;
		component: ComponentType | null;
	};

	const sections: Section[] = [
		{
			id: 'current',
			title: 'Current Projects',
			icon: 'fa-solid fa-rocket',
			component: null
		},
		{
			id: 'research',
			title: 'Research by MAIA Members',
			icon: 'fa-solid fa-book-open',
			component: PapersExpandable
		}
	];
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-4xl md:text-4xl lg:text-5xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-lightbulb"></i> Initiatives
		</h1>
		<br />
		<hr />

		{#each sections as section}
			<section id={section.id}>
				<h2 class="pt-12 text-2xl font-heading font-[550]">
					<i class={section.icon}></i>
					{section.title}
				</h2>
				<br />

				{#if section.component}
					<svelte:component this={section.component} />
				{:else}
					<!-- <UpdateNotification message="🌹 To be updated Spring 2025! 🌹" /> -->
					<div class="mt-4 p-6 border rounded-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
						<a href="./caip-exhibition" class="block">
							<h3 class="text-xl font-bold mb-2">
								<i class="fa-solid fa-building-columns mr-2"></i>
								Congressional Exhibition on Advanced AI
							</h3>
							<p class="text-gray-600 dark:text-gray-300">
								MAIA members showcased AI safety concerns to congressional staffers, featuring demonstrations on phone-line attacks and AI strategic deception.
							</p>
							<span class="text-purple-600 dark:text-purple-300 mt-2 inline-block">Learn more →</span>
						</a>
					</div>
				{/if}
			</section>
			<br />
			<hr />
		{/each}
	</div>
	<Footer />
</main>
