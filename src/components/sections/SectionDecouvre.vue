<template>
    <section
        class="snap-start w-full h-screen flex flex-col items-center justify-center px-4 text-center"
        :class="bgColor"

        
    >   
        <h2 class="text-3xl md:text-4xl font-bold mb-4"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter"
        :class="txtColor">
            {{ text }}
        </p>
        

        <div class="w-full max-w-xl space-y-4">
            <ExpandableCard
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :description="card.description"
            />
        </div>
    </section>
</template>

<script setup>
import ExpandableCard from '../ui/AccordeonCard.vue' 

const props = defineProps({
  title: String,
  text: String,
  bgColor: {
    type: String,
    default: 'bg-rouge',
  },
  txtColor: {
    type: String,
    default: 'text-gris',
  },
 cards: {
    type: Array, 
    default: () => [],
 },
})
</script>