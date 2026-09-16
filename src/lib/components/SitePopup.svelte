<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';

	// Everything about the popup — copy, destination, where it shows, how long a dismissal
	// lasts — is set in CONFIG.popup so a new campaign never needs a change here.
	const popup = CONFIG.popup;
	// config.ts is `as const`, so widen the literals here instead of loosening the config.
	const showOnPaths = popup.showOnPaths as readonly string[];
	const remember = popup.remember as 'device' | 'session';
	const isExternal = /^https?:\/\//.test(popup.href);
	// Keyed on the destination so a new campaign is shown again even if an old one was dismissed.
	const dismissKey = `sitePopupDismissed:${popup.href}`;

	let mounted = false;
	let open = false;
	let ctaElement: HTMLElement;

	function storage(): Storage {
		return remember === 'session' ? sessionStorage : localStorage;
	}

	// Only on the configured pages, and never on the page the popup points to.
	$: onAllowedPath = showOnPaths.length === 0 || showOnPaths.includes($page.url.pathname);
	$: onTarget = !isExternal && $page.url.pathname.startsWith(popup.href.replace(/\/$/, ''));

	onMount(() => {
		mounted = true;
	});

	// Re-evaluated on client-side navigation too, so arriving at the homepage from another
	// page still counts as the first visit.
	$: if (mounted && popup.visible && onAllowedPath && !onTarget && !open) {
		try {
			if (storage().getItem(dismissKey) !== 'true') open = true;
		} catch {
			open = true;
		}
	}

	// Lock page scroll while the popup is open and move focus to the primary action.
	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = open ? 'hidden' : '';
		if (open) queueMicrotask(() => ctaElement?.querySelector<HTMLElement>('a, button')?.focus());
	}

	function dismiss() {
		open = false;
		try {
			storage().setItem(dismissKey, 'true');
		} catch {
			// Private mode or blocked storage: the popup simply shows again next time.
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') dismiss();
	}
</script>

<svelte:window on:keydown={open ? handleKeydown : undefined} />

{#if open}
	<!-- Backdrop: above the navbar (z-50) and mobile menu -->
	<div
		class="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
		transition:fade={{ duration: 150 }}
		on:click|self={dismiss}
		role="presentation"
	>
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="site-popup-title"
			aria-describedby="site-popup-text"
			class="relative w-full max-w-md rounded-lg border p-6 shadow-2xl sm:max-w-lg sm:p-8"
			style="background: var(--maia-canvas); border-color: var(--maia-border); color: var(--maia-ink);"
			transition:fly={{ y: 24, duration: 200 }}
		>
			<button
				type="button"
				class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-maia-800/10 focus:outline-none focus:ring-2 focus:ring-maia-800/50 dark:hover:bg-maia-400/10"
				style="color: var(--maia-muted);"
				aria-label="Close"
				on:click={dismiss}
			>
				<i class="fa-solid fa-xmark text-lg" aria-hidden="true"></i>
			</button>

			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-md"
				style="background: var(--maia-accent); color: #fff;"
			>
				<i class="{popup.icon} text-2xl" aria-hidden="true"></i>
			</div>

			<h2 id="site-popup-title" class="mb-2 pr-8 font-heading text-2xl font-[650]">
				{popup.title}
			</h2>
			<p id="site-popup-text" class="mb-6" style="color: var(--maia-muted);">
				{popup.text}
			</p>

			<div class="flex flex-col gap-3 sm:flex-row sm:items-center" bind:this={ctaElement}>
				<div class="flex-1 whitespace-nowrap">
					<Button
						text={popup.ctaText}
						icon="fa-solid fa-arrow-right"
						type="purple"
						size="lg"
						href={popup.href}
						target={isExternal ? '_blank' : undefined}
						rel={isExternal ? 'noopener noreferrer' : undefined}
						fullWidth={true}
						on:click={dismiss}
					/>
				</div>
				<div class="shrink-0 whitespace-nowrap text-center">
					<Button text={popup.dismissText} type="text" size="lg" on:click={dismiss} />
				</div>
			</div>
		</div>
	</div>
{/if}
