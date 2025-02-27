<script lang="ts">
	import Footer from '../routes/components/footer.svelte';
	import Navbar from '../routes/components/navbar.svelte';
	
	export let title: string;
	export let description: string;
	export let heroIcon = '';
	export let heroTitle: string;
	export let centerTitle = false;
</script>

<svelte:head>
	<title>MAIA - {title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	
	<!-- Hero Section -->
	<div class="bg-gradient-to-b from-purple-500/5 to-transparent dark:from-purple-500/10 pt-32 pb-12">
		<div class="px-8 md:px-24 mx-auto max-w-6xl">
			<h1 class="pt-16 text-4xl md:text-5xl lg:text-6xl font-heading font-[550] mb-6 {centerTitle ? 'text-center' : ''}">
				{#if heroIcon}
					<i class="{heroIcon} mr-3 text-purple-600"></i>
				{/if}
				{@html heroTitle}
			</h1>
			<slot name="hero-content" />
		</div>
	</div>
	
	<!-- Main Content -->
	<div class="px-8 md:px-24 mx-auto max-w-6xl pb-16">
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