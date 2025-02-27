<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme, toggleTheme } from '$lib/stores/theme';
  
  // Local reactive variable for the toggle state
  $: darkMode = $theme === 'dark';
</script>

<button
  type="button"
  class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
         transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
         {darkMode ? 'bg-purple-600' : 'bg-gray-200'}"
  role="switch"
  aria-checked={darkMode}
  on:click={toggleTheme}
>
  <span class="sr-only">Toggle dark mode</span>
  <span
    class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
           {darkMode ? 'translate-x-5' : 'translate-x-0'}"
  >
    <span
      class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
             {darkMode ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in'}"
      aria-hidden="true"
    >
      <i class="fas fa-sun text-xs text-amber-500"></i>
    </span>
    <span
      class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity
             {darkMode ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out'}"
      aria-hidden="true"
    >
      <i class="fas fa-moon text-xs text-indigo-700"></i>
    </span>
  </span>
</button> 