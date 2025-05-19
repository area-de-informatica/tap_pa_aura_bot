export default defineEventHandler(() => {
  const respuestasCorrectas = {
    1: "c",
    2: "b",
    3: "c",
    4: "c",
    5: "c"
  };

  return { respuestasCorrectas };

 /* const respuestasCorrectas = [
    { 
      idPregunta: 1,
      respuesta:"c"
    },
    {
      idPregunta: 2,
      respuesta:"b"
    },
    {
      idPregunta: 3,
      respuesta:"c"
    },
    {
      idPregunta: 4,
      respuesta:"c"
    },
    {
      idPregunta: 5,
      respuesta:"c"
    }
  ]*/
});