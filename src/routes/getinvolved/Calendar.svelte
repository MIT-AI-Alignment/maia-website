<script>
	import { CONFIG } from '$lib/config';
	import Button from '../../components/Button.svelte';
</script>

<div>
	Stay up to date with the happenings of MAIA by adding the calendar below or signing up for our
	mailing list.
	<br />
	<div class="calendar-container w-full overflow-hidden">
		<iframe
			title="MAIA Public Calendar"
			src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FNew_York&showPrint=0&showTz=0&title=MAIA%20Public%20Calendar&src=ZTExYTA1NzY1NjIxMzNmMDM4M2Y2NGNiY2E4ZGFkODRiMGRlMjg1ZjE2MDA4YjQ4ZWVkNmU4MGVhM2QxZjQ2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23B39DDB"
			style="border-width:0"
			class="w-full max-w-full"
			height="500"
			frameborder="0"
			scrolling="no"
		></iframe>
	</div>
	<div class="mt-8">
		<a href={CONFIG.mailingListLink}>
			<Button text="Join our Mailing List" icon="fa-solid fa-envelope" type="purple" size="md" />
		</a>
	</div>
</div>

<style>
	.calendar-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		margin-top: 1rem;
	}

	.calendar-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
