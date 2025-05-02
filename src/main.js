import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import './assets/fonts.css'
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App).use(router).mount('#app')
