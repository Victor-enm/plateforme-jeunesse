<template>
  <main class="h-screen w-screen overflow-hidden">
    <!-- Intro Starter -->
    <SectionBase
      v-if="currentStep === 'intro'"
      title="Quel magistrat(e) sommeille en toi ?"
      text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi !"
      txtColor="text-gris"
      bgColor="bg-rouge"
      :buttons="[
        {
          text: 'Commencer le test !',
          to: '',
          variant: 'fullWhite',
          class: 'lg:mt-5',
          onClick: startQuiz,
        },
      ]"
    />
    <!-- Questions -->
    <section
      v-if="currentStep === 'quiz'"
      class="w-full h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-34 bg-gris"
    >
      <QuestionCard
        :question="questions[currentIndex]"
        :index="currentIndex"
        :total="questions.length"
        @answered="handleAnswer"
        @back="prev"
      />
    </section>

    <!-- Résultat -->
    <section
      v-if="currentStep === 'result'"
      class="w-full h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-34 bg-gris"
    >
      <ResultCard :result="computedResult" @reset="resetQuiz" />
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { questions, results } from "../data/quizData.js";
import QuestionCard from "../components/ui/QuestionCard.vue";
import ResultCard from "../components/ui/ResultCard.vue";

const currentStep = ref("intro");
const currentIndex = ref(0);
const responses = ref([]);

// ⚡ Commencer le quiz
function startQuiz() {
  currentStep.value = "quiz";
  currentIndex.value = 0;
  responses.value = [];
}

// ✅ Lorsqu’une réponse est cliquée
function handleAnswer({ index, type }) {
  responses.value[index] = type;

  if (index + 1 < questions.length) {
    currentIndex.value++;
  } else {
    currentStep.value = "result";
  }
}


// 🔙 Retour à la question précédente
function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}


// 🔄 Réinitialiser le quiz
function resetQuiz() {
  responses.value = [];
  currentIndex.value = 0;
  currentStep.value = "intro";
}


const computedResult = computed(() => {
  const counts = responses.value.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  return results[topType];
});
</script>
