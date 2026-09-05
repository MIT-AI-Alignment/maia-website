<script lang="ts">
	import ExpandableCard from '../../components/ExpandableCard.svelte';

	// Text adapted from the Spring '26 Organizer Onboarding page.
	const programs = [
		{
			name: 'AI Safety Fundamentals (AISF)',
			text: 'Our 8-week fellowship that introduces promising students to the main arguments and research agendas spanning AI safety. This includes one or two full-day hackathons for AISF participants.'
		},
		{
			name: 'Member meetings',
			text: 'Bi-weekly meetings where members read papers or essays related to developments in AI.'
		},
		{
			name: 'Paper replications',
			text: 'Roughly every weekend. The title is fairly self-explanatory, but sometimes they take the format of small workshops.'
		},
		{
			name: 'Speaker events',
			text: 'Talks and Q&As with renowned figures in AI safety.'
		},
		{
			name: 'Socials',
			text: 'Every week MAIA members, their friends, and other MIT students who want to learn more about us have a chance to bounce ideas and hang out on the 12th floor of CIC.'
		},
		{
			name: 'Mission Strawberry 🍓',
			text: 'MAIA members try to come up with questions that other members can answer, but AIs are likely to fail.'
		},
		{
			name: 'Campus competitions',
			text: 'A set of challenges which require MIT students to engage with the main arguments for AI safety. There are cash prizes.'
		},
		{
			name: 'AISST workshops',
			text: 'Every semester, we coordinate with AISST on running 2-3 workshop retreats where MAIA members have the chance to connect with professionals in AI safety over a weekend. The activities can range from heated debates about research agendas to singing "Let It Go" by a fire pit.'
		},
		{
			name: 'CPW',
			text: 'Every spring, MAIA organizers set up a stand and table for 3-4 hours, helping prefrosh learn about AI and connect with us once they choose to come to MIT.'
		}
	];
</script>

<p>
	MAIA supports students learning about AI safety, doing research, and finding collaborators.
	Members take part in the community, organizers run programs, and the executive board coordinates the work.
</p>

<div class="maia-roles not-prose flex flex-col gap-2 mt-6">
	<ExpandableCard open={true}>
		<svelte:fragment slot="summary">
			<span class="font-semibold">Members</span>
			<span class="text-maia-600 dark:text-maia-400 hidden sm:inline">The people who show up</span>
		</svelte:fragment>
		<ul class="list-disc pl-5 space-y-2 text-sm">
			<li>
				Active members are the ones that attend MAIA events on a somewhat regular basis, including
				member meetings. You will likely see them at socials and in the office.
			</li>
			<li>
				Alumni are MAIA members that graduated (or dropped out). Many of them have positions in
				leading AI safety labs and orgs.
			</li>
		</ul>
		<p class="text-sm mt-3">
			<a href="/getinvolved#membership" class="text-maia-600 dark:text-maia-400 underline hover:no-underline">
				How to become a member
			</a>
		</p>
	</ExpandableCard>

	<ExpandableCard>
		<svelte:fragment slot="summary">
			<span class="font-semibold">Organizers</span>
			<span class="text-maia-600 dark:text-maia-400 hidden sm:inline">The people who run programs</span>
		</svelte:fragment>
		<ul class="list-disc pl-5 space-y-2 text-sm">
			<li>Program leads or members of program teams. Program leads delegate tasks to organizers.</li>
			<li>
				Expected to participate in weekly 2-hour coworking meetings and 1-hour exec meetings once
				every 3 weeks.
			</li>
			<li>
				Most organizers are expected to have an average budget of 3 to 10 hours per week dedicated
				to MAIA tasks. The distribution of hours over the semester varies heavily depending on the
				program: AISF facilitation is evenly distributed, running a hackathon is concentrated around
				the event time.
			</li>
		</ul>
	</ExpandableCard>

	<ExpandableCard>
		<svelte:fragment slot="summary">
			<span class="font-semibold">Executive board</span>
			<span class="text-maia-600 dark:text-maia-400 hidden sm:inline">The people accountable for MAIA</span>
		</svelte:fragment>
		<p class="text-sm mb-3">
			This is the group of students that sets MAIA's theory of impact. They decide what programs are
			run every semester, brainstorm initiatives, take lead in the most demanding projects, and
			support organizers whenever needed. Exec members are expected to have an average time
			commitment of 8-15+ hours per week, and usually have prior organizer experience.
		</p>
		<p class="text-sm mb-3">
			The exec board, along with the organizers, are responsible for MAIA's overall success.
			However, when programs underperform, the exec team is accountable. They are responsible for
			de-risking projects, taking ownership of MAIA programs, intervening when necessary under short
			notice, and taking on tasks not formally assigned to anyone else.
		</p>
		<ul class="list-disc pl-5 space-y-2 text-sm">
			<li>
				<strong>Director.</strong> Runs organizer and exec meetings where key decisions are taken.
				Monitors all MAIA programs, ensuring they are running smoothly and flagging issues if
				necessary. Interfaces with MIT and CBAI, and is often the first point of contact for
				collaborations. Runs weekly one-on-ones with all organizers and execs.
			</li>
			<li>
				<strong>Deputy director.</strong> "Second in command," takes some director responsibilities
				when necessary. Flags or steps in when the director is not delivering on their
				responsibilities.
			</li>
			<li>
				<strong>Other exec members.</strong> Almost always lead MAIA programs. This involves
				executing tasks that require high context (say, setting up the structure of an AISF
				hackathon), as well as delegating tasks to other organizers. Participate in weekly exec
				meetings where member applications are reviewed and decisions are taken.
			</li>
			<li>
				<strong>Operations lead.</strong> A CBAI employee working 20 hours per week. Handles most
				office logistics and relations with CIC, and frequently interfaces with program leads.
			</li>
		</ul>
		<p class="text-sm mt-3">
			<strong>Becoming an exec.</strong> Any organizer who has a month of organizing experience and
			can meet the expectations we have of an exec member can become one: all the responsibilities
			of an organizer, accountability and ownership (when a project fails or a task falls through
			the cracks, you proactively identify the issue, promptly communicate it, and immediately start
			debugging it), and a larger time commitment of 8-15 hours per week on average.
		</p>
	</ExpandableCard>

	<ExpandableCard>
		<svelte:fragment slot="summary">
			<span class="font-semibold">CBAI</span>
			<span class="text-maia-600 dark:text-maia-400 hidden sm:inline">Our parent organization</span>
		</svelte:fragment>
		<ul class="list-disc pl-5 space-y-2 text-sm">
			<li>
				The <a href="https://www.cbai.ai/" class="underline hover:no-underline">Cambridge Boston
				Alignment Initiative</a> is the legal entity that interfaces between MAIA and
				<a href="https://coefficientgiving.org/" class="underline hover:no-underline">Coefficient
				Giving</a> to provide funding.
			</li>
			<li>
				They run technical programs, such as ARENA and MATS variants. MAIA supports them with
				publicizing their events within MIT to relevant students.
			</li>
			<li>
				CBAI supports other AI safety organizations within the Boston area, most notably
				<a href="https://aisst.ai/" class="underline hover:no-underline">AISST</a>, Harvard's AI
				safety group.
			</li>
		</ul>
	</ExpandableCard>
</div>

<h3 class="mt-10 mb-3 text-xl font-heading">What does MAIA do?</h3>
<ul>
	{#each programs as program}
		<li><strong>{program.name}.</strong> {program.text}</li>
	{/each}
</ul>

<style>
	.maia-roles :global(details) {
		margin: 0;
		border: 0;
		background: var(--maia-nav-surface);
	}

	.maia-roles :global(summary) {
		min-height: 48px;
		padding: 12px 16px;
		line-height: 1.5;
	}

	.maia-roles :global(summary:focus-visible) {
		outline: 2px solid var(--maia-accent);
		outline-offset: -2px;
	}

	.maia-roles :global(details > div) {
		padding: 4px 16px 16px 42px;
	}

	.maia-roles :global(details > div > :last-child) {
		margin-bottom: 0;
	}
</style>
