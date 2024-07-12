<script>
	import Footer from "../components/footer.svelte";
import Navbar from "../components/navbar.svelte";
</script>


<svelte:head>
    <title>MAIA - Get Involved</title> 
    <meta name="description" content="MIT AI Alignment (MAIA) runs programs for people at all skill levels to explore deep learning and AI safety.">
</svelte:head>

<main class="min-h-screen bg-maia_white dark:bg-maia_black dark:text-maia_white">
    <Navbar />
    <div class="px-8 md:px-24">
        <!-- <h1 class="pt-48 text-6xl w-2/3 font-heading font-[550]">Get Involved</h1> -->
        <p class="pt-36">MAIA runs programs for people at all skill levels to explore deep learning and AI safety.</p>
        <h2 class="pt-8 text-4xl font-heading font-[550]">AI Safety Fundamentals</h2>
        <p class="pt-4">Learn the basics of AI safety and how to prevent harm from AI systems. MAIA offers two intro tracks, focusing on technical and policy respectively. We recommend applying to the program you are most interested in. You can participate in both tracks simultaneously.</p>
        <h3 class="pt-8 text-3xl font-heading text-purple-600 dark:text-purple-500">Machine Learning track</h3>
        <p class="pt-2">
            The machine learning track of AI Safety Fundamentals is a seven-week research-oriented reading group on <b>technical AI safety</b>. 
            Topics covered include <a href="https://distill.pub/2020/circuits/zoom-in/" class="underline">neural network interpretability</a>, <a href="https://arxiv.org/abs/2203.02155" class="underline">learning from human feedback</a>,<a href="https://arxiv.org/abs/2105.14111" class="underline">goal misgeneralization in reinforcement learning settings</a>, and <a href="https://arxiv.org/abs/2306.12001" class="underline">potential catastrophic risks from advanced AI systems</a>. 
            The program is open to both undergraduate and graduate students. Students with machine learning experience are especially encouraged to apply, although <b>no prior experience is required</b>.            </p>
            <p class="mt-2">
            Participants meet weekly in small sections facilitated by a TA that is a graduate student or an upperclassman with experience in AI safety research. Dinner is provided, and no work is assigned outside of weekly meetings. Our curriculum is based on <a href="https://course.aisafetyfundamentals.com/alignment" class="underline">a course developed by OpenAI researcher Richard Ngo</a>.
            </p>
            <p class="font-heading underline text-lg mt-4 bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 rounded-md p-2 w-fit">
            Apply here by Wednesday, February 14th, 11:59pm EST.
        </p>
        <h3 class="pt-8 text-3xl font-heading text-fuchsia-600 dark:text-fuchsia-500">Policy track</h3>
        <p class="pt-2">
            The policy track of AI Safety Fundamentals is a seven-week reading group on the foundational <b>governance and policy challenges</b> posed by advanced AI systems. Topics discussed include <a href="https://arxiv.org/abs/2303.11341" class="underline">the proliferation of dangerous AI models</a>, <a class="underline" href="https://arxiv.org/abs/2309.11690">AI-induced explosive economic growth</a>, and <a  class="underline" href="https://epochai.org/blog/compute-trends">methods for predicting when transformative AI will be developed</a>.
            <p class="mt-2">Participants meet weekly in small sections facilitated by a TA that is a graduate student or an upperclassman with relevant experience. Dinner is provided, and no work is assigned outside of weekly meetings. Our curriculum is based on <a href="https://course.aisafetyfundamentals.com/governance" class="underline">a course developed by experts on AI policy.</a></p>
            <p class="font-heading underline text-lg mt-4 bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-700 dark:text-fuchsia-200 rounded-md p-2 w-fit">
            Apply here by Wednesday, February 14th, 11:59pm EST.
        </p>
        <h2 class="pt-12 text-4xl font-heading font-[550]">Workshops</h2>
        <h3 class="pt-4">Every semester, MAIA and the AI Student Safety Team at Harvard (<a href="http://haist.ai">AISST</a>) collaborate to run weekend workshops on AI safety. We gather students, professors, and professionals working on AI safety to discuss and collaborate on the cutting edge of AI safety research and policy. </h3>
        <p class="mt-2 italic mb-8">More information about the Fall 2024 workshops will be released soon.</p>
        <h2 class="pt-4 text-4xl font-heading font-[550]">Bootcamps</h2>
        <p class="mt-4">MAIA, in partnership with the Cambridge Boston Alignment Initiative (<a href="https://www.cbai.ai/">CBAI</a>), hosts <a href="https://www.cbai.ai/ml-bootcamp">ML Bootcamps</a> outside of semester time, aimed at quickly getting students up to speed in deep learning and developing skills useful for conducting AI safety research in the real world. </p>
        <p class="mt-2 mb-2">The bootcamps are in-person, with teaching assistants experienced with ML and AI safety research. We follow the highly-rated MLAB (Machine Learning for Alignment) curriculum designed by Redwood Research, which provides a <b>thorough, hands-on introduction to state-of-the-art ML techniques</b> (e.g. transformers, deep RL, mechanistic interpretability) and is meant to get you to the level of replicating ML papers in PyTorch. The program’s only prerequisites are comfort with Python and introductory linear algebra.</p>
        <p class="mt-2 mb-8">We may run a bootcamp in January 2025, please <a href="https://airtable.com/appSYKtT2eNbw95Oh/shrWlIgjzwRTDgLEv" class="text-purple-500 underline">express interest here</a>.</p>
    </div>
    <Footer></Footer>
</main>