<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';
	import PapersExpandable from '../components/PapersExpandable.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';
	import CongressionalExhibition from '../../components/CongressionalExhibition.svelte';

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
			component: CongressionalExhibition
		},
		{
			id: 'research',
			title: 'Research by MAIA Members',
			icon: 'fa-solid fa-book-open',
			component: PapersExpandable
		}
	];
	
	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<PageLayout
	title="Initiatives"
	description="MIT AI Alignment (MAIA) initiatives page."
	heroTitle="Initiatives"
	heroIcon="fa-solid fa-lightbulb"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
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
	
	{#each sections as section, i}
		<SectionContainer
			id={section.id}
			title={section.title}
			icon={section.icon}
		>
			{#if section.component}
				<svelte:component this={section.component} />
			{:else}
				<UpdateNotification message="🌹 To be updated Spring 2025! 🌹" />
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
