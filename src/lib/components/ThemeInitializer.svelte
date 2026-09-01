<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  
  onMount(() => {
    if (browser) {
      theme.set('light');
      document.documentElement.classList.remove('dark');
    }
  });
</script>
