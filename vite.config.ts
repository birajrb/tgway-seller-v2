import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // SVGR options
      svgrOptions: {
        // Remove width and height from SVG to make it scalable
        dimensions: false,
        // Transform SVG to React component with named export
        exportType: 'named',
        // Add React import
        ref: true,
        // Add SVG attributes as props
        svgo: false,
        // Add TypeScript typing
        typescript: true,
      },
      // Include SVG files
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
