<template>
    <div
      class="bg-gris rounded-2xl shadow-md p-6 max-w-md w-full cursor-pointer select-none transition text-center lg:max-w-xs"
      @click.prevent="toggle"
    >
      <h2 class="text-xl text-violet mb-4">{{ title }}</h2>
  
      <transition name="slide">
        <div
          v-show="isOpen"
          ref="content"
          class="overflow-hidden text-violet mb-4 font-inter"
        >
          {{ description }}
        </div>
      </transition>
  
      <div class="text-violet font-inter flex items-center space-x-2 justify-center">
        <span>{{ isOpen ? '˄ Réduire' : '> Je découvre' }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    title: String,
    description: String,
  })
  
  const isOpen = ref(false)
  const toggle = () => (isOpen.value = !isOpen.value)
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
   transition: max-height 0.3s ease, opacity 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .slide-enter-to,
  .slide-leave-from {
    max-height: 500px;
    opacity: 1;
  }
  </style>
  