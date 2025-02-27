<script lang="ts">
    export const bgColor = "bg-white";
    export const darkBgColor = "bg-slate-900/40";
</script>

<div class={`${bgColor} dark:${darkBgColor} rounded-lg p-6 shadow-sm text-gray-800 dark:text-white border border-gray-100 dark:border-gray-800`}>
    <slot />
</div> 