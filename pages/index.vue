<template>
  <v-app>
    <v-main class="ml-bg">
      <!-- Hero Section -->
      <section class="hero-section py-16">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="text-center text-md-left">
              <div class="hero-content">
                <div class="hero-badge mb-4">
                  <v-icon left color="white">mdi-rocket-launch</v-icon>
                  Comienza tu viaje en IA
                </div>
                <h1 class="hero-title mb-4">
                  Domina el
                  <span class="gradient-text">Machine Learning</span>
                  desde cero
                </h1>
                <p class="hero-subtitle mb-6">
                  Descubre el poder de los algoritmos inteligentes y aprende a crear 
                  sistemas que aprenden y se adaptan. Tu puerta de entrada al futuro 
                  de la tecnología.
                </p>
                <div class="hero-actions">
                  <v-btn
                    color="deep-purple"
                    size="large"
                    variant="flat"
                    class="hero-btn mr-4"
                    @click="scrollToContent"
                  >
                    Explorar Algoritmos
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <div class="ml-visualization">
                <div class="data-flow">
                  <div class="data-input">
                    <div class="data-point" v-for="i in 6" :key="i"></div>
                    <span class="flow-label">Datos</span>
                  </div>
                  <div class="flow-arrow">
                    <v-icon color="white" size="32">mdi-arrow-right</v-icon>
                  </div>
                  <div class="ml-brain">
                    <div class="brain-core">
                      <v-icon color="white" size="48">mdi-brain</v-icon>
                    </div>
                    <span class="flow-label">Algoritmo ML</span>
                  </div>
                  <div class="flow-arrow">
                    <v-icon color="white" size="32">mdi-arrow-right</v-icon>
                  </div>
                  <div class="data-output">
                    <div class="prediction-box">
                      <v-icon color="success" size="24">mdi-check-circle</v-icon>
                    </div>
                    <span class="flow-label">Predicción</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

    <!-- Sección: ¿Qué es ML? -->
    <section class="basics-section py-16" id="basics">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title">¿Qué es Machine Learning?</h2>
          <p class="section-subtitle">
            Una introducción visual a los conceptos fundamentales
          </p>
        </div>
        
        <v-row align="center" class="mb-12">
          <v-col cols="12" md="6">
            <div class="concept-card">
              <div class="concept-header">
                <v-icon color="deep-purple" size="40" class="mr-3">mdi-lightbulb-on</v-icon>
                <h3 class="concept-title">Definición</h3>
              </div>
              <p class="concept-text">
                El Machine Learning es una rama de la inteligencia artificial que permite 
                a las computadoras aprender y mejorar automáticamente a través de la experiencia, 
                sin ser programadas explícitamente para cada tarea específica.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="learning-types">
              <div 
                v-for="(type, index) in learningTypes" 
                :key="index"
                class="type-item"
                :class="{ 'active': activeType === index }"
                @click="activeType = index"
              >
                <div class="type-icon">
                  <v-icon color="white">{{ type.icon }}</v-icon>
                </div>
                <div class="type-content">
                  <h4 class="type-title">{{ type.title }}</h4>
                  <p class="type-description">{{ type.description }}</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

          <!-- Sección: Tipos de Aprendizaje -->
    <section class="learning-types-section py-16" id="learning-types">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title">Tipos de Aprendizaje</h2>
          <p class="section-subtitle">
            Supervisado vs No Supervisado: ¿Cuál es la diferencia?
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <div class="comparison-card supervised-card">
              <div class="concept-header mb-4">
                <v-icon color="teal lighten-1" size="48" class="mr-3">mdi-school</v-icon>
                <h3 class="concept-title">Aprendizaje Supervisado</h3>
              </div>
              <p class="concept-text mb-4">
                El algoritmo aprende de ejemplos etiquetados. Como un estudiante con un profesor 
                que le proporciona las respuestas correctas durante el entrenamiento.
              </p>
              <div class="examples-grid">
                <div class="example-card" v-for="example in supervisedExamples" :key="example.title">
                  <div class="example-title">{{ example.icon }} {{ example.title }}</div>
                  <div class="example-text">{{ example.description }}</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="comparison-card unsupervised-card">
              <div class="concept-header mb-4">
                <v-icon color="red lighten-1" size="48" class="mr-3">mdi-compass</v-icon>
                <h3 class="concept-title">Aprendizaje No Supervisado</h3>
              </div>
              <p class="concept-text mb-4">
                El algoritmo encuentra patrones ocultos en datos sin etiquetas. Como un explorador 
                que descubre territorios desconocidos sin un mapa.
              </p>
              <div class="examples-grid">
                <div class="example-card" v-for="example in unsupervisedExamples" :key="example.title">
                  <div class="example-title">{{ example.icon }} {{ example.title }}</div>
                  <div class="example-text">{{ example.description }}</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="vs-divider">
          <v-chip color="gradient" large class="vs-chip">
            <v-icon left>mdi-versus</v-icon>
            VS
          </v-chip>
        </div>
      </v-container>
    </section>

    <!-- Sección: Regresión vs Clasificación -->
    <section class="regression-classification-section py-16" id="regression-classification">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title">Regresión vs Clasificación</h2>
          <p class="section-subtitle">
            Dos enfoques fundamentales para resolver problemas diferentes
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <div class="comparison-card regression-card">
              <div class="concept-header mb-4">
                <v-icon color="blue lighten-1" size="48" class="mr-3">mdi-trending-up</v-icon>
                <h3 class="concept-title">Regresión</h3>
              </div>
              <p class="concept-text mb-4">
                Predice valores numéricos continuos. Como predecir la temperatura exacta 
                o el precio de una acción en el mercado.
              </p>
              <div class="examples-grid">
                <div class="example-card" v-for="example in regressionExamples" :key="example.title">
                  <div class="example-title">{{ example.icon }} {{ example.title }}</div>
                  <div class="example-text">{{ example.description }}</div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="comparison-card classification-card">
              <div class="concept-header mb-4">
                <v-icon color="green lighten-1" size="48" class="mr-3">mdi-format-list-checks</v-icon>
                <h3 class="concept-title">Clasificación</h3>
              </div>
              <p class="concept-text mb-4">
                Predice categorías o clases discretas. Como determinar si un email es spam 
                o si una imagen contiene un gato o un perro.
              </p>
              <div class="examples-grid">
                <div class="example-card" v-for="example in classificationExamples" :key="example.title">
                  <div class="example-title">{{ example.icon }} {{ example.title }}</div>
                  <div class="example-text">{{ example.description }}</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección: Demo Interactiva -->
    <section class="interactive-demo-section py-16" id="interactive-demo">
      <v-container>
        <div class="section-header text-center mb-12">
          <h2 class="section-title">Explora los Conceptos</h2>
          <p class="section-subtitle">
            Interactúa con los diferentes tipos de Machine Learning
          </p>
        </div>

        <div class="interactive-demo">
          <div class="demo-buttons mb-8">
            <v-btn
              v-for="demo in demoOptions"
              :key="demo.key"
              :color="activeDemo === demo.key ? 'red lighten-1' : 'primary'"
              :outlined="activeDemo !== demo.key"
              large
              rounded
              class="mx-2 mb-2"
              @click="activeDemo = demo.key"
            >
              <v-icon left>{{ demo.icon }}</v-icon>
              {{ demo.label }}
            </v-btn>
          </div>

          <v-card class="demo-content pa-6" elevation="8">
            <div v-for="demo in demoContent" :key="demo.key" v-show="activeDemo === demo.key">
              <h4 class="demo-title mb-4">{{ demo.title }}</h4>
              <div class="demo-text" v-html="demo.content"></div>
            </div>
          </v-card>
        </div>
      </v-container>
    </section>

      <!-- Algorithms Section -->
      <section class="algorithms-section py-16" id="content">
        <v-container>
          <div class="section-header text-center mb-12">
            <h2 class="section-title">Algoritmos Principales</h2>
            <p class="section-subtitle">
              Explora los algoritmos más importantes y sus aplicaciones
            </p>
          </div>

          <v-row class="mb-8">
            <v-col 
              cols="12" 
              md="4" 
              v-for="(algorithm, index) in algorithms" 
              :key="index"
              class="mb-4"
            >
              <div 
                class="algorithm-card"
                :class="{ 'card-hover': hoveredCard === index }"
                @mouseenter="hoveredCard = index"
                @mouseleave="hoveredCard = null"
                @click="goToAlgorithm(algorithm.link)"
              >
                <div class="card-header">
                  <div class="algorithm-icon">
                    <v-icon size="48" color="white">{{ algorithm.icon }}</v-icon>
                  </div>
                  <div class="difficulty-badge" :class="algorithm.difficulty">
                    {{ getDifficultyText(algorithm.difficulty) }}
                  </div>
                </div>
                
                <div class="card-content">
                  <h3 class="algorithm-title">{{ algorithm.title }}</h3>
                  <p class="algorithm-description">{{ algorithm.description }}</p>
                  
                  <div class="applications mb-4">
                    <h4 class="applications-title">Aplicaciones:</h4>
                    <div class="application-tags">
                      <span 
                        v-for="app in algorithm.applications" 
                        :key="app"
                        class="app-tag"
                      >
                        {{ app }}
                      </span>
                    </div>
                  </div>
                  
                  <div class="progress-info">
                    <div class="progress-label">
                      <span>Complejidad</span>
                      <span>{{ algorithm.complexity }}%</span>
                    </div>
                    <v-progress-linear
                      :model-value="algorithm.complexity"
                      :color="getComplexityColor(algorithm.complexity)"
                      height="6"
                      rounded
                    ></v-progress-linear>
                  </div>
                </div>

                <div class="card-footer">
                  <v-btn
                    color="deep-purple"
                    variant="flat"
                    block
                    @click.stop="goToAlgorithm(algorithm.link)"
                  >
                    Comenzar a Aprender
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Interactive Demo Section -->
      <section class="demo-section py-16">
        <v-container>
          <div class="demo-container">
            <h3 class="demo-title text-center mb-8">Demo Interactivo: Clasificación</h3>
            <div class="classification-demo">
              <div class="demo-controls mb-6">
                <v-btn
                  :color="isTraining ? 'error' : 'success'"
                  @click="toggleTraining"
                  class="mr-4"
                >
                  {{ isTraining ? 'Detener' : 'Entrenar' }} Modelo
                </v-btn>
                <v-select
                  v-model="selectedAlgorithm"
                  :items="demoAlgorithms"
                  label="Algoritmo"
                  variant="outlined"
                  class="demo-select"
                ></v-select>
              </div>
              
              <div class="demo-visualization">
                <div class="data-points">
                  <div class="point-group">
                    <h4 class="group-title">Clase A</h4>
                    <div class="points-container">
                      <div 
                        v-for="i in 8" 
                        :key="i"
                        class="data-point class-a"
                        :class="{ 'training': isTraining && trainingPoints.includes(`a-${i}`) }"
                      ></div>
                    </div>
                  </div>
                  
                  <div class="separator">
                    <div class="decision-boundary" :class="{ 'active': isTraining }"></div>
                  </div>
                  
                  <div class="point-group">
                    <h4 class="group-title">Clase B</h4>
                    <div class="points-container">
                      <div 
                        v-for="i in 8" 
                        :key="i"
                        class="data-point class-b"
                        :class="{ 'training': isTraining && trainingPoints.includes(`b-${i}`) }"
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div class="training-metrics" v-if="isTraining">
                  <div class="metric">
                    <span class="metric-label">Precisión:</span>
                    <span class="metric-value">{{ trainingAccuracy }}%</span>
                  </div>
                  <div class="metric">
                    <span class="metric-label">Época:</span>
                    <span class="metric-value">{{ currentEpoch }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </section>

      <!-- Learning Path Section -->
      <section class="path-section py-16">
        <v-container>
          <div class="section-header text-center mb-12">
            <h2 class="section-title">Tu Ruta de Aprendizaje</h2>
            <p class="section-subtitle">
              Sigue este camino estructurado para dominar el Machine Learning
            </p>
          </div>
          
          <div class="learning-roadmap">
            <div 
              v-for="(step, index) in learningPath" 
              :key="index"
              class="roadmap-step"
              :class="{ 'completed': completedSteps.includes(index) }"
            >
              <div class="step-connector" v-if="index > 0"></div>
              <div class="step-circle">
                <v-icon v-if="completedSteps.includes(index)" color="success">mdi-check</v-icon>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div class="step-content">
                <h4 class="step-title">{{ step.title }}</h4>
                <p class="step-description">{{ step.description }}</p>
                <div class="step-duration">{{ step.duration }}</div>
              </div>
            </div>
          </div>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Estado general
const hoveredCard = ref(null)
const activeType = ref(0)
const activeDemo = ref('supervised')
const isTraining = ref(false)
const selectedAlgorithm = ref('Neural Networks')
const trainingPoints = ref([])
const trainingAccuracy = ref(0)
const currentEpoch = ref(0)
const completedSteps = ref([0, 1])
let trainingInterval = null

// Tipos de aprendizaje principales
const learningTypes = [
  {
    title: 'Supervisado',
    description: 'Aprende de ejemplos etiquetados para hacer predicciones',
    icon: 'mdi-school'
  },
  {
    title: 'No Supervisado',
    description: 'Encuentra patrones ocultos en datos sin etiquetas',
    icon: 'mdi-magnify'
  },
  {
    title: 'Reforzado',
    description: 'Aprende a través de recompensas y castigos',
    icon: 'mdi-trophy'
  },
  {
    icon: 'mdi-brain',
    title: 'Aprendizaje Automático',
    description: 'Los algoritmos mejoran su rendimiento conforme procesan más datos'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Reconocimiento de Patrones',
    description: 'Identifica patrones complejos en grandes volúmenes de datos'
  },
  {
    icon: 'mdi-robot',
    title: 'Automatización Inteligente',
    description: 'Toma decisiones y realiza predicciones sin intervención humana'
  }
]

// Algoritmos
const algorithms = [
  {
    title: 'Redes Neuronales',
    description: 'Sistemas inspirados en el cerebro humano, capaces de aprender patrones complejos y no lineales.',
    icon: 'mdi-brain',
    difficulty: 'advanced',
    complexity: 85,
    applications: ['Visión Computacional', 'NLP', 'Reconocimiento de Voz'],
    link: '/neural-networks'
  },
  {
    title: 'Random Forest',
    description: 'Conjunto de árboles de decisión que votan para hacer predicciones más robustas y precisas.',
    icon: 'mdi-forest',
    difficulty: 'intermediate',
    complexity: 65,
    applications: ['Clasificación', 'Regresión', 'Feature Selection'],
    link: '/random-forest'
  },
  {
    title: 'Support Vector Machine',
    description: 'Encuentra la mejor línea de separación entre clases maximizando el margen de decisión.',
    icon: 'mdi-vector-difference',
    difficulty: 'intermediate',
    complexity: 70,
    applications: ['Clasificación de Texto', 'Bioinformática', 'Finanzas'],
    link: '/svm'
  }
]

// Ruta de aprendizaje
const learningPath = [
  {
    title: 'Fundamentos de ML',
    description: 'Conceptos básicos, tipos de aprendizaje y preparación de datos',
    duration: '2-3 semanas'
  },
  {
    title: 'Matemáticas para ML',
    description: 'Álgebra lineal, estadística y cálculo aplicado',
    duration: '3-4 semanas'
  },
  {
    title: 'Algoritmos Supervisados',
    description: 'Regresión, clasificación y evaluación de modelos',
    duration: '4-5 semanas'
  },
  {
    title: 'Algoritmos No Supervisados',
    description: 'Clustering, reducción de dimensionalidad y análisis exploratorio',
    duration: '3-4 semanas'
  },
  {
    title: 'Deep Learning',
    description: 'Redes neuronales profundas y arquitecturas avanzadas',
    duration: '6-8 semanas'
  },
  {
    title: 'Proyectos Prácticos',
    description: 'Implementación de soluciones reales y despliegue de modelos',
    duration: '4-6 semanas'
  }
]

// Opciones y ejemplos de demostración
const demoOptions = [
  { key: 'supervised', label: 'Supervisado', icon: 'mdi-school' },
  { key: 'unsupervised', label: 'No Supervisado', icon: 'mdi-compass' },
  { key: 'regression', label: 'Regresión', icon: 'mdi-trending-up' },
  { key: 'classification', label: 'Clasificación', icon: 'mdi-format-list-checks' }
]

const supervisedExamples = [
  { icon: '📧', title: 'Clasificación de Emails', description: 'Spam vs No Spam' },
  { icon: '🏠', title: 'Predicción de Precios', description: 'Valor de propiedades' }
]

const unsupervisedExamples = [
  { icon: '👥', title: 'Segmentación de Clientes', description: 'Grupos por comportamiento' },
  { icon: '🔍', title: 'Detección de Anomalías', description: 'Fraudes o valores atípicos' }
]

const regressionExamples = [
  { icon: '💰', title: 'Precio de Viviendas', description: '$125,000 - $450,000' },
  { icon: '📈', title: 'Ventas Futuras', description: '1,250 unidades' },
  { icon: '🌡️', title: 'Temperatura', description: '23.5°C' }
]

const classificationExamples = [
  { icon: '📧', title: 'Email Spam', description: 'Spam / No Spam' },
  { icon: '🐱', title: 'Reconocimiento', description: 'Gato / Perro / Ave' },
  { icon: '🏥', title: 'Diagnóstico', description: 'Positivo / Negativo' }
]

const demoContent = [
  {
    key: 'supervised',
    title: '🎯 Aprendizaje Supervisado en Acción',
    content: `
      <p><strong>Ejemplo:</strong> Entrenar un modelo para reconocer spam en emails.</p><br>
      <p><strong>Datos de entrenamiento:</strong> Miles de emails ya etiquetados como "spam" o "legítimo".</p>
      <p><strong>Proceso:</strong> El algoritmo aprende las características que distinguen spam de emails legítimos.</p>
      <p><strong>Resultado:</strong> Puede clasificar nuevos emails que nunca ha visto antes.</p>
    `
  },
  {
    key: 'unsupervised',
    title: '🔍 Aprendizaje No Supervisado en Acción',
    content: `
      <p><strong>Ejemplo:</strong> Segmentar clientes de una tienda online.</p><br>
      <p><strong>Datos de entrada:</strong> Historial de compras sin categorías previas.</p>
      <p><strong>Proceso:</strong> El algoritmo agrupa clientes con patrones de compra similares.</p>
      <p><strong>Resultado:</strong> Descubre segmentos como "compradores frecuentes", "compradores estacionales", etc.</p>
    `
  },
  {
    key: 'regression',
    title: '📊 Regresión en Acción',
    content: `
      <p><strong>Ejemplo:</strong> Predecir el precio de una casa.</p><br>
      <p><strong>Variables de entrada:</strong> Tamaño, ubicación, número de habitaciones, edad.</p>
      <p><strong>Proceso:</strong> El modelo encuentra la relación matemática entre estas variables y el precio.</p>
      <p><strong>Resultado:</strong> Predice que una casa específica vale $325,450.</p>
    `
  },
  {
    key: 'classification',
    title: '🏷️ Clasificación en Acción',
    content: `
      <p><strong>Ejemplo:</strong> Diagnosticar si una radiografía muestra neumonía.</p><br>
      <p><strong>Datos de entrada:</strong> Imagen de rayos X del pecho.</p>
      <p><strong>Proceso:</strong> El modelo analiza patrones visuales en la imagen.</p>
      <p><strong>Resultado:</strong> Clasifica como "Neumonía Detectada" o "Pulmones Sanos".</p>
    `
  }
]

// Utilidades
const getDifficultyText = (difficulty) => {
  const map = {
    'beginner': 'Principiante',
    'intermediate': 'Intermedio',
    'advanced': 'Avanzado'
  }
  return map[difficulty] || difficulty
}

const getComplexityColor = (complexity) => {
  if (complexity < 50) return 'success'
  if (complexity < 75) return 'warning'
  return 'error'
}

const scrollToContent = () => {
  document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToBasics = () => {
  document.getElementById('basics')?.scrollIntoView({ behavior: 'smooth' })
}

const goToAlgorithm = (link) => {
  navigateTo(link)
}

// Entrenamiento simulado
const toggleTraining = () => {
  isTraining.value = !isTraining.value
  isTraining.value ? startTraining() : stopTraining()
}

const startTraining = () => {
  currentEpoch.value = 0
  trainingAccuracy.value = Math.floor(Math.random() * 30) + 60

  trainingInterval = setInterval(() => {
    currentEpoch.value++
    const allPoints = []
    for (let i = 1; i <= 8; i++) {
      allPoints.push(`a-${i}`, `b-${i}`)
    }
    trainingPoints.value = allPoints.slice(0, Math.floor(Math.random() * 8) + 4)

    if (trainingAccuracy.value < 95) {
      trainingAccuracy.value += Math.floor(Math.random() * 3) + 1
    }

    setTimeout(() => {
      trainingPoints.value = []
    }, 500)
  }, 1500)
}

const stopTraining = () => {
  if (trainingInterval) {
    clearInterval(trainingInterval)
    trainingInterval = null
  }
  trainingPoints.value = []
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

/* Hero Section */
.hero-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.ml-sections {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.basics-section,
.learning-types-section,
.regression-classification-section,
.interactive-demo-section {
  position: relative;
}

.basics-section:nth-child(even),
.learning-types-section:nth-child(even),
.regression-classification-section:nth-child(even),
.interactive-demo-section:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

.section-header {
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

.concept-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  height: 100%;
}

.concept-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.concept-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.concept-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

.concept-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
}

.learning-types {
  display: grid;
  gap: 1rem;
}

.type-item {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.type-item:hover,
.type-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ff6b6b;
  transform: scale(1.02);
}

.type-icon {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.type-title {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.type-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.4;
}

.comparison-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.comparison-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.vs-chip {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24) !important;
  color: white !important;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.example-card {
  background: rgba(255, 255, 255, 0.1);
  border-left: 4px solid #ff6b6b;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
  text-align: left;
}

.example-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

.example-title {
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.example-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
}

.interactive-demo {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
}

.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.demo-content {
  background: rgba(255, 255, 255, 0.05) !important;
  min-height: 250px;
}

.demo-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
}

.demo-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.demo-text p {
  margin-bottom: 0.5rem;
}

.demo-text strong {
  color: #ff6b6b;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .type-item {
    flex-direction: column;
    text-align: center;
  }
  
  .type-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .examples-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-buttons {
    flex-direction: column;
    align-items: center;
  }
}

/* ML Visualization */
.ml-visualization {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.data-flow {
  display: flex;
  align-items: center;
  gap: 40px;
}

.data-input,
.data-output {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.data-point {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  margin: 2px;
  animation: float 3s infinite ease-in-out;
}

.data-point:nth-child(odd) {
  animation-delay: 0.5s;
}

.ml-brain {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.brain-core {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

.prediction-box {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(76, 175, 80, 0.3);
  border: 2px solid #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Basics Section */
.basics-section {
  background: rgba(255, 255, 255, 0.05);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

.concept-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 32px;
  height: 100%;
}

.concept-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.concept-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}

.concept-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 1.1rem;
}

.learning-types {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.type-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.type-item:hover,
.type-item.active {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(8px);
}

.type-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
}

.type-title {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.type-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

/* Algorithms Section */
.algorithms-section {
  background: rgba(255, 255, 255, 0.1);
}

.algorithm-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.algorithm-card:hover,
.card-hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.25);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.algorithm-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(139, 92, 246, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.difficulty-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty-badge.beginner {
  background: rgba(76, 175, 80, 0.3);
  color: #4caf50;
}

.difficulty-badge.intermediate {
  background: rgba(255, 193, 7, 0.3);
  color: #ffc107;
}

.difficulty-badge.advanced {
  background: rgba(244, 67, 54, 0.3);
  color: #f44336;
}

.algorithm-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.algorithm-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.applications-title {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.application-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.app-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.progress-info {
  margin-bottom: 24px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

/* Demo Section */
.demo-section {
  background: rgba(255, 255, 255, 0.05);
}

.demo-title {
  font-size: 2rem;
  color: white;
  font-weight: 600;
}

.classification-demo {
  max-width: 1000px;
  margin: 0 auto;
}

.demo-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.demo-select {
  max-width: 200px;
}

.demo-visualization {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
}

.data-points {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 32px;
}

.point-group {
  text-align: center;
}

.group-title {
  color: white;
  margin-bottom: 16px;
  font-weight: 600;
}

.points-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.data-point {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.class-a {
  background: #4caf50;
}

.class-b {
  background: #f44336;
}

.data-point.training {
  transform: scale(1.3);
  box-shadow: 0 0 20px currentColor;
}

.separator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.decision-boundary {
  width: 4px;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.decision-boundary.active {
  background: #8b5cf6;
  box-shadow: 0 0 20px #8b5cf6;
  animation: boundaryPulse 2s infinite;
}

@keyframes boundaryPulse {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.training-metrics {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 24px;
}

.metric {
  text-align: center;
}

.metric-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 8px;
}

.metric-value {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
}

/* Learning Path Section */
.path-section {
  background: rgba(255, 255, 255, 0.1);
}

.learning-roadmap {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.roadmap-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  position: relative;
}

.step-connector {
  position: absolute;
  left: 24px;
  top: -40px;
  width: 2px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin-right: 24px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.roadmap-step.completed .step-circle {
  background: #4caf50;
  border-color: #4caf50;
  transform: scale(1.1);
}

.step-content {
  flex: 1;
  padding-top: 4px;
}

.step-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 8px;
}

.step-duration {
  color: #8b5cf6;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-btn,
  .hero-btn-outline {
    width: 100%;
    margin-bottom: 12px;
  }
  
  .ml-visualization {
    height: 300px;
  }
  
  .data-flow {
    flex-direction: column;
    gap: 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .algorithm-card {
    margin-bottom: 24px;
  }
  
  .demo-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .demo-select {
    max-width: none;
  }
  
  .data-points {
    flex-direction: column;
    gap: 32px;
  }
  
  .training-metrics {
    flex-direction: column;
    gap: 16px;
  }
  
  .roadmap-step {
    margin-bottom: 32px;
  }
  
  .step-circle {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
  
  .step-connector {
    left: 19px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 48px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .algorithm-card {
    padding: 24px;
  }
  
  .demo-visualization {
    padding: 24px;
  }
  
  .points-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Additional Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.algorithm-card {
  animation: slideInUp 0.6s ease-out;
}

.algorithm-card:nth-child(2) {
  animation-delay: 0.1s;
}

.algorithm-card:nth-child(3) {
  animation-delay: 0.2s;
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
