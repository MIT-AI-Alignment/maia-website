<script lang="ts">
 import type { CalendarEvent } from '$lib/events';
 import { getEventAttendance } from '$lib/eventAttendance';

 export let event: CalendarEvent;
 $: attendance = getEventAttendance(event);
 $: label = attendance ? `${attendance.approximate ? 'Approximately ' : ''}${attendance.count} attendees` : '';
</script>

{#if attendance}
 <span class="event-attendance" role="img" aria-label={label} title={label}>
  <i class="fa-solid fa-user-group" aria-hidden="true"></i>
  <span aria-hidden="true">{attendance.count}</span>
 </span>
{/if}

<style>
 .event-attendance { display: inline-flex; align-items: center; gap: .5rem; width: fit-content; color: var(--maia-muted); font-size: .85rem; font-variant-numeric: tabular-nums; }
 .event-attendance i { color: var(--maia-accent); font-size: .9rem; }
</style>
