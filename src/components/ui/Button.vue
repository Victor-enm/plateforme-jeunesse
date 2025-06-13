<template>
    <component
      :is="componentType"
      :to="to"
      :href="href"
      class="inline-block"
      :class="buttonClasses"
      v-bind="linkAttrs"
    >
      <slot />
    </component>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'white',
    },
    to: String,   // Lien interne
    href: String, // Lien externe
  })
  
  // Détermine le type de composant à utiliser
  const componentType = computed(() => {
    if (props.to) return RouterLink
    if (props.href) return 'a'
    return 'button'
  })
  
  // Ajoute target="_blank" et rel="noopener" si lien externe
  const linkAttrs = computed(() => {
  if (!props.href) return {}

  // Si c'est une ancre interne, ne pas ajouter target="_blank"
  if (props.href.startsWith('#')) return {}

  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
})
  
  // Gère les classes selon le variant
  const buttonClasses = computed(() => {
    switch (props.variant) {
      case 'violet':
        return 'px-6 py-3 bg-transparent text-violet border border-violet rounded-full lg:hover:bg-violet-900 transition font-semibold cursor-pointer';
      case 'fullViolet':
        return 'px-6 py-3 bg-violet text-gris border border-violet rounded-full lg:hover:bg-violet-900 transition font-semibold cursor-pointer';
      case 'fullWhite':
        return 'px-6 py-3 bg-neutral-50 text-rouge rounded-full lg:hover:bg-red-700 transition font-semibold cursor-pointer';
      case 'white':
      default:
        return 'px-6 py-3 bg-transparent text-gris border border-gris rounded-full lg:hover:bg-gray-900 transition font-semibold cursor-pointer';
      case 'red':
        return 'px-6 py-3 bg-transparent text-rouge border border-rouge rounded-full lg:hover:bg-red-900 transition font-semibold cursor-pointer';
      case 'fullRed':
        return 'px-6 py-3 bg-rouge text-gris border border-rouge rounded-full lg:hover:bg-red-900 transition font-semibold cursor-pointer';
    }
  })
  </script>
  