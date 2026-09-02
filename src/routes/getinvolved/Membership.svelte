<script>
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Button from '../../components/Button.svelte';
	import AisfGov from './AISFGov.svelte';
	import Aisfml from './AISFML.svelte';
	import Bootcamps from './Bootcamps.svelte';
	import Workshops from './Workshops.svelte';
	import Calendar from './Calendar.svelte';
	import { CONFIG } from '$lib/config';
</script>

<div>
	<p>
		Membership is for people who want to take a more active role in MAIA. Members use the office,
		join weekly discussions, and help run research, workshops, and events.
	</p>
	<h3 class="mt-8 mb-3 text-xl font-heading">What membership includes</h3>
	<ul class="list-disc pl-6 mt-4 space-y-2">
		<li>
			<strong>Workspace and infrastructure:</strong> 24/7 office access for focused research, with
			compute and research tools
		</li>
		<li>
			<strong>Weekly research discussions:</strong> Meet with other members to engage with current
			AI safety research
		</li>
		<li>
			<strong>Technical development:</strong> Programs such as ARENA, with hired TAs, alongside
			other upskilling opportunities
		</li>
		<li>
			<strong>Conversations with researchers:</strong> Small-group discussions with people working
			in the field. Recent guests include <a
				href="https://www.linkedin.com/in/aryanbhatt17/"
				>Aryan Bhatt</a
			>
			(Redwood Research), <a href="https://www.linkedin.com/in/joshua-clymer/"
				>Josh Clymer</a
			>
			(OpenAI), and <a href="https://intelligence.org/team/nate-soares/">Nate Soares</a> (MIRI)
		</li>
		<li>
			<strong>Community and connections:</strong> Members and alumni have gone on to work at OpenAI,
			Anthropic, <a
				href="https://metr.org/">METR</a
			>, <a href="https://www.redwoodresearch.org/">Redwood Research</a>, the <a
				href="https://ai-futures.org/">AI Futures Project</a
			>, and the <a href="https://www.nist.gov/aisi">Center for AI Standards and Innovation</a>
			(formerly the U.S. AI Safety Institute). Alumni also work in policy, government, and other
			non-technical roles.
		</li>
		<li>
			<strong>Peer group:</strong> Undergraduate and graduate researchers who become collaborators,
			references, and future colleagues
		</li>
	</ul>
	<p class="mt-4">
		Members also help run workshops, discussions, hackathons, and other MAIA programs.
	</p>
	<h3 class="mt-8 mb-3 text-xl font-heading">Who can apply</h3>
	<p class="mt-4">
		While MAIA is an MIT-recognized student group, membership is not restricted to MIT students;
		independent researchers and students from other universities are welcome to apply. Membership is
		for Boston-area applicants, since MAIA cannot thoroughly support distant members.
	</p>
	<p>
		If you're newer to AI safety, we recommend applying for <a
			href="https://aialignment.mit.edu/getinvolved#aisf">AI Safety Fundamentals</a
		>
		first, as AISF alumni typically receive priority in the membership process.
	</p>
	<h3 class="mt-8 mb-3 text-xl font-heading">Applying</h3>
	<p class="mt-4">
		The application itself has technical and non-technical portions and takes about an hour.
		Admissions are rolling, with the board reviewing applications monthly—and if we're slow to
		respond, feel free to email <a href="mailto:maia-exec@mit.edu">maia-exec@mit.edu</a>.
	</p>
	<div class="mt-8 space-y-4">
		<a href={CONFIG.membership.applicationLink}>
			<Button 
				text="Apply for Membership" 
				icon="fa-solid fa-arrow-right"
				type="purple" 
				size="md" 
			/>
		</a>
		<p class="text-sm">
			Questions? Contact us at <a
				href="mailto:maia-exec@mit.edu"
				class="text-maia-800 dark:text-maia-400">maia-exec@mit.edu</a
			>
		</p>
	</div>
	<!-- Note: MIT requires that a certain proportion of our members be students to be recognized as a student group, but this is generally allowed. -->
</div>
