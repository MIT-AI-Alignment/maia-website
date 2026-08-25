<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import ExpandableCard from '../../../components/ExpandableCard.svelte';

	type Fellowship = {
		name: string;
		featured?: boolean;
		logo?: string;
		logoInvert?: boolean;
		tagline: string;
		note: string;
		description: string;
		alumni?: string;
		link: string | null;
		linkLabel?: string;
	};

	const fellowships: Fellowship[] = [
		{
			name: 'CBAI Research Fellowship',
			featured: true,
			logo: '/images/logos/cbai.png',
			logoInvert: true,
			tagline: 'AI safety research in Harvard Square',
			note: 'In person · Cambridge, MA · ~9 weeks · Fully funded',
			description:
				'An intensive, fully-funded AI safety research fellowship run by the Cambridge Boston Alignment Initiative, spanning technical and governance topics like interpretability, multi-agent safety, and formal verification. Open to undergraduates, graduate students, postdocs, and recent graduates, with mentorship from established researchers, a stipend, housing, meals, and compute. Cohorts typically run in the fall.',
			link: 'https://www.cbai.ai/ais-research-fellowship'
		},
		{
			name: 'SPAR',
			logo: '/images/logos/spar.png',
			tagline: 'Supervised Program for Alignment Research',
			note: 'Remote · Part time · 3 months',
			description:
				'A part-time, fully remote research fellowship run by Kairos that pairs aspiring researchers with experienced mentors on projects in AI safety, security, interpretability, and policy. Open internationally at 5–40 hours per week with no prior research experience required, making it a great option alongside classes. Rounds run twice a year.',
			link: 'https://sparai.org/'
		},
		{
			name: 'MATS',
			logo: '/images/logos/mats.png',
			tagline: 'ML Alignment & Theory Scholars',
			note: 'In person · Berkeley, CA / London, UK · ~3 months · Funded',
			description:
				'An independent research fellowship that pairs researchers with experienced mentors in AI alignment, interpretability, security, and governance. Includes a stipend, housing, compute, and dedicated research management; strong scholars can extend into 6–12 months of funded research. Cohorts run in winter and summer cycles.',
			alumni:
				'Notable alumni include Marius Hobbhahn (co-founder & CEO of Apollo Research) and Thomas Larsen (researcher at the AI Futures Project, coauthor of AI 2027 and lead author of AI 2040: Plan A). Around 10% of MATS alumni have co-founded AI safety organizations.',
			link: 'https://www.matsprogram.org/'
		},
		{
			name: 'Astra Fellowship',
			logo: '/images/logos/constellation.png',
			logoInvert: true,
			tagline: 'Research fellowship at Constellation',
			note: 'In person · Berkeley, CA · 5 months · Funded',
			description:
				'Constellation’s flagship fellowship pairing emerging researchers with senior AI safety mentors at its Berkeley research center, with empirical and strategy/governance tracks. Fully funded with a generous stipend and compute budget; prior AI safety experience is not required. Cohorts run roughly twice a year.',
			alumni:
				'Notable alumni include Aryan Bhatt (Senior Member of Technical Staff at Redwood Research, where he leads high-stakes control research) and Eli Lifland & Romeo Dean (AI Futures Project, coauthors of AI 2027). Over 80% of the first cohort now work full-time in AI safety.',
			link: 'https://constellation.org/programs/astra'
		},
		{
			name: 'Redwood Research Internship',
			logo: '/images/logos/redwood.png',
			tagline: 'AI control, alignment, and futurism research',
			note: 'In person · Berkeley, CA · Paid',
			description:
				'Redwood Research frequently takes interns (particularly undergrads) to work on AI control, alignment, and futurism research. Being an intern at Redwood Research is broadly similar to participating in other fellowships like MATS or Anthropic fellows, in terms of mentorship, compute and compensation. There is no separate internship application; to intern, just apply through the regular Member of Technical Staff application.',
			link: 'https://www.redwoodresearch.org/careers',
			linkLabel: 'Redwood Research careers'
		},
		{
			name: 'Anthropic Fellows Program',
			logo: '/images/logos/anthropic-mark.png',
			logoInvert: true,
			tagline: 'AI safety research with Anthropic mentorship',
			note: 'Full time · 4 months · Funded',
			description:
				'A full-time research fellowship in which external engineers and researchers work on Anthropic’s highest-priority AI safety questions, including scalable oversight, AI control, mechanistic interpretability, and model welfare, with close mentorship from Anthropic researchers. Selection emphasizes technical ability over credentials, and many fellows later join Anthropic full-time.',
			link: 'https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/'
		},
		{
			name: 'OpenAI Safety Fellowship',
			logo: '/images/logos/openai-mark.png',
			logoInvert: true,
			tagline: 'AI safety research with OpenAI mentorship',
			note: 'Remote or Berkeley, CA · ~5 months · Funded',
			description:
				'OpenAI’s program for external researchers and engineers to pursue high-impact research on the safety and alignment of advanced AI systems, with priority areas including safety evaluations, robustness, scalable mitigations, and agentic oversight. Fellows work closely with OpenAI mentors and receive a stipend and compute support.',
			link: 'https://alignment.openai.com/safety-fellowship/'
		},
		{
			name: 'Pivotal Research Fellowship',
			logo: '/images/logos/pivotal.png',
			tagline: 'AI safety, AI policy, and biosecurity research',
			note: 'In person · London, UK · 10 weeks · Fully funded',
			description:
				'A fully funded research fellowship focused on reducing risks from transformative technology, with tracks in AI safety, AI policy, and biosecurity. Fellows work closely with experienced mentors and receive a stipend plus travel and housing support. Cohorts run twice a year.',
			link: 'https://www.pivotal-research.org/'
		},
		{
			name: 'ERA Fellowship',
			logo: '/images/logos/era.png',
			logoInvert: true,
			tagline: 'AI safety & governance research in Cambridge, UK',
			note: 'In person · Cambridge, UK · 8–10 weeks · Fully funded',
			description:
				'A fellowship focused on understanding and reducing risks from increasingly capable frontier AI systems, spanning both technical AI safety and governance research. Fellows work closely with mentors; alumni have gone on to roles at the UK AI Security Institute, RAND, Anthropic, and Google DeepMind.',
			link: 'https://erafellowship.org/'
		},
		{
			name: 'LASR Labs',
			logo: '/images/logos/lasr.png',
			tagline: 'Team-based technical AI safety research in London',
			note: 'In person · London, UK · 13 weeks · Funded',
			description:
				'A full-time technical AI safety research program at the London Initiative for Safe AI (LISA), focused on concrete, action-relevant threat-model research. Participants work in teams of 3–4 under an experienced supervisor, taking a project from proposal to a publishable paper, with a stipend included.',
			link: 'https://www.lasrlabs.org/'
		},
		{
			name: 'ARENA',
			logo: '/images/logos/arena.png',
			logoInvert: true,
			tagline: 'Alignment Research Engineer Accelerator',
			note: 'In person · London, UK · 4–5 weeks · Costs covered',
			description:
				'An intensive technical bootcamp at the London Initiative for Safe AI (LISA) that teaches the ML engineering skills needed for technical AI safety research, covering transformers, mechanistic interpretability, and RL. Aimed at people with strong Python and math fundamentals; travel, accommodation, and meals are covered.',
			link: 'https://www.arena.education/'
		}
	];
</script>

<PageLayout
	title="AI Safety Fellowships"
	description="Fellowships and programs for getting involved in AI safety."
	heroIcon="fas fa-user-graduate"
	heroTitle="AI Safety Fellowships"
	centerTitle={true}
>
	<SectionContainer title="Fellowships" icon="fas fa-user-graduate">
		<p class="mb-6">
			Fellowships are the main way people get full-time jobs in AI safety. They pair you with an
			experienced mentor and fund you to work on a real research project for a few months, and many
			of the researchers now at organizations like Anthropic, Redwood Research, and Apollo Research
			got their start through one of the programs below. Beyond the research itself, they are one of
			the best ways to build a track record, get publications, and meet people in the field. If you
			are considering a career in AI safety, applying to a fellowship is often the highest-value
			next step.
		</p>
		<div class="not-prose flex flex-col gap-4">
			{#each fellowships as fellowship}
				<ExpandableCard featured={fellowship.featured ?? false} open={fellowship.featured ?? false}>
					<svelte:fragment slot="summary">
						{#if fellowship.logo}
							<img
								src={fellowship.logo}
								alt=""
								class="h-6 w-auto object-contain shrink-0 {fellowship.featured
									? 'max-w-[64px]'
									: 'max-w-[28px]'} {fellowship.logoInvert
									? 'dark:brightness-0 dark:invert'
									: ''}"
							/>
						{/if}
						<span class="font-semibold">{fellowship.name}</span>
						<span class="text-maia-600 dark:text-maia-400 hidden sm:inline"
							>{fellowship.tagline}</span
						>
						{#if fellowship.featured}
							<span
								class="ml-auto text-xs font-semibold uppercase tracking-wide text-maia-600 dark:text-maia-400 whitespace-nowrap"
							>
								<i class="fas fa-star" aria-hidden="true"></i> Featured
							</span>
						{/if}
					</svelte:fragment>
					<p class="text-xs uppercase tracking-wide text-maia-600 dark:text-maia-400 mb-2">
						{fellowship.note}
					</p>
					<p class="text-sm mb-3">{fellowship.description}</p>
					{#if fellowship.alumni}
						<p class="text-sm mb-3">{fellowship.alumni}</p>
					{/if}
					{#if fellowship.link}
						<a
							href={fellowship.link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm text-maia-600 dark:text-maia-400 underline hover:no-underline"
						>
							{fellowship.linkLabel ?? 'Fellowship page'}
							<i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
						</a>
					{/if}
				</ExpandableCard>
			{/each}
		</div>
	</SectionContainer>
</PageLayout>
