import axios from 'axios';

const API_URL = 'https://jk4wjnw696.execute-api.us-east-1.amazonaws.com/evaluacion';

export const enviarDatos = async (datos) => {
  try {
    console.log("Enviando datos a la API...", datos);
    
    const respuesta = await axios.post(API_URL, datos, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log("Respuesta recibida:", respuesta);
    return respuesta.data;
  } catch (error) {
    console.error('Error en la conexión:', error.response ? error.response.data : error.message);
    return { error: "No se pudo conectar con la API" };
  }
};
