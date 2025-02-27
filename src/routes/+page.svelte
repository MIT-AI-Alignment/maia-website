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
					<div class="tech-grid"></div>
					<div class="tech-particles"></div>
					<div class="tech-circuit"></div>
					<div class="tech-pulse"></div>
					<div class="data-flow"></div>
				</div>
			{/if}

			<div class="prose dark:prose-invert max-w-none relative z-10">
				{#if mounted}
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 200 }}>
						We think that reducing risks from advanced artificial intelligence may be one of the most
						important problems of our time. We also think it's a highly interesting and exciting problem,
						with open opportunities for many more researchers to make progress on it.
					</p>
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 400 }}>
						MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks
						from advanced AI.
					</p>
					<p class="text-lg md:w-2/3" in:fly={{ y: 20, duration: 800, delay: 600 }}>
						We also run a semester-long introductory reading group on AI
						safety, including both a technical machine learning track and a policy track.
					</p>
				{:else}
					<p class="text-lg md:w-2/3">
						We think that reducing risks from advanced artificial intelligence may be one of the most
						important problems of our time. We also think it's a highly interesting and exciting problem,
						with open opportunities for many more researchers to make progress on it.
					</p>
					<p class="text-lg md:w-2/3">
						MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks
						from advanced AI.
					</p>
					<p class="text-lg md:w-2/3">
						We also run a semester-long introductory reading group on AI
						safety, including both a technical machine learning track and a policy track.
					</p>
				{/if}
				
				<div class="flex flex-col sm:flex-row gap-4 mt-8">
					{#if CONFIG.aisf_ml.visible && mounted}
						<div in:scale={{ duration: 400, delay: 800, start: 0.8, opacity: 0, easing: backOut }}>
							<a href="https://airtable.com/appci3nEZe4nlb8oX/shrSLlrgeIFubZnGd" class="hover:scale-105 transition-transform">
								<Button 
									text="Apply to our technical AI safety program" 
									icon="fa-solid fa-arrow-right" 
									type="purple"
								/>
							</a>
						</div>
					{:else if CONFIG.aisf_ml.visible}
						<a href="https://airtable.com/appci3nEZe4nlb8oX/shrSLlrgeIFubZnGd">
							<Button 
								text="Apply to our technical AI safety program" 
								icon="fa-solid fa-arrow-right" 
								type="purple"
							/>
						</a>
					{/if}
					{#if CONFIG.aisf_gov.visible && mounted}
						<div in:scale={{ duration: 400, delay: 1000, start: 0.8, opacity: 0, easing: backOut }}>
							<a href="https://haist.ai/policy-fellowship" class="hover:scale-105 transition-transform">
								<Button 
									text="Apply to our policy AI safety program" 
									icon="fa-solid fa-arrow-right" 
									type="fuchsia"
								/>
							</a>
						</div>
					{:else if CONFIG.aisf_gov.visible}
						<a href="https://haist.ai/policy-fellowship">
							<Button 
								text="Apply to our policy AI safety program" 
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
			organisations listed endorse or are affiliated with MAIA.
		</p>
	</SectionContainer>
</PageLayout>

<style>
	/* Tech-themed grid background */
	.tech-grid {
		position: absolute;
		top: -100vh; /* Extend well above the viewport */
		left: -50vw;
		width: 200vw; /* Extend beyond viewport width */
		height: 200vh; /* Extend beyond viewport height */
		background-size: 40px 40px;
		background-image: 
			linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
		animation: gridPulse 15s ease-in-out infinite;
		transform-origin: center;
	}
	
	@keyframes gridPulse {
		0% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
	}
	
	/* Tech particles effect */
	.tech-particles {
		position: absolute;
		top: -100vh;
		left: -50vw;
		width: 200vw;
		height: 200vh;
		background-image: radial-gradient(circle, rgba(139, 92, 246, 0.2) 1px, transparent 1px);
		background-size: 30px 30px;
		animation: particlesDrift 20s linear infinite;
	}
	
	@keyframes particlesDrift {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100px 100px;
		}
	}
	
	/* Tech circuit lines */
	.tech-circuit {
		position: absolute;
		top: -20vh;
		right: -10vw;
		width: 60vw;
		height: 120vh;
		background-image: 
			linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
			linear-gradient(0deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
			linear-gradient(45deg, rgba(139, 92, 246, 0.05) 1px, transparent 2px);
		background-size: 40px 40px, 40px 40px, 80px 80px;
		clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
		animation: circuitPulse 8s ease-in-out infinite;
	}
	
	@keyframes circuitPulse {
		0%, 100% {
			opacity: 0.3;
			transform: translateY(0);
		}
		50% {
			opacity: 0.6;
			transform: translateY(-20px);
		}
	}
	
	/* Tech pulse effect */
	.tech-pulse {
		position: absolute;
		top: -50vh;
		left: -20vw;
		width: 140vw;
		height: 140vh;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(139, 92, 246, 0) 0%,
			rgba(139, 92, 246, 0.03) 30%,
			rgba(139, 92, 246, 0.05) 40%,
			rgba(139, 92, 246, 0.03) 50%,
			rgba(139, 92, 246, 0) 70%
		);
		animation: pulse 12s ease-in-out infinite;
		transform-origin: center;
	}
	
	/* Binary code animation */
	.tech-circuit::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: 
			repeating-linear-gradient(
				0deg,
				transparent,
				transparent 20px,
				rgba(139, 92, 246, 0.1) 20px,
				rgba(139, 92, 246, 0.1) 40px
			),
			repeating-linear-gradient(
				90deg,
				transparent,
				transparent 20px,
				rgba(139, 92, 246, 0.05) 20px,
				rgba(139, 92, 246, 0.05) 40px
			);
		animation: binaryFlow 15s linear infinite;
	}
	
	@keyframes binaryFlow {
		0% {
			background-position: 0 0, 0 0;
		}
		100% {
			background-position: 0 100px, 100px 0;
		}
	}
	
	/* Data flow animation */
	.data-flow {
		position: absolute;
		top: -50vh;
		left: -50vw;
		width: 200vw;
		height: 200vh;
		overflow: hidden;
		opacity: 0.2;
	}
	
	.data-flow::before {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		background-image: 
			linear-gradient(45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
			linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%),
			linear-gradient(-45deg, transparent 75%, rgba(139, 92, 246, 0.1) 75%);
		background-size: 60px 60px;
		animation: dataFlow 20s linear infinite;
	}
	
	@keyframes dataFlow {
		0% {
			transform: rotate(0) scale(1);
		}
		100% {
			transform: rotate(360deg) scale(1.1);
		}
	}
	
	@keyframes pulse {
		0%, 100% {
			transform: scale(0.8);
			opacity: 0.3;
		}
		50% {
			transform: scale(1);
			opacity: 0.6;
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.tech-grid, .tech-particles, .tech-circuit, .tech-pulse, .tech-circuit::before, .data-flow::before {
			animation: none !important;
		}
	}
</style>
