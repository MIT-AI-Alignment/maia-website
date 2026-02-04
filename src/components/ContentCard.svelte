<script lang="ts">
    export let bgColor = "bg-surface-light-elevated";
    export let darkBgColor = "bg-surface-dark-elevated";
</script>

<div class="{bgColor} dark:{darkBgColor} rounded-lg p-6 shadow-sm text-maia-950 dark:text-maia-50 border border-border-light dark:border-border-dark">
    <slot />
</div> 