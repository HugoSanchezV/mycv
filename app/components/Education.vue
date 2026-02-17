<template>
  <section id="educacion" class="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-16">
        <ScrollReveal>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Credenciales & <span class="text-emerald-500 dark:text-emerald-400">Educación</span>
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            Formación académica formal y aprendizaje continuo para mantenerme al día con las últimas tecnologías.
          </p>
        </ScrollReveal>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        <!-- Educación Formal -->
        <div>
          <ScrollReveal direction="left">
            <h3 class="flex items-center gap-3 text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
              <span class="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              </span>
              Formación Académica
            </h3>

            <div class="space-y-8">
              <div 
                v-for="(item, index) in academicStudies" 
                :key="index"
                class="relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 py-2 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300 group"
              >
                <!-- Icon on timeline -->
                <div class="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 group-hover:border-emerald-500 transition-colors"></div>

                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h4 class="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 leading-tight">
                      {{ item.degree }}
                    </h4>
                    <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium mb-2 text-sm md:text-base">
                      <!-- Icons Logic -->
                      <svg v-if="item.icon === 'code'" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      <svg v-else-if="item.icon === 'platzi'" class="w-4 h-4 shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M10.783 20.325c.436.568 1.15.568 1.583 0l7.35-9.592c.62-.808.044-1.983-.97-1.983H4.405c-1.015 0-1.59 1.175-.97 1.983l7.348 9.592zM12 2.25c.575 0 1.042.467 1.042 1.042v6.666a1.042 1.042 0 01-2.084 0V3.292c0-.575.467-1.042 1.042-1.042z" /></svg>
                      <svg v-else class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                      {{ item.school }}
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 mt-1">
                  <time class="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                    {{ item.period }}
                  </time>
                  <span v-if="item.status" class="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 animate-pulse">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {{ item.status }}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- Certificaciones -->
        <div>
          <ScrollReveal direction="right" :delay="200">
            <h3 class="flex items-center gap-3 text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
              <span class="p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </span>
              Certificaciones
            </h3>

            <div class="grid gap-4">
              <div 
                v-for="(cert, index) in certifications" 
                :key="index"
                class="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div class="flex justify-between items-start gap-4">
                  <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {{ cert.name }}
                    </h4>
                    <span class="text-sm text-slate-500 dark:text-slate-400 mt-1 block">
                      {{ cert.issuer }}
                    </span>
                  </div>
                  <span class="text-xs font-mono text-slate-400 dark:text-slate-500 whitespace-nowrap pt-1">
                    {{ cert.year }}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import ScrollReveal from './ScrollReveal.vue'

const academicStudies = [
  {
    degree: 'Ingeniería en Sistemas Computacionales',
    school: 'Tec. Superior de Fresnillo',
    period: '2015 - 2019',
    icon: 'academic'
  },
  {
    degree: 'Especialización en Desarrollo Web Backend con PHP',
    school: 'Platzi',
    period: '2025',
    icon: 'platzi'
  },
  {
    degree: 'Ingeniería de IA con Python',
    school: 'Código Facilito',
    period: 'Actualidad',
    status: 'En Progreso',
    icon: 'code'
  }
]

const certifications = [
  {
    name: 'Inglés Nivel B1',
    issuer: 'TOEIC (610 pts)',
    year: '2024',
    icon: 'language'
  },
  {
    name: 'Especialización Backend con Java',
    issuer: 'Oracle Next Education',
    year: '2024',
    icon: 'java'
  }
]
</script>
