<script lang="ts">
    export let title: string;
    export let description: string;
    export let link: string;
    export let icon: string = "fa-solid fa-building-columns";
    export let imageSrc: string | undefined = undefined;
</script>

<div class="mt-4 border rounded-lg border-border-light dark:border-border-dark hover:bg-surface-light-alt dark:hover:bg-surface-dark-alt transition-colors overflow-hidden">
    <a href={link} class="block">
        <div class="flex">
            {#if imageSrc}
                <div class="w-1/2 relative">
                    <img src={imageSrc} alt={title} class="h-full w-full object-cover" />
                </div>
            {/if}
            <div class="flex-grow p-6">
                <h3 class="text-xl font-bold mb-2">
                    <i class={icon + " mr-2"}></i>
                    {title}
                </h3>
                <p class="text-maia-950/70 dark:text-maia-100">
                    {description}
                </p>
                <span class="text-maia-800 dark:text-maia-400 mt-2 inline-block">Learn more →</span>
            </div>
        </div>
    </a>
</div> 