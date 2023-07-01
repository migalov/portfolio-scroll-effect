import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import content from './src/content.json'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { data: content }

export default defineConfig({
  plugins: [
    pugPlugin(options, locals),
  ],
  server: {
    port: 1000
  }
})