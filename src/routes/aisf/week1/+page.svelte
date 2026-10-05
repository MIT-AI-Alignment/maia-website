<script lang="ts">
	import { onMount } from 'svelte';
	import PageLayout from '../../../components/PageLayout.svelte';
	import curriculum from '$lib/fall2026Curriculum.json';
	const week = curriculum.weeks.find(w => w.week === 1)!;
	type ReadingItem = { title: string; article: number; sources: { title: string; url: string }[]; meta?: string; note?: string };
	const groups = week.groups as { name: string; items: ReadingItem[] }[];
	const articles = curriculum.articles;
	let selected = -1;
	let read: number[] = [];
	$: article = selected >= 0 ? articles[selected] : null;
	function route() {
		const match = window.location.hash.match(/^#reading-(\d+)$/);
		selected = match && articles[Number(match[1])] ? Number(match[1]) : -1;
	}
	function navigate(index: number) {
		selected = index;
		window.history.pushState({}, '', index < 0 ? '#overview' : `#reading-${index}`);
		window.scrollTo(0, 0);
	}
	function markRead() {
		read = read.includes(selected) ? read.filter(i => i !== selected) : [...read, selected];
		try { localStorage.setItem('aisf-fall-2026-read', JSON.stringify(read)); } catch {}
	}
	function section(event: MouseEvent, id: string) {
		event.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
	function figures(node: HTMLElement, html: string) {
		let cleanups: (() => void)[] = [];
		function install() {
			cleanups.forEach(fn => fn()); cleanups = [];
			node.querySelectorAll('img').forEach(img => {
				img.tabIndex = 0; img.setAttribute('role', 'button'); img.setAttribute('aria-label', 'Enlarge figure');
				const toggle = () => { img.classList.toggle('expanded'); img.setAttribute('aria-label', img.classList.contains('expanded') ? 'Close enlarged figure' : 'Enlarge figure'); };
				const key = (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
				img.addEventListener('click', toggle); img.addEventListener('keydown', key);
				cleanups.push(() => { img.removeEventListener('click', toggle); img.removeEventListener('keydown', key); });
			});
		}
		install();
		return { update() { queueMicrotask(install); }, destroy() { cleanups.forEach(fn => fn()); } };
	}
	onMount(() => {
		route();
		try { read = JSON.parse(localStorage.getItem('aisf-fall-2026-read') || '[]'); } catch {}
		window.addEventListener('popstate', route);
		window.addEventListener('hashchange', route);
		const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') document.querySelectorAll('img.expanded').forEach(img => img.classList.remove('expanded')); };
		window.addEventListener('keydown', escape);
		return () => { window.removeEventListener('popstate', route); window.removeEventListener('hashchange', route); window.removeEventListener('keydown', escape); };
	});
</script>

<PageLayout title="AISF Fall 2026 · Week 1" description="The trajectory of AI: five readings from the Fall 2026 AISF reading packet, with original sources and an integrated reader." heroTitle={article ? article.title : 'The trajectory of AI'}>
	<svelte:fragment slot="hero-content"><p class="text-maia-950/70 dark:text-maia-200">Fall 2026 · Week 1{article ? ` · Reading ${selected + 1} of ${articles.length}` : ''}</p></svelte:fragment>
	<a class="back-link" href="/aisf/">← All weeks</a>
	<div class="packet-layout">
		<aside aria-label="Week 1 readings">
			<nav>
				<a href="#overview" class:active={selected < 0} on:click|preventDefault={() => navigate(-1)}>Overview</a>
				{#each articles as item, index}
					<a href={`#reading-${index}`} class:active={index === selected} on:click|preventDefault={() => navigate(index)}>{item.title}{read.includes(index) ? ' ✓' : ''}</a>
				{/each}
			</nav>
			<a class="packet-link" href={curriculum.packet} target="_blank" rel="noopener">Reading packet in Google Docs ↗</a>
			{#if article && article.toc.length}
				<div class="contents"><h2>In this reading</h2><nav>{#each article.toc as item}<a href={`#${item.id}`} on:click={event => section(event, item.id)}>{item.title}</a>{/each}</nav></div>
			{/if}
		</aside>
		<section class="packet-content" id="overview">
			{#if article}
				<div class="article-header">
					<p>{article.byline}</p>
					<div class="links">{#each article.sources as source}<a href={source.url} target="_blank" rel="noopener">{source.title} ↗</a>{/each}<a href={article.packet} target="_blank" rel="noopener">Google Doc ↗</a><button on:click={markRead} aria-pressed={read.includes(selected)}>{read.includes(selected) ? 'Read ✓' : 'Mark as read'}</button></div>
					<p class="selection-note">Selection from the Fall 2026 reading packet.</p>
				</div>
				{#key selected}<div class="article-body" use:figures={article.html}>{@html article.html}</div>{/key}
				<div class="reading-end"><button on:click={() => navigate(selected === articles.length - 1 ? -1 : selected + 1)}>{selected === articles.length - 1 ? 'Back to Week 1 readings' : `Next: ${articles[selected + 1].title} →`}</button></div>
			{:else}
				<p class="overview">{week.description}</p>
				<div class="links"><a href={curriculum.packet} target="_blank" rel="noopener">Reading packet in Google Docs ↗</a></div>
				{#each groups as group}
					<h2>{group.name}</h2>
					{#each group.items as item}
						<div class="reading-row" id={`reading-${item.article}`}>
							<h3><a href={`#reading-${item.article}`} on:click|preventDefault={() => navigate(item.article)}>{item.title}</a></h3>
							{#if item.meta}<p class="reading-meta">{item.meta}</p>{/if}
							{#if item.note}<p class="reading-meta">{item.note}</p>{/if}
							<div class="links"><a href={`#reading-${item.article}`} on:click|preventDefault={() => navigate(item.article)}>Read here →</a>{#each item.sources as source}<a href={source.url} target="_blank" rel="noopener">{source.title} ↗</a>{/each}<a href={curriculum.packet} target="_blank" rel="noopener">Google Doc ↗</a></div>
						</div>
					{/each}
				{/each}
			{/if}
		</section>
	</div>
</PageLayout>

<style>
	.back-link { display:inline-block; margin-bottom:2rem; color:var(--maia-accent); }
	.packet-layout { display:grid; grid-template-columns:235px minmax(0,1fr); gap:3rem; }
	aside { position:sticky; top:6rem; align-self:start; max-height:calc(100vh - 7rem); overflow:auto; }
	nav { display:grid; gap:.25rem; }
	nav a { padding:.6rem .75rem; border-left:1px solid var(--maia-border); font-size:.85rem; line-height:1.6; color:var(--maia-muted); text-decoration:none; }
	nav a:hover, nav a.active { color:var(--maia-ink); background:var(--maia-card); }
	nav a.active { border-left:2px solid var(--maia-accent); }
	.packet-link { display:block; margin:1.5rem .75rem; font-size:.85rem; }
	.contents { border-top:1px solid var(--maia-border); padding-top:1.5rem; }
	.contents h2 { font-size:.9rem; margin:0 .75rem 1rem; }
	.packet-content { min-width:0; }
	.overview { line-height:1.85; margin-bottom:1.5rem; }
	.packet-content h2 { font-size:1.5rem; margin:2rem 0 0; padding-bottom:1rem; border-bottom:1px solid var(--maia-border); }
	.reading-row { padding:1.5rem 0; border-bottom:1px solid var(--maia-border); }
	.reading-row h3 { font-size:1.125rem; margin:0 0 .6rem; }
	.reading-meta, .article-header p { font-size:.85rem; line-height:1.7; color:var(--maia-muted); }
	.links { display:flex; gap:1rem; align-items:center; flex-wrap:wrap; font-size:.85rem; margin-top:1rem; }
	.links a, .packet-link { color:var(--maia-accent); text-decoration:underline; text-underline-offset:4px; }
	button { border:1px solid var(--maia-border); border-radius:5px; padding:.45rem .7rem; }
	button:hover { background:var(--maia-card); }
	.article-header { padding-bottom:1.5rem; border-bottom:1px solid var(--maia-border); margin-bottom:2rem; }
	.selection-note { margin-top:1.25rem; }
	.article-body { font:400 17px/1.8 'Manrope',sans-serif; overflow-wrap:anywhere; }
	.article-body :global(p) { margin-bottom:1.25rem; }
	.article-body :global(h2), .article-body :global(h3) { font-family:inherit; font-weight:500; line-height:1.5; scroll-margin-top:6rem; }
	.article-body :global(h2) { font-size:1.55rem; margin:2.5rem 0 1.25rem; }
	.article-body :global(h3) { font-size:1.25rem; margin:2rem 0 1rem; }
	.article-body :global(h2 strong), .article-body :global(h3 strong) { font-weight:inherit; }
	.article-body :global(img) { display:block; max-width:100%; height:auto; margin:1.5rem auto; background:white; cursor:zoom-in; }
	.article-body :global(img.expanded) { position:fixed; inset:0; margin:auto; width:auto; max-width:96vw; max-height:96vh; object-fit:contain; z-index:100; box-shadow:0 0 0 100vmax #100a18ee; cursor:zoom-out; }
	.article-body :global(a) { color:var(--maia-accent); text-decoration:underline; text-underline-offset:4px; }
	.article-body :global(.list-item) { padding-left:1.1rem; position:relative; }
	.article-body :global(.list-item)::before { content:'•'; position:absolute; left:0; }
	.article-body :global(.table-scroll) { overflow:auto; max-width:100%; margin:1.5rem 0; }
	.article-body :global(table) { border-collapse:collapse; width:100%; font-size:.85em; }
	.article-body :global(td) { padding:.75rem; border:1px solid var(--maia-border); vertical-align:top; }
	.reading-end { border-top:1px solid var(--maia-border); padding-top:1.5rem; margin-top:2rem; }
	@media(max-width:760px) { .packet-layout { display:block; } aside { position:static; max-height:none; margin-bottom:2rem; } nav { display:flex; overflow:auto; } nav a { min-width:150px; max-width:210px; flex-shrink:0; } .contents { display:none; } .packet-link { margin-left:0; } }
	@media print { aside,.back-link,.links,.reading-end { display:none; } .packet-layout { display:block; } .article-body { font-size:11pt; line-height:1.35; } }
</style>
