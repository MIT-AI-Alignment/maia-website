<script lang="ts">
	import PageLayout from '../../../components/PageLayout.svelte';
	import SectionContainer from '../../../components/SectionContainer.svelte';
	import BackLink from '../../../components/BackLink.svelte';
</script>

<PageLayout
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

	<SectionContainer title="Overview" icon="fa-solid fa-book-open">
		<p>
			Week 0 is a bit different from the rest of the program: it's self-paced and optional, completed on your own.
			No other weeks will require time outside the 2-hour weekly session. The purpose is to ensure that all
			participants share a basic foundation in key machine learning concepts that we'll build on throughout the
			reading group.
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
	</SectionContainer>

	<SectionContainer title="Main Resource" icon="fa-solid fa-star">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&feature=shared" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Neural Networks Chapters 1-6 (3Blue1Brown, 2017-2024)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<SectionContainer title="Other Recommended Resources" icon="fa-solid fa-bookmark">
		<ul class="list-disc pl-6 space-y-3">
			<li>
				<a href="https://youtu.be/sJzuNAisXHA" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					What is self-supervised learning? (CodeBasics, 2021)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://e2eml.school/transformers.html" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Transformers from scratch (Rohrer, 2021)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://youtu.be/VMj-3S1tku0" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					The spelled-out intro to neural networks and backpropagation: building micrograd (Karpathy, 2022)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@v_maini/supervised-learning-740383a2feab" target="_blank" rel="noopener noreferrer" class="text-maia-800 dark:text-maia-400 font-medium hover:text-maia-700 dark:hover:text-maia-300 transition-colors">
					Machine Learning for Humans, Part 2.1: Supervised Learning (Maini and Sabri, 2017)
					<i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
				</a>
			</li>
		</ul>
	</SectionContainer>

	<div class="mt-12 flex justify-center">
		<BackLink href="/aisf" />
	</div>
</PageLayout>
