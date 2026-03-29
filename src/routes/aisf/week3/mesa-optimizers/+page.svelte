<script lang="ts">
	import PageLayout from '../../../../components/PageLayout.svelte';
	import SectionContainer from '../../../../components/SectionContainer.svelte';
	import BackLink from '../../../../components/BackLink.svelte';
	import Button from '../../../../components/Button.svelte';
</script>

<PageLayout
	title="Mesa-Optimizers and Inner Alignment"
	description="The OTHER AI Alignment Problem: Mesa-Optimizers and Inner Alignment — Robert Miles (2021)"
	heroIcon="fa-solid fa-video"
	heroTitle="The OTHER AI Alignment Problem"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-4 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Mesa-Optimizers and Inner Alignment (Robert Miles, 2021)
		</p>
	</svelte:fragment>

	<SectionContainer title="Video" icon="fa-solid fa-play-circle">
		<div class="not-prose flex justify-center">
			<div class="w-full max-w-3xl">
				<div class="relative w-full" style="padding-bottom: 56.25%;">
					<iframe
						src="https://www.youtube.com/embed/bJLcIBixGj8"
						title="The OTHER AI Alignment Problem: Mesa-Optimizers and Inner Alignment"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
					></iframe>
				</div>
			</div>
		</div>
	</SectionContainer>

	<div class="mt-12 not-prose flex items-center justify-between">
		<BackLink href="/aisf/week3" />
		<Button
			text="Next: Alignment Faking"
			icon="fa-solid fa-arrow-right"
			type="fuchsia"
			size="md"
			href="/aisf/week3/alignment-faking"
		/>
	</div>
</PageLayout>
