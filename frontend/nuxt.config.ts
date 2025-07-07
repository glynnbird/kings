// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel:"manifest", href:"/manifest.webmanifest"  }
      ]
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@vite-pwa/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
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
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
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
  compatibilityDate: '2024-09-24',
  devtools: { enabled: true },
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  }
})
