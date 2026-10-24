<script lang="ts">
 import AdditionalReadings from '../../../components/AdditionalReadings.svelte';
 import additionalReadings from '$lib/fall2026AdditionalReadings.json';
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
</script>

<PageLayout
	allowStickyContent={true}
	title="AISF Week 0"
	description="MAIA AISF Week 0: Introduction to Machine Learning — self-paced ML fundamentals."
	heroIcon="fa-solid fa-brain"
	heroTitle="Week 0: ML Fundamentals"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Introduction to Machine Learning
		</p>
	</svelte:fragment>

	<div class="week-layout">
	<aside aria-label="Week 0 readings"><nav><a href="#week-overview">Overview</a><a href="#main-resource">Main resource</a><a href="#additional-readings">Additional readings</a></nav></aside>
	<div>
	<div id="week-overview"></div>
	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			Week 0 is a bit different from the rest of the program: it's self-paced and optional, completed on your own.
			No other weeks will require time outside the 2-hour weekly session or standard assigned readings for the
			1-hour sessions. The purpose is to ensure that all participants share a basic foundation in key machine
			learning concepts that we'll build on throughout the reading group.
		</p>
		<p>
			Most participants will be able to skip this week. Since the program has no formal prerequisites, we're
			providing resources so we don't need to spend later sessions covering ML fundamentals. The goal of the
			reading group is conceptual understanding rather than hands-on expertise, but some technical context can be
			helpful for developing that understanding.
		</p>

		<h3 class="text-xl font-heading font-[550] mt-6 mb-3">Learning Objectives</h3>
		<p>By the end of Week 0, you should be able to:</p>
		<ul class="list-disc pl-6 mt-2 space-y-1">
			<li>Explain, at a high level, how neural networks are trained</li>
			<li>Describe the basic architecture of a transformer</li>
		</ul>

		<p class="mt-6">
			If you're already comfortable with these topics, feel free to skip all resources below. If you're rusty or
			new to them, start with the main resource. A solid understanding of the 3Blue1Brown playlist is fully
			sufficient to meet the learning objectives; the additional resources are optional for anyone who wants
			deeper coverage.
		</p>
	</SectionContainer>

	<div id="main-resource"></div>
	<SectionContainer title="Main Resource" icon="fa-solid fa-star">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&feature=shared" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Neural Networks Chapters 1-6 (3Blue1Brown, 2017-2024)
				</a>
				<span class="text-maia-950/60 dark:text-maia-300"> (~2 hours)</span>
				<ul class="list-disc pl-6 mt-2">
					<li>Feel free to skip videos of topics you are already familiar with</li>
				</ul>
			</li>
		</ul>
	</SectionContainer>

	<AdditionalReadings readings={additionalReadings['0']} />

	</div>
	</div>
	<div class="mt-12 flex justify-center">
		<BackLink href=".." />
	</div>
</PageLayout>

<style>
 .week-layout { display:grid; grid-template-columns:235px minmax(0,1fr); gap:3rem; }
 aside { position:sticky; top:calc(var(--header-height, 6rem) + 1rem); align-self:start; }
 nav { display:grid; gap:.25rem; }
 nav a { padding:.6rem .75rem; border-left:1px solid var(--maia-border); font-size:.85rem; color:var(--maia-ink); }
 #week-overview, #main-resource { scroll-margin-top:calc(var(--header-height, 6rem) + 1rem); }
 @media(max-width:760px) { .week-layout { display:block; } aside { position:static; margin-bottom:2rem; } nav { display:flex; overflow:auto; } nav a { flex-shrink:0; } }
</style>
