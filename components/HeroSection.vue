<template>
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
                @click="$emit('scroll-to-content')"
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
</template>

<script setup>
// Emits
defineEmits(['scroll-to-content'])
</script>

<style scoped>
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-btn {
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
}

@media (max-width: 480px) {
  .hero-section {
    padding: 48px 0;
  }
}
</style>