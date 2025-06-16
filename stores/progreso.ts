import { defineStore } from 'pinia'

export const useProgresoStore = defineStore('progreso', {
  state: () => ({
    desafiosCompletados: 0,
    totalDesafios: 5 // puedes ajustarlo si necesitas más
  }),
  getters: {
    progresoPorcentaje(state) {
      return Math.min((state.desafiosCompletados / state.totalDesafios) * 100, 100)
    },
    nivel(state) {
      return Math.floor((state.desafiosCompletados / state.totalDesafios) * 4) + 1
    }
  },
  actions: {
    completarDesafio() {
      if (this.desafiosCompletados < this.totalDesafios) {
        this.desafiosCompletados++
      }
    },
    reiniciar() {
      this.desafiosCompletados = 0
    },
    actualizarDesdeRuta(ruta: string) {
      // Define el progreso por ruta
      const progresoPorRuta: Record<string, number> = {
        '/': 1, // index = 1/5 = 20%
        '/quiz': 2,
        '/neuronalnets': 3,
        '/evaluacion': 4,
        '/nose': 5
      }
      this.desafiosCompletados = progresoPorRuta[ruta] ?? 0
    }
  }
})
