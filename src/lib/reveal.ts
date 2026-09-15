export function reveal(node: HTMLElement) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;

  let animation: Animation | undefined;
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    // Content stays visible before JavaScript and after interruption. Nothing waits hidden for a scroll.
    animation = node.animate(
      [{ opacity: 0.72, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 480, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
  }, { rootMargin: '0px 0px -32px 0px' });

  const stop = () => {
    observer.disconnect();
    animation?.cancel();
  };
  // Skip content above the current position when following a deep link.
  if (node.getBoundingClientRect().bottom > 0) observer.observe(node);
  preference.addEventListener('change', stop);
  return { destroy() { stop(); preference.removeEventListener('change', stop); } };
}
