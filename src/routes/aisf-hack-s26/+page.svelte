<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) element.scrollIntoView({ behavior: 'smooth' });
	}

	const tracks = [
		{
			id: 'interp',
			icon: 'fas fa-microscope',
			name: 'Interpretability',
			description:
				"Probe model internals — attention patterns, activation steering, linear probes, SAE features. You're running experiments on what's happening inside the model.",
			tags: ['Python', 'TransformerLens', 'GPU via RunPod'],
			difficulty: 'Technical',
			colabHref:
				'https://colab.research.google.com/drive/1V5kgglqUEtq4tJBPA7eAUdg4nWMxnQlo?usp=sharing',
			templateHref: 'https://github.com/MIT-AI-Alignment/aisf-hack-s26-template-interp',
			ideaBankHref:
				'https://www.notion.so/mit-ai-alignment/Interpretability-Idea-Bank-355a75922917808aa105e9561719cdd4',
			deliverables: [
				'GitHub repo with notebooks',
				'At least one result figure',
				'writeup.md filled in',
				'3-minute presentation'
			]
		},
		{
			id: 'control',
			icon: 'fas fa-shield-alt',
			name: 'Control & Oversight',
			description:
				"Design and run evals — sandbagging, subversion, monitor effectiveness, debate as oversight. You're testing whether safety-relevant behaviors hold up under pressure.",
			tags: ['Python', 'Anthropic API', 'No GPU needed'],
			difficulty: 'Technical',
			colabHref: 'https://colab.research.google.com/drive/1gK_CnQEU5DgjDy9vNRzFR_wD0XPprSXN',
			templateHref: 'https://github.com/MIT-AI-Alignment/aisf-hack-s26-template-control',
			ideaBankHref:
				'https://www.notion.so/mit-ai-alignment/Control-Oversight-Idea-Bank-355a7592291780299b1bf4f4d18e3481',
			deliverables: [
				'GitHub repo with trial data',
				'results.csv populated',
				'writeup.md filled in',
				'3-minute presentation'
			]
		},
		{
			id: 'strategy',
			icon: 'fas fa-landmark',
			name: 'AI Governance & Strategy',
			description:
				"Write a policy memo, x-risk scenario, or structured argument on a specific governance question. You're making a concrete recommendation to a real audience.",
			tags: ['No code', 'No GPU', 'Writing'],
			difficulty: 'Non-technical',
			colabHref: null,
			templateHref: 'https://github.com/MIT-AI-Alignment/aisf-hack-s26-template-strategy',
			ideaBankHref:
				'https://www.notion.so/mit-ai-alignment/AI-Governance-Strategy-Idea-Bank-355a75922917801eae6dde8bd85f9df7',
			deliverables: [
				'GitHub repo with written deliverable',
				'Policy memo, scenario, or blog post',
				'3-minute presentation'
			]
		}
	];

	const schedule = [
		{ time: '10:00 – 10:30', activity: 'Breakfast + Check-in' },
		{ time: '10:30 – 11:00', activity: 'Icebreaker + Team Formation' },
		{ time: '11:00 – 11:15', activity: 'Team Init + Repo Setup' },
		{ time: '11:15 – 13:00', activity: 'Hacking Block 1' },
		{ time: '13:00 – 13:30', activity: 'Lunch' },
		{ time: '13:30 – 16:00', activity: 'Hacking Block 2 + Mentor Office Hours' },
		{ time: '16:00 – 16:30', activity: 'Final Hacking — Submissions close 4:30pm sharp' },
		{ time: '16:30 – 17:30', activity: 'Demos (3 min each) + Dinner' },
		{ time: '17:30 – 18:00', activity: 'Judging Deliberation' },
		{ time: '18:00 – 18:30', activity: 'Awards, Closing, Group Photo' }
	];

	const steps = [
		{
			number: '01',
			icon: 'fas fa-users',
			title: 'Form your team',
			description:
				'Find 1–3 teammates during the icebreaker. Fill out the team init form — one per team.'
		},
		{
			number: '02',
			icon: 'fas fa-flask',
			title: 'Pick your track and explore ideas',
			description:
				"Open your track's idea bank. Work through the sharpening questions before writing a single line of code or prose."
		},
		{
			number: '03',
			icon: 'fas fa-laptop-code',
			title: 'Open your starter notebook',
			description:
				'Read the Colab notebook for your track. It orients you to the tools and data structures before you touch compute.'
		},
		{
			number: '04',
			icon: 'fas fa-rocket',
			title: 'Clone your repo and build',
			description:
				'Your GitHub repo will be ready within 10 minutes of submitting the form. Clone it, request compute if needed, and start.'
		}
	];
</script>

<PageLayout
	title="AISF Hack S26"
	description="MAIA AI Safety Fundamentals Capstone Hackathon — Spring 2026. May 9 · CIC Cambridge."
	heroIcon="fas fa-laptop-code"
	heroTitle="AISF Hack S26"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-maia-600 dark:text-maia-400 text-lg mb-2">
			May 9, 2026 · CIC Cambridge · 10:00am – 6:30pm
		</p>
		<p class="text-center text-maia-500 dark:text-maia-500 text-sm mb-8">
			Capstone hackathon for MAIA AI Safety Fundamentals fellows · Spring 2026
		</p>
		<div class="flex flex-wrap justify-center gap-3 mb-8">
			<Button
				text="Register on Luma"
				icon="fas fa-pen"
				type="primary"
				size="md"
				href="https://lu.ma/kqcuzd6o"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<Button
				text="Team Init Form"
				icon="fas fa-users"
				type="outline"
				size="md"
				href="#"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<Button
				text="Tracks"
				icon="fas fa-code-branch"
				type="outline"
				size="md"
				on:click={() => scrollToSection('tracks')}
			/>
			<Button
				text="Schedule"
				icon="fas fa-clock"
				type="outline"
				size="md"
				on:click={() => scrollToSection('schedule')}
			/>
		</div>
	</svelte:fragment>

	<!-- Quick stats -->
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
		{#each [{ icon: 'fas fa-calendar', label: 'Date', value: 'May 9, 2026' }, { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'CIC Cambridge' }, { icon: 'fas fa-code-branch', label: 'Tracks', value: '3 tracks' }, { icon: 'fas fa-users', label: 'Team size', value: '2–4 people' }] as stat}
			<div class="p-4 rounded-xl border border-border-light dark:border-border-dark text-center">
				<i class="{stat.icon} text-maia-600 dark:text-maia-400 mb-2 block"></i>
				<p class="text-xs text-maia-500 dark:text-maia-500 mb-1">{stat.label}</p>
				<p class="text-sm font-medium">{stat.value}</p>
			</div>
		{/each}
	</div>

	<!-- How it works -->
	<SectionContainer title="How it works" icon="fas fa-map-signs">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each steps as step}
				<div class="relative p-5 rounded-xl border border-border-light dark:border-border-dark">
					<span
						class="text-4xl font-heading font-bold text-maia-100 dark:text-maia-900 absolute top-4 right-4 select-none"
					>
						{step.number}
					</span>
					<i class="{step.icon} text-maia-600 dark:text-maia-400 text-lg mb-3 block"></i>
					<h3 class="font-semibold mb-2 text-sm">{step.title}</h3>
					<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">{step.description}</p>
				</div>
			{/each}
		</div>
	</SectionContainer>

	<!-- Tracks -->
	<SectionContainer id="tracks" title="Tracks" icon="fas fa-code-branch">
		<p class="text-sm text-maia-600 dark:text-maia-400 mb-8">
			Pick one track per team. Each has a starter notebook, a GitHub template repo, and an idea bank
			to help you get started fast. Not sure which track? The idea banks are open to everyone —
			browse before you decide.
		</p>

		<div class="space-y-6">
			{#each tracks as track}
				<div class="p-6 rounded-xl border border-border-light dark:border-border-dark">
					<!-- Track header -->
					<div class="flex items-start justify-between gap-4 mb-4">
						<div class="flex items-center gap-3">
							<div
								class="w-9 h-9 rounded-lg bg-maia-50 dark:bg-maia-950/30 flex items-center justify-center shrink-0"
							>
								<i class="{track.icon} text-maia-600 dark:text-maia-400"></i>
							</div>
							<div>
								<h3 class="font-semibold text-lg leading-tight">{track.name}</h3>
								<span class="text-xs text-maia-500 dark:text-maia-500">{track.difficulty}</span>
							</div>
						</div>
					</div>

					<!-- Description -->
					<p class="text-sm text-maia-600 dark:text-maia-400 mb-3 leading-relaxed">
						{track.description}
					</p>

					<!-- TransformerLens note for interp only -->
					{#if track.id === 'interp'}
						<p class="text-xs text-maia-500 dark:text-maia-500 mb-3 leading-relaxed">
							<i class="fas fa-info-circle mr-1"></i>
							TransformerLens is a Python library for mechanistic interpretability — it gives you clean
							access to activations, attention patterns, and hooks at every layer of GPT-2 and similar
							models.
						</p>
					{/if}

					<!-- Scoping -->
					<div
						class="mb-4 p-3 rounded-lg bg-maia-50 dark:bg-maia-950/20 border border-border-light dark:border-border-dark"
					>
						<p class="text-xs font-medium text-maia-700 dark:text-maia-300 mb-1">
							<i class="fas fa-compress-arrows-alt mr-1"></i>Scoping your project
						</p>
						{#if track.id === 'interp'}
							<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
								Good: one model, one mechanism, one metric, first result in 90 min.<br />
								Bad: "we'll study attention heads" / "we'll replicate the IOI paper".<br />
								When in doubt: do less, go deeper.
							</p>
						{:else if track.id === 'control'}
							<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
								Good: one behavior, two conditions, scoring rubric defined before data collection.<br
								/>
								Bad: "we'll study sycophancy" / "we'll test five different models".<br />
								Rule: define your scoring function before you run a single trial.
							</p>
						{:else if track.id === 'strategy'}
							<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
								Good: one mechanism, one audience, one concrete recommendation.<br />
								Bad: "a survey of AI risks" / "we'll cover compute governance broadly".<br />
								Rule: if your recommendation is "more research is needed," keep writing.
							</p>
						{/if}
					</div>

					<!-- Tags -->
					<div class="flex flex-wrap gap-2 mb-5">
						{#each track.tags as tag}
							<span
								class="text-xs px-2.5 py-1 rounded-full bg-maia-50 dark:bg-maia-950/30 text-maia-600 dark:text-maia-400 border border-border-light dark:border-border-dark"
							>
								{tag}
							</span>
						{/each}
					</div>

					<!-- Deliverables -->
					<div class="mb-5">
						<p
							class="text-xs font-medium text-maia-500 dark:text-maia-500 uppercase tracking-wide mb-2"
						>
							Deliverables (due 4:30pm)
						</p>
						<ul class="space-y-1">
							{#each track.deliverables as deliverable}
								<li class="text-xs text-maia-600 dark:text-maia-400 flex items-center gap-2">
									<i class="fas fa-check text-maia-400 dark:text-maia-600 text-xs shrink-0"></i>
									{deliverable}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Actions -->
					<div class="flex flex-wrap gap-2">
						<Button
							text="Idea Bank"
							icon="fas fa-lightbulb"
							type="primary"
							size="sm"
							href={track.ideaBankHref}
							target="_blank"
							rel="noopener noreferrer"
						/>
						{#if track.colabHref}
							<Button
								text="Starter Notebook"
								icon="fab fa-google"
								type="outline"
								size="sm"
								href={track.colabHref}
								target="_blank"
								rel="noopener noreferrer"
							/>
						{/if}
						<Button
							text="Template Repo"
							icon="fab fa-github"
							type="outline"
							size="sm"
							href={track.templateHref}
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="mt-6 p-4 rounded-xl bg-maia-50 dark:bg-maia-950/20 border border-border-light dark:border-border-dark"
		>
			<p class="text-sm text-maia-600 dark:text-maia-400">
				<i class="fas fa-layer-group mr-2 text-maia-500"></i>
				<span class="font-medium">All tracks, one place — </span>
				browse the full brainstorming hub across all three tracks before picking yours.
			</p>
			<div class="mt-3">
				<Button
					text="Browse all idea banks"
					icon="fas fa-external-link-alt"
					type="outline"
					size="sm"
					href="https://mit-ai-alignment.notion.site/MAIA-AISF-Hack-S26-Track-Brainstorming-355a7592291780b49f78cb8430fda2d0"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
		</div>
	</SectionContainer>

	<!-- Schedule -->
	<SectionContainer id="schedule" title="Schedule" icon="fas fa-clock">
		<div
			class="divide-y divide-border-light dark:divide-border-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden"
		>
			{#each schedule as { time, activity }, i}
				<div
					class="flex gap-6 px-5 py-3 text-sm {i === 5 ? 'bg-maia-50/50 dark:bg-maia-950/20' : ''}"
				>
					<span
						class="font-mono text-maia-500 dark:text-maia-400 whitespace-nowrap w-36 shrink-0 text-xs pt-0.5"
						>{time}</span
					>
					<span class="text-maia-800 dark:text-maia-200">{activity}</span>
				</div>
			{/each}
		</div>
		<div
			class="mt-4 p-4 rounded-xl bg-maia-50 dark:bg-maia-950/20 border border-border-light dark:border-border-dark flex items-start gap-3"
		>
			<i class="fas fa-exclamation-circle text-maia-500 mt-0.5 shrink-0"></i>
			<div>
				<p class="text-xs font-medium text-maia-700 dark:text-maia-300 mb-1">
					Submissions close at 4:30pm sharp
				</p>
				<p class="text-xs text-maia-600 dark:text-maia-400 mb-3">
					Submit your project via the form below before 4:30pm. Make your repo public before
					submitting — judges will read it.
				</p>
				<Button
					text="Submit your project"
					icon="fas fa-paper-plane"
					type="primary"
					size="sm"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
		</div>
	</SectionContainer>

	<!-- Compute & logistics -->
	<SectionContainer title="Compute & logistics" icon="fas fa-server">
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
			<div class="p-5 rounded-xl border border-border-light dark:border-border-dark">
				<i class="fas fa-microchip text-maia-600 dark:text-maia-400 mb-3 block"></i>
				<h3 class="font-semibold text-sm mb-2">Interpretability</h3>
				<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
					GPU compute via RunPod. Request an API key in <span class="font-mono"
						>#aisf-hack-s26-compute-request</span
					> — a MAIA exec will DM you your key within minutes.
				</p>
			</div>
			<div class="p-5 rounded-xl border border-border-light dark:border-border-dark">
				<i class="fas fa-robot text-maia-600 dark:text-maia-400 mb-3 block"></i>
				<h3 class="font-semibold text-sm mb-2">Control & Oversight</h3>
				<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
					Anthropic API (and OpenAI if needed). Request in <span class="font-mono"
						>#aisf-hack-s26-compute-request</span
					>. No GPU required — runs on your laptop or Colab.
				</p>
			</div>
			<div class="p-5 rounded-xl border border-border-light dark:border-border-dark">
				<i class="fas fa-pen-nib text-maia-600 dark:text-maia-400 mb-3 block"></i>
				<h3 class="font-semibold text-sm mb-2">AI Governance & Strategy</h3>
				<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
					No compute needed. No API keys, no GPU, no setup. Open your template repo and start
					writing.
				</p>
			</div>
		</div>

		<div
			class="mt-5 p-4 rounded-xl bg-maia-50 dark:bg-maia-950/20 border border-border-light dark:border-border-dark"
		>
			<p class="text-xs font-medium text-maia-700 dark:text-maia-300 mb-1">
				<i class="fas fa-lock mr-1.5"></i>API key rules
			</p>
			<p class="text-xs text-maia-600 dark:text-maia-400">
				Keys are for your team only. Never commit them to your repo — use <span class="font-mono"
					>.env</span
				>
				only. Never post them in Slack. If you accidentally expose a key, post in
				<span class="font-mono">#aisf-hack-s26-compute-request</span> immediately so it can be revoked.
			</p>
		</div>
	</SectionContainer>

	<!-- Getting help -->
	<SectionContainer title="Getting help" icon="fas fa-hands-helping">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
			<div class="p-5 rounded-xl border border-border-light dark:border-border-dark">
				<i class="fab fa-slack text-maia-600 dark:text-maia-400 mb-3 block text-lg"></i>
				<h3 class="font-semibold text-sm mb-2">Mentor queue</h3>
				<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed mb-3">
					Post in <span class="font-mono">#aisf-hack-s26-mentor-queue</span> when you're stuck. Use the
					pinned format — mentors will claim and come to you.
				</p>
				<p
					class="text-xs font-mono bg-maia-50 dark:bg-maia-950/30 p-2 rounded-lg text-maia-700 dark:text-maia-300 leading-relaxed"
				>
					[TEAM] | [TRACK] | [problem] | [15+ min / quick] | [floor + room]
				</p>
			</div>
			<div class="p-5 rounded-xl border border-border-light dark:border-border-dark">
				<i class="fas fa-walking text-maia-600 dark:text-maia-400 mb-3 block text-lg"></i>
				<h3 class="font-semibold text-sm mb-2">Office hours</h3>
				<p class="text-xs text-maia-600 dark:text-maia-400 leading-relaxed">
					MAIA members will be floating 13:30–16:00 during hacking block 2. Flag someone down or
					post in the mentor queue. Don't debug alone for more than 15 minutes.
				</p>
			</div>
		</div>
	</SectionContainer>

	<!-- CTA -->
	<div
		class="mt-8 mb-4 p-8 rounded-xl border border-border-light dark:border-border-dark text-center"
	>
		<h2 class="text-2xl font-heading font-semibold mb-2">Ready?</h2>
		<p class="text-sm text-maia-600 dark:text-maia-400 mb-6">
			Register on Luma to save your spot. Team formation happens on the day.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<Button
				text="Register on Luma"
				icon="fas fa-pen"
				type="primary"
				size="md"
				href="https://lu.ma/kqcuzd6o"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<Button
				text="Browse idea banks"
				icon="fas fa-lightbulb"
				type="outline"
				size="md"
				href="https://mit-ai-alignment.notion.site/MAIA-AISF-Hack-S26-Track-Brainstorming-355a7592291780b49f78cb8430fda2d0"
				target="_blank"
				rel="noopener noreferrer"
			/>
		</div>
	</div>
</PageLayout>
