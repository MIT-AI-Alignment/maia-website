<script lang="ts">
 import { onMount } from 'svelte';
 import { goto } from '$app/navigation';
 import PageLayout from '../../../components/PageLayout.svelte';
 import { displayDateRange, displayTimeRange, localDate, type CalendarEvent } from '$lib/events';
 import {
  TIMELINE_CATEGORIES, availableSemesters, semesterForDate, semesterMonths,
  eventCategory, eventsInSemester, layoutTimeline, type TimelineCategory
 } from '$lib/semesterTimeline';

 export let data: { events: CalendarEvent[]; fetchedAt: string };
 const terms = availableSemesters(data.events);
 const currentTerm = semesterForDate(localDate(new Date(data.fetchedAt)));
 let termId = terms.find(term => term.id === currentTerm.id)?.id ?? terms[0]?.id ?? '';
 let enabled = new Set<TimelineCategory>(TIMELINE_CATEGORIES.map(category => category.id));
 let selectedId: string | null = null;

 onMount(() => {
  const requested = new URLSearchParams(window.location.search).get('term');
  if (terms.some(term => term.id === requested)) termId = requested!;
 });

 $: semester = terms.find(term => term.id === termId);
 $: months = semester ? semesterMonths(semester) : [];
 $: semesterEvents = semester ? eventsInSemester(data.events, semester) : [];
 $: rows = semester ? TIMELINE_CATEGORIES.filter(category => enabled.has(category.id)).map(category => {
  const events = semesterEvents.filter(event => eventCategory(event) === category.id);
  return { ...category, events, ...layoutTimeline(events, semester!) };
 }).filter(row => row.events.length) : [];
 $: visibleEvents = rows.flatMap(row => row.events);
 $: selectedEvent = visibleEvents.find(event => event.id === selectedId) ?? null;
 $: selectedCategory = selectedEvent ? TIMELINE_CATEGORIES.find(category => category.id === eventCategory(selectedEvent)) : null;
 $: programCount = semesterEvents.filter(event => event.kind === 'initiative').length;

 function toggleCategory(category: TimelineCategory) {
  const next = new Set(enabled);
  if (next.has(category)) next.delete(category);
  else next.add(category);
  enabled = next;
 }

 function changeTerm() {
  selectedId = null;
  goto(`?term=${termId}`, { replaceState: true, noScroll: true, keepFocus: true });
 }

 function eventLabel(event: CalendarEvent) {
  return `${event.title}. ${displayDateRange(event)}. ${displayTimeRange(event.start, event.end) ?? (event.kind === 'initiative' ? 'Program period' : 'All day')}`;
 }
</script>

<PageLayout
 title="Semester view"
 description="See how MAIA's programs, workshops, talks, and socials fit together across a semester."
 heroTitle="A semester at MAIA"
 heroIcon="fa-solid fa-chart-gantt"
>
 <div slot="hero-content" class="intro">
  <p>Ongoing programs and the moments in between. Explore how the semester fits together.</p>
 </div>

 <section class="semester-view" aria-label="Semester event explorer">
  <div class="topline">
   <nav class="view-switch" aria-label="Events view">
    <a href="/events/"><i class="fa-solid fa-list-ul" aria-hidden="true"></i> List</a>
    <a href="/events/semester/" aria-current="page"><i class="fa-solid fa-chart-gantt" aria-hidden="true"></i> Semester</a>
   </nav>
   {#if terms.length}
    <div class="term-control">
     <label for="semester-select">Semester</label>
     <select id="semester-select" bind:value={termId} on:change={changeTerm}>
      {#each terms as term}<option value={term.id}>{term.label}</option>{/each}
     </select>
    </div>
   {/if}
  </div>

  {#if semester}
   <div class="semester-heading">
    <div>
     <p class="eyebrow">The semester, together</p>
     <h2>{semester.label}</h2>
    </div>
    <p class="semester-count">{programCount} {programCount === 1 ? 'program' : 'programs'} <span aria-hidden="true">·</span> {semesterEvents.length - programCount} events</p>
   </div>

   <div class="filters" role="group" aria-label="Show event categories">
    {#each TIMELINE_CATEGORIES as category}
     {@const count = semesterEvents.filter(event => eventCategory(event) === category.id).length}
     <button type="button" class:enabled={enabled.has(category.id)} data-category={category.id}
      aria-pressed={enabled.has(category.id)} on:click={() => toggleCategory(category.id)}>
      <i class="fa-solid {category.icon}" aria-hidden="true"></i>
      {category.label}<span class="filter-count">{count}</span>
     </button>
    {/each}
   </div>

   <div class="timeline-help" id="timeline-help">
    <span><span class="bar-key" aria-hidden="true"></span> Bars show program periods.</span>
    <span><span class="dot-key" aria-hidden="true"></span> Dots mark event start dates.</span>
    <span>Choose an item for details.</span>
   </div>

   <!-- Keyboard users need to focus this region to scroll its horizontal timeline. -->
   <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
   <div class="timeline-scroll" tabindex="0" role="region" aria-label={`${semester.label} event timeline`} aria-describedby="timeline-help">
    <div class="timeline">
     <div class="timeline-row axis-row">
      <div class="category-label axis-label">{semester.label}</div>
      <div class="axis">
       {#each months as month}
        <span style={`left:${month.left * 100}%;width:${month.width * 100}%`}>{month.label}</span>
       {/each}
      </div>
     </div>
     {#each rows as row}
      <div class="timeline-row" data-category={row.id}>
       <div class="category-label">
        <i class="fa-solid {row.icon}" aria-hidden="true"></i>
        <span>{row.label}<small>{row.events.length} {row.id === 'programs' ? 'programs' : 'events'}</small></span>
       </div>
       <div class="track" style={`height:${Math.max(1, row.laneCount) * 58 + 22}px`}>
        <div class="month-lines" aria-hidden="true">
         {#each months as month}<span style={`left:${month.left * 100}%`}></span>{/each}
        </div>
        {#each row.items as item (item.event.id)}
         <button type="button"
          class="timeline-item" class:program={row.id === 'programs'} class:point={row.id !== 'programs'}
          class:selected={selectedId === item.event.id}
          style={`left:${item.left * 100}%;width:${item.width * 100}%;top:${item.lane * 58 + 10}px;--marker:${item.marker * 100}%`}
          aria-label={eventLabel(item.event)} aria-pressed={selectedId === item.event.id}
          aria-controls="event-detail" title={eventLabel(item.event)}
          on:click={() => selectedId = item.event.id}>
          {#if row.id === 'programs'}
           <span class="program-name">
            {#if item.continuesBefore}<i class="fa-solid fa-angle-left" aria-label="Continues from an earlier term"></i>{/if}
            {item.event.title}
            {#if item.continuesAfter}<i class="fa-solid fa-angle-right" aria-label="Continues into a later term"></i>{/if}
           </span>
          {:else}
           <span class="event-marker" aria-hidden="true"></span>
           <span class="event-name">{item.event.title}</span>
          {/if}
         </button>
        {/each}
       </div>
      </div>
     {/each}
     {#if !rows.length}<p class="empty-chart">No categories selected. Use the filters above to show events.</p>{/if}
    </div>
   </div>
   <p class="timeline-caption"><i class="fa-solid fa-arrows-left-right" aria-hidden="true"></i> Scroll the timeline horizontally on smaller screens. Event labels have extra space for readability; their width does not represent duration.</p>

   <section id="event-detail" class="event-detail" aria-label="Selected event details">
    {#if selectedEvent && selectedCategory}
     <div class="detail-heading">
      <div>
       <p class="eyebrow"><i class="fa-solid {selectedCategory.icon}" aria-hidden="true"></i> {selectedCategory.label}</p>
       <h3>{selectedEvent.title}</h3>
      </div>
      <button class="close-detail" type="button" aria-label="Clear event selection" on:click={() => selectedId = null}><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
     </div>
     <div class="detail-meta">
      <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> {displayDateRange(selectedEvent)}</span>
      {#if displayTimeRange(selectedEvent.start, selectedEvent.end)}
       <span><i class="fa-regular fa-clock" aria-hidden="true"></i> {displayTimeRange(selectedEvent.start, selectedEvent.end)} Eastern</span>
      {:else if selectedEvent.kind !== 'initiative'}<span>All day</span>{/if}
      {#if selectedEvent.location}<span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {selectedEvent.location}</span>{/if}
     </div>
     {#if selectedEvent.description}
      <p class="description">{#each selectedEvent.descriptionParts ?? [{ text: selectedEvent.description, href: undefined }] as part}{#if part.href}<a href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>{:else}{part.text}{/if}{/each}</p>
     {/if}
     {#if selectedEvent.url}<a class="event-link" href={selectedEvent.url}>View {selectedEvent.kind === 'initiative' ? 'program' : 'event'} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>{/if}
    {:else}
     <div class="detail-placeholder"><i class="fa-regular fa-calendar-check" aria-hidden="true"></i><div><h3>See something interesting?</h3><p>Select a program or event above to see its dates, description, and links.</p></div></div>
    {/if}
   </section>
   <span class="sr-only" role="status">{selectedEvent ? `Selected ${selectedEvent.title}. Details appear below the timeline.` : `${visibleEvents.length} items shown.`}</span>
  {:else}
   <div class="event-detail"><h2>No semesters to show yet</h2><p>Visit the <a href="/events/">event list</a> for the latest calendar information.</p></div>
  {/if}

  <p class="source-note">Times are Eastern (EST/EDT). Program bars show the available program periods, including month-level ranges where noted in the details. This view reflects the available calendar records and does not reconstruct missing sessions.</p>
 </section>
</PageLayout>

<style>
 .intro { max-width: 38rem; color: var(--maia-muted); font-size: 1.05rem; line-height: 1.7; }
 .semester-view { min-width: 0; }
 .topline { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 2rem; border-bottom: 1px solid var(--maia-border); }
 .view-switch { display: inline-flex; gap: .25rem; background: var(--maia-nav-surface); border: 1px solid var(--maia-border); padding: .25rem; border-radius: .55rem; }
 .view-switch a { display: inline-flex; align-items: center; gap: .5rem; padding: .65rem .9rem; border-radius: .3rem; font-size: .85rem; color: var(--maia-muted); }
 .view-switch a[aria-current] { color: white; background: var(--maia-action); }
 .term-control { display: flex; align-items: center; gap: .65rem; font-size: .85rem; }
 .term-control label { color: var(--maia-muted); }
 select { border: 1px solid var(--maia-border); background: var(--maia-nav-surface); color: var(--maia-ink); border-radius: .4rem; padding: .7rem 1rem; min-height: 44px; }
 .semester-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin: 2rem 0 1.35rem; }
 .eyebrow { font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; color: var(--maia-muted); margin-bottom: .55rem; }
 h2 { font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 650; letter-spacing: -.04em; }
 .semester-count { color: var(--maia-muted); font-size: .82rem; padding-bottom: .3rem; white-space: nowrap; }
 .semester-count span { margin: 0 .35rem; }
 .filters { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1.3rem; }
 .filters button { display: inline-flex; align-items: center; gap: .45rem; min-height: 44px; padding: .5rem .7rem; border: 1px solid var(--maia-border); border-radius: .4rem; font-size: .77rem; color: var(--maia-muted); opacity: .55; }
 .filters button.enabled { background: var(--maia-nav-surface); color: var(--maia-ink); opacity: 1; }
 .filters i { color: var(--category-color); font-size: .8rem; }
 .filter-count { color: var(--maia-muted); font-size: .7rem; padding-left: .15rem; }
 [data-category='programs'] { --category-color: #7650af; }
 [data-category='workshops'] { --category-color: #35766d; }
 [data-category='talks'] { --category-color: #557ca9; }
 [data-category='socials'] { --category-color: #b7714f; }
 [data-category='tabling'] { --category-color: #997942; }
 [data-category='other'] { --category-color: #7a7385; }
 :global(.dark) [data-category='programs'] { --category-color: #ad85e0; }
 :global(.dark) [data-category='workshops'] { --category-color: #70b9ac; }
 :global(.dark) [data-category='talks'] { --category-color: #8fb6e2; }
 :global(.dark) [data-category='socials'] { --category-color: #e6a889; }
 :global(.dark) [data-category='tabling'] { --category-color: #d5b47c; }
 :global(.dark) [data-category='other'] { --category-color: #b8afc4; }
 .timeline-help { display: flex; flex-wrap: wrap; gap: .5rem 1.25rem; color: var(--maia-muted); font-size: .72rem; margin-bottom: .8rem; }
 .timeline-help > span { display: inline-flex; align-items: center; gap: .4rem; }
 .bar-key { width: 1.4rem; height: .45rem; background: var(--maia-accent); border-radius: 2px; }
 .dot-key { width: .45rem; height: .45rem; background: var(--maia-muted); border-radius: 50%; }
 .timeline-scroll { width: 100%; max-width: 100%; overflow-x: auto; border: 1px solid var(--maia-border); border-radius: .65rem; background: var(--maia-nav-surface); scrollbar-width: thin; }
 .timeline { min-width: 930px; }
 .timeline-row { display: grid; grid-template-columns: 132px minmax(0, 1fr); border-bottom: 1px solid var(--maia-border); }
 .timeline-row:last-child { border-bottom: none; }
 .axis-row { height: 52px; }
 .category-label { position: sticky; left: 0; z-index: 2; display: flex; align-items: flex-start; gap: .65rem; padding: 1.15rem .9rem; border-right: 1px solid var(--maia-border); background: var(--maia-nav-surface); font-size: .77rem; font-weight: 600; }
 .category-label i { color: var(--category-color); padding-top: .15rem; width: 1rem; }
 .category-label small { display: block; color: var(--maia-muted); font-weight: 400; font-size: .65rem; margin-top: .25rem; }
 .axis-label { align-items: center; padding-top: 0; padding-bottom: 0; color: var(--maia-muted); font-size: .7rem; }
 .axis { position: relative; }
 .axis > span { position: absolute; height: 100%; display: flex; align-items: center; border-left: 1px solid var(--maia-border); padding-left: .8rem; font-size: .72rem; font-weight: 600; letter-spacing: .04em; color: var(--maia-muted); }
 .axis > span:first-child { border-left: 0; }
 .track { position: relative; min-width: 0; }
 .month-lines { position: absolute; inset: 0; pointer-events: none; }
 .month-lines span { position: absolute; top: 0; bottom: 0; border-left: 1px solid var(--maia-border); opacity: .55; }
 .month-lines span:first-child { border: 0; }
 .timeline-item { position: absolute; height: 44px; text-align: left; border-radius: .3rem; }
 .program { top: 0; background: color-mix(in srgb, var(--category-color) 17%, var(--maia-nav-surface)); color: var(--maia-ink); border: 1px solid color-mix(in srgb, var(--category-color) 55%, transparent); border-left: 3px solid var(--category-color); }
 .program-name { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: .55rem .7rem; font-size: .73rem; font-weight: 600; }
 .point { padding-top: 13px; }
 .event-marker { position: absolute; top: 4px; left: var(--marker); width: 9px; height: 9px; border-radius: 50%; background: var(--category-color); transform: translateX(-50%); box-shadow: 0 0 0 3px var(--maia-nav-surface); }
 .event-name { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: .25rem .4rem; border-radius: .25rem; font-size: .72rem; color: var(--maia-ink); background: var(--maia-nav-surface); border: 1px solid transparent; }
 .timeline-item:hover .event-name, .timeline-item.selected .event-name { border-color: var(--category-color); }
 .program:hover, .program.selected { background: color-mix(in srgb, var(--category-color) 28%, var(--maia-nav-surface)); }
 .timeline-item.selected { outline: 2px solid var(--category-color); outline-offset: 2px; }
 .timeline-caption { margin: .75rem 0 1.5rem; color: var(--maia-muted); font-size: .7rem; line-height: 1.65; }
 .timeline-caption i { margin-right: .25rem; }
 .empty-chart { padding: 2.5rem 1.5rem; color: var(--maia-muted); font-size: .9rem; }
 .event-detail { scroll-margin-top: 6rem; border: 1px solid var(--maia-border); border-radius: .65rem; padding: 1.4rem; background: var(--maia-nav-surface); }
 .detail-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
 .detail-heading h3 { font-size: 1.35rem; font-weight: 650; line-height: 1.35; letter-spacing: -.025em; }
 .eyebrow i { margin-right: .35rem; }
 .close-detail { flex-shrink: 0; width: 44px; height: 44px; color: var(--maia-muted); border-radius: .3rem; }
 .close-detail:hover { background: var(--maia-canvas); }
 .detail-meta { display: flex; flex-wrap: wrap; gap: .7rem 1.25rem; margin: 1rem 0; color: var(--maia-muted); font-size: .8rem; }
 .detail-meta span { display: inline-flex; align-items: baseline; gap: .45rem; }
 .description { font-size: .9rem; line-height: 1.85; white-space: pre-line; overflow-wrap: anywhere; max-width: 46rem; }
 .description a, .event-link { color: var(--maia-accent); text-decoration: underline; text-underline-offset: 3px; }
 .event-link { display: inline-flex; align-items: center; gap: .5rem; font-size: .82rem; font-weight: 600; margin-top: 1.15rem; min-height: 44px; }
 .detail-placeholder { display: flex; align-items: center; gap: 1rem; padding: .5rem 0; }
 .detail-placeholder > i { font-size: 1.6rem; color: var(--maia-accent); }
 .detail-placeholder h3 { font-weight: 600; font-size: .95rem; }
 .detail-placeholder p { font-size: .8rem; color: var(--maia-muted); margin-top: .3rem; line-height: 1.7; }
 .source-note { color: var(--maia-muted); font-size: .72rem; line-height: 1.8; margin-top: 1.25rem; }
 button:focus-visible, a:focus-visible, select:focus-visible, .timeline-scroll:focus-visible { outline: 3px solid var(--maia-accent); outline-offset: 3px; }
 @media (max-width: 540px) {
  .semester-heading { align-items: flex-start; flex-direction: column; gap: .6rem; }
  .term-control { width: 100%; justify-content: space-between; }
  .term-control select { flex: 1; max-width: 15rem; }
  .topline { gap: 1.2rem; }
  .event-detail { padding: 1.1rem; }
 }
</style>
