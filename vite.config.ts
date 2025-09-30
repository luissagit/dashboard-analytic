import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@app/assets': path.resolve(__dirname, './src/base/presentation/assets'),
      '@app/base': path.resolve(__dirname, './src/base'),
      '@app': path.resolve(__dirname, './src/'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
