import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from "svelte-preprocess"
import Icons from 'unplugin-icons/vite'
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [mdsvex(mdsvexConfig), sveltePreprocess()],
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [Icons({ compiler: "svelte" })],
      resolve: {
        alias: [
          { find: "#/", replacement: path.join(import.meta.url, "./src") },
        ],
      },
    },
  },
}
