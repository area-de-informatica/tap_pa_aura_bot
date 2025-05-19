export default defineEventHandler(() => {
  const questions = [
    {
      id: 1,
      question: "¿Qué es una red neuronal artificial y cuál es su inspiración biológica?",
      answers: {
        a: "Es una base de datos estructurada para almacenar información neuronal",
        b: "Es una red de dispositivos físicos conectados por cables",
        c: "Es un modelo computacional inspirado en las neuronas del cerebro humano"
      }
    },
    {
      id: 2,
      question: "¿Cuál es la función de activación y por qué es importante en una red neuronal?",
      answers: {
        a: "Sirve para almacenar los pesos de cada conexión",
        b: "Permite introducir no linealidad en el modelo para resolver problemas complejos",
        c: "Controla la frecuencia de actualización de los datos de entrada"
      }
    },
    {
      id: 3,
      question: "¿Qué diferencias existen entre una red neuronal convolucional (CNN) y una red neuronal recurrente (RNN)?",
      answers: {
        a: "Las RNN tienen capas convolucionales mientras que las CNN no",
        b: "Las CNN solo funcionan con datos tabulares",
        c: "Las CNN se usan para imágenes, mientras que las RNN para secuencias temporales"
      }
    },
    {
      id: 4,
      question: "¿Qué papel juega el algoritmo de retropropagación en el entrenamiento de redes neuronales?",
      answers: {
        a: "Almacena los datos históricos de entrenamiento",
        b: "Detecta automáticamente las clases en un conjunto de datos",
        c: "Ajusta los pesos de la red para minimizar el error durante el entrenamiento"
      }
    },
    {
      id: 5,
      question: "¿Cómo se puede prevenir el sobreajuste (overfitting) en una red neuronal?",
      answers: {
        a: "Aumentando indefinidamente la cantidad de capas ocultas",
        b: "Entrenando con todos los datos sin separación de conjuntos",
        c: "Usando técnicas como regularización, dropout o validación cruzada"
      }
    }
  ];

  return { questions };
});