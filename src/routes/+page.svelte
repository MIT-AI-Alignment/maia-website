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
		'Free food at sessions',
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
	heroTitle="We're a group of MIT students working to <span class='text-maia-800 dark:text-maia-500'>reduce risks from advanced AI</span>."
>
	<svelte:fragment slot="hero-content">
		<div class="prose dark:prose-invert max-w-none">
			<p class="text-lg max-w-2xl">
				MIT AI Alignment (MAIA) supports students learning about and working on AI safety.
				We run fellowships, support student research, and host talks and workshops.
			</p>

		</div>
	</svelte:fragment>


	<div class="participation">
		<section id="aisf" aria-labelledby="aisf-title" use:reveal>
			<h2 id="aisf-title" class="font-heading">AI Safety Fundamentals</h2>
			<p>
				AISF is MAIA's eight-week introductory fellowship on AI safety. In small cohorts,
				we discuss the current trends in AI, evidence for misalignment, and potential
				risks from advanced AI. We also explore technical approaches to AI safety,
				AI policy, and paths into safety research.
			</p>
			<ul class="fellowship-details">
				{#each aisfBenefits as benefit}<li>{@html benefit}</li>{/each}
			</ul>
			<p>Open to anyone, with preference for MIT undergraduate and graduate students.</p>
			<div class="participation-actions">
				{#if CONFIG.aisf_ml.applicationLink}
					<Button text="Apply for Fall AISF" type="purple" href={CONFIG.aisf_ml.applicationLink} />
				{/if}
				<a href="/aisf/">See the curriculum <span aria-hidden="true">→</span></a>
			</div>
		</section>
		<section id="membership" aria-labelledby="membership-title" use:reveal>
			<h2 id="membership-title" class="font-heading">MAIA membership</h2>
			<p>
				Work on AI safety alongside other students and researchers. Members use our
				shared workspace, join research discussions, and take part in MAIA programs.
			</p>
			<p>
				Applicants should have completed AISF or have equivalent AI safety experience.
				Membership is for people based in the Boston area; you don't have to be an MIT student.
			</p>
			<div class="participation-actions">
				<Button text="Apply for membership" type="purple" href={CONFIG.membership.applicationLink} target="_blank" rel="noopener noreferrer" />
				<a href="/getinvolved/#membership">Membership details <span aria-hidden="true">→</span></a>
			</div>
		</section>
	</div>

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
		<div class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
			<a href="/initiatives#research" class="py-2 text-maia-800 dark:text-maia-400 underline underline-offset-4">Read research by MAIA members <span aria-hidden="true">→</span></a>
			<a href="/events/" class="py-2 text-maia-800 dark:text-maia-400 underline underline-offset-4">Upcoming events <span aria-hidden="true">→</span></a>
		</div>
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
	.participation { position: relative; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3rem; margin-bottom: 4rem; }
	.participation::before { content: ''; position: absolute; left: calc(50% - .5px); top: 0; bottom: 0; width: 1px; background: var(--maia-border); }
	.participation section { display: flex; flex-direction: column; min-width: 0; padding: 1.75rem; border: 1px solid var(--maia-border); border-radius: .25rem; background: var(--maia-card); scroll-margin-top: calc(var(--header-height, 4rem) + 1rem); }
	.participation h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); line-height: 1.25; margin-bottom: 1.25rem; }
	.participation p { font-size: 1rem; line-height: 1.75; margin-bottom: 1.25rem; }
	.fellowship-details { margin: 0 0 1.25rem; padding-left: 1.25rem; list-style: disc; line-height: 1.75; }
	.participation-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem 1.25rem; margin-top: auto; padding-top: .5rem; }
	.participation-actions > a { color: var(--maia-accent); padding-block: .5rem; text-decoration: underline; text-underline-offset: .25rem; }
	@media (max-width: 760px) {
		.participation { grid-template-columns: 1fr; gap: 1.5rem; }
		.participation::before { display: none; }
		.participation section { padding: 1.5rem; }
	}

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
