<template>
  <router-link 
        :to="to"
        class="bg-gris rounded-2xl shadow-md p-6 max-w-md w-full cursor-pointer select-none transition text-center lg:max-w-xs flex flex-col">
  
      <h2 class="text-xl text-violet mb-4 2xl:text-3xl">{{ title }}</h2>
  
        <div
          class="overflow-hidden text-violet mb-4 font-inter"
        >
          {{ description }}
        </div>
      <div class="mt-auto">
      <div class="text-violet font-inter flex items-center space-x-2 justify-center 2xl:text-2xl">
        
        > Je découvre
      </div>
      </div>
        </router-link>

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
  