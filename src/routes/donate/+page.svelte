<script>
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';
</script>

<PageLayout
	title="Donate"
	description="MIT AI Alignment (MAIA) donation page."
	heroIcon="fa-solid fa-hand-holding-heart"
	heroTitle="Support Our Work"
	centerTitle={true}
>
	<SectionContainer title="Donation Options" icon="fa-solid fa-donate">
		<div class="prose dark:prose-invert max-w-none">
			<p>
				Please consider donating via every.org if you would like to support our work. Donations can
				be marked for MAIA or for the Cambridge Boston Alignment Initiative (CBAI), which supports
				both the student groups <a href="https://haist.ai">AISST at Harvard</a> and MAIA at MIT.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 mt-8">
				<a href="https://www.every.org/cbai?utm_campaign=donate-link#/donate">
					<Button text="Donate to CBAI" icon="fa-solid fa-heart" type="fuchsia" />
				</a>
			</div>
		</div>
	</SectionContainer>
</PageLayout>
