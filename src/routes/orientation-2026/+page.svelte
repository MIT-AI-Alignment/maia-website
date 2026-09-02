<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
</script>

<PageLayout
	title="Orientation 2026"
	description="MAIA Orientation 2026 — schedule of events and how to get started with MIT AI Alignment."
	heroIcon="fas fa-compass"
	heroTitle="Orientation 2026"
	centerTitle={true}
>
	<!-- Anchor targets sit on wrappers so they can clear the fixed navbar. -->
	<div id="schedule" class="scroll-mt-28">
		<SectionContainer title="Schedule" icon="fas fa-calendar-days">
			<figure class="max-w-2xl mx-auto">
				<img
					src="/images/flyers/maia-orientation-flyer-v3.png"
					alt="MAIA Orientation 2026 schedule flyer"
					width="2176"
					height="2264"
					class="w-full h-auto border"
					style="border-color: var(--maia-border);"
				/>
			</figure>

			<!-- The override layer in app.css makes the Tailwind border/background utilities
			     transparent inside <main>, so this panel draws itself with the brand tokens. -->
			<aside class="border p-6 mt-8" style="border-color: var(--maia-border);">
				<div class="flex items-start gap-4">
					<i class="fas fa-calendar-days text-xl mt-1 maia-section-icon" aria-hidden="true"></i>
					<p class="text-lg">
						View the MAIA
						<a
							href="https://calendar.google.com/calendar/embed?src=e11a0576562133f0383f64cbca8dad84b0de285f16008b48eed6e80ea3d1f468%40group.calendar.google.com&ctz=America%2FNew_York"
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-4 hover:no-underline"
							style="color: var(--maia-accent);"
						>
							Google Calendar
						</a>
						<i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
					</p>
				</div>
			</aside>
		</SectionContainer>
	</div>
</PageLayout>
