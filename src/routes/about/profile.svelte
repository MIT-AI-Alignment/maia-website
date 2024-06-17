<script>
    export let name;
    export let position;
    export let imageUrl;
</script>

<div class="flex basis-1/2 md:basis-1/3 mb-8">
    <img src={imageUrl} alt={name} class="rounded-xl h-20 w-20">
    <div class="flex flex-col ml-4 mr-4">
        <p class="text-xl font-heading font-[550]">{name}</p>
        <p class="text-sm">{position}</p>
    </div>
</div>