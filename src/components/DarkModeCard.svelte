<script lang="ts">
    export let transparent = false;
</script>

<div class="rounded-lg p-6 shadow-sm text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 bg-white dark-card {transparent ? 'transparent-bg' : ''}">
    <slot />
</div>

<style>
    .dark-card {
        background-color: white;
    }
    
    :global(.dark) .dark-card {
        background-color: #1e293b !important;
    }
    
    :global(.dark) .transparent-bg {
        background-color: transparent !important;
    }
</style> 