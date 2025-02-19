<script lang="ts">
    import IconChevronDown from '~icons/ph/caret-down-bold';
    
    export let expanded: boolean | undefined = undefined;
    export let text: string;
    export let expandedText: string | undefined = undefined;
    export let showChevron = false;
</script>

<button
    class="mt-8 px-4 py-2 text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 border border-purple-600 dark:border-purple-300 rounded-lg transition-colors flex items-center gap-2"
    on:click
>
    <span>{expanded !== undefined ? (expanded ? expandedText ?? text : text) : text}</span>
    {#if showChevron}
        <IconChevronDown class="transform transition-transform {expanded ? 'rotate-180' : ''}" />
    {/if}
</button> 