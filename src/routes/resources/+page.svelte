<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';
</script>

<PageLayout
	title="Resources"
	description="MAIA learning resources and programs."
	heroIcon="fas fa-book"
	heroTitle="Resources"
	centerTitle={true}
>
	<SectionContainer title="Programs" icon="fas fa-graduation-cap">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

			<a
				href="/resources/aisf-hack"
				class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md transition"
			>
				<div class="flex items-center gap-3 mb-2">
					<i class="fas fa-laptop-code text-maia-600 dark:text-maia-400"></i>
					<h2 class="text-lg font-semibold">AISF Hack S26</h2>
				</div>
				<p class="text-sm text-maia-600 dark:text-maia-400">
					Capstone hackathon for Spring 2026 AISF fellows. May 9 · CIC Cambridge.
				</p>
			</a>
		</div>
	</SectionContainer>
</PageLayout>
