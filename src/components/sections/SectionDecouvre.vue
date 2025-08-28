<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-40"
        :class="bgColor"
        :id="ancre"

        
    >   
    <div class="max-h-full overflow-auto px-4 flex flex-col items-center">
        <h2 class="text-4xl md:text-4xl mb-4 lg:text-8xl lg:w-4xl"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter"
        :class="txtColor" 
        v-html="text"
        >
            
        </p>
        

        <div v-if="ExpandableCards" class="w-full max-w-xl space-y-4 lg:flex lg:justify-evenly lg:flex-wrap lg:max-w-6xl">
            <ExpandableCard
                v-for="(card, index) in ExpandableCards"
                :key="index"
                :title="card.title"
                :description="card.description"
            />
        </div>
        <div v-if="DecouvreCards" class="w-full max-w-xl space-y-4 lg:flex lg:justify-evenly lg:flex-wrap lg:max-w-6xl">
            <DecouvreCard
                v-for="(card, index) in DecouvreCards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :to="card.to"
            />
        </div>
    </div>
    </section>
</template>

<script setup>
import ExpandableCard from '../ui/AccordeonCard.vue' 
import DecouvreCard from '../ui/DecouvreCard.vue';

const props = defineProps({
  title: String,
  text: String,
  ancre: String,
  to: String,
  bgColor: {
    type: String,
    default: 'bg-rouge',
  },
  txtColor: {
    type: String,
    default: 'text-gris',
  },
 ExpandableCards: {
    type: Array, 
    default: () => [],
 },
 DecouvreCards: {
    type: Array, 
    default: () => [],
 },
})
</script>