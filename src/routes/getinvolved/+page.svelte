<script>
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import AisfGov from './AISFGov.svelte';
	import Aisfml from './AISFML.svelte';
	import Bootcamps from './Bootcamps.svelte';
	import Workshops from './Workshops.svelte';
	import Calendar from './Calendar.svelte';
	import { CONFIG } from '$lib/config';
</script>

<svelte:head>
	<title>MAIA - Get Involved</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) runs programs for people at all skill levels to explore deep learning and AI safety."
	/>
</svelte:head>

<!-- NOTE: There is so much text here, include pictures? -->
<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 text-6xl w-2/3 font-heading font-[550]">Get Involved</h1>
		<br />
		<hr />
		<h2 class="pt-12 text-4xl font-heading font-[550]">AI Safety Fundamentals</h2>
		<p>MAIA runs programs for people at all skill levels to explore deep learning and AI safety.</p>
		{#if CONFIG.aisf_ml.visible}
			<Aisfml />
		{/if}
		{#if CONFIG.aisf_gov.visible}
			<AisfGov />
		{/if}
		<br />
		<hr />
		<Workshops></Workshops>
		<br />
		<hr />
		<Bootcamps></Bootcamps>
		<br />
		<hr />
		<div>
			<h2 class="pt-12 text-4xl font-heading font-[550]">Apply for Membership</h2>
			<br />
			<p>
				Being a member of the MAIA community has both a number of opportunities and a number of
				responsibilities. Membership entails:
			</p>
			<ul class="list-disc pl-6 mt-4 space-y-2">
				<li>24/7 access to our office, where you can co-work on AI safety with MAIA Members.</li>
				<li>Compute and research tools</li>
				<li>Weekly member meetings to read and discuss alignment research</li>
				<li>
					Small group discussions with alignment researchers and professors (recent guests included
					<a href="https://colah.github.io/about.html" class="text-purple-600 dark:text-purple-300">Chris Olah</a>
					from Anthropic and
					<a
						href="https://www.nytimes.com/2024/06/04/technology/openai-culture-whistleblowers.html"
						class="text-purple-600 dark:text-purple-300">Daniel Kokotajlo</a
					> from OpenAI)
				</li>
				<li>
					Connections with and potential opportunities to collaborate with top alignment
					organizations like <a href="https://www.redwoodresearch.org/" class="text-purple-600 dark:text-purple-300"
						>Redwood Research</a
					>, <a href="https://www.nist.gov/aisi" class="text-purple-600 dark:text-purple-300">The U.S. AI Safety Institute</a>,
					and <a href="https://metr.org/" class="text-purple-600 dark:text-purple-300">METR</a>
				</li>
				<li>
					Opportunities to participate in AI safety community workshops and connect with leaders in
					policy, academia, and technical research. (Ex: Professors <a
						href="https://sites.google.com/view/htanaka/home"
						class="text-purple-600 dark:text-purple-300">Hidenori Tanaka</a
					>
					and <a href="http://davidbau.com/" class="text-purple-600 dark:text-purple-300">David Bau</a>)
				</li>
				<li>
					Participating in a community of talented undergraduate and graduate students interested in
					reducing risks from advanced AI (Social events and talks, but also fantastic spontaneous
					discussions.)
				</li>
			</ul>
			<p class="mt-4">
				Members generally contribute to the community by running or participating in workshops,
				discussions, socials, hackathons, initiatives and more. While we are an MIT-recognized
				student group, membership is not restricted to MIT students. Independent researchers and
				students from other universities are welcome!
			</p>
			<p class="mt-4">
				If you aren't very familiar with AI safety, we recommend applying for AI Safety Fundamentals
				above. We typically offer participants of this program a streamlined application process.
			</p>
			<p class="mt-4">
				The application has both technical and non-technical portions and typically takes around an
				hour to complete. Membership admission is rolling, but the board typically meets at the
				start and the end of the semester to parse through applicatiot
				ns, so if we are slow to
				respond, don't hesitate to email us at <a
				href="mailto:maia-exec@mit.edu"
				class="text-purple-600 dark:text-purple-300">maia-exec@mit.edu</a
			>.
			</p>
			<div class="mt-8 space-y-4">
				<a
					href={CONFIG.membership.applicationLink}
					class="block w-fit text-lg underline bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 rounded-md py-2 px-4"
				>
					Apply for Membership
				</a>
				<p class="text-sm">
					Questions? Contact us at <a
						href="mailto:maia-exec@mit.edu"
						class="text-purple-600 dark:text-purple-300">maia-exec@mit.edu</a
					>
				</p>
			</div>
			<!-- Note: MIT requires that a certain proportion of our members be students to be recognized as a student group, but this is generally allowed. -->
		</div>
		<br />
		<hr />
		<Calendar />
	</div>
	<Footer></Footer>
</main>
