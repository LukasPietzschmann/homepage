import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	define: {
		BUILD_DATE: JSON.stringify(new Date().toLocaleDateString(undefined, { dateStyle: 'medium' }))
	}
});