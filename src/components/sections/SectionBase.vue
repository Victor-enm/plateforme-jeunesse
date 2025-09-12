<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32 lg:pt-34"
        :class="bgColor"
        :id="ancre"

        
    >  
    <div v-if="imgSrc" class="w-full h-auto flex items-center justify-center mb-5">
          <img  :src="imgSrc" className="object-contain mb-4 text-violet rounded-2xl" />
        </div>
    <div v-if="iconName" class="w-20 h-20 mb-5 lg:w-40 lg:h-40"
        :class="pictoSize">
          <SvgIcon  :name="iconName" className="object-contain mb-4 text-violet" />
        </div>
        <h2 class="text-4xl lg:text-2xl mb-4  xl:text-8xl lg:w-4xl"
        :class="txtColor">{{ title }}</h2>

        <div 
        :class="responsivTxt"
        class="flex flex-col items-center justify-center"
        >
        <p v-if="text" class="text-base text-center md:text-lg mb-10 lg:mb-0 max-w-xl font-inter"
        :class="txtColor"
        v-html="text">
        </p>
        <span><Button
          v-for="(button, index) in buttons"
          class="lg:text-2xl"
          :key="index"
          :variant="button.variant"
          :to="button.to"
          :href="button.href"
          @click="button.onClick"
          :class="button.class"
        >
          {{ button.text }}
        </Button>
        </span>
        </div>

        <div v-if="card" class="w-full max-w-xl space-y-4 flex flex-col items-center mt-5">
            <SimpleCard
                v-for="(card, index) in cards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :class="card.css"
                :typoDesc="card.typoDesc"
            />
        </div>
        <h2 v-if="titleSecondary" class="text-4xl lg:text-2xl -mb-4 xl:text-8xl lg:w-4xl"
        :class="txtColor"> {{ titleSecondary }}</h2>
        <p v-if="textSecondary" class="text-base md:text-lg mt-10 max-w-xl font-inter"
        :class="txtColor"
        v-html="textSecondary"></p>

        <div v-if="imgSrc2" class="w-full h-auto flex items-center justify-center mb-5">
          <img  :src="imgSrc2" className="object-contain mt-4 text-violet rounded-2xl" />
        </div>

        <div v-if="Rs" class="w-80 h-auto flex items-center justify-evenly flex-wrap text-gris lg:w-auto lg:mt-10 lg:justify-between">
          <a href="https://www.instagram.com/enm_france/" target="_blank" aria-label="Instagram" class="w-16 h-16 mr-5 lg:w-25 lg:h-25">
            <InstagramIcon class="w-full h-full " />
          </a>
        <a href="https://www.facebook.com/EcoleNationaleMagistrature" target="_blank" aria-label="Facebook" class="w-16 h-16 mr-5 lg:w-25 lg:h-25">
            <FacebookIcon class="w-full h-full " />
          </a>
          
          <a href="https://www.linkedin.com/company/3851377/" target="_blank" aria-label="Linkedin" class="w-16 h-16 mr-5 lg:w-25 lg:h-25">
            <LinkedinIcon class="w-full h-full lg:mt-0" />
          </a>

          <a href="https://www.youtube.com/@ecolenationaledelamagistrature" target="_blank" aria-label="Youtube" class="w-16 h-16 mr-5 lg:w-25 lg:h-25">
            <YouTubeIcon class="w-full h-full lg:mt-0" />
          </a>
        </div>
      </section>
</template>

<script setup>
import InstagramIcon from '@/assets/icons/instagram.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import YouTubeIcon from '@/assets/icons/youtube_rs.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

const props = defineProps({
  title: String,
  text: String,
  responsivTxt: String,
  textSecondary: String,
  titleSecondary: String,
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
  Rs: Boolean,
  cards: {
    type: Array, 
    default: () => [],
 },
})
</script>