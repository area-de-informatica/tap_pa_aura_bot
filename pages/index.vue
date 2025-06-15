<template>
  <v-app>
    <v-main class="ml-bg">
      <!-- Hero Section -->
      <section class="hero-section py-16">
        <HeroSection @scroll-to-content="scrollToContent" />
      </section>

      <!-- Sección: ¿Qué es ML? -->
      <section class="basics-section py-16" id="basics">
        <BasicsSection />
      </section>

      <!-- Sección: Tipos de Aprendizaje -->
      <section class="learning-types-section py-16" id="learning-types">
        <LearningTypesSection />
      </section>

      <!-- Sección: Regresión vs Clasificación -->
      <section class="regression-classification-section py-16" id="regression-classification">
        <RegressionClassificationSection />
      </section>

      <!-- Sección: Demo Interactiva -->
      <section class="interactive-demo-section py-16" id="interactive-demo">
        <InteractiveDemoSection />
      </section>

      <!-- Algorithms Section -->
      <section class="algorithms-section py-16" id="content">
        <AlgorithmsSection :evaluation-passed="evaluationPassed" @scroll-to-evaluation="scrollToEvaluation"
          @go-to-algorithm="goToAlgorithm" />
      </section>

      <!-- Interactive Demo Section -->
      <section class="demo-section py-16">
        <DemoSection :demo-algorithms="demoAlgorithms" />
      </section>

      <!-- Learning Path Section -->
      <section class="path-section py-16">
        <LearningPathSection :completed-steps="completedSteps" />
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import DemoSection from '../components/DemoSection.vue'
import LearningPathSection from '../components/LearningPathSection.vue'
import BasicsSection from '../components/BasicsSection.vue'
import LearningTypesSection from '../components/LearningTypesSection.vue'
import HeroSection from '../components/HeroSection.vue'
import AlgorithmsSection from '../components/AlgorithmsSection.vue'
import RegressionClassificationSection from '../components/RegressionClassificationSection.vue'
import InteractiveDemoSection from '../components/InteractiveDemoSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Estado general
const completedSteps = ref([0, 1])

// Evaluación
const evaluationPassed = ref(false)

// Verificar evaluación al montar
onMounted(() => {
  const passed = localStorage.getItem('ml_evaluation_passed')
  evaluationPassed.value = passed === 'true'
})

const scrollToEvaluation = () => {
  document.getElementById('evaluation')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContent = () => {
  document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
}

const goToAlgorithm = (link) => {
  navigateTo(link)
}

onUnmounted(() => {
  stopTraining()
})
</script>

<style scoped>
.ml-bg {
  background: #6b46c1;
  min-height: 100vh;
}

.learning-types-section:nth-child(even),
.regression-classification-section:nth-child(even),
.interactive-demo-section:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 48px 0;
  }
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>