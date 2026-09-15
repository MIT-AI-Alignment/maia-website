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
 <div class="toolbar">
  <nav class="view-switch" aria-label="Events view">
   <a href={`/events/${query}`} aria-current={view === 'list' ? 'page' : undefined} data-sveltekit-noscroll>
    <i class="fa-solid fa-list-ul" aria-hidden="true"></i> List
   </a>
   <a href={`/events/semester/${query}`} aria-current={view === 'semester' ? 'page' : undefined} data-sveltekit-noscroll>
    <i class="fa-solid fa-chart-gantt" aria-hidden="true"></i> Semester
   </a>
  </nav>
  <slot name="toolbar" />
 </div>
 <slot />
</PageLayout>

<style>
 .intro { color: var(--maia-muted); font-size: 1.05rem; line-height: 1.7; }
 .toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 2rem; margin-bottom: 2rem; border-bottom: 1px solid var(--maia-border); }
 .view-switch { display: inline-flex; flex-shrink: 0; gap: .25rem; background: var(--maia-nav-surface); border: 1px solid var(--maia-border); padding: .25rem; border-radius: .55rem; }
 .view-switch a { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; min-height: 44px; padding: .65rem .9rem; border-radius: .3rem; font-size: .85rem; color: var(--maia-muted); }
 .view-switch a[aria-current] { color: white; background: var(--maia-action); }
 .view-switch a:not([aria-current]):hover { color: var(--maia-ink); background: var(--maia-canvas); }
 .view-switch a:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
</style>
