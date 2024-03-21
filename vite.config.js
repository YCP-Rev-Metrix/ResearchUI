// imports
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'
import nightwatchPlugin from 'vite-plugin-nightwatch'

export default defineConfig({
  plugins: [
    vue(),
    nightwatchPlugin(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8081, // Change this to the desired port number
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
