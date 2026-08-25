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
			<a
				href="/resources/mit-classes"
				class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md transition"
			>
				<div class="flex items-center gap-3 mb-2">
					<i class="fas fa-chalkboard-teacher text-maia-600 dark:text-maia-400"></i>
					<h2 class="text-lg font-semibold">Relevant MIT Classes</h2>
				</div>
				<p class="text-sm text-maia-600 dark:text-maia-400">
					MIT classes relevant to AI safety.
				</p>
			</a>
			<a
				href="/resources/faculty-labs"
				class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md transition"
			>
				<div class="flex items-center gap-3 mb-2">
					<i class="fas fa-flask text-maia-600 dark:text-maia-400"></i>
					<h2 class="text-lg font-semibold">MIT Faculty and Labs</h2>
				</div>
				<p class="text-sm text-maia-600 dark:text-maia-400">
					MIT faculty and labs working on AI safety and related areas.
				</p>
			</a>
			<a
				href="/resources/fellowships"
				class="block p-6 rounded-xl border border-border-light dark:border-border-dark hover:shadow-md transition"
			>
				<div class="flex items-center gap-3 mb-2">
					<i class="fas fa-user-graduate text-maia-600 dark:text-maia-400"></i>
					<h2 class="text-lg font-semibold">AI Safety Fellowships</h2>
				</div>
				<p class="text-sm text-maia-600 dark:text-maia-400">
					Fellowships and programs for getting involved in AI safety.
				</p>
			</a>
		</div>
	</SectionContainer>
</PageLayout>
