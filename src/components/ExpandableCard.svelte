<script lang="ts">
	export let featured = false;
	export let open = false;
</script>

<details
	{open}
	class="group rounded-xl overflow-hidden {featured
		? 'border-2 border-maia-500 bg-maia-500/5'
		: 'border border-border-light dark:border-border-dark'}"
>
	<summary
		class="flex items-center gap-3 p-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden transition {featured
			? 'hover:bg-maia-500/10'
			: 'hover:bg-maia-500/5'}"
	>
		<i
			class="fas fa-chevron-right text-sm text-maia-600 dark:text-maia-400 transition-transform group-open:rotate-90"
			aria-hidden="true"
		></i>
		<slot name="summary" />
	</summary>
	<div class="px-5 pb-5 pt-1 pl-12">
		<slot />
	</div>
</details>
