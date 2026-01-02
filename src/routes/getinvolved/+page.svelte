<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';

	import Membership from './Membership.svelte';
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
					html: '<p>An introductory fellowship to the field of AI Safety.</p>',
					components: {
						showML: CONFIG.aisf_ml.visible,
						showGov: CONFIG.aisf_gov.visible
					}
				})
			})
		},
		{
			id: 'membership',
			title: 'Membership',
			icon: 'fa-solid fa-users',
			content: () => ({ component: Membership })
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

		// {
		// 	id: 'calendar',
		// 	title: 'Calendar',
		// 	icon: 'fa-regular fa-calendar',
		// 	content: () => ({ component: Calendar })
		// }
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

<PageLayout
	title="Get Involved"
	description="MIT AI Alignment (MAIA) runs programs for people at all skill levels to explore AI safety through our AI Safety Fundamentals program."
	heroIcon="fa-solid fa-hands-helping"
	heroTitle="Get Involved"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
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
	</svelte:fragment>
	
	<!-- Content Sections -->
	{#each sections as section, i}
		{@const sectionContent = section.content()}
		<SectionContainer
			id={section.id}
			title={section.title}
			icon={section.icon}
		>
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
		</SectionContainer>
		
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
</PageLayout>

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
