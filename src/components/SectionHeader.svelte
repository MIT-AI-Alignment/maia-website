<script lang="ts">
    export let icon: string;
    export let iconColor: string = "purple-500";
    export let text: string;
</script>

<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
    <i class={`${icon} text-${iconColor}`}></i>
    <span>{text}</span>
</h2> 