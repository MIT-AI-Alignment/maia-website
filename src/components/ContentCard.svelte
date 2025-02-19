<script lang="ts">
    export let bgColor: string = "gray-50";
    export let darkBgColor: string = "gray-800/50";
</script>

<div class="bg-{bgColor} dark:bg-{darkBgColor} rounded-lg p-6 shadow-sm">
    <slot />
</div> 