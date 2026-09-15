<script lang="ts">
 import { page } from '$app/stores';
 import { browser } from '$app/environment';
 import PageLayout from './PageLayout.svelte';

 export let view: 'list' | 'semester';
 $: term = browser ? $page.url.searchParams.get('term') : null;
 $: query = term ? `?${new URLSearchParams({ term })}` : '';
</script>

<PageLayout
 title="Events"
 description="Upcoming events, ongoing programs, and the MAIA event archive."
 heroTitle="Events"
 heroIcon="fa-regular fa-calendar"
>
 <p slot="hero-content" class="intro">Workshops, talks, socials, and ongoing programs at MAIA.</p>
 {#if view === 'semester'}
  <div class="toolbar">
   <a class="back-link" href={`/events/${query}`}><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Event list</a>
   <slot name="toolbar" />
  </div>
 {/if}
 <div class="event-content"><slot /></div>
</PageLayout>

<style>
 .event-content { min-width: 0; }
 .event-content :global([data-category='programs']) { --category-color: #7650af; }
 .event-content :global([data-category='workshops']) { --category-color: #35766d; }
 .event-content :global([data-category='talks']) { --category-color: #557ca9; }
 .event-content :global([data-category='socials']) { --category-color: #b7714f; }
 .event-content :global([data-category='tabling']) { --category-color: #997942; }
 .event-content :global([data-category='other']) { --category-color: #7a7385; }
 :global(.dark) .event-content :global([data-category='programs']) { --category-color: #ad85e0; }
 :global(.dark) .event-content :global([data-category='workshops']) { --category-color: #70b9ac; }
 :global(.dark) .event-content :global([data-category='talks']) { --category-color: #8fb6e2; }
 :global(.dark) .event-content :global([data-category='socials']) { --category-color: #e6a889; }
 :global(.dark) .event-content :global([data-category='tabling']) { --category-color: #d5b47c; }
 :global(.dark) .event-content :global([data-category='other']) { --category-color: #b8afc4; }
 .intro { color: var(--maia-muted); font-size: 1.05rem; line-height: 1.7; }
 .toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid var(--maia-border); }
 .back-link { display: inline-flex; align-items: center; gap: .5rem; min-height: 44px; color: var(--maia-muted); font-size: .85rem; }
 .back-link:hover { color: var(--maia-ink); }
 .back-link:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
</style>
