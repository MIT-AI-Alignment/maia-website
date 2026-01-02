<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<!-- Deprecated: Original AISF Governance track content (commented out due to redirect)
<section>
	<h3 class="pt-8 text-3xl font-heading text-purple-600 dark:text-purple-500">Policy track</h3>
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
			type="purple" 
			size="md" 
			href={CONFIG.aisf_gov.applicationLink}
		/>
	</div>
</section>
-->

<section>
	<h3 class="text-3xl font-heading text-fuchsia-600 dark:text-fuchsia-500">Policy Fellowship</h3>

	<p class="mt-2">
		Every semester our sister organization at Harvard, <a href="https://aisst.ai/">AISST</a>, runs an 8-week introductory reading group on the foundational policy and
		governance issues posed by advanced AI systems. The fellowship meets weekly in small groups,
		with dinner provided, and no additional work required beyond meetings.
	</p>
	<p class="mt-2">Questions discussed include:</p>
	<ul class="list-disc pl-6 mt-2 space-y-1">
		<li>How much progress in AI should we expect over the next few years?</li>
		<li>What are the risks associated with the misuse and misalignment of advanced AI systems?</li>
		<li>How can regulators audit frontier AI systems for potentially dangerous capabilities?</li>
		<li>
			How could novel hardware mechanisms prevent malicious or irresponsible actors from creating
			powerful AI models?
		</li>
	</ul>
	<div class="mt-8">
		<a href="https://aisst.ai/policy-fellowship">
			<Button
				text="Apply for the AISST Policy Fellowship"
				icon="fa-solid fa-arrow-right"
				type="fuchsia"
				size="md"
			/>
		</a>
	</div>
</section>
