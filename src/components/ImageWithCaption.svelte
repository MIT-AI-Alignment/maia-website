<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
	export let width = "100%";
	export let showShadow = true;
</script>

<div class="image-with-caption {showShadow ? 'shadow-lg' : ''}">
	<div class="rounded-lg overflow-hidden">
		<img {src} {alt} class="w-full object-cover" style="width: {width};" />
		<div class="bg-gray-100 dark:bg-gray-800 p-2">
			<p class="text-xs text-center text-gray-700 dark:text-gray-300">
				{caption}
			</p>
		</div>
	</div>
</div> 