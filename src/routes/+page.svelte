<script>
	import PageLayout from '../components/PageLayout.svelte';
	import SectionContainer from '../components/SectionContainer.svelte';
	import Button from '../components/Button.svelte';
	import Orgs from './components/orgs.svelte';
	import Papers from './components/papers.svelte';
	import { CONFIG } from '$lib/config';
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
</script>

<PageLayout
	title="MIT AI Alignment"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	heroTitle="We're a group of MIT students conducting research to <span class='text-purple-600 dark:text-purple-500'>reduce risk from advanced AI</span>."
>
	<svelte:fragment slot="hero-content">

		<div class="relative">
			<!-- Animated background elements -->
			{#if mounted}
				<div class="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" style="z-index: -1;">
					<div class="flowing-dots"></div>
					<div class="bottom-gradient"></div>
				</div>
			{/if}

			<div class="prose dark:prose-invert max-w-none relative z-10">
				{#if mounted}
					<!-- <p><a 
					href="https://mailchi.mp/0b6484dd282e/public" 
					class="inline-block text-2xl text-purple-600 dark:text-purple-500 underline decoration-2 underline-offset-4 transition-colors"
					in:fly={{ y: 20, duration: 800, delay: 100 }}>
					Join our mailing list →
					</a></p> -->
					<p><a 
					href="mailto:maia-exec@mit.edu" 
					class="inline-block text-2xl text-purple-600 dark:text-purple-500 underline decoration-2 underline-offset-4 transition-colors"
					in:fly={{ y: 20, duration: 800, delay: 100 }}>
					Chat with us →
					</a></p>
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 200 }}>
						Reducing risks from advanced artificial intelligence may be one of the 
						most important challenges of our time. And one where real progress is possible.
					</p>
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 400 }}>
						MAIA supports undergraduate and graduate students contributing to that progress.
					</p>

				{:else}
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 200 }}>
						Reducing risks from advanced artificial intelligence may be one of the 
						most important challenges of our time. And one where real progress is possible.
					</p>
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 400 }}>
						MAIA supports undergraduate and graduate students contributing to that progress.
					</p>
				{/if}
				
				<div class="flex flex-col sm:flex-row gap-4 mt-8">
					{#if CONFIG.aisf_ml.visible && mounted}
						<div in:scale={{ duration: 400, delay: 800, start: 0.8, opacity: 0, easing: backOut }}>
							<a href="/getinvolved/">
							<Button 
								text="See our opportunities" 
								icon="fa-solid fa-arrow-right" 
								type="purple"
							/>
							</a>
						</div>
					{:else if CONFIG.aisf_ml.visible}
						<a href="https://aialignment.mit.edu/getinvolved/">
							<Button 
								text="See our opportunities" 
								icon="fa-solid fa-arrow-right" 
								type="purple"
							/>
						</a>
					{/if}
					{#if CONFIG.aisf_gov.visible && mounted}
						<div in:scale={{ duration: 400, delay: 1000, start: 0.8, opacity: 0, easing: backOut }}>
							<a href="{CONFIG.mailingListLink}" class="hover:scale-105 transition-transform">
								<Button 
									text="Get event updates" 
									icon="fa-solid fa-arrow-right" 
									type="fuchsia"
								/>
							</a>
						</div>
					{:else if CONFIG.aisf_gov.visible}
						<a href="{CONFIG.mailingListLink}" class="hover:scale-105 transition-transform">
							<Button 
								text="Get event updates" 
								icon="fa-solid fa-arrow-right" 
								type="fuchsia"
							/>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</svelte:fragment>
	
	<SectionContainer
		title="Selected Research"
		icon="fa-solid fa-book-open"
	>
		{#if mounted}
			<div in:fade={{ duration: 800, delay: 300 }}>
				<Papers />
			</div>
		{:else}
			<Papers />
		{/if}
	</SectionContainer>
	
	<SectionContainer
		title="Organizations we work with"
		icon="fa-solid fa-building"
	>
		{#if mounted}
			<div in:fade={{ duration: 800, delay: 400 }}>
				<Orgs />
			</div>
		{:else}
			<Orgs />
		{/if}
		<p class="mt-6 text-center text-gray-600 dark:text-gray-400 italic">
			This is a list of some of the organizations our members have worked with. Not all
			organizations listed endorse or are affiliated with MAIA.
		</p>
	</SectionContainer>
</PageLayout>

<style>
	/* Flowing dots animation */
	.flowing-dots {
		position: fixed; /* Fixed position to ensure it covers the entire viewport */
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-image: radial-gradient(circle, rgba(139, 92, 246, 0.25) 1.5px, transparent 1.5px);
		background-size: 35px 35px;
		animation: dotsFlow 15s linear infinite;
		transform-origin: top left;
	}
	
	@keyframes dotsFlow {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(35px, 35px); /* True diagonal movement */
		}
	}
	
	/* Separate static gradient overlay */
	.bottom-gradient {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 15vh;
		background: linear-gradient(to bottom, transparent, var(--bg-color, #ffffff));
		pointer-events: none;
		z-index: 0;
	}
	
	:global(.dark) .bottom-gradient {
		--bg-color: #000000;
	}
	
	@media (prefers-reduced-motion: reduce) {
		.flowing-dots {
			animation: none !important;
		}
	}
</style>
