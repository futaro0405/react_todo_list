import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_todo_list/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `modules/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]';
          }

          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }

          return 'assets/[name].[ext]';
        }
      }
    }
  },
  plugins: [react({ jsxImportSource: '@emotion/react' })]
});
