<script lang="ts">
	import Link from './Link.svelte';
	export let href: string = '..';
</script>

<div class="pt-[400px]">
	<Link {href}>
		<i class="fa-solid fa-arrow-left mr-2"></i>Back
	</Link>
</div>
