<template>
    <div
      class="rounded-2xl p-6 max-w-md w-full select-none text-center border"
      :class="css"
    >
      <h3 v-if="title" class="text-xl font-inter  mb-4">{{ title }}</h3>
  
      <p v-if="description" class="text-xs font-inter">{{ description }}</p>
    </div>
  </template>
  
  <script setup>  
  const props = defineProps({
    title: String,
    description: String,
    css: String,
  })

  </script>
  
  <style scoped>
  </style>
  