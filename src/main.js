import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMatomo from 'vue-matomo'
import './assets/tailwind.css'
import './assets/fonts.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)

app.use(VueMatomo, {
  host: 'https://enm.matomo.cloud/',
  siteId: 9,
  router, // permet de tracker les changements de routes automatiquement
  enableLinkTracking: true
})

app.mount('#app')