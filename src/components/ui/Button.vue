<template>
    <button :class="buttonClasses" class="px-4 py-2 rounded font-semibold transition">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'
import { toRefs } from 'vue'

const props = defineProps({
    variant : {
        type: String,
        default: 'primary'
    }
})

const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary : 'bg-red-600 text-white hover:bg-red-600'
}

const buttonClasses = computed(() => variants[props.variant] || variants.primary)
</script>