export default defineEventHandler(() => {
  const questions = [
    {
      id: 1,
      question: "¿Qué es una red neuronal artificial?",
      answers: {
        a: "Una red de computadoras interconectadas",
        b: "Un modelo inspirado en el cerebro humano que procesa información",
        c: "Un conjunto de datos almacenados en forma de red"
      }
    },
    {
      id: 2,
      question: "¿Cuál es la función principal de una capa de activación?",
      answers: {
        a: "Guardar los pesos del modelo",
        b: "Introducir decisiones aleatorias en la red",
        c: "Agregar no linealidad al modelo"
      }
    },
    {
      id: 3,
      question: "¿Qué hace una red neuronal convolucional (CNN)?",
      answers: {
        a: "Analiza imágenes identificando patrones espaciales",
        b: "Analiza datos financieros en tiempo real",
        c: "Conecta redes sociales entre sí"
      }
    },
    {
      id: 4,
      question: "¿Qué es una época (epoch) en el entrenamiento?",
      answers: {
        a: "Un ciclo completo de entrenamiento sobre todos los datos",
        b: "El número de capas en la red",
        c: "El tiempo total que tarda el entrenamiento"
      }
    },
    {
      id: 5,
      question: "¿Cuál es el propósito del aprendizaje supervisado?",
      answers: {
        a: "Aprender sin etiquetas",
        b: "Usar ejemplos etiquetados para entrenar un modelo",
        c: "Hacer que el modelo se entrene solo con imágenes"
      }
    }
  ];

  return { questions };
});