<template>
    <div
      class="rounded-2xl p-6 max-w-md w-full select-none text-center border-2 border-violet"
      :class="css"
    >
      <h3 v-if="title" class="text-xl font-sans mb-4">{{ title }}</h3>
  
      <p v-if="description" class="text-s font-inter"
      :class="typoDesc"
      >{{ description }}</p>
    </div>
  </template>
  
  <script setup>  
  const props = defineProps({
    title: String,
    description: String,
    css: String,
    typoDesc: String,
  })

  </script>
  
  <style scoped>
  </style>
  