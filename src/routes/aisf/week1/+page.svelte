<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import Button from '../../../components/Button.svelte';
</script>

<PageLayout
	title="AISF Week 1"
	description="MAIA AISF Week 1: Transformative AI and Current Trajectory — scaling drivers, capability trends, and forecasting."
	heroIcon="fa-solid fa-chart-line"
	heroTitle="Week 1: Current Trajectory"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Transformative AI and Current Trajectory
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			This week builds a grounded picture of where frontier AI capabilities are headed and how quickly they may
			improve. We will review evidence on scaling drivers&mdash;compute, data, algorithmic efficiency, and
			inference-time scaling&mdash;alongside time-horizon forecasting. The goal is to connect today's trends to
			plausible paths toward AGI-level systems, weighing both smooth progress and the possibility of rapid
			capability jumps.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 1, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Understand what AISF is, the general format, and the basic expectations</li>
			<li>Describe current trends in AI capabilities and likely impacts</li>
			<li>Understand major arguments for acceleration vs. slowdown</li>
		</ul>
		<div class="mt-8 not-prose">
			<Button
				text="Reading packet"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href="https://docs.google.com/document/d/1TUwzVIeuRCN0PailHzKIZ3dJsFygDwoU5m4f5E7q-_o/edit?usp=drive_link"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://metr.org/time-horizons/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					METR Time Horizon (METR, 2026)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://epochai.org/trends" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Epoch AI Trends Page (Epoch AI, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://epoch.ai/blog/can-ai-scaling-continue-through-2030" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Can AI scaling continue through 2030? (Epoch AI, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://youtu.be/q9Figerh89g?si=9gOTbCyKqrbU6nPp" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Power of Intelligence (Eliezer Yudkowsky, 2007)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://epoch.ai/blog/what-will-ai-look-like-in-2030" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					What will AI look like in 2030? (Epoch AI, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://situational-awareness.ai/from-agi-to-superintelligence/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					From AGI to Superintelligence: the Intelligence Explosion (Leopold Aschenbrenner, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://epoch.ai/blog/can-ai-scaling-continue-through-2030" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The sections about each specific constraint in Can AI scaling continue through 2030? (Epoch AI, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://forum.effectivealtruism.org/posts/zNymXezwySidkeRun/inference-scaling-and-the-log-x-chart" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Inference Scaling and the Log-x Chart (Toby Ord, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity (2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://bounded-regret.ghost.io/future-ml-systems-will-be-qualitatively-different/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Future ML Systems will be Qualitatively Different (Steinhardt, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=QMqPAM_knrE" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Neural scaling laws and GPT-3 (Kaplan, 2020)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/pdf/2203.15556.pdf" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Training Compute-Optimal Large Language Models (GDM, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://astralcodexten.substack.com/p/biological-anchors-a-trick-that-might" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Biological Anchors: A Trick That Might Or Might Not Work (Alexander, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2102.06701" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Explaining Neural Scaling Laws (Bahri, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://intelligence.org/files/AIFoomDebate.pdf" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Hanson-Yudkowsky AI-Foom Debate (2008)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>
