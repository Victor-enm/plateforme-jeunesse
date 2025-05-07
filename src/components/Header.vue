<template>
  <header class="bg-gris shadow-md fixed top-0 left-0 right-0 z-50 w-full h-[10vh]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img src="../assets/icons/logo-emcq.svg" alt="Logo" class="w-[62px] h-auto sm:h-12" />
      </RouterLink>

      <!-- Mobile burger -->
      <button
        type="button"
        class="sm:hidden p-2 text-violet hover:text-violet focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-50"
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
      <nav class="hidden sm:flex space-x-4">
        <NavLink v-for="item in navItems" :key="item.label" :href="item.href">{{ item.label }}</NavLink>
      </nav>
    </div>

    <!-- Mobile Menu Fullscreen -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="sm:hidden fixed inset-0 bg-gris flex flex-col items-center justify-center space-y-4 text-center px-6 z-10"
        id="mobile-menu"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-violet border-2 border-violet px-4 py-3 rounded-full text-lg font-medium w-full max-w-xs  first:text-gris first:bg-rouge first:border-rouge first:mb-15"
        >
          {{ item.label }}
        </a>
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

const navItems = [
  { label: 'Quel magistrat es-tu ?', href: '/autre' },
  { label: 'Les métiers de la magistrature', href: '/les-metiers' },
  { label: 'L\'école nationale de la magistrature', href: '#' },
  { label: 'Les grandes étapes d\'un procès', href: '#' },
  { label: 'Les carrières dans la magistrature', href: '#' },
  { label: 'Rencontrons-nous', href: '#' },
  { label: 'Les classes Prépas Talents de l\'ENM', href: '#' },
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
