// controllerApi.js
export const crearReservacion = async (data) => {
    const res = await fetch("http://localhost:5000/api/reservaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Error al crear reservación");
    }
  
    return res.json();
  };