import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import copy from 'rollup-plugin-copy'
import content from './src/content.json'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { data: content }

export default defineConfig({
  plugins: [
    pugPlugin(options, locals),
    copy({
      targets: [
        { src: './src/img/**/*', dest: 'dist/src/img/' },
      ],
      hook: 'writeBundle',
    })
  ]
})