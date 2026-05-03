<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import {
		PARTS,
		ALL_RESOURCES,
		PILLAR_LABELS,
		type Pillar,
		type Tag,
		type Resource
	} from '$lib/careersData';

	const PILLAR_KEYS = Object.keys(PILLAR_LABELS) as Pillar[];

	// Discover all tags actually present, in a stable display order
	const ALL_TAGS: Tag[] = (() => {
		const seen = new Set<Tag>();
		for (const r of ALL_RESOURCES) for (const t of r.tags ?? []) seen.add(t);
		const preferred: Tag[] = [
			'Top Pick',
			'Undergrad-friendly',
			'Boston',
			'Harvard',
			'MIT',
			'Remote',
			'Paid',
			'US',
			'UK',
			'EU',
			'APAC',
			'Global',
			'Alignment',
			'Interpretability',
			'Control',
			'Evaluations',
			'Adversarial',
			'Strategy',
			'Bio',
			'Compute Gov',
			'Law',
			'Comms',
			'Organizing'
		];
		return preferred.filter((t) => seen.has(t));
	})();

	// Filter state
	let query = '';
	let selectedPillars: Pillar[] = [];
	let selectedTags: Tag[] = [];
	let filtersOpen = false;

	// Tab state — default to first part ("Start Here")
	let activeTabId: string = PARTS[0].id;

	function togglePillar(p: Pillar) {
		selectedPillars = selectedPillars.includes(p)
			? selectedPillars.filter((x) => x !== p)
			: [...selectedPillars, p];
	}
	function toggleTag(t: Tag) {
		selectedTags = selectedTags.includes(t)
			? selectedTags.filter((x) => x !== t)
			: [...selectedTags, t];
	}
	function clearAll() {
		selectedPillars = [];
		selectedTags = [];
		query = '';
	}

	function matchesResource(
		r: Resource,
		q: string,
		pillars: Pillar[],
		tags: Tag[]
	): boolean {
		if (pillars.length > 0 && !r.pillars.some((p) => pillars.includes(p))) return false;
		if (tags.length > 0) {
			const rt = r.tags ?? [];
			for (const need of tags) if (!rt.includes(need)) return false;
		}
		if (q.trim()) {
			const needle = q.trim().toLowerCase();
			const hay = (r.name + ' ' + r.description + ' ' + (r.tags ?? []).join(' ')).toLowerCase();
			if (!hay.includes(needle)) return false;
		}
		return true;
	}

	// Each part with its sections filtered to matching items only
	$: filteredParts = PARTS.map((part) => ({
		...part,
		sections: part.sections
			.map((s) => ({
				...s,
				items: s.items.filter((r) => matchesResource(r, query, selectedPillars, selectedTags))
			}))
			.filter((s) => s.items.length > 0)
	}));

	// Per-part match counts for the tab badges
	$: tabCounts = filteredParts.map((p) => ({
		id: p.id,
		count: p.sections.reduce((n, s) => n + s.items.length, 0)
	}));

	$: activePart = filteredParts.find((p) => p.id === activeTabId) ?? filteredParts[0];

	$: totalMatched = tabCounts.reduce((n, t) => n + t.count, 0);

	$: anyFilter = query.trim().length > 0 || selectedPillars.length > 0 || selectedTags.length > 0;

	function selectTab(id: string) {
		activeTabId = id;
		// scroll to top of content area
		const el = document.getElementById('tab-content');
		if (el) {
			const y = el.getBoundingClientRect().top + window.scrollY - 100;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}
</script>

<PageLayout
	title="Careers in AI Safety"
	description="Document-style guide to AI safety careers, fellowships, courses, organizations, conferences, and funding for undergraduates and early-career people — with a Harvard/MIT lens."
	heroIcon="fa-solid fa-compass"
	heroTitle="Careers & Opportunities"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-base mb-3 max-w-3xl mx-auto text-maia-950/70 dark:text-maia-200 italic">
			A 2026 guide for Harvard, MIT, and broader undergraduate / early-career audiences
		</p>
		<p class="text-center text-sm mb-8 max-w-3xl mx-auto text-maia-950/50 dark:text-maia-300">
			Last updated: May 2026 — please verify deadlines and program details on official pages before
			applying.
		</p>
	</svelte:fragment>

	<article class="doc">
		<!-- TL;DR -->
		<section class="mb-8 doc-callout">
			<h2 class="doc-h2 !mt-0">TL;DR — Your First Six Months</h2>
			<ol class="doc-ol">
				<li>
					<strong>Take a structured intro course.</strong> BlueDot Impact's AGI Strategy or Technical
					AI Safety Course; or join AISST or MAIA's intro fellowship at Harvard/MIT.
				</li>
				<li>
					<strong>Get an advising call.</strong> 80,000 Hours (free, 1-1) is the strongest default. AI
					Safety Quest provides volunteer advising.
				</li>
				<li>
					<strong>Apply to one fellowship that stretches you.</strong> SPAR is the lowest-friction
					starting point; MATS, Pivotal, ERA, GovAI, Anthropic Fellows, IAPS, LawAI, Astra, and
					Talos are the major full-time options.
				</li>
				<li>
					<strong>Subscribe to 4–6 newsletters</strong> so the field becomes legible — Transformer,
					Don't Worry About the Vase, Import AI, Hyperdimensional, the AI Safety Newsletter, Rising
					Tide, AXRP for podcasts.
				</li>
				<li>
					<strong>Show up at one event.</strong> EAG Boston, Bay Area, or London; AIES; ControlConf and
					FAR.AI's alignment workshops are technical-heavy.
				</li>
			</ol>
		</section>

		<!-- Filter bar -->
		<div
			class="mb-4 px-4 py-3 rounded-lg border border-border-light dark:border-maia-800 bg-surface-light-elevated dark:bg-maia-950/70"
		>
			<div class="flex items-center gap-2 flex-wrap">
				<div class="relative flex-1 min-w-[220px]">
					<i
						class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-maia-500/70 text-sm"
					></i>
					<input
						type="search"
						bind:value={query}
						placeholder="Search the guide…"
						class="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-border-light dark:border-maia-800
							bg-surface-light dark:bg-surface-dark text-maia-950 dark:text-maia-100
							placeholder:text-maia-950/40 dark:placeholder:text-maia-300/50
							focus:outline-none focus:ring-2 focus:ring-maia-500/50 focus:border-maia-500"
					/>
				</div>
				<button
					type="button"
					on:click={() => (filtersOpen = !filtersOpen)}
					class="inline-flex items-center px-3 py-2 text-sm rounded-md border border-border-light dark:border-maia-800 bg-surface-light dark:bg-surface-dark hover:bg-maia-50 dark:hover:bg-maia-950/50"
				>
					<i class="fa-solid fa-filter mr-2 text-xs text-maia-500"></i>
					Filters
					{#if selectedPillars.length + selectedTags.length > 0}
						<span class="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-maia-800 text-white dark:bg-maia-600 text-[10px] font-semibold">
							{selectedPillars.length + selectedTags.length}
						</span>
					{/if}
					<i class="fa-solid {filtersOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2 text-[10px]"></i>
				</button>
				<span class="text-xs text-maia-950/60 dark:text-maia-300">
					{totalMatched} of {ALL_RESOURCES.length}
				</span>
				{#if anyFilter}
					<button
						type="button"
						on:click={clearAll}
						class="text-xs text-maia-800 dark:text-maia-300 hover:text-maia-700 dark:hover:text-maia-200 inline-flex items-center"
					>
						<i class="fa-solid fa-xmark mr-1"></i>Clear
					</button>
				{/if}
			</div>

			{#if filtersOpen}
				<div class="mt-3 pt-3 border-t border-border-light dark:border-maia-800 space-y-3">
					<div>
						<div class="text-[10px] uppercase tracking-wide font-semibold mb-1.5 text-maia-950/60 dark:text-maia-300">
							Pillar
						</div>
						<div class="flex flex-wrap gap-1.5">
							{#each PILLAR_KEYS as p}
								{@const active = selectedPillars.includes(p)}
								<button
									type="button"
									on:click={() => togglePillar(p)}
									class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border transition-colors
										{active
											? 'bg-maia-800 text-white border-maia-800 dark:bg-maia-600 dark:border-maia-600'
											: 'bg-transparent text-maia-950 dark:text-maia-200 border-border-light dark:border-maia-800 hover:bg-maia-50 dark:hover:bg-maia-950/50'}"
								>
									<i class="{PILLAR_LABELS[p].icon} mr-1.5 text-[9px]"></i>
									{PILLAR_LABELS[p].label}
								</button>
							{/each}
						</div>
					</div>
					<div>
						<div class="text-[10px] uppercase tracking-wide font-semibold mb-1.5 text-maia-950/60 dark:text-maia-300">
							Tags
						</div>
						<div class="flex flex-wrap gap-1.5">
							{#each ALL_TAGS as t}
								{@const active = selectedTags.includes(t)}
								<button
									type="button"
									on:click={() => toggleTag(t)}
									class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border transition-colors
										{active
											? 'bg-maia-700 text-white border-maia-700 dark:bg-maia-500 dark:border-maia-500'
											: 'bg-transparent text-maia-950/80 dark:text-maia-300 border-border-light dark:border-maia-800 hover:bg-maia-50 dark:hover:bg-maia-950/50'}"
								>
									{t}
								</button>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Tabs -->
		<div
			role="tablist"
			aria-label="Career guide sections"
			class="flex gap-1 overflow-x-auto border-b border-border-light dark:border-maia-800 mb-6 -mx-2 px-2 pb-px"
		>
			{#each PARTS as part}
				{@const tc = tabCounts.find((t) => t.id === part.id)}
				{@const count = tc?.count ?? 0}
				{@const isActive = activeTabId === part.id}
				{@const empty = anyFilter && count === 0}
				<button
					type="button"
					role="tab"
					aria-selected={isActive}
					aria-controls="tab-content"
					on:click={() => selectTab(part.id)}
					disabled={empty}
					class="group flex-shrink-0 inline-flex items-center px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap
						{isActive
							? 'border-maia-500 text-maia-800 dark:text-maia-300'
							: 'border-transparent text-maia-950/70 dark:text-maia-300/80 hover:text-maia-800 dark:hover:text-maia-300 hover:border-maia-500/40'}
						{empty ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}"
				>
					<i class="{part.icon} mr-2 text-xs {isActive ? 'text-maia-500' : 'text-maia-500/70'}"></i>
					<span>{part.title.replace(/^Part [IVX]+ — /, '').replace(/^Start Here — /, '')}</span>
					{#if anyFilter}
						<span
							class="ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-semibold
								{isActive
									? 'bg-maia-800 text-white dark:bg-maia-600'
									: 'bg-maia-100 text-maia-900 dark:bg-maia-900/60 dark:text-maia-200'}"
						>
							{count}
						</span>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Tab content -->
		<div id="tab-content" role="tabpanel" class="scroll-mt-24">
			{#if !activePart || activePart.sections.length === 0}
				<div
					class="text-center py-16 rounded-lg bg-surface-light-elevated dark:bg-maia-950/70 border border-border-light dark:border-maia-800"
				>
					<i class="fa-solid fa-magnifying-glass text-3xl text-maia-500 mb-3"></i>
					<p class="text-lg font-heading mb-2">No items match in this tab</p>
					<p class="text-sm text-maia-950/60 dark:text-maia-300 mb-4">
						{#if anyFilter}
							Try a different tab or
							<button
								type="button"
								on:click={clearAll}
								class="text-maia-800 dark:text-maia-300 hover:text-maia-700 dark:hover:text-maia-200 font-medium underline"
							>
								clear your filters
							</button>.
						{:else}
							This section is empty.
						{/if}
					</p>
				</div>
			{:else}
				<section class="mb-8">
					<div class="flex items-center mb-3 pb-3 border-b-2 border-maia-500/40 dark:border-maia-500/30">
						<i class="{activePart.icon} text-2xl text-maia-500 mr-3"></i>
						<h2 class="text-2xl md:text-3xl font-heading font-[550] text-maia-900 dark:text-maia-100">
							{activePart.title}
						</h2>
					</div>
					{#if activePart.intro}
						<p class="doc-intro">{activePart.intro}</p>
					{/if}

					{#each activePart.sections as section}
						<section class="mt-8">
							<h3 class="doc-h3">{section.title}</h3>
							{#if section.intro}
								<p class="doc-intro">{section.intro}</p>
							{/if}
							<ul class="doc-list">
								{#each section.items as r}
									<li class="doc-item">
										<a
											href={r.url}
											target="_blank"
											rel="noopener noreferrer"
											class="doc-link"
										>
											{r.name}
											<i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px] opacity-60"></i>
										</a>
										<span class="doc-em-dash">—</span>
										<span class="doc-desc">{r.description}</span>
										{#if r.deadline}
											<span class="doc-deadline">
												<i class="fa-regular fa-calendar mr-1"></i>{r.deadline}
											</span>
										{/if}
										{#if r.tags && r.tags.length > 0}
											<span class="doc-tags">
												{#each r.tags as t}
													<span
														class="doc-tag {t === 'Top Pick' ? 'doc-tag-top' : ''}"
													>
														{#if t === 'Top Pick'}
															<i class="fa-solid fa-star mr-0.5 text-[8px]"></i>
														{/if}
														{t}
													</span>
												{/each}
											</span>
										{/if}
									</li>
								{/each}
							</ul>
						</section>
					{/each}
				</section>
			{/if}
		</div>

		<!-- Caveats -->
		<section class="mt-12 mb-6 doc-callout-muted">
			<h2 class="doc-h2 !mt-0">Caveats</h2>
			<ul class="doc-ul">
				<li>
					<strong>Things change fast.</strong> Programs are renamed, merged, or shut down regularly
					(US AISI → CAISI; Open Philanthropy → Coefficient Giving; SERI MATS → MATS; HAIST →
					AISST). Always check the official program page before assuming a deadline or stipend is
					current.
				</li>
				<li>
					<strong>Fellowship acceptance rates are 1–5%</strong> at the most selective programs (MATS,
					Pivotal, Astra, Anthropic Fellows, Horizon). Apply to several. Acceptance is heavily
					influenced by signal/fit, not just credentials.
				</li>
				<li>
					<strong>The field has unresolved disagreements.</strong> P(doom) estimates range from ~10%
					to >90%; views on open-weights, racing dynamics, regulation, and the relative priority of
					alignment vs. governance differ substantially.
				</li>
				<li>
					<strong>Last note on agency:</strong> most of the people now running the orgs in this guide
					were undergrads or recent grads ~5 years ago. The ecosystem rewards initiative more than
					credentials. If you can't find the program that fits you, apply to start one — Pathfinder,
					Manifund, EAIF, and LTFF will fund well-scoped pilot projects.
				</li>
			</ul>
		</section>

		<div class="flex justify-center mt-8 mb-4">
			<button
				type="button"
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="text-sm text-maia-800 dark:text-maia-300 hover:text-maia-700 dark:hover:text-maia-200 inline-flex items-center"
			>
				<i class="fa-solid fa-arrow-up mr-2"></i>Back to top
			</button>
		</div>
	</article>
</PageLayout>

<style lang="postcss">
	/* Document typography */
	:global(.doc) {
		@apply text-[15px] leading-[1.7] text-maia-950 dark:text-maia-100;
	}

	:global(.doc p) {
		@apply mb-4;
	}

	:global(.doc-h2) {
		@apply text-2xl md:text-3xl font-heading font-[550] mt-10 mb-3 text-maia-900 dark:text-maia-100;
	}

	:global(.doc-h3) {
		@apply text-lg md:text-xl font-heading font-[550] mt-2 mb-3 text-maia-800 dark:text-maia-200;
	}

	:global(.doc-intro) {
		@apply mb-4 text-maia-950/75 dark:text-maia-200/85 italic;
	}

	:global(.doc-ol) {
		@apply list-decimal pl-6 space-y-1.5 mb-4;
	}

	:global(.doc-ul) {
		@apply list-disc pl-6 space-y-2 mb-4;
	}

	:global(.doc-list) {
		@apply list-none pl-0 mb-2 space-y-2;
	}

	:global(.doc-item) {
		@apply pl-5 -indent-5 leading-snug py-1.5 border-b border-border-light/50 dark:border-maia-800/50;
	}

	:global(.doc-item::before) {
		content: '•';
		@apply text-maia-500 mr-2 inline-block w-3;
	}

	:global(.doc-link) {
		@apply font-semibold text-maia-900 dark:text-maia-100 hover:text-maia-700 dark:hover:text-maia-300 transition-colors no-underline;
	}

	:global(.doc-link:hover) {
		@apply underline decoration-maia-500/40;
	}

	:global(.doc-em-dash) {
		@apply mx-1.5 text-maia-950/40 dark:text-maia-300/40;
	}

	:global(.doc-desc) {
		@apply text-maia-950/80 dark:text-maia-200;
	}

	:global(.doc-deadline) {
		@apply ml-2 inline-flex items-center text-xs text-maia-700 dark:text-maia-300;
		white-space: nowrap;
	}

	:global(.doc-tags) {
		@apply ml-2 inline-flex flex-wrap gap-1 align-middle;
	}

	:global(.doc-tag) {
		@apply inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-maia-100 text-maia-900 dark:bg-maia-900/60 dark:text-maia-200;
	}

	:global(.doc-tag-top) {
		@apply bg-maia-800 text-white dark:bg-maia-600;
	}

	:global(.doc-callout) {
		@apply rounded-lg p-5 md:p-6 bg-maia-50 dark:bg-maia-950/40 border-l-4 border-maia-500;
	}

	:global(.doc-callout-muted) {
		@apply rounded-lg p-5 md:p-6 bg-surface-light-alt dark:bg-maia-950/40 border-l-4 border-maia-500/40;
	}
</style>
