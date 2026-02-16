<template>
  <section id="skills" class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-500">
    
    <!-- Header -->
    <div class="max-w-3xl mb-16 relative z-10">
      <ScrollReveal>
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">
          Stack Tecnológico
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Arsenal <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Técnico</span>
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl">
          Selección estratégica de tecnologías enfocadas en rendimiento, escalabilidad y mantenibilidad a largo plazo.
        </p>
      </ScrollReveal>
    </div>

    <!-- Grid -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      <!-- Card 1: Backend (Large) -->
      <ScrollReveal class="md:col-span-2" :delay="100">
        <div class="group relative h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 lg:p-10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/></svg>
          </div>
          
          <div class="relative z-10">
            <div class="w-12 h-12 mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
            </div>

            <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Arquitectura Backend</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-lg text-lg leading-relaxed">
              Diseño de APIs RESTful y GraphQL escalables. Especialista en patrones de diseño, optimización de consultas SQL y seguridad de datos.
            </p>
            
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1.5 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-lg border border-red-100 dark:border-red-500/20">Laravel 11+</span>
              <span class="px-3 py-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-lg border border-purple-100 dark:border-purple-500/20">PHP 8.3</span>
              <span class="px-3 py-1.5 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-semibold rounded-lg border border-sky-100 dark:border-sky-500/20">Swoole / Octane</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Card 2: Frontend -->
      <ScrollReveal :delay="200">
        <div class="group relative h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          
          <div class="w-12 h-12 mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Frontend Reactivo</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
            Interfaces dinámicas SPA/SSR con gestión de estado compleja y UX fluida.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-md border border-emerald-100 dark:border-emerald-500/20">Vue 3</span>
            <span class="px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-100 dark:border-blue-500/20">Nuxt 4</span>
            <span class="px-2.5 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-md border border-cyan-100 dark:border-cyan-500/20">Tailwind</span>
          </div>
        </div>
      </ScrollReveal>

      <!-- Card 3: DevOps/Data (Vertical) -->
      <ScrollReveal class="md:row-span-2" :delay="300">
        <div class="group h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          
          <div class="w-12 h-12 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Datos & Infraestructura</h3>
          <ul class="space-y-4">
            <li class="group/item flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover/item:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>
              </div>
              <div>
                <strong class="block text-slate-800 dark:text-slate-200">MySQL / PostgreSQL</strong>
                <span class="text-xs">Optimización & Indexing</span>
              </div>
            </li>
            <li class="group/item flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <div class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0 group-hover/item:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <strong class="block text-slate-800 dark:text-slate-200">Redis</strong>
                <span class="text-xs">Caching Strategies</span>
              </div>
            </li>
            <li class="group/item flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <div class="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover/item:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
              </div>
              <div>
                <strong class="block text-slate-800 dark:text-slate-200">Docker</strong>
                <span class="text-xs">Containerization</span>
              </div>
            </li>
            <li class="group/item flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <div class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 group-hover/item:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              </div>
              <div>
                <strong class="block text-slate-800 dark:text-slate-200">AWS</strong>
                <span class="text-xs">S3, EC2, Lambda</span>
              </div>
            </li>
          </ul>
        </div>
      </ScrollReveal>

      <!-- Card 4: Philosophy (Wide) -->
      <ScrollReveal class="md:col-span-2 lg:col-span-2" :delay="400">
        <div class="group h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div class="flex items-start gap-5">
            <div class="hidden sm:flex w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-center items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Filosofía de Desarrollo</h4>
              <div class="flex flex-wrap gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400 font-medium">
                <span class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Testing (Pest/PHPUnit)
                </span>
                <span class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> SOLID Principles
                </span>
                <span class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Clean Code
                </span>
              </div>
            </div>
          </div>
          <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </div>
        </div>
      </ScrollReveal>

    </div>

    <!-- Background Decoration -->
    <div class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none opacity-20 dark:opacity-10"></div>
  </section>
</template>

<script setup>
import ScrollReveal from './ScrollReveal.vue'
</script>