// src/services/api.js

import axios from 'axios';

const API_URL = 'https://jk4wjnw696.execute-api.us-east-1.amazonaws.com/evaluacion';

export const enviarDatos = async (datos) => {
  try {
    const respuesta = await axios.post(API_URL, datos, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return respuesta.data;
  } catch (error) {
    console.error('Error en la conexión:', error);
    throw error;
  }
};
