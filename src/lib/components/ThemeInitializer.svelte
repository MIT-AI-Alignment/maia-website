<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  
  onMount(() => {
    if (browser) {
      const savedTheme = localStorage.getItem('theme');
      const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      theme.set(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }
  });
</script>
