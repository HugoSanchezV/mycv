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

      <!-- Card 1: Core Backend (Large) -->
      <ScrollReveal class="md:col-span-2" :delay="100">
        <div class="group relative h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 lg:p-10 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1">
          <div class="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/></svg>
          </div>
          
          <div class="relative z-10">
            <div class="w-12 h-12 mb-6 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
              <!-- Laravel/Backend Icon -->
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
            </div>

            <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Core Backend</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-lg text-lg leading-relaxed">
              Desarrollo robusto con <strong>Laravel</strong>, Eloquent ORM y autenticación segura. Gestión avanzada de bases de datos.
            </p>
            
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1.5 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold rounded-lg border border-red-100 dark:border-red-500/20">PHP / Laravel</span>
              <span class="px-3 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-lg border border-blue-100 dark:border-blue-500/20">SQL Server</span>
              <span class="px-3 py-1.5 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-sm font-semibold rounded-lg border border-sky-100 dark:border-sky-500/20">MySQL</span>
              <span class="px-3 py-1.5 bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-semibold rounded-lg border border-yellow-100 dark:border-yellow-500/20">Python</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Card 2: Frontend (Small) -->
      <ScrollReveal :delay="200">
        <div class="group relative h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          
          <div class="w-12 h-12 mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
            <!-- Vue Icon -->
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Frontend & Web</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
            Interfaces reactivas y modernas.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-md border border-emerald-100 dark:border-emerald-500/20">Vue.js</span>
            <span class="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-md border border-indigo-100 dark:border-indigo-500/20">Inertia.js</span>
            <span class="px-2.5 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-md border border-cyan-100 dark:border-cyan-500/20">Tailwind</span>
          </div>
        </div>
      </ScrollReveal>

      <!-- Card 3: Data Engineering (Large) -->
      <ScrollReveal class="md:col-span-2" :delay="300">
        <div class="group h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 lg:p-10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 p-12 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>

          <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div class="flex-1">
              <div class="w-12 h-12 mb-6 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <!-- Data Icon -->
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>

              <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Data Engineering & BI</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Diseño de flujos ETL y procesamiento masivo. Visualización estratégica con <strong>Power BI (DAX)</strong>.
              </p>

              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-semibold rounded-lg border border-amber-100 dark:border-amber-500/20">Power BI</span>
                <span class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700">ETL</span>
                <span class="px-3 py-1.5 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-lg border border-green-100 dark:border-green-500/20">Excel Avanzado</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Card 4: Tools & Environment (Small) -->
      <ScrollReveal :delay="400">
        <div class="group relative h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
          <div class="w-12 h-12 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
             <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Herramientas</h3>
          
          <ul class="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Git / GitHub</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Azure</li>
          </ul>

          <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Inglés B1 (TOEIC 610)
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