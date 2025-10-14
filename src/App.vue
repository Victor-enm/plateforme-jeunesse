<!-- App.vue -->
<template>
  <div class="font-sans">
    <Loader v-if="showLoader" 
  class="transition-opacity duration-500 ease-in-out"
  :class="{ 'opacity-0': isFadingOut }"/>
  <div v-else>
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, onMounted } from "vue";
import Loader from "@/components/loader.vue";

const showLoader = ref(true);
const isFadingOut = ref(false);

onMounted(() => {
  // Démarre l'animation de fondu après 1.5s
  setTimeout(() => {
    isFadingOut.value = true;
  }, 2500);

  setTimeout(() => {
    showLoader.value = false;
  }, 3100); // 2s
});

</script>
