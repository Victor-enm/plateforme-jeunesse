<template>
  <header class="bg-gris shadow-md fixed top-0 left-0 right-0 z-50 w-full h-[10vh] lg:h-34">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between lg:justify-between lg:max-w-full lg:pl-15 lg:pr-15 text-center">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img src="/logo-emcq.svg" alt="Logo" class="w-[62px] h-auto sm:h-12 lg:w-28 lg:h-auto" />
      </RouterLink>

      <!-- Mobile burger -->
      <button
        type="button"
        class="xl:hidden p-2 text-violet hover:text-violet focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-50"
        @click="toggleMenu"
        aria-controls="mobile-menu"
        :aria-expanded="isMenuOpen.toString()"
      >
        <span class="sr-only">Toggle menu</span>
        <i
          class="fas fa-bars text-3xl"
          v-if="!isMenuOpen"
        ></i>
        <i
          class="fas fa-xmark text-4xl"
          v-else
        ></i>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden xl:flex space-x-4 font-inter">
        <router-link v-for="item in navItems" :key="item.labelDesk" :to="item.hrefDesk"
        class="last:bg-rouge last:text-gris last:p-2 last:border last:rounded-full last:font-sans pt-3 last:md:hover:bg-transparent last:md:hover:text-rouge last:md:hover:border-rouge transition md:text-xs lg:text-base 2xl:text-lg"
        active-class="font-bold"
          exact-active-class="font-bold">
        {{ item.labelDesk }}
      </router-link>
      </nav>
    </div>

    <!-- Mobile Menu Fullscreen -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="xl:hidden fixed inset-0 bg-gris flex flex-col items-center justify-center space-y-4 text-center px-6 pt-10 z-10"
        id="mobile-menu"
      >
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          @click="closeMenu"
          class="text-violet border-2 border-violet px-4 py-3 rounded-full text-lg font-medium w-full max-w-xs  first:text-gris first:bg-rouge first:border-rouge first:mb-15"
        >
          {{ item.label }}
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Méthode pour fermer le menu
const closeMenu = () => {
    isMenuOpen.value = false;
};

const navItems = [
  { label: 'Quel magistrat es-tu\u00A0?', href: '/quiz', labelDesk:'Les métiers de la magistrature', hrefDesk: '/les-metiers' },
  { label: 'Les métiers de la magistrature', href: '/les-metiers', labelDesk:'L’ENM', hrefDesk: '/ENM' },
  { label: 'L\'école nationale de la magistrature', href: '/ENM', labelDesk:'Étapes d’un procès', hrefDesk: '/les-etapes-proces' },
  { label: 'Les grandes étapes d\'un procès', href: '/les-etapes-proces', labelDesk:'Les carrières dans la magistrature', hrefDesk: '/carriere-dans-la-magistrature' },
  { label: 'Une carrière dans la magistrature', href: '/carriere-dans-la-magistrature', labelDesk:'Rencontrons-nous', hrefDesk: '/rencontrons-nous' },
  { label: 'Rencontrons-nous', href: '/rencontrons-nous', labelDesk:'Les classes Prépas Talents de l’ENM', hrefDesk: '/classes-prepas-talents-enm' },
  { label: 'Les classes Prépas Talents de l\'ENM', href: '/classes-prepas-talents-enm', labelDesk:'Quel magistrat es-tu\u00A0?', hrefDesk: '/quiz' },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
