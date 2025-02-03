<script>
	import Footer from './components/footer.svelte';
	import Navbar from './components/navbar.svelte';
	import Orgs from './components/orgs.svelte';
	import Papers from './components/papers.svelte';
</script>

<svelte:head>
	<title>MIT AI Alignment</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	/>
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-white">
	<Navbar />
	<div class="px-8 md:px-24">
		<h1 class="pt-48 md:pt-48 text-4xl md:text-6xl md:w-2/3 font-heading font-[550]">
			We're a group of MIT students conducting research to <span
				class="text-purple-600 dark:text-purple-500">reduce risk from advanced AI</span
			>.
		</h1>
		<h2 class="pt-16 text-lg md:w-2/3">
			We think that reducing risks from advanced artificial intelligence may be one of the most
			important problems of our time. We also think it’s a highly interesting and exciting problem,
			with open opportunities for many more researchers to make progress on it.<br /><br />
			MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks
			from advanced AI. <br /><br />We also run a semester-long introductory reading group on AI
			safety, including both a technical machine learning track and a policy track.
		</h2>

		<a href="https://airtable.com/appci3nEZe4nlb8oX/shrSLlrgeIFubZnGd"
			><h2
				class="mt-8 w-fit text-lg underline bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 rounded-md py-2 px-4"
			>
				Apply to our technical AI safety program &rarr;
			</h2></a
		>
		<a href="https://haist.ai/policy-fellowship"
			><h2
				class="w-fit mt-4 text-lg underline bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-700 dark:text-fuchsia-200 rounded-md py-2 px-4"
			>
				Apply to our policy AI safety program &rarr;
			</h2></a
		>

		<h2 class="pt-20 pb-8 text-3xl w-2/3 font-heading font-bold">Selected Research</h2>
		<Papers />

		<h2 class="pt-12 text-3xl w-2/3 font-heading font-bold">Organizations we work with</h2>
		<Orgs />
		<p class="pt-12 pb-12">
			This is a list of some of the organizations our members have worked with. Not all
			organisations listed endorse or are affiliated with MAIA.
		</p>
	</div>
	<Footer></Footer>
</main>
