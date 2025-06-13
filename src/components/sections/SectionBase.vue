<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32"
        :class="bgColor"
        :id="ancre"

        
    >  
    <div v-if="imgSrc" class="w-full h-auto flex items-center justify-center mb-5">
          <img  :src="imgSrc" className="object-contain mb-4 text-violet rounded-2xl" />
        </div>
    <div v-if="iconName" class="w-20 h-20 mb-5"
        :class="pictoSize">
          <SvgIcon  :name="iconName" className="object-contain mb-4 text-violet" />
        </div>
        <h2 class="text-4xl md:text-4xl mb-4"
        :class="txtColor">{{ title }}</h2>
        <p v-if="text" class="text-base md:text-lg mb-10 max-w-xl font-inter"
        :class="txtColor"
        v-html="text">
           
        </p>
        <Button
          v-for="(button, index) in buttons"
          :key="index"
          :variant="button.variant"
          :to="button.to"
          :href="button.href"
          @click="button.onClick"
          :class="button.class"
        >
          {{ button.text }}
        </Button>

        <div v-if="card" class="w-full max-w-xl space-y-4">
            <SimpleCard
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :class="card.css"
            />
        </div>

        <p v-if="textSecondary" class="text-base md:text-lg mt-10 max-w-xl font-inter"
        :class="txtColor"
        v-html="textSecondary"></p>

        <div v-if="imgSrc2" class="w-full h-auto flex items-center justify-center mb-5">
          <img  :src="imgSrc2" className="object-contain mt-4 text-violet rounded-2xl" />
        </div>
      </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  textSecondary: String,
  bgColor: {
    type: String,
    default: 'bg-rouge',
  },
  pictoSize : String,
  txtColor: {
    type: String,
    default: 'text-violet',
  },
  ancre: String,
  buttons: {
    type: Array,
    default: () => []
  }, 
  iconName: String,
  imgSrc: String,
  imgSrc2: String,
  card: Boolean,
  cards: {
    type: Array, 
    default: () => [],
 },
})
</script>