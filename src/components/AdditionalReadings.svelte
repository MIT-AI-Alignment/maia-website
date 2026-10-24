<script lang="ts">
 export let readings: { title: string; url: string }[] = [];
</script>

{#if readings.length}
 <section id="additional-readings" aria-labelledby="additional-readings-title">
  <h2 id="additional-readings-title">Additional readings</h2>
  <ul>{#each readings as reading}<li><a href={reading.url} target="_blank" rel="noopener noreferrer"><span>{reading.title}</span></a></li>{/each}</ul>
 </section>
{/if}

<style>
 section { margin-top:3rem; scroll-margin-top:calc(var(--header-height, 6rem) + 1.5rem); }
 h2 { font-size:1.5rem; font-weight:500; padding-bottom:1rem; border-bottom:1px solid var(--maia-border); }
 ul { list-style:none; padding:0; margin:1rem 0; }
 li { border-bottom:1px solid var(--maia-border); line-height:1.65; }
 a { display:block; padding:1rem .25rem; font-weight:600; color:var(--maia-ink); text-decoration:none; overflow-wrap:anywhere; }
 a:hover { color:var(--maia-accent); background:color-mix(in srgb, var(--maia-accent) 6%, var(--maia-canvas)); }
 a:focus-visible { outline:2px solid var(--maia-accent); outline-offset:3px; }
</style>
