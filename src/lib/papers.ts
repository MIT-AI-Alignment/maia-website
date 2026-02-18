// Controls the papers displayed

// Define tags as constants to avoid repetition
// Uses standardized tag colors from tailwind.config.js
export const TAGS = {
	NEURIPS_2022: { title: 'NeurIPS 2022', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	NEURIPS_2023: { title: 'NeurIPS 2023', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	NEURIPS_2024: { title: 'NeurIPS 2024', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	NEURIPS_2025: { title: 'NeurIPS 2025', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	ICLR_2022: { title: 'ICLR 2022', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	ICLR_2023: { title: 'ICLR 2023', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	ICLR_2024: { title: 'ICLR 2024', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	ICLR_2025: { title: 'ICLR 2025', color: 'bg-tag-conference-light dark:bg-tag-conference-dark' },
	ADVERSARIAL: { title: 'Adversarial Attacks', color: 'bg-tag-adversarial-light dark:bg-tag-adversarial-dark' },
	RLHF: { title: 'RLHF', color: 'bg-tag-rlhf-light dark:bg-tag-rlhf-dark' },
	SCALING: { title: 'Scaling Laws', color: 'bg-tag-scaling-light dark:bg-tag-scaling-dark' },
	MECH_INTERP: { title: 'Mech Interp', color: 'bg-tag-mechinterp-light dark:bg-tag-mechinterp-dark' },
	OPENAI: { title: 'OpenAI', color: 'bg-tag-openai-light dark:bg-tag-openai-dark' },
	GOVERNANCE: { title: 'Governance', color: 'bg-tag-governance-light dark:bg-tag-governance-dark' }
} as const;

export const PAPERS = [
	{
		altText: 'Research Paper 1',
		imgSrc: '/images/papers/robust-feature-level-adv.png',
		tags: [TAGS.NEURIPS_2022, TAGS.ADVERSARIAL],
		title: 'Robust Feature-Level Adversaries are Interpretability Tools',
		authors: ['Stephen Casper'],
		link: 'https://arxiv.org/abs/2110.03605'
	},
	{
		altText: 'Research Paper 2',
		imgSrc: '/images/papers/fundamental-limits-of-rlhf.png',
		tags: [TAGS.RLHF],
		title: 'Open Problems and Fundamental Limitations of RLHF',
		authors: ['Stephen Casper', 'Tony Wang', 'Eric J. Michaud'],
		link: 'https://arxiv.org/abs/2307.15217'
	},
	{
		altText: 'Research Paper 3',
		imgSrc: '/images/papers/adversarial-policies-go.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Adversarial Policies Beat Superhuman Go AIs',
		authors: ['Tony Wang'],
		link: 'https://arxiv.org/pdf/2211.00241.pdf'
	},
	{
		altText: 'Research Paper 4',
		imgSrc: '/images/papers/quantization-model.png',
		tags: [TAGS.NEURIPS_2023, TAGS.SCALING],
		title: 'The Quantization Model of Neural Scaling',
		authors: ['Eric J. Michaud', 'Uzay Girit'],
		link: 'https://arxiv.org/abs/2303.13506'
	},
	{
		altText: 'Research Paper 5',
		imgSrc: '/images/papers/forbidden-facts.png',
		tags: [TAGS.NEURIPS_2023, TAGS.MECH_INTERP],
		title: 'Forbidden Facts: An Investigation of Competing Objectives in Llama-2',
		authors: ['Tony Wang', 'Kaivu Hariharan'],
		link: 'https://arxiv.org/pdf/2312.08793.pdf'
	},
	{
		altText: 'Research Paper 6',
		imgSrc: '/images/papers/red-teaming-feature-synth.png',
		tags: [TAGS.NEURIPS_2023, TAGS.ADVERSARIAL],
		title: 'Red Teaming Deep Neural Networks with Feature Synthesis Tools',
		authors: ['Stephen Casper', 'Kaivu Hariharan'],
		link: 'https://arxiv.org/pdf/2302.10894.pdf'
	},
	{
		altText: 'Research Paper 7',
		imgSrc: '/images/papers/warning-system-for-bio.png',
		tags: [TAGS.OPENAI, TAGS.GOVERNANCE],
		title: 'Building an early warning system for LLM-aided biological threat creation',
		authors: ['Neil Choudhury'],
		link: 'https://openai.com/research/building-an-early-warning-system-for-llm-aided-biological-threat-creation'
	},
	{
		altText: 'Research Paper 8',
		imgSrc: '/images/papers/explore-establish-exploit.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Explore, Establish, Exploit: Red Teaming Language Models from Scratch',
		authors: ['Stephen Casper', 'Gatlen Culp'],
		link: 'https://arxiv.org/abs/2306.09442'
	},
	{
		altText: 'Research Paper 9',
		imgSrc: '/images/papers/model-manipulation.png',
		tags: [TAGS.ADVERSARIAL, TAGS.ICLR_2025],
		title: 'Model Manipulation Attacks Enable More Rigorous Evaluations of LLM Capabilities',
		authors: ['Stephen Casper', 'Stewy Slocum'],
		link: 'https://openreview.net/forum?id=XmvgWEjkhG'
	},
	{
		altText: 'Research Paper 10',
		imgSrc: '/images/papers/diverse-preference-learning.png',
		tags: [TAGS.RLHF, TAGS.ICLR_2025],
		title: 'Diverse Preference Learning for Capabilities and Alignment',
		authors: ['Stewy Slocum', 'Asher Parker-Sartori'],
		link: 'https://openreview.net/forum?id=pOq9vDIYev'
	},
	{
		altText: 'Research Paper 11',
		imgSrc: '/images/papers/model-on-model-deception.png',
		tags: [TAGS.MECH_INTERP, TAGS.ICLR_2024],
		title: 'An Assessment of Model-on-Model Deception',
		authors: ['Laker Newhouse'],
		link: 'https://arxiv.org/pdf/2405.12999'
	},
	{
		altText: 'Research Paper 12',
		imgSrc: '/images/papers/harmonic-loss.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Harmonic Loss Trains Interpretable AI Models',
		authors: ['Riya Yagi', 'David Baek'],
		link: 'https://arxiv.org/pdf/2502.01628'
	},
	{
		altText: 'Alignment Faking Paper Preview',
		imgSrc: '/images/papers/alignment-faking.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Alignment faking in large language models',
		authors: ['Benjamin Wright (MAIA Alum)'],
		link: 'https://arxiv.org/abs/2412.14093',
	}
] as const;
