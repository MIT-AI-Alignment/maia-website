<script>
	import Membership from './Membership.svelte';

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
		<Membership></Membership>
		<br />
		<hr />
		<Calendar />
	</div>
	<Footer></Footer>
</main>
