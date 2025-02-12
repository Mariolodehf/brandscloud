import logo from './logo.svg';
import './App.css';
import { enviarDatos } from './services/api.js';
import { useState } from 'react';

function App() {
  const [respuesta, setRespuesta] = useState(null);

  const handleEnviarDatos = async () => {
    const datos = {
      nombre: "Mario",
      empresa: "BrandsCloud",
      necesidades: "Optimización en la nube"
    };

    try {
      const respuestaAPI = await enviarDatos(datos);
      console.log("Respuesta de la API:", respuestaAPI);
      setRespuesta(respuestaAPI); // Guarda la respuesta para mostrarla en la UI
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setRespuesta("Error en la conexión.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleEnviarDatos} style={{ marginTop: "20px", padding: "10px" }}>
          Enviar Datos a la API
        </button>
        {respuesta && <p style={{ marginTop: "10px" }}>Respuesta: {JSON.stringify(respuesta)}</p>}
      </header>
    </div>
  );
}

export default App;
