<script lang="ts">
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  import { theme } from '$lib/stores/theme';
  
  export let item: {
    label: string;
    href: string;
    icon: string;
    dropdownItems?: Array<{ href: string; label: string }>;
  };
  
  export let isMobile = false;
  export let activeDropdown: string | null = null;
  export let setActiveDropdown: (label: string | null) => void;
  
  // Check if current page matches this nav item or any of its dropdown items
  $: isActive = $page.url.pathname === item.href || 
                (item.dropdownItems?.some(subItem => 
                  $page.url.pathname + $page.url.hash === subItem.href ||
                  $page.url.pathname === subItem.href.split('#')[0]
                ) ?? false);
  
  function handleMouseEnter() {
    if (!isMobile && item.dropdownItems) {
      setActiveDropdown(item.label);
    }
  }
  
  function handleMouseLeave(e: MouseEvent) {
    if (!isMobile && item.dropdownItems) {
      const relatedTarget = e.relatedTarget instanceof HTMLElement ? e.relatedTarget : null;
      const currentTarget = e.currentTarget as HTMLElement;
      if (relatedTarget && currentTarget && !currentTarget.contains(relatedTarget)) {
        setActiveDropdown(null);
      }
    }
  }
  
  function handleClick() {
    if (isMobile && item.dropdownItems) {
      if (activeDropdown === item.label) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(item.label);
      }
    }
  }
</script>

{#if isMobile}
  <div class="w-full">
    <button
      class="px-6 py-2 w-full text-left flex items-center justify-between transition-colors duration-200
             {isActive 
               ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30' 
               : 'hover:bg-purple-50 dark:hover:bg-purple-950/30'}"
      on:click={handleClick}
    >
      <div class="flex items-center gap-2">
        <i class="{item.icon} w-5 text-center"></i>
        <span>{item.label}</span>
      </div>
      {#if item.dropdownItems}
        <i class="fas fa-chevron-{activeDropdown === item.label ? 'up' : 'down'} text-xs opacity-70"></i>
      {/if}
    </button>
    
    {#if item.dropdownItems && activeDropdown === item.label}
      <div transition:slide={{ duration: 200 }} 
           class="{$theme === 'dark' ? 'bg-purple-950/20' : 'bg-purple-50/50'}">
        {#each item.dropdownItems as subItem}
          <a
            href={subItem.href}
            class="px-12 py-2 block w-full text-left transition-colors duration-200
                   {$page.url.pathname + $page.url.hash === subItem.href || $page.url.pathname === subItem.href.split('#')[0] 
                    ? 'text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-950/40' 
                    : 'hover:bg-purple-100/50 dark:hover:bg-purple-950/40'}"
          >
            {subItem.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <div
    class="relative group"
    role="button"
    tabindex="0"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    <a 
      class="px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2
             {isActive ? 'text-purple-600 dark:text-purple-400' : 
                        'hover:text-purple-600 dark:hover:text-purple-400'}" 
      href={item.href}
    >
      <i class="{item.icon} text-sm"></i>
      <span>{item.label}</span>
      {#if item.dropdownItems}
        <i class="fas fa-chevron-down text-xs opacity-70 group-hover:rotate-180 transition-transform duration-200"></i>
      {/if}
    </a>
    
    {#if item.dropdownItems && activeDropdown === item.label}
      <div
        transition:slide={{ duration: 150 }}
        class="absolute top-full left-0 bg-white dark:bg-maia_black shadow-lg dark:shadow-purple-900/20 
               rounded-md py-1 min-w-[200px] border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
        role="menu"
        tabindex="0"
        on:mouseleave={() => setActiveDropdown(null)}
      >
        {#each item.dropdownItems as subItem}
          <a
            href={subItem.href}
            class="block px-4 py-2 transition-colors duration-200
                   {$page.url.pathname + $page.url.hash === subItem.href || $page.url.pathname === subItem.href.split('#')[0] ? 
                    'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30' : 
                    'hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:text-purple-600 dark:hover:text-purple-400'}"
          >
            {subItem.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
{/if} 