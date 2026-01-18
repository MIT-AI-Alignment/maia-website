<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="text-3xl font-heading text-purple-600 dark:text-purple-500">
		Technical Fellowship
	</h3>
	<p class="pt-2">
		The machine learning track of AI Safety Fundamentals is a 7-week introductory reading
		group on technical AI safety. 
	<p class="mt-2">
		Participants meet weekly in small sections facilitated by a TA that is an upperclassman or graduate student 
		with experience in AI safety research. Dinner is provided, and no work is assigned
		outside of weekly meetings. 
	<p class="mt-2">Topics include:
		<ul>
			<li><a href="https://distill.pub/2020/circuits/zoom-in/" class="text-purple-600 dark:text-purple-300">
			Neural network interpretability</a></li>
			<li><a href="https://arxiv.org/abs/2203.02155" class="text-purple-600 dark:text-purple-300">
			Learning from human feedback</a></li>
			<li><a href="https://arxiv.org/abs/2105.14111" class="text-purple-600 dark:text-purple-300">
			Goal misgeneralization in reinforcement learning settings</a></li>
			<li><a href="https://arxiv.org/abs/2306.12001" class="text-purple-600 dark:text-purple-300">
			Potential catastrophic risks from advanced AI systems</a></li>
		</ul>
	<p class="mt-2">
		The program is open to both undergraduate and graduate students. Students with machine
		learning experience are especially encouraged to apply, although <b>no prior experience is required</b>.
	</p>
	
	<p class="mt-2">
	We run AISF every Fall and Spring, with applications opening early into both semesters.
	There are no open applications now, but you can stay up to date via our mailing list.
	</p>

	<!-- UNCOMMENT THIS WHEN AN APPLICATION OPENS -->
	<div class="mt-8">
		<a href={CONFIG.mailingListLink}>
			<Button 
				text="Join our mailing list" 
				icon="fa-solid fa-arrow-right"
				type="purple" 
				size="md" 
			/>
		</a>
	</div>
	

	<!-- <div class="mt-8">
		<a href={CONFIG.aisf_ml.applicationLink}>
			<Button 
				text="Technical AISF {CONFIG.aisf_ml.deadline}" 
				icon="fa-solid fa-arrow-right"
				type="purple" 
				size="md" 
			/>
		</a>
	</div> -->
</section>
