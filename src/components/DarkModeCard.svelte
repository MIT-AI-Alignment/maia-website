<script lang="ts">
    export let transparent = false;
</script>

<div class="rounded-lg p-6 shadow-sm text-maia-950 dark:text-maia-50 border border-border-light dark:border-border-dark bg-surface-light-elevated dark:bg-surface-dark-elevated {transparent ? 'dark:!bg-transparent' : ''}">
    <slot />
</div> 