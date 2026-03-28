<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="text-3xl font-heading text-maia-800 dark:text-maia-500">
		Technical Fellowship
	</h3>
	<p class="pt-2">
		This 8-week introductory reading group is MAIA's main entry point into AI Safety and is meant to give you a 
		sense of why AI Safety is important and what people are doing about it.
	</p>
	<p class="pt-2">
		At a high level, the fellowship covers the current trajectory of AI → evidence for misalignment → 
		possible misalignment threat models → technical safety approaches → AI policy landscape → careers in AI Safety & what to do next.
	</p>
	<p class="mt-2">
		Participants meet weekly in small sections facilitated by a pair of TAs that are upperclassmen or graduate
		student with experience in AI safety research. Dinner is provided, and no work is assigned outside
		of weekly meetings.
	</p>
	<p class="mt-2">Topics include:</p>
	<ul class="list-disc pl-6 mt-2 space-y-1">
		<li>
			<a href="https://distill.pub/2020/circuits/zoom-in/" class="text-maia-800 dark:text-maia-400">
				Neural network interpretability
			</a>
		</li>
		<li>
			<a href="https://arxiv.org/abs/2203.02155" class="text-maia-800 dark:text-maia-400">
				Learning from human feedback
			</a>
		</li>
		<li>
			<a href="https://arxiv.org/abs/2105.14111" class="text-maia-800 dark:text-maia-400">
				Goal misgeneralization in reinforcement learning settings
			</a>
		</li>
		<li>
			<a href="https://arxiv.org/abs/2306.12001" class="text-maia-800 dark:text-maia-400">
				Potential catastrophic risks from advanced AI systems
			</a>
		</li>
	</ul>
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
