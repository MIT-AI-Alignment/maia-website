<script lang="ts">
	import { slide } from 'svelte/transition';
	import { theme } from '$lib/stores/theme';
	import NavItem from './NavItem.svelte';
	import type { NavItem as NavItemType } from '$lib/stores/navigation';

	export let isOpen = false;
	export let hasBanner = false;
	export let activeDropdown: string | null = null;
	export let navItems: NavItemType[] = [];

	function setActiveDropdown(label: string | null) {
		activeDropdown = label;
	}
</script>

{#if isOpen}
	<div
		transition:slide={{ duration: 200 }}
		class="fixed inset-x-0 z-50 border-t overflow-y-auto pb-20
           {hasBanner
			? 'top-[calc(var(--navbar-height)+3rem)] h-[calc(100dvh-var(--navbar-height)-3rem)]'
			: 'top-[var(--navbar-height)] h-[calc(100dvh-var(--navbar-height))]'}
           {$theme === 'dark'
			? 'bg-surface-dark border-border-dark'
			: 'bg-surface-light-elevated border-border-light'}"
	>
		<nav class="flex flex-col py-4">
			{#each navItems as item}
				<NavItem {item} isMobile={true} {activeDropdown} {setActiveDropdown} />
			{/each}
		</nav>
	</div>
{/if}
