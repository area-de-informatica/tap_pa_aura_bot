export default defineEventHandler(() => {
  const questions = [
    {
      id: 1,
      question: "¿Qué es el aprendizaje supervisado en el contexto del aprendizaje automático?",
      answers: {
        a: "Un método que no requiere datos etiquetados",
        b: "Un método que utiliza datos etiquetados para entrenar modelos",
        c: "Un tipo de algoritmo genético para optimización"
      }
    },
    {
      id: 2,
      question: "¿Cuál es el propósito de la función de pérdida (loss function) en una red neuronal?",
      answers: {
        a: "Aumentar la velocidad del entrenamiento",
        b: "Medir la precisión del modelo en datos no vistos",
        c: "Cuantificar el error entre la predicción del modelo y la salida esperada"
      }
    },
    {
      id: 3,
      question: "¿Qué es una época (epoch) durante el entrenamiento de una red neuronal?",
      answers: {
        a: "Una unidad de medida para el tamaño de los datos",
        b: "Una iteración completa sobre todo el conjunto de entrenamiento",
        c: "Un tipo de regularización"
      }
    },
    {
      id: 4,
      question: "¿Para qué sirve la técnica de dropout en redes neuronales?",
      answers: {
        a: "Aumentar el tamaño del modelo",
        b: "Reducir la tasa de aprendizaje",
        c: "Prevenir el sobreajuste al desactivar aleatoriamente neuronas durante el entrenamiento"
      }
    },
    {
      id: 5,
      question: "¿Qué significa que un modelo tenga buena generalización?",
      answers: {
        a: "Que tiene alta complejidad y muchos parámetros",
        b: "Que memoriza perfectamente los datos de entrenamiento",
        c: "Que funciona bien tanto con datos vistos como no vistos"
      }
    }
  ];

  return { questions };
});