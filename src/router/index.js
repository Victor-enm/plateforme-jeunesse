import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AutrePage from '../pages/HelloWorld.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path : '/autre', component: AutrePage},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
