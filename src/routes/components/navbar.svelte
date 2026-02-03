<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { CONFIG } from '$lib/config';
	import { NAVIGATION_ITEMS } from '$lib/navItems';
	import { pageNavItems } from '$lib/stores/navigation';
	import { theme } from '$lib/stores/theme';
	import Banner from './banner.svelte';
	import NavItem from './NavItem.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { fade, slide } from 'svelte/transition';
	import type { NavItem as NavItemType } from '$lib/stores/navigation';

	// Navbar state
	let scrollY = 0;
	let isScrolled = false;
	let isMobileMenuOpen = false;
	let activeDropdown: string | null = null;
	
	// CSS variables for dynamic styling
	let navbarHeight = '4rem'; // Default height
	let navbarBg = 'transparent';
	let navbarBorder = 'transparent';
	let navbarShadow = 'none';
	
	// Update navbar appearance based on scroll position
	$: {
		if (scrollY > 20) {
			isScrolled = true;
			navbarHeight = '3.5rem';
		navbarBg = $theme === 'dark' 
			? 'bg-surface-dark/95' 
			: 'bg-surface-light-elevated/95';
		navbarBorder = $theme === 'dark'
			? 'border-border-dark'
			: 'border-border-light';
		navbarShadow = $theme === 'dark'
			? 'shadow-sm shadow-maia-900/10'
			: 'shadow-sm';
		} else {
			isScrolled = false;
			navbarHeight = '4rem';
			navbarBg = 'bg-transparent';
			navbarBorder = 'border-transparent';
			navbarShadow = 'shadow-none';
		}
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
			window.addEventListener('scroll', handleScroll);
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
		transition: height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}
</style>

<div class="fixed top-0 left-0 right-0 z-50 w-full">
	{#if CONFIG.banner.visible}
		<Banner />
	{/if}
	
	<header 
		class="navbar-container w-full border-b backdrop-blur-sm {navbarBg} {navbarBorder} {navbarShadow}"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
			<div class="flex items-center justify-between h-full">
				<!-- Logo -->
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="flex items-center">
						<img 
							src={$theme === 'dark' ? "/images/maia_dark.svg" : "/images/maia.svg"} 
							alt="MAIA logo" 
							class="h-7 w-auto"
						/>
					</a>
				</div>
				
				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center space-x-1">
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
									transition:slide={{ duration: 150 }}
							class="absolute top-full right-0 bg-surface-light-elevated dark:bg-surface-dark shadow-lg dark:shadow-maia-900/20 
									rounded-md py-1 min-w-[200px] border border-border-light dark:border-border-dark backdrop-blur-sm"
									role="menu"
									tabindex="0"
									on:mouseleave={() => setActiveDropdown(null)}
								>
									{#each $pageNavItems as item}
										<a
											href={item.href}
										class="block px-4 py-2 transition-colors duration-200
												hover:bg-maia-50 dark:hover:bg-maia-950/30 hover:text-maia-800 dark:hover:text-maia-400"
										>
											{item.label}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
					
					<!-- Theme Toggle -->
					<div class="ml-2 flex items-center">
						<ThemeToggle />
					</div>
				</nav>
				
				<!-- Mobile Menu Button -->
				<div class="flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-maia-950 dark:text-maia-100
							hover:text-maia-800 dark:hover:text-maia-400 hover:bg-maia-50 dark:hover:bg-maia-950/30
							focus:outline-none focus:ring-2 focus:ring-inset focus:ring-maia-500"
						aria-expanded={isMobileMenuOpen}
						on:click={toggleMobileMenu}
					>
						<span class="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
						{#if isMobileMenuOpen}
							<i class="fas fa-times h-6 w-6"></i>
						{:else}
							<i class="fas fa-bars h-6 w-6"></i>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</header>
	
	<!-- Mobile Menu -->
	<MobileMenu isOpen={isMobileMenuOpen} {activeDropdown} {navItems} />
</div>

<!-- Spacer to prevent content from being hidden under the navbar -->
<div style="height: var(--navbar-height)"></div>
{#if CONFIG.banner.visible}
	<div class="h-12"></div>
{/if}
