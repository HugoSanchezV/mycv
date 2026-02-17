<template>
  <section id="experiencia" class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-500">
    
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
      
      <!-- Left Column: Header & Intro -->
      <div class="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <ScrollReveal>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">
            Carrera
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Trayectoria <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Profesional</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
            Más de [X] años de evolución técnica, pasando de la escritura de código a la arquitectura de sistemas escalables y liderazgo de equipos técnicos.
          </p>
          
          <a 
            href="/cv-tu-nombre-2026.pdf" 
            download
            class="group inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
          >
            <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </div>
            <span>Descargar CV Completo</span>
          </a>
        </ScrollReveal>
      </div>

      <!-- Right Column: Timeline -->
      <div class="lg:w-2/3">
        <ol class="relative border-l-2 border-slate-200 dark:border-slate-800/60 ml-4 md:ml-6 space-y-16">                  
          
          <li 
            v-for="(job, index) in experiences" 
            :key="index"
            class="ml-10 md:ml-16 group"
          >
            <ScrollReveal direction="left" :delay="index * 100">
              <!-- Timeline Dot -->
              <span 
                class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-[17px] ring-4 ring-slate-50 dark:ring-slate-950 bg-white dark:bg-slate-900 border-2 transition-all duration-500 z-10"
                :class="job.current ? 'border-emerald-500 scale-110' : 'border-slate-300 dark:border-slate-700 group-hover:border-emerald-500/50'"
              >
                <span v-if="job.current" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
                <span class="w-2.5 h-2.5 rounded-full" :class="job.current ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-emerald-400/80'"></span>
              </span>
              
              <!-- Card -->
              <div class="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {{ job.role }}
                    </h3>
                    <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                      <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      {{ job.company }}
                    </div>
                  </div>
                  
                  <time 
                    class="px-4 py-1.5 text-sm font-mono font-semibold rounded-full border w-fit shrink-0"
                    :class="job.current ? 'bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 'bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'"
                  >
                    {{ job.period }}
                  </time>
                </div>
                
                <p class="mb-8 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
                  {{ job.description }}
                </p>

                <!-- Achievements -->
                <div class="space-y-4 mb-8">
                  <div v-for="(achievement, i) in job.achievements" :key="i" class="flex items-start gap-4 group/item">
                    <div class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <!-- Custom Icon or Default Check -->
                      <svg v-if="achievement.icon === 'lightning'" class="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <svg v-else-if="achievement.icon === 'gear'" class="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <svg v-else-if="achievement.icon === 'database'" class="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                      <svg v-else-if="achievement.icon === 'code'" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      <svg v-else class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span class="text-sm text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors" v-html="achievement.text"></span>
                  </div>
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                  <span 
                    v-for="(tech, i) in job.technologies" 
                    :key="i"
                    class="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                  >
                    {{ tech }}
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </li>

        </ol>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ScrollReveal from './ScrollReveal.vue'

// Array de datos: Fácil de mantener y actualizar sin tocar el HTML
const experiences = ref([
  {
    role: 'Procesador de Datos / Backend Developer',
    company: 'Grupo Ascencio García',
    period: '2025 - Presente',
    current: true,
    description: 'Optimización de infraestructura y procesamiento de datos para la toma de decisiones estratégicas.',
    achievements: [
      { 
        text: 'Refactorización de módulos críticos en <strong>PHP moderno (PDO)</strong>, implementando chunking para eliminar cuellos de botella.',
        icon: 'code'
      },
      { 
        text: 'Optimización: Reducción de tiempos de procesamiento masivo de <strong>+3 min a menos de 5 segundos</strong> para cargas de +4,000 registros.',
        icon: 'lightning'
      },
      { 
        text: 'Diseño de flujos ETL desde <strong>MS SQL Server hacia Power BI</strong> para dashboards operativos de costos.',
        icon: 'database'
      }
    ],
    technologies: ['PHP 8.3', 'PDO', 'SQL Server', 'Power BI', 'ETL']
  },
  {
    role: 'Fullstack Developer',
    company: 'Enlazac',
    period: '2024 - 2025',
    current: false,
    description: 'Desarrollo de soluciones completas para la gestión de infraestructura de red y automatización de procesos.',
    achievements: [
      { 
        text: 'Desarrollo de plataforma administrativa WISP con <strong>Laravel 11, Inertia.js y Vue 3</strong>.',
        icon: 'code'
      },
      { 
        text: 'Implementación de motor de aprovisionamiento autónomo mediante <strong>Laravel Jobs/Events</strong>.',
        icon: 'gear'
      },
      { 
        text: 'Orquestación de pasarelas de pago (PayPal, Mercado Pago) y notificaciones vía API de Telegram y Twilio.',
        icon: 'gear'
      }
    ],
    technologies: ['Laravel 11', 'Inertia.js', 'Vue 3', 'MySQL', 'Redis']
  }
])
</script>