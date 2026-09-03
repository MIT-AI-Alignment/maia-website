<script>
	import PageLayout from '../components/PageLayout.svelte';
	import Button from '../components/Button.svelte';
	import { CONFIG } from '$lib/config';
	import { getBookablePeople } from '$lib/people';
	import Orgs from './components/orgs.svelte';
	const aisfBenefits = [
		'8 weeks, 2 hours per week',
		'<strong>Free food</strong> at sessions',
		'Small groups led by MAIA facilitators',
		'No prior AI background required'
	];

	const bookablePeople = getBookablePeople();
</script>

<PageLayout
	title="MIT AI Alignment"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce catastrophic risk from advanced AI."
	heroTitle="We're a group of MIT students working to <span class='text-maia-800 dark:text-maia-500'>reduce catastrophic risk from advanced AI</span>."
>
	<svelte:fragment slot="hero-content">
		<div>
			<div class="prose dark:prose-invert max-w-none relative z-10">
				<p>
					<a
						href="#chat-with-us"
						class="inline-block text-2xl text-maia-800 dark:text-maia-500 underline decoration-2 underline-offset-4 transition-colors"
					>
						Chat with us →
					</a>
				</p>
				<p class="text-lg md:w-2/3">
					Reducing risks from advanced artificial intelligence may be one of the most important
					challenges of our time. And one where real progress is possible.
				</p>
				<p class="text-lg md:w-2/3">
					MAIA supports undergraduate and graduate students contributing to that progress.
				</p>

				<div class="flex flex-col sm:flex-row gap-4 mt-8">
					{#if CONFIG.aisf_ml.visible}
						<a href="/getinvolved/">
							<Button text="See our opportunities" icon="fa-solid fa-arrow-right" type="purple" />
						</a>
					{/if}
					{#if CONFIG.aisf_gov.visible}
						<a href={CONFIG.mailingListLink} class="hover:scale-105 transition-transform">
							<Button text="Get event updates" icon="fa-solid fa-arrow-right" type="fuchsia" />
						</a>
					{/if}
				</div>
			</div>
		</div>
	</svelte:fragment>

	<!-- AISF: flagship program, feature card treatment -->
	<section
		id="aisf"
		class="maia-feature mb-16 rounded-xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-maia-800 to-maia-900 dark:from-maia-700 dark:to-maia-900 text-white shadow-maia-lg border border-maia-700/50 dark:border-maia-600/40 scroll-mt-24"
	>
		<h2 class="text-3xl md:text-4xl font-heading font-[550] mb-4 leading-tight">
			<i class="fa-solid fa-graduation-cap mr-2"></i>
			AI Safety Fundamentals
		</h2>

		<p class="text-lg text-white/90 mb-8 max-w-3xl leading-relaxed">
			The main way people get involved with MIT AI Alignment—an 8-week reading group on why AI
			safety matters and what's being done about it. Covers AI's trajectory, misalignment, technical
			safety, policy, and careers in the field. Fall and spring run in our office with dinner
			included, and summer is virtual. Open to anyone, with preference for MIT undergrad and grad
			students.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-3xl">
			{#each aisfBenefits as benefit}
				<div class="flex items-center gap-3 text-white/90">
					<span class="inline-flex w-4 justify-center">
						<i class="fa-solid fa-check text-maia-300"></i>
					</span>
					<span class="inline-block">
						{@html benefit}
					</span>
				</div>
			{/each}
		</div>

		<div class="flex flex-col sm:flex-row gap-3">
			{#if CONFIG.aisf_ml.applicationLink}
				<a
					href={CONFIG.aisf_ml.applicationLink}
					class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-maia-800 hover:bg-maia-50 font-medium transition-colors shadow-sm"
				>
					Apply for Summer AISF
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			{/if}
			<a
				href={CONFIG.aisf_ml.fallInterestFormLink}
				class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white text-maia-800 hover:bg-maia-50 font-medium transition-colors shadow-sm"
			>
				Fall AISF Interest Form
				<i class="fa-solid fa-arrow-right"></i>
			</a>
			<a
				href="/aisf/"
				class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/30"
			>
				See the curriculum
			</a>
		</div>
	</section>

	<!-- Chat with us: bookable team members -->
	<section id="chat-with-us" class="mb-16 scroll-mt-24">
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
			<div>
				<h2 class="text-3xl md:text-4xl font-heading font-[550] mb-3 leading-tight">
					<i class="fa-solid fa-mug-hot mr-2 text-maia-800 dark:text-maia-400"></i>
					Want to talk with us?
				</h2>
				<p class="text-lg text-maia-950/80 dark:text-maia-100/80 max-w-2xl leading-relaxed">
					We're MIT students working on AI alignment, and we're always happy to chat with people who
					are curious. You can ask about AISF, research, careers, or just what MAIA is like.
				</p>
			</div>
		</div>

		<div
			class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto rounded-xl p-8 md:p-10 bg-surface-light-alt dark:bg-surface-dark-alt border border-maia-200 dark:border-maia-800"
		>
			{#each bookablePeople as person}
				<a
					href={person.calendly ?? `mailto:${person.mitEmail}`}
					target={person.calendly ? '_blank' : undefined}
					rel={person.calendly ? 'noopener noreferrer' : undefined}
					class="group flex w-[calc((100%-0.5rem)/2)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)] flex-col items-center text-center p-4 rounded-lg bg-surface-light-elevated dark:bg-surface-dark-elevated border border-maia-200 dark:border-maia-800 hover:border-maia-800 dark:hover:border-maia-400 hover:shadow-maia transition-all duration-200"
				>
					<img
						src={person.imageUrl}
						alt={person.name}
						loading="lazy"
						decoding="async"
						class="w-20 h-20 rounded-full object-cover mb-3 ring-2 ring-maia-200 dark:ring-maia-800 group-hover:ring-maia-800 dark:group-hover:ring-maia-400 transition-all"
					/>
					<p class="font-heading font-[550] text-base leading-tight m-0">{person.name}</p>
					{#if person.position}
						<p class="text-xs text-maia-950/60 dark:text-maia-200/70 leading-tight mt-1 m-0">
							{person.position}
						</p>
					{/if}
					<span
						class="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-maia-800 dark:text-maia-400 group-hover:gap-2 transition-all"
					>
						<i class={person.calendly ? 'fa-regular fa-calendar' : 'fa-regular fa-envelope'}></i>
						{person.calendly ? 'Chat with' : 'Email'}
						{person.name.split(' ')[0]}
						<i class="fa-solid fa-arrow-right text-xs"></i>
					</span>
				</a>
			{/each}

			<p class="basis-full mt-4 text-sm text-maia-950/70 dark:text-maia-200/70 text-center">
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

	<section class="mb-16" aria-labelledby="organizations-title">
		<h2
			id="organizations-title"
			class="text-3xl md:text-4xl font-heading font-[550] mb-3 leading-tight"
		>
			<i class="fa-solid fa-building-columns mr-2 text-maia-800 dark:text-maia-400"></i>
			Organizations MAIA Works With
		</h2>
		<Orgs />
	</section>
</PageLayout>
