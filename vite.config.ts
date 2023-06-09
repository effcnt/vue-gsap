import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-gsap',
      formats: ['es', 'umd'],
      fileName: (format: string) => `vue-gsap.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'gsap', 'gsap/ScrollTrigger', 'gsap/CustomEase'], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        globals: { vue: 'Vue' },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
})
