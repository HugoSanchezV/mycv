<template>
  <section 
    id="inicio" 
    class="relative min-h-[95vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-500 py-20"
    aria-label="Introducción principal"
  >
    
    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Column 1: Value Proposition -->
      <div class="max-w-2xl flex flex-col justify-center">
        <ScrollReveal>
          <div 
            class="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md shadow-sm hover:border-emerald-500/30 transition-colors duration-300"
            role="status"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-300">
              Disponible para nuevos retos
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="150">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] transition-colors duration-300">
            <span class="block text-slate-900 dark:text-slate-50">Hola, soy [Tu Nombre].</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-200 pb-2">
              Arquitecto Backend.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal :delay="300">
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg transition-colors duration-300 font-light">
            Diseño y escalo sistemas robustos. Transformo lógica compleja en APIs eficientes de alto rendimiento con
            <strong class="text-slate-900 dark:text-slate-100 font-semibold">PHP, Laravel y Vue</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="450">
          <div class="flex flex-col sm:flex-row gap-5">
            <a 
              href="#proyectos" 
              class="group relative overflow-hidden min-h-[52px] flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              aria-label="Ver mis proyectos destacados"
            >
              <span class="relative z-10">Explorar Arquitecturas</span>
            </a>
            <a 
              href="#contacto" 
              class="min-h-[52px] flex items-center justify-center px-8 py-4 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              aria-label="Ir a la sección de contacto"
            >
              Contactar
            </a>
          </div>
        </ScrollReveal>
      </div>

      <!-- Column 2: Immersive Code Window -->
      <div class="hidden lg:block relative group perspective-1000 min-h-[400px]">
          <!-- Ambient Glow -->
          <div class="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse-slow"></div>
          
          <!-- Code Window -->
          <div class="relative bg-slate-900/95 dark:bg-[#0B1120]/90 backdrop-blur-xl rounded-2xl border border-slate-800/60 shadow-2xl shadow-black/20 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-emerald-500/10 animate-float-slow">
            
            <!-- Window Header -->
            <div class="flex items-center px-5 py-4 border-b border-slate-800/60 bg-slate-900/50 dark:bg-[#0B1120]/50 rounded-t-2xl">
              <div class="flex gap-2 mr-6">
                <div class="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                <div class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                <div class="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
              </div>
              <div class="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/40 border border-slate-700/30">
                <svg class="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6-6-6M12 19h8"/></svg>
                <span class="text-xs text-slate-400 font-mono tracking-wide">api/PaymentController.php</span>
              </div>
            </div>
            
            <!-- Code Area -->
            <div class="p-6 md:p-8 overflow-hidden">
             <!-- Line Numbers & Code -->
             <div class="flex gap-4 font-mono text-sm leading-relaxed">
                <!-- Line Numbers -->
                <div class="hidden md:flex flex-col text-slate-700 dark:text-slate-600 text-right select-none" aria-hidden="true">
                  <span>81</span><span>82</span><span>83</span><span>84</span><span>85</span><span>86</span><span>87</span><span>88</span><span>89</span><span>90</span><span>91</span><span>92</span><span>93</span><span>94</span><span>95</span><span>96</span><span>97</span>
                </div>
                <!-- Simplified Code Structure -->
                <pre class="flex-1 text-slate-300"><code><span class="text-purple-400">public function</span> <span class="text-blue-400">process</span>(<span class="text-yellow-200">Order</span> $order)
{
    <span class="text-slate-500 italic">// Atomic transaction to ensure data integrity</span>
    <span class="text-purple-400">return</span> <span class="text-yellow-200">DB</span>::<span class="text-teal-300">transaction</span>(<span class="text-purple-400">function</span> () <span class="text-purple-400">use</span> ($order) {
        
        $payment = $this->gateway-><span class="text-teal-300">charge</span>($order);
        
        <span class="text-purple-400">if</span> ($payment-><span class="text-teal-300">isSuccessful</span>()) {
            $order-><span class="text-teal-300">markAsPaid</span>();
            
            <span class="text-teal-300">OrderProcessed</span>::<span class="text-teal-300">dispatch</span>($order);
            
            <span class="text-purple-400">return</span> <span class="text-teal-300">response</span>()-><span class="text-teal-300">json</span>([
                <span class="text-green-300">'status'</span> => <span class="text-green-300">'success'</span>,
                <span class="text-green-300">'data'</span>   => $order
            ]);
        }
        
        <span class="text-purple-400">throw new</span> <span class="text-yellow-200">PaymentFailedException</span>();
    });
}</code></pre>
              </div>
            </div>
          </div>
      </div>

    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20 pointer-events-none transition-colors duration-500"></div>
    
  </section>
</template>

<script setup>
import ScrollReveal from './ScrollReveal.vue'
</script>

<style scoped>
/* Custom animations for the hero section */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.6; }
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>