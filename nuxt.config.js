export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
			lang: 'id'
		},
    title: 'Quran-id - Aplikasi Baca Al-Quran praktis dari browser | quran-id.vercel.app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: "format-detection", content: "telephone=no" },
			{ name: "author", content: "Quran-id"},
			{ name: "description", content: "Quran-id adalah aplikasi baca al-quran dari web browser lengkap dengan tafsir"},
			{ property: "og:title", content: "Quran-id - Aplikasi Baca Al-Quran praktis dari browser"},
			{ property: "og:description", content: "Quran-id adalah aplikasi baca al-quran dari web browser lengkap dengan tafsir."},
			{ property: "og:image", content: "/icon.png"},
			{ property: "og:site_name", content: "Quran-id"},
			{ property: "og:type", content: "website"},
			{ property: "og:url", content: "https://quran-id.vercel.app/"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/quran.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  loading: {
    color: '#F87171'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.quran.sutanlab.id'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'id'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
