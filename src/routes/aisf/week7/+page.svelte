<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
	import Button from '../../../components/Button.svelte';
</script>

<PageLayout
	title="AISF Week 7"
	description="MAIA AISF Week 7: AI Governance & Liability — Tort law, compute governance, export controls, and the regulator's toolbox."
	heroIcon="fa-solid fa-scale-balanced"
	heroTitle="Week 7: AI Governance & Liability"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Tort Law, Compute Governance, Export Controls, and the Regulator's Toolbox
		</p>
	</svelte:fragment>

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			The previous weeks examined technical approaches to making AI systems safe. This session shifts to the
			institutional level, asking: how can governments and legal systems shape AI development and deployment?
			We begin with liability, exploring how existing tort law applies — and struggles to apply — to AI-caused
			harms, and whether the emerging patchwork of state-level legislation can provide adequate accountability.
			From there, we turn to compute governance as a uniquely promising policy lever, made feasible by the
			extreme concentration of the AI chip supply chain, and examine how the US has used export controls to
			maintain its lead over China in AI-relevant hardware. We close with a survey of concrete regulatory tools
			available across the AI lifecycle.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 7, fellows should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Explain why AI liability is difficult under existing tort law and evaluate the tradeoffs of different legal approaches (negligence, strict liability, and state-level statutory frameworks)</li>
			<li>Describe how compute governance works as a policy lever — including its use for visibility, allocation, and enforcement — and articulate both its strengths and its limitations</li>
			<li>Assess the effectiveness of US semiconductor export controls on China's AI ecosystem and explain the broader strategic dynamics they reflect</li>
		</ul>
		<div class="mt-8 not-prose">
			<Button
				text="Reading packet"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href="https://docs.google.com/document/d/1npgeKNTg9VF2gaDWCX9RArmZ-dullYu6bNQTIt7y98Q/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</SectionContainer>

	<SectionContainer title="Core Readings" icon="fa-solid fa-book">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://thehill.com/opinion/technology/4106191-a-simple-solution-to-regulate-ai/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					A simple solution to regulate AI (The Hill, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://ai-frontiers.org/articles/options-for-ai-liability" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					We're not Ready for AI Liability (AI Frontiers, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.governance.ai/analysis/computing-power-and-the-governance-of-ai" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Computing power and the governance of AI (GovAI, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://ai-frontiers.org/articles/us-chip-export-controls-china-ai" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					How US export controls have (and haven't) curbed Chinese AI (AI Frontiers, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://adamjones.me/blog/ai-regulator-toolbox/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The AI regulator's toolbox: A list of concrete AI governance practices (Jones, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Recommended Readings" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://www.rand.org/pubs/research_reports/RRA2849-1.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Securing Model Weights (RAND, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://cset.georgetown.edu/article/the-finalized-eu-artificial-intelligence-act-implications-and-insights/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Finalized EU AI Act: Implications and Insights (Hoffmann, CSET, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2025/07/chinas-ai-policy-in-the-deepseek-era" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					China's AI Policy at the Crossroads: Balancing Development and Control in the DeepSeek Era (Sheehan, Carnegie, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					SB 53 (California Legislature, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2024/08/china-artificial-intelligence-ai-safety-regulation" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Is China serious about AI safety? (Carnegie, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2025/07/state-ai-law-whats-coming-now-that-the-federal-moratorium-is-dead" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The State of State AI Law (Carnegie, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2307.03718" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Frontier AI Regulation: Managing Emerging Risks to Public Safety (Anderljung et al., 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2307.04699" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					International Institutions for Advanced AI (Ho et al., 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					If-Then Commitments for AI Risk Reduction (Carnegie, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.rand.org/pubs/working_papers/WRA4077-1.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Verifying International Agreements on AI (RAND, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://ai-frontiers.org/articles/case-for-ai-liability" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The Case for AI Liability (AI Frontiers, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4694006" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Tort Law as a Tool for Mitigating Catastrophic Risk from AI (Weil, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Further Readings" icon="fa-solid fa-book-open-reader">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://cset.georgetown.edu/article/trumps-plan-for-ai-recapping-the-white-houses-ai-action-plan/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Trump's Plan for AI: Recapping the White House's AI Action Plan (Friedland, CSET, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://cset.georgetown.edu/article/eu-ai-code-safety/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AI Safety under the EU AI Code of Practice — A New Global Standard? (Hoffmann, CSET, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.aisi.gov.uk/research/aisi-frontier-ai-trends-report-2025" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					AISI Frontier AI Trends Report 2025 (UK AI Security Institute, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://metr.org/common-elements" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Common Elements of Frontier AI Safety Policies (METR, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://carnegieendowment.org/research/2024/10/the-ai-governance-arms-race-from-summit-pageantry-to-progress" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The AI Governance Arms Race: From Summit Pageantry to Progress? (Renda, Carnegie, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2503.05628" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Superintelligence Strategy: Expert Version (Hendrycks, Schmidt, & Wang, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.rand.org/pubs/commentary/2025/03/seeking-stability-in-the-competition-for-ai-advantage.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Seeking Stability in the Competition for AI Advantage (Mazarr, RAND, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.governance.ai/research-paper/oversight-for-frontier-ai-through-kyc-scheme-for-compute-providers" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Oversight for Frontier AI through a KYC Scheme for Compute Providers (Egan & Heim, GovAI, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.cnas.org/publications/reports/secure-governable-chips" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Secure, Governable Chips (Aarne, Fist, & Withers, CNAS/IAPS, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.governance.ai/analysis/anthropics-rsp-v3-0-how-it-works-whats-changed-and-some-reflections" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Anthropic's RSP v3.0: How it Works, What's Changed, and Some Reflections (GovAI, 2025)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://arxiv.org/abs/2304.04914" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Regulatory Markets (Hadfield & Clark, 2023)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://situational-awareness.ai/lock-down-the-labs/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Situational Awareness: Lock Down the Labs (Aschenbrenner, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://fas.org/publication/a-national-center-for-advanced-ai-reliability-and-security/" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					A National Center for Advanced AI Reliability and Security (FAS, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.rand.org/pubs/research_reports/RRA3084-1.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					U.S. Tort Liability for Large-Scale AI Damages: A Primer (Ramakrishnan et al., RAND, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.lawfaremedia.org/article/tort-law-and-frontier-ai-governance" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Tort Law and Frontier AI Governance (van der Merwe, Ramakrishnan, & Anderljung, Lawfare, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://www.lawfaremedia.org/article/tort-law-should-be-the-centerpiece-of-ai-governance" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Tort Law Should Be the Centerpiece of AI Governance (Weil, Lawfare, 2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>
