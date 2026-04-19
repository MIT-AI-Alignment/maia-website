// Controls the papers displayed

// Define tags as constants to avoid repetition
// Uses standardized tag colors from tailwind.config.js
const CONFERENCE_COLOR = 'bg-tag-conference-light dark:bg-tag-conference-dark';

export const TAGS = {
	// ===== Conferences / venues =====
	NEURIPS_2020_WORKSHOP: { title: 'NeurIPS Workshop 2020', color: CONFERENCE_COLOR },
	NEURIPS_2022: { title: 'NeurIPS 2022', color: CONFERENCE_COLOR },
	NEURIPS_2022_ORAL: { title: 'NeurIPS 2022 Oral', color: CONFERENCE_COLOR },
	NEURIPS_2023: { title: 'NeurIPS 2023', color: CONFERENCE_COLOR },
	NEURIPS_2023_OUTSTANDING: { title: 'NeurIPS 2023 Outstanding', color: CONFERENCE_COLOR },
	NEURIPS_2024: { title: 'NeurIPS 2024', color: CONFERENCE_COLOR },
	NEURIPS_2025: { title: 'NeurIPS 2025', color: CONFERENCE_COLOR },
	NEURIPS_2025_SPOTLIGHT: { title: 'NeurIPS 2025 Spotlight', color: CONFERENCE_COLOR },
	ICLR_2022: { title: 'ICLR 2022', color: CONFERENCE_COLOR },
	ICLR_2023: { title: 'ICLR 2023', color: CONFERENCE_COLOR },
	ICLR_2023_SPOTLIGHT: { title: 'ICLR 2023 Spotlight', color: CONFERENCE_COLOR },
	ICLR_2024: { title: 'ICLR 2024', color: CONFERENCE_COLOR },
	ICLR_2025: { title: 'ICLR 2025', color: CONFERENCE_COLOR },
	ICLR_2025_ORAL: { title: 'ICLR 2025 Oral', color: CONFERENCE_COLOR },
	ICLR_2025_WORKSHOP: { title: 'ICLR 2025 Workshop', color: CONFERENCE_COLOR },
	ICLR_2026: { title: 'ICLR 2026', color: CONFERENCE_COLOR },
	ICML_2023: { title: 'ICML 2023', color: CONFERENCE_COLOR },
	ICML_2024: { title: 'ICML 2024', color: CONFERENCE_COLOR },
	ICML_2025: { title: 'ICML 2025', color: CONFERENCE_COLOR },
	TMLR_2024: { title: 'TMLR 2024', color: CONFERENCE_COLOR },
	TMLR_2025: { title: 'TMLR 2025', color: CONFERENCE_COLOR },
	AAAI_2025: { title: 'AAAI 2025', color: CONFERENCE_COLOR },
	AAAI_WORKSHOP_2024: { title: 'AAAI Workshop 2024', color: CONFERENCE_COLOR },
	AIES_2023: { title: 'AIES 2023', color: CONFERENCE_COLOR },
	IJCNN_2022: { title: 'IJCNN 2022', color: CONFERENCE_COLOR },
	EMNLP_2022: { title: 'EMNLP 2022', color: CONFERENCE_COLOR },
	FACCT_2024: { title: 'FAccT 2024', color: CONFERENCE_COLOR },
	TPAMI_2023: { title: 'IEEE TPAMI 2023', color: CONFERENCE_COLOR },
	ENTROPY_2024: { title: 'Entropy 2024', color: CONFERENCE_COLOR },
	PHIL_STUDIES_2025: { title: 'Philosophical Studies 2025', color: CONFERENCE_COLOR },

	// ===== Topics =====
	ADVERSARIAL: { title: 'Adversarial Attacks', color: 'bg-tag-adversarial-light dark:bg-tag-adversarial-dark' },
	RLHF: { title: 'RLHF', color: 'bg-tag-rlhf-light dark:bg-tag-rlhf-dark' },
	SCALING: { title: 'Scaling Laws', color: 'bg-tag-scaling-light dark:bg-tag-scaling-dark' },
	MECH_INTERP: { title: 'Mech Interp', color: 'bg-tag-mechinterp-light dark:bg-tag-mechinterp-dark' },
	OPENAI: { title: 'OpenAI', color: 'bg-tag-openai-light dark:bg-tag-openai-dark' },
	ANTHROPIC: { title: 'Anthropic', color: 'bg-tag-anthropic-light dark:bg-tag-anthropic-dark' },
	GOVERNANCE: { title: 'Governance', color: 'bg-tag-governance-light dark:bg-tag-governance-dark' },
	SAE: { title: 'Sparse Autoencoders', color: 'bg-tag-sae-light dark:bg-tag-sae-dark' },
	AGENTS: { title: 'Agents', color: 'bg-tag-agents-light dark:bg-tag-agents-dark' },
	REASONING: { title: 'Reasoning', color: 'bg-tag-reasoning-light dark:bg-tag-reasoning-dark' },
	UNLEARNING: { title: 'Unlearning', color: 'bg-tag-unlearning-light dark:bg-tag-unlearning-dark' },
	COMPUTE: { title: 'Compute & Forecasting', color: 'bg-tag-compute-light dark:bg-tag-compute-dark' },
	EVALS: { title: 'Evals & Benchmarks', color: 'bg-tag-evals-light dark:bg-tag-evals-dark' },
	VLM: { title: 'Vision & Multimodal', color: 'bg-tag-vlm-light dark:bg-tag-vlm-dark' }
} as const;

export const PAPERS = [
	// First 6: default grid on Initiatives before “Show more”. Rest: expanded list order.
	{
		altText: 'Alignment Faking Paper Preview',
		imgSrc: '/images/papers/alignment-faking.png',
		tags: [TAGS.ADVERSARIAL, TAGS.ANTHROPIC],
		title: 'Alignment faking in large language models',
		authors: ['Benjamin Wright'],
		link: 'https://arxiv.org/abs/2412.14093'
	},
	{
		altText: 'DecodingTrust',
		imgSrc: '/images/papers/decodingtrust.png',
		tags: [TAGS.NEURIPS_2023_OUTSTANDING, TAGS.EVALS, TAGS.ADVERSARIAL],
		title: 'DecodingTrust: A Comprehensive Assessment of Trustworthiness in GPT Models',
		authors: ['Chenhui Zhang'],
		link: 'https://arxiv.org/abs/2306.11698'
	},
	{
		altText: 'Weak-to-Strong Generalization',
		imgSrc: '/images/papers/weak-to-strong-generalization.png',
		tags: [TAGS.RLHF, TAGS.OPENAI],
		title: 'Weak-to-Strong Generalization',
		authors: ['Leo Gao'],
		link: 'https://arxiv.org/abs/2312.09390'
	},
	{
		altText: 'Towards Understanding Grokking',
		imgSrc: '/images/papers/towards-understanding-grokking.png',
		tags: [TAGS.NEURIPS_2022_ORAL, TAGS.MECH_INTERP, TAGS.SCALING],
		title: 'Towards Understanding Grokking',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2205.10343'
	},
	{
		altText: 'International AI Safety Report',
		imgSrc: '/images/papers/intl-ai-safety-report-2025.png',
		tags: [TAGS.GOVERNANCE],
		title: 'International AI Safety Report',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2501.17805'
	},
	{
		altText: 'Natural Emergent Misalignment from Reward Hacking in Production RL',
		imgSrc: '/images/papers/natural-emergent-misalignment.png',
		tags: [TAGS.ANTHROPIC, TAGS.ADVERSARIAL, TAGS.RLHF],
		title: 'Natural Emergent Misalignment from Reward Hacking in Production RL',
		authors: ['Benjamin Wright'],
		link: 'https://arxiv.org/abs/2511.18397'
	},
	{
		altText: 'Locating and Editing Factual Associations in GPT / ROME',
		imgSrc: '/images/papers/rome-locating-editing.png',
		tags: [TAGS.NEURIPS_2022, TAGS.MECH_INTERP],
		title: 'Locating and Editing Factual Associations in GPT / ROME',
		authors: ['Kevin Meng'],
		link: 'https://arxiv.org/abs/2202.05262'
	},
	{
		altText: 'Sparse Feature Circuits',
		imgSrc: '/images/papers/sparse-feature-circuits.png',
		tags: [TAGS.ICLR_2025_ORAL, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Sparse Feature Circuits',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2403.19647'
	},
	{
		altText: 'MAIA: A Multimodal Automated Interpretability Agent',
		imgSrc: '/images/papers/maia-multimodal-interp-agent.png',
		tags: [TAGS.ICML_2024, TAGS.VLM, TAGS.MECH_INTERP, TAGS.AGENTS],
		title: 'MAIA: A Multimodal Automated Interpretability Agent',
		authors: ['Achyuta Rajaram', 'Franklin Wang'],
		link: 'https://arxiv.org/abs/2404.14394'
	},
	{
		altText: 'Scaling Laws for Reward Model Overoptimization',
		imgSrc: '/images/papers/scaling-laws-reward-overopt.png',
		tags: [TAGS.ICML_2023, TAGS.RLHF, TAGS.SCALING, TAGS.OPENAI],
		title: 'Scaling Laws for Reward Model Overoptimization',
		authors: ['Leo Gao'],
		link: 'https://arxiv.org/abs/2210.10760'
	},
	{
		altText: 'Scaling and evaluating sparse autoencoders',
		imgSrc: '/images/papers/scaling-evaluating-saes.png',
		tags: [TAGS.SAE, TAGS.MECH_INTERP, TAGS.OPENAI],
		title: 'Scaling and evaluating sparse autoencoders',
		authors: ['Leo Gao'],
		link: 'https://arxiv.org/abs/2406.04093'
	},
	{
		altText: 'Language models can explain neurons in language models',
		imgSrc: '/images/papers/language-models-explain-neurons.png',
		tags: [TAGS.MECH_INTERP, TAGS.OPENAI],
		title: 'Language models can explain neurons in language models',
		authors: ['Leo Gao'],
		link: 'https://openaipublic.blob.core.windows.net/neuron-explainer/paper/index.html'
	},
	{
		altText: 'Interpretability in the Wild: IOI Circuit',
		imgSrc: '/images/papers/interpretability-in-the-wild-ioi.png',
		tags: [TAGS.ICLR_2023, TAGS.MECH_INTERP],
		title: 'Interpretability in the Wild: IOI Circuit in GPT-2 Small',
		authors: ['Kevin Wang'],
		link: 'https://arxiv.org/abs/2211.00593'
	},
	{
		altText: 'Mass-Editing Memory in a Transformer / MEMIT',
		imgSrc: '/images/papers/memit-mass-editing.png',
		tags: [TAGS.ICLR_2023, TAGS.MECH_INTERP],
		title: 'Mass-Editing Memory in a Transformer / MEMIT',
		authors: ['Kevin Meng'],
		link: 'https://arxiv.org/abs/2210.07229'
	},
	{
		altText: 'Agentic Misalignment: How LLMs Could Be Insider Threats',
		imgSrc: '/images/papers/agentic-misalignment.png',
		tags: [TAGS.ANTHROPIC, TAGS.AGENTS, TAGS.ADVERSARIAL],
		title: 'Agentic Misalignment: How LLMs Could Be Insider Threats',
		authors: ['Benjamin Wright'],
		link: 'https://arxiv.org/abs/2510.05179'
	},
	{
		altText: 'FrontierMath',
		imgSrc: '/images/papers/frontiermath.png',
		tags: [TAGS.EVALS, TAGS.REASONING],
		title: 'FrontierMath: Evaluating Advanced Mathematical Reasoning in AI',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2411.04872'
	},
	{
		altText: 'Algorithmic Progress in Language Models',
		imgSrc: '/images/papers/algorithmic-progress-lms.png',
		tags: [TAGS.NEURIPS_2024, TAGS.COMPUTE, TAGS.SCALING],
		title: 'Algorithmic Progress in Language Models',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2403.05812'
	},
	{
		altText: 'Not All Language Model Features Are One-Dimensionally Linear',
		imgSrc: '/images/papers/multidim-features.png',
		tags: [TAGS.ICLR_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Not All Language Model Features Are One-Dimensionally Linear',
		authors: ['Josh Engels', 'Eric Michaud', 'Isaac C Liao'],
		link: 'https://arxiv.org/abs/2405.14860'
	},
	{
		altText: 'Scaling Laws For Scalable Oversight',
		imgSrc: '/images/papers/scaling-laws-scalable-oversight.png',
		tags: [TAGS.NEURIPS_2025_SPOTLIGHT, TAGS.SCALING],
		title: 'Scaling Laws For Scalable Oversight',
		authors: ['Josh Engels', 'David Baek'],
		link: 'https://arxiv.org/abs/2504.18530'
	},
	{
		altText: 'Adversarial Policies Beat Superhuman Go AIs',
		imgSrc: '/images/papers/adversarial-policies-go.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Adversarial Policies Beat Superhuman Go AIs',
		authors: ['Tony Wang'],
		link: 'https://arxiv.org/pdf/2211.00241.pdf'
	},
	{
		altText: 'Me, Myself, and AI: The Situational Awareness Dataset',
		imgSrc: '/images/papers/situational-awareness-sad.png',
		tags: [TAGS.NEURIPS_2024, TAGS.EVALS, TAGS.AGENTS],
		title: 'Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs',
		authors: ['Kaivu Hariharan'],
		link: 'https://arxiv.org/abs/2407.04694'
	},
	{
		altText: 'Training on Documents about Reward Hacking Induces Reward Hacking',
		imgSrc: '/images/papers/reward-hacking-induces-reward-hacking.png',
		tags: [TAGS.ANTHROPIC, TAGS.RLHF, TAGS.ADVERSARIAL],
		title: 'Training on Documents about Reward Hacking Induces Reward Hacking',
		authors: ['Benjamin Wright'],
		link: 'https://alignment.anthropic.com/2025/reward-hacking-ooc/'
	},
	{
		altText: 'Efficient Dictionary Learning with Switch Sparse Autoencoders',
		imgSrc: '/images/papers/switch-saes.png',
		tags: [TAGS.ICLR_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Efficient Dictionary Learning with Switch Sparse Autoencoders',
		authors: ['Josh Engels', 'Eric Michaud'],
		link: 'https://arxiv.org/abs/2410.08201'
	},
	{
		altText: 'Omnigrok: Grokking Beyond Algorithmic Data',
		imgSrc: '/images/papers/omnigrok.png',
		tags: [TAGS.ICLR_2023_SPOTLIGHT, TAGS.MECH_INTERP, TAGS.SCALING],
		title: 'Omnigrok: Grokking Beyond Algorithmic Data',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2210.01117'
	},
	{
		altText: 'The Quantization Model of Neural Scaling',
		imgSrc: '/images/papers/quantization-model.png',
		tags: [TAGS.NEURIPS_2023, TAGS.SCALING],
		title: 'The Quantization Model of Neural Scaling',
		authors: ['Eric J. Michaud', 'Uzay Girit'],
		link: 'https://arxiv.org/abs/2303.13506'
	},
	{
		altText: 'Chinchilla Scaling: A Replication Attempt',
		imgSrc: '/images/papers/chinchilla-replication.png',
		tags: [TAGS.SCALING, TAGS.COMPUTE],
		title: 'Chinchilla Scaling: A Replication Attempt',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2404.10102'
	},
	{
		altText: 'Open Problems and Fundamental Limitations of RLHF',
		imgSrc: '/images/papers/fundamental-limits-of-rlhf.png',
		tags: [TAGS.RLHF],
		title: 'Open Problems and Fundamental Limitations of RLHF',
		authors: ['Stephen Casper', 'Tony Wang', 'Eric J. Michaud'],
		link: 'https://arxiv.org/abs/2307.15217'
	},
	{
		altText: 'Open Problems in Mechanistic Interpretability',
		imgSrc: '/images/papers/open-problems-mech-interp.png',
		tags: [TAGS.TMLR_2025, TAGS.MECH_INTERP],
		title: 'Open Problems in Mechanistic Interpretability',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2501.16496'
	},
	{
		altText: 'Beyond Binary Rewards',
		imgSrc: '/images/papers/beyond-binary-rewards.png',
		tags: [TAGS.ICLR_2026, TAGS.REASONING, TAGS.RLHF],
		title: 'Beyond Binary Rewards: Training LMs to Reason About Their Uncertainty',
		authors: ['Mehul Damani', 'Stewart Slocum'],
		link: 'https://arxiv.org/abs/2507.16806'
	},
	{
		altText: 'Agent Psychometrics',
		imgSrc: '/images/papers/agent-psychometrics.png',
		tags: [TAGS.ICLR_2026, TAGS.AGENTS, TAGS.EVALS],
		title: 'Agent Psychometrics: Task-Level Performance Prediction',
		authors: ['Uzay Girit'],
		link: 'https://arxiv.org/abs/2604.00594'
	},
	{
		altText: 'NNsight and NDIF',
		imgSrc: '/images/papers/nnsight-ndif.png',
		tags: [TAGS.ICLR_2025, TAGS.MECH_INTERP],
		title: 'NNsight and NDIF: Democratizing Access to Foundation Model Internals',
		authors: ['Caden Juang', 'Michael Ripa'],
		link: 'https://arxiv.org/abs/2407.14561'
	},
	{
		altText: 'Diverse Preference Learning for Capabilities and Alignment',
		imgSrc: '/images/papers/diverse-preference-learning.png',
		tags: [TAGS.ICLR_2025, TAGS.RLHF],
		title: 'Diverse Preference Learning for Capabilities and Alignment',
		authors: ['Stewy Slocum', 'Asher Parker-Sartori'],
		link: 'https://openreview.net/forum?id=pOq9vDIYev'
	},
	{
		altText: 'Model Manipulation Attacks Enable More Rigorous Evaluations of LLM Capabilities',
		imgSrc: '/images/papers/model-manipulation.png',
		tags: [TAGS.ICLR_2025, TAGS.ADVERSARIAL, TAGS.EVALS],
		title: 'Model Manipulation Attacks Enable More Rigorous Evaluations of LLM Capabilities',
		authors: ['Stephen Casper', 'Stewy Slocum'],
		link: 'https://openreview.net/forum?id=XmvgWEjkhG'
	},
	{
		altText: 'Forbidden Facts: An Investigation of Competing Objectives in Llama-2',
		imgSrc: '/images/papers/forbidden-facts.png',
		tags: [TAGS.NEURIPS_2023, TAGS.MECH_INTERP],
		title: 'Forbidden Facts: An Investigation of Competing Objectives in Llama-2',
		authors: ['Tony Wang', 'Kaivu Hariharan'],
		link: 'https://arxiv.org/pdf/2312.08793.pdf'
	},
	{
		altText: 'Red Teaming Deep Neural Networks with Feature Synthesis Tools',
		imgSrc: '/images/papers/red-teaming-feature-synth.png',
		tags: [TAGS.NEURIPS_2023, TAGS.ADVERSARIAL, TAGS.MECH_INTERP],
		title: 'Red Teaming Deep Neural Networks with Feature Synthesis Tools',
		authors: ['Stephen Casper', 'Kaivu Hariharan'],
		link: 'https://arxiv.org/pdf/2302.10894.pdf'
	},
	{
		altText: 'On the Creation of Narrow AI',
		imgSrc: '/images/papers/narrow-ai-hierarchy.png',
		tags: [TAGS.NEURIPS_2025, TAGS.SCALING],
		title: 'On the Creation of Narrow AI: Hierarchy and Nonlocality of Neural Network Skills',
		authors: ['Eric Michaud', 'Asher Parker-Sartori'],
		link: 'https://arxiv.org/abs/2505.15811'
	},
	{
		altText: 'Linearity of Relation Decoding in Transformer LMs / LRE',
		imgSrc: '/images/papers/lre-relation-decoding.png',
		tags: [TAGS.ICLR_2024, TAGS.MECH_INTERP],
		title: 'Linearity of Relation Decoding in Transformer LMs / LRE',
		authors: ['Kevin Meng'],
		link: 'https://arxiv.org/abs/2308.09124'
	},
	{
		altText: 'Are Sparse Autoencoders Useful?',
		imgSrc: '/images/papers/are-saes-useful.png',
		tags: [TAGS.ICML_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Are Sparse Autoencoders Useful? A Case Study in Sparse Probing',
		authors: ['Josh Engels'],
		link: 'https://arxiv.org/abs/2502.16681'
	},
	{
		altText: 'Low Rank Adapting Models for Sparse Autoencoders',
		imgSrc: '/images/papers/low-rank-adapting-saes.png',
		tags: [TAGS.ICML_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Low Rank Adapting Models for Sparse Autoencoders',
		authors: ['Josh Engels'],
		link: 'https://arxiv.org/abs/2501.19406'
	},
	{
		altText: 'Decomposing the Dark Matter of Sparse Autoencoders',
		imgSrc: '/images/papers/dark-matter-saes.png',
		tags: [TAGS.TMLR_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Decomposing the Dark Matter of Sparse Autoencoders',
		authors: ['Josh Engels'],
		link: 'https://arxiv.org/abs/2410.14670'
	},
	{
		altText: 'Dense SAE Latents Are Features, Not Bugs',
		imgSrc: '/images/papers/dense-sae-latents.png',
		tags: [TAGS.NEURIPS_2025, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Dense SAE Latents Are Features, Not Bugs',
		authors: ['Josh Engels', 'Xiaoqing Sun'],
		link: 'https://arxiv.org/abs/2506.15679'
	},
	{
		altText: 'Universal Neurons in GPT2 Language Models',
		imgSrc: '/images/papers/universal-neurons-gpt2.png',
		tags: [TAGS.TMLR_2024, TAGS.MECH_INTERP],
		title: 'Universal Neurons in GPT2 Language Models',
		authors: ['Carl Guo', 'Tara Rezaei', 'Will Hathaway'],
		link: 'https://arxiv.org/abs/2401.12181'
	},
	{
		altText: 'Black-Box Access is Insufficient for Rigorous AI Audits',
		imgSrc: '/images/papers/black-box-access-insufficient.png',
		tags: [TAGS.FACCT_2024, TAGS.GOVERNANCE],
		title: 'Black-Box Access is Insufficient for Rigorous AI Audits',
		authors: ['Marvin von Hagen'],
		link: 'https://arxiv.org/abs/2401.14446'
	},
	{
		altText: 'Weight-sparse transformers have interpretable circuits',
		imgSrc: '/images/papers/weight-sparse-transformers.png',
		tags: [TAGS.MECH_INTERP, TAGS.OPENAI],
		title: 'Weight-sparse transformers have interpretable circuits',
		authors: ['Achyuta Rajaram', 'Leo Gao'],
		link: 'https://arxiv.org/abs/2511.13653'
	},
	{
		altText: 'Agents of Chaos',
		imgSrc: '/images/papers/agents-of-chaos.png',
		tags: [TAGS.AGENTS, TAGS.ADVERSARIAL],
		title: 'Agents of Chaos',
		authors: ['Aruna Sankaranarayanan', 'Avery Yen', 'Michael Ripa'],
		link: 'https://arxiv.org/abs/2602.20021'
	},
	{
		altText: 'Quantifying Misalignment Between Agents',
		imgSrc: '/images/papers/quantifying-misalignment.png',
		tags: [TAGS.AAAI_2025, TAGS.GOVERNANCE, TAGS.AGENTS],
		title: 'Quantifying Misalignment Between Agents',
		authors: ['Aiden Kierans'],
		link: 'https://arxiv.org/abs/2406.04231'
	},
	{
		altText: 'Catastrophic Liability',
		imgSrc: '/images/papers/catastrophic-liability.png',
		tags: [TAGS.GOVERNANCE],
		title: 'Catastrophic Liability: Managing Systemic Risks in Frontier AI',
		authors: ['Aiden Kierans'],
		link: 'https://arxiv.org/abs/2505.00616'
	},
	{
		altText: 'Critique-out-Loud Reward Models',
		imgSrc: '/images/papers/critique-out-loud.png',
		tags: [TAGS.RLHF, TAGS.REASONING],
		title: 'Critique-out-Loud Reward Models',
		authors: ['Zachary Ankner'],
		link: 'https://arxiv.org/abs/2408.11791'
	},
	{
		altText: 'A Mechanistic Understanding of Alignment Algorithms: DPO and Toxicity',
		imgSrc: '/images/papers/dpo-toxicity-mechanistic.png',
		tags: [TAGS.MECH_INTERP, TAGS.RLHF],
		title: 'A Mechanistic Understanding of Alignment Algorithms: DPO and Toxicity',
		authors: ['Itamar Pres'],
		link: 'https://arxiv.org/abs/2401.01967'
	},
	{
		altText: 'Cannot or Should Not?',
		imgSrc: '/images/papers/cannot-or-should-not.png',
		tags: [TAGS.ADVERSARIAL, TAGS.RLHF],
		title: 'Cannot or Should Not? Automatic Analysis of Refusal in IFT/RLHF Datasets',
		authors: ['Marvin von Hagen'],
		link: 'https://arxiv.org/abs/2412.16974'
	},
	{
		altText: 'Covert Malicious Finetuning',
		imgSrc: '/images/papers/covert-malicious-finetuning.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Covert Malicious Finetuning: Challenges in Safeguarding LLM Adaptation',
		authors: ['Tony Wang'],
		link: 'https://arxiv.org/abs/2406.20053'
	},
	{
		altText: 'Transformer Feed-Forward Layers Build Predictions by Promoting Concepts',
		imgSrc: '/images/papers/transformer-ffn-promoting-concepts.png',
		tags: [TAGS.EMNLP_2022, TAGS.MECH_INTERP],
		title:
			'Transformer Feed-Forward Layers Build Predictions by Promoting Concepts in the Vocabulary Space',
		authors: ['Kevin Wang'],
		link: 'https://arxiv.org/abs/2203.14680'
	},
	{
		altText: 'Building an early warning system for LLM-aided biological threat creation',
		imgSrc: '/images/papers/warning-system-for-bio.png',
		tags: [TAGS.OPENAI, TAGS.GOVERNANCE],
		title: 'Building an early warning system for LLM-aided biological threat creation',
		authors: ['Neil Choudhury'],
		link: 'https://openai.com/research/building-an-early-warning-system-for-llm-aided-biological-threat-creation'
	},
	{
		altText: 'Breakpoint',
		imgSrc: '/images/papers/breakpoint-system-reasoning.png',
		tags: [TAGS.AGENTS, TAGS.EVALS, TAGS.REASONING],
		title: 'Breakpoint: Scalable Evaluation of System-Level Reasoning in LLM Code Agents',
		authors: ['Atticus Wang', 'Kaivu Hariharan', 'Uzay Girit'],
		link: 'https://arxiv.org/abs/2506.00172'
	},
	{
		altText: 'Automatically Interpreting Millions of Features in LLMs',
		imgSrc: '/images/papers/auto-interp-millions-features.png',
		tags: [TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Automatically Interpreting Millions of Features in LLMs',
		authors: ['Caden Juang'],
		link: 'https://arxiv.org/abs/2410.13928'
	},
	{
		altText: 'Overcoming Sparsity Artifacts in Crosscoders to Interpret Chat-Tuning',
		imgSrc: '/images/papers/crosscoders-chat-tuning.png',
		tags: [TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Overcoming Sparsity Artifacts in Crosscoders to Interpret Chat-Tuning',
		authors: ['Caden Juang'],
		link: 'https://arxiv.org/abs/2504.02922'
	},
	{
		altText: 'Poser: Unmasking Alignment Faking LLMs',
		imgSrc: '/images/papers/poser-alignment-faking.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Poser: Unmasking Alignment Faking LLMs by Manipulating Their Internals',
		authors: ['Caden Juang'],
		link: 'https://arxiv.org/abs/2405.05466'
	},
	{
		altText: 'GATE: Growth and AI Transition Endogenous Model',
		imgSrc: '/images/papers/gate-ai-transition.png',
		tags: [TAGS.COMPUTE, TAGS.GOVERNANCE],
		title: 'GATE: Growth and AI Transition Endogenous Model',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2503.04941'
	},
	{
		altText: 'International Scientific Report on the Safety of Advanced AI',
		imgSrc: '/images/papers/intl-scientific-report-safety-ai.png',
		tags: [TAGS.GOVERNANCE],
		title: 'International Scientific Report on the Safety of Advanced AI',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2412.05282'
	},
	{
		altText: 'Explore, Establish, Exploit: Red Teaming Language Models from Scratch',
		imgSrc: '/images/papers/explore-establish-exploit.png',
		tags: [TAGS.ADVERSARIAL],
		title: 'Explore, Establish, Exploit: Red Teaming Language Models from Scratch',
		authors: ['Stephen Casper', 'Gatlen Culp'],
		link: 'https://arxiv.org/abs/2306.09442'
	},
	{
		altText: 'Position: Will We Run Out of Data?',
		imgSrc: '/images/papers/will-we-run-out-of-data.png',
		tags: [TAGS.ICML_2024, TAGS.COMPUTE, TAGS.SCALING],
		title: 'Position: Will We Run Out of Data?',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2211.04325'
	},
	{
		altText: 'Compute Trends Across Three Eras of Machine Learning',
		imgSrc: '/images/papers/compute-trends-three-eras.png',
		tags: [TAGS.IJCNN_2022, TAGS.COMPUTE, TAGS.SCALING],
		title: 'Compute Trends Across Three Eras of Machine Learning',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2202.05924'
	},
	{
		altText: 'The Compute Divide in Machine Learning',
		imgSrc: '/images/papers/compute-divide-ml.png',
		tags: [TAGS.COMPUTE, TAGS.GOVERNANCE],
		title: 'The Compute Divide in Machine Learning',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2401.02452'
	},
	{
		altText: 'Who is Leading in AI?',
		imgSrc: '/images/papers/who-is-leading-in-ai.png',
		tags: [TAGS.COMPUTE, TAGS.GOVERNANCE],
		title: 'Who is Leading in AI?',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2312.00043'
	},
	{
		altText: 'Explosive Growth from AI Automation',
		imgSrc: '/images/papers/explosive-growth-ai-automation.png',
		tags: [TAGS.COMPUTE, TAGS.GOVERNANCE],
		title: 'Explosive Growth from AI Automation',
		authors: ['Tamay Besiroglu'],
		link: 'https://arxiv.org/abs/2309.11690'
	},
	{
		altText: 'On the Origin of Algorithmic Progress in AI',
		imgSrc: '/images/papers/origin-algorithmic-progress.png',
		tags: [TAGS.COMPUTE, TAGS.SCALING],
		title: 'On the Origin of Algorithmic Progress in AI',
		authors: ['Hans Gundlach'],
		link: 'https://arxiv.org/abs/2511.21622'
	},
	{
		altText: 'Meek Models Shall Inherit the Earth',
		imgSrc: '/images/papers/meek-models.png',
		tags: [TAGS.COMPUTE, TAGS.SCALING],
		title: 'Meek Models Shall Inherit the Earth',
		authors: ['Hans Gundlach'],
		link: 'https://arxiv.org/abs/2507.07931'
	},
	{
		altText: 'Will Compute Bottlenecks Prevent an Intelligence Explosion?',
		imgSrc: '/images/papers/compute-bottlenecks-intelligence.png',
		tags: [TAGS.COMPUTE, TAGS.SCALING],
		title: 'Will Compute Bottlenecks Prevent an Intelligence Explosion?',
		authors: ['Parker Whitfill'],
		link: 'https://arxiv.org/abs/2507.23181'
	},
	{
		altText: 'Note on Selection Bias in Observational Estimates of Algorithmic Progress',
		imgSrc: '/images/papers/selection-bias-algorithmic-progress.png',
		tags: [TAGS.COMPUTE, TAGS.SCALING],
		title: 'Note on Selection Bias in Observational Estimates of Algorithmic Progress',
		authors: ['Parker Whitfill'],
		link: 'https://arxiv.org/abs/2508.11033'
	},
	{
		altText: 'Believe It or Not: How Deeply do LLMs Believe Implanted Facts?',
		imgSrc: '/images/papers/believe-it-or-not.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Believe It or Not: How Deeply do LLMs Believe Implanted Facts?',
		authors: ['Stewart Slocum'],
		link: 'https://arxiv.org/abs/2510.17941'
	},
	{
		altText: 'The AI Agent Index',
		imgSrc: '/images/papers/ai-agent-index.png',
		tags: [TAGS.AGENTS, TAGS.GOVERNANCE],
		title: 'The AI Agent Index',
		authors: ['Stewart Slocum'],
		link: 'https://arxiv.org/abs/2502.01635'
	},
	{
		altText: 'Inverse Prompt Engineering for Task-Specific LLM Safety',
		imgSrc: '/images/papers/inverse-prompt-engineering.png',
		tags: [TAGS.AAAI_WORKSHOP_2024, TAGS.ADVERSARIAL],
		title: 'Inverse Prompt Engineering for Task-Specific LLM Safety',
		authors: ['Stewart Slocum'],
		link: 'https://openreview.net/forum?id=3MDmM0rMPQ'
	},
	{
		altText: 'Beyond Ordinal Preferences',
		imgSrc: '/images/papers/beyond-ordinal-preferences.png',
		tags: [TAGS.RLHF],
		title: 'Beyond Ordinal Preferences: Why Alignment Needs Cardinal Human Feedback',
		authors: ['Stewart Slocum', 'Parker Whitfill'],
		link: 'https://arxiv.org/abs/2508.08486'
	},
	{
		altText: 'Towards Understanding Distilled Reasoning Models',
		imgSrc: '/images/papers/distilled-reasoning-models.png',
		tags: [TAGS.ICLR_2025_WORKSHOP, TAGS.REASONING, TAGS.MECH_INTERP],
		title: 'Towards Understanding Distilled Reasoning Models',
		authors: ['David Baek'],
		link: 'https://arxiv.org/abs/2503.03730'
	},
	{
		altText: 'Surgical Activation Steering via Generative Causal Mediation',
		imgSrc: '/images/papers/surgical-activation-steering.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Surgical Activation Steering via Generative Causal Mediation',
		authors: ['Aruna Sankaranarayanan'],
		link: 'https://arxiv.org/abs/2602.16080'
	},
	{
		altText: 'Line of Sight: On Linear Representations in VLLMs',
		imgSrc: '/images/papers/line-of-sight-vllms.png',
		tags: [TAGS.VLM, TAGS.MECH_INTERP],
		title: 'Line of Sight: On Linear Representations in VLLMs',
		authors: ['Achyuta Rajaram'],
		link: 'https://arxiv.org/abs/2506.04706'
	},
	{
		altText: 'Automatic Discovery of Visual Circuits',
		imgSrc: '/images/papers/automatic-discovery-visual-circuits.png',
		tags: [TAGS.VLM, TAGS.MECH_INTERP],
		title: 'Automatic Discovery of Visual Circuits',
		authors: ['Achyuta Rajaram'],
		link: 'https://arxiv.org/abs/2404.14349'
	},
	{
		altText: 'Benchmarked Ethics',
		imgSrc: '/images/papers/benchmarked-ethics.png',
		tags: [TAGS.AIES_2023, TAGS.GOVERNANCE],
		title: 'Benchmarked Ethics: A Roadmap to AI Alignment, Moral Knowledge, and Control',
		authors: ['Aiden Kierans'],
		link: 'https://dl.acm.org/doi/10.1145/3600211.3604764'
	},
	{
		altText: 'The Geometry of Concepts: Sparse Autoencoder Feature Structure',
		imgSrc: '/images/papers/geometry-of-concepts-sae.png',
		tags: [TAGS.ENTROPY_2024, TAGS.SAE, TAGS.MECH_INTERP],
		title: 'The Geometry of Concepts: Sparse Autoencoder Feature Structure',
		authors: ['Xiaoqing Sun'],
		link: 'https://arxiv.org/abs/2410.19750'
	},
	{
		altText: 'Opening the AI Black Box: Program Synthesis via Mechanistic Interpretability / MIPS',
		imgSrc: '/images/papers/opening-ai-black-box-mips.png',
		tags: [TAGS.ENTROPY_2024, TAGS.MECH_INTERP],
		title: 'Opening the AI Black Box: Program Synthesis via Mechanistic Interpretability / MIPS',
		authors: ['Eric Michaud', 'Carl Guo', 'Isaac C Liao', 'Tara Rezaei'],
		link: 'https://arxiv.org/abs/2402.05110'
	},
	{
		altText: 'Understanding Learned Reward Functions',
		imgSrc: '/images/papers/understanding-learned-reward-functions.png',
		tags: [TAGS.NEURIPS_2020_WORKSHOP, TAGS.RLHF],
		title: 'Understanding Learned Reward Functions',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2012.05862'
	},
	{
		altText: 'Interpretable by Design',
		imgSrc: '/images/papers/interpretable-by-design.png',
		tags: [TAGS.TPAMI_2023, TAGS.MECH_INTERP],
		title: 'Interpretable by Design: Learning Predictors by Composing Interpretable Queries',
		authors: ['Stewart Slocum'],
		link: 'https://arxiv.org/abs/2207.00938'
	},
	{
		altText: "Position: It's Time to Optimize for Self-Consistency",
		imgSrc: '/images/papers/optimize-self-consistency.png',
		tags: [TAGS.REASONING],
		title: "Position: It's Time to Optimize for Self-Consistency",
		authors: ['Itamar Pres', 'Mehul Damani'],
		link: 'https://time-for-consistency.github.io'
	},
	{
		altText: 'The Sign Estimator',
		imgSrc: '/images/papers/sign-estimator.png',
		tags: [TAGS.RLHF],
		title: 'The Sign Estimator: LLM Alignment in the Face of Choice Heterogeneity',
		authors: ['Aymane El Gadarri'],
		link: 'https://arxiv.org/abs/2510.23965'
	},
	{
		altText: 'Training Language Models to Explain Their Own Computations',
		imgSrc: '/images/papers/training-lms-explain-computations.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Training Language Models to Explain Their Own Computations',
		authors: ['Carl Guo'],
		link: 'https://arxiv.org/abs/2511.08579'
	},
	{
		altText: 'Steering OOD Generalization with Concept Ablation Fine-Tuning',
		imgSrc: '/images/papers/concept-ablation-fine-tuning.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Steering Out-of-Distribution Generalization with Concept Ablation Fine-Tuning',
		authors: ['Caden Juang'],
		link: 'https://arxiv.org/abs/2507.16795'
	},
	{
		altText: 'An Assessment of Model-on-Model Deception',
		imgSrc: '/images/papers/model-on-model-deception.png',
		tags: [TAGS.ICLR_2024, TAGS.MECH_INTERP],
		title: 'An Assessment of Model-on-Model Deception',
		authors: ['Laker Newhouse'],
		link: 'https://arxiv.org/pdf/2405.12999'
	},
	{
		altText: 'Harmonic Loss Trains Interpretable AI Models',
		imgSrc: '/images/papers/harmonic-loss.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Harmonic Loss Trains Interpretable AI Models',
		authors: ['Riya Yagi', 'David Baek'],
		link: 'https://arxiv.org/pdf/2502.01628'
	},
	{
		altText: 'Understanding SAE Scaling in the Presence of Feature Manifolds',
		imgSrc: '/images/papers/sae-scaling-feature-manifolds.png',
		tags: [TAGS.SAE, TAGS.MECH_INTERP],
		title: 'Understanding SAE Scaling in the Presence of Feature Manifolds',
		authors: ['Eric Michaud'],
		link: 'https://arxiv.org/abs/2509.02565'
	},
	{
		altText: 'Prompt Attacks Reveal Superficial Knowledge Removal in Unlearning Methods',
		imgSrc: '/images/papers/prompt-attacks-unlearning.png',
		tags: [TAGS.UNLEARNING, TAGS.ADVERSARIAL],
		title: 'Prompt Attacks Reveal Superficial Knowledge Removal in Unlearning Methods',
		authors: ['Ashwin Sreevatsa', 'Shariqah Hossain', 'Eyon Jang'],
		link: 'https://arxiv.org/abs/2506.10236'
	},
	{
		altText: 'Investigating Model Editing for Unlearning in Large Language Models',
		imgSrc: '/images/papers/model-editing-unlearning.png',
		tags: [TAGS.UNLEARNING, TAGS.MECH_INTERP],
		title: 'Investigating Model Editing for Unlearning in Large Language Models',
		authors: ['Shariqah Hossain'],
		link: 'https://arxiv.org/abs/2512.20794'
	},
	{
		altText: 'Shutdownable Agents through POST-Agency',
		imgSrc: '/images/papers/shutdownable-post-agency.png',
		tags: [TAGS.AGENTS],
		title: 'Shutdownable Agents through POST-Agency',
		authors: ['Elliott Thornley'],
		link: 'https://arxiv.org/abs/2505.20203'
	},
	{
		altText: 'Towards Shutdownable Agents via Stochastic Choice',
		imgSrc: '/images/papers/shutdownable-stochastic-choice.png',
		tags: [TAGS.TMLR_2025, TAGS.AGENTS],
		title: 'Towards Shutdownable Agents via Stochastic Choice',
		authors: ['Elliott Thornley'],
		link: 'https://arxiv.org/abs/2407.00805'
	},
	{
		altText: 'The Shutdown Problem',
		imgSrc: '/images/papers/shutdown-problem-engineering.png',
		tags: [TAGS.PHIL_STUDIES_2025, TAGS.GOVERNANCE],
		title: 'The Shutdown Problem: An AI Engineering Puzzle for Decision Theorists',
		authors: ['Elliott Thornley'],
		link: 'https://link.springer.com/article/10.1007/s11098-024-02153-3'
	},
	{
		altText: 'InvThink: Towards AI Safety via Inverse Reasoning',
		imgSrc: '/images/papers/invthink-inverse-reasoning.png',
		tags: [TAGS.REASONING],
		title: 'InvThink: Towards AI Safety via Inverse Reasoning',
		authors: ['Yubin Kim'],
		link: 'https://arxiv.org/abs/2510.01569'
	},
	{
		altText: 'Training Transformers with Enforced Lipschitz Constants',
		imgSrc: '/images/papers/lipschitz-transformers.png',
		tags: [TAGS.MECH_INTERP],
		title: 'Training Transformers with Enforced Lipschitz Constants',
		authors: ['Laker Newhouse'],
		link: 'https://arxiv.org/abs/2507.13338'
	},
	{
		altText: 'An Optimization Framework for Differentially Private Sparse Fine-Tuning',
		imgSrc: '/images/papers/dp-sparse-finetuning.png',
		tags: [TAGS.SCALING],
		title: 'An Optimization Framework for Differentially Private Sparse Fine-Tuning',
		authors: ['Mehdi Makni'],
		link: 'https://arxiv.org/abs/2503.12822'
	},
	{
		altText: 'Basic Legibility Protocols Improve Trusted Monitoring',
		imgSrc: '/images/papers/legibility-protocols.png',
		tags: [],
		title: 'Basic Legibility Protocols Improve Trusted Monitoring',
		authors: ['Ashwin Sreevatsa'],
		link: 'https://arxiv.org/abs/2602.10153'
	},
	{
		altText: 'Robust Feature-Level Adversaries are Interpretability Tools',
		imgSrc: '/images/papers/robust-feature-level-adv.png',
		tags: [TAGS.NEURIPS_2022, TAGS.ADVERSARIAL, TAGS.MECH_INTERP],
		title: 'Robust Feature-Level Adversaries are Interpretability Tools',
		authors: ['Stephen Casper'],
		link: 'https://arxiv.org/abs/2110.03605'
	}
] as const;
