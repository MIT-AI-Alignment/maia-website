<script>
	import Footer from "./components/footer.svelte";
import Navbar from "./components/navbar.svelte";
	import Orgs from "./components/orgs.svelte";
    import Papers from "./components/papers.svelte";
</script>



<main class="min-h-screen bg-maia_white">
    <Navbar />
    <div class="px-24">
        <h1 class="pt-48 text-6xl w-2/3 font-heading font-[550]">We're a group of MIT students conducting research to <span class="text-purple-600">reduce risk from advanced AI</span>.</h1>
        <h2 class="pt-16 text-lg w-2/3">We think that reducing risks from advanced artificial intelligence may be one of the most important problems of our time. We also think it’s a highly interesting and exciting problem, with open opportunities for many more researchers to make progress on it.<br/><br/>
        MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks from advanced AI. <br/><br/>We also run a semester-long introductory reading group on AI safety, including both a technical machine learning track and a policy track.</h2>

        <a href="https://www.mitalignment.org/aisf-ml"><h2 class="mt-8 w-fit text-lg underline bg-purple-100 text-purple-600 rounded-md p-2">Apply to our technical AI safety program &rarr;</h2></a>
        <a href="https://www.mitalignment.org/aisf-policy"><h2 class="w-fit mt-4 text-lg underline bg-fuchsia-100 text-fuchsia-600 rounded-md p-2">Apply to our policy AI safety program &rarr;</h2></a>

        <h2 class="pt-20 pb-8 text-3xl w-2/3 font-heading font-bold">Selected Research</h2>
        <Papers />

        <h2 class="pt-12 text-3xl w-2/3 font-heading font-bold">Organizations we work with</h2>
        <Orgs />
        <p class="pt-12 pb-12">This is a list of some of the organizations our members have worked with. Not all organisations listed endorse or are affiliated with MAIA.</p>
    </div>
    <Footer></Footer>
</main>