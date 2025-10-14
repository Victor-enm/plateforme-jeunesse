<template>
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <!-- Intro Starter -->
    <SectionBase
      v-if="currentStep === 'intro'"
      title="Quel magistrat(e) sommeille en toi&nbsp;?"
      text="Juge des enfants, procureur de la république, juge d’instruction… Découvre avec ce quiz d’environ 5 minutes quel métier de magistrat(e) est fait pour toi&nbsp;!"
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

  const sortedCounts = Object.entries(counts).sort(([, countA], [, countB]) => countB - countA);

  let resultKey = '';

  // Cas de l'égalité parfaite (si toutes les réponses sont égales)
  const allCountsEqual = sortedCounts.length > 0 && sortedCounts.every(([, count]) => count === sortedCounts[0][1]);
  if (allCountsEqual) {
    // S'assurer qu'il y a au moins une réponse pour éviter un cas vide
    if (sortedCounts.length === 4) { // Vérifie s'il y a 4 types de réponses (a, b, c, d)
      resultKey = 'ABCD'; // Égalité parfaite entre a, b, c, d
    } else if (sortedCounts.length > 1) { // Gérer les cas où il y a égalité entre moins de 4 réponses
        // Par exemple, si toutes les réponses sont 'a' et 'b' avec le même compte
        const types = sortedCounts.map(([type]) => type).sort().join(''); // 'AB', 'AC', etc.
        resultKey = types.toUpperCase();
    } else if (sortedCounts.length === 1) { // Cas où il n'y a qu'un seul type de réponse
        resultKey = sortedCounts[0][0].toUpperCase();
    } else { // Aucun résultat
        return null;
    }
  } else {
    // Cas des majorités simples ou doubles
    const topType = sortedCounts[0]?.[0];
    const topCount = sortedCounts[0]?.[1] || 0;
    const secondType = sortedCounts[1]?.[0];
    const secondCount = sortedCounts[1]?.[1] || 0;

    if (topCount > secondCount) {
      // Majorité simple (A, B, C ou D)
      resultKey = topType.toUpperCase();
    } else if (topCount === secondCount && topCount > 0) {
      // Majorité double (AB, AC, AD, BC, BD, CD)
      // Assure que les types sont triés alphabétiquement pour une clé cohérente (ex: AB, pas BA)
      const combinedTypes = [topType, secondType].sort().join('').toUpperCase();
      resultKey = combinedTypes;
    } else {
        // Gérer le cas où il n'y a pas de réponses ou un cas non prévu
        return null; // Ou une valeur par défaut
    }
  }

  // Retourne le résultat correspondant à la clé trouvée
  return results[resultKey];
});
</script>
