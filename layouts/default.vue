<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>AuraBot</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : 'left'"
      temporary
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        :to="item.link"
        color="primary"
      ></v-list-item>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="pa-6">
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer color="black" class="text-white d-flex flex-column text-center py-6">
      <!-- Social Icons -->
      <div class="d-flex justify-center mb-3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          variant="text"
          color="white"
          class="mx-2"
        />
      </div>

      <v-divider class="my-4" color="grey lighten-1" thickness="2" />

      <!-- Description -->
      <div class="text-caption font-weight-light px-4 mb-2" style="max-width: 800px; margin: 0 auto;">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc.
      </div>

      <!-- Copyright -->
      <div class="text-caption mt-2">
        {{ new Date().getFullYear() }} — <strong>AuraBot</strong> con <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  { title: 'Inicio', link: '/' },
  { title: 'Sobre Nosotros', link: '/about' },
  { title: 'Contacto', link: '/' }
]

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-instagram'
]
</script>