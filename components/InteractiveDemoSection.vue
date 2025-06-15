<template>
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
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeDemo = ref('supervised')
  
  const demoOptions = [
    { key: 'supervised', label: 'Supervisado', icon: 'mdi-school' },
    { key: 'unsupervised', label: 'No Supervisado', icon: 'mdi-compass' },
    { key: 'regression', label: 'Regresión', icon: 'mdi-trending-up' },
    { key: 'classification', label: 'Clasificación', icon: 'mdi-format-list-checks' }
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
  </script>
  
  <style scoped>
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
    
    .demo-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>