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
		MAIA membership is structured to move you toward a full-time role in AI safety. Members get
		the resources, research experience, and professional connections needed to be competitive for
		positions at leading AI safety organizations. Specifically, membership includes:
	</p>
	<ul class="list-disc pl-6 mt-4 space-y-2">
		<li>
			<strong>Workspace and infrastructure:</strong> 24/7 office access for focused research, plus
			compute and research tools
		</li>
		<li>
			<strong>Technical development:</strong> Weekly meetings to engage with current AI safety
			research alongside other members working toward the same goal
		</li>
		<li>
			<strong>Upskilling programs:</strong> Structured technical programs like ARENA with hired
			TAs, plus additional upskilling programs in development to help members build the skills
			needed for safety research roles
		</li>
		<li>
			<strong>Direct access to researchers:</strong> Small-group discussions with safety
			researchers shaping the field. Recent guests include <a
				href="https://www.linkedin.com/in/aryanbhatt17/"
				>Aryan Bhatt</a
			>
			(Redwood Research), <a href="https://www.linkedin.com/in/joshua-clymer/"
				>Josh Clymer</a
			>
			(OpenAI), and <a href="https://intelligence.org/team/nate-soares/">Nate Soares</a> (MIRI)
		</li>
		<li>
			<strong>Pathways to top organizations:</strong> We have connections across nearly every major
			AI safety organization, and our members have gone on to work at OpenAI, Anthropic, <a
				href="https://metr.org/">METR</a
			>, <a href="https://www.redwoodresearch.org/">Redwood Research</a>, the <a
				href="https://ai-futures.org/">AI Futures Project</a
			>, and the <a href="https://www.nist.gov/aisi">Center for AI Standards and Innovation</a>
			(formerly the U.S. AI Safety Institute). While many members pursue technical research, alumni
			have also moved into policy, government, and other non-technical roles shaping the trajectory
			of AI.
		</li>
		<li>
			<strong>A serious peer group:</strong> Undergraduate and graduate researchers oriented around
			the same career trajectory, who become collaborators, references, and future colleagues
		</li>
	</ul>
	<p class="mt-4">
		Beyond participating, many of our top members are also organizers who help run these
		programs—leading workshops, discussions, hackathons, and the initiatives that bring the next
		cohort into AI safety work.
	</p>
	<p class="mt-4">
		While MAIA is an MIT-recognized student group, membership is not restricted to MIT students;
		independent researchers and students from other universities are welcome to apply. If you're
		newer to AI safety, we recommend applying for <a
			href="https://aialignment.mit.edu/getinvolved#aisf">AI Safety Fundamentals</a
		>
		first, as AISF alumni typically receive priority in the membership process.
	</p>
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
