// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    // from https://github.com/vite-pwa/nuxt?tab=readme-ov-file#-usage
    '@vite-pwa/nuxt'
  ],
  vite: {
    plugins: [
      vuetify({ autoImport: true })
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    }
  },
  app: {
    head: {
      link: [
        { rel:"manifest", href:"/manifest.webmanifest"  }
      ]
    }
  },
  ssr: false,
  pwa: {
    strategies: 'generateSW',
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    manifest: {
      "short_name": "Kings",
      "name": "Kings",
      "icons": [
        {
          "src": "/crown_192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "/crown_512.png",
          "type": "image/png",
          "sizes": "512x512"
        }
      ],
      "id": "/?source=pwa",
      "start_url": "/?source=pwa",
      "background_color": "#FFFFFF",
      "display": "standalone",
      "scope": "/",
      "theme_color": "#7B1FA2",
      "description": "Kings and Queens of England"
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,JPG}']
    },
    devOptions: {
      enabled: false,
      type: "module"
    }
  },

  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },
  compatibilityDate: '2026-07-20',
  devtools: { enabled: true }
})
