<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-25 pb-32"
        :class="bgColor"        
    >
   <video
      controls
      class="w-full h-full max-w-4xl rounded-xl shadow-lg"
      :src="videoUrl"
      :poster="vignette"
    />
    </section>
</template>

<script setup>

const props = defineProps({
    videoUrl: String,
    vignette: String,
    bgColor: String,
})
</script>