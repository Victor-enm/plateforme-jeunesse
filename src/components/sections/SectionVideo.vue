<template>
    <section
        class="snap-start w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-32 pb-32"
        :class="bgColor"        
    >
   <!-- <video
      controls
      class="w-full h-full max-w-4xl rounded-xl shadow-lg"
      :src="videoUrl"
      :poster="vignette"
    />-->
    <iframe 
    class="w-full h-full max-h-screen rounded-2xl aspect-[9/16]"
    :src="videoId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
</template>

<script setup>

const props = defineProps({
    bgColor: String,
    videoId: String,
})
</script>