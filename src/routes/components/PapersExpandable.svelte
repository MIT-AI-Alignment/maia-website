<script lang="ts">
	import Paper from './paper.svelte';
	import { PAPERS } from '$lib/papers';
	import IconChevronDown from '~icons/ph/caret-down-bold';
	import { slide } from 'svelte/transition';
	import ExpandButton from './ExpandButton.svelte';

	export let initialRows = 2;
	export let initialCols = 3;
	export let expandedCols = 4; // columns when expanded

	let expanded = false;
	$: initialCount = initialRows * initialCols;

	// Helper function to generate grid columns class
	function getGridColsClass(cols: number): string {
		switch (cols) {
			case 1:
				return 'grid-cols-1';
			case 2:
				return 'grid-cols-2';
			case 3:
				return 'grid-cols-3';
			case 4:
				return 'grid-cols-4';
			case 5:
				return 'grid-cols-5';
			case 6:
				return 'grid-cols-6';
			default:
				return 'grid-cols-2';
		}
	}
</script>

<div class="relative">
	<!-- Always visible papers -->
	<div class="grid {getGridColsClass(initialCols)} gap-4">
		{#each PAPERS.slice(0, initialCount) as paper}
			<div>
				<Paper textSize="lg" {...paper} />
			</div>
		{/each}
	</div>

	<!-- Expandable section -->
	{#if PAPERS.length > initialCount}
		<div class="flex justify-center">
			<ExpandButton
				{expanded}
				text="Show more papers"
				expandedText="Show less"
				showChevron={true}
				on:click={() => (expanded = !expanded)}
			/>
		</div>

		{#if expanded}
			<div
				class="grid {getGridColsClass(expandedCols)} gap-4 mt-4"
				transition:slide={{ duration: 300 }}
			>
				{#each PAPERS.slice(initialCount) as paper}
					<Paper textSize="lg" {...paper} />
				{/each}
			</div>
		{/if}
	{/if}
</div>
