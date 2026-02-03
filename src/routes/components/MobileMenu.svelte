<script lang="ts">
  import { slide } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  import NavItem from './NavItem.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import type { NavItem as NavItemType } from '$lib/stores/navigation';
  
  export let isOpen = false;
  export let activeDropdown: string | null = null;
  export let navItems: NavItemType[] = [];
  
  function setActiveDropdown(label: string | null) {
    activeDropdown = label;
  }
</script>

{#if isOpen}
  <div 
    transition:slide={{ duration: 200 }}
    class="fixed inset-x-0 top-[var(--navbar-height)] h-[calc(100vh-var(--navbar-height))] z-50 
           {$theme === 'dark' ? 'bg-surface-dark/95 border-border-dark' : 'bg-surface-light-elevated/95 border-border-light'}
           backdrop-blur-sm border-t overflow-y-auto pb-20"
  >
    <nav class="flex flex-col py-4">
      {#each navItems as item}
        <NavItem 
          {item} 
          isMobile={true} 
          {activeDropdown} 
          {setActiveDropdown} 
        />
      {/each}
      
      <div class="mt-6 px-6 pt-6 border-t {$theme === 'dark' ? 'border-border-dark' : 'border-border-light'}">
        <div class="flex items-center justify-between">
          <span class="text-sm {$theme === 'dark' ? 'text-maia-300' : 'text-maia-950/60'}">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </div>
{/if} 