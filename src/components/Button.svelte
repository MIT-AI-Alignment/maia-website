<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let icon = '';
	export let type: 'primary' | 'secondary' | 'outline' | 'text' | 'purple' | 'fuchsia' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let href: string | undefined = undefined;
	export let disabled = false;
	export let fullWidth = false;
	export let ariaLabel: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	// Determine classes based on props
	$: typeClasses = {
		primary: 'bg-maia-800 hover:bg-maia-700 text-white',
		secondary: 'bg-maia-600 hover:bg-maia-500 text-white',
		outline:
			'bg-transparent border border-maia-950/50 text-maia-950 dark:text-maia-100 hover:bg-maia-50 dark:hover:bg-maia-950/50 dark:border-maia-300/50',
		text: 'bg-transparent text-maia-950 dark:text-maia-100 hover:bg-maia-50 dark:hover:bg-maia-950/50',
		purple:
			'bg-maia-800 hover:bg-maia-700 text-white dark:bg-maia-700 dark:text-white dark:hover:bg-maia-600',
		fuchsia:
			'bg-maia-600 hover:bg-maia-500 text-white dark:bg-maia-600 dark:text-white dark:hover:bg-maia-500'
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
	{disabled}
	aria-label={ariaLabel || text}
	class="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200
		{typeClasses} {sizeClasses} {widthClass} 
		{disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
		active:scale-95 focus:outline-none focus:ring-2 focus:ring-maia_blue/50"
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
