<template>
  <v-app>
    <v-main class="bg-light pa-6">
      <v-container>
        <!-- Título -->
        <v-row justify="center" class="mb-8">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h3 font-weight-bold text-primary">Explorando Redes Neuronales con Orange</h1>
            <p class="text-subtitle-1 mt-2">Aprende de forma interactiva cómo funcionan y se aplican las redes neuronales.</p>
          </v-col>
        </v-row>

        <!-- Tarjetas de contenido -->
        <v-row dense align="stretch" justify="center">
          <v-col cols="12" md="4" v-for="(section, index) in sections" :key="index">
            <v-card class="pa-4" elevation="4" hover @click="goToSection(section.link)">
              <v-card-title class="text-h6 font-weight-medium text-primary">
                <v-icon class="mr-2">{{ section.icon }}</v-icon>
                {{ section.title }}
              </v-card-title>
              <v-card-text class="text-body-2">
                {{ section.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn color="deep-purple accent-4" variant="flat" class="ml-auto" @click.stop="goToSection(section.link)">
                  Ver más
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const sections = [
  {
    title: '¿Qué es una Red Neuronal?',
    description: 'Una introducción al concepto de redes neuronales y cómo imitan el cerebro humano.',
    icon: 'mdi-brain',
    link: '/quiz',
  },
  {
    title: 'Arquitectura de una Red',
    description: 'Explora las capas, pesos y funciones de activación que componen una red neuronal.',
    icon: 'mdi-cube-scan',
    link: '/evaluacion',
  },
  {
    title: 'Redes en Orange',
    description: 'Aprende cómo utilizar Orange para construir y entrenar redes neuronales visualmente.',
    icon: 'mdi-application-brackets-outline',
    link: '/contenido/orange',
  },
]
const goToSection = (link) => {
  navigateTo(link)
}
</script>

<style scoped>
.bg-light {
  background: linear-gradient(145deg, #f3f4f6, #fefefe);
}

h1, h2 {
  font-family: 'Poppins', sans-serif;
  margin-top: 50px ;
}
</style>
