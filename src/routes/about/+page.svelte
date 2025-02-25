<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Advisors from './advisors.svelte';
	import Execs from './execs.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';

	type Section = {
		id: string;
		title: string;
		icon: string;
		component: ComponentType | null;
		footer?: boolean;
	};

	const sections: Section[] = [
		{
			id: 'executives',
			title: 'Executive Board',
			icon: 'fa-solid fa-users',
			component: Execs
		},
		{
			id: 'advisors',
			title: 'Advisors',
			icon: 'fa-solid fa-chalkboard-user',
			component: Advisors,
		}
	];
</script>

<svelte:head>
	<title>MAIA - About</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	/>
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-4xl md:text-4xl lg:text-5xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-users-gear"></i> Meet the Team
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

				<svelte:component this={section.component} />
			</section>
			<br />
			<hr />
		{/each}
	</div>
	<Footer />
</main>
