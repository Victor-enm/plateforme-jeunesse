<!-- App.vue -->
<template>
  <div class="font-sans">
    <Loader v-if="showLoader" />
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

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 2000); // 2s
});

</script>
