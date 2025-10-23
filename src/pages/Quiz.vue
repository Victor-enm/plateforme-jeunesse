<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <!-- Intro Starter -->
    <SectionBase
      v-if="currentStep === 'intro'"
      title="Quel magistrat(e) sommeille en toi&nbsp;?"
      text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi&nbsp;!"
      txtColor="text-gris 2xl:pb-6"
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
      class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-34 bg-gris"
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

  // Trie les réponses par ordre décroissant de fréquence
  const sortedCounts = Object.entries(counts).sort(([, countA], [, countB]) => countB - countA);

  // Cas où il n'y a aucune réponse
  if (sortedCounts.length === 0) {
    return null;
  }

  // Récupère le nombre de réponses uniques
  const uniqueResponseTypes = sortedCounts.length;

  // Cas d'égalité parfaite (toutes les réponses ont le même nombre)
  const allCountsEqual = sortedCounts.every(([, count]) => count === sortedCounts[0][1]);

  if (allCountsEqual) {
    // Si toutes les réponses sont égales et qu'il y a 4 types (A, B, C, D)
    if (uniqueResponseTypes === 4) {
      return results['ABCD'];
    }
    // Si toutes les réponses sont égales mais moins de 4 types (ex: A, B, C)
    const types = sortedCounts.map(([type]) => type).sort().join('').toUpperCase();
    return results[types];
  }

  // Cas des majorités simples ou multiples
  const topCount = sortedCounts[0][1];
  const secondCount = sortedCounts[1]?.[1] || 0;
  const thirdCount = sortedCounts[2]?.[1] || 0;
  const fourthCount = sortedCounts[3]?.[1] || 0;

  // Cas d'une majorité claire (ex: A > B, C, D)
  if (topCount > secondCount) {
    return results[sortedCounts[0][0].toUpperCase()];
  }
  // Cas d'une égalité double (ex: A = B > C, D)
  else if (topCount === secondCount && topCount > thirdCount) {
    const combinedTypes = [sortedCounts[0][0], sortedCounts[1][0]].sort().join('').toUpperCase();
    return results[combinedTypes];
  }
  // Cas d'une égalité triple (ex: A = B = C > D)
  else if (topCount === secondCount && topCount === thirdCount && topCount > fourthCount) {
    const combinedTypes = [sortedCounts[0][0], sortedCounts[1][0], sortedCounts[2][0]].sort().join('').toUpperCase();
    return results[combinedTypes];
  }
  // Cas d'une égalité quadruple (ex: A = B = C = D)
  else if (topCount === secondCount && topCount === thirdCount && topCount === fourthCount) {
    return results['ABCD'];
  }
  // Cas non prévu (ne devrait pas arriver si le code est correct)
  else {
    return null;
  }
});

</script>
