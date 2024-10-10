import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': 'http://localhost:5009',
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
});
