<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';

	const sections = [
		{ id: 'why-ai-safety', title: 'Why care about AI safety?', icon: 'fa-solid fa-triangle-exclamation' },
		{ id: 'learn', title: 'Learn', icon: 'fa-solid fa-graduation-cap' },
		{ id: 'stay-informed', title: 'Stay informed', icon: 'fa-solid fa-newspaper' }
	];

	const startHere = [
		{
			title: 'AI Safety: a non-technical introduction',
			by: 'AISST (our sister group at Harvard)',
			blurb: 'Short curated list of articles and videos making the case for caution.',
			link: 'https://aisst.ai/non-technical-intro-to-ai-safety'
		},
		{
			title: 'Robert Miles on YouTube',
			by: 'Robert Miles',
			blurb: 'The best 10-minute explainers of the core alignment problems. Start with "Intro to AI Safety".',
			link: 'https://www.youtube.com/@RobertMilesAI'
		},
		{
			title: 'The Most Important Century',
			by: 'Holden Karnofsky, Cold Takes',
			blurb: 'Why this century could be the one where transformative AI changes everything, and why that is not a comfortable thought.',
			link: 'https://www.cold-takes.com/most-important-century/'
		},
		{
			title: 'AI 2027',
			by: 'AI Futures Project',
			blurb: 'A concrete, month-by-month scenario for how the next few years of AI could go. Coauthored by MAIA alumni.',
			link: 'https://ai-2027.com/'
		},
		{
			title: 'Preventing an AI-related catastrophe',
			by: '80,000 Hours',
			blurb: 'The long-form problem profile: the arguments, the counterarguments, and what you can do about it.',
			link: 'https://80000hours.org/problem-profiles/artificial-intelligence/'
		},
		{
			title: 'Is power-seeking AI an existential risk?',
			by: 'Joe Carlsmith',
			blurb: 'The careful, step-by-step version of the argument, with probabilities attached to each step.',
			link: 'https://arxiv.org/abs/2206.13353'
		},
		{
			title: 'AI Safety Fundamentals (online)',
			by: 'BlueDot Impact',
			blurb: 'The free online course our own AISF program is based on, if you want to go through it on your own.',
			link: 'https://bluedot.org/courses/'
		}
	];

	const learn = [
		{
			href: '/aisf',
			icon: 'fas fa-book',
			title: 'AISF Curriculum',
			blurb: 'The full reading curriculum from our AI Safety Fundamentals fellowship, week by week.'
		},
		{
			href: '/resources/mit-classes',
			icon: 'fas fa-chalkboard-teacher',
			title: 'Relevant MIT Classes',
			blurb: 'Which MIT classes to take for the math, ML, and policy background that AI safety work needs.'
		},
		{
			href: '/resources/faculty-labs',
			icon: 'fas fa-flask',
			title: 'MIT Faculty and Labs',
			blurb: 'Professors and labs at MIT doing alignment, interpretability, and governance research.'
		},
		{
			href: '/resources/fellowships',
			icon: 'fas fa-user-graduate',
			title: 'AI Safety Fellowships',
			blurb: 'Funded programs like MATS, SPAR, Astra, and the CBAI fellowship that turn students into researchers.'
		},
		{
			href: '/initiatives#research',
			icon: 'fas fa-file-lines',
			title: 'Research by MAIA Members',
			blurb: 'Papers our members have published, from adversarial Go policies to the limits of RLHF.'
		},
		{
			href: '/initiatives#orgs',
			icon: 'fas fa-building',
			title: 'Organizations We Work With',
			blurb: 'The labs, nonprofits, and policy groups our members collaborate with and go on to join.'
		}
	];

	const stayInformed = [
		{
			group: 'Newsletters',
			icon: 'fa-solid fa-envelope',
			items: [
				{ name: 'Transformer', by: 'Shakeel Hashim', link: 'https://www.transformernews.ai/' },
				{ name: 'AI Safety Newsletter', by: 'Center for AI Safety', link: 'https://newsletter.safe.ai/' },
				{ name: 'Import AI', by: 'Jack Clark', link: 'https://importai.substack.com/' },
				{ name: "Don't Worry About the Vase", by: 'Zvi Mowshowitz', link: 'https://thezvi.substack.com/' },
				{ name: '80,000 Hours Newsletter', by: '80,000 Hours', link: 'https://80000hours.org/newsletter/' }
			]
		},
		{
			group: 'Podcasts',
			icon: 'fa-solid fa-podcast',
			items: [
				{ name: '80,000 Hours Podcast', by: 'Rob Wiblin and Luisa Rodriguez', link: 'https://80000hours.org/podcast/' },
				{ name: 'Dwarkesh Podcast', by: 'Dwarkesh Patel', link: 'https://www.dwarkesh.com/' },
				{ name: 'AXRP', by: 'Daniel Filan', link: 'https://axrp.net/' },
				{ name: 'The Cognitive Revolution', by: 'Nathan Labenz', link: 'https://www.cognitiverevolution.ai/' }
			]
		},
		{
			group: 'Forums and maps',
			icon: 'fa-solid fa-comments',
			items: [
				{ name: 'Alignment Forum', by: 'Technical alignment research and discussion', link: 'https://www.alignmentforum.org/' },
				{ name: 'LessWrong', by: 'The broader community forum', link: 'https://www.lesswrong.com/' },
				{ name: 'AISafety.com map', by: 'Every org, program, and resource in the field', link: 'https://aisafety.com/map' }
			]
		},
		{
			group: 'Careers',
			icon: 'fa-solid fa-briefcase',
			items: [
				{ name: 'AI Safety Careers', by: 'Curated job board', link: 'https://www.aisafetycareers.com/' },
				{ name: '80,000 Hours Job Board', by: 'Roles across labs, policy, and nonprofits', link: 'https://jobs.80000hours.org/' },
				{ name: 'MAIA Fellowships page', by: 'Our guide to research fellowships', link: '/resources/fellowships' }
			]
		}
	];

	function scrollToSection(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<PageLayout
	title="Resources"
	description="Why AI safety matters, how to learn it at MIT, and how to stay up to date on the field."
	heroIcon="fas fa-book"
	heroTitle="Resources"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-8 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Why AI safety matters, how to learn it at MIT, and how to keep up with a field that moves
			every week.
		</p>
		<div class="flex flex-wrap justify-center gap-3 mb-8">
			{#each sections as section}
				<Button
					text={section.title}
					icon={section.icon}
					type="outline"
					size="md"
					on:click={() => scrollToSection(section.id)}
				/>
			{/each}
		</div>
	</svelte:fragment>

	<SectionContainer id="why-ai-safety" title="Why care about AI safety?" icon="fa-solid fa-triangle-exclamation">
		<p>
			The largest AI companies are explicitly trying to build systems that match or exceed human
			ability at essentially every cognitive task, and they expect to get there within years, not
			decades. Whether or not they are right about the timeline, the people building this
			technology describe it as the most consequential and possibly the most dangerous one in
			history. In 2023, the heads of OpenAI, Anthropic, and Google DeepMind, alongside Geoffrey
			Hinton and Yoshua Bengio, signed a
			<a href="https://www.safe.ai/work/statement-on-ai-risk">one-sentence statement</a> saying
			that mitigating the risk of extinction from AI should be a global priority alongside pandemics
			and nuclear war.
		</p>
		<p>
			The core problem is simple to state and hard to solve: we do not know how to make sure that a
			system smarter than us reliably does what we intend. Modern models are grown from data, not
			engineered line by line. We cannot read their goals off their weights, and we already see them
			gaming their training signals, telling users what they want to hear, and behaving differently
			when they think they are being tested. Those are small problems today. They stop being small
			once the systems are capable enough to run companies, write most of the world's code, or
			conduct their own research.
		</p>
		<ul>
			<li>
				<strong>Misalignment.</strong> Highly capable systems pursuing goals we did not intend,
				and being capable enough that we cannot easily correct them.
			</li>
			<li>
				<strong>Misuse.</strong> The same capabilities lowering the bar for bioweapons, large-scale
				cyberattacks, and manipulation.
			</li>
			<li>
				<strong>Concentration of power.</strong> Whoever controls the most capable systems,
				whether a company or a government, gaining an unprecedented and hard-to-reverse advantage
				over everyone else.
			</li>
		</ul>
		<p>
			We think this is one of the best problems an MIT student can work on. The field is young and
			small relative to the stakes, the open questions are genuinely technical (interpretability,
			robustness, evaluations, control, formal verification) as well as political, and students
			regularly contribute real research within a year of starting. MAIA members have gone on to
			work at Anthropic, OpenAI, Google DeepMind, METR, Redwood Research, and the AI Futures
			Project, and to write papers you will find in the NeurIPS and ICLR proceedings. See
			<a href="/initiatives#research">research by MAIA members</a>.
		</p>
		<p>
			You do not need to already agree with any of this to get involved. Most of us started
			skeptical. The reading below is where we would send a smart friend who asked "wait, is this
			actually a real thing?"
		</p>

		<h3 class="mt-8 mb-4 text-xl font-heading">Start here</h3>
		<div class="not-prose flex flex-col gap-3">
			{#each startHere as item}
				<a
					href={item.link}
					target="_blank"
					rel="noopener noreferrer"
					class="block p-4 rounded-xl border border-border-light dark:border-border-dark hover:bg-maia-500/5 transition"
				>
					<div class="flex flex-wrap items-baseline gap-x-3">
						<span class="font-semibold">{item.title}</span>
						<span class="text-sm text-maia-600 dark:text-maia-400">{item.by}</span>
					</div>
					<p class="text-sm mt-1 text-maia-950/70 dark:text-maia-100/70">{item.blurb}</p>
				</a>
			{/each}
		</div>

		<div class="not-prose flex flex-wrap gap-3 mt-8">
			<Button
				text="Apply to AI Safety Fundamentals"
				icon="fa-solid fa-arrow-right"
				type="purple"
				size="md"
				href="/getinvolved#aisf"
			/>
			<Button text="Come to an event" icon="fa-regular fa-calendar" type="outline" size="md" href="/events" />
		</div>
	</SectionContainer>

	<div class="flex justify-center mb-16">
		<div class="w-16 h-1 bg-maia-200 dark:bg-maia-800 rounded-full"></div>
	</div>

	<SectionContainer id="learn" title="Learn" icon="fa-solid fa-graduation-cap">
		<p>
			Everything we maintain for people who want to go from curious to capable: what to read, which
			classes to take, who at MIT works on this, and which programs will pay you to do research.
		</p>
		<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
			{#each learn as item}
				<a
					href={item.href}
					class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md hover:bg-maia-500/5 transition"
				>
					<div class="flex items-center gap-3 mb-2">
						<i class="{item.icon} text-maia-600 dark:text-maia-400" aria-hidden="true"></i>
						<h3 class="text-lg font-semibold">{item.title}</h3>
					</div>
					<p class="text-sm text-maia-950/70 dark:text-maia-100/70">{item.blurb}</p>
				</a>
			{/each}
		</div>
	</SectionContainer>

	<div class="flex justify-center mb-16">
		<div class="w-16 h-1 bg-maia-200 dark:bg-maia-800 rounded-full"></div>
	</div>

	<SectionContainer id="stay-informed" title="Stay informed" icon="fa-solid fa-newspaper">
		<p>
			The field changes weekly. These are the sources our organizers actually read and listen to.
			Pick one newsletter and one podcast; that is enough to keep up.
		</p>
		<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
			{#each stayInformed as group}
				<div class="p-6 rounded-xl border border-border-light dark:border-border-dark">
					<div class="flex items-center gap-3 mb-4">
						<i class="{group.icon} text-maia-600 dark:text-maia-400" aria-hidden="true"></i>
						<h3 class="text-lg font-semibold">{group.group}</h3>
					</div>
					<ul class="space-y-2">
						{#each group.items as item}
							<li>
								<a
									href={item.link}
									target={item.link.startsWith('/') ? undefined : '_blank'}
									rel={item.link.startsWith('/') ? undefined : 'noopener noreferrer'}
									class="font-medium text-maia-800 dark:text-maia-400 hover:text-maia-700 dark:hover:text-maia-300 transition-colors"
								>
									{item.name}
								</a>
								<span class="text-sm text-maia-600 dark:text-maia-400"> · {item.by}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</SectionContainer>

	<div class="flex justify-center mt-8 mb-12">
		<Button
			text="Back to Top"
			icon="fa-solid fa-arrow-up"
			type="text"
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		/>
	</div>
</PageLayout>
