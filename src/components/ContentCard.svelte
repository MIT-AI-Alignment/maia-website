<script lang="ts">
    export let bgColor = "bg-white";
    export let darkBgColor = "bg-gray-800";
    
    // Add a unique class to identify this component
    const uniqueClass = "content-card";
</script>

<div class="{bgColor} {uniqueClass} rounded-lg p-6 shadow-sm text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700">
    <slot />
</div>

<style>
    :global(.dark) .content-card {
        background-color: #1e293b !important;
    }
    
    :global(.dark) .content-card[class*="transparent"] {
        background-color: transparent !important;
    }
</style> 