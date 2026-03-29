<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="text-3xl font-heading text-maia-800 dark:text-maia-500">
		Fundamentals Fellowship
	</h3>
	<p class="pt-2">
		This 8-week introductory reading group is MAIA's main entry point into AI Safety and is meant to give you a 
		sense of why AI Safety is important and what people are doing about it.
	</p>
	<p class="pt-2">At a high level, the fellowship covers:</p>
	<ul class="list-disc pl-6 mt-1 space-y-1">
		<li>The current trajectory of AI</li>
		<li>Evidence for misalignment</li>
		<li>Possible misalignment threat models</li>
		<li>Technical safety approaches</li>
		<li>AI policy landscape</li>
		<li>Opportunities and careers in AI Safety </li>
	</ul>
	<p class="mt-2">
		Participants meet weekly in small sections facilitated by a pair of TAs that are upperclassmen or graduate
		student with experience in AI safety research. Dinner is provided, and no work is assigned outside
		of weekly meetings.
	</p>
	<p class="mt-2">
		The program is open to both undergraduate and graduate students. Students with machine learning
		experience are especially encouraged to apply, although <b>no prior experience is required</b>.
	</p>
	<p class="mt-2">
		We are planning cohorts for this summer and for fall. If you would like updates and a link to apply
		when it opens, submit the interest form below.
	</p>
	<div class="mt-8">
		<Button
			text="Interest Form (Summer & Fall)"
			icon="fa-solid fa-arrow-right"
			type="fuchsia"
			size="md"
			href={CONFIG.aisf_ml.applicationLink}
		/>
	</div>
</section>
