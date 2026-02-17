<template>
  <section id="contacto" class="relative py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-500">
    
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-20 animate-pulse-slow"></div>
    <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-30 dark:opacity-10"></div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
      
      <!-- Left Column: CTA & Info -->
      <div class="w-full lg:w-5/12 flex flex-col justify-center">
        <ScrollReveal>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponible para nuevos retos
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            ¿Iniciamos un <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">nuevo proyecto?</span>
          </h2>
          
          <p class="text-xl text-slate-600 dark:text-slate-400 font-light mb-12 leading-relaxed max-w-lg">
            Actualmente estoy abierto a oportunidades como <strong class="text-slate-900 dark:text-slate-200 font-semibold">Senior Backend Engineer</strong> o <strong class="text-slate-900 dark:text-slate-200 font-semibold">Tech Lead</strong>. Si buscas arquitectura escalable y código limpio, hablemos.
          </p>

          <div class="space-y-6">
            <a href="mailto:sanchezhugo13v@gmail.com" class="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-300">
              <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <span class="block text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Email</span>
                <span class="text-lg font-medium text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">sanchezhugo13v@gmail.com</span>
              </div>
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-300">
              <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-[#0077b5] group-hover:border-[#0077b5] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <span class="block text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Social</span>
                <span class="text-lg font-medium text-slate-900 dark:text-slate-200 group-hover:text-[#0077b5] dark:group-hover:text-[#0077b5] transition-colors">Conectemos en LinkedIn</span>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <!-- Right Column: Form -->
      <div class="w-full lg:w-7/12">
        <ScrollReveal :delay="200" direction="right">
          <form @submit.prevent="submitForm" class="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 hover:border-emerald-500/30 transition-all duration-500">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div class="group">
                <label for="name" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Nombre completo</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  id="name" 
                  required
                  placeholder="Ej. Jane Doe"
                  class="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all duration-300"
                  :disabled="isSubmitting"
                >
              </div>

              <div class="group">
                <label for="email" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">Correo electrónico</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  id="email" 
                  required
                  placeholder="ejemplo@empresa.com"
                  class="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all duration-300"
                  :disabled="isSubmitting"
                >
              </div>
            </div>

            <div class="group mb-10">
              <label for="message" class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">¿En qué te puedo ayudar?</label>
              <textarea 
                v-model="form.message" 
                id="message" 
                rows="4" 
                required
                placeholder="Detalla brevemente el reto técnico, stack o propuesta..."
                class="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-xl px-5 py-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all duration-300 resize-none"
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="relative w-full md:w-fit px-10 py-3.5 overflow-hidden group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" v-if="!isSubmitting"></span>
              
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              
              <span v-if="!isSubmitting">Enviar Mensaje</span>
              <span v-else>Enviando...</span>
            </button>

            <div v-if="successMessage" class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-2xl flex items-center justify-center gap-3 animate-fade-in shadow-sm">
              <svg class="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="font-bold">¡Mensaje enviado con éxito!</span>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ScrollReveal from './ScrollReveal.vue'

// Estado reactivo del formulario
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Estados de la interfaz
const isSubmitting = ref(false)
const successMessage = ref(false)

// Simulación de envío de formulario
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulamos una petición de red de 1.5 segundos
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isSubmitting.value = false
  successMessage.value = true
  
  // Limpiamos el formulario
  form.name = ''
  form.email = ''
  form.message = ''
  
  // Ocultamos el mensaje de éxito después de 5 segundos
  setTimeout(() => {
    successMessage.value = false
  }, 5000)
}
</script>