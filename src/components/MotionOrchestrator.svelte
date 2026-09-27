<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const root = document.documentElement;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const observed = new WeakSet<Element>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('motion-visible');
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
		);

		const register = (scope: ParentNode = document) => {
			for (const element of scope.querySelectorAll('[data-motion]')) {
				if (observed.has(element)) continue;
				observed.add(element);
				if (reduced) element.classList.add('motion-visible');
				else observer.observe(element);
			}
		};

		root.classList.add('motion-ready');
		register();
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
			transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
		transition-delay: var(--motion-delay, 0ms);
	}

	:global(.motion-ready [data-motion='quiet']) {
		transform: translate3d(0, 10px, 0);
	}

	:global(.motion-ready [data-motion].motion-visible) {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.motion-ready [data-motion]) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
