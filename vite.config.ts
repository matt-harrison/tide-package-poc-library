import typescript2 from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, './src/contexts/export.ts'),
      fileName: () => 'index.js',
      formats: ['es'],
      name: 'tide-package-library-poc',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    typescript2({
      check: false,
      include: ['src/contexts/export.ts', 'src/types/*.ts'],
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          // declarationMap: true,
          // sourceMap: true,
        },
      },
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
