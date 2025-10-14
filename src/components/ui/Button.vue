<template>
    <component
      :is="componentType"
      :to="to"
      :href="href"
      class="inline-block 2xl:text-4xl 2xl:pt-5 2xl:pb-5"
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
        return 'px-6 py-3 bg-transparent text-violet border border-violet rounded-full md:hover:bg-violet md:hover:text-gris transition font-semibold cursor-pointer';
      case 'fullViolet':
        return 'px-6 py-3 bg-violet text-gris border border-violet rounded-full md:hover:bg-gris md:hover:text-violet transition font-semibold cursor-pointer';
      case 'fullWhite':
        return 'px-6 py-3 bg-neutral-50 border text-rouge rounded-full md:hover:bg-transparent md:hover:text-gris md:hover:border-gris transition font-semibold cursor-pointer';
      case 'white':
      default:
        return 'px-6 py-3 bg-transparent text-gris border border-gris rounded-full md:hover:bg-gris md:hover:text-rouge md:hover:border-gris transition font-semibold cursor-pointer';
      case 'red':
        return 'px-6 py-3 bg-transparent text-rouge border border-rouge rounded-full md:hover:bg-rouge md:hover:text-gris md:hover:border-rouge transition font-semibold cursor-pointer';
      case 'fullRed':
        return 'px-6 py-3 bg-rouge text-gris border border-rouge rounded-full md:hover:bg-transparent md:hover:text-rouge md:hover:border-gris transition font-semibold cursor-pointer';
    }
  })
  </script>
  