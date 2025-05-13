import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LesMetiers from '../pages/LesMetiers.vue'
import EtapesProces from '../pages/Lesetapesproces.vue'
import Erreur from '../pages/404.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/les-metiers', name: 'Les métiers de la magistrature', component: LesMetiers },
  { path: '/les-etapes-proces', name: 'Les grandes étapes d’un procès', component: EtapesProces },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Erreur},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


export default router
