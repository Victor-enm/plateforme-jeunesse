<!-- src/components/SvgIcon.vue -->
<template>
    <div v-if="svgContent" v-html="svgContent" :class="className" />
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps<{
    name: string;
    className?: string;
  }>();
  
  // Importer tous les fichiers SVG du dossier
  const icons = import.meta.glob('/src/assets/icons/*.svg', {
    import: 'default',
    eager: true,
    query: '?raw',
  });
  
  // Récupérer le contenu SVG correspondant au nom fourni
  const svgContent = computed(() => {
    const path = `/src/assets/icons/${props.name}.svg`;
    return icons[path] || null;
  });
  </script>
  