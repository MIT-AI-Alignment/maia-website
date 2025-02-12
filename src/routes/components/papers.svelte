<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import Paper from './paper.svelte';
	import '@splidejs/svelte-splide/css/core';
	import IconArrowRightBold from '~icons/ph/arrow-right-bold';
	import IconArrowLeftBold from '~icons/ph/arrow-left-bold';
	import { PAPERS } from '$lib/papers';

	let innerWidth = 0;
	let innerHeight = 0;

	$: perPage = innerWidth < 650 ? 2 : innerWidth < 768 ? 3 : 5;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Splide
	aria-label="Research images/papers"
	options={{ perPage, gap: '1rem' }}
	hasTrack={false}
	on:arrowsUpdated={(e) => {
		console.log(e);
	}}
	class="relative"
>
	<SplideTrack>
		{#each PAPERS as paper}
			<SplideSlide>
				<Paper {...paper} tags={Array.from(paper.tags)} />
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
