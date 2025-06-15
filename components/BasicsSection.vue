<template>
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
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeType = ref(0)
  
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
  </script>
  
  <style scoped>
  .basics-section {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 16px;
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
  }
  </style>