<script>
	import Footer from "../components/footer.svelte";
import Navbar from "../components/navbar.svelte";
</script>

<svelte:head>
    <title>MAIA - Donate</title> 
    <meta name="description" content="MIT AI Alignment (MAIA) donation page.">
</svelte:head>

<main class="bg-maia_white dark:bg-maia_black dark:text-white">
    <Navbar />
    <div class="px-8 md:px-24 pt-36">
        <p class="mb-14">Please consider donating via every.org if you would like to support our work. Donations can be marked for MAIA or for the Cambridge Boston Alignment Initiative (CBAI), which supports both the student groups <a class="underline" href="https://haist.ai">AISST at Harvard</a> and MAIA at MIT.</p>
        <a href="https://www.every.org/maia?utm_campaign=donate-link#/donate" class="mt-8 text-purple-500 dark:text-purple-200 underline bg-purple-100 dark:bg-purple-700 p-4 rounded-lg mr-8">Donate to MAIA</a>
        <a href="https://www.every.org/cbai?utm_campaign=donate-link#/donate" class="mt-8 text-fuchsia-500 dark:text-fuchsia-200 underline bg-fuchsia-100 dark:bg-fuchsia-700 p-4 rounded-lg">Donate to CBAI</a>
        <div class="h-[70vh]"></div>
    </div>
    <Footer></Footer>
</main>