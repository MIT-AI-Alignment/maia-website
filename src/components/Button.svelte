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
		primary: 'bg-maia_blue hover:bg-maia_blue-600 text-white',
		secondary: 'bg-maia_teal hover:bg-maia_teal-600 text-white',
		outline: 'bg-transparent border border-maia_blue text-maia_blue hover:bg-maia_blue/10',
		text: 'bg-transparent text-maia_blue hover:bg-maia_blue/10',
		purple: 'bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-600 dark:text-white dark:hover:bg-purple-500',
		fuchsia: 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white dark:bg-fuchsia-600 dark:text-white dark:hover:bg-fuchsia-500'
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
		<span>{text}</span>
	{/if}
	<slot />
</svelte:element>

<style>
	/* Add any additional styles here */
</style> 