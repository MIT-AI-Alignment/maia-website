<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '../routes/components/footer.svelte';
	import Navbar from '../routes/components/navbar.svelte';
	import { updatePageNavItems, clearPageNavItems, type DropdownItem } from '$lib/stores/navigation';

	export let title: string;
	export let description: string;
	export let heroIcon = '';
	export let heroTitle: string;
	export let centerTitle = false;
	export let pageNavItems: DropdownItem[] = [];
	export let motionVariant: 'community' | 'ambient' = 'ambient';

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
	<link rel="canonical" href={`https://aialignment.mit.edu${$page.url.pathname}`} />
	<meta property="og:url" content={`https://aialignment.mit.edu${$page.url.pathname}`} />
	<title>MAIA - {title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={`MAIA - ${title}`} />
	<meta property="og:description" content={description} />
	<meta name="twitter:title" content={`MAIA - ${title}`} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<main
	class="min-h-screen bg-surface-light dark:bg-surface-dark dark:text-maia-50 relative overflow-hidden"
>
	<!-- No background grid needed anymore -->

	<Navbar />

	<!-- Hero Section -->
	<div class:painted-hero={motionVariant === 'community'} class="page-hero pt-8 md:pt-14 pb-8 md:pb-10 relative z-10 overflow-hidden">
		<div class:studio-hero={motionVariant === 'community'} class="px-5 sm:px-8 md:px-24 mx-auto max-w-6xl relative z-10" data-motion="quiet">
			<div class="hero-copy">
			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-heading font-[550] mb-6 {centerTitle
					? 'text-center'
					: ''}"
			>
				{#if heroIcon}
					<i class="{heroIcon} mr-3 text-maia-800 dark:text-maia-500"></i>
				{/if}
				{@html heroTitle}
			</h1>
			<slot name="hero-content" />
			</div>
		</div>
	</div>

	<!-- Main Content -->
	<div class="px-5 sm:px-8 md:px-24 mx-auto max-w-6xl pb-16 relative z-10">
		<slot />
	</div>

	<Footer />
</main>

<style lang="postcss">
	.painted-hero { padding-top: clamp(4rem, 8vw, 8rem); padding-bottom: clamp(5rem, 10vw, 10rem); }
	.painted-hero::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(90deg, rgba(247,245,241,.9), rgba(247,245,241,.65) 48%, rgba(247,245,241,.08)), url('/images/brand/editorial-landscape.webp') center / cover; mask-image: linear-gradient(to bottom, black 75%, transparent); }
	.studio-hero .hero-copy { max-width: 740px; }
	.studio-hero h1 { font-size: clamp(2.4rem, 4.4vw, 3.8rem); line-height: 1.09; letter-spacing: -.045em; }
	:global(.dark) .painted-hero::before { opacity: .25; }
	@media(max-width: 640px) { .painted-hero::before { background-position: 60% center; opacity: .65; } }
	:global(.prose) {
		@apply text-maia-950 dark:text-maia-100;
	}

	:global(.prose a) {
		@apply text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors;
	}

	:global(.prose p) {
		@apply mb-4;
	}

	:global(.prose ul) {
		@apply mb-4 ml-6 list-disc;
	}

	:global(.prose li) {
		@apply mb-0;
	}
</style>
