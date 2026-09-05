<script lang="ts">
	import { RESEARCH_PAPERS } from '$lib/researchShowcase';

	const dateFormat = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	});
	const formatDate = (date: string) =>
		date.length === 4 ? date : dateFormat.format(new Date(`${date}T12:00:00Z`));
</script>

<p>
	Selected work coauthored by MAIA members and alumni. These projects were conducted across their
	respective research groups and institutions.
</p>

<div class="research-grid not-prose">
	{#each RESEARCH_PAPERS as paper (paper.link)}
		<article>
			<h3><a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3>
			<time datetime={paper.date}>{formatDate(paper.date)}</time>
			<p>{paper.description}</p>
			<p class="authors">MAIA coauthors: {paper.authors.join(', ')}</p>
		</article>
	{/each}
</div>

<style>
	.research-grid {
		display: grid;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}
	article {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		background: var(--maia-nav-surface);
	}
	h3 {
		margin: 0 0 0.5rem;
		font-size: 1.125rem;
		font-weight: 650;
		line-height: 1.4;
	}
	p {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--maia-ink);
	}
	.authors {
		margin: auto 0 0;
		padding-top: 0.5rem;
		font-size: 0.8125rem;
	}
	time {
		margin-bottom: 1rem;
		font-size: 0.8125rem;
		color: var(--maia-ink);
	}
	a {
		color: var(--maia-accent);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	a:focus-visible {
		outline: 2px solid var(--maia-accent);
		outline-offset: 4px;
	}
	@media (min-width: 640px) {
		.research-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
