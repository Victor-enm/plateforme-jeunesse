<template>
  <h2 class="text-4xl font-bold text-violet">
      {{ index + 1 }} / {{ total }}
    </h2>
    <h2 class="text-2xl font-bold text-violet">{{ question.text }}</h2>
    
    <div class="flex flex-col gap-4">
      <button
        v-for="option in question.options"
        :key="option.text"
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="answer(option.type)"
      >
        {{ option.text }}
      </button>
    </div>
    <button
      v-if="index > 0"
      class="mt-6 text-sm text-blue-600 underline"
      @click="$emit('back', index)"
    >
      ← Revenir à la question précédente
    </button>
  
</template>

<script setup>
const props = defineProps({
  question: Object,
  index: Number,
  total: Number,
});

const emit = defineEmits(["answered", "back"]);

function answer(type) {
  emit("answered", { index: props.index, type });
}
</script>
