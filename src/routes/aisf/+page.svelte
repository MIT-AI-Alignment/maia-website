<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';

	type Week = {
		number: number;
		title: string;
		description: string;
		available: boolean;
	};

	const weeks: Week[] = [
		{
			number: 0,
			title: 'Introduction to Machine Learning',
			description: 'Self-paced ML fundamentals: neural networks, transformers, and backpropagation.',
			available: true
		},
		{
			number: 1,
			title: 'Transformative AI and Current Trajectory',
			description: 'Scaling drivers, capability trends, and time-horizon forecasting toward AGI.',
			available: true
		},
		{
			number: 2,
			title: 'Outer Alignment',
			description: 'Reward misspecification, specification gaming, RLHF, and the gap between intended and operationalized goals.',
			available: true
		},
		{
			number: 3,
			title: 'Inner Alignment',
			description: 'Deception, reward tampering, alignment faking, and goal misgeneralization.',
			available: true
		},
		{
			number: 4,
			title: 'Threat Models',
			description: 'Instrumental convergence, power-seeking, bioterrorism, cyberwarfare, and gradual disempowerment.',
			available: true
		},
		{
			number: 5,
			title: 'Control & Scalable Oversight',
			description: 'AI control framework, resampling, monitoring, weak-to-strong generalization, and debate.',
			available: true
		},
		{
			number: 6,
			title: 'Interpretability & Evals',
			description: 'Attribution graphs, linear probes, capability and propensity evals, and alignment auditing.',
			available: true
		},
		{
			number: 7,
			title: 'AI Governance & Liability',
			description: 'Tort law, compute governance, US export controls on China, and the regulator\'s toolbox.',
			available: true
		},
		{
			number: 8,
			title: 'Careers in AI Safety',
			description: 'Career paths in AI safety, opportunities for MAIA members, and next steps.',
			available: false
		}
	];
</script>

<PageLayout
	title="AISF Curriculum"
	description="MAIA AI Safety Fundamentals (AISF) Spring 2026 curriculum — an 8-week reading group covering AI safety from foundations to policy."
	heroIcon="fa-solid fa-graduation-cap"
	heroTitle="AI Safety Fundamentals"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Spring 2026 Curriculum
		</p>
		<p class="text-center text-base mb-8 max-w-3xl mx-auto text-maia-950/60 dark:text-maia-300">
			An 8-week introductory reading group covering the current trajectory of AI, evidence for misalignment,
			threat models, technical safety approaches, and the AI policy landscape. Participants meet weekly in small
			sections facilitated by experienced TAs. No work is assigned outside of weekly meetings.
		</p>
	</svelte:fragment>

	<!-- Week Cards Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
		{#each weeks as week}
			{#if week.available}
				<a
					href="week{week.number}"
					class="group block rounded-lg p-6 bg-surface-light-elevated dark:bg-maia-950/70 shadow-sm dark:shadow-maia border border-border-light dark:border-maia-800 hover:border-maia-400 dark:hover:border-maia-600 transition-all hover:shadow-md"
				>
					<div class="flex items-center justify-between mb-3">
						<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-maia-500/10 dark:bg-maia-500/20 text-maia-600 dark:text-maia-400 font-heading font-bold text-lg">
							{week.number}
						</span>
						<i class="fa-solid fa-arrow-right text-maia-400 dark:text-maia-600 group-hover:text-maia-600 dark:group-hover:text-maia-400 transition-colors"></i>
					</div>
					<h3 class="text-lg font-heading font-[550] mb-2 text-maia-900 dark:text-maia-100 group-hover:text-maia-700 dark:group-hover:text-maia-300 transition-colors">
						{week.title}
					</h3>
					<p class="text-sm text-maia-950/60 dark:text-maia-300">
						{week.description}
					</p>
				</a>
			{:else}
				<div
					class="rounded-lg p-6 bg-surface-light-elevated/50 dark:bg-maia-950/40 shadow-sm border border-border-light/50 dark:border-maia-800/50 opacity-60"
				>
					<div class="flex items-center justify-between mb-3">
						<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-maia-500/5 dark:bg-maia-500/10 text-maia-400 dark:text-maia-600 font-heading font-bold text-lg">
							{week.number}
						</span>
						<span class="text-xs font-medium px-2 py-1 rounded-full bg-maia-200/50 dark:bg-maia-800/50 text-maia-600 dark:text-maia-400">
							Coming Soon
						</span>
					</div>
					<h3 class="text-lg font-heading font-[550] mb-2 text-maia-900/60 dark:text-maia-100/60">
						{week.title}
					</h3>
					<p class="text-sm text-maia-950/40 dark:text-maia-300/50">
						{week.description}
					</p>
				</div>
			{/if}
		{/each}
	</div>
</PageLayout>
