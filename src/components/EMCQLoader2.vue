<script setup>
import { ref, onMounted, computed } from 'vue'

import Logo from '../assets/icons/animation/EMCQ.svg'
import EIcon from '../assets/icons/animation/E.svg'
import MIcon from '../assets/icons/animation/M.svg'
import CIcon from '../assets/icons/animation/C.svg'
import QIcon from '../assets/icons/animation/Q.svg'

const phase = ref('detach') // | 'detach' | 'merge' | 'logo'

const iconMap = { E: EIcon, M: MIcon, C: CIcon, Q: QIcon }

const letters = [
  { letter: 'E', from: { x: '-300%', y: '100%' }, to: { x: '15%', y: '15%' } },
  { letter: 'M', from: { x: '200%', y: '300%' }, to: { x: '35%', y: '15%' } },
  { letter: 'C', from: { x: '-220%', y: '450%' }, to: { x: '15%', y: '40%' } },
  { letter: 'Q', from: { x: '300%', y: '450%' }, to: { x: '35%', y: '40%' } }
]

const showLetters = computed(() => phase.value !== 'logo')
const showBubble = ref(false)
const showBubble2 = ref(false)
const emit = defineEmits(['finished'])

onMounted(() => {
  setTimeout(() => (phase.value = 'detach'), 800) // 0 → 1.2 s
  setTimeout(() => (phase.value = 'merge'), 1200)  // 1.2 → 2.2 s
  setTimeout(() => (phase.value = 'logo'), 2600)   // 2.2 → 3.2 s
  setTimeout(() => {
    showBubble.value = true
  }, 3600)
  setTimeout(() => {
    showBubble2.value = true
  }, 3600)
  setTimeout(() => emit('finished'), 5000)         // 3.2 → 4.0 s
})
</script>



<template>
  <transition name="fade">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gris"
    >
      <div class="relative flex h-72 w-80 items-center justify-center">
        <!-- PHRASE EN TEXTE (TAILLE NORMALE) -->
      

        <!-- LETTRES DÉCROCHÉES / QUI SE RAPPROCHENT -->
        <transition-group
          v-if="showLetters || phase === 'merge'"
          name="letter"
          tag="div"
          class="pointer-events-none absolute inset-0"
        >
          <div
            v-for="item in letters"
            :key="item.letter"
            class="absolute flex h-33 w-33 items-center justify-center"
            :style="{
              left: phase === 'detach' ? item.from.x : phase === 'merge' ? item.to.x : item.from.x,
              top:  phase === 'detach' ? item.from.y : phase === 'merge' ? item.to.y : item.from.y
            }"
          >
            <component
              :is="iconMap[item.letter]"
              class="h-full w-full drop-shadow-xl"
            />
          </div>
        </transition-group>

        <!-- LOGO EMCQ -->
        <transition name="logo">
          <div v-if="phase === 'logo'" class="flex items-center justify-center flex-col">
            <Logo
              alt="Logo"
              class="animate-emcq-bounce max-w-45 max-h-48 drop-shadow-2xl"
            />
          
              <!-- wrapper positionné en absolu -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center mb-3 z-50">
      <transition name="bubble">
        <span
          v-if="showBubble"
          class="bg-violet text-gris p-3 rounded-3xl"
        >
          Être magistrat
        </span>
      </transition>

      <transition name="bubble">
        <span
          v-if="showBubble2"
          class="bg-violet text-gris p-3 pt-0 rounded-3xl -mt-3"
        >
          c'est quoi ?
        </span>
      </transition>
    </div>

          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>


<style scoped>
/* fond */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

/* phrase */
.sentence-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.sentence-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.sentence-enter-active {
  transition: all 500ms cubic-bezier(0.16, 0.84, 0.44, 1);
}
.sentence-leave-active {
  transition: opacity 350ms ease-out;
}
.sentence-leave-to {
  opacity: 0;
}

/* lettres */
.letter-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.letter-enter-to {
  opacity: 1;
  transform: scale(1);
}
.letter-enter-active,
.letter-leave-active,
.letter-move {
  transition: all 650ms cubic-bezier(0.16, 0.84, 0.44, 1);
}
.letter-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* logo */
.logo-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.logo-enter-to {
  opacity: 1;
  transform: scale(1);
}
.logo-enter-active {
  transition: all 450ms cubic-bezier(0.2, 0.8, 0.3, 1);
}

.bubble-enter-from {
  opacity: 0;
  transform: translateY(300px); /* démarre plus bas */
}

.bubble-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.bubble-enter-active {
  transition: all 450ms cubic-bezier(0.16, 0.84, 0.44, 1);
}

/* bounce logo légèrement plus doux */
@keyframes emcq-bounce-once {
  0%   { transform: translateY(0) scale(1); }
  35%  { transform: translateY(-8px) scale(1.10); }
  70%  { transform: translateY(0) scale(0.95); }
  100% { transform: translateY(0) scale(1); }
}
.animate-emcq-bounce {
  animation: emcq-bounce-once 800ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 1 forwards;
}
</style>