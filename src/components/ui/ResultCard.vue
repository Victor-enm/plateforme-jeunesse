<template>
  <div v-if="result" class="w-full max-w-xl text-center space-y-6">
    <h2 class="text-3xl font-bold text-violet 2xl:text-5xl">{{ result.title }}</h2>
    <p class="text-base md:text-lg mb-10 max-w-xl font-inter text-violet">{{ result.description }}</p>
    <div class="flex flex-col justify-center gap-4">
      <router-link
        :to="result.to"
        class="px-6 py-3 bg-rouge text-gris border border-rouge rounded-full md:hover:bg-transparent md:hover:text-rouge md:hover:border-rouge transition font-semibold cursor-pointer"
      >
        Voir la fiche métier
    </router-link>
      <button class="px-6 py-3 bg-transparent text-rouge border border-rouge rounded-full md:hover:bg-rouge md:hover:text-gris md:hover:border-rouge transition font-semibold cursor-pointer"  @click="$emit('reset')">
        Recommencer
      </button>
    </div>
  </div>
  <div v-else class="text-center">
    <p class="text-violet italic">Aucun résultat à afficher.</p>
    <button class="mt-4 text-violet underline" @click="$emit('reset')">Recommencer le quiz</button>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
});
</script>
