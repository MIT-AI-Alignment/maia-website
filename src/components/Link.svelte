<script lang="ts">
    export let href: string;
</script>

<a
    {href}
    class="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
>
    <slot />
</a> 