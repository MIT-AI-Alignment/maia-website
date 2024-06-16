<script>
	import Footer from "../components/footer.svelte";
import Navbar from "../components/navbar.svelte";
	import Advisors from "./advisors.svelte";
	import Execs from "./execs.svelte";
</script>



<main class="min-h-screen bg-maia_white">
    <Navbar />
    <div class="px-24">
        <!-- <h1 class="pt-48 text-6xl w-2/3 font-heading font-[550]">About</h1>
        <p class="pt-8">MAIA is led and organized by MIT students.</p> -->
        <h2 class="pt-36 text-2xl font-heading font-[550]">Executive Board</h2>
        <Execs></Execs>
        <h2 class="pt-4 text-2xl font-heading font-[550]">Advisors</h2>
        <Advisors></Advisors>
    </div>
    <Footer></Footer>
</main>