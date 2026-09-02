<script lang="ts">
	import PageLayout from '../../components/PageLayout.svelte';
	import SectionContainer from '../../components/SectionContainer.svelte';
	import Button from '../../components/Button.svelte';

	const sections = [
		{ id: 'schedule', title: 'Schedule', icon: 'fa-solid fa-calendar-days' },
		{ id: 'calendar', title: 'Google Calendar', icon: 'fa-solid fa-calendar' },
		{ id: 'rsvp', title: 'RSVP Links', icon: 'fa-solid fa-ticket' }
	];

	const rsvpEvents = [
		{
			name: 'Rock Climbing',
			href: 'https://partiful.com/e/sHHsvkCC5JQ0WBFw3b7J',
			note: '(RSVP Required to Attend)'
		},
		{
			name: 'AGI Tabletop Exercises',
			href: 'https://partiful.com/e/UBZPLn8pwDSahW5WScIL',
			note: '(RSVP Required to Attend)'
		},
		{
			name: 'Sunset Cruise Ride',
			href: 'https://partiful.com/e/wf8Xd77SWvf29p42iHV1',
			note: '(RSVP Required to Attend)'
		},
		{
			name: 'Estimation and Forecasting Challenge',
			href: 'https://partiful.com/e/l78vbKK6kExCPvVnvNPl?c=hBong26D'
		},
		{
			name: 'OpenAI Hacking Incident Explained',
			href: 'https://partiful.com/e/MeP3Pu6eCsri65ml6MOQ'
		}
	];

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<PageLayout
	title="Orientation 2026"
	description="MAIA Orientation 2026 — schedule of events and how to get started with MIT AI Alignment."
	heroIcon="fas fa-compass"
	heroTitle="Orientation 2026"
	centerTitle={true}
>
	<svelte:fragment slot="hero-content">
		<p class="text-center text-lg mb-8 max-w-2xl mx-auto text-maia-950/70 dark:text-maia-200">
			Learn about MAIA through our orientation events, geared at incoming MIT first-years.
		</p>

		<!-- Navigation Buttons -->
		<div class="flex flex-wrap justify-center gap-3 mb-8">
			{#each sections as section}
				<Button
					text={section.title}
					icon={section.icon}
					type="purple"
					size="md"
					on:click={() => scrollToSection(section.id)}
				/>
			{/each}
		</div>
	</svelte:fragment>

	<SectionContainer id="schedule" title="Schedule" icon="fa-solid fa-calendar-days">
		<figure class="w-full">
			<img
				src="/images/flyers/maia-2026-orientation-flyer.png"
				alt="MAIA Orientation 2026 schedule flyer"
				width="4040"
				height="5228"
				class="w-full h-auto border"
				style="border-color: var(--maia-border);"
			/>
		</figure>
	</SectionContainer>

	<!-- The trailing -mb-8 trims SectionContainer's mb-16 so the calendar and RSVP
	     panels read as a pair rather than two distant blocks. -->
	<div class="-mb-8">
		<SectionContainer id="calendar" title="Google Calendar" icon="fa-solid fa-calendar">
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

	<SectionContainer id="rsvp" title="RSVP Links" icon="fa-solid fa-ticket">
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
							{#if event.note}
								<span class="text-sm" style="color: var(--maia-muted);">{event.note}</span>
							{/if}
							<i class="fas fa-external-link-alt text-xs" aria-hidden="true"></i>
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	</SectionContainer>

	<div class="flex justify-center mt-8 mb-12">
		<Button
			text="Back to Top"
			icon="fa-solid fa-arrow-up"
			type="text"
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		/>
	</div>
</PageLayout>
