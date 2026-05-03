// AI Safety careers and opportunities data
// Sourced from "The AI Safety Careers Guide for Undergraduates and Early-Career Students" (May 2026)
// Verify deadlines and program details on official pages before applying.

export type Pillar = 'technical' | 'policy' | 'fieldbuilding' | 'comms' | 'local';

export type Tag =
	| 'Boston'
	| 'MIT'
	| 'Harvard'
	| 'Undergrad-friendly'
	| 'Remote'
	| 'Paid'
	| 'US'
	| 'UK'
	| 'EU'
	| 'APAC'
	| 'Global'
	| 'Interpretability'
	| 'Alignment'
	| 'Control'
	| 'Evaluations'
	| 'Adversarial'
	| 'Strategy'
	| 'Bio'
	| 'Compute Gov'
	| 'Law'
	| 'Comms'
	| 'Organizing'
	| 'Top Pick';

export type Resource = {
	name: string;
	description: string;
	url: string;
	pillars: Pillar[];
	tags?: Tag[];
	deadline?: string;
};

export type Section = {
	id: string;
	title: string;
	intro?: string;
	items: Resource[];
};

export type Part = {
	id: string;
	title: string;
	icon: string;
	intro?: string;
	sections: Section[];
};

export const PILLAR_LABELS: Record<Pillar, { label: string; icon: string; color: string }> = {
	technical: {
		label: 'Technical Research',
		icon: 'fa-solid fa-microchip',
		color: 'bg-tag-mechinterp-light dark:bg-tag-mechinterp-dark'
	},
	policy: {
		label: 'Policy & Governance',
		icon: 'fa-solid fa-landmark',
		color: 'bg-tag-governance-light dark:bg-tag-governance-dark'
	},
	fieldbuilding: {
		label: 'Field-Building',
		icon: 'fa-solid fa-people-group',
		color: 'bg-tag-rlhf-light dark:bg-tag-rlhf-dark'
	},
	comms: {
		label: 'Communications',
		icon: 'fa-solid fa-bullhorn',
		color: 'bg-tag-openai-light dark:bg-tag-openai-dark'
	},
	local: {
		label: 'Harvard / MIT',
		icon: 'fa-solid fa-graduation-cap',
		color: 'bg-tag-scaling-light dark:bg-tag-scaling-dark'
	}
};

export const PARTS: Part[] = [
	{
		id: 'start',
		title: 'Start Here — Meta-Resources',
		icon: 'fa-solid fa-compass',
		intro:
			'The handful of directories and job boards worth bookmarking before anything else. Most of what you need flows through these.',
		sections: [
			{
				id: 'meta',
				title: 'Best Meta-Resources to Bookmark First',
				items: [
					{
						name: '80,000 Hours Job Board',
						description: 'Curated, regularly-updated board of high-impact jobs across AI safety and beyond.',
						url: 'https://jobs.80000hours.org',
						pillars: ['technical', 'policy', 'fieldbuilding', 'comms'],
						tags: ['Top Pick', 'Global']
					},
					{
						name: 'AI Safety Atlas (aisafety.com)',
						description: 'One-stop directory with sub-pages for self-study, funding, and communities.',
						url: 'https://aisafety.com',
						pillars: ['technical', 'policy', 'fieldbuilding'],
						tags: ['Top Pick']
					},
					{
						name: 'Emerging Tech Policy Careers',
						description: 'Canonical AI policy careers hub run by Horizon.',
						url: 'https://emergingtechpolicy.org',
						pillars: ['policy'],
						tags: ['Top Pick', 'US']
					},
					{
						name: 'AI Safety Quest',
						description: 'Opportunities tracker plus volunteer 1-1 advising for newcomers.',
						url: 'https://aisafety.quest',
						pillars: ['technical', 'policy', 'fieldbuilding']
					},
					{
						name: "Peter Wildeford's Fellowship Roundups",
						description: 'Detailed periodic roundups of open AI safety fellowships.',
						url: 'https://blog.peterwildeford.com',
						pillars: ['technical', 'policy']
					},
					{
						name: 'AI Safety Funding Guide',
						description: 'Consolidated list of funders for early-career AI safety projects.',
						url: 'https://aisafety.com/funding',
						pillars: ['fieldbuilding', 'technical']
					}
				]
			}
		]
	},
	{
		id: 'local',
		title: 'Part I — The Harvard / MIT-Specific Section',
		icon: 'fa-solid fa-graduation-cap',
		intro:
			"This is the most important section if you're at Harvard or MIT, and the part of the guide most likely to be obsolete elsewhere. The Cambridge ecosystem (AISST, MAIA, CBAI, Kempner, CDML, Algorithmic Alignment Group, Belfer, Berkman Klein) is extraordinarily dense — use it.",
		sections: [
			{
				id: 'local-groups',
				title: 'Local Student Groups (Your First Stop)',
				items: [
					{
						name: 'AI Safety Student Team (AISST) — Harvard',
						description:
							"Harvard's research-focused AI safety group (formerly HAIST). 8-week intro tech and policy fellowships each semester; office near Harvard Square. Past fellows have moved to MATS, Anthropic, Goodfire, Redwood, METR, AISI/CAISI, and ML PhD programs.",
						url: 'https://aisst.ai',
						pillars: ['local', 'fieldbuilding', 'technical'],
						tags: ['Harvard', 'Boston', 'Undergrad-friendly', 'Top Pick']
					},
					{
						name: 'AISST Tech Fellowship',
						description: 'The canonical Harvard on-ramp into technical AI safety.',
						url: 'https://aisst.ai/tech-fellowship',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Boston', 'Undergrad-friendly']
					},
					{
						name: 'MIT AI Alignment (MAIA)',
						description:
							"MIT's AI safety group. Runs the AI Safety Fundamentals program (technical & governance), CAMBRIA bootcamp, Science of Deep Learning reading groups, and joint retreats with AISST.",
						url: 'https://web.mit.edu/aialignment/www/',
						pillars: ['local', 'fieldbuilding', 'technical'],
						tags: ['MIT', 'Boston', 'Undergrad-friendly', 'Top Pick']
					},
					{
						name: 'MAIA — Get Involved',
						description: 'Apply to MAIA programs, fellowships, and events.',
						url: 'https://web.mit.edu/aialignment/www/getinvolved/',
						pillars: ['local'],
						tags: ['MIT', 'Boston', 'Undergrad-friendly']
					},
					{
						name: 'Cambridge Boston Alignment Initiative (CBAI)',
						description:
							'Umbrella org supporting AISST and MAIA. Runs the CBAI Summer Fellowship (9 weeks, Cambridge MA) and ML bootcamps. Probably the single most important institution to know about if you are at Harvard or MIT and serious about safety.',
						url: 'https://www.cbai.ai',
						pillars: ['local', 'fieldbuilding', 'technical'],
						tags: ['Boston', 'Harvard', 'MIT', 'Top Pick']
					},
					{
						name: 'CBAI Summer Fellowship',
						description: '9-week paid summer program co-located with Harvard and MIT. Strong placement track record (Goodfire, Redwood, etc.).',
						url: 'https://www.cbai.ai',
						pillars: ['local', 'technical'],
						deadline: 'June 8 – August 10, 2026',
						tags: ['Boston', 'Harvard', 'MIT', 'Paid', 'Undergrad-friendly']
					},
					{
						name: 'AISST — Mignone Career Services Listing',
						description: "Harvard's career-services recognition page for AISST.",
						url: 'https://careerservices.fas.harvard.edu/organizations/harvard-ai-safety-team/',
						pillars: ['local'],
						tags: ['Harvard']
					}
				]
			},
			{
				id: 'harvard-courses',
				title: 'Specific Harvard Courses Worth Taking',
				items: [
					{
						name: 'CS 2881r: AI Safety (Boaz Barak)',
						description: "Harvard's first dedicated AI safety course. Graduate seminar; lectures and student projects public. Prereqs: CS 181 / equivalent ML course, mathematical maturity.",
						url: 'https://boazbk.github.io/mltheoryseminar',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'CS 1810: Introduction to Machine Learning',
						description: 'Standard ML foundation at Harvard (David Alvarez-Melis & Yilun Du, 2026).',
						url: 'https://harvard-ml-courses.github.io/cs181-web/',
						pillars: ['local'],
						tags: ['Harvard']
					},
					{
						name: 'CS 2822r / Stat 234, CS 282br',
						description:
							"Sequential decision-making, RL, and ML theory at Harvard. Course offerings rotate; recent topics include interpretability, robustness, and foundation models.",
						url: 'https://courses.my.harvard.edu',
						pillars: ['local'],
						tags: ['Harvard']
					},
					{
						name: 'HKS DPI Courses (DPI-662, 686, 687, 688)',
						description: 'Digital governance and AI policy challenges at Harvard Kennedy School.',
						url: 'https://www.coursicle.com/harvard/courses/DPI/',
						pillars: ['local', 'policy'],
						tags: ['Harvard']
					},
					{
						name: 'HKS Belfer Center Seminars',
						description: 'Emerging Technology, Scientific Advancement, and Global Policy Program; AI+X+G Initiative.',
						url: 'https://www.belfercenter.org',
						pillars: ['local', 'policy'],
						tags: ['Harvard']
					}
				]
			},
			{
				id: 'harvard-faculty',
				title: 'Specific Harvard Faculty Working on Safety-Relevant Topics',
				intro:
					'Reach out for UROPs, theses, RA roles, or just to learn. Most senior people in the field will take a coffee with a serious Harvard or MIT undergrad who has done the BlueDot or AISST/MAIA intro fellowship.',
				items: [
					{
						name: 'Boaz Barak (Harvard SEAS, OpenAI MTS)',
						description: 'Theoretical CS and AI safety; taught CS 2881r.',
						url: 'https://www.boazbarak.org',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Sham Kakade (Kempner co-director)',
						description: 'Foundations of deep learning, RL theory, generalization.',
						url: 'https://shamulent.github.io',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Martin Wattenberg & Fernanda Viégas (Harvard SEAS)',
						description: 'Interpretability, mechanistic understanding, and visualization of model behavior.',
						url: 'https://insightplusinteraction.com',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Interpretability']
					},
					{
						name: 'Hima Lakkaraju (Harvard SEAS / HBS)',
						description: 'Trustworthy ML, explanations, interpretability, model evaluation.',
						url: 'https://himalakkaraju.github.io',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Interpretability', 'Evaluations']
					},
					{
						name: 'David Parkes (SEAS Dean)',
						description: 'Multi-agent systems, mechanism design, ML/economics.',
						url: 'https://parkes.seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Cynthia Dwork (Harvard SEAS)',
						description: 'Differential privacy, algorithmic fairness, foundations.',
						url: 'https://dwork.seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Finale Doshi-Velez (Harvard SEAS)',
						description: 'Interpretability, RL, probabilistic methods.',
						url: 'https://finale.seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Interpretability']
					},
					{
						name: 'Yaron Singer (Harvard SEAS)',
						description: 'Adversarial robustness and ML security.',
						url: 'https://www.yaronsinger.com',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Adversarial']
					},
					{
						name: 'Milind Tambe (Harvard SEAS, CRCS)',
						description: 'Multi-agent systems, AI for social impact.',
						url: 'https://teamcore.seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Nada Amin (Harvard SEAS)',
						description: 'Programming languages, formal verification, neuro-symbolic methods.',
						url: 'https://namin.seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'Yilun Du (Kempner / Harvard SEAS)',
						description: 'Generative models, world models, robotics.',
						url: 'https://yilundu.github.io',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					}
				]
			},
			{
				id: 'harvard-orgs',
				title: 'Harvard Institutes & Centers',
				items: [
					{
						name: 'Kempner Institute',
						description:
							'Houses one of the largest academic AI clusters (~1.79 exaFLOPS). Programs: KURE (term-time undergrad), KRANIUM (10-week summer), Graduate Fellowship, Accelerator Awards.',
						url: 'https://kempnerinstitute.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Boston', 'Undergrad-friendly']
					},
					{
						name: 'KURE — Kempner Undergraduate Research Experience',
						description: 'Term-time funding for Harvard undergraduates doing AI research.',
						url: 'https://kempnerinstitute.harvard.edu/about/training-program/kure/',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Undergrad-friendly', 'Paid']
					},
					{
						name: 'KRANIUM Summer Program',
						description: '10-week residential summer undergraduate program at the Kempner Institute.',
						url: 'https://kempnerinstitute.harvard.edu/about/training-program/kranium/',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Boston', 'Undergrad-friendly', 'Paid']
					},
					{
						name: 'Berkman Klein Center',
						description: 'AI ethics, policy, governance, and internet law at Harvard.',
						url: 'https://cyber.harvard.edu',
						pillars: ['local', 'policy'],
						tags: ['Harvard', 'Law']
					},
					{
						name: 'Belfer Center (HKS)',
						description: 'Tech policy and national security at the Harvard Kennedy School.',
						url: 'https://www.belfercenter.org',
						pillars: ['local', 'policy'],
						tags: ['Harvard']
					},
					{
						name: 'Berkman Klein Fellowships',
						description: 'Fellowships at the Berkman Klein Center for Internet & Society.',
						url: 'https://cyber.harvard.edu/getinvolved/fellowships',
						pillars: ['local', 'policy'],
						tags: ['Harvard', 'Law']
					}
				]
			},
			{
				id: 'mit-courses',
				title: 'Specific MIT Courses Worth Taking',
				items: [
					{
						name: 'MIT EECS Course Catalog',
						description:
							'6.S898 Deep Learning (Phillip Isola), 6.S191 IAP bootcamp, plus rotating "Special Subject" numbers (6.7960 / 6.S952 / 6.S979 / 6.S983 / 6.S984) covering interpretability, robustness, AI for protein design, AI in medicine, trustworthy ML.',
						url: 'https://eecsis.mit.edu/academic-information.html',
						pillars: ['local'],
						tags: ['MIT']
					},
					{
						name: '6.S191 Introduction to Deep Learning',
						description: "MIT's IAP deep learning bootcamp — broader audience.",
						url: 'http://introtodeeplearning.com',
						pillars: ['local'],
						tags: ['MIT']
					},
					{
						name: 'MIT IDSS Classes',
						description: "Statistics, data science, and policy-relevant ML at IDSS — including Daron Acemoglu's economics-of-AI offerings and Neil Thompson's seminars.",
						url: 'https://idss.mit.edu/academics/',
						pillars: ['local', 'policy'],
						tags: ['MIT']
					}
				]
			},
			{
				id: 'mit-faculty',
				title: 'Specific MIT Faculty and Labs',
				items: [
					{
						name: 'Aleksander Madry (CSAIL, EECS)',
						description:
							'Director of the MIT Center for Deployable Machine Learning (CDML); faculty co-lead of the MIT AI Policy Forum. Robustness, adversarial ML, data-centric ML.',
						url: 'https://madry-lab.ml',
						pillars: ['local', 'technical', 'policy'],
						tags: ['MIT', 'Adversarial']
					},
					{
						name: 'Dylan Hadfield-Menell — Algorithmic Alignment Group (CSAIL)',
						description:
							'The single most natural MIT lab to join for someone wanting alignment-focused research. Human-AI cooperation, value learning, multi-agent oversight, in-context alignment, SAE-based interpretability.',
						url: 'https://algorithmicalignment.csail.mit.edu',
						pillars: ['local', 'technical'],
						tags: ['MIT', 'Alignment', 'Top Pick']
					},
					{
						name: 'Max Tegmark (Physics, FLI co-founder)',
						description: 'Existential risk, governance, mechanistic interpretability.',
						url: 'https://space.mit.edu/home/tegmark/',
						pillars: ['local', 'technical', 'policy'],
						tags: ['MIT', 'Strategy']
					},
					{
						name: 'Neil Thompson (CSAIL / IDE) — MIT FutureTech',
						description: 'Compute trends, algorithmic progress, the AI Risk Repository.',
						url: 'https://ide.mit.edu/people/neil-thompson/',
						pillars: ['local', 'policy'],
						tags: ['MIT', 'Compute Gov', 'Strategy']
					},
					{
						name: 'Jacob Andreas (CSAIL)',
						description: 'Language, interpretability, agents.',
						url: 'https://www.mit.edu/~jda/',
						pillars: ['local', 'technical'],
						tags: ['MIT', 'Interpretability']
					},
					{
						name: 'Yoon Kim (CSAIL)',
						description: 'NLP, model architecture, efficient training.',
						url: 'https://people.csail.mit.edu/yoonkim/',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Phillip Isola (CSAIL)',
						description: 'Generative models, representation learning. Teaches 6.S898.',
						url: 'https://web.mit.edu/phillipi/',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Antonio Torralba (CSAIL)',
						description: 'Vision, interpretability of vision models.',
						url: 'https://groups.csail.mit.edu/vision/torralbalab/',
						pillars: ['local', 'technical'],
						tags: ['MIT', 'Interpretability']
					},
					{
						name: 'Stefanie Jegelka (CSAIL)',
						description: 'Robustness, generalization theory.',
						url: 'https://people.csail.mit.edu/stefje/',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Sasha Rakhlin (IDSS / Statistics)',
						description: 'Statistical learning theory, RL theory.',
						url: 'https://www.mit.edu/~rakhlin/',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Asu Ozdaglar (EECS Department Head)',
						description: 'Optimization, multi-agent learning. MIT AI Policy Forum co-lead.',
						url: 'https://asu.mit.edu',
						pillars: ['local', 'technical', 'policy'],
						tags: ['MIT']
					},
					{
						name: 'Tommi Jaakkola (CSAIL)',
						description: 'Deep learning theory, generative models.',
						url: 'https://people.csail.mit.edu/tommi/',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Tess Smidt (EECS)',
						description: 'Equivariant ML, geometric deep learning.',
						url: 'https://blondegeek.github.io',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'Daron Acemoglu (Economics)',
						description: 'Economics of AI; co-author of Power and Progress.',
						url: 'https://economics.mit.edu/people/faculty/daron-acemoglu',
						pillars: ['local', 'policy'],
						tags: ['MIT', 'Strategy']
					},
					{
						name: 'David Autor (Economics)',
						description: 'Labor economics of automation.',
						url: 'https://economics.mit.edu/people/faculty/david-h-autor',
						pillars: ['local', 'policy'],
						tags: ['MIT']
					},
					{
						name: 'Kevin Esvelt (Media Lab)',
						description: 'Biosecurity and AI-bio risk.',
						url: 'https://www.media.mit.edu/people/esvelt/',
						pillars: ['local', 'policy'],
						tags: ['MIT', 'Bio']
					}
				]
			},
			{
				id: 'mit-orgs',
				title: 'Other Relevant MIT Venues',
				items: [
					{
						name: 'MIT Schwarzman College of Computing',
						description: 'Hosts the Social and Ethical Responsibilities of Computing initiative.',
						url: 'https://computing.mit.edu',
						pillars: ['local', 'policy'],
						tags: ['MIT']
					},
					{
						name: 'MIT Initiative on the Digital Economy',
						description: 'Cross-cutting research on the economics and policy of digital tech.',
						url: 'https://ide.mit.edu',
						pillars: ['local', 'policy'],
						tags: ['MIT']
					},
					{
						name: 'MIT Internet Policy Research Initiative (IPRI)',
						description: 'Research on internet and AI policy.',
						url: 'https://internetpolicy.mit.edu',
						pillars: ['local', 'policy'],
						tags: ['MIT']
					},
					{
						name: 'MIT Lincoln Laboratory',
						description: 'Cleared work on AI for national security. US citizens only.',
						url: 'https://www.ll.mit.edu',
						pillars: ['local', 'technical', 'policy'],
						tags: ['MIT', 'Boston', 'US']
					},
					{
						name: 'MIT Media Lab',
						description: "Esvelt's Sculpting Evolution Group plus various AI-society projects.",
						url: 'https://www.media.mit.edu',
						pillars: ['local'],
						tags: ['MIT']
					}
				]
			}
		]
	},
	{
		id: 'technical',
		title: 'Part II — Technical AI Safety',
		icon: 'fa-solid fa-microchip',
		intro:
			'Subfields include alignment & scalable oversight, mechanistic interpretability, AI control, evaluations & red-teaming, adversarial robustness, model organisms, singular learning theory, AI welfare, and agent foundations.',
		sections: [
			{
				id: 'frontier-labs',
				title: 'Frontier Labs with Safety Teams',
				intro:
					'These labs hire undergrads through residency / fellowship programs more easily than through full-time research-scientist roles. Use those entry points.',
				items: [
					{
						name: 'Anthropic',
						description:
							'Alignment Science, Interpretability, Frontier Red Team, Trust & Safety, Societal Impacts, Model Welfare, Policy.',
						url: 'https://www.anthropic.com/jobs',
						pillars: ['technical', 'policy'],
						tags: ['Alignment', 'Interpretability', 'US', 'UK']
					},
					{
						name: 'OpenAI',
						description: 'Safety Systems, Preparedness, Policy. The new OpenAI Safety Fellowship is the easiest entry point.',
						url: 'https://openai.com/careers',
						pillars: ['technical', 'policy'],
						tags: ['US']
					},
					{
						name: 'Google DeepMind',
						description: 'AGI Safety & Alignment (Anca Dragan), Frontier Safety, Responsibility & Safety.',
						url: 'https://deepmind.google/careers/',
						pillars: ['technical', 'policy'],
						tags: ['Alignment', 'UK', 'US']
					}
				]
			},
			{
				id: 'indep-tech',
				title: 'Independent Technical Safety Research Organizations',
				items: [
					{
						name: 'Redwood Research (Berkeley)',
						description: 'Founded the field of AI control. Hires Members of Technical Staff (~$180–207k); applications open year-round.',
						url: 'https://www.redwoodresearch.org/careers',
						pillars: ['technical'],
						tags: ['Control', 'US', 'Paid']
					},
					{
						name: 'METR',
						description: 'Evaluations of dangerous autonomous capabilities; the "horizon length" metric.',
						url: 'https://metr.org/careers',
						pillars: ['technical'],
						tags: ['Evaluations', 'US']
					},
					{
						name: 'Apollo Research (London)',
						description: 'Detecting deception and scheming in frontier models.',
						url: 'https://www.apolloresearch.ai/careers',
						pillars: ['technical'],
						tags: ['Evaluations', 'UK']
					},
					{
						name: 'ARC (Alignment Research Center)',
						description: 'Theoretical alignment, ELK and successors.',
						url: 'https://www.alignment.org',
						pillars: ['technical'],
						tags: ['Alignment', 'US']
					},
					{
						name: 'MIRI',
						description: 'Now has a Technical Governance Team in addition to agent foundations work.',
						url: 'https://intelligence.org',
						pillars: ['technical', 'policy'],
						tags: ['Alignment', 'Strategy', 'US']
					},
					{
						name: 'FAR.AI / FAR Labs (Berkeley)',
						description: 'Portfolio approach to alignment research; runs a co-working space and seminar series.',
						url: 'https://www.far.ai/careers',
						pillars: ['technical'],
						tags: ['Alignment', 'US']
					},
					{
						name: 'Goodfire (San Francisco)',
						description: 'Interpretability-focused PBC backed by >$200M.',
						url: 'https://www.goodfire.ai/careers',
						pillars: ['technical'],
						tags: ['Interpretability', 'US', 'Paid']
					},
					{
						name: 'Timaeus',
						description: 'Singular learning theory and developmental interpretability. Discord-based, remote-first.',
						url: 'https://timaeus.co',
						pillars: ['technical'],
						tags: ['Interpretability', 'Remote']
					},
					{
						name: 'Apart Research',
						description: 'Hackathon-driven research org. Apart Sprints and Apart Lab Fellowship.',
						url: 'https://apartresearch.com',
						pillars: ['technical', 'fieldbuilding'],
						tags: ['Remote']
					},
					{
						name: 'Conjecture (London)',
						description: 'Independent alignment org pursuing "boundedness".',
						url: 'https://www.conjecture.dev',
						pillars: ['technical'],
						tags: ['Alignment', 'UK']
					},
					{
						name: 'Leap Labs',
						description: 'Interpretability tooling.',
						url: 'https://www.leap-labs.com',
						pillars: ['technical'],
						tags: ['Interpretability']
					},
					{
						name: 'Cadenza Labs',
						description: 'Newer independent alignment org.',
						url: 'https://cadenzalabs.org',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'Simplex',
						description: 'Developmental / dynamical-systems alignment (Adam Shai, Paul Riechers).',
						url: 'https://www.simplex.community',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'Catalyze Impact',
						description: 'Incubation of new alignment orgs.',
						url: 'https://www.catalyze-impact.org',
						pillars: ['technical', 'fieldbuilding']
					},
					{
						name: 'EleutherAI',
						description: 'Open-source ML and interpretability.',
						url: 'https://www.eleuther.ai',
						pillars: ['technical'],
						tags: ['Interpretability', 'Remote']
					},
					{
						name: 'Center for AI Safety (CAIS)',
						description: 'Runs the AI and Society Fellowship plus a compute cluster for safety research.',
						url: 'https://www.safe.ai',
						pillars: ['technical', 'policy'],
						tags: ['US']
					},
					{
						name: 'Center for Human-Compatible AI (CHAI, UC Berkeley)',
						description: 'Alignment research center; runs an internship program.',
						url: 'https://humancompatible.ai',
						pillars: ['technical'],
						tags: ['Alignment', 'US', 'Undergrad-friendly']
					},
					{
						name: 'David Krueger AI Safety Lab',
						description: 'Independent academic AI safety lab.',
						url: 'https://krueger-ai-safety-lab.github.io',
						pillars: ['technical']
					},
					{
						name: 'Cambridge Existential Risks Initiative (CERI / ERA)',
						description: 'Cambridge UK fellowship and research community on existential risks from AI.',
						url: 'https://www.erafellowship.org',
						pillars: ['technical', 'policy'],
						tags: ['UK']
					},
					{
						name: 'AI Futures Project',
						description: 'Behind AI 2027; scenario research on AGI trajectories.',
						url: 'https://ai-futures.org',
						pillars: ['technical', 'policy'],
						tags: ['Strategy']
					},
					{
						name: 'Convergence Analysis',
						description: 'AI strategy and scenario research.',
						url: 'https://www.convergenceanalysis.org',
						pillars: ['policy'],
						tags: ['Strategy']
					},
					{
						name: 'Forethought (UK)',
						description: 'Macrostrategy and AI-enabled coups research; FHI alumni network.',
						url: 'https://www.forethought.org',
						pillars: ['policy'],
						tags: ['Strategy', 'UK']
					},
					{
						name: 'LawZero',
						description: "Yoshua Bengio's new safety org.",
						url: 'https://lawzero.org',
						pillars: ['technical']
					},
					{
						name: 'PRISM Eval',
						description: 'Evaluation-focused independent org.',
						url: 'https://www.prism-eval.com',
						pillars: ['technical'],
						tags: ['Evaluations']
					},
					{
						name: 'SecureBio',
						description: 'AI-bio risk; mentors via Pivotal.',
						url: 'https://www.securebio.org',
						pillars: ['technical', 'policy'],
						tags: ['Bio']
					}
				]
			},
			{
				id: 'aisis',
				title: 'Government-Adjacent Safety Institutes',
				items: [
					{
						name: 'UK AI Security Institute (UK AISI)',
						description: 'Leading government safety research body. Pre-deployment access to frontier models; offices in London and SF. International fellows admitted.',
						url: 'https://www.aisi.gov.uk/careers',
						pillars: ['technical', 'policy'],
						tags: ['UK', 'Evaluations', 'Paid']
					},
					{
						name: 'US Center for AI Standards and Innovation (CAISI)',
						description: 'At NIST. Renamed from US AISI in June 2025. Standards, AI agent security, unclassified national-security evaluations.',
						url: 'https://www.nist.gov/caisi',
						pillars: ['technical', 'policy'],
						tags: ['US', 'Evaluations']
					},
					{
						name: 'International AISI Network',
						description: 'AISIs in Japan, Singapore, Canada, EU AI Office, Korea, India, and Kenya.',
						url: 'https://en.wikipedia.org/wiki/Artificial_intelligence_safety_institute',
						pillars: ['technical', 'policy'],
						tags: ['Global']
					}
				]
			},
			{
				id: 'tech-fellowships',
				title: 'Major Technical Fellowships and Training Programs',
				intro:
					'Acceptance rates at the most selective programs (MATS, Pivotal, Astra, Anthropic Fellows) are 1–5%. Apply to several — acceptance is heavily influenced by signal and fit, not just credentials.',
				items: [
					{
						name: 'MATS — ML Alignment & Theory Scholars',
						description:
							'The flagship technical AI safety fellowship. 12 weeks, Berkeley/London. Tracks: empirical, theory, policy & strategy, technical governance, compute governance. $15k stipend, $12k compute, housing, meals, travel. ~75% continue in a fully-funded 6–12-month extension.',
						url: 'https://www.matsprogram.org',
						pillars: ['technical', 'policy'],
						deadline: 'Autumn 2026 applications open late April 2026',
						tags: ['Top Pick', 'Paid', 'US', 'UK']
					},
					{
						name: 'ARENA — Alignment Research Engineer Accelerator',
						description: '4–5 week in-person ML bootcamp at LISA (London). Best route to becoming a strong technical research engineer. Curriculum free online.',
						url: 'https://www.arena.education',
						pillars: ['technical'],
						deadline: 'ARENA 8.0: May 25 – June 26, 2026',
						tags: ['UK', 'Top Pick']
					},
					{
						name: 'Pivotal Research Fellowship (London)',
						description: 'In-person research fellowship at LISA, London. Stipend £6k–£8k plus housing/meals/compute.',
						url: 'https://www.pivotal-research.org',
						pillars: ['technical', 'policy'],
						deadline: 'Q3 2026: June 29 – August 28, 2026 (apps close May 3, 2026)',
						tags: ['UK', 'Paid']
					},
					{
						name: 'ERA Fellowship — Cambridge ERA:AI',
						description: '10-week fellowship in Cambridge, UK. Salary, accommodation, meals, visa support, travel.',
						url: 'https://www.erafellowship.org',
						pillars: ['technical', 'policy'],
						deadline: 'Summer 2026: July 6 – September 11, 2026',
						tags: ['UK', 'Paid']
					},
					{
						name: 'Anthropic Fellows Program',
						description: "Anthropic's flagship external research program. ~4 months remote with optional Berkeley/London/Toronto co-working. $3,850/week stipend, ~$15k/month compute. ~25–50% of fellows received full-time Anthropic offers.",
						url: 'https://www.anthropic.com/research/anthropic-fellows',
						pillars: ['technical'],
						deadline: 'Next cohorts: May 2026 and July 2026 starts',
						tags: ['Top Pick', 'Paid', 'Remote', 'Alignment']
					},
					{
						name: 'OpenAI Safety Fellowship',
						description: 'New 5-month fellowship. Workspace at Constellation Berkeley, remote allowed.',
						url: 'https://openai.com/index/introducing-openai-safety-fellowship/',
						pillars: ['technical'],
						deadline: 'Sept 14, 2026 – Feb 5, 2027',
						tags: ['US', 'Paid', 'Remote']
					},
					{
						name: 'Astra Fellowship — Constellation (Berkeley)',
						description: 'Empirical and Strategy & Governance tracks. Stipend $8,400/month; ~$15k/month compute for empirical fellows.',
						url: 'https://constellation.org/programs/astra/empirical',
						pillars: ['technical', 'policy'],
						deadline: 'Fall 2026: Sept 14, 2026 – Feb 5, 2027',
						tags: ['US', 'Paid', 'Top Pick']
					},
					{
						name: 'CBAI Summer Fellowship — Cambridge, MA',
						description: '9-week fellowship co-located with Harvard and MIT.',
						url: 'https://www.cbai.ai',
						pillars: ['local', 'technical'],
						deadline: 'June 8 – August 10, 2026',
						tags: ['Boston', 'Harvard', 'MIT', 'Paid', 'Undergrad-friendly']
					},
					{
						name: 'SPAR — Supervised Program for Alignment Research',
						description: 'Part-time, remote 3-month projects. Lowest-friction starting point. 130+ projects in Spring 2026. Run by Kairos.',
						url: 'https://supervisedprogramforalignment.org',
						pillars: ['technical', 'policy'],
						tags: ['Remote', 'Undergrad-friendly', 'Top Pick']
					},
					{
						name: 'ML4Good',
						description: '10-day residential ML + AI safety bootcamp, free. Western Europe, Central Europe, Canada, and South Africa cohorts.',
						url: 'https://www.ml4good.org',
						pillars: ['technical'],
						tags: ['EU', 'Global']
					},
					{
						name: 'TARA — Technical Alignment Research Accelerator (APAC)',
						description: '14-week part-time program based on the ARENA curriculum.',
						url: 'https://taraprogram.org',
						pillars: ['technical'],
						tags: ['APAC', 'Remote']
					},
					{
						name: 'AI Safety Camp (AISC)',
						description: 'Online part-time research program. 27 public projects in the 11th edition.',
						url: 'https://www.aisafety.camp',
						pillars: ['technical'],
						tags: ['Remote']
					},
					{
						name: 'Athena (AI Safety) Fellowship',
						description: 'Smaller women- and nonbinary-focused alignment research fellowship.',
						url: 'https://www.athenacareers.org',
						pillars: ['technical']
					},
					{
						name: 'LASR Labs (London)',
						description: 'Short alignment residency for more experienced researchers.',
						url: 'https://www.lasrlabs.org',
						pillars: ['technical'],
						tags: ['UK']
					},
					{
						name: 'OpenAI Residency',
						description: 'OpenAI residency for technical researchers and engineers.',
						url: 'https://openai.com/residency/',
						pillars: ['technical'],
						tags: ['US', 'Paid']
					},
					{
						name: 'Google DeepMind Student Researcher / Internship',
						description: 'Internship and student-researcher pathways into DeepMind.',
						url: 'https://deepmind.google/careers/students/',
						pillars: ['technical'],
						tags: ['UK', 'US', 'Undergrad-friendly']
					}
				]
			},
			{
				id: 'self-study',
				title: 'Self-Study Curricula (Free, Online)',
				items: [
					{
						name: 'BlueDot Impact AI Safety Fundamentals',
						description: 'AGI Strategy, Technical AI Safety, AI Governance, and Biosecurity courses. Best on-ramp.',
						url: 'https://aisafetyfundamentals.com',
						pillars: ['technical', 'policy'],
						tags: ['Top Pick', 'Remote', 'Undergrad-friendly']
					},
					{
						name: 'ARENA Curriculum (free)',
						description: 'Self-paced version of the ARENA technical bootcamp.',
						url: 'https://learn.arena.education',
						pillars: ['technical'],
						tags: ['Remote']
					},
					{
						name: "Intro to ML Safety + Hendrycks's Textbook",
						description: 'CAIS course plus the free Introduction to AI Safety, Ethics, and Society textbook.',
						url: 'https://course.mlsafety.org',
						pillars: ['technical']
					},
					{
						name: 'Alignment Forum — Sequences',
						description: 'Foundational technical AI safety writing.',
						url: 'https://www.alignmentforum.org/library',
						pillars: ['technical']
					},
					{
						name: 'AI Safety Atlas Self-Study',
						description: 'Curated self-study path.',
						url: 'https://aisafety.com/self-study',
						pillars: ['technical', 'policy']
					},
					{
						name: 'Stampy.ai / aisafety.info',
						description: 'Q&A-style introduction to AI safety.',
						url: 'https://aisafety.info',
						pillars: ['technical', 'policy']
					},
					{
						name: 'AI Safety Collab Hub',
						description: 'Collaborative self-study hub.',
						url: 'https://aisafetycollab.com',
						pillars: ['technical']
					},
					{
						name: "Boaz Barak's CS 2881r Lectures",
						description: 'Course materials and YouTube recordings.',
						url: 'https://boazbk.github.io/mltheoryseminar',
						pillars: ['technical']
					}
				]
			},
			{
				id: 'compute',
				title: 'Compute and Research Tooling for Students',
				items: [
					{
						name: 'Kempner AI Cluster',
						description: '~1,144 GPUs available to Harvard researchers.',
						url: 'https://kempnerinstitute.harvard.edu/research/aicluster/',
						pillars: ['local', 'technical'],
						tags: ['Harvard']
					},
					{
						name: 'MIT SuperCloud',
						description: 'High-performance computing for MIT students.',
						url: 'https://supercloud.mit.edu',
						pillars: ['local', 'technical'],
						tags: ['MIT']
					},
					{
						name: 'CAIS Compute Cluster',
						description: 'Compute access program from the Center for AI Safety.',
						url: 'https://www.safe.ai/work/compute-cluster',
						pillars: ['technical']
					},
					{
						name: 'Coefficient Giving Compute Grants',
						description: 'Compute grants via the Technical AI Safety RFP.',
						url: 'https://www.openphilanthropy.org/request-for-proposals-technical-ai-safety-research/',
						pillars: ['technical']
					},
					{
						name: 'Schmidt Sciences Safety Science',
						description: 'Funding for safety-focused research, including compute.',
						url: 'https://www.schmidtsciences.org/safety-science/',
						pillars: ['technical']
					},
					{
						name: 'Vast.ai',
						description: 'Cheap on-demand GPU rental.',
						url: 'https://vast.ai',
						pillars: ['technical']
					},
					{
						name: 'Lambda Labs',
						description: 'GPU cloud and rentals.',
						url: 'https://lambda.ai',
						pillars: ['technical']
					},
					{
						name: 'RunPod',
						description: 'On-demand GPU cloud.',
						url: 'https://runpod.io',
						pillars: ['technical']
					},
					{
						name: 'Together.ai',
						description: 'Inference and training infrastructure.',
						url: 'https://together.ai',
						pillars: ['technical']
					},
					{
						name: 'Manifund "AI Safety Compute"',
						description: 'Manifund regranting program for compute.',
						url: 'https://manifund.org',
						pillars: ['technical']
					}
				]
			}
		]
	},
	{
		id: 'policy',
		title: 'Part III — AI Policy and Governance',
		icon: 'fa-solid fa-landmark',
		sections: [
			{
				id: 'us-policy-fellows',
				title: 'US Federal and Congressional Pathways',
				items: [
					{
						name: 'Horizon Fellowship',
						description: 'AI policy fellowship in DC. $113k/year fellows; $75k/year junior fellows; +$15k health/professional development.',
						url: 'https://horizonpublicservice.org/programs/become-a-fellow/',
						pillars: ['policy'],
						tags: ['US', 'Paid', 'Top Pick']
					},
					{
						name: 'Horizon Career Accelerator',
						description: 'Career accelerator from Horizon Institute for Public Service.',
						url: 'https://horizonpublicservice.org/programs/horizon-career-accelerator/',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'AI Policy Leadership Network (APLN)',
						description: 'Horizon network for AI policy leaders.',
						url: 'https://horizonpublicservice.org/programs/apln/',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'TechCongress',
						description: 'Two tracks: Congressional Innovation Fellowship ($80k) and Senior CIF ($96,750).',
						url: 'https://www.techcongress.io/apply',
						pillars: ['policy'],
						tags: ['US', 'Paid']
					},
					{
						name: 'RAND Center on AI, Security, and Technology (CAST)',
						description: 'Formerly TASP. Must be eligible for US (citizen) or UK government security clearance.',
						url: 'https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/fellows.html',
						pillars: ['policy', 'technical'],
						tags: ['US', 'UK', 'Paid']
					},
					{
						name: 'GovAI DC Summer Fellowship',
						description: 'Summer policy fellowship in Washington, DC. $21,000 stipend.',
						url: 'https://www.governance.ai/careers/dc-summer-fellowship',
						pillars: ['policy'],
						deadline: 'June 8 – August 28, 2026',
						tags: ['US', 'Paid']
					},
					{
						name: 'FAS Day One Fellowship',
						description: 'Tech policy fellowship from the Federation of American Scientists.',
						url: 'https://dayoneproject.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Presidential Innovation Fellows',
						description: 'Federal innovation fellowship.',
						url: 'https://presidentialinnovationfellows.gov',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'AAAS Science & Technology Policy Fellowships',
						description: 'Long-running federal-branch S&T policy fellowships.',
						url: 'https://www.aaas.org/programs/science-technology-policy-fellowships',
						pillars: ['policy'],
						tags: ['US']
					}
				]
			},
			{
				id: 'us-thinktanks',
				title: 'US Think Tanks and Policy Organizations',
				items: [
					{
						name: 'Institute for AI Policy and Strategy (IAPS)',
						description: 'AI policy research org with its own fellowship.',
						url: 'https://www.iaps.ai',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Center for a New American Security (CNAS)',
						description: 'National-security think tank with strong AI track.',
						url: 'https://www.cnas.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'CSET (Georgetown)',
						description: 'Center for Security and Emerging Technology.',
						url: 'https://cset.georgetown.edu',
						pillars: ['policy'],
						tags: ['US', 'Compute Gov']
					},
					{
						name: 'Center for AI Safety Action Fund',
						description: 'Advocacy arm of CAIS.',
						url: 'https://www.aisafetyactionfund.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Federation of American Scientists (FAS)',
						description: 'Bipartisan science and technology policy.',
						url: 'https://fas.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Institute for Progress (IFP)',
						description: 'Progress-focused tech policy think tank.',
						url: 'https://ifp.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Foundation for American Innovation (FAI)',
						description: 'Conservative AI Policy Fellowship and broader tech policy work.',
						url: 'https://www.thefai.org/fellowships',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Americans for Responsible Innovation (ARI)',
						description: 'Advocacy on AI and emerging technology.',
						url: 'https://americansforresponsibleinnovation.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'AI Policy Network (AIPN)',
						description: 'Coordination network for AI policy advocacy.',
						url: 'https://aipolicynetwork.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Encode AI',
						description: 'Helped pass California SB 53, NY RAISE Act, TAKE IT DOWN Act, and AI-in-nuclear-launch provisions of FY25 NDAA.',
						url: 'https://encodeai.org',
						pillars: ['policy', 'comms'],
						tags: ['US', 'Undergrad-friendly']
					},
					{
						name: 'Secure AI Project',
						description: 'AI security advocacy.',
						url: 'https://www.secureaiproject.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Alliance for Secure AI',
						description: 'Coalition advocating for AI security.',
						url: 'https://www.securaiusa.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'ControlAI',
						description: 'Advocacy org focused on superintelligence risk.',
						url: 'https://controlai.com',
						pillars: ['policy', 'comms']
					},
					{
						name: 'CivAI',
						description: 'Hands-on AI risk demonstrations for policymakers.',
						url: 'https://civai.org',
						pillars: ['policy', 'comms'],
						tags: ['US']
					},
					{
						name: 'AI Policy Institute',
						description: 'Polling and policy research on AI.',
						url: 'https://theaipi.org',
						pillars: ['policy']
					},
					{
						name: 'GovAI (Centre for the Governance of AI, UK/DC)',
						description: 'Leading academic AI governance research center.',
						url: 'https://www.governance.ai',
						pillars: ['policy'],
						tags: ['UK', 'US', 'Top Pick']
					},
					{
						name: 'CSIS',
						description: 'Center for Strategic and International Studies.',
						url: 'https://www.csis.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Brookings AI',
						description: 'Brookings Institution AI research.',
						url: 'https://www.brookings.edu/topic/artificial-intelligence/',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'AEI Tech Policy',
						description: 'American Enterprise Institute tech policy program.',
						url: 'https://www.aei.org/policy-areas/technology/',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Hoover Institution',
						description: 'Stanford-based policy research institution.',
						url: 'https://www.hoover.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'R Street Institute',
						description: 'Free-market policy think tank with AI work.',
						url: 'https://www.rstreet.org',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Niskanen Center',
						description: 'Center-right think tank with AI policy work.',
						url: 'https://www.niskanencenter.org',
						pillars: ['policy'],
						tags: ['US']
					}
				]
			},
			{
				id: 'intl-policy',
				title: 'UK / EU / International Policy Programs',
				items: [
					{
						name: 'GovAI Summer Fellowship — Research Track (London)',
						description: 'Research-track GovAI summer fellowship.',
						url: 'https://www.governance.ai/careers/summer-fellowship-research-track',
						pillars: ['policy'],
						tags: ['UK', 'Paid']
					},
					{
						name: 'GovAI Summer Fellowship — Applied Track',
						description: 'Applied-track GovAI summer fellowship.',
						url: 'https://www.governance.ai/careers/summer-fellowship-applied-track',
						pillars: ['policy'],
						tags: ['UK', 'Paid']
					},
					{
						name: 'Talos Fellowship (Brussels)',
						description: 'EU policy fellowship. Online program then on-site summit.',
						url: 'https://www.talosnetwork.org/talos-fellowship',
						pillars: ['policy'],
						deadline: 'Autumn 2026: Aug 12 – Sept 30 online; Brussels Summit Oct 3–9, 2026',
						tags: ['EU']
					},
					{
						name: 'Talos Policy Leaders Programme',
						description: 'Talos program for established policy leaders.',
						url: 'https://www.talosnetwork.org/policy-leaders-programme',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: "CeSIA — Centre pour la Sécurité de l'IA",
						description: 'French AI safety org.',
						url: 'https://www.cesia.fr',
						pillars: ['policy', 'technical'],
						tags: ['EU']
					},
					{
						name: 'KIRA Center (Germany)',
						description: 'German AI risk research center.',
						url: 'https://kira-center.org',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: 'Centre for Future Generations',
						description: 'EU-focused longtermist policy org.',
						url: 'https://cfg.eu',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: 'The Future Society',
						description: 'International AI governance non-profit.',
						url: 'https://thefuturesociety.org',
						pillars: ['policy'],
						tags: ['Global']
					},
					{
						name: 'CEPS',
						description: 'Centre for European Policy Studies.',
						url: 'https://www.ceps.eu',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: 'OECD.AI Policy Observatory',
						description: 'OECD AI policy hub.',
						url: 'https://oecd.ai',
						pillars: ['policy'],
						tags: ['Global']
					},
					{
						name: 'EU AI Office',
						description: 'European Commission AI Office, implementing the EU AI Act.',
						url: 'https://digital-strategy.ec.europa.eu/en/policies/ai-office',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: 'UN AI Advisory Body',
						description: 'United Nations AI advisory body.',
						url: 'https://www.un.org/ai-advisory-body',
						pillars: ['policy'],
						tags: ['Global']
					},
					{
						name: 'SaferAI',
						description: 'Risk-management standards and audits for AI.',
						url: 'https://www.saferai.org',
						pillars: ['policy'],
						tags: ['EU']
					},
					{
						name: 'Beijing Institute of AI Safety and Governance',
						description: 'Chinese AI safety and governance institute.',
						url: 'http://en.beijing-aisi.ac.cn/',
						pillars: ['policy'],
						tags: ['Global']
					},
					{
						name: 'Tsinghua I-AIIG',
						description: 'Tsinghua Institute of AI International Governance.',
						url: 'https://aiig.tsinghua.edu.cn/en/',
						pillars: ['policy'],
						tags: ['Global']
					},
					{
						name: '80,000 Hours — China-related AI Safety Paths',
						description: 'Career review covering China-focused AI safety and governance.',
						url: 'https://80000hours.org/career-reviews/china-related-ai-safety-and-governance-paths/',
						pillars: ['policy']
					}
				]
			},
			{
				id: 'law',
				title: 'Law and AI',
				items: [
					{
						name: 'Institute for Law & AI (LawAI)',
						description: 'Seasonal Research Fellowships across US Law, EU Law, and Legal Frontiers tracks. Cambridge Forum on Law and AI (Aug 18–23, 2026).',
						url: 'https://law-ai.org',
						pillars: ['policy'],
						tags: ['Law', 'US', 'EU']
					},
					{
						name: 'LawAI — US Law Track',
						description: 'US-focused legal research fellowship.',
						url: 'https://law-ai.org/srf-us/',
						pillars: ['policy'],
						tags: ['Law', 'US']
					},
					{
						name: 'LawAI — EU Law Track',
						description: 'EU-focused legal research fellowship.',
						url: 'https://law-ai.org/srf-eu-law/',
						pillars: ['policy'],
						tags: ['Law', 'EU']
					},
					{
						name: 'LawAI — Legal Frontiers Track',
						description: 'Frontier legal questions in AI.',
						url: 'https://law-ai.org/srf-lf/',
						pillars: ['policy'],
						tags: ['Law']
					},
					{
						name: 'Stanford CodeX',
						description: 'Stanford Center for Legal Informatics.',
						url: 'https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/',
						pillars: ['policy'],
						tags: ['Law', 'US']
					},
					{
						name: 'NYU AI Now',
						description: 'AI Now Institute at NYU.',
						url: 'https://ainowinstitute.org',
						pillars: ['policy'],
						tags: ['Law', 'US']
					},
					{
						name: 'Georgetown Law Tech Institute',
						description: 'Tech Institute at Georgetown Law.',
						url: 'https://www.law.georgetown.edu/tech-institute/',
						pillars: ['policy'],
						tags: ['Law', 'US']
					}
				]
			}
		]
	},
	{
		id: 'fieldbuilding',
		title: 'Part IV — Field-Building and Event Organizing',
		icon: 'fa-solid fa-people-group',
		intro:
			'Per Kairos and Constellation, ~2,000 AI safety research fellows will be trained in 2026 but only ~300 non-research fellows. If you\'re versatile, dedicated, and good with people, this is currently one of the highest-leverage paths in the field.',
		sections: [
			{
				id: 'fieldbuilders',
				title: 'Field-Building Organizations You Can Join',
				items: [
					{
						name: 'Kairos',
						description: 'Operates SPAR, Pathfinder Fellowship, and the Global Challenges Project. Hires Founding Generalists ($90k–$150k) and SPAR Contractors.',
						url: 'https://kairos-project.org/hiring/',
						pillars: ['fieldbuilding'],
						tags: ['Remote', 'Paid', 'Organizing']
					},
					{
						name: 'Constellation Institute (Berkeley)',
						description: 'Programs: Generator Residency, Visiting Fellowship, Residency, Incubator.',
						url: 'https://constellation.org/programs',
						pillars: ['fieldbuilding'],
						tags: ['US', 'Top Pick']
					},
					{
						name: 'Generator Residency',
						description: 'Constellation × Kairos residency. $6,000/month stipend, housing covered.',
						url: 'https://generatorresidency.org',
						pillars: ['fieldbuilding', 'comms'],
						deadline: 'June 15 – August 28, 2026',
						tags: ['US', 'Paid', 'Organizing']
					},
					{
						name: 'Constellation Visiting Fellowship',
						description: 'Visiting fellowship at Constellation.',
						url: 'https://constellation.org/programs/visiting-fellowship',
						pillars: ['fieldbuilding', 'technical'],
						tags: ['US']
					},
					{
						name: 'Constellation Residency',
						description: 'Longer-term residency at Constellation.',
						url: 'https://constellation.org/programs/residency',
						pillars: ['fieldbuilding'],
						tags: ['US']
					},
					{
						name: 'Constellation Incubator',
						description: 'Incubator for new AI safety projects.',
						url: 'https://constellation.org/programs/incubator',
						pillars: ['fieldbuilding'],
						tags: ['US']
					},
					{
						name: 'Pathfinder Fellowship',
						description: 'Selective fellowship for students organizing AI safety / AI policy university groups. Fall 2025: 65 fellows at 51 universities in 11 countries.',
						url: 'https://pathfinder.kairos-project.org',
						pillars: ['fieldbuilding'],
						tags: ['Organizing', 'Undergrad-friendly', 'Top Pick']
					},
					{
						name: 'BlueDot Impact',
						description: 'Runs AI safety courses and a founders program.',
						url: 'https://bluedot.org',
						pillars: ['fieldbuilding', 'technical'],
						tags: ['Remote', 'Top Pick']
					},
					{
						name: 'BlueDot Founders Program',
						description: "BlueDot's program for founding new AI safety projects.",
						url: 'https://bluedot.org/founders',
						pillars: ['fieldbuilding']
					},
					{
						name: 'BlueDot Project Sprints',
						description: 'Short focused sprints for course alumni.',
						url: 'https://bluedot.org/sprints',
						pillars: ['fieldbuilding'],
						tags: ['Remote']
					},
					{
						name: 'Apart Research Sprints',
						description: 'AI safety hackathons.',
						url: 'https://apartresearch.com/sprints',
						pillars: ['fieldbuilding', 'technical'],
						tags: ['Remote']
					},
					{
						name: 'Apart Lab Fellowship',
						description: 'Fellowship to extend hackathon projects into research.',
						url: 'https://apartresearch.com/lab',
						pillars: ['technical'],
						tags: ['Remote']
					}
				]
			},
			{
				id: 'funders',
				title: 'Funders, Fiscal Sponsors, and Lower-Bar On-Ramps',
				items: [
					{
						name: 'Effective Ventures (EV)',
						description: 'Fiscal sponsor for many AI safety projects.',
						url: 'https://www.ev.org',
						pillars: ['fieldbuilding']
					},
					{
						name: 'EA Infrastructure Fund (EAIF)',
						description: 'Funding for community/infrastructure projects.',
						url: 'https://funds.effectivealtruism.org/funds/ea-community',
						pillars: ['fieldbuilding']
					},
					{
						name: 'Centre for Effective Altruism (CEA)',
						description: 'Operates EA infrastructure including EAGs.',
						url: 'https://www.centreforeffectivealtruism.org',
						pillars: ['fieldbuilding']
					},
					{
						name: 'BERI (Berkeley Existential Risk Initiative)',
						description: 'Operational and funding support for x-risk research.',
						url: 'https://existence.org',
						pillars: ['fieldbuilding', 'technical'],
						tags: ['US']
					},
					{
						name: 'Coefficient Giving (formerly Open Philanthropy)',
						description: 'Major funder of AI safety. Has a Technical AI Safety RFP and many other programs.',
						url: 'https://www.openphilanthropy.org',
						pillars: ['fieldbuilding', 'technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'Pathfinder Support Grants',
						description: 'Year-round grants for university group organizers.',
						url: 'https://pathfinder.kairos-project.org/support-grants',
						pillars: ['fieldbuilding'],
						tags: ['Organizing', 'Undergrad-friendly']
					},
					{
						name: 'BlueDot Talent Accelerator Grant',
						description: 'Grants for course alumni building safety projects.',
						url: 'https://bluedot.org/talent-accelerator',
						pillars: ['fieldbuilding']
					}
				]
			}
		]
	},
	{
		id: 'comms',
		title: 'Part V — Public Communications, Writing, and Journalism',
		icon: 'fa-solid fa-bullhorn',
		sections: [
			{
				id: 'comms-roles',
				title: 'Comms Roles and Funding',
				items: [
					{
						name: '80,000 Hours — Work With Us',
						description: 'Podcast and content roles at 80,000 Hours.',
						url: 'https://80000hours.org/about/work-with-us/',
						pillars: ['comms', 'fieldbuilding'],
						tags: ['UK']
					},
					{
						name: 'Asterisk Magazine',
						description: 'Magazine of essays on emerging technology and global priorities.',
						url: 'https://asteriskmag.com',
						pillars: ['comms']
					},
					{
						name: 'AI in Context',
						description: 'Educational video org on AI safety.',
						url: 'https://www.aiincontext.org',
						pillars: ['comms']
					},
					{
						name: 'Tarbell Center for AI Journalism',
						description: 'Funds and trains AI journalists.',
						url: 'https://tarbellcenter.org',
						pillars: ['comms']
					},
					{
						name: 'Manifund',
						description: 'Distributed regranting of AI safety projects, including comms.',
						url: 'https://manifund.org',
						pillars: ['comms', 'fieldbuilding']
					}
				]
			}
		]
	},
	{
		id: 'reading',
		title: 'Part VI — Newsletters, Podcasts, Books, Reading',
		icon: 'fa-solid fa-book-open',
		intro: 'Subscribe to 4–6 of these to follow the field.',
		sections: [
			{
				id: 'newsletters',
				title: 'Best Single-Stop Weekly News',
				items: [
					{
						name: 'Transformer News',
						description: 'Best single-stop weekly news on AI safety. Shakeel Hashim.',
						url: 'https://www.transformernews.ai',
						pillars: ['policy', 'technical'],
						tags: ['Top Pick']
					},
					{
						name: "Don't Worry About the Vase",
						description: 'Comprehensive weekly AI news commentary by Zvi Mowshowitz.',
						url: 'https://thezvi.substack.com',
						pillars: ['policy', 'technical', 'comms'],
						tags: ['Top Pick']
					},
					{
						name: 'AI Safety Newsletter (CAIS)',
						description: 'Curated weekly summary from the Center for AI Safety.',
						url: 'https://newsletter.safe.ai',
						pillars: ['technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'ML Safety Newsletter',
						description: 'Technical ML safety newsletter from Hendrycks.',
						url: 'https://newsletter.mlsafety.org',
						pillars: ['technical']
					},
					{
						name: '80,000 Hours Newsletter',
						description: 'Career-focused newsletter from 80,000 Hours.',
						url: 'https://80000hours.org/newsletter/',
						pillars: ['fieldbuilding']
					}
				]
			},
			{
				id: 'newsletters-tech',
				title: 'Technical and Research-Focused',
				items: [
					{
						name: 'Import AI',
						description: 'Jack Clark — research-focused weekly AI news.',
						url: 'https://importai.substack.com',
						pillars: ['technical'],
						tags: ['Top Pick']
					},
					{
						name: 'AI Snake Oil',
						description: 'Narayanan & Kapoor on AI hype and reality.',
						url: 'https://www.aisnakeoil.com',
						pillars: ['comms']
					},
					{
						name: 'Alignment Forum',
						description: 'Technical AI alignment discussion forum.',
						url: 'https://www.alignmentforum.org',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'LessWrong',
						description: 'Rationalist/safety community discussion site.',
						url: 'https://www.lesswrong.com',
						pillars: ['technical', 'comms']
					},
					{
						name: 'AI Frontiers',
						description: 'Frontier-AI-focused newsletter.',
						url: 'https://aifrontiers.com',
						pillars: ['technical']
					},
					{
						name: 'AI Evaluation Newsletter',
						description: 'Focused on evaluations and dangerous-capability testing.',
						url: 'https://aievaluation.substack.com',
						pillars: ['technical'],
						tags: ['Evaluations']
					}
				]
			},
			{
				id: 'newsletters-policy',
				title: 'Policy Newsletters',
				items: [
					{
						name: 'Hyperdimensional',
						description: 'Dean W. Ball on AI policy.',
						url: 'https://www.hyperdimensional.co',
						pillars: ['policy'],
						tags: ['Top Pick', 'US']
					},
					{
						name: 'Rising Tide',
						description: 'Helen Toner on AI policy.',
						url: 'https://helentoner.substack.com',
						pillars: ['policy'],
						tags: ['Top Pick']
					},
					{
						name: 'ChinaTalk',
						description: 'Jordan Schneider on China and tech.',
						url: 'https://www.chinatalk.media',
						pillars: ['policy']
					},
					{
						name: 'Navigating AI Risks',
						description: 'AI risk-focused newsletter.',
						url: 'https://www.navigatingrisks.ai',
						pillars: ['policy']
					},
					{
						name: 'AI Lab Watch',
						description: "Zach Stein-Perlman's tracker of frontier-lab safety practices.",
						url: 'https://ailabwatch.org',
						pillars: ['policy']
					},
					{
						name: 'Obsolete',
						description: 'Garrison Lovely on AI and the future.',
						url: 'https://www.garrisonlovely.com',
						pillars: ['comms', 'policy']
					}
				]
			},
			{
				id: 'newsletters-strategy',
				title: 'Strategy and Forecasting',
				items: [
					{
						name: 'AI 2027',
						description: 'AI Futures Project scenario forecast.',
						url: 'https://ai-2027.com',
						pillars: ['technical', 'policy'],
						tags: ['Strategy']
					},
					{
						name: 'Astral Codex Ten',
						description: 'Scott Alexander on AI, science, and rationality.',
						url: 'https://www.astralcodexten.com',
						pillars: ['comms', 'technical']
					},
					{
						name: 'Peter Wildeford',
						description: 'Strategy, forecasting, and AI safety community updates.',
						url: 'https://blog.peterwildeford.com',
						pillars: ['policy', 'fieldbuilding']
					},
					{
						name: 'Miles Brundage',
						description: 'Former OpenAI on AI policy and governance.',
						url: 'https://milesbrundage.substack.com',
						pillars: ['policy']
					}
				]
			},
			{
				id: 'podcasts',
				title: 'Podcasts',
				items: [
					{
						name: '80,000 Hours Podcast',
						description: 'Long-form interviews on impactful careers.',
						url: 'https://80000hours.org/podcast/',
						pillars: ['fieldbuilding', 'technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'Dwarkesh Podcast',
						description: 'Long, technical interviews with AI researchers.',
						url: 'https://www.dwarkesh.com',
						pillars: ['technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'AXRP',
						description: 'Daniel Filan — AI X-risk Research Podcast. Technical alignment interviews.',
						url: 'https://axrp.net',
						pillars: ['technical'],
						tags: ['Alignment', 'Top Pick']
					},
					{
						name: 'The Cognitive Revolution',
						description: 'Nathan Labenz — interviews and analysis.',
						url: 'https://www.cognitiverevolution.ai',
						pillars: ['technical', 'policy']
					},
					{
						name: 'Doom Debates',
						description: 'Liron Shapira — debates on AI x-risk.',
						url: 'https://doomdebates.com',
						pillars: ['comms']
					},
					{
						name: 'The Inside View',
						description: 'AI safety interviews.',
						url: 'https://theinsideview.ai',
						pillars: ['technical']
					},
					{
						name: 'FLI Podcast',
						description: 'Future of Life Institute podcast.',
						url: 'https://futureoflife.org/podcasts/',
						pillars: ['technical', 'policy']
					},
					{
						name: 'Emerging Tech Policy Podcast',
						description: 'Horizon-run podcast on emerging tech policy careers.',
						url: 'https://emergingtechpolicy.org/podcast/',
						pillars: ['policy']
					},
					{
						name: 'CSIS AI Policy Podcast',
						description: 'Policy podcast from CSIS.',
						url: 'https://www.csis.org/podcasts',
						pillars: ['policy']
					},
					{
						name: 'Lawfare Podcast',
						description: 'National security and law podcast — frequent AI coverage.',
						url: 'https://www.lawfaremedia.org/podcasts',
						pillars: ['policy'],
						tags: ['Law']
					}
				]
			},
			{
				id: 'books',
				title: 'Books',
				items: [
					{
						name: 'The Precipice',
						description: 'Toby Ord on existential risks. Foundational.',
						url: 'https://theprecipice.com',
						pillars: ['policy', 'technical'],
						tags: ['Strategy']
					},
					{
						name: 'Superintelligence',
						description: 'Nick Bostrom — foundational text on advanced AI risks.',
						url: 'https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834',
						pillars: ['technical', 'policy'],
						tags: ['Strategy']
					},
					{
						name: 'Human Compatible',
						description: 'Stuart Russell on building safer AI.',
						url: 'https://en.wikipedia.org/wiki/Human_Compatible',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'The Alignment Problem',
						description: 'Brian Christian — accessible introduction to alignment.',
						url: 'https://brianchristian.org/the-alignment-problem/',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'If Anyone Builds It, Everyone Dies',
						description: 'Yudkowsky & Soares (2025).',
						url: 'https://ifanyonebuildsit.com',
						pillars: ['comms']
					},
					{
						name: 'Introduction to AI Safety, Ethics, and Society',
						description: 'Hendrycks textbook (free PDF).',
						url: 'https://www.aisafetybook.com',
						pillars: ['technical'],
						tags: ['Top Pick']
					},
					{
						name: 'The Coming Wave',
						description: 'Mustafa Suleyman on the future of AI and biotech.',
						url: 'https://the-coming-wave.com/',
						pillars: ['policy']
					},
					{
						name: 'Power and Progress',
						description: 'Acemoglu & Johnson on technology and shared prosperity.',
						url: 'https://shapingwork.mit.edu/power-and-progress/',
						pillars: ['policy']
					}
				]
			},
			{
				id: 'papers',
				title: 'Foundational Papers and Reports',
				items: [
					{
						name: 'Concrete Problems in AI Safety',
						description: 'Amodei et al., 2016. The canonical introduction to technical AI safety.',
						url: 'https://arxiv.org/abs/1606.06565',
						pillars: ['technical'],
						tags: ['Top Pick']
					},
					{
						name: 'Unsolved Problems in ML Safety',
						description: 'Hendrycks et al., 2021.',
						url: 'https://arxiv.org/abs/2109.13916',
						pillars: ['technical']
					},
					{
						name: "DeepMind's Approach to Technical AGI Safety",
						description: 'Google DeepMind\'s published safety agenda.',
						url: 'https://deepmind.google/discover/blog/taking-a-responsible-path-to-agi/',
						pillars: ['technical']
					},
					{
						name: "Anthropic's Recommended Research Directions",
						description: "Curated alignment research agenda from Anthropic's alignment team.",
						url: 'https://alignment.anthropic.com/2025/recommended-directions/',
						pillars: ['technical'],
						tags: ['Alignment']
					},
					{
						name: 'Coefficient Giving Technical AI Safety RFP',
						description: 'RFP outlining priority technical safety research areas.',
						url: 'https://www.openphilanthropy.org/request-for-proposals-technical-ai-safety-research/',
						pillars: ['technical']
					},
					{
						name: 'International AI Safety Report (2025/2026)',
						description: 'Bengio et al. International expert assessment of AI risks.',
						url: 'https://www.gov.uk/government/publications/international-ai-safety-report-2025',
						pillars: ['policy', 'technical'],
						tags: ['Strategy']
					}
				]
			}
		]
	},
	{
		id: 'events',
		title: 'Part VII — Major Conferences and Events',
		icon: 'fa-solid fa-calendar-days',
		sections: [
			{
				id: 'eag',
				title: 'EA Globals',
				items: [
					{
						name: 'EA Global',
						description: 'EAG conferences (Bay Area, London, NYC) plus regional EAGxs. Strong AI safety presence.',
						url: 'https://www.eaglobal.org',
						pillars: ['fieldbuilding', 'technical', 'policy'],
						tags: ['Top Pick']
					}
				]
			},
			{
				id: 'tech-conferences',
				title: 'Technical Safety Conferences and Workshops',
				items: [
					{
						name: 'NeurIPS',
						description: 'Major ML venue. Workshops include Regulatable ML, SoLaR, SafeML, Safe Generative AI, Safe and Trustworthy Agentic AI.',
						url: 'https://neurips.cc',
						pillars: ['technical']
					},
					{
						name: 'ICML',
						description: 'International Conference on Machine Learning.',
						url: 'https://icml.cc',
						pillars: ['technical']
					},
					{
						name: 'ICLR',
						description: 'International Conference on Learning Representations.',
						url: 'https://iclr.cc',
						pillars: ['technical']
					},
					{
						name: 'AAAI',
						description: 'AAAI Conference on Artificial Intelligence.',
						url: 'https://aaai.org',
						pillars: ['technical']
					},
					{
						name: 'FAccT',
						description: 'Conference on Fairness, Accountability, and Transparency.',
						url: 'https://facctconference.org',
						pillars: ['technical', 'policy']
					},
					{
						name: 'AIES',
						description: 'AAAI/ACM Conference on AI, Ethics, and Society.',
						url: 'https://www.aies-conference.com',
						pillars: ['policy']
					},
					{
						name: 'ControlConf / FAR.AI Alignment Workshops',
						description: 'Technical-heavy workshops on AI control and alignment.',
						url: 'https://far.ai/events',
						pillars: ['technical'],
						tags: ['Control']
					},
					{
						name: 'The Curve / Constellation Events',
						description: 'Constellation-organized AI strategy conference.',
						url: 'https://www.thecurve-conference.com',
						pillars: ['fieldbuilding', 'policy']
					},
					{
						name: 'AI Security Forum',
						description: 'Annual AI security event.',
						url: 'https://www.aisecurityforum.org',
						pillars: ['technical', 'policy']
					}
				]
			},
			{
				id: 'policy-conferences',
				title: 'Policy Conferences',
				items: [
					{
						name: 'IASEAI',
						description: 'International Association for Safe and Ethical AI.',
						url: 'https://www.iaseai.org',
						pillars: ['policy']
					},
					{
						name: 'AI Action Summits',
						description: 'Successor to the UK/Paris AI Safety Summits.',
						url: 'https://www.aiactionsummit.com',
						pillars: ['policy'],
						tags: ['Global']
					}
				]
			}
		]
	},
	{
		id: 'funding',
		title: 'Part VIII — Funding for Early-Career Projects',
		icon: 'fa-solid fa-sack-dollar',
		sections: [
			{
				id: 'funding-list',
				title: 'Grants, Funds, and Fellowships',
				items: [
					{
						name: 'Long-Term Future Fund (LTFF)',
						description: 'Funds individuals and small projects on AI safety and other long-term risks.',
						url: 'https://funds.effectivealtruism.org/funds/far-future',
						pillars: ['technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'EA Infrastructure Fund (EAIF)',
						description: 'Funding for community/infrastructure projects.',
						url: 'https://funds.effectivealtruism.org/funds/ea-community',
						pillars: ['fieldbuilding']
					},
					{
						name: 'Manifund Regrants',
						description: 'Distributed regranting of AI safety projects.',
						url: 'https://manifund.org/about/regranting',
						pillars: ['fieldbuilding', 'technical']
					},
					{
						name: 'Survival and Flourishing Fund (SFF)',
						description: 'Speculation Grants rolling year-round.',
						url: 'https://survivalandflourishing.fund',
						pillars: ['technical', 'policy']
					},
					{
						name: 'Coefficient Giving',
						description: 'Formerly Open Philanthropy. Major funder of AI safety.',
						url: 'https://www.openphilanthropy.org',
						pillars: ['fieldbuilding', 'technical', 'policy'],
						tags: ['Top Pick']
					},
					{
						name: 'Lightspeed Grants',
						description: 'Fast-turnaround grants for x-risk projects.',
						url: 'https://lightspeedgrants.org',
						pillars: ['fieldbuilding', 'technical']
					},
					{
						name: 'Schmidt Sciences Safety Science',
						description: 'Funding for safety-focused research.',
						url: 'https://www.schmidtsciences.org/safety-science/',
						pillars: ['technical']
					},
					{
						name: 'Foresight Institute',
						description: 'Funding for technology risk and futures work.',
						url: 'https://foresight.org',
						pillars: ['technical']
					},
					{
						name: 'Future of Life Institute Grants',
						description: 'Grant program for AI safety and existential risk.',
						url: 'https://futureoflife.org/grant-program/',
						pillars: ['technical', 'policy']
					},
					{
						name: 'Vitalik Buterin PhD Fellowship',
						description: 'Fully-funds safety-focused PhDs at top universities. Note: 2-year donation pledge if you take a frontier-lab job — read the terms.',
						url: 'https://futureoflife.org/grant-program/phd-fellowships/',
						pillars: ['technical'],
						tags: ['Paid']
					},
					{
						name: 'Vitalik Buterin Postdoctoral Fellowship',
						description: 'Postdoctoral fellowship for AI safety researchers.',
						url: 'https://futureoflife.org/grant-program/postdoctoral-fellowships/',
						pillars: ['technical'],
						tags: ['Paid']
					},
					{
						name: 'Cooperative AI Foundation',
						description: 'Funds work on cooperation between AI systems.',
						url: 'https://www.cooperativeai.com',
						pillars: ['technical']
					},
					{
						name: 'Tarbell Center',
						description: 'Funds and trains AI journalists.',
						url: 'https://tarbellcenter.org',
						pillars: ['comms']
					}
				]
			}
		]
	},
	{
		id: 'career-capital',
		title: 'Part IX — Career Capital and Practical Considerations',
		icon: 'fa-solid fa-route',
		sections: [
			{
				id: 'phds',
				title: 'ML PhDs Strong on Safety',
				intro: 'The Vitalik Buterin PhD Fellowship can fully fund safety-focused PhDs at any of these.',
				items: [
					{
						name: 'CHAI / BAIR (UC Berkeley)',
						description: 'Top university lab pairing for safety-focused PhDs.',
						url: 'https://humancompatible.ai',
						pillars: ['technical'],
						tags: ['US', 'Alignment']
					},
					{
						name: 'MIT (Algorithmic Alignment Group, CDML, CSAIL)',
						description: 'Hadfield-Menell, Madry, Andreas, Isola.',
						url: 'https://algorithmicalignment.csail.mit.edu',
						pillars: ['local', 'technical'],
						tags: ['MIT', 'Boston']
					},
					{
						name: 'Harvard SEAS / Kempner',
						description: 'Barak, Kakade, Doshi-Velez, Wattenberg/Viégas, Lakkaraju.',
						url: 'https://seas.harvard.edu',
						pillars: ['local', 'technical'],
						tags: ['Harvard', 'Boston']
					},
					{
						name: 'Stanford HAI',
						description: 'Stanford Institute for Human-Centered AI.',
						url: 'https://hai.stanford.edu',
						pillars: ['technical', 'policy'],
						tags: ['US']
					},
					{
						name: 'CMU Machine Learning',
						description: 'Carnegie Mellon ML department.',
						url: 'https://www.ml.cmu.edu',
						pillars: ['technical'],
						tags: ['US']
					},
					{
						name: 'Princeton CITP',
						description: 'Center for Information Technology Policy.',
						url: 'https://citp.princeton.edu',
						pillars: ['policy', 'technical'],
						tags: ['US']
					},
					{
						name: 'NYU Center for Data Science',
						description: 'Strong group for ML PhD students.',
						url: 'https://cds.nyu.edu',
						pillars: ['technical'],
						tags: ['US']
					},
					{
						name: 'Cambridge / Oxford',
						description: 'University of Cambridge CS and University of Oxford CS — including the Krueger group.',
						url: 'https://www.cl.cam.ac.uk',
						pillars: ['technical'],
						tags: ['UK']
					},
					{
						name: 'Mila',
						description: 'Quebec AI Institute.',
						url: 'https://mila.quebec',
						pillars: ['technical'],
						tags: ['Global']
					}
				]
			},
			{
				id: 'mpp',
				title: 'Law School and MPP / MPA Programs',
				intro:
					'Top law schools for AI policy: Yale, Harvard, Stanford, Georgetown, NYU, Chicago, Penn, Columbia. Look for clinics or centers on AI/tech.',
				items: [
					{
						name: 'Harvard Kennedy School (Belfer Center)',
						description: 'MPP/MPA programs strong on tech policy.',
						url: 'https://www.hks.harvard.edu',
						pillars: ['policy', 'local'],
						tags: ['Harvard']
					},
					{
						name: 'Princeton SPIA / CITP',
						description: 'School of Public and International Affairs.',
						url: 'https://citp.princeton.edu',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Stanford Public Policy / FSI',
						description: 'Stanford public policy and Freeman Spogli Institute.',
						url: 'https://publicpolicy.stanford.edu',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Georgetown McCourt',
						description: 'Public policy school adjacent to CSET.',
						url: 'https://mccourt.georgetown.edu',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'CMU Heinz College',
						description: 'Public policy school with technical focus.',
						url: 'https://www.heinz.cmu.edu',
						pillars: ['policy'],
						tags: ['US']
					},
					{
						name: 'Oxford Blavatnik / GovAI',
						description: 'School of Government home to GovAI.',
						url: 'https://www.bsg.ox.ac.uk',
						pillars: ['policy'],
						tags: ['UK']
					},
					{
						name: 'Cambridge POLIS / CFI',
						description: 'POLIS plus Centre for the Future of Intelligence.',
						url: 'https://www.polis.cam.ac.uk',
						pillars: ['policy'],
						tags: ['UK']
					}
				]
			},
			{
				id: 'clearance',
				title: 'Security Clearance Pathways',
				items: [
					{
						name: 'RAND CAST Fellowship',
						description: 'Cleared AI security and technology fellowship.',
						url: 'https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/fellows.html',
						pillars: ['policy', 'technical'],
						tags: ['US', 'Paid']
					},
					{
						name: 'MITRE',
						description: 'Federally-funded R&D center.',
						url: 'https://www.mitre.org/careers',
						pillars: ['policy', 'technical'],
						tags: ['US']
					},
					{
						name: 'MIT Lincoln Laboratory',
						description: 'Cleared AI work for national security.',
						url: 'https://www.ll.mit.edu/careers',
						pillars: ['local', 'technical', 'policy'],
						tags: ['MIT', 'Boston', 'US']
					},
					{
						name: 'CAISI / NIST',
						description: 'Standards and unclassified national-security evaluations.',
						url: 'https://www.nist.gov/caisi',
						pillars: ['technical', 'policy'],
						tags: ['US']
					},
					{
						name: 'DoD Joint AI Center / CDAO',
						description: 'Chief Digital and AI Office in the Department of Defense.',
						url: 'https://www.ai.mil',
						pillars: ['policy', 'technical'],
						tags: ['US']
					},
					{
						name: 'Horizon Fellowship Executive Branch Track',
						description: 'Horizon track for the executive branch.',
						url: 'https://horizonpublicservice.org',
						pillars: ['policy'],
						tags: ['US']
					}
				]
			},
			{
				id: 'advising',
				title: '1-1 Career Advising',
				items: [
					{
						name: '80,000 Hours Advising',
						description: 'Free 1-1 career advising. The strongest default option.',
						url: 'https://80000hours.org/speak-with-us/',
						pillars: ['fieldbuilding', 'technical', 'policy', 'comms'],
						tags: ['Top Pick']
					},
					{
						name: 'Probably Good',
						description: 'Career advising for high-impact paths.',
						url: 'https://probablygood.org',
						pillars: ['fieldbuilding']
					},
					{
						name: 'Successif',
						description: 'Mid-career switcher advising.',
						url: 'https://www.successif.org',
						pillars: ['fieldbuilding']
					},
					{
						name: 'AI Safety Quest',
						description: 'Volunteer-staffed advising for newcomers.',
						url: 'https://aisafety.quest',
						pillars: ['fieldbuilding']
					},
					{
						name: 'Animal Advocacy Careers',
						description: 'Career advising for animal advocacy work (some AI overlap).',
						url: 'https://www.animaladvocacycareers.org',
						pillars: ['fieldbuilding']
					},
					{
						name: 'Magnify Mentoring',
						description: 'Mentoring for women, non-binary, and trans people in EA/AI safety.',
						url: 'https://www.magnifymentoring.org',
						pillars: ['fieldbuilding', 'technical']
					},
					{
						name: 'BlueDot Career Support',
						description: 'Career help for BlueDot course alumni.',
						url: 'https://bluedot.org',
						pillars: ['fieldbuilding']
					}
				]
			}
		]
	}
];

// Flat list of all resources for filtering counts
export const ALL_RESOURCES: Resource[] = PARTS.flatMap((p) => p.sections.flatMap((s) => s.items));
