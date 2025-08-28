<template>
    <div
      class="bg-gris rounded-2xl shadow-md p-6 max-w-md w-full cursor-pointer select-none transition text-center lg:max-w-xs"
    >
      <h2 class="text-xl font-bold text-violet mb-4">{{ title }}</h2>
  
        <div
          class="overflow-hidden text-violet mb-4 font-inter"
        >
          {{ description }}
        </div>
  
      <div class="text-violet font-inter flex items-center space-x-2 justify-center">
        <router-link 
        :to="to">
        > Je découvre
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    title: String,
    description: String,
    to: String,
  })
  
  </script>
  
  <style scoped>
  
  </style>
  