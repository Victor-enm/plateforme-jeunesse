<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-25 lg:flex-row lg:pl-0 lg:pr-0
        2xl:pt-10 2xl:pb-0"
        :class="bgColor"        
    >
    <div class="lg:basis-1/4 lg:h-screen
    2xl:basis-1/3">
    <div v-if="imgSrc" class="w-full h-auto flex items-center justify-center mb-5 lg:h-screen lg:w-full">
          <img loading="lazy" :src="imgSrc" className="object-contain mb-4 text-violet rounded-2xl lg:h-full lg:w-auto lg:object-cover" />
        </div>
    <div v-if="nombre" :class="borderColor" class="relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-gris mb-5 pb-3 lg:static lg:z-50 lg:-translate-y-150 2xl:w-50 2xl:h-50 2xl:border-4 xl:w-30 xl:h-30 xl:-translate-y-100 2xl:-translate-y-150">
        <span :class="txtColor" class="text-6xl 2xl:text-9xl xl:text-7xl">
            {{ nombre }}
        </span>
    </div>
    </div>
    <div class="max-h-full overflow-auto px-4 lg:basis-3/4 2xl:pr-50 2xl:pl-50 2xl:pt-6 lg:flex lg:flex-col lg:items-center 2xl:items-start">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 2xl:text-8xl 2xl:text-left"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter 2xl:text-left"
        :class="txtColor" 
        v-html="text"
        ></p>
    </div>

    <div v-if="cardTitle" class="bg-gris rounded-2xl shadow-md p-6 max-w-md w-full text-center"
    :class="cardBg">
      <h3>{{ cardTitle }}</h3>
      <p class="text-m md:text-s max-w-xl font-inter"
        v-html="cardText">
      </p>
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
  cardTitle: String,
  cardBg: String,
  cardText: String,
  borderColor: String,
})
</script>