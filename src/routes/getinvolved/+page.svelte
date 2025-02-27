<script lang="ts">
	import type { ComponentType } from 'svelte';

	import Membership from './Membership.svelte';

	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Button from '../../components/Button.svelte';
	import AisfGov from './AISFGov.svelte';
	import Aisfml from './AISFML.svelte';
	import Bootcamps from './Bootcamps.svelte';
	import Workshops from './Workshops.svelte';
	import Calendar from './Calendar.svelte';
	import { CONFIG } from '$lib/config';

	type RenderResult = {
		html: string;
		components: {
			showML: boolean;
			showGov: boolean;
		};
	};

	type SectionContent = {
		component: ComponentType | null;
		customContent?: boolean;
		render?: () => RenderResult;
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

	function hasRender(content: SectionContent): content is SectionContent & { render: () => RenderResult } {
		return content.customContent === true && typeof content.render === 'function';
	}

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>MAIA - Get Involved</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) runs programs for people at all skill levels to explore deep learning and AI safety."
	/>
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	
	<!-- Hero Section -->
	<div class="bg-gradient-to-b from-purple-500/5 to-transparent dark:from-purple-500/10 pt-32 pb-12">
		<div class="px-8 md:px-24 mx-auto max-w-4xl">
			<h1 class="pt-16 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] mb-6 text-center">
				<i class="fa-solid fa-hands-helping mr-3 text-purple-600"></i> Get Involved
			</h1>
			<p class="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
				Join the MAIA community and contribute to AI safety research and education at MIT.
			</p>
			
			<!-- Navigation Buttons -->
			<div class="flex flex-wrap justify-center gap-3 mb-8">
				{#each sections as section}
					<Button 
						text={section.title} 
						icon={section.icon} 
						type="outline" 
						size="md" 
						on:click={() => scrollToSection(section.id)} 
					/>
				{/each}
			</div>
		</div>
	</div>
	
	<!-- Content Sections -->
	<div class="px-8 md:px-24 mx-auto max-w-4xl pb-16">
		{#each sections as section, i}
			{@const sectionContent = section.content()}
			<section 
				id={section.id} 
				class="mb-16 rounded-lg p-6 bg-white dark:bg-maia_black/70 shadow-sm dark:shadow-purple-500/5 border border-gray-100 dark:border-purple-800"
			>
				<div class="flex items-center mb-6">
					<div class="w-12 h-12 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mr-4">
						<i class={section.icon + " text-2xl text-purple-600"}></i>
					</div>
					<h2 class="text-2xl md:text-3xl font-heading font-[550]">
						{section.title}
					</h2>
				</div>
				
				<div class="mt-4">
					{#if hasRender(sectionContent)}
						{@const renderResult = sectionContent.render()}
						<div class="prose dark:prose-invert max-w-none">
							{@html renderResult.html}
						</div>
						{#if renderResult.components.showML}
							<div class="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-maia_black/40 border-l-4 border-purple-400">
								<Aisfml />
							</div>
						{/if}
						{#if renderResult.components.showGov}
							<div class="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-maia_black/40 border-l-4 border-fuchsia-400">
								<AisfGov />
							</div>
						{/if}
					{:else}
						<div class="prose dark:prose-invert max-w-none">
							<svelte:component this={sectionContent.component} />
						</div>
					{/if}
				</div>
			</section>
			
			{#if i < sections.length - 1}
				<div class="flex justify-center mb-16">
					<div class="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
				</div>
			{/if}
		{/each}
		
		<div class="flex justify-center mt-8 mb-12">
			<Button 
				text="Back to Top" 
				icon="fa-solid fa-arrow-up" 
				type="text" 
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
			/>
		</div>
	</div>
	
	<Footer></Footer>
</main>

<style lang="postcss">
	:global(.prose) {
		@apply text-gray-800 dark:text-gray-200;
	}
	
	:global(.prose a) {
		@apply text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors;
	}
	
	:global(.prose p) {
		@apply mb-4;
	}
	
	:global(.prose ul) {
		@apply mb-4 ml-6 list-disc;
	}
	
	:global(.prose li) {
		@apply mb-2;
	}
</style>
