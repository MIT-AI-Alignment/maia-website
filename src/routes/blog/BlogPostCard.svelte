<script lang="ts">
    export let post: {
        title: string;
        date: string;
        author: string;
        summary: string;
        imageUrl?: string;
        tags: string[];
    };
</script>

<article class="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700/50">
    {#if post.imageUrl}
        <img src={post.imageUrl} alt={post.title} class="w-full h-48 object-cover" />
    {/if}
    <div class="p-6">
        <h3 class="text-xl font-heading font-[550] mb-2 text-white">{post.title}</h3>
        <div class="flex items-center text-sm text-gray-400 mb-3">
            <span class="mr-3">
                <i class="fa-regular fa-calendar mr-1"></i>
                {post.date}
            </span>
            <span>
                <i class="fa-regular fa-user mr-1"></i>
                {post.author}
            </span>
        </div>
        <p class="text-gray-300 mb-4">{post.summary}</p>
        <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
                <span class="px-2 py-1 bg-maia_blue/20 text-maia_blue-light rounded-full text-sm">
                    {tag}
                </span>
            {/each}
        </div>
    </div>
</article> 