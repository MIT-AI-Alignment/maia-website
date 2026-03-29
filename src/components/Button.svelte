<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let icon = '';
	export let type: 'primary' | 'secondary' | 'outline' | 'text' | 'purple' | 'fuchsia' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	export let disabled = false;
	export let fullWidth = false;
	export let ariaLabel: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	// Determine classes based on props
	// !text-white / hover:!text-white: beat :global(.prose a) when Button renders as <a> inside SectionContainer
	const solid =
		'bg-maia-800 hover:bg-maia-700 !text-white hover:!text-white dark:bg-maia-700 dark:!text-white dark:hover:bg-maia-600 dark:hover:!text-white';
	$: typeClasses = {
		primary: solid,
		secondary: solid,
		outline:
			'bg-transparent border border-maia-800 text-maia-800 dark:border-maia-400 dark:text-maia-300 hover:bg-maia-50 dark:hover:bg-maia-950/50',
		text: 'bg-transparent text-maia-800 dark:text-maia-300 hover:bg-maia-50 dark:hover:bg-maia-950/50',
		purple: solid,
		fuchsia: solid
	}[type];

	$: sizeClasses = {
		sm: 'text-sm py-1.5 px-3',
		md: 'text-base py-2 px-4',
		lg: 'text-lg py-2.5 px-5'
	}[size];

	$: widthClass = fullWidth ? 'w-full' : '';

	function handleClick(event: MouseEvent) {
		if (disabled) {
			event.preventDefault();
			return;
		}
		dispatch('click', event);
	}
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	target={href ? target : undefined}
	rel={href ? rel : undefined}
	{disabled}
	aria-label={ariaLabel || text}
	class="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200
		{typeClasses} {sizeClasses} {widthClass} 
		{disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
		active:scale-95 focus:outline-none focus:ring-2 focus:ring-maia-800/50 dark:focus:ring-maia-400/50"
	on:click={handleClick}
>
	{#if icon}
		<i class="{icon} {text ? 'mr-2' : ''}"></i>
	{/if}
	{#if text}
		<span class="text-current">{text}</span>
	{/if}
	<slot />
</svelte:element>

<style>
	/* Add any additional styles here */
</style>
