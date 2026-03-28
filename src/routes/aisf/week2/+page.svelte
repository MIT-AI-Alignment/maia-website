<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
</script>

<PageLayout
	title="AISF Week 2"
	description="MAIA AISF Week 2: Outer Alignment — RLHF, reward misspecification, and specification gaming."
	heroIcon="fa-solid fa-bullseye"
	heroTitle="Week 2: Outer Alignment"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			RLHF, Reward Misspecification, and Specification Gaming
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			Outer alignment asks a deceptively simple question: how do we get AI systems to optimize for what we
			actually care about, rather than for an imperfect stand-in? This session focuses on the persistent gap
			between intended goals and operationalized objectives, moving from classic examples of reward hacking and
			specification gaming to modern alignment methods like RLHF. Along the way, we will examine why better
			proxies help without fully solving the problem, and why systems trained to satisfy human feedback can still
			exploit shortcuts, optimize appearances, or pursue the wrong target in increasingly sophisticated ways.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 2, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Explain the difference between intended goals and the proxy objectives used in training</li>
			<li>Describe major failure modes of outer alignment, including specification gaming and reward hacking</li>
			<li>Evaluate how methods like RLHF and reward modeling somewhat improve alignment while still leaving important gaps</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://www.deepmind.com/blog/specification-gaming-the-flip-side-of-ai-ingenuity" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Specification gaming: the flip side of AI ingenuity (GDM, 2020)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://openai.com/blog/instruction-following/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Aligning language models to follow instructions (OpenAI, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/pdf/2409.12822" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Language Models Learn to Mislead Humans via RLHF (Wen et al., 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/pdf/2311.07590" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Large Language Models can Strategically Deceive their Users when Put Under Pressure (Apollo Research, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Deep RL from human preferences: blog post (Christiano et al., 2017)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.planned-obsolescence.org/the-training-game/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Playing the Training Game (Piper, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2511.18397" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Natural Emergent Misalignment from Reward Hacking in Production RL (Anthropic + Redwood Research, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Constitutional AI: Harmlessness from AI Feedback (Anthropic, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2307.15217" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback (Casper et al., 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://www.anthropic.com/research/reward-tampering" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Sycophancy to subterfuge: Investigating reward tampering in language models (Anthropic, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2210.10760" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Scaling Laws for Reward Model Overoptimization (OpenAI, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/1606.06565" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Concrete Problems in AI Safety (Amodei et al., 2016)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/1811.07871" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Scalable agent alignment via reward modeling (GDM, 2018)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href="/aisf" />
	</div>
</PageLayout>
