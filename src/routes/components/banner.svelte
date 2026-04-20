<script>
	import { onMount } from 'svelte';
	import { CONFIG } from '$lib/config';

	let isVisible = true;

	onMount(() => {
		const bannerDismissed = localStorage.getItem('bannerDismissed');
		if (bannerDismissed === 'true') {
			isVisible = false;
		}
	});

	const dismissBanner = () => {
		isVisible = false;
		localStorage.setItem('bannerDismissed', 'true');
	};
</script>

{#if isVisible}
	<div class="bg-maia-800 dark:bg-maia-600 w-full">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3 sm:gap-4">
			{#if CONFIG.cpw.visible}
				<span
					class="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase bg-white/15 text-white shrink-0"
				>
					CPW 2026
				</span>

				<p class="flex-1 text-sm sm:text-base text-white leading-snug min-w-0 truncate sm:whitespace-normal">
					<span class="font-semibold">Welcome, prefrosh!</span>
					<span class="hidden sm:inline">Hang with MAIA April 16 to 18.</span>
					<span class="sm:hidden">MAIA events April 16 to 18.</span>
				</p>

				<a
					href="/#{CONFIG.cpw.anchor}"
					class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-medium whitespace-nowrap transition-colors shrink-0"
				>
					See events
					<i class="fa-solid fa-arrow-right text-xs"></i>
				</a>
			{:else}
				<p class="flex-1 text-sm sm:text-base text-white leading-snug min-w-0">
					<span class="font-semibold">Deadline extended!</span>
					Stages 1 &amp; 2 are now merged into a single application by {CONFIG.aisf_ml.deadline}.
				</p>

				<a
					href={CONFIG.aisf_ml.applicationLink}
					class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-medium whitespace-nowrap transition-colors shrink-0"
				>
					Apply now
					<i class="fa-solid fa-arrow-right text-xs"></i>
				</a>
			{/if}

			<button
				on:click={dismissBanner}
				class="text-white/70 hover:text-white p-1 -mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors shrink-0"
				aria-label="Dismiss banner"
			>
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
	</div>
{/if}
