import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-12-19",
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  ssr: false,
  app: {
    head: {
      title: 'Chris Rosser'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/main.css"],
  content: {
    build: {
      markdown: { 
        remarkPlugins: {
          'remark-reading-time' : {}
        }
      }
    }
  },
  devtools: { enabled: true },
  modules: [
      '@nuxt/content',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
      '@nuxt/image',
      '@nuxthub/core',
      'nuxt-umami'],
  umami: {
    id: "5a9ba10a-7814-41e2-a7b8-538b024dec5b",
    host: "https://cloud.umami.is",
    autoTrack: true,
    ignoreLocalhost: true
  },
  routeRules: {
    '/posts/2018/08/11/review-omnioutliner/': { redirect: 'https://chrisrosser.medium.com/omnioutliner-review-68bd3b1e5735' },
    '/posts/2021/04/27/how-to-create-a-parchment-background-in-procreate/': { redirect: 'https://chrisrosser.medium.com/how-to-create-a-parchment-background-in-procreate-f1517b129215' },
    '/posts/2020/04/15/how-to-create-a-paperback-with-apple-pages/': { redirect: 'https://chrisrosser.substack.com/p/how-to-create-a-paperback-with-apple' }
  }
})