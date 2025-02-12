<script>
    export let name;
    export let position;
    export let imageUrl;
</script>

<div class="flex basis-full sm:basis-1/2 lg:basis-1/3 mb-8">
    <img src={imageUrl} alt={name} class="rounded-lg h-24 w-24">
    <div class="flex flex-col ml-4 mr-4">
        <p class="text-2xl font-heading font-[550]">{name}</p>
        <p class="text-sm text-purple-600 dark:text-purple-300 ">{position}</p>
    </div>
</div>