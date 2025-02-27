<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="pt-8 text-3xl font-heading text-purple-600 dark:text-purple-500">
		Machine Learning track
	</h3>
	<p class="pt-2">
		The machine learning track of AI Safety Fundamentals is a seven-week research-oriented reading
		group on <b>technical AI safety</b>. Topics covered include
		<a
			href="https://distill.pub/2020/circuits/zoom-in/"
			class="text-purple-600 dark:text-purple-300"
		>
			neural network interpretability</a
		>,
		<a href="https://arxiv.org/abs/2203.02155" class="text-purple-600 dark:text-purple-300">
			learning from human feedback</a
		>,
		<a href="https://arxiv.org/abs/2105.14111" class="text-purple-600 dark:text-purple-300">
			goal misgeneralization in reinforcement learning settings</a
		>, and
		<a href="https://arxiv.org/abs/2306.12001" class="text-purple-600 dark:text-purple-300">
			potential catastrophic risks from advanced AI systems</a
		>. The program is open to both undergraduate and graduate students. Students with machine
		learning experience are especially encouraged to apply, although
		<b>no prior experience is required</b>.
	</p>
	<p class="mt-2">
		Participants meet weekly in small sections facilitated by a TA that is a graduate student or an
		upperclassman with experience in AI safety research. Dinner is provided, and no work is assigned
		outside of weekly meetings. Our curriculum is based on
		<a
			href="https://course.aisafetyfundamentals.com/alignment"
			class="text-purple-600 dark:text-purple-300"
		>
			a course developed by OpenAI researcher Richard Ngo</a
		>.
	</p>
	<div class="mt-8">
		<a href={CONFIG.aisf_ml.applicationLink}>
			<Button 
				text="Apply for AISF ML Track here by {CONFIG.aisf_ml.deadline}" 
				icon="fa-solid fa-arrow-right"
				type="purple" 
				size="md" 
			/>
		</a>
	</div>
</section>
