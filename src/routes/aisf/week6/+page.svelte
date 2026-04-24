<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import Button from '../../../components/Button.svelte';
</script>

<PageLayout
	title="AISF Week 6"
	description="MAIA AISF Week 6: Interpretability & Evals — Mechanistic interpretability, evaluations, and alignment auditing."
	heroIcon="fa-solid fa-magnifying-glass-chart"
	heroTitle="Week 6: Interpretability & Evals"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Mechanistic Interpretability, Evaluations, and Alignment Auditing
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			This week introduces two of the most important empirical approaches to understanding what frontier
			models are doing under the hood: mechanistic interpretability (reverse-engineering model internals
			into human-understandable structures) and evaluations (measuring capabilities, propensities, and
			safety-relevant behaviors). The week emphasizes how these two threads are converging into alignment
			auditing — using interp tools to check whether a model has the goals it appears to have.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 6, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Describe at a high level what attribution graphs and linear probes are, and what each lets researchers discover about model internals</li>
			<li>Point to at least one concrete finding from modern interp on a frontier model (planning, multi-step reasoning, unfaithful chain of thought, etc.)</li>
			<li>Distinguish capability evals, propensity evals, dangerous-capability evals, and alignment audits</li>
		</ul>
		<div class="mt-8 not-prose">
			<Button
				text="Reading packet"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href="https://docs.google.com/document/d/1IfL9qoxDprXTjdtWYqT7HBdXS8Hq_GU3FHOUU61MV_c/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://www.anthropic.com/research/tracing-thoughts-language-model" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Tracing the Thoughts of a Large Language Model (Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.anthropic.com/research/probes-catch-sleeper-agents" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Simple Probes Can Catch Sleeper Agents (Anthropic, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2511.22662" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Difficulties with Evaluating a Deception Detector for AIs (GDM, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.anthropic.com/research/auditing-hidden-objectives" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Auditing Language Models for Hidden Objectives (Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.lesswrong.com/posts/HzjssjeQqhf3kRw9r/every-benchmark-is-broken" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Every Benchmark is Broken (Jonathan Gabor, 2026)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://transformer-circuits.pub/2023/interpretability-dreams/index.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Interpretability Dreams (Olah, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://metr.org/blog/2023-09-26-rsp/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Responsible Scaling Policies (METR / ARC Evals, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.apolloresearch.ai/research/frontier-models-are-capable-of-incontext-scheming" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Frontier Models Are Capable of In-Context Scheming (Apollo Research, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Measuring AI Ability to Complete Long Tasks (METR, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Demystifying Evals for AI Agents (Anthropic, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.lesswrong.com/posts/gwG9uqw255gafjYN4/eis-iii-broad-critiques-of-interpretability-research" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					EIS III: Broad Critiques of Interpretability Research (Stephen Casper, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://transformer-circuits.pub/2022/toy_model/index.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Toy Models of Superposition (Elhage et al., 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://transformer-circuits.pub/2023/monosemantic-features" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Towards Monosemanticity (Bricken, Templeton et al., Anthropic, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Mapping the Mind of a Large Language Model / Scaling Monosemanticity (Templeton et al., Anthropic, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					On the Biology of a Large Language Model (Lindsey et al., Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2406.11717" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Refusal in Language Models Is Mediated by a Single Direction (Arditi et al., 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2502.17424" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Emergent Misalignment (Betley et al., ICML 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2506.19823" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Persona Features Control Emergent Misalignment (Wang et al., OpenAI, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2312.06942" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Control: Improving Safety Despite Intentional Subversion (Greenblatt et al., ICML 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.anthropic.com/research/agentic-misalignment" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Agentic Misalignment: How LLMs Could Be Insider Threats (Lynch et al., Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2503.10965" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Auditing Language Models for Hidden Objectives — full paper (Marks et al., Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://alignment.anthropic.com/2025/automated-auditing/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Building and Evaluating Alignment Auditing Agents (Bricken, Marks et al., Anthropic, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2511.21654" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					EvilGenie: A Reward Hacking Benchmark (Gabor et al., 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2410.21514" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Sabotage Evaluations for Frontier Models (Benton et al., Anthropic, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2406.07358" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Sandbagging (van der Weij et al., 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2403.03218" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The WMDP Benchmark (Li et al., ICML 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>
