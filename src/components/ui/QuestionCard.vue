<template>
  <h2 class="text-4xl font-bold text-violet mb-5 2xl:text-7xl">
      {{ index + 1 }} / {{ total }}
    </h2>
    <h2 class="text-2xl font-bold text-violet mb-5 2xl:text-3xl">{{ question.text }}</h2>
    
    <div class="flex flex-col gap-4">
      <button
        v-for="option in question.options"
        :key="option.text"
        :class="[
        'border border-violet px-16 py-4 rounded-2xl transition-all duration-200 ease-in-out font-inter cursor-pointer 2xl:text-xl', // Base styles for all buttons
        {
          'bg-violet text-white ': selectedOptionType === option.type, // Styles for the selected button
          'bg-transparent text-violet hover:bg-violet hover:text-gris': selectedOptionType !== option.type // Styles for unselected buttons
        }
      ]"
        @click="answer(option.type)"
      >
        {{ option.text }}
      </button>
    </div>
    <button
      v-if="index > 0"
      class="mt-6 text-sm text-violet underline cursor-pointer"
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
