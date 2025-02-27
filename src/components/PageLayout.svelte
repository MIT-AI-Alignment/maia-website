<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores/theme';
	import Footer from '../routes/components/footer.svelte';
	import Navbar from '../routes/components/navbar.svelte';
	import { updatePageNavItems, clearPageNavItems, type DropdownItem } from '$lib/stores/navigation';
	
	export let title: string;
	export let description: string;
	export const heroIcon = '';
	export let heroTitle: string;
	export const centerTitle = false;
	export const pageNavItems: DropdownItem[] = [];
	
	let mounted = false;
	
	// Update the navigation store with page-specific items
	$: if (pageNavItems.length > 0) {
		updatePageNavItems(pageNavItems);
	}
	
	// Clear page navigation items when component is destroyed
	onMount(() => {
		mounted = true;
		return () => {
			clearPageNavItems();
		};
	});
</script>

<svelte:head>
	<title>MAIA - {title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white relative overflow-hidden">
	<!-- No background grid needed anymore -->
	
	<Navbar />
	
	<!-- Hero Section -->
	<div class="bg-gradient-to-b {$theme === 'dark' 
		? 'from-purple-500/5 via-purple-500/3 to-transparent' 
		: 'from-purple-500/3 via-purple-500/2 to-transparent'} pt-32 pb-12 relative z-10">
		<div class="px-8 md:px-24 mx-auto max-w-6xl">
			<h1 class="pt-16 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] mb-6 {centerTitle ? 'text-center' : ''}">
				{#if heroIcon}
					<i class="{heroIcon} mr-3 text-purple-600 dark:text-purple-500"></i>
				{/if}
				{@html heroTitle}
			</h1>
			<slot name="hero-content" />
		</div>
	</div>
	
	<!-- Main Content -->
	<div class="px-8 md:px-24 mx-auto max-w-6xl pb-16 relative z-10">
		<slot />
	</div>
	
	<Footer />
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