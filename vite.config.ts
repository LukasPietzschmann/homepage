import {sveltekit} from '@sveltejs/kit/vite';
import {enhancedImages} from '@sveltejs/enhanced-img';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit()
    ],
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toLocaleDateString())
    }
});
