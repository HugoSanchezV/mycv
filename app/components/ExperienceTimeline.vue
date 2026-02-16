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
                      <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span class="text-sm text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">{{ achievement }}</span>
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
    role: 'Lead Backend Engineer / Arquitecto',
    company: 'TechCorp Solutions',
    period: 'Mar 2024 - Presente',
    current: true,
    description: 'Liderazgo técnico del equipo backend, definiendo la arquitectura para la migración de un monolito heredado a una arquitectura orientada a servicios (SOA).',
    achievements: [
      'Reducción del tiempo de respuesta de la API principal en un 60% implementando caché con Redis y optimización de Eloquent.',
      'Diseño e implementación de pipelines CI/CD automatizados, reduciendo los fallos en producción en un 40%.'
    ],
    technologies: ['Laravel 11', 'PHP 8.3', 'Vue 3', 'Redis', 'Docker', 'AWS']
  },
  {
    role: 'Senior Backend Developer',
    company: 'E-Commerce Global LATAM',
    period: 'Ene 2021 - Feb 2024',
    current: false,
    description: 'Desarrollo y mantenimiento del motor de pagos y gestión de inventario para una plataforma con más de 50,000 usuarios activos diarios.',
    achievements: [
      'Integración de pasarelas de pago múltiples (Stripe, PayPal) mediante patrones de diseño Strategy y Factory.',
      'Refactorización del sistema de reportes, bajando el consumo de RAM del servidor de 8GB a 2GB usando Laravel Jobs y colas.'
    ],
    technologies: ['Laravel 8-10', 'PHP 8.0', 'Vue.js 2/3', 'MySQL', 'Pest PHP']
  },
  {
    role: 'Fullstack Developer',
    company: 'Agencia Digital Innova',
    period: 'Jun 2018 - Dic 2020',
    current: false,
    description: 'Desarrollo de aplicaciones web a medida (SaaS, CRMs) para clientes internacionales, participando en todo el ciclo de vida del software.',
    achievements: [
      'Creación de un panel administrativo modular en Vue SPA que fue reutilizado en 5 proyectos distintos, ahorrando 200h de desarrollo.',
      'Diseño de bases de datos relacionales normalizadas para alta concurrencia.'
    ],
    technologies: ['PHP 7.4', 'Laravel', 'Vue.js', 'Bootstrap / Tailwind', 'PostgreSQL']
  }
])
</script>