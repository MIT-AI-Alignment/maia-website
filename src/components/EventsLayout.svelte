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
 <slot />
</PageLayout>

<style>
 .intro { color: var(--maia-muted); font-size: 1.05rem; line-height: 1.7; }
 .toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid var(--maia-border); }
 .back-link { display: inline-flex; align-items: center; gap: .5rem; min-height: 44px; color: var(--maia-muted); font-size: .85rem; }
 .back-link:hover { color: var(--maia-ink); }
 .back-link:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
</style>
