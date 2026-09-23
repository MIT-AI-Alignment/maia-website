<script>
	import PageLayout from '../components/PageLayout.svelte';
	import Button from '../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { getBookablePeople } from '$lib/people';
	import { RESEARCH_PAPERS } from '$lib/researchShowcase';
	import Orgs from './components/orgs.svelte';
	import { reveal } from '$lib/reveal';

	const aisfBenefits = [
		'8 weeks, 2 hours per week',
		'<strong>Free food</strong> at sessions',
		'Small groups led by MAIA facilitators',
		'No prior AI background required'
	];
	const maiaStats = [
		{ value: '300+', label: 'active members' },
		{ value: '1,300+', label: 'people in the MAIA Slack community' },
		{ value: String(RESEARCH_PAPERS.length), label: 'papers by members and alumni' }
	];

	const bookablePeople = getBookablePeople();

</script>


<PageLayout
	title="MIT AI Alignment"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce catastrophic risk from advanced AI."
	heroTitle="MIT students working to <span class='text-maia-800 dark:text-maia-500'>reduce risks from advanced AI</span>."
>
	<svelte:fragment slot="hero-content">
		<div class="prose dark:prose-invert max-w-none">
			<p class="text-lg max-w-2xl">
				MIT AI Alignment (MAIA) supports students learning about and working on AI safety.
				We run fellowships, support student research, and host talks and workshops.
			</p>
			<div class="not-prose flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
				<Button
					text="Apply for membership"
					icon="fa-solid fa-arrow-right"
					type="purple"
					size="lg"
					href={CONFIG.membership.applicationLink}
					target="_blank"
					rel="noopener noreferrer"
				/>
				<a href="/events/" class="py-3 text-maia-800 dark:text-maia-400 underline underline-offset-4">Upcoming events</a>
				<a href="#aisf" class="py-3 text-maia-800 dark:text-maia-400 underline underline-offset-4">Explore AISF</a>
			</div>
			<p class="mt-4 text-base max-w-2xl">
				Membership criteria include completion of AISF or equivalent AI safety experience.
				<a href="/getinvolved/#membership" class="underline underline-offset-4">See all criteria</a>.
			</p>
		</div>
	</svelte:fragment>


	<!-- AISF: flagship program, feature card treatment -->
	<section
		use:reveal
		id="aisf"
		class="maia-feature mb-16 rounded-xl p-8 md:p-10 bg-gradient-to-br from-maia-800 to-maia-900 dark:from-maia-700 dark:to-maia-900 text-white shadow-maia-lg border border-maia-700/50 dark:border-maia-600/40 scroll-mt-24"
	>
		<h2 class="text-3xl md:text-4xl font-heading font-[550] mb-4 leading-tight">
			<i class="fa-solid fa-graduation-cap mr-2"></i>
			AI Safety Fundamentals
		</h2>

		<p class="text-lg text-white/90 mb-8 max-w-3xl leading-relaxed">
			AISF is MAIA's eight-week introductory fellowship on AI safety. In small cohorts,
			we discuss the current trends in AI, evidence for misalignment, and potential
			risks from advanced AI. We also explore technical approaches to AI safety,
			AI policy, and paths into safety research.
			Open to anyone, with preference for MIT undergraduate and graduate students.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
			{#each aisfBenefits as benefit}
				<div class="flex items-center gap-3 text-white/90">
					<i class="fa-solid fa-check text-maia-300 w-4 text-center"></i>
					<span>{@html benefit}</span>
				</div>
			{/each}
		</div>

		<div class="flex flex-col sm:flex-row gap-3">
			{#if CONFIG.aisf_ml.applicationLink}
				<a
					href={CONFIG.aisf_ml.applicationLink}
					class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-maia-800 hover:bg-maia-50 font-medium transition-colors shadow-sm"
				>
					Apply for Fall AISF
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			{/if}
			<a
				href="/aisf/"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/30"
			>
				See the curriculum
			</a>
		</div>
	</section>

	<section use:reveal class="mb-16" aria-labelledby="maia-by-the-numbers-title">
		<h2 id="maia-by-the-numbers-title" class="text-3xl md:text-4xl font-heading font-[550] leading-tight">
			Our community
		</h2>
		<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each maiaStats as stat}
				<div>
					<p class="font-heading text-4xl font-[550] leading-none text-maia-800 dark:text-maia-400">
						{stat.value}
					</p>
					<p class="mt-2 text-base text-maia-950/80 dark:text-maia-100/80">{stat.label}</p>
				</div>
			{/each}
		</div>
		<a href="/initiatives#research" class="inline-block mt-6 py-2 text-maia-800 dark:text-maia-400 underline underline-offset-4">Read research by MAIA members <span aria-hidden="true">→</span></a>
	</section>


	<!-- Chat with us: bookable team members -->
	<section
		use:reveal
		id="chat-with-us"
		class="mb-16 scroll-mt-24"
	>
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
			<div>
				<h2 class="text-3xl md:text-4xl font-heading font-[550] mb-3 leading-tight">
					<i class="fa-solid fa-mug-hot mr-2 text-maia-800 dark:text-maia-400"></i>
					Want to talk with us?
				</h2>
				<p class="text-lg text-maia-950/80 dark:text-maia-100/80 max-w-2xl leading-relaxed">
					Talk with a MAIA organizer about the fellowship, research, or joining the group.
					Choose someone below to book a conversation or send an email.
				</p>
			</div>
		</div>

		<div class="team-list">
			{#each bookablePeople as person}
				<a
					href={person.calendly ?? `mailto:${person.mitEmail ?? person.email}`}
					target={person.calendly ? '_blank' : undefined}
					rel={person.calendly ? 'noopener noreferrer' : undefined}
					class="team-person"
				>
					<img src={person.imageUrl} alt="" loading="lazy" />
					<div>
						<p class="font-heading text-lg">{person.name}</p>
						{#if person.position}<p class="person-role">{person.position}</p>{/if}
						<span class="person-action">{person.calendly ? 'Book a chat' : 'Send an email'} <span aria-hidden="true">→</span></span>
					</div>
				</a>
			{/each}

			<p class="team-email mt-4 text-base text-maia-950/70 dark:text-maia-200/70">
			Prefer email? Reach the whole team at
			<a
				href="mailto:maia-exec@mit.edu"
				class="text-maia-800 dark:text-maia-400 underline underline-offset-2 hover:no-underline"
			>
				maia-exec@mit.edu
			</a>.
			</p>
		</div>
	</section>

	<section use:reveal class="mb-16" aria-labelledby="organizations-title">
		<h2 id="organizations-title" class="text-3xl md:text-4xl font-heading font-[550] mb-3 leading-tight">
			<i class="fa-solid fa-building-columns mr-2 text-maia-800 dark:text-maia-400"></i>
			Organizations MAIA Works With
		</h2>
		<Orgs />
	</section>
</PageLayout>

<style>
	.team-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 2rem; }
	.team-person { display: flex; align-items: center; gap: 1rem; padding: 1.25rem 0; border-top: 1px solid var(--maia-border); }
	.team-person img { width: 4rem; height: 4rem; flex-shrink: 0; border-radius: 50%; object-fit: cover; }
	.team-person > div { min-width: 0; }
	.person-role { color: var(--maia-muted); font-size: .95rem; margin-top: .15rem; }
	.person-action { display: inline-block; color: var(--maia-accent); margin-top: .4rem; font-size: 1rem; }
	.team-person:hover .person-action { text-decoration: underline; text-underline-offset: .2rem; }
	.team-person:focus-visible { outline: 2px solid var(--maia-accent); outline-offset: 4px; }
	.team-email { grid-column: 1 / -1; }
	@media (max-width: 600px) { .team-list { grid-template-columns: 1fr; } }
</style>
