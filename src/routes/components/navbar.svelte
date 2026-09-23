<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { CONFIG } from '$lib/config';
	import { NAVIGATION_ITEMS } from '$lib/navItems';
	import { pageNavItems } from '$lib/stores/navigation';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Banner from './banner.svelte';
	import NavItem from './NavItem.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import type { NavItem as NavItemType } from '$lib/stores/navigation';

	// Navbar state
	let scrollY = 0;
	let isScrolled = false;
	let isNavHovering = false;
	let hasNavSurface = false;
	let isMobileMenuOpen = false;
	let activeDropdown: string | null = null;
	// Measured height of the fixed header (banner + navbar); drives the spacer and mobile menu offset.
	let headerHeight = 0;
	
	// Keep header height fixed so scrolling does not shift the page.
	let navbarHeight = '4rem'; // Default height
	
	// Update navbar appearance based on scroll position and navigation focus.
	$: {
		isScrolled = scrollY > 20;
		navbarHeight = '4rem';
		hasNavSurface = isScrolled || isNavHovering || activeDropdown !== null;
	}
	
	// Handle scroll events
	function handleScroll() {
		scrollY = window.scrollY;
	}
	
	// Set active dropdown
	function setActiveDropdown(label: string | null) {
		activeDropdown = label;
	}
	
	// Toggle mobile menu
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (browser) {
			if (isMobileMenuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}
	
	// Close mobile menu on navigation
	$: if ($page) {
		isMobileMenuOpen = false;
		if (browser) {
			document.body.style.overflow = '';
		}
	}
	
	// Set up scroll listener
	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll, { passive: true });
			handleScroll(); // Initial check
			
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
	
	// Update CSS variables when they change
	afterUpdate(() => {
		if (browser) {
			document.documentElement.style.setProperty('--navbar-height', navbarHeight);
			document.documentElement.style.setProperty('--header-height', headerHeight ? `${headerHeight}px` : navbarHeight);
		}
	});
	
	// Convert readonly navigation items to mutable type for NavItem component
	const navItems: NavItemType[] = NAVIGATION_ITEMS.map(item => {
		if ('dropdownItems' in item) {
			return {
				...item,
				dropdownItems: [...item.dropdownItems]
			};
		}
		return item;
	});
</script>

<style>
	:global(:root) {
		--navbar-height: 4rem;
	}
	
	.navbar-container {
		height: var(--navbar-height);
		transition: background-color 160ms ease, border-color 160ms ease;
	}
</style>

<div
	class="fixed top-0 left-0 right-0 z-50 w-full"
	bind:clientHeight={headerHeight}
	style="--header-height: {headerHeight ? `${headerHeight}px` : 'var(--navbar-height)'}"
>
	{#if CONFIG.banner.visible}
		<Banner />
	{/if}
	
	<header 
		class="navbar-container w-full border-b backdrop-blur-sm"
		class:maia-nav-surface={hasNavSurface}
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
			<div class="flex items-center justify-between h-full">
				<!-- Logo -->
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="flex items-center">
						<img 
							src={$theme === 'dark' ? "/images/brand/maia-horizontal-size-5-dark-transparent.svg" : "/images/brand/maia-horizontal-size-5-light-transparent.svg"}
							alt="MAIA logo" 
							class="h-10 sm:h-12 w-auto"
						/>
					</a>
				</div>
				
				<!-- Desktop Navigation -->
				<nav
					class="hidden xl:flex items-center space-x-1"
					on:mouseenter={() => (isNavHovering = true)}
					on:mouseleave={() => (isNavHovering = false)}
				>
					{#each navItems as item}
						<NavItem 
							{item} 
							{activeDropdown} 
							{setActiveDropdown} 
						/>
					{/each}
					
					<!-- Dynamic page-specific dropdown items -->
					{#if $pageNavItems.length > 0}
						<div 
							class="relative group"
							role="button"
							tabindex="0"
							on:mouseenter={() => setActiveDropdown('page')}
							on:mouseleave={() => setActiveDropdown(null)}
						>
							
							{#if activeDropdown === 'page'}
								<div
							class="maia-nav-dropdown absolute top-full right-0 rounded-md py-1 min-w-[200px] border backdrop-blur-sm"
									role="menu"
									tabindex="0"
									on:mouseleave={() => setActiveDropdown(null)}
								>
									{#each $pageNavItems as item}
										<a
											href={item.href}
										class="block px-4 py-2 transition-colors duration-200"
										>
											{item.label}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
					
				</nav>
				
				<!-- Theme and mobile navigation controls -->
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="inline-flex h-11 w-11 shrink-0 items-center justify-center leading-none rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-maia-500 text-maia-950 dark:text-maia-100"
						aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
						title={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
						on:click={toggleTheme}
					>
						{#if $theme === 'dark'}
							<svg class="block h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true" viewBox="0 0 512 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
						{:else}
							<svg class="block h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true" viewBox="-64 0 512 512"><!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
						{/if}
					</button>
				<button
					type="button"
					class="inline-flex xl:hidden h-11 w-11 shrink-0 items-center justify-center leading-none p-2 rounded-md text-maia-950 dark:text-maia-100
							hover:text-maia-800 dark:hover:text-maia-400 hover:bg-maia-50 dark:hover:bg-maia-950/30
							focus:outline-none focus:ring-2 focus:ring-inset focus:ring-maia-500"
						aria-expanded={isMobileMenuOpen}
						on:click={toggleMobileMenu}
					>
						<span class="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
						<svg class="block h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
							{#if isMobileMenuOpen}
								<path d="M6 6l12 12M18 6L6 18" />
							{:else}
								<path d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>
	
	<!-- Mobile Menu -->
	<MobileMenu isOpen={isMobileMenuOpen} {activeDropdown} {navItems} />
</div>

<!-- Spacer to prevent content from being hidden under the navbar -->
<div style="height: {headerHeight ? `${headerHeight}px` : 'var(--navbar-height)'}"></div>
{#if CONFIG.banner.visible && !headerHeight}
	<!-- Server-side fallback until the header has been measured -->
	<div class="h-12"></div>
{/if}
