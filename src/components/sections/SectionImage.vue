<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32"
        :class="bgColor"        
    >
    <div class="w-full h-auto flex items-center justify-center mb-5">
          <img v-if="imgSrc" :src="imgSrc" className="object-contain mb-4 text-violet rounded-2xl" />
        </div>
    <div v-if="nombre" class="relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-gris mb-5">
        <span class="text-6xl text-gris">
            {{ nombre }}
        </span>
    </div>
    <div class="max-h-full overflow-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-4"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter"
        :class="txtColor" 
        v-html="text"
        ></p>
    </div>
    </section>
</template>

<script setup>

const props = defineProps({
  title: String,
  text: String,
  imgSrc: String,
  nombre: Number,
  bgColor: {
    type: String,
    default: 'bg-rouge',
  },
  txtColor: {
    type: String,
    default: 'text-gris',
  },
 
})
</script>