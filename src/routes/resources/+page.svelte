<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
</script>

<PageLayout
	title="Resources"
	description="MAIA learning resources and programs."
	heroIcon="fas fa-book"
	heroTitle="Resources"
	centerTitle={true}
>
	<SectionContainer title="Programs" icon="fas fa-graduation-cap">
		<div class="grid grid-cols-1 gap-6 max-w-xl">
			<a
				href="/aisf"
				class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md transition"
			>
				<div class="flex items-center gap-3 mb-2">
					<i class="fas fa-book text-maia-600 dark:text-maia-400"></i>
					<h2 class="text-lg font-semibold">AISF Curriculum</h2>
				</div>
				<p class="text-sm text-maia-600 dark:text-maia-400">
					AI Safety Fundamentals reading curriculum for fellows.
				</p>
			</a>
		</div>
	</SectionContainer>
</PageLayout>
