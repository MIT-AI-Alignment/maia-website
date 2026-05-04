<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import Button from '../../../components/Button.svelte';
</script>

<PageLayout
	title="AISF Week 8"
	description="MAIA AISF Week 8: Research & Careers in Safety — Empirical research workflow, active alignment agendas, and career paths in AI safety."
	heroIcon="fa-solid fa-flask"
	heroTitle="Week 8: Research & Careers in Safety"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Empirical Research Workflow, Active Alignment Agendas, and Careers in Safety
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			Over the past several weeks, we surveyed both the technical landscape of AI safety and the institutional
			levers through which it might be governed. This closing session turns from understanding the field to
			working in it. We start with practical advice on the empirical research workflow — choosing problems,
			prioritizing experiments for information gain, and moving fast under uncertainty — alongside the broader
			mindset of explore, understand, distill. We then survey active alignment research agendas and discuss
			what next steps and careers in AI safety can look like.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 8, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Describe the stages of an empirical research project — exploration, hypothesis-testing, distillation</li>
			<li>Apply practical heuristics for doing safety research effectively, including prioritizing for information gain and designing fast experimental loops</li>
			<li>Identify major active research agendas in AI alignment and articulate considerations for evaluating which problems are tractable, neglected, or high-impact</li>
		</ul>
		<div class="mt-8 not-prose">
			<Button
				text="Reading packet"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href="https://docs.google.com/document/d/1euJojL3RK58IFDyi243JgDWYxjElYbudVs5HJ_n07j8/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://www.lesswrong.com/posts/dZFpEdKyb9Bf4xYn7/tips-for-empirical-alignment-research" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Tips for Empirical Alignment Research (Perez, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.alignmentforum.org/posts/hjMy4ZxS5ogA9cTYK/how-i-think-about-my-research-process-explore-understand" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					How I Think About My Research Process: Explore, Understand, Distill (Nanda, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.alignmentforum.org/posts/cbBwwm4jW6AZctymL/my-research-process-key-mindsets-truth-seeking" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					My Research Process: Key Mindsets - Truth-Seeking, Prioritisation, Moving Fast (Nanda, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://docs.google.com/document/d/16C257JKkzwDuDG4EGRpSnmZKXQkdI8Nq7yzlhUS3tKw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Safety Careers Guide for Undergraduates and Early-Career Students (MAIA, 2026)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="http://joschu.net/blog/opinionated-guide-ml-research.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					An Opinionated Guide to ML Research (Schulman, 2020)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://ai-alignment.com/my-research-methodology-b94f2751cb2c" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					My Research Methodology (Christiano, 2021)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.alignmentforum.org/posts/eJGptPbbFPZGLpjsp/highly-opinionated-advice-on-how-to-write-ml-papers" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Highly Opinionated Advice on How to Write ML Papers (Nanda, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=XDtDljh44DM" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Bottom-Up Alignment Research (Perez, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://cs.stanford.edu/~jsteinhardt/ResearchasaStochasticDecisionProcess.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Research as a Stochastic Decision Process (Steinhardt, 2018)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://80000hours.org/career-reviews/ai-safety-researcher/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Safety Technical Research (80,000 Hours, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					How to Win a Best Paper Award (Carlini, 2026)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.alignmentforum.org/posts/zbFGRRWPwxBwjwknY/how-to-do-theoretical-research-a-personal-perspective-1" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					How to Do Theoretical Research, A Personal Perspective (Sun, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://80000hours.org/2025/06/technical-ai-safety-upskilling-resources/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					67 Useful Resources for Upskilling in Technical AI Safety (80,000 Hours, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.alignmentforum.org/posts/Ldrss6o3tiKT6NdMm/my-current-thoughts-on-the-ai-safety-research-engineering" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Levelling Up in AI Safety Research Engineering (Mukobi, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>
