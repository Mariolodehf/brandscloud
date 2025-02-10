import fetch from "node-fetch";

async function llamarAPI() {
    try {
        const response = await fetch("https://jk4wjnw696.execute-api.us-east-1.amazonaws.com/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Respuesta de la API:", data);
    } catch (error) {
        console.error("❌ Error en la petición:", error);
    }
}

llamarAPI();
