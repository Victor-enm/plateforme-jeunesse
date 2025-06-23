<template>
  <div v-if="result" class="w-full max-w-xl text-center space-y-6">
    <h2 class="text-3xl font-bold">{{ result.title }}</h2>
    <p class="text-lg">{{ result.description }}</p>
    <div class="flex justify-center gap-4">
      <router-link
        :href="result.to"
        class="bg-green-500 text-white px-4 py-2 rounded"
      >
        Voir la fiche métier
    </router-link>
      <button class="bg-gray-400 text-white px-4 py-2 rounded" @click="$emit('reset')">
        Recommencer
      </button>
    </div>
  </div>
  <div v-else class="text-center">
    <p class="text-gray-500 italic">Aucun résultat à afficher.</p>
    <button class="mt-4 text-blue-500 underline" @click="$emit('reset')">Recommencer le quiz</button>
  </div>
</template>

<script setup>
defineProps({
  result: Object,
});
</script>
