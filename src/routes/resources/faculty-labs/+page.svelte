<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import ExpandableCard from '../../../components/ExpandableCard.svelte';

	const labs = [
		{
			name: 'Algorithmic Alignment Group',
			pi: 'Dylan Hadfield-Menell',
			logo: '/images/logos/algorithmic-alignment.png',
			note: 'CSAIL · Value alignment, human-AI interaction, AI policy',
			description:
				'The Algorithmic Alignment Group studies the agent alignment problem: how to identify AI behavior that is consistent with the goals of individual users, human-AI teams, multi-agent systems, and society at large. The group combines conceptual work, algorithm design, and policy, with research spanning preference and value learning, incentives in recommender systems, the limitations of RLHF, and red-teaming and robustness for language models. Much of the foundational formal work on corrigibility and reward misspecification in AI safety came out of this line of research.',
			papers: [
				{
					title: 'The Off-Switch Game',
					meta: 'Hadfield-Menell, Dragan, Abbeel & Russell, IJCAI 2017',
					link: 'https://arxiv.org/abs/1611.08219'
				},
				{
					title:
						'Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback',
					meta: 'Casper, Davies et al., TMLR 2023',
					link: 'https://arxiv.org/abs/2307.15217'
				},
				{
					title: 'Prompt Injection as Role Confusion',
					meta: 'Ye, Cui & Hadfield-Menell, 2026',
					link: 'https://arxiv.org/abs/2603.12277'
				}
			],
			link: 'https://algorithmicalignment.csail.mit.edu/',
			linkLabel: 'Lab website'
		},
		{
			name: 'Tegmark AI Safety Group',
			pi: 'Max Tegmark',
			note: 'Physics, IAIFI · Formal verification, mechanistic interpretability',
			description:
				'Max Tegmark’s group works at the intersection of physics and machine learning (using AI for physics and physics for AI), with a focus on AI safety and mechanistic interpretability. Their interpretability work reverse-engineers how neural networks represent knowledge, including the discovery that language models learn literal linear "world models" of space and time, the geometric structure of the concept space that sparse autoencoders recover, and effective theories of phenomena like grokking. The group now works largely on formal verification and "guaranteed safe AI": using formal methods and mathematical proof to obtain hard guarantees about what an AI system can and cannot do, rather than relying on empirical testing alone. Tegmark is additionally the co-founder and president of the Future of Life Institute.',
			papers: [
				{
					title: 'Language Models Represent Space and Time',
					meta: 'Gurnee & Tegmark, ICLR 2024',
					link: 'https://arxiv.org/abs/2310.02207'
				},
				{
					title: 'The Geometry of Concepts: Sparse Autoencoder Feature Structure',
					meta: 'Li, Michaud, Baek, Engels, Sun & Tegmark, 2024',
					link: 'https://arxiv.org/abs/2410.19750'
				},
				{
					title: 'Towards Understanding Grokking: An Effective Theory of Representation Learning',
					meta: 'Liu, Kitouni, Nolte, Michaud, Tegmark & Williams, NeurIPS 2022',
					link: 'https://arxiv.org/abs/2205.10343'
				}
			],
			link: 'https://physics.mit.edu/faculty/max-tegmark/',
			linkLabel: 'Faculty page'
		},
		{
			name: 'Isola Lab',
			pi: 'Phillip Isola',
			note: 'EECS, CSAIL · Representation learning, vision, emergent intelligence',
			description:
				'Phillip Isola’s group studies the fundamental principles of intelligence, with a focus on how neural networks represent the world and how general-purpose intelligence emerges from embodied interaction rather than imitation. Their work spans computer vision, self-supervised and contrastive representation learning, and generative models. One current thrust is "representational universals": the Platonic Representation Hypothesis argues that models trained on different datasets, objectives, and even different modalities are all converging toward a shared statistical model of reality, which has interesting implications for interpretability and for how we should expect future systems to represent the world.',
			papers: [
				{
					title: 'The Platonic Representation Hypothesis',
					meta: 'Huh, Cheung, Wang & Isola, ICML 2024',
					link: 'https://arxiv.org/abs/2405.07987'
				}
			],
			link: 'https://web.mit.edu/phillipi/',
			linkLabel: 'Group page'
		},
		{
			name: 'Language & Intelligence Group (LINGO)',
			pi: 'Jacob Andreas',
			note: 'EECS, CSAIL · NLP, interpretability, in-context learning',
			description:
				'Jacob Andreas’s group studies language as a communicative and computational tool: how machines can learn from and communicate with humans in natural language, and how language can be used to understand what neural networks learn. Much of their work bears directly on interpretability, including automatically describing the features neural networks learn in natural language, probing the implicit world models inside language models, and understanding the mechanisms behind in-context learning.',
			papers: [
				{
					title: 'What learning algorithm is in-context learning? Investigations with linear models',
					meta: 'Akyürek, Schuurmans, Andreas, Ma & Zhou, ICLR 2023',
					link: 'https://arxiv.org/abs/2211.15661'
				},
				{
					title: 'Natural Language Descriptions of Deep Visual Features',
					meta: 'Hernandez, Schwettmann, Bau, Bagashvili, Torralba & Andreas, ICLR 2022',
					link: 'https://arxiv.org/abs/2201.11114'
				},
				{
					title: 'Implicit Representations of Meaning in Neural Language Models',
					meta: 'Li, Nye & Andreas, ACL 2021',
					link: 'https://arxiv.org/abs/2106.00737'
				}
			],
			link: 'https://www.mit.edu/~jda/',
			linkLabel: 'Faculty page'
		},
		{
			name: 'MIT FutureTech',
			pi: 'Neil Thompson',
			logo: '/images/logos/futuretech.png',
			logoInvert: true,
			logoIsWordmark: true,
			note: 'CSAIL, Sloan · Economics of computing, AI progress and risk',
			description:
				'MIT FutureTech is an interdisciplinary group studying the foundations of progress in computing: how trends in hardware, algorithms, and AI drive (and constrain) economic growth and productivity. Their quantitative work measures the compute and algorithmic efficiency behind recent AI capability gains, and argues that continued progress on the current paradigm requires enormous compute growth. The lab also runs the MIT AI Risk Initiative, whose AI Risk Repository is a comprehensive taxonomy and living database of AI risks now used by the UN, the EU AI Office, and the UK AI Security Institute.',
			papers: [
				{
					title: 'Algorithmic Progress in Language Models',
					meta: 'Ho, Besiroglu, Erdil et al. (with Thompson), NeurIPS 2024',
					link: 'https://arxiv.org/abs/2403.05812'
				},
				{
					title:
						'The AI Risk Repository: A Comprehensive Meta-Review, Database, and Taxonomy of Risks from AI',
					meta: 'Slattery et al., 2024 · browse the database at airisk.mit.edu',
					link: 'https://arxiv.org/abs/2408.12622'
				},
				{
					title: 'The Computational Limits of Deep Learning',
					meta: 'Thompson, Greenewald, Lee & Manso, 2020',
					link: 'https://arxiv.org/abs/2007.05558'
				}
			],
			link: 'https://futuretech.mit.edu/',
			linkLabel: 'Lab website'
		},
		{
			name: 'Sculpting Evolution',
			pi: 'Kevin Esvelt',
			logo: '/images/logos/sculpting-evolution.png',
			logoInvert: true,
			note: 'Media Lab · Biosecurity, pandemic prevention, AI-bio risk',
			description:
				'The Sculpting Evolution group works to advance biotechnology safely, applying molecules, models, and cryptography to defend against pandemics and prevent the catastrophic misuse of biotechnology. Esvelt was the first to recognize that CRISPR-based gene drives could alter wild populations, and published the risks alongside a call for safeguards before anyone built one. The group’s biosecurity portfolio includes the "Delay, Detect, Defend" pandemic-defense framework, SecureDNA (free cryptographic screening of DNA synthesis orders worldwide), and the Nucleic Acid Observatory for metagenomic early warning. It also produced some of the earliest empirical work at the AI-biosecurity intersection, showing that chatbots can walk non-experts through acquiring pandemic-capable pathogens.',
			papers: [
				{
					title: 'Can Large Language Models Democratize Access to Dual-Use Biotechnology?',
					meta: 'Soice, Rocha, Cordova, Specter & Esvelt, 2023',
					link: 'https://arxiv.org/abs/2306.03809'
				},
				{
					title:
						'Will Releasing the Weights of Future Large Language Models Grant Widespread Access to Pandemic Agents?',
					meta: 'Gopal et al., 2023',
					link: 'https://arxiv.org/abs/2310.18233'
				},
				{
					title:
						'Delay, Detect, Defend: Preparing for a Future in which Thousands Can Release New Pandemics',
					meta: 'Esvelt, GCSP Geneva Paper 29/22, 2022',
					link: 'https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics'
				}
			],
			link: 'https://www.sculptingevolution.org/',
			linkLabel: 'Lab website'
		}
	];
</script>

<PageLayout
	title="MIT Faculty and Labs"
	description="MIT faculty and labs working on AI safety and related areas."
	heroIcon="fas fa-flask"
	heroTitle="MIT Faculty and Labs"
	centerTitle={true}
>
	<SectionContainer title="Faculty and Labs" icon="fas fa-flask">
		<p class="mb-6">
			A good way to get into AI safety is to do a UROP at one of the MIT labs doing AI safety work.
			This can be a good alternative to fellowships because you can more easily UROP while taking
			classes. Below are some of the labs whose research is most relevant!
		</p>
		<div class="not-prose flex flex-col gap-4">
			{#each labs as lab}
				<ExpandableCard>
					<svelte:fragment slot="summary">
						{#if lab.logo}
							<img
								src={lab.logo}
								alt={lab.logoIsWordmark ? lab.name : ''}
								class="w-auto object-contain shrink-0 {lab.logoIsWordmark
									? 'h-5 max-w-[150px]'
									: 'h-6 max-w-[28px]'} {lab.logoInvert ? 'dark:brightness-0 dark:invert' : ''}"
							/>
						{/if}
						{#if !lab.logoIsWordmark}
							<span class="font-semibold">{lab.name}</span>
						{/if}
						<span class="text-maia-600 dark:text-maia-400">({lab.pi})</span>
					</svelte:fragment>
					<p class="text-xs uppercase tracking-wide text-maia-600 dark:text-maia-400 mb-2">
						{lab.note}
					</p>
					<p class="text-sm mb-4">{lab.description}</p>
					<p class="text-sm font-semibold mb-2">Notable work</p>
					<ul class="text-sm mb-4 flex flex-col gap-2">
						{#each lab.papers as paper}
							<li>
								<a
									href={paper.link}
									target="_blank"
									rel="noopener noreferrer"
									class="text-maia-600 dark:text-maia-400 underline hover:no-underline"
								>
									{paper.title}
								</a>
								<span class="text-maia-600 dark:text-maia-400"> &mdash; {paper.meta}</span>
							</li>
						{/each}
					</ul>
					<a
						href={lab.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-maia-600 dark:text-maia-400 underline hover:no-underline"
					>
						{lab.linkLabel} <i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
					</a>
				</ExpandableCard>
			{/each}
		</div>
	</SectionContainer>
</PageLayout>
