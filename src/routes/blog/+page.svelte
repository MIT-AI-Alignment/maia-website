<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';
	import BlogPosts from './BlogPosts.svelte';

	type Section = {
		id: string;
		title: string;
		icon: string;
		component: ComponentType | null;
	};

	const sections: Section[] = [
		{
			id: 'posts',
			title: 'Demo Posts',
			icon: 'fa-solid fa-pen-to-square',
			component: BlogPosts
		}
	];
</script>

<svelte:head>
	<title>MAIA - Blog</title>
	<meta name="description" content="MIT AI Alignment (MAIA) blog page." />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-4xl md:text-4xl lg:text-5xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-newspaper"></i> Blog
		</h1>
		<br />
		<hr />

		<UpdateNotification message="🌹 To be updated Spring 2025! 🌹" />

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
