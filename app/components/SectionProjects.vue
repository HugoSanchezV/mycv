<template>
  <article id="proyectos" class="relative group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-black/10 mb-8">
    <ScrollReveal>
      <div class="flex flex-col lg:flex-row gap-8 md:gap-12">
        
        <div class="w-full lg:w-2/5 shrink-0 flex flex-col">
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 shadow-lg group-hover:shadow-emerald-500/10 transition-shadow duration-300">
            <div class="absolute top-3 left-3 z-10 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-200 dark:border-slate-700">
              SaaS Privado
            </div>
            
            <img 
              src="https://via.placeholder.com/800x450/0f172a/334155?text=Portada+de+la+Presentaci%C3%B3n" 
              alt="Arquitectura del proyecto ERP" 
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          <button 
            @click="openPresentationModal"
            class="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl border border-emerald-500/20 hover:border-emerald-500 transition-all duration-300 focus:ring-4 focus:ring-emerald-500/30"
            aria-label="Abrir presentación del proyecto"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Ver Presentación Completa
          </button>
        </div>

        <div class="w-full lg:w-3/5 flex flex-col justify-center">
          
          <header class="mb-6">
            <h3 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Sistema de Facturación de Alto Rendimiento
            </h3>
            <p class="text-slate-600 dark:text-slate-400 font-medium">Rol: Lead Backend Developer (PHP / Laravel)</p>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-50 dark:bg-slate-950/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/50">
              <h4 class="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-3 text-sm uppercase tracking-wide">
                <span class="w-2 h-2 rounded-full bg-red-500"></span> El Reto
              </h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                El sistema legacy tardaba más de 45 segundos en generar reportes fiscales mensuales, bloqueando transacciones en tiempo real y causando cuellos de botella en la base de datos durante cierres de mes.
              </p>
            </div>

            <div class="bg-slate-50 dark:bg-slate-950/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/50">
              <h4 class="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold mb-3 text-sm uppercase tracking-wide">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> La Solución
              </h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Migración a Laravel 11. Implementación de CQRS (Command Query Responsibility Segregation) y generación de reportes asíncronos mediante Jobs y colas en Redis.
              </p>
            </div>
          </div>

          <div class="mb-8">
            <h4 class="text-slate-700 dark:text-slate-300 font-bold text-sm mb-4 uppercase tracking-wide">Impacto en el Negocio</h4>
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-col bg-slate-100 dark:bg-slate-800/30 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700/50">
                <span class="text-emerald-600 dark:text-emerald-400 font-black text-xl">- 95%</span>
                <span class="text-slate-600 dark:text-slate-400 text-xs">Tiempo de carga</span>
              </div>
              <div class="flex flex-col bg-slate-100 dark:bg-slate-800/30 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700/50">
                <span class="text-emerald-600 dark:text-emerald-400 font-black text-xl">0</span>
                <span class="text-slate-600 dark:text-slate-400 text-xs">Downtime en migración</span>
              </div>
            </div>
          </div>

          <div class="mt-auto flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-transparent">Laravel</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-transparent">Vue.js</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-transparent">Redis</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-transparent">PostgreSQL</span>
          </div>

        </div>
      </div>
    </ScrollReveal>
  </article>
</template>

<script setup>
import ScrollReveal from './ScrollReveal.vue'

// Aquí manejaremos la lógica para abrir la presentación
const openPresentationModal = () => {
  // Podría abrir un modal de Vue con un visor de PDF (como vue-pdf)
  // O un carrusel de imágenes con las diapositivas de tu presentación
  // O simplemente redirigir a un enlace de Google Slides / PDF
  console.log('Abriendo presentación del proyecto...')
}
</script>