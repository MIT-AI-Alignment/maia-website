<script lang="ts">
    export let href: string;
    export let className: string = "";
</script>

<a
    {href}
    class={`text-maia-800 hover:text-maia-700 dark:text-maia-400 dark:hover:text-maia-300 transition-colors ${className}`}
>
    <slot />
</a> 