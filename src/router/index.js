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
import PolitiqueConfidentialite from '../pages/PolitiqueConfidentialite.vue'
import Accessibilite from '../pages/Accessibilite.vue'
import JaF from '../pages/metiers/JugeAffairesFamiliales.vue'
import JaP from '../pages/metiers/JugeApplicationPeines.vue'
import JCivil from '../pages/metiers/JugeCivil.vue'
import JCorrectionnel from '../pages/metiers/JugeCorrectionnel.vue'
import JContentieux from '../pages/metiers/JugeContentieuxProtecrion.vue'
import JEnfants from '../pages/metiers/JugeEnfants.vue'
import JInstruction from '../pages/metiers/JugeInstruction.vue'
import Substitut from '../pages/metiers/SubstitutProcureur.vue'

const routes = [
  { path: '/', name: 'Home', component: Home,
    meta: {
      title: 'EMCQ - Être Magistrat C\'est Quoi ? Quiz Magistrature',
      description: 'Découvrez les métiers de magistrat (juge, procureur) via un quiz interactif pour jeunes. École Nationale de la Magistrature.'
    }
  },
  { path: '/les-metiers', name: 'Les métiers de la magistrature', component: LesMetiers,
    meta: {
      title: 'Les métiers de la magistrature - EMCQ',
      description: 'Découvrez juge aux affaires familiales, juge d\'instruction, substitut du procureur et plus.'
    }
  },
  { path: '/les-metiers/juges-aux-affaires-familiales', name: 'Juges aux affaires familiales', component: JaF,
    meta: { title: 'Juges aux affaires familiales - EMCQ', description: 'Rôle du juge aux affaires familiales : divorces, garde enfants...' }
  },
  { path: '/les-metiers/juge-application-des-peines', name: 'Juges d\'application des peines', component: JaP,
    meta: { title: 'Juges d\'application des peines - EMCQ', description: 'Suivi peines, aménagement...' }
  },
  { path: '/les-metiers/juge-civil', name: 'Juges civil', component: JCivil,
    meta: { title: 'Juges civils - EMCQ', description: 'Litiges civils, contrats...' }
  },
  { path: '/les-metiers/juge-correctionnel', name: 'Juge correctionnel', component: JCorrectionnel,
    meta: { title: 'Juge correctionnel - EMCQ', description: 'Délits correctionnels...' }
  },
  { path: '/les-metiers/juge-des-contentieux-protection', name: 'Juges des contentieux et de la protection', component: JContentieux,
    meta: { title: 'Juges contentieux protection - EMCQ', description: 'Contentieux administratifs, protection...' }
  },
  { path: '/les-metiers/juge-des-enfants', name: 'Juges des enfants', component: JEnfants,
    meta: { title: 'Juges des enfants - EMCQ', description: 'Justice des mineurs...' }
  },
  { path: '/les-metiers/juge-instruction', name: 'Juges d\'instruction', component: JInstruction,
    meta: { title: 'Juges d\'instruction - EMCQ', description: 'Enquêtes pénales complexes...' }
  },
  { path: '/les-metiers/substitut-du-procureur', name: 'Substitut du procureur', component: Substitut,
    meta: { title: 'Substitut du procureur - EMCQ', description: 'Procureur adjoint, poursuites pénales...' }
  },
  { path: '/les-etapes-proces', name: 'Les grandes étapes d’un procès', component: EtapesProces,
    meta: { title: 'Étapes d’un procès pénal - EMCQ', description: 'Du parquet au jugement...' }
  },
  { path: '/ENM', name: 'L’école nationale de la magistrature', component: ENM,
    meta: { title: 'ENM École Nationale de la Magistrature - EMCQ', description: 'Formation des magistrats en France.' }
  },
  { path: '/carriere-dans-la-magistrature', name: 'Une carrière dans la magistrature', component: Carriere,
    meta: { title: 'Carrière magistrat - EMCQ', description: 'Évolution, mobilité dans la magistrature.' }
  },
  { path: '/rencontrons-nous', name: 'Rencontrons-nous', component: RencontronsNous,
    meta: { title: 'Rencontrons-nous - EMCQ', description: 'Événements, portes ouvertes ENM.' }
  },
  { path: '/classes-prepas-talents-enm', name: 'Classes prépas Talents ENM', component: CPT,
    meta: { title: 'Classes Prépa Talents ENM - EMCQ', description: 'Prépa pour concours magistrature.' }
  },
  { path: '/quiz', name: 'Quiz', component: Quiz,
    meta: { title: 'Quiz EMCQ - Quel magistrat êtes-vous ?', description: 'Test interactif : découvrez votre métier idéal !' }
  },
  { path: '/mentions-legales', name: 'Mentions Légales', component: MentionsLegales,
    meta: { title: 'Mentions Légales - EMCQ', description: 'Éditeur, hébergeur...' }
  },
  { path: '/politique-confidentialite', name: 'Politique de confidentialité', component: PolitiqueConfidentialite,
    meta: { title: 'Politique Confidentialité - EMCQ', description: 'Cookies Matomo, données...' }
  },
  { path: '/accessibilite', name: 'Accessibilité', component: Accessibilite,
    meta: { title: 'Accessibilité - EMCQ', description: 'RGAA, conformité...' }
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // Titre
  document.title = to.meta.title || 'EMCQ'

  // Meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'EMCQ – être magistrat c\'est quoi ?')
  }

  next()
});

router.afterEach(() => {
  if (window._paq) {
    window._paq.push(['setCustomUrl', window.location.href])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }
})

export default router
