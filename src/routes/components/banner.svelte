<script>
	import { onMount } from 'svelte';
	import { CONFIG } from '$lib/config';

	// Control the animation for the icon
	let animateIcon = true;
	let isVisible = true;  // New state to control banner visibility
	// Keyed on the link so a dismissed old banner does not hide a new one.
	const dismissKey = `bannerDismissed:${CONFIG.banner.link}`;

	// When the component mounts, remove the animation after 3 seconds.
	onMount(() => {
		// Check localStorage for banner state on mount
		const bannerDismissed = localStorage.getItem(dismissKey);
		if (bannerDismissed === 'true') {
			isVisible = false;
		}

		setTimeout(() => {
			animateIcon = false;
		}, 2000); // 3000 milliseconds = 3 seconds
	});

	// Function to handle banner dismissal
	const dismissBanner = () => {
		isVisible = false;
		localStorage.setItem(dismissKey, 'true');
	};
</script>

{#if isVisible}
	<div class="bg-maia-800 dark:bg-maia-600 min-h-11 py-2 flex items-center justify-center w-full relative">
		<div class="flex flex-col items-center pl-8 pr-14">
			<p class="text-white text-center">
				<i
					class={`fa-solid fa-circle-exclamation ${animateIcon ? 'fa-flip' : ''}`}
					style="--fa-animation-duration: 1.0s;"
				></i>
				{CONFIG.banner.text}
				<a href={CONFIG.banner.link} class="underline font-semibold ml-1">{CONFIG.banner.ctaText}</a>
			</p>
		</div>
		<button
			type="button"
			on:click={dismissBanner}
			class="absolute right-1 top-1/2 -translate-y-1/2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white hover:text-maia-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			aria-label="Close banner"
		>
			<i class="fa-solid fa-xmark"></i>
		</button>
	</div>
{/if}
