<script lang="ts">
	export let id: string | undefined = undefined;
	export let title = '';
	export let icon = '';
</script>

<section
	{id}
	class="mb-16 rounded-lg p-6 bg-white dark:bg-maia_black/70 shadow-sm dark:shadow-purple-500/5 border border-gray-100 dark:border-purple-800"
>
	{#if title}
		<div class="flex items-center mb-6">
			<div
				class="w-12 h-12 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mr-4"
			>
				<i class="{icon} text-2xl text-purple-600"></i>
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
