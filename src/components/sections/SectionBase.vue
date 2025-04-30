<template>
    <section
        class="snap-start w-full h-screen flex flex-col items-center justify-center px-4 text-center"
        :class="bgColor"
    >
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h2>
        <p class="text-base md:text-lg text-gray-800 mb-10 max-w-xl">
            {{ text }}
        </p>
        <Button
      v-if="buttonText"
      :variant="buttonVariant"
      :to="buttonTo"
      :href="buttonHref"
      @click="onClick"
    >
      {{ buttonText }}
    </Button>
        </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  bgColor: {
    type: String,
    default: 'bg-red-800',
  },
  buttonText: String,
  buttonVariant: {
    type: String,
    default: 'white',
  },
  buttonTo: String,   // Pour liens internes
  buttonHref: String, // Pour liens externes
  onClick: Function,  // Pour actions custom si ni to ni href
})
</script>