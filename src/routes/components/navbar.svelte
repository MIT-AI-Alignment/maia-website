<script lang="ts">
	import { onMount } from 'svelte';
	import { CONFIG } from '$lib/config';
	import { NAVIGATION_ITEMS } from '$lib/navItems';
	import Banner from './banner.svelte';
	import { slide, fade } from 'svelte/transition';

	let hrVisible = false;
	let navbarExpanded = true;

	let hamburgerVisible = false;

	let activeDropdown: string | null = null;

	onMount(() => {
		const handleScroll = () => {
			if (window.scrollY > 40) {
				// Adjust the value as needed
				hrVisible = true;
				navbarExpanded = false;
			} else {
				hrVisible = false;
				navbarExpanded = true;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="fixed top-0 w-full z-40">
	{#if CONFIG.banner.visible}
		<Banner />
	{/if}
	<div class="font-heading bg-maia_white dark:bg-maia_black dark:text-white">
		<div class="px-8 md:px-24 py-4">
			<div
				class="flex items-center justify-between"
				style="transition: height 0.3s ease; height: {navbarExpanded ? '6rem' : '3rem'};"
			>
				<div class="flex items-center gap-2">
					<a href="/" class="dark:hidden">
						<enhanced:img src="../../images/maia.svg" alt="MAIA logo" class="h-8 w-auto" />
						<span class="sr-only">MAIA</span>
					</a>
					<a href="/" class="hidden dark:block">
						<enhanced:img src="../../images/maia_dark.svg" alt="MAIA logo" class="h-8 w-auto" />
						<span class="sr-only">MAIA</span>
					</a>
				</div>
				<button class="md:hidden" on:click={() => (hamburgerVisible = !hamburgerVisible)}>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path></svg
					>
				</button>
				<nav class="hidden md:flex gap-10 font-semibold text-md">
					{#each NAVIGATION_ITEMS as item}
						{#if 'dropdownItems' in item}
							<div
								class="relative group"
								role="button"
								tabindex="0"
								on:mouseenter={() => (activeDropdown = item.label)}
								on:mouseleave={(e) => {
									// Check if we're not moving to the dropdown content
									const relatedTarget =
										e.relatedTarget instanceof HTMLElement ? e.relatedTarget : null;
									if (relatedTarget && !e.currentTarget.contains(relatedTarget)) {
										activeDropdown = null;
									}
								}}
							>
								<a class="hover:underline underline-offset-4 cursor-pointer" href={item.href}>
									{item.label}
								</a>
								{#if activeDropdown === item.label}
									<div
										transition:slide={{ duration: 200 }}
										class="absolute top-full left-0 bg-maia_white dark:bg-maia_black shadow-[0_4px_20px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] rounded-lg py-2 min-w-[200px] border border-gray-100 dark:border-gray-800"
										role="menu"
										on:mouseleave={() => (activeDropdown = null)}
									>
										{#each item.dropdownItems as subItem}
											<a
												href={subItem.href}
												class="block px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-purple-950 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
											>
												{subItem.label}
											</a>
										{/each}
									</div>
								{/if}
							</div>
						{:else}
							<a class="hover:underline underline-offset-4" href={item.href}>{item.label}</a>
						{/if}
					{/each}
				</nav>
				<div
					transition:slide={{ duration: 200 }}
					class="md:hidden absolute top-full right-0 bg-maia_white dark:bg-maia_black dark:text-white shadow-md flex flex-col items-start py-2 w-full"
					class:hidden={!hamburgerVisible}
				>
					{#each NAVIGATION_ITEMS as item}
						{#if 'dropdownItems' in item}
							<div class="w-full">
								<a
									class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left block"
									href={item.href}
								>
									{item.label}
								</a>
								<div class="bg-gray-50 dark:bg-purple-950/50">
									{#each item.dropdownItems as subItem}
										<a
											href={subItem.href}
											class="px-12 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left block"
										>
											{subItem.label}
										</a>
									{/each}
								</div>
							</div>
						{:else}
							<a
								class="px-8 py-2 hover:bg-gray-100 dark:hover:bg-purple-950 w-full text-left block"
								href={item.href}
							>
								{item.label}
							</a>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
	{#if hrVisible}
		<hr
			transition:fade={{ duration: 200 }}
			class="mx-12 border-slate-300 dark:border-stone-800"
		/>
	{/if}
</div>
