<script>
	import Footer from "../components/footer.svelte";
import Navbar from "../components/navbar.svelte";
</script>



<main class="bg-maia_white">
    <Navbar />
    <div class="px-24 pt-36">
        <p class="mb-14">Please consider donating via every.org if you would like to support our work. Donations can be marked for MAIA or for the Cambridge Boston Alignment Initiative (CBAI), which supports both the student groups <a class="underline" href="https://haist.ai">AISST at Harvard</a> and MAIA at MIT.</p>
        <a href="https://www.every.org/maia?utm_campaign=donate-link#/donate" class="mt-8 text-purple-500 underline bg-purple-100 p-4 rounded-lg mr-8">Donate to MAIA</a>
        <a href="https://www.every.org/cbai?utm_campaign=donate-link#/donate" class="mt-8 text-fuchsia-500 underline bg-fuchsia-100 p-4 rounded-lg">Donate to CBAI</a>
        <div class="h-[70vh]"></div>
    </div>
    <Footer></Footer>
</main>