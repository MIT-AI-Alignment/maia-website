import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { imagetools } from 'vite-imagetools';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	optimizeDeps: {
		exclude: ['@splidejs/svelte-splide', '@splidejs/splide']
	},
	plugins: [
		sveltekit({
			onwarn: (warning, handler) => {
				if (warning.code.startsWith('a11y-')) return;
				if (warning.message.includes('@splidejs/svelte-splide') || 
					warning.message.includes('@splidejs/splide')) return;
				handler(warning);
			}
		}),
		enhancedImages(),
		imagetools(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	ssr: {
		noExternal: ['@splidejs/svelte-splide', '@splidejs/splide']
	},
	resolve: {
		dedupe: ['@splidejs/svelte-splide', '@splidejs/splide']
	}
});
