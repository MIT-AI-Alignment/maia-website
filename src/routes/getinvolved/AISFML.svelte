<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<section>
	<h3 class="text-3xl font-heading text-maia-800 dark:text-maia-500">
		Fundamentals Fellowship
	</h3>
	<p class="pt-2">
		The AI Safety Fundamentals Fellowship (AISF) is MAIA's flagship introduction to AI safety and the
		main way people get involved with MIT AI Alignment. It's an 8-week reading group designed to help
		you understand why the field matters and what researchers and policymakers are doing about it.
	</p>
	<p class="pt-2">Over the course of the fellowship, you'll explore:</p>
	<ul class="list-disc pl-6 mt-1 space-y-1">
		<li>The current trajectory of AI development</li>
		<li>Empirical evidence for misalignment</li>
		<li>Threat models for how misalignment could cause harm</li>
		<li>Technical approaches to AI safety</li>
		<li>The AI policy landscape</li>
		<li>Opportunities and careers in AI safety</li>
	</ul>
	<p class="mt-2">
		The fellowship is facilitated by top MAIA members with experience in AI safety research. During the
		fall and spring, sections of about 10 fellows meet weekly in our office with two facilitators, and
		dinner is provided. The summer program runs virtually with one facilitator and around 6 fellows per
		section. No work is assigned outside of weekly meetings, making the fellowship easy to fit alongside
		a full course load.
	</p>
	<p class="mt-2">
		The program is open to anyone, with preference given to MIT undergraduate and graduate students.
		Applicants with machine learning experience are especially encouraged to apply, but no prior
		background is required—just curiosity and a willingness to engage with hard, open questions.
	</p>
	<p class="mt-2">
		Applications for the <strong>Summer AISF</strong> are now live. If you cannot participate in the summer
		cohort, you can fill out the fall interest form to hear when fall applications open.
	</p>
	<div class="mt-8">
		<div class="flex flex-col sm:flex-row gap-3">
			<Button
				text="Apply for Summer AISF"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
				href={CONFIG.aisf_ml.applicationLink}
			/>
			<Button
				text="Fall AISF Interest Form"
				icon="fa-solid fa-arrow-right"
				type="outline"
				size="md"
				href={CONFIG.aisf_ml.fallInterestFormLink}
			/>
		</div>
	</div>
</section>
