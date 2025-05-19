<template>
  <v-app>
    <v-main class="bg-light-blue">
      <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
        <!-- Logo + Título -->
        <img
  src="https://agnieszka.si/img/portfolio/orange-2023/orange-ilustr-2023.png"
  class="logo-img mb-6"
/>
        <h1 class="display-2 font-weight-bold text-primary mb-3">Redes Neuronales con Orange</h1>
        <h2 class="subtitle-1 mb-8">Un OVA interactivo para explorar el poder del aprendizaje automático</h2>

        <!-- CTA Botón -->
        <v-btn
          color="deep-purple accent-4"
          dark
          large
          @click="goToOVA"
        >
          Empezar la Exploración
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const goToOVA = () => {
  // Redirige a la primera sección del OVA
  navigateTo('/about')
}
</script>

<style scoped>
.logo-img {
  max-width: 150px;
  height: auto;
  margin-top: 50px;
}

.bg-light-blue {
  background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
}

h1 {
  font-family: 'Poppins', sans-serif;
}

h2 {
  font-family: 'Open Sans', sans-serif;
  color: #555;
}
</style>
