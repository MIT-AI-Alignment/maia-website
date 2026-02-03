<script lang="ts">
	export let id: string | undefined = undefined;
	export let title = '';
	export let icon = '';
</script>

<section 
	id={id} 
	class="mb-16 rounded-lg p-6 bg-surface-light-elevated dark:bg-maia-950/70 shadow-sm dark:shadow-maia border border-border-light dark:border-maia-800"
>
	{#if title}
		<div class="flex items-center mb-6">
			<div class="w-12 h-12 rounded-full bg-maia-500/10 dark:bg-maia-500/20 flex items-center justify-center mr-4">
				<i class="{icon} text-2xl text-maia-500"></i>
			</div>
			<h2 class="text-2xl md:text-3xl font-heading font-[550]">
				{title}
			</h2>
		</div>
	{/if}
	
	<div class="mt-4 prose dark:prose-invert max-w-none">
		<slot />
	</div>
</section> 