<script lang="ts">
	export let icon: string;
	export let iconColor = 'purple-500';
	export let text: string;
</script>

<h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
	<i
		class={icon}
		class:text-red-500={iconColor === 'red-500'}
		class:text-blue-500={iconColor === 'blue-500'}
		class:text-green-500={iconColor === 'green-500'}
		class:text-purple-500={iconColor === 'purple-500'}
		class:text-amber-500={iconColor === 'amber-500'}
	></i>
	<span>{text}</span>
</h2>
