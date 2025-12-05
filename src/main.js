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
  siteId: 9
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: ''
})

window._paq.push(['trackPageView']); // Pour suivre les visites sur vos pages