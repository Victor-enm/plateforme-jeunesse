<template>
    <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img class="h-8" src="/src/assets/vue.svg" alt="Logo" />
          </div>
  
          <!-- Menu mobile, burger aligné à droite -->
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden ml-auto">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-violet-800 hover:text-violet-500 hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="toggleMenu"
              aria-controls="mobile-menu"
              :aria-expanded="isMenuOpen.toString()"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  
          <!-- Menu Desktop -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Quel magistrat es-tu ?</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Les métiers de la magistrature</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >L'école nationale de la magistrature</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Les grandes étapes d'un procès</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Les carrières dans la magistrature</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Rencontrons-nous</a
              >
              <a
                href="#"
                class="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Les classes Prépas Talents de l'ENM</a
              >
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div
        class="sm:hidden fixed inset-0 bg-white z-40 transform transition-all duration-300"
        v-show="isMenuOpen"
        id="mobile-menu"
      >
        <div class="flex justify-end p-6">
          <button
            type="button"
            class="text-violet-800 hover:text-violet-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="toggleMenu"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-col items-stretch space-y-3 py-8 mx-15 text-center">
          <a
            href="#"
            class="text-white bg-red-600 block px-3 py-2 rounded-full text-lg font-medium mb-20"
            >Quel magistrat es-tu ?</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >Les métiers de la magistrature</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >L'école nationale de la magistrature</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >Les grandes étapes d'un procès</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >Les carrières dans la magistrature</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >Rencontrons-nous</a
          >
          <a
            href="#"
            class="text-violet-700 border-2 border-violet-700 block px-3 py-2 rounded-full text-lg font-medium"
            >Les classes Prépas Talents de l'ENM</a
          >
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  /* Ajout d'une ombre ou d'un effet de transition pour le menu mobile */
  </style>
  