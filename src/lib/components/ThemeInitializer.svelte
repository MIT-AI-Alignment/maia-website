<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  
  onMount(() => {
    if (browser) {
      theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
  });
</script>
