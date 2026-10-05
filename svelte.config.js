import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Hosted at the domain root. ISR reconstructs slashless internal URLs;
		// relative assets otherwise resolve incorrectly on external slash URLs.
		paths: { relative: false },
		adapter: adapter({
			runtime: 'nodejs22.x',
			maxDuration: 30
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Never publish a build that silently dropped the calendar page.
				if (path.replace(/\/$/, '') === '/events') throw new Error(message);
			}
		}
	},

	// Add onwarn configuration to handle package warnings
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		if (warning.message.includes('@splidejs/svelte-splide') || 
			warning.message.includes('@splidejs/splide')) {
			return;
		}
		handler(warning);
	}
};

export default config;
