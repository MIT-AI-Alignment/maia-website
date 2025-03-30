<script lang="ts">
	import type { ComponentType } from 'svelte';
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';
	import Advisors from './advisors.svelte';
	import Execs from './execs.svelte';
	import type { DropdownItem } from '$lib/stores/navigation';

	type Section = {
		id: string;
		title: string;
		icon: string;
		component: ComponentType | null;
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
			component: Advisors
		}
	];

	// Create page navigation items from sections
	const pageNavItems: DropdownItem[] = sections.map((section) => ({
		label: section.title,
		href: `#${section.id}`
	}));

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<PageLayout
	title="About"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	heroIcon="fa-solid fa-users-gear"
	heroTitle="Meet the Team"
	centerTitle={true}
	{pageNavItems}
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
		<SectionContainer id={section.id} title={section.title} icon={section.icon}>
			<svelte:component this={section.component} />
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
