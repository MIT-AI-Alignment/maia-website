<script lang="ts">
	import BlogPostCard from './BlogPostCard.svelte';
    import { POSTS } from '$lib/blogPosts';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each POSTS as post}
		<BlogPostCard {post} />
	{/each}
</div> 