<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';
	import PapersExpandable from '../components/PapersExpandable.svelte';
	import Orgs from '../components/orgs.svelte';
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
			id: 'orgs',
			title: 'Organizations MAIA Works With',
			icon: 'fa-solid fa-book-open',
			component: Orgs
		},
		{
			id: 'research',
			title: 'Research by MAIA Members',
			icon: 'fa-solid fa-book-open',
			component: PapersExpandable
		},
		// {
		// 	id: 'current',
		// 	title: 'Projects',
		// 	icon: 'fa-solid fa-rocket',
		// 	component: CongressionalExhibition
		// },
	];
	
	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>


<PageLayout
	title="Research"
	description="Research and organizations connected to MIT AI Alignment (MAIA)."
	heroTitle="Research"
	heroIcon="fa-solid fa-flask"
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
	
	{#each sections as section}
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
	{/each}
	
	<div class="flex justify-center mt-8 mb-12">
		<Button 
			text="Back to Top" 
			icon="fa-solid fa-arrow-up" 
			type="text" 
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
		/>
	</div>
	
	<!-- <SectionContainer
		title="Organizations we work with"
		icon="fa-solid fa-building"
	>

		<div in:fade={{ duration: 800, delay: 400 }}>
			<Orgs />
		</div>
		<Orgs />
		<p class="mt-6 text-center text-maia-950/60 dark:text-maia-200 italic">
			This is a list of some of the organizations our members have worked with. Not all
			organisations listed endorse or are affiliated with MAIA.
		</p>
	</SectionContainer> -->
</PageLayout>
