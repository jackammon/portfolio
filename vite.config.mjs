// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import Markdown from 'vite-plugin-vue-markdown'
import mdPrism from 'markdown-it-prism'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: { transformAssetUrls }
    }),
    Markdown({
      headEnabled: false,
      markdownItSetup(md) {
        md.use(mdPrism)
      },
      frontmatter: true
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Rubik',
          styles: 'wght@400;500;700;900',
        },
        {
          name: 'Rubik Mono One',
          styles: 'wght@400',
        },
      ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
      '.md',
    ],
  },
  server: {
    port: 3000,
  },
})
