<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-45 2xl:flex-row"
        :class="bgColor"   
        :id="ancre"

    >
    <div v-if="imgSrc" class="w-full h-auto flex items-center justify-center mb-5">
          <img loading="lazy" :src="imgSrc" className="object-contain mb-4 text-violet rounded-2xl" />
        </div>
    <div v-if="nombre" :class="borderColor" class="relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-gris mb-5 pb-3">
        <span :class="txtColor" class="text-6xl">
            {{ nombre }}
        </span>
    </div>
    <div class="max-h-full overflow-auto px-4 lg:flex">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 2xl:text-5xl"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter"
        :class="txtColor" 
        v-html="text"
        ></p>
    </div>

    <div v-if="cardTitle" class="bg-gris rounded-2xl shadow-md p-6 max-w-md w-full text-center"
    :class="cardBg">
      <Piece v-if="piece"
      :class="piece"/>
      <h3>{{ cardTitle }}</h3>
      <p class="text-m md:text-s max-w-xl font-inter"
        v-html="cardText">
      </p>
    </div>
    </section>
</template>

<script setup>
import Piece from '@/assets/icons/piece.svg'

const props = defineProps({
  title: String,
  text: String,
  imgSrc: String,
  nombre: Number,
  ancre: String,
  piece: String,
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