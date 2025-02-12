<script>
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import Papers from '../components/papers.svelte';
	import UpdateNotification from '../components/UpdateNotification.svelte';
</script>

<svelte:head>
	<title>MAIA - Initiatives</title>
	<meta name="description" content="MIT AI Alignment (MAIA) initiatives page." />
</svelte:head>

<main class="bg-maia_white dark:bg-maia_black dark:text-white">
	<Navbar />

	<div class="px-8 md:px-24 pt-48" id="research">
		<h2 class="pt-12 text-4xl font-heading font-[550]">Research by MAIA Members</h2>
		<br />
		<Papers />
	</div>

	<div class="px-8 md:px-12 pt-12" id="current">
		<h2 class="pt-12 text-4xl font-heading font-[550]">Current Projects</h2>
		<UpdateNotification message="🌹 To be updated Spring 2025! 🌹" />
	</div>

	<Footer></Footer>
</main>
