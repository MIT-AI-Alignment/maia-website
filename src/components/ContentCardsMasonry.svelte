<script lang="ts">
    export let columns: "1" | "2" | "3" | "4" = "2";
    
    const columnClasses = {
        "1": "columns-1",
        "2": "columns-1 md:columns-2",
        "3": "columns-1 md:columns-2 lg:columns-3",
        "4": "columns-1 md:columns-2 lg:columns-4"
    };
</script>

<div class="{columnClasses[columns]} gap-8 [&>*]:mb-8 [&>*]:break-inside-avoid">
    <slot />
</div> 