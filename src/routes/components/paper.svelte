<script lang="ts">
	export let altText: string;
	export let imgSrc: string;
	export let tags: readonly { readonly title: string; readonly color: string; }[] | { title: string; color: string; }[];
	export let title: string;
	export let authors: readonly string[] | string[];
	export let link: string;
	export let textSize: 'sm' | 'md' | 'lg' = 'md';

	// Using the URL format for public directory assets
	const imageModules = import.meta.glob(
		'/images/papers/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				url: true
			}
		}
	) as Record<string, { default: string }>;
</script>

<a href={link} target="_blank" rel="noopener noreferrer">
	<div class="paper-card flex flex-col p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-surface-light-alt dark:hover:bg-surface-dark-alt h-full border border-border-maia-subtle dark:border-border-maia-subtle-dark">
		<div class="overflow-hidden rounded-md mb-3">
			<img 
				src={imgSrc} 
				alt={altText} 
				class="dark:invert w-full h-auto transition-transform duration-300 hover:scale-105" 
			/>
		</div>
		<h4 class="mt-1 mb-2 text-{textSize} font-bold transition-colors duration-300 group-hover:text-maia-800 dark:group-hover:text-maia-400">{title}</h4>
		{#each authors as author}
			<p class="text-{textSize === 'lg' ? 'md' : 'sm'} text-maia-950/60 dark:text-maia-200">{author}</p>
		{/each}
		<div class="mt-3 flex flex-wrap gap-1">
			{#each tags as tag}
				<span class="px-2 py-1 rounded-full text-{textSize === 'lg' ? 'sm' : 'xs'} {tag.color} dark:text-white text-black transition-transform duration-300 hover:scale-105"
					>{tag.title}</span
				>
			{/each}
		</div>
	</div>
</a>

<style>
	@media (prefers-reduced-motion: reduce) {
		.paper-card {
			transition: none !important;
		}
		
		.paper-card img {
			transition: none !important;
		}
		
		.paper-card span {
			transition: none !important;
		}
	}
</style>
