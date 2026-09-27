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
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!parsed || reduced) return;
		display = `${parsed.prefix}0${parsed.suffix}`;
		let frame = 0;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				const start = performance.now();
				const duration = 1050;
				const tick = (now: number) => {
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
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	});
</script>

<span bind:this={element} aria-label={value}>{display}</span>
