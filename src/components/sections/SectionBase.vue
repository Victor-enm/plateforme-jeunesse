<template>
    <section
        class="snap-start w-full h-screen flex flex-col items-center justify-center px-10 text-center scroll-mt-20 pb-20"
        :class="bgColor"
        :id="ancre"

        
    >   <div class="w-20 h-20 mb-5">
          <SvgIcon v-if="iconName" :name="iconName" className="object-contain mb-4 text-violet" />
        </div>
        <h2 class="text-4xl md:text-4xl mb-4"
        :class="txtColor">{{ title }}</h2>
        <p class="text-base md:text-lg mb-10 max-w-xl font-inter"
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
  ancre: String,
  buttons: {
    type: Array,
    default: () => []
  }, 
  iconName: String,
})
</script>