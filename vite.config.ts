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
		sveltekit(),
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
