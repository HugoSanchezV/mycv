<template>
  <header 
    class="sticky top-0 z-50 w-full transition-all duration-300"
    :class="isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' : 'bg-transparent border-transparent py-2'"
  >
    <div class="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24">
      
      <!-- Logo -->
      <a 
        href="#inicio" 
        class="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-opacity"
        aria-label="Ir al inicio"
      >
        <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-mono text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
          &lt;/&gt;
        </span>
        <span>Dev<span class="text-emerald-600 dark:text-emerald-400">Alejandro</span></span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-2">
        <a 
          v-for="link in links" 
          :key="link.name"
          :href="link.href"
          class="px-4 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
        >
          {{ link.name }}
        </a>
        
        <div class="pl-2 ml-2 border-l border-slate-200 dark:border-slate-800 h-6 flex items-center">
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>
        </div>
      </nav>

      <!-- Mobile Actions -->
      <div class="flex items-center gap-4 md:hidden">
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>

        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="relative z-50 p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left" :class="isMenuOpen ? 'rotate-45 translate-x-1' : ''"></span>
            <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300 opacity-100" :class="isMenuOpen ? 'opacity-0 scale-0' : ''"></span>
            <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300 transform origin-left" :class="isMenuOpen ? '-rotate-45 translate-x-1' : ''"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div 
        v-show="isMenuOpen" 
        class="absolute top-full left-0 w-full p-4 md:hidden"
      >
        <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl shadow-black/5 overflow-hidden ring-1 ring-black/5">
          <nav class="flex flex-col p-2">
            <a 
              v-for="link in links" 
              :key="link.name"
              :href="link.href"
              @click="isMenuOpen = false"
              class="flex items-center justify-between p-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium transition-all duration-300 group"
            >
              <span class="text-lg">{{ link.name }}</span>
              <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
]

// Scroll effect logic
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
