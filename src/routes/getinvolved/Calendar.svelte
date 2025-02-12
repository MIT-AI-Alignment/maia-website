<script>
	import { CONFIG } from '$lib/config';
</script>

<div>
	<h2 class="pt-12 text-4xl font-heading font-[550]">Upcoming Events</h2>
	<br />
	Stay up to date with the happenings of MAIA by adding the calendar below or signing up for our mailing
	list.
	<br />
	<iframe
		title="MAIA Public Calendar"
		src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FNew_York&showPrint=0&showTz=0&title=MAIA%20Public%20Calendar&src=ZTExYTA1NzY1NjIxMzNmMDM4M2Y2NGNiY2E4ZGFkODRiMGRlMjg1ZjE2MDA4YjQ4ZWVkNmU4MGVhM2QxZjQ2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB"
		style="border-width:0"
		width="700"
		height="500"
		frameborder="0"
		scrolling="no"
	></iframe>
	<a href="{CONFIG.mailingListLink} "
		><h2
			class="mt-8 w-fit text-lg underline bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 rounded-md py-2 px-4"
		>
			<a href={CONFIG.mailingListLink} class="underline">Join our Mailing List</a>.
		</h2></a
	>
</div>
