<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Paper from './paper.svelte';
	import '@splidejs/svelte-splide/css/core';
	import IconArrowRightBold from '~icons/ph/arrow-right-bold';
	import IconArrowLeftBold from '~icons/ph/arrow-left-bold';
	import { PAPERS } from '$lib/papers';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let innerWidth = 0;
	let innerHeight = 0;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	$: perPage = innerWidth < 650 ? 1 : innerWidth < 768 ? 2 : innerWidth < 1024 ? 3 : 4;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if mounted}
	<div in:fade={{ duration: 800, delay: 200 }}>
		<Splide
			aria-label="Research images/papers"
			options={{
				perPage,
				gap: '1.5rem',
				pagination: true,
				arrows: true,
				autoplay: true,
				interval: 5000,
				pauseOnHover: true,
				pauseOnFocus: true,
				rewind: true,
				easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
				speed: 800
			}}
			hasTrack={false}
			class="relative papers-carousel"
		>
			<div class="custom-pagination splide__pagination"></div>
			<SplideTrack>
				{#each PAPERS as paper, i}
					<SplideSlide>
						<div style="animation-delay: {i * 100}ms;" class="slide-in">
							<Paper {...paper} />
						</div>
					</SplideSlide>
				{/each}
			</SplideTrack>
			<div class="splide__arrows">
				<button
					class="splide__arrow splide__arrow--prev transition-all duration-300 absolute left-[-30px] md:left-[-50px] top-1/3 bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center border border-solid border-purple-200 dark:border-purple-900 shadow-md hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/30"
					><IconArrowLeftBold class="text-purple-600 dark:text-purple-400" /></button
				>
				<button
					class="splide__arrow splide__arrow--next transition-all duration-300 absolute right-[-30px] md:right-[-50px] top-1/3 bg-white dark:bg-gray-800 h-10 w-10 rounded-full flex items-center justify-center border border-solid border-purple-200 dark:border-purple-900 shadow-md hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/30"
					><IconArrowRightBold class="text-purple-600 dark:text-purple-400" /></button
				>
			</div>
		</Splide>
	</div>
{:else}
	<Splide
		aria-label="Research images/papers"
		options={{ perPage, gap: '1rem' }}
		hasTrack={false}
		class="relative"
	>
		<SplideTrack>
			{#each PAPERS as paper}
				<SplideSlide>
					<Paper {...paper} />
				</SplideSlide>
			{/each}
		</SplideTrack>
		<div class="splide__arrows invisible md:visible">
			<button
				class="splide__arrow splide__arrow--prev transition-opacity disabled:opacity-0 absolute left-[-50px] top-1/3 bg-slate-100 h-8 w-8 rounded-full flex items-center justify-center border border-solid border-black"
				><IconArrowLeftBold /></button
			>
			<button
				class="splide__arrow splide__arrow--next transition-opacity disabled:opacity-0 absolute right-[-50px] top-1/3 bg-slate-100 h-8 w-8 rounded-full flex items-center justify-center border border-solid border-black"
				><IconArrowRightBold /></button
			>
		</div>
	</Splide>
{/if}

<style>
	:global(.papers-carousel .splide__pagination) {
		bottom: -2rem;
	}

	:global(.papers-carousel .splide__pagination__page) {
		background: rgba(139, 92, 246, 0.3);
		transition: all 0.3s ease;
	}

	:global(.papers-carousel .splide__pagination__page.is-active) {
		background: rgba(139, 92, 246, 0.8);
		transform: scale(1.3);
	}

	.slide-in {
		animation: slideIn 0.8s ease-out forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes slideIn {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.slide-in {
			animation: none;
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
