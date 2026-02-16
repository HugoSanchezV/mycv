<template>
  <button 
    @click="toggleDark()"
    class="relative p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
    :class="isDark ? 'bg-slate-800 text-emerald-400 hover:bg-slate-700' : 'bg-white text-yellow-500 shadow-lg shadow-yellow-500/20 hover:bg-slate-50 border border-slate-200'"
    aria-label="Toggle Dark Mode"
  >
    <div class="relative w-6 h-6 flex items-center justify-center overflow-hidden">
      <!-- Sun Icon -->
      <svg 
        class="w-6 h-6 absolute transition-all duration-500 ease-spring"
        :class="isDark ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'"
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
      </svg>
      
      <!-- Moon Icon -->
      <svg 
        class="w-5 h-5 absolute transition-all duration-500 ease-spring"
        :class="isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'"
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.ease-spring {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
