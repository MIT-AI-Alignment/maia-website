<script lang="ts">
	export let altText: string;
	export let imgSrc: string;
	export let tags: { title: string; color: string }[];
	export let title: string;
	export let authors: string[];
	export let link: string;
	export let textSize: 'sm' | 'md' | 'lg' = 'md';

	const imageModules = import.meta.glob(
		'../../images/papers/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, any>;
</script>

<a href={link}>
	<div class="flex flex-col p-1">
		<enhanced:img src={imageModules[imgSrc].default} alt={altText} class="dark:invert" />
		<h4 class="mt-3 mb-1 text-{textSize} font-bold">{title}</h4>
		{#each authors as author}
			<p class="text-{textSize === 'lg' ? 'md' : 'sm'} text-gray-600 dark:text-stone-400">{author}</p>
		{/each}
		<div class="mt-3 flex flex-wrap gap-1">
			{#each tags as tag}
				<span class="px-2 py-1 rounded-full text-{textSize === 'lg' ? 'sm' : 'xs'} {tag.color} dark:text-white text-black"
					>{tag.title}</span
				>
			{/each}
		</div>
	</div>
</a>
