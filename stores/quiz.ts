import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref([])
  const correctAnswers = ref({})
  const userAnswers = ref({})
  const results = ref({})

  const fetchQuestions = async () => {
    const { data } = await useFetch('/api/neuronalnets')
    questions.value = data.value.questions
  }

  const fetchCorrectAnswers = async () => {
    const { data } = await useFetch('/api/answers')
    correctAnswers.value = data.value.respuestasCorrectas
  }

  const verificar = () => {
    const res: Record<number, boolean> = {}
    for (const id in correctAnswers.value) {
      res[id] = userAnswers.value[id] === correctAnswers.value[id]
    }
    results.value = res
  }

  return {
    questions,
    correctAnswers,
    userAnswers,
    results,
    fetchQuestions,
    fetchCorrectAnswers,
    verificar
  }
})