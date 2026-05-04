<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import PageLayout from '../../components/PageLayout.svelte';
	import type { DropdownItem } from '$lib/stores/navigation';
	import {
		PARTS,
		ALL_RESOURCES,
		PILLAR_LABELS,
		type Pillar,
		type Tag,
		type Resource
	} from '$lib/careersData';

	const PILLAR_KEYS = Object.keys(PILLAR_LABELS) as Pillar[];

	const careersPageNavItems: DropdownItem[] = PARTS.map((p) => ({
		label: p.navLabel,
		href: `/careers#${p.id}`
	}));

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
	let hashReady = false;

	function applyHashFromLocation() {
		if (!browser) return;
		const raw = window.location.hash.slice(1);
		if (raw && PARTS.some((p) => p.id === raw)) {
			activeTabId = raw;
		}
	}

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

	// If the active tab has no matches under current filters, move to the first tab that does
	$: if (anyFilter && browser) {
		const cur = tabCounts.find((t) => t.id === activeTabId);
		if (cur && cur.count === 0) {
			const next = tabCounts.find((t) => t.count > 0);
			if (next) {
				activeTabId = next.id;
				if (hashReady) {
					history.replaceState(null, '', `#${next.id}`);
				}
			}
		}
	}

	function selectTab(id: string) {
		activeTabId = id;
		if (browser && hashReady) {
			history.replaceState(null, '', `#${id}`);
		}
		scrollTabPanelIntoView();
	}

	function scrollTabPanelIntoView() {
		if (!browser) return;
		const el = document.getElementById('careers-guide-panel');
		if (el) {
			const y = el.getBoundingClientRect().top + window.scrollY - 120;
			window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
		}
	}

	function sectionOptionLabel(part: (typeof PARTS)[number], count: number) {
		const base = part.navLabel;
		return anyFilter ? `${base} (${count})` : base;
	}

	onMount(() => {
		applyHashFromLocation();
		hashReady = true;
		const onHash = () => applyHashFromLocation();
		window.addEventListener('hashchange', onHash);
		return () => window.removeEventListener('hashchange', onHash);
	});
</script>

<PageLayout
	title="Careers in AI Safety"
	description="Document-style guide to AI safety careers, fellowships, courses, organizations, conferences, and funding for undergraduates and early-career people — with a Harvard/MIT lens."
	heroIcon="fa-solid fa-compass"
	heroTitle="Careers & Opportunities"
	centerTitle={true}
	pageNavItems={careersPageNavItems}
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
		<div class="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:items-start">
			<aside
				class="mb-6 lg:mb-0 lg:sticky lg:top-[4.5rem] lg:self-start space-y-3 rounded-lg border border-border-light dark:border-maia-800 bg-surface-light-elevated dark:bg-maia-950/50 p-3 shadow-sm max-lg:max-h-[min(85vh,calc(100vh-5rem))] max-lg:overflow-y-auto overscroll-contain lg:max-h-[calc(100vh-5.5rem)] lg:overflow-y-auto"
			>
				<div>
					<label
						for="careers-search"
						class="block text-[10px] uppercase tracking-wide font-semibold mb-1.5 text-maia-950/60 dark:text-maia-300"
					>
						Search
					</label>
					<div class="relative w-full">
						<i
							class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-maia-500/70 text-sm pointer-events-none"
						></i>
						<input
							id="careers-search"
							type="search"
							bind:value={query}
							placeholder="Search listings…"
							class="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-border-light dark:border-maia-800
								bg-surface-light dark:bg-surface-dark text-maia-950 dark:text-maia-100
								placeholder:text-maia-950/40 dark:placeholder:text-maia-300/50
								focus:outline-none focus:ring-2 focus:ring-maia-500/50 focus:border-maia-500"
						/>
					</div>
				</div>

				<div class="flex flex-wrap items-center gap-2">
					<button
						type="button"
						aria-expanded={filtersOpen}
						aria-controls="careers-filters-panel"
						on:click={() => (filtersOpen = !filtersOpen)}
						class="inline-flex flex-1 min-w-0 items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-md border border-border-light dark:border-maia-800 bg-surface-light dark:bg-surface-dark hover:bg-maia-50 dark:hover:bg-maia-950/50 sm:flex-none sm:justify-start"
					>
						<i class="fa-solid fa-filter text-xs text-maia-500"></i>
						<span>Filters</span>
						{#if selectedPillars.length + selectedTags.length > 0}
							<span class="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 rounded-full bg-maia-800 text-white dark:bg-maia-600 text-[10px] font-semibold">
								{selectedPillars.length + selectedTags.length}
							</span>
						{/if}
						<i class="fa-solid {filtersOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px] opacity-70"></i>
					</button>
					<span class="text-[11px] text-maia-950/60 dark:text-maia-300 whitespace-nowrap">
						{totalMatched}/{ALL_RESOURCES.length}
					</span>
					{#if anyFilter}
						<button
							type="button"
							on:click={clearAll}
							class="text-[11px] text-maia-800 dark:text-maia-300 hover:text-maia-700 dark:hover:text-maia-200 inline-flex items-center ml-auto"
						>
							<i class="fa-solid fa-xmark mr-1"></i>Clear
						</button>
					{/if}
				</div>

				<div
					id="careers-filters-panel"
					hidden={!filtersOpen}
					class="pt-2 border-t border-border-light dark:border-maia-800 space-y-3"
				>
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
									class="inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium border transition-all max-w-full
										{active
											? `${PILLAR_LABELS[p].color} text-maia-950 dark:text-maia-50 border-transparent ring-2 ring-maia-500/35 shadow-sm`
											: 'bg-transparent text-maia-950 dark:text-maia-200 border-border-light dark:border-maia-800 hover:bg-maia-50 dark:hover:bg-maia-950/50'}"
								>
									<i class="{PILLAR_LABELS[p].icon} mr-1 text-[9px] shrink-0"></i>
									<span class="truncate">{PILLAR_LABELS[p].label}</span>
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

				<div class="pt-3 mt-1 border-t border-border-light dark:border-maia-800">
					<label
						for="careers-section-select"
						class="block text-[10px] uppercase tracking-wide font-semibold mb-1.5 text-maia-950/60 dark:text-maia-300 lg:hidden"
					>
						Section
					</label>
					<p
						class="hidden lg:block text-[10px] uppercase tracking-wide font-semibold text-maia-950/60 dark:text-maia-300 mb-1.5"
					>
						Section
					</p>
					<div class="relative lg:hidden">
						<i
							class="fa-solid fa-layer-group pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-maia-500/80 text-sm"
						></i>
						<select
							id="careers-section-select"
							bind:value={activeTabId}
							on:change={() => selectTab(activeTabId)}
							class="w-full appearance-none pl-10 pr-10 py-2.5 text-sm font-medium rounded-md border border-border-light dark:border-maia-800
								bg-surface-light dark:bg-surface-dark text-maia-950 dark:text-maia-100
								focus:outline-none focus:ring-2 focus:ring-maia-500/50 focus:border-maia-500"
						>
							{#each PARTS as part}
								{@const tc = tabCounts.find((t) => t.id === part.id)}
								{@const count = tc?.count ?? 0}
								{@const empty = anyFilter && count === 0}
								<option value={part.id} disabled={empty}>
									{sectionOptionLabel(part, count)}
								</option>
							{/each}
						</select>
						<i
							class="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-maia-500/70"
						></i>
					</div>
				</div>

				<nav
					class="hidden lg:flex flex-col gap-0.5 -mx-0.5 px-0.5 mt-0.5"
					aria-label="Career guide sections"
				>
					{#each PARTS as part}
						{@const tc = tabCounts.find((t) => t.id === part.id)}
						{@const count = tc?.count ?? 0}
						{@const isActive = activeTabId === part.id}
						{@const empty = anyFilter && count === 0}
						<button
							type="button"
							id="careers-tab-{part.id}"
							aria-current={isActive ? 'true' : undefined}
							title={empty ? 'No listings match your filters in this section' : undefined}
							on:click={() => selectTab(part.id)}
							disabled={empty}
							class="flex w-full items-start gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors
								{isActive
									? 'bg-maia-800/10 dark:bg-maia-500/15 text-maia-900 dark:text-maia-100 ring-1 ring-maia-500/35'
									: 'text-maia-950/80 dark:text-maia-300 hover:bg-maia-50 dark:hover:bg-maia-950/50'}
								{empty ? 'opacity-40 cursor-not-allowed' : ''}"
						>
							<i class="{part.icon} mt-0.5 text-xs shrink-0 {isActive ? 'text-maia-600 dark:text-maia-400' : 'text-maia-500/70'}"></i>
							<span class="min-w-0 flex-1 leading-snug">
								{part.title.replace(/^Part [IVX]+ — /, '').replace(/^Start Here — /, '')}
							</span>
							{#if anyFilter}
								<span
									class="shrink-0 inline-flex min-w-[1.25rem] justify-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold
										{isActive
											? 'bg-maia-800 text-white dark:bg-maia-600'
											: 'bg-maia-100 text-maia-900 dark:bg-maia-900/60 dark:text-maia-200'}"
								>
									{count}
								</span>
							{/if}
						</button>
					{/each}
				</nav>
			</aside>

		<!-- Listings -->
		<div
			id="careers-guide-panel"
			role="region"
			aria-label={activePart?.title
				? `Guide listings: ${activePart.title}`
				: 'Career guide listings'}
			class="scroll-mt-32"
		>
			{#if !activePart || activePart.sections.length === 0}
				<div
					class="text-center py-16 rounded-lg bg-surface-light-elevated dark:bg-maia-950/70 border border-border-light dark:border-maia-800"
				>
					<i class="fa-solid fa-magnifying-glass text-3xl text-maia-500 mb-3"></i>
					<p class="text-lg font-heading mb-2">No items match in this section</p>
					<p class="text-sm text-maia-950/60 dark:text-maia-300 mb-4">
						{#if anyFilter}
							Try a different section or
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
						<section class="resource-section">
							<h3 class="doc-h3 resource-section-title">{section.title}</h3>
							{#if section.intro}
								<p class="doc-intro">{section.intro}</p>
							{/if}
							<ul class="resource-card-list">
								{#each section.items as r}
									<li
										class="rounded-lg p-4 md:p-5 bg-surface-light-elevated dark:bg-maia-950/70 border border-border-light dark:border-maia-800 shadow-sm dark:shadow-black/20"
									>
										<div class="flex flex-col gap-2">
											<a
												href={r.url}
												target="_blank"
												rel="noopener noreferrer"
												class="doc-link text-base md:text-lg leading-snug inline-flex items-start gap-1.5"
											>
												<span>{r.name}</span>
												<i class="fa-solid fa-arrow-up-right-from-square mt-1 text-[10px] opacity-60 shrink-0"></i>
											</a>
											<p class="doc-desc !mb-0 text-sm md:text-[15px] leading-relaxed">{r.description}</p>
											<div class="flex flex-wrap items-center gap-2 gap-y-1.5 pt-0.5">
												{#if r.deadline}
													<span class="doc-deadline !ml-0">
														<i class="fa-regular fa-calendar mr-1"></i>{r.deadline}
													</span>
												{/if}
												{#if r.tags && r.tags.length > 0}
													<span class="doc-tags !ml-0">
														{#each r.tags as t}
															<span class="doc-tag {t === 'Top Pick' ? 'doc-tag-top' : ''}">
																{#if t === 'Top Pick'}
																	<i class="fa-solid fa-star mr-0.5 text-[8px]"></i>
																{/if}
																{t}
															</span>
														{/each}
													</span>
												{/if}
											</div>
										</div>
									</li>
								{/each}
							</ul>
						</section>
					{/each}
				</section>
			{/if}

			<div class="flex justify-center pt-8 pb-2">
				<button
					type="button"
					on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					class="text-sm text-maia-800 dark:text-maia-300 hover:text-maia-700 dark:hover:text-maia-200 inline-flex items-center"
				>
					<i class="fa-solid fa-arrow-up mr-2"></i>Back to top
				</button>
			</div>
		</div>
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

	:global(.doc-h3) {
		@apply text-lg md:text-xl font-heading font-[550] mt-2 mb-3 text-maia-800 dark:text-maia-200;
	}

	:global(.resource-section) {
		@apply mt-10 first:mt-6;
	}

	:global(.resource-section-title) {
		@apply pb-3 mb-4 border-b border-border-light/70 dark:border-maia-800/70;
	}

	:global(.resource-card-list) {
		@apply list-none p-0 m-0 space-y-3;
	}

	:global(.doc-intro) {
		@apply mb-4 text-maia-950/75 dark:text-maia-200/85 italic;
	}

	:global(.doc-link) {
		@apply font-semibold text-maia-900 dark:text-maia-100 hover:text-maia-700 dark:hover:text-maia-300 transition-colors no-underline;
	}

	:global(.doc-link:hover) {
		@apply underline decoration-maia-500/40;
	}

	:global(.doc-desc) {
		@apply text-maia-950/80 dark:text-maia-200;
	}

	:global(.doc-deadline) {
		@apply inline-flex items-center text-xs text-maia-700 dark:text-maia-300;
		white-space: nowrap;
	}

	:global(.doc-tags) {
		@apply inline-flex flex-wrap gap-1 align-middle;
	}

	:global(.doc-tag) {
		@apply inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-maia-100 text-maia-900 dark:bg-maia-900/60 dark:text-maia-200;
	}

	:global(.doc-tag-top) {
		@apply bg-maia-800 text-white dark:bg-maia-600;
	}

</style>
