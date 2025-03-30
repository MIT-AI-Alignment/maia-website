<script>
	import { onMount } from 'svelte';
	import { CONFIG } from '$lib/config';

	// Control the animation for the icon
	let animateIcon = true;
	let isVisible = true; // New state to control banner visibility

	// When the component mounts, remove the animation after 3 seconds.
	onMount(() => {
		// Check localStorage for banner state on mount
		const bannerDismissed = localStorage.getItem('bannerDismissed');
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
		localStorage.setItem('bannerDismissed', 'true');
	};
</script>

{#if isVisible}
	<div
		class="bg-purple-600 dark:bg-purple-500 h-12 flex items-center justify-center w-full relative"
	>
		<div class="flex flex-col items-center">
			<p class="text-white">
				<i
					class={`fa-solid fa-circle-exclamation ${animateIcon ? 'fa-flip' : ''}`}
					style="--fa-animation-duration: 1.0s;"
				></i>
				Now accepting Spring 2025 applications for
				<a href="/getinvolved" class="underline">AI Safety Fundamentals</a>! Apply
				<a href={CONFIG.aisf_ml.applicationLink} class="underline">here</a>.
			</p>
			<p class="text-white text-sm -mt-1">
				<small>Deadline {CONFIG.aisf_ml.deadline}</small>
			</p>
		</div>
		<button
			on:click={dismissBanner}
			class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 focus:outline-none"
			aria-label="Close banner"
		>
			<i class="fa-solid fa-xmark"></i>
		</button>
	</div>
{/if}
