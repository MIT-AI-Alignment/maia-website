<script lang="ts">
	import type { ComponentType } from 'svelte';

	import Membership from './Membership.svelte';

	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import AisfGov from './AISFGov.svelte';
	import Aisfml from './AISFML.svelte';
	import Bootcamps from './Bootcamps.svelte';
	import Workshops from './Workshops.svelte';
	import Calendar from './Calendar.svelte';
	import { CONFIG } from '$lib/config';

	type SectionContent = {
		component: ComponentType | null;
		customContent?: boolean;
		render?: () => {
			html: string;
			components: {
				showML: boolean;
				showGov: boolean;
			};
		};
	};

	type Section = {
		id: string;
		title: string;
		icon: string;
		content: () => SectionContent;
	};

	const sections: Section[] = [
		{
			id: 'aisf',
			title: 'AI Safety Fundamentals',
			icon: 'fa-solid fa-graduation-cap',
			content: () => ({
				component: null,
				customContent: true,
				render: () => ({
					html: '<p>MAIA runs programs for people at all skill levels to explore deep learning and AI safety.</p>',
					components: {
						showML: CONFIG.aisf_ml.visible,
						showGov: CONFIG.aisf_gov.visible
					}
				})
			})
		},
		{
			id: 'workshops',
			title: 'Workshops',
			icon: 'fa-solid fa-chalkboard-user',
			content: () => ({ component: Workshops })
		},
		{
			id: 'bootcamps',
			title: 'Bootcamps',
			icon: 'fa-solid fa-laptop-code',
			content: () => ({ component: Bootcamps })
		},
		{
			id: 'membership',
			title: 'Membership',
			icon: 'fa-solid fa-users',
			content: () => ({ component: Membership })
		},
		{
			id: 'calendar',
			title: 'Calendar',
			icon: 'fa-regular fa-calendar',
			content: () => ({ component: Calendar })
		}
	];
</script>

<svelte:head>
	<title>MAIA - Get Involved</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) runs programs for people at all skill levels to explore deep learning and AI safety."
	/>
</svelte:head>

<!-- NOTE: There is so much text here, include pictures? -->
<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-4xl md:text-4xl lg:text-5xl w-full md:w-4/5 font-heading font-[550]">
			<i class="fa-solid fa-hands-helping"></i> Get Involved
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

				{#if section.content().customContent}
					{@html section.content().render().html}
					{#if section.content().render().components.showML}
						<Aisfml />
					{/if}
					{#if section.content().render().components.showGov}
						<AisfGov />
					{/if}
				{:else}
					<svelte:component this={section.content().component} />
				{/if}
			</section>
			<br />
			<hr />
		{/each}
	</div>
	<Footer></Footer>
</main>
