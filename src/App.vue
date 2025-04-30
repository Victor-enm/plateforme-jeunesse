<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Button from './components/ui/Button.vue'

</script>

<template>
  <Header />
  <main class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <section class="h-screen w-screen snap-start bg-red-300 flex items-center justify-center">
      <h1 class="text-4xl font-bold">Section 1</h1>
      <Button variant="secondary"> Test </Button>
    </section>
    <section class="h-auto w-screen snap-start scroll-mt-16 bg-green-300 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">Section 2</h1>
      <p v-for="i in 50" :key="i" class="mb-2">Ligne {{ i }} — du texte pour tester le scroll libre dans cette section.</p>
      </section>
    <section class="h-screen w-screen snap-start bg-blue-300 flex items-center justify-center">
      <h1 class="text-4xl font-bold">Section 3</h1>
    </section>
  </main>

  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
