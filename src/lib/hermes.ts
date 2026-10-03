// Content for the Hermes Fellowship page (/hermes). The deadline and application link live in
// CONFIG.hermes.
//
// Copy follows the public application form and the program's high-level description; keep the
// two in sync when details change. Store new mentor photos locally in
// static/images/hermes/mentors/ (portrait crops, ~600px wide) so they do not depend on expiring
// links; a mentor without `imageUrl` shows the Hermes mark instead of a photo.

import { PEOPLE } from './people';

export type Mentor = {
	name: string;
	// One short line under the name, at most two items, e.g. "MIT PhD". List current roles;
	// mark a past one with "former" (e.g. "former xAI") rather than "ex-".
	short?: string;
	// Shown when someone opens the mentor's profile. Write it in the third person. Each string is
	// a paragraph and each nested array is a bulleted list; links can be written inline as
	// [text](https://...).
	bio?: (string | string[])[];
	imageUrl?: string;
	website?: string;
	linkedin?: string;
	googleScholar?: string;
};

export const HERMES = {
	name: 'Hermes Fellowship',
	// The opening of the page: why the fellowship exists, then what it is.
	intro: {
		// Shown as two lines, one sentence each, at every screen width.
		motivation: [
			'Technical AI safety problems have never been more urgent.',
			'MIT students have the potential to help solve them.'
		],
		program:
			'We are launching the Hermes Fellowship: a new MAIA research initiative connecting promising undergraduates with experienced AI safety researchers. Our goal is to help fellows build the skills needed to assess and ensure the safety of future, powerful AI systems.'
	},
	// Prose at the top of Program details, before the list.
	detailsIntro: [
		'Hermes is an eight-week research fellowship designed for MIT students motivated to develop research skills in technical AI safety. Fellows join small teams of 2 to 3 MIT students working on a well-defined research project, while receiving mentorship from an AI safety researcher.'
	],
	details: [
		{
			label: 'Eligibility',
			value: 'The fellowship is open to MAIA members and MIT undergraduates. Previous research experience is strongly preferred, even if not directly related to AI safety.'
		},
		{
			label: 'Dates',
			value: 'Early October through the end of fall classes, starting Friday, October 9.'
		},
		{
			label: 'Format',
			value: 'Teams of 2–3 MIT students research a well-formulated question under the guidance of an AI safety researcher. Research managers provide support throughout the program in the form of weekly meetings. Fellows are expected to commit roughly 15 hours per week.'
		},
		{
			label: 'Support',
			value: 'We will cover basic resources, such as compute and AI-agent costs. The program will provide weekly coworking sessions, weekend workshops, and paper reading groups, along with standard MAIA member programming.'
		},
		{
			label: 'Deliverables',
			value: 'By the end of the program, you are strongly encouraged to submit your work to a conference or workshop, or to write a blog post. If you wish to continue your project, we may be able to provide extensions, depending on research manager and mentor availability.'
		}
	],
	// Rough schedule. The deadline and start date come from the application form; the later
	// phases follow the program plan and are approximate.
	timeline: [
		{ when: 'October 7', title: 'Applications close', text: 'Submit the form by 11:59 PM ET.' },
		{
			when: 'October 9',
			title: 'Kick-off',
			text: 'Paper replication workshops introduce your research area and how to get the most out of AI agents, while we match fellows with mentors.'
		},
		{
			when: 'Mid to late October',
			title: 'Scoping',
			text: 'Meet your mentor and research manager, and turn a research direction into a project proposal.'
		},
		{
			when: 'Late October to November',
			title: 'Research',
			text: 'Roughly 15 hours a week on your project, with weekly meetings and a midterm report.'
		},
		{
			when: 'Early December',
			title: 'Final presentations',
			text: 'Teams share their work in final reports and presentations at the end of fall classes.'
		},
		{
			when: 'IAP and spring',
			title: 'Extensions',
			text: 'Some teams may continue, depending on research manager and mentor availability.'
		}
	],
	mentorsIntro:
		'Each team is mentored by an AI safety researcher. Your project proposal helps us match you with one.',
	contactEmail: 'maia-exec@mit.edu'
} as const;

// Mentors with a MAIA profile in people.ts reuse its name and photo unless `details` overrides
// them, so updates there (such as swapping a Slack photo for a local copy) show up here too.
function fromProfile(id: string, details: Omit<Mentor, 'name'> = {}): Mentor {
	const person = PEOPLE[id];
	if (!person) throw new Error(`Hermes mentor "${id}" is missing from people.ts`);
	return { name: person.name, imageUrl: person.imageUrl, ...details };
}

const mentorList: Mentor[] = [
	fromProfile('sebastian-prasanna', {
		imageUrl: '/images/hermes/mentors/sebastian-prasanna.jpg',
		short: 'Redwood Research',
		bio: [
			'Sebastian does technical AI safety research at Redwood Research and was a MAIA organizer in school. Sebastian is most interested in figuring out how we will either preserve chain-of-thought (CoT) monitorability or build alternatives to it, and is also quite interested in automating safety research.'
		]
	}),
	fromProfile('daria-ivanova', {
		imageUrl: '/images/hermes/mentors/daria-ivanova.jpg',
		short: 'Anthropic Fellow',
		bio: [
			'Daria is an Anthropic fellow with Jack Lindsey, trying to improve our understanding of motivated reasoning in LLMs and stress-testing a promising interpretability tool called Oracle-lens. Before that, she worked on methods for analyzing model chains of thought at MATS with Neel Nanda.',
			'She’s excited about:',
			[
				'Improving our ability to answer “why did the model do that?” with a mix of black-box and white-box techniques',
				'Looking for computations we might care about outside of the workspace (using techniques like NLAs and Oracle-lens)',
				'Detecting and characterizing internal inconsistencies in LLMs'
			]
		]
	}),
	{
		name: 'David Baek',
		imageUrl: '/images/hermes/mentors/david-baek.jpg',
		short: 'MIT PhD',
		bio: [
			'David is a rising fourth-year PhD student at MIT, broadly interested in AI safety, alignment, and scalable oversight. As a mentor, David is looking for mentees who are curious, critical, and willing to keep asking questions, particularly questions that push back on our own implicit assumptions. David is excited about understanding how modern LLMs’ behaviors and values evolve over training, and how we can translate those learnings into making LLMs more reliable and safer.'
		]
	},
	fromProfile('asher-parker-sartori', {
		// The non-breaking space keeps "former xAI" together when the line wraps.
		short: 'Anthropic contractor, former\u00a0xAI',
		bio: [
			'Asher used to organize for MAIA before dropping out of MIT. Since then, Asher has worked on white-box control at Redwood Research, model behavior at xAI (briefly), and most recently scalable interpretability as a contractor for Anthropic.'
		]
	}),
	fromProfile('francisco-pernice', {
		imageUrl: '/images/hermes/mentors/francisco-pernice.jpg',
		short: 'MIT PhD',
		// The original text links two "see this" references (after "interpretability" and after
		// "rogue agent behavior"); add them inline once we have the URLs.
		bio: [
			'Francisco is a fourth-year PhD student at MIT who has worked at Goodfire on removing eval awareness from models, and will start full-time at Transluce after finishing the PhD. Francisco is interested in scalable (bitter-lessoned) approaches to interpretability and investigating rogue agent behavior, and would be excited to work with other ambitious people.'
		]
	}),
	{ name: 'Eric Gan', imageUrl: '/images/hermes/mentors/eric-gan.jpg', short: 'Redwood Research' },
	fromProfile('ionel-chiosa', {
		imageUrl: '/images/hermes/mentors/ionel-chiosa.jpg',
		short: 'CBAI',
		bio: [
			'Ionel is a program manager at the Cambridge Boston Alignment Initiative (CBAI) and recently completed an MEng in Max Tegmark’s group at MIT, working on automating the formal verification of software. He is now most excited about building robust, hill-climbable benchmarks for mechanistic interpretability, which are critical to properly automating this branch of AI safety research.'
		]
	}),
	{
		name: 'Alex Mark',
		imageUrl: '/images/hermes/mentors/alex-mark.jpg',
		short: 'CBAI',
		bio: [
			'Alex is currently a research fellow with Cambridge ERA:AI. Previously, he was a research fellow with the Cambridge Boston Alignment Initiative. Before pivoting to AI safety, he was a public defender in Los Angeles County and later a housing attorney with Greater Boston Legal Services.'
		]
	},
	{
		name: 'Aruna Sankaranarayanan',
		imageUrl: '/images/hermes/mentors/aruna-sankaranarayanan.jpg',
		short: 'MIT PhD',
		bio: [
			'Aruna is a PhD student in MIT’s Algorithmic Alignment Group. She uses interpretability methods to investigate the representations that lead to certain model behavior. Her past work spans robust interpretability benchmarks, understanding refusal behavior, and modeling emergent collective dynamics among agents.'
		],
		linkedin: 'https://www.linkedin.com/in/arunasank/'
	}
];

// Shown in alphabetical order by first name (the full name as displayed).
export const MENTORS: Mentor[] = [...mentorList].sort((a, b) => a.name.localeCompare(b.name));
