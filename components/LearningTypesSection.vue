<template>
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
  </template>
  
  <script setup>
  const supervisedExamples = [
    { icon: '📧', title: 'Clasificación de Emails', description: 'Spam vs No Spam' },
    { icon: '🏠', title: 'Predicción de Precios', description: 'Valor de propiedades' }
  ]
  
  const unsupervisedExamples = [
    { icon: '👥', title: 'Segmentación de Clientes', description: 'Grupos por comportamiento' },
    { icon: '🔍', title: 'Detección de Anomalías', description: 'Fraudes o valores atípicos' }
  ]
  </script>
  
  <style scoped>
  .learning-types-section {
    position: relative;
  }
  
  .learning-types-section:nth-child(even) {
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
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    .examples-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>