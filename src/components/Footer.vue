<template>
    <footer class="bg-gris text-center py-10 px-20 text-sm text-neutral-700 snap-start">
      <!-- Texte principal -->
      <p class="mb-4 font-inter">Suis l’actualité de l’ENM sur nos différents réseaux !</p>
  
      <!-- Réseaux sociaux -->
      <div class="flex justify-center gap-4 mb-4 text-violet">
        <a href="#" aria-label="Instagram">
          <SvgIcon name="instagram" alt="Instagram" class="w-6 h-6" />
        </a>
        <a href="#" aria-label="Facebook">
          <SvgIcon name="facebook" alt="Facebook" class="w-6 h-6" />
        </a>
       
        <a href="#" aria-label="LinkedIn">
          <SvgIcon name="linkedin" alt="LinkedIn" class="w-6 h-6" />
        </a>
      </div>
  
      <!-- Liens légaux -->
      <div class="flex justify-center gap-6 font-inter no-underline mb-4">
        <RouterLink to="/cookies" class=" hover:text-violet-700">Cookies</RouterLink>
        <RouterLink to="/mentions-legales" class=" hover:text-violet-700">Mentions légales</RouterLink>
        <RouterLink to="/confidentialite" class=" hover:text-violet-700">Confidentialité</RouterLink>
      </div>
      <div class="flex justify-center gap-6 font-inter">
        <p class="mb-1 font-inter">© 2025 ENM - Tous droits réservés</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  