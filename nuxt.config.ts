// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/fontaine"],

  css: ["./fonts.css"],
  app: {
    head: {
      link: [
        // {
        //   rel: "preload",
        //   href: "https://static-ds.backmarket.com/fonts/v8.0.2/backmarket.fontface.css",
        //   as: "style",
        // },
        // {
        //   rel: "stylesheet",
        //   href: "https://static-ds.backmarket.com/fonts/v8.0.2/backmarket.fontface.css",
        // },
      ],
    },
  },
});
