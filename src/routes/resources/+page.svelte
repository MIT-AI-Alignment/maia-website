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
			blurb: 'A concrete, month-by-month scenario for how the next few years of AI could go.',
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
			blurb: 'AI Safety Fundamentals reading curriculum for fellows.'
		},
		{
			href: '/resources/mit-classes',
			icon: 'fas fa-chalkboard-teacher',
			title: 'MIT & Harvard Classes',
			blurb: 'MIT and Harvard classes relevant to AI safety.'
		},
		{
			href: '/resources/faculty-labs',
			icon: 'fas fa-flask',
			title: 'MIT Faculty and Labs',
			blurb: 'MIT faculty and labs working on AI safety and related areas.'
		},
		{
			href: '/resources/fellowships',
			icon: 'fas fa-user-graduate',
			title: 'AI Safety Fellowships',
			blurb: 'Fellowships and programs for getting involved in AI safety.'
		},
		{
			href: '/initiatives#research',
			icon: 'fas fa-file-lines',
			title: 'Research by MAIA Members',
			blurb: 'Papers published by MAIA members.'
		},
		{
			href: '/initiatives#orgs',
			icon: 'fas fa-building',
			title: 'Organizations We Work With',
			blurb: 'Labs, nonprofits, and policy groups MAIA works with.'
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
			Why AI safety matters, how to learn it at MIT, and how to keep up with the field.
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
		<div class="not-prose rounded-xl border-2 border-maia-500 bg-maia-500/5 p-5 mb-6">
			<p class="font-medium !m-0">
				MAIA's core mission is to empower MIT students to recognize and reduce the potentially
				existential risks posed by the development of powerful AI systems.
			</p>
		</div>
		<p>
			AI is expected to reshape every pillar of modern society: the economy, science and mathematics,
			military strategy, culture at large. This isn't mere speculation. Unprecedented capital
			investment, rapid algorithmic progress, and consistent gains across frontier benchmarks suggest
			transformative AI is not a distant hypothetical, but a defining feature of this coming decade.
			This transformation comes with certain risks. The ones we take most seriously are:
		</p>
		<ul>
			<li>
				<strong>Loss of control:</strong> As AI systems become more autonomous and self-improving,
				while being deployed with super-human speed at super-human scales across all levels of
				society, maintaining meaningful human oversight becomes harder, and the consequences of
				failure become catastrophic.
			</li>
			<li>
				<strong>Geopolitical instability:</strong> Accelerating capabilities create pressure for
				rushed deployment and risky preemptive actions, raising the likelihood of accidents and
				conflict.
			</li>
			<li>
				<strong>Concentration of power:</strong> Even in optimistic scenarios where alignment is
				solved, transformative AI risks centralizing power in ways that are incompatible with
				meaningful notions of democracy and personal self-determination.
			</li>
			<li>
				<strong>Gradual disempowerment:</strong> Even in optimistic scenarios where all of the above
				are solved, transformative AI will lead to unprecedented cultural changes dominated by
				disempowerment and the unpredictable predispositions of the deployed powerful AIs.
			</li>
		</ul>
		<p>
			Given these predictable challenges, we believe talented and highly motivated young people have
			a great opportunity to steer the world towards safer, prosperous futures. In particular, we
			believe MIT students are uniquely positioned to shape their careers in ways that are aimed at
			such impact. Some of the key features that set them apart are:
		</p>
		<ul>
			<li>
				<strong>MIT selects for extraordinary people.</strong> Many students here, if sufficiently
				motivated, have the potential to become world-leading experts in AI governance or agendas of
				technical safety research.
			</li>
			<li>
				<strong>MIT's resources help its students realize their potential.</strong> For most
				upperclassmen, their time at the Institute provided the research skills and work experience
				necessary to quickly adapt to new fields and achieve impact.
			</li>
			<li>
				<strong>Unlike other leading universities, many MIT faculty members are concerned about AI
				risk.</strong> This includes Max Tegmark, Dylan Hadfield-Menell, Michiel Bakker, and
				Aleksander Madry, among many others. See <a href="/resources/faculty-labs">MIT faculty and labs</a>.
			</li>
			<li>
				<strong>Graduating from MIT is a strong credential.</strong> By virtue of carrying a degree
				from this institution, one can pursue many more opportunities. Therefore, empowering students
				to pursue opportunities that steer the incoming wave, as opposed to merely riding it, can be
				especially impactful.
			</li>
			<li>
				<strong>MIT has strong communities that support students interested in having a positive
				impact.</strong> MAIA is well connected and recognized by dozens of safety organizations. Many
				MAIA alumni work on safety problems at frontier labs. The support from
				<a href="https://www.cbai.ai/">CBAI</a> through philanthropic funds enables us to pursue
				initiatives that other student organizations can only dream of. The proximity to
				<a href="https://aisst.ai/">AISST</a> and other student groups animated by the same mission
				helps MAIA join a community that expands well outside the bounds of MIT's campus.
			</li>
		</ul>

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
		</div>
	</SectionContainer>

	<SectionContainer id="learn" title="Learn" icon="fa-solid fa-graduation-cap">
		<p>Curricula, classes, labs, and fellowships.</p>
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

	<SectionContainer id="stay-informed" title="Stay informed" icon="fa-solid fa-newspaper">
		<p>Newsletters, podcasts, forums, and job boards for keeping up with the field.</p>
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
