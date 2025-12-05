<template>
  <div class="font-sans">
    <Transition name="fade">
      <Loader v-if="showLoader" />
    </Transition>
    
    <Transition name="fade">
      <div v-if="!showLoader">
        <Header />
        <router-view />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, onMounted } from "vue";
import Loader from "@/components/EMCQLoader2.vue";

const showLoader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 5000); 
});
</script>

<style>
/* Classes CSS pour les transitions (Tailwind ne suffit pas seul pour Vue transitions) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
