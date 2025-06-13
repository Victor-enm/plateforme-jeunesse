import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LesMetiers from '../pages/LesMetiers.vue'
import EtapesProces from '../pages/Lesetapesproces.vue'
import ENM from '../pages/ENM.vue'
import Carriere from '../pages/Carriere.vue'
import Erreur from '../pages/404.vue'
import RencontronsNous from '../pages/RencontronsNous.vue'
import CPT from '../pages/CPT.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/les-metiers', name: 'Les métiers de la magistrature', component: LesMetiers },
  { path: '/les-etapes-proces', name: 'Les grandes étapes d’un procès', component: EtapesProces },
  { path: '/ENM', name: 'L’école nationale de la magistrature', component: ENM},
  { path: '/carriere-dans-la-magistrature', name: 'Une carrière dans la magistrature', component: Carriere},
  { path: '/rencontrons-nous', name: 'Rencontrons-nous', component: RencontronsNous},
  { path: '/classes-prepas-talents-enm', name: 'Classes prépas Talents ENM', component: CPT},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Erreur},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


export default router
