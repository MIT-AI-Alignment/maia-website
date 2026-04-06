<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import Button from '../../../components/Button.svelte';
</script>

<PageLayout
	title="AISF Week 4"
	description="MAIA AISF Week 4: Threat Models — Orthogonality thesis, instrumental convergence, and catastrophic AI risk scenarios."
	heroIcon="fa-solid fa-shield-halved"
	heroTitle="Week 4: Threat Models"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Orthogonality, Instrumental Convergence, and Catastrophic Risk Scenarios
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			The previous two weeks explored how AI systems can fail to align with human intentions. This
			session zooms out to ask: what could actually go wrong at scale, and why? We begin with two
			foundational ideas, the orthogonality thesis and instrumental convergence, that explain why high
			capability alone doesn't guarantee good values, and why a wide range of possible goals lead to
			dangerous subgoals like self-preservation and resource acquisition. From there, we survey concrete
			catastrophic risk scenarios, from AI-enabled bioterrorism and cyberwarfare to structural risks like
			gradual human disempowerment and power concentration. We close with a narrative scenario that ties
			many of these threads together, illustrating how these risks might unfold in practice over the next
			few years.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 4, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Explain the orthogonality thesis and instrumental convergence, and articulate why these ideas are central to concerns about advanced AI systems</li>
			<li>Connect the technical alignment failures discussed in Weeks 2–3 to broader threat models involving real-world harm at scale</li>
		</ul>
		<div class="mt-8 not-prose">
			<Button
				text="Reading packet"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href="https://docs.google.com/document/d/1yF-TZJKoSwZN3jiqZsDsVkp2qF_ntnUxS2zfaOG5F5g/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://aisafety.info/questions/6568/What-is-the-orthogonality-thesis" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					What is the orthogonality thesis? (AISafety.info)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=ZeecOKBus3Q" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Why Would AI Want to do Bad Things? Instrumental Convergence (Robert Miles, 2018)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://safe.ai/work/statement-on-ai-risk" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Statement on AI Risk (Center for AI Safety, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2306.12001" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					An Overview of Catastrophic AI Risks (Center for AI Safety, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=5KVDDfAkRgc" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					We're Not Ready for Superintelligence (AI in Context, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://ai-2027.com/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI 2027 (AI Futures Project, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://intelligence.org/the-problem/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Problem (MIRI, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/watch?v=hEUO6pjwFOo" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Intelligence and Stupidity: The Orthogonality Thesis (Robert Miles, 2018)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://selfawaresystems.com/wp-content/uploads/2008/01/ai_drives_final.pdf" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Basic AI Drives (Omohundro, 2008)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2501.16946" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Gradual Disempowerment (Kulveit et al., 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://nickbostrom.com/superintelligentwill.pdf" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Superintelligent Will: Motivation And Instrumental Rationality in Advanced Artificial Agents (Nick Bostrom, 2012)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2206.13353" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Existential Risk from Power-Seeking AI (Joe Carlsmith, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://arbital.com/p/instrumental_convergence/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Instrumental convergence (Eliezer Yudkowsky, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.cold-takes.com/why-would-ai-aim-to-defeat-humanity/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Why Would AI "Aim" To Defeat Humanity? (Cold Takes, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Could Defeat All Of Us Combined (Cold Takes, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2401.07836" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Two types of AI existential risk: decisive and accumulative (Atoosa Kasirzadeh, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					International AI Safety Report 2026
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://nickbostrom.com/papers/vulnerable.pdf" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Vulnerable World Hypothesis (Nick Bostrom, 2019)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI-enabled coups: a small group could use AI to seize power (Forethought, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.ncsc.gov.uk/report/impact-ai-cyber-threat-now-2027" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Impact of AI on cyber threat from now to 2027 (NCSC, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.journalofdemocracy.org/articles/how-ai-threatens-democracy/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					How AI Threatens Democracy (Kreps & Kriner, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2024/12/can-democracy-survive-the-disruptive-power-of-ai" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Can Democracy Survive the Disruptive Power of AI? (Carnegie Endowment for International Peace, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.lawfaremedia.org/article/the-authoritarian-risks-of-ai-surveillance" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Authoritarian Risks of AI Surveillance (Lawfare, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.rand.org/pubs/research_reports/RRA2977-2.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Operational Risks of AI in Large-Scale Biological Attacks (RAND, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>
