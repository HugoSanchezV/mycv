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
                class="border-l-2 border-slate-200 dark:border-slate-800 pl-6 py-1 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300"
              >
                <h4 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {{ item.degree }}
                </h4>
                <div class="text-slate-500 dark:text-slate-400 font-medium mb-2">
                  {{ item.school }}
                </div>
                <time class="text-sm font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                  {{ item.period }}
                </time>
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
    school: 'Universidad Tecnológica Nacional',
    period: '2015 - 2019'
  },
  {
    degree: 'Especialización en Arquitectura de Software',
    school: 'Platzi Master',
    period: '2020 - 2021'
  }
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2023'
  },
  {
    name: 'Certified Laravel Developer',
    issuer: 'Laravel',
    year: '2022'
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    year: '2021'
  },
  {
    name: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB University',
    year: '2020'
  }
]
</script>
