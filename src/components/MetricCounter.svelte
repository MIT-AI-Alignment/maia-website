<script lang="ts">
	import { onMount } from 'svelte';

	export let value: string;
	let element: HTMLSpanElement;
	let display = value;

	function parts(input: string) {
		const match = input.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
		if (!match) return null;
		return {
			prefix: match[1],
			target: Number(match[2].replaceAll(',', '')),
			suffix: match[3],
			grouped: match[2].includes(',')
		};
	}

	onMount(() => {
		const parsed = parts(value);
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (!parsed || preference.matches || !('IntersectionObserver' in window)) return;
		display = `${parsed.prefix}0${parsed.suffix}`;
		let frame = 0;
		const showFinalValue = () => {
			if (!preference.matches) return;
			cancelAnimationFrame(frame);
			observer.disconnect();
			display = value;
		};
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting || preference.matches) return;
				observer.disconnect();
				const start = performance.now();
				const duration = 1050;
				const tick = (now: number) => {
					if (preference.matches) {
						display = value;
						return;
					}
					const progress = Math.min(1, (now - start) / duration);
					const eased = 1 - Math.pow(1 - progress, 4);
					const current = Math.round(parsed.target * eased);
					const number = parsed.grouped ? current.toLocaleString('en-US') : String(current);
					display = `${parsed.prefix}${number}${parsed.suffix}`;
					if (progress < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.7 }
		);
		observer.observe(element);
		preference.addEventListener('change', showFinalValue);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
			preference.removeEventListener('change', showFinalValue);
		};
	});
</script>

<span bind:this={element} class="metric-counter">
	<span class="counter-width" aria-hidden="true">{value}</span>
	<span class="counter-value" aria-hidden="true">{display}</span>
	<span class="sr-only">{value}</span>
</span>

<style>
	.metric-counter {
		display: inline-grid;
		font-variant-numeric: tabular-nums;
	}
	.counter-width,
	.counter-value {
		grid-area: 1 / 1;
	}
	.counter-width {
		visibility: hidden;
	}
</style>
