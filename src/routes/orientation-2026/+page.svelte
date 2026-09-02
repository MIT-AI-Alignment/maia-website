<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';

	const rsvpEvents = [
		{ name: 'Rock Climbing', href: 'https://partiful.com/e/sHHsvkCC5JQ0WBFw3b7J' },
		{
			name: 'AGI Tabletop Exercises',
			href: 'https://partiful.com/e/UBZPLn8pwDSahW5WScIL'
		},
		{
			name: 'Sunset Cruise Ride',
			href: 'https://partiful.com/e/wf8Xd77SWvf29p42iHV1'
		}
	];
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
			<figure class="w-full">
				<img
					src="/images/flyers/maia-orientation-flyer-v3.png"
					alt="MAIA Orientation 2026 schedule flyer"
					width="2176"
					height="2264"
					class="w-full h-auto border"
					style="border-color: var(--maia-border);"
				/>
			</figure>
		</SectionContainer>
	</div>

	<!-- The trailing -mb-8 trims SectionContainer's mb-16 so the calendar and RSVP
	     panels read as a pair rather than two distant blocks. -->
	<div id="calendar" class="scroll-mt-28 -mb-8">
		<SectionContainer title="Google Calendar" icon="fas fa-calendar">
			<!-- The override layer in app.css makes the Tailwind border/background utilities
			     transparent inside <main>, so this panel draws itself with the brand tokens. -->
			<aside class="border p-6" style="border-color: var(--maia-border);">
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
			</aside>
		</SectionContainer>
	</div>

	<div id="rsvp" class="scroll-mt-28">
		<SectionContainer title="RSVP Links" icon="fas fa-ticket">
			<aside class="border" style="border-color: var(--maia-border);">
				<ul class="list-none m-0 p-0">
					{#each rsvpEvents as event, index}
						<li class={index > 0 ? 'border-t' : ''} style="border-color: var(--maia-border);">
							<a
								href={event.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-3 p-5 text-lg no-underline hover:underline underline-offset-4"
								style="color: var(--maia-accent);"
							>
								<i class="fas fa-ticket" aria-hidden="true"></i>
								<span>{event.name}</span>
								<i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</SectionContainer>
	</div>
</PageLayout>
