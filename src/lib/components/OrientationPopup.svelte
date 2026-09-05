<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';

	const popup = CONFIG.orientation.popup;
	// Keyed on the destination so a new campaign is shown again even if an old one was dismissed.
	const dismissKey = `orientationPopupDismissed:${popup.href}`;

	let open = false;
	let ctaElement: HTMLElement;

	// Never show the popup on the page it points to (or its short links).
	$: onTarget = /^\/orientation/.test($page.url.pathname);

	onMount(() => {
		if (popup.visible && !onTarget && sessionStorage.getItem(dismissKey) !== 'true') {
			open = true;
		}
	});

	// Lock page scroll while the popup is open and move focus to the primary action.
	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = open ? 'hidden' : '';
		if (open) queueMicrotask(() => ctaElement?.querySelector<HTMLElement>('a, button')?.focus());
	}

	function dismiss() {
		open = false;
		sessionStorage.setItem(dismissKey, 'true');
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
			aria-labelledby="orientation-popup-title"
			aria-describedby="orientation-popup-text"
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
				<i class="fa-solid fa-compass text-2xl" aria-hidden="true"></i>
			</div>

			<h2 id="orientation-popup-title" class="mb-2 pr-8 font-heading text-2xl font-[650]">
				{popup.title}
			</h2>
			<p id="orientation-popup-text" class="mb-6" style="color: var(--maia-muted);">
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
