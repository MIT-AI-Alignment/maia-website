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
			<h2 class="pt-12 text-4xl font-heading font-[550]">Join Us</h2>
			<br />
			<p>
				Being a member of the MAIA community has both a number of opportunities and a number of
				responsibilities. As a member, you receive access to our office in CIC @ 245 Main Street,
				Cambridge, MA 02139 as well as compute and research tools, attend our member meetings to discuss research and strategy regarding
				AI Safety, and generally contribute to the community by running or participating in
				workshops, discussions, socials, hackathons, initiatives and more. While we are an MIT-recongnized
				student group, membership is not restricted to MIT students. Independent researchers and
				students from other universities are welcome! If you aren't very familiar with AI safety, we
				recommend applying for AI Safety Fundamentals above. We typically offer participants of this
				program a streamlined application process.
				<!-- Note: MIT requires that a certain proportion of our members be students to be recognized as a student group, but this is generally allowed. -->
			</p>
			<a href="{CONFIG.membership.applicationLink} "
				><h2
					class="mt-8 w-fit text-lg underline bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 rounded-md py-2 px-4"
				>
					<a href={CONFIG.membership.applicationLink} class="underline">Apply for Membership</a>.
				</h2></a
			>
		</div>
		<br />
		<hr />
		<Calendar />
	</div>
	<Footer></Footer>
</main>
