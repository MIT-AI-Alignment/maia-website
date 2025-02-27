<script>
	import PageLayout from '../components/PageLayout.svelte';
	import SectionContainer from '../components/SectionContainer.svelte';
	import Button from '../components/Button.svelte';
	import Orgs from './components/orgs.svelte';
	import Papers from './components/papers.svelte';
	import { CONFIG } from '$lib/config';
</script>

<PageLayout
	title="MIT AI Alignment"
	description="MIT AI Alignment (MAIA) is a group of MIT students conducting research to reduce risk from advanced AI."
	heroTitle="We're a group of MIT students conducting research to <span class='text-purple-600 dark:text-purple-500'>reduce risk from advanced AI</span>."
>
	<svelte:fragment slot="hero-content">
		<div class="prose dark:prose-invert max-w-none">
			<p class="text-lg md:w-2/3">
				We think that reducing risks from advanced artificial intelligence may be one of the most
				important problems of our time. We also think it's a highly interesting and exciting problem,
				with open opportunities for many more researchers to make progress on it.
			</p>
			<p class="text-lg md:w-2/3">
				MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks
				from advanced AI.
			</p>
			<p class="text-lg md:w-2/3">
				We also run a semester-long introductory reading group on AI
				safety, including both a technical machine learning track and a policy track.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 mt-8">
				{#if CONFIG.aisf_ml.visible}
					<a href="https://airtable.com/appci3nEZe4nlb8oX/shrSLlrgeIFubZnGd">
						<Button 
							text="Apply to our technical AI safety program" 
							icon="fa-solid fa-arrow-right" 
							type="purple"
						/>
					</a>
				{/if}
				{#if CONFIG.aisf_gov.visible}
					<a href="https://haist.ai/policy-fellowship">
						<Button 
							text="Apply to our policy AI safety program" 
							icon="fa-solid fa-arrow-right" 
							type="fuchsia"
						/>
					</a>
				{/if}
			</div>
		</div>
	</svelte:fragment>
	
	<SectionContainer
		title="Selected Research"
		icon="fa-solid fa-book-open"
	>
		<Papers />
	</SectionContainer>
	
	<SectionContainer
		title="Organizations we work with"
		icon="fa-solid fa-building"
	>
		<Orgs />
		<p class="mt-6">
			This is a list of some of the organizations our members have worked with. Not all
			organisations listed endorse or are affiliated with MAIA.
		</p>
	</SectionContainer>
</PageLayout>
