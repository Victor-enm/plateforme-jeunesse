<template>
    <section
        class="snap-start w-full h-screen flex flex-col items-center justify-center px-4 text-center"
        :class="bgColor"

        
    >   <div class="w-20 h-20">
          <SvgIcon v-if="iconName" :name="iconName" className="object-contain mb-4 text-violet" />
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl"
        :class="txtColor">
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
    default: 'bg-rouge',
  },
  txtColor: {
    type: String,
    default: 'text-violet',
  },
  buttonText: String,
  buttonVariant: {
    type: String,
    default: 'white',
  },
  buttonTo: String,   // Pour liens internes
  buttonHref: String, // Pour liens externes
  onClick: Function,  // Pour actions custom si ni to ni href
  iconName: String, // Nom de l'icône SVG sans extension
})
</script>