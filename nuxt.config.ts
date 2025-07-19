// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      { name: "Playfair Display", provider: "google" },
    ],
  },
  image: {
    quality: 80,
    format: ["webp"],
  },
});
