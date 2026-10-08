<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const root = document.documentElement;
		// Keep the content visible if the browser cannot enhance it.
		if (!('IntersectionObserver' in window)) return;
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const observed = new WeakSet<Element>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('motion-visible');
					observer.unobserve(entry.target);
				}
			},
			// Long sections may never fit 8% of their height in a mobile viewport.
			{ rootMargin: '0px 0px -8% 0px', threshold: 0 }
		);

		const register = (scope: ParentNode = document) => {
			for (const element of scope.querySelectorAll('[data-motion]')) {
				if (observed.has(element)) continue;
				observed.add(element);
				if (preference.matches) element.classList.add('motion-visible');
				else observer.observe(element);
			}
		};

		root.classList.add('motion-ready');
		register();
		const showForReducedMotion = () => {
			if (!preference.matches) return;
			observer.disconnect();
			for (const element of document.querySelectorAll('[data-motion]')) {
				element.classList.add('motion-visible');
			}
		};
		// A keyboard focus must never land on content waiting for a scroll reveal.
		const showFocusedContent = (event: FocusEvent) => {
			let element = event.target instanceof Element ? event.target : null;
			while (element) {
				if (element.matches('[data-motion]')) {
					element.classList.add('motion-visible');
					observer.unobserve(element);
				}
				element = element.parentElement;
			}
		};
		preference.addEventListener('change', showForReducedMotion);
		document.addEventListener('focusin', showFocusedContent);
		const mutations = new MutationObserver((records) => {
			for (const record of records) {
				for (const node of record.addedNodes) {
					if (node instanceof Element) {
						if (node.matches('[data-motion]')) register(node.parentElement ?? document);
						else register(node);
					}
				}
			}
		});
		mutations.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mutations.disconnect();
			preference.removeEventListener('change', showForReducedMotion);
			document.removeEventListener('focusin', showFocusedContent);
			root.classList.remove('motion-ready');
		};
	});
</script>

<style>
	:global(.motion-ready [data-motion]) {
		opacity: 0;
		transform: translate3d(0, 18px, 0);
		transition:
			opacity 620ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
			border-color 220ms ease,
			box-shadow 220ms ease;
		transition-delay: var(--motion-delay, 0ms);
	}

	:global(.motion-ready [data-motion='quiet']) {
		transform: translate3d(0, 10px, 0);
	}

	:global(.motion-ready [data-motion='rise']) {
		transform: translate3d(0, 24px, 0);
	}

	:global(.motion-ready [data-motion='hero']) {
		transform: translate3d(0, 20px, 0);
		transition-duration: 850ms;
	}

	:global(.motion-ready [data-motion].motion-visible) {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	:global(.motion-ready [data-motion]:focus-within) {
		opacity: 1;
		transform: none;
		transition: none;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.motion-ready [data-motion]) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
