<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
	export let width = "100%";
	export let height: string | undefined = undefined;
	export let showShadow = true;
</script>

<div class="image-with-caption {showShadow ? 'shadow-lg' : ''}">
	<div class="rounded-lg overflow-hidden" style="width: {width};">
		<img 
			{src} 
			{alt} 
			class="w-full object-cover" 
			style="{height ? `height: ${height};` : ''}" 
		/>
		<div class="bg-gray-100 dark:bg-gray-800 p-2 border-t border-gray-200 dark:border-gray-700">
			<p class="text-xs text-center text-gray-700 dark:text-gray-300">
				{caption}
			</p>
		</div>
	</div>
</div> 