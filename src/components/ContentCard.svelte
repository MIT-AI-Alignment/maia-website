<script lang="ts">
    export let bgColor: string = "bg-slate-900/40";
    export let darkBgColor: string = "bg-slate-900/40";
</script>

<div class={`${bgColor} dark:${darkBgColor} rounded-lg p-6 shadow-sm text-gray-800 dark:text-white`}>
    <slot />
</div> 