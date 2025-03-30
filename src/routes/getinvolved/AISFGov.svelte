<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="pt-8 text-3xl font-heading text-fuchsia-600 dark:text-fuchsia-500">Policy track</h3>
	<p class="pt-2">
		The policy track of AI Safety Fundamentals is a seven-week reading group on the foundational
		<b>governance and policy challenges</b> posed by advanced AI systems. Topics discussed include
		<a href="https://arxiv.org/abs/2303.11341" class="underline">
			the proliferation of dangerous AI models</a
		>,
		<a href="https://arxiv.org/abs/2309.11690" class="underline">
			AI-induced explosive economic growth</a
		>, and
		<a href="https://epochai.org/blog/compute-trends" class="underline">
			methods for predicting when transformative AI will be developed</a
		>.
	</p>
	<p class="mt-2">
		Participants meet weekly in small sections facilitated by a TA that is a graduate student or an
		upperclassman with relevant experience. Dinner is provided, and no work is assigned outside of
		weekly meetings. Our curriculum is based on
		<a href="https://course.aisafetyfundamentals.com/governance" class="underline">
			a course developed by experts on AI policy</a
		>.
	</p>
	<div class="mt-8">
		<Button
			text="Apply for AISF Policy Track here by {CONFIG.aisf_gov.deadline}"
			icon="fa-solid fa-arrow-right"
			type="fuchsia"
			size="md"
			href={CONFIG.aisf_gov.applicationLink}
		/>
	</div>
</section>
