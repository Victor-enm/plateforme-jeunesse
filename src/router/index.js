import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import LesMetiers from '../pages/LesMetiers.vue'
import EtapesProces from '../pages/Lesetapesproces.vue'
import ENM from '../pages/ENM.vue'
import Carriere from '../pages/Carriere.vue'
import Erreur from '../pages/404.vue'
import RencontronsNous from '../pages/RencontronsNous.vue'
import Quiz from '../pages/Quiz.vue'
import CPT from '../pages/CPT.vue'
import MentionsLegales from '../pages/MentionsLegales.vue'
import JaF from '../pages/metiers/JugeAffairesFamiliales.vue'
import JaP from '../pages/metiers/JugeApplicationPeines.vue'
import JCivil from '../pages/metiers/JugeCivil.vue'
import JCorrectionnel from '../pages/metiers/JugeCorrectionnel.vue'
import JContentieux from '../pages/metiers/JugeContentieuxProtecrion.vue'
import JEnfants from '../pages/metiers/JugeEnfants.vue'
import JInstruction from '../pages/metiers/JugeInstruction.vue'
import Substitut from '../pages/metiers/SubstitutProcureur.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/les-metiers', name: 'Les métiers de la magistrature', component: LesMetiers },
  { path: '/les-metiers/juges-aux-affaires-familiales', name: 'Juges aux affaires familiales', component: JaF },
  { path: '/les-metiers/juge-application-des-peines', name: 'Juges d\'application des peines', component: JaP },
  { path: '/les-metiers/juge-civil', name: 'Juges civil', component: JCivil },
  { path: '/les-metiers/juge-correctionnel', name: 'Juge correctionnel', component: JCorrectionnel },
  { path: '/les-metiers/juge-des-contentieux-protection', name: 'Juges des contentieux et de la protection', component: JContentieux },
  { path: '/les-metiers/juge-des-enfants', name: 'Juges des enfants', component: JEnfants },
  { path: '/les-metiers/juge-instruction', name: 'Juges d\'instruction', component: JInstruction },
  { path: '/les-metiers/substitut-du-procureur', name: 'Substitut du procureur', component: Substitut },
  { path: '/les-etapes-proces', name: 'Les grandes étapes d’un procès', component: EtapesProces },
  { path: '/ENM', name: 'L’école nationale de la magistrature', component: ENM},
  { path: '/carriere-dans-la-magistrature', name: 'Une carrière dans la magistrature', component: Carriere},
  { path: '/rencontrons-nous', name: 'Rencontrons-nous', component: RencontronsNous},
  { path: '/classes-prepas-talents-enm', name: 'Classes prépas Talents ENM', component: CPT},
  { path: '/quiz', name: 'Quiz', component: Quiz},
  { path: '/mentions-legales', name: 'Mentions Légales', component: MentionsLegales},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Erreur},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


export default router
