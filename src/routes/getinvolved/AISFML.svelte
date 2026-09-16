<script>
	import { CONFIG } from '$lib/config';
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
		Applications for Fall 2026 AISF are open. <strong>Apply by {CONFIG.aisf_ml.deadline}.</strong>
		The eight-week fellowship begins the week of September 28.
	</p>
	{#if CONFIG.aisf_ml.applicationLink}
		<!-- The whole box is the link. Inline colors beat the global .prose a rule and the
		     app.css override that makes Tailwind border utilities transparent inside <main>. -->
		<a
			href={CONFIG.aisf_ml.applicationLink}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-8 flex items-center gap-5 border p-6 no-underline transition-colors hover:bg-maia-800/5 dark:hover:bg-maia-400/10"
			style="border-color: var(--maia-border); color: var(--maia-ink);"
		>
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center"
				style="background: var(--maia-accent); color: #fff;"
			>
				<i class="fa-solid fa-graduation-cap text-2xl" aria-hidden="true"></i>
			</div>
			<div class="min-w-0 flex-1">
				<p class="m-0 font-heading text-xl" style="color: var(--maia-accent);">Apply to AISF</p>
				<p class="m-0 mt-1 text-sm" style="color: var(--maia-muted);">
					Our introductory reading group about topics in AI safety.{#if CONFIG.aisf_ml.deadline_short}
						Applications close {CONFIG.aisf_ml.deadline_short}.{/if}
				</p>
			</div>
			<i class="fa-solid fa-arrow-right shrink-0 text-xl" style="color: var(--maia-accent);" aria-hidden="true"></i>
		</a>
	{/if}
</section>
