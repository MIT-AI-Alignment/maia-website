<script lang="ts">
  import { onMount } from 'svelte';
  import { initializeTheme } from '$lib/stores/theme';
  
  onMount(initializeTheme);
</script>
