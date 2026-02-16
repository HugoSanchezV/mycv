<template>

  <main class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <Navbar />
    <SectionHero />
    <LazyBentoSkills />
    <LazyExperienceTimeline />
    <LazyEducation />
    <LazyProjectCard />
    <LazyContactForm />
    <LazyFooter />
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </main>
</template>


<script setup>
import Navbar from './components/Navbar.vue';
import SectionHero from './components/SectionHero.vue';

// SEO Configuration
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
  ]
})

useSeoMeta({
  title: 'Alejandro | Senior Backend Engineer & Arquitecto',
  ogTitle: 'Alejandro | Senior Backend Engineer & Arquitecto',
  description: 'Portafolio profesional de Alejandro. Especialista en diseño de APIs, sistemas escalables y arquitectura backend con PHP, Laravel y Vue 3.',
  ogDescription: 'Portafolio profesional de Alejandro. Especialista en diseño de APIs, sistemas escalables y arquitectura backend con PHP, Laravel y Vue 3.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://tu-dominio.com',
  twitterTitle: 'Alejandro | Senior Backend Engineer & Arquitecto',
  twitterDescription: 'Portafolio profesional de Alejandro. Especialista en diseño de APIs, sistemas escalables y arquitectura backend con PHP, Laravel y Vue 3.',
  twitterImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 6rem; /* 96px - matches scroll-pt-24 */
}

@media (min-width: 768px) {
  html {
    scroll-padding-top: 7rem; /* 112px - matches md:scroll-pt-28 */
  }
}
</style>