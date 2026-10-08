<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import PageMetadata from './PageMetadata.svelte';
	import Footer from '../routes/components/footer.svelte';
	import Navbar from '../routes/components/navbar.svelte';
	import { updatePageNavItems, clearPageNavItems, type DropdownItem } from '$lib/stores/navigation';

	export let title: string;
	export let description: string;
	export let heroIcon = '';
	// Leave empty to skip the shared hero when a page renders its own header.
	export let heroTitle = '';
	export let centerTitle = false;
	export let pageNavItems: DropdownItem[] = [];
	export let motionVariant: 'community' | 'ambient' = 'ambient';
	// Extra classes on <main>, for pages that restyle their own surface.
	export let pageClass = '';

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

<PageMetadata {title} {description} />

<main
	class="min-h-screen bg-surface-light dark:bg-surface-dark dark:text-maia-50 relative overflow-hidden {pageClass}"
>
	<!-- No background grid needed anymore -->

	<Navbar />

	<!-- Hero Section -->
	{#if heroTitle}
	<div class:painted-hero={motionVariant === 'community'} class="page-hero pt-8 md:pt-14 pb-8 md:pb-10 relative z-10 overflow-hidden">
		<div class:studio-hero={motionVariant === 'community'} class="px-5 sm:px-8 md:px-24 mx-auto max-w-6xl relative z-10">
			<div class="hero-copy">
			<h1
				data-motion="hero"
				class="text-4xl md:text-5xl lg:text-6xl font-heading font-[550] mb-6 {centerTitle
					? 'text-center'
					: ''}"
			>
				{#if heroIcon}
					<i class="{heroIcon} mr-3 text-maia-800 dark:text-maia-500"></i>
				{/if}
				{@html heroTitle}
			</h1>
			<div data-motion="quiet" style="--motion-delay: 140ms">
				<slot name="hero-content" />
			</div>
			</div>
		</div>
	</div>
	{/if}

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
	@keyframes painting-arrives {
		from { transform: scale(1.035) translateY(6px); }
		to { transform: scale(1) translateY(0); }
	}
	@media (prefers-reduced-motion: no-preference) {
		.painted-hero::before {
			animation: painting-arrives 1400ms cubic-bezier(0.22, 1, 0.36, 1) both;
		}
	}
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
