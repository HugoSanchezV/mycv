<template>
  <div ref="target" :class="containerClasses" :style="containerStyles">
    <slot />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String, // 'up', 'down', 'left', 'right'
    default: 'up'
  },
  duration: {
    type: Number,
    default: 700
  },
  distance: {
    type: Number,
    default: 30 // px
  }
})

const target = ref(null)
const isVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  {
    threshold: 0.05, // Trigger earlier
    rootMargin: '0px 0px -50px 0px'
  }
)

const containerClasses = computed(() => {
  const base = 'transition-all ease-out transform will-change-transform will-change-opacity'
  
  if (isVisible.value) {
    return `${base} opacity-100 translate-x-0 translate-y-0`
  }

  let transformClass = ''
  switch (props.direction) {
    case 'up': transformClass = 'translate-y-12'; break;
    case 'down': transformClass = '-translate-y-12'; break;
    case 'left': transformClass = '-translate-x-12'; break;
    case 'right': transformClass = 'translate-x-12'; break;
    default: transformClass = 'translate-y-12';
  }

  return `${base} opacity-0 ${transformClass}`
})

const containerStyles = computed(() => {
  return {
    transitionDelay: `${props.delay}ms`,
    transitionDuration: `${props.duration}ms`
  }
})
</script>
