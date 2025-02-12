<script>
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Advisors from './advisors.svelte';
	import Execs from './execs.svelte';
</script>

<svelte:head>
	<title>MAIA - About</title>
	<meta
		name="description"
		content="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	/>
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-white">
	<Navbar />
	<!-- Meet the Team -->
	<div class="px-8 md:px-24 min-h-[90vh]">
		<h1 class="pt-48 text-4xl w-2/3 font-heading font-[550]">Meet the Team</h1>
		<h2 class="pt-12 text-2xl font-heading font-[550]">Executive Board</h2>
		<Execs></Execs>
		<h2 class="pt-4 text-2xl font-heading font-[550]">Advisors</h2>
		<Advisors></Advisors>
		<p>
			<i>Last Updated: 2025-02-03</i>
		</p>
		<p><i>Positions are subject to change as the spring semester progresses.</i></p>
	</div>
	<!-- Mission Should the AISST Mission be copied? https://haist.ai/mission -->
	<!-- <div class="px-8 md:px-24 min-h-[90vh]">
		<h1 class="pt-48 text-6xl w-2/3 font-heading font-[550]">Mission</h1>
		<h2 class="pt-48 text-2xl font-heading font-[550]">Executive Board</h2>
		<Execs></Execs>
		<h2 class="pt-4 text-2xl font-heading font-[550]">Advisors</h2>
		<Advisors></Advisors>
		<p>
			<i>Last Updated: 2025-02-03</i>
		</p>
		<p><i>Positions are subject to change as the spring semester progresses.</i></p>
	</div> -->
	<!--  -->
	<!-- Add initiatives? -->
	<Footer></Footer>
</main>
