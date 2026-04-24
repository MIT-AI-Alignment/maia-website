<script>
	import PageLayout from '../components/PageLayout.svelte';
	import Button from '../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let mounted = false;
	const aisfBenefits = [
		'8 weeks, 2 hours per week',
		'<strong>Free food</strong> at sessions',
		'Small groups led by MAIA facilitators',
		'No prior AI background required'
	];
	
	onMount(() => {
		mounted = true;
	});
</script>

<PageLayout
	title="MIT AI Alignment"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce catastrophic risk from advanced AI."
	heroTitle="We're a group of MIT students working to <span class='text-maia-800 dark:text-maia-500'>reduce catastrophic risk from advanced AI</span>."
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
					class="inline-block text-2xl text-maia-800 dark:text-maia-500 underline decoration-2 underline-offset-4 transition-colors"
					in:fly={{ y: 20, duration: 800, delay: 100 }}>
					Join our mailing list →
					</a></p> -->
					<p><a 
					href="mailto:maia-exec@mit.edu" 
					class="inline-block text-2xl text-maia-800 dark:text-maia-500 underline decoration-2 underline-offset-4 transition-colors"
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

	<!-- AISF: flagship program, feature card treatment -->
	<section
		id="aisf"
		class="mb-16 rounded-xl p-8 md:p-10 bg-gradient-to-br from-maia-800 to-maia-900 dark:from-maia-700 dark:to-maia-900 text-white shadow-maia-lg border border-maia-700/50 dark:border-maia-600/40 scroll-mt-24"
	>
		<span
			class="inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-semibold tracking-wider uppercase bg-white/15 text-white mb-4"
		>
			Flagship program
		</span>

		<h2 class="text-3xl md:text-4xl font-heading font-[550] mb-4 leading-tight">
			<i class="fa-solid fa-graduation-cap mr-2"></i>
			AI Safety Fundamentals
		</h2>

		<p class="text-lg text-white/90 mb-8 max-w-3xl leading-relaxed">
			The main way people get involved with MIT AI Alignment—an 8-week reading 
			group on why AI safety matters and what's being done about it. Covers AI's 
			trajectory, misalignment, technical safety, policy, and careers in the field. 
			Fall and spring run in our office with dinner included, and summer is virtual. 
			Open to anyone, with preference for MIT undergrad and grad students.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
			{#each aisfBenefits as benefit}
				<div class="flex items-center gap-3 text-white/90">
					<i class="fa-solid fa-check text-maia-300 w-4 text-center"></i>
					<span>{@html benefit}</span>
				</div>
			{/each}
		</div>

		<div class="flex flex-col sm:flex-row gap-3">
			<a
				href={CONFIG.aisf_ml.applicationLink}
				class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-maia-800 hover:bg-maia-50 font-medium transition-colors shadow-sm"
			>
				Fill interest form
				<i class="fa-solid fa-arrow-right"></i>
			</a>
			<a
				href="/aisf/"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/30"
			>
				See the curriculum
			</a>
		</div>
	</section>
</PageLayout>

<style>
	/* Flowing dots animation */
	.flowing-dots {
		position: fixed; /* Fixed position to ensure it covers the entire viewport */
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-image: radial-gradient(circle, var(--maia-400, #c084fc) 1.5px, transparent 1.5px);
		background-size: 35px 35px;
		opacity: 0.25;
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
		background: linear-gradient(to bottom, transparent, var(--background-color, #fdfbfe));
		pointer-events: none;
		z-index: 0;
	}
	
	@media (prefers-reduced-motion: reduce) {
		.flowing-dots {
			animation: none !important;
		}
	}
</style>
