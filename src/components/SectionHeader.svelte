<script lang="ts">
    export let icon: string;
    export let iconColor = "maia";
    export let text: string;
</script>

<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
    <i class={icon} class:text-status-error={iconColor === "red-500"} class:text-status-info={iconColor === "blue-500"} class:text-status-success={iconColor === "green-500"} class:text-maia-800={iconColor === "maia" || iconColor === "purple-500"} class:text-status-warning={iconColor === "amber-500"}></i>
    <span>{text}</span>
</h2> 