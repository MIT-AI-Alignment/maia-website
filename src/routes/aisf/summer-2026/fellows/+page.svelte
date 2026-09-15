<script>
 import PageLayout from '../../../../components/PageLayout.svelte';
 import fellows from '$lib/fellowsSummer2026.json';
 let query = '';
 $: shown = fellows.filter(f => f.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
</script>
<PageLayout title="Summer 2026 AISF Fellows" heroTitle="Summer 2026 AISF Fellows" description="Fellows who completed MAIA’s Summer 2026 AI Safety Fundamentals program.">
 <p class="intro">Celebrating the fellows who completed our Summer 2026 AI Safety Fundamentals program.</p>
 <label for="fellow-search">Find a fellow</label>
 <input id="fellow-search" type="search" bind:value={query} placeholder="Search by name" />
 <p aria-live="polite">{shown.length} {shown.length === 1 ? 'fellow' : 'fellows'}</p>
 <div id="fellows" class="fellows scroll-mt-28">
 {#each shown as fellow}<article><img src={fellow.imageUrl} alt={fellow.name} width="240" height="240" loading="lazy" /><h2>{fellow.name}</h2></article>{/each}
 </div>
 {#if !shown.length}<p>No names match your search.</p>{/if}
 <p class="footer"><strong>For corrections or to remove your name or photo, email <a href="mailto:maia-exec@mit.edu">maia-exec@mit.edu</a>.</strong></p>
</PageLayout>
<style>
 .intro { max-width:48rem; margin:0 0 1rem; } label {display:block;margin-top:2rem;} input {background:var(--maia-nav-surface);color:var(--maia-ink);padding:.8rem 1rem;width:min(100%,28rem);margin:.5rem 0 1rem;} input:focus-visible{outline:2px solid var(--maia-accent);} .fellows {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2rem 1.5rem;margin-top:2rem;} img {width:100%;height:auto;aspect-ratio:1;object-fit:cover;} h2 {font-size:1rem;margin:.75rem 0;} .footer{margin-top:3rem;} @media(min-width:700px){.fellows{grid-template-columns:repeat(4,minmax(0,1fr));}}
</style>
