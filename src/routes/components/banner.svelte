<script>
	import { onMount } from 'svelte';
    import { CONFIG } from '$lib/config'

	// Control the animation for the icon
	let animateIcon = true;

	// When the component mounts, remove the animation after 3 seconds.
	onMount(() => {
		setTimeout(() => {
			animateIcon = false;
		}, 2000); // 3000 milliseconds = 3 seconds
	});
</script>

<div class="bg-purple-600 dark:bg-purple-500 h-12 flex items-center justify-center w-full">
	<p class="text-white">
		<i
			class={`fa-solid fa-circle-exclamation ${animateIcon ? 'fa-flip' : ''}`}
			style="--fa-animation-duration: 1.0s;"
		></i>
		Now accepting Spring 2025 applications for 
        <a href="/getinvolved" class="underline">AI Safety Fundamentals</a>! Apply
		<a href="{ CONFIG.aisf_ml.applicationLink }" class="underline">here</a>.
		<small>Deadline { CONFIG.aisf_ml.deadline }</small>
	</p>
</div>
