"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RevAd() {
  const router = useRouter();
  const [pendientes, setPendientes] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState("");

  // Verificar clave temporal de autenticación
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token !== "admin_token_activo") {
      router.push("/admin");
    }
  }, [router]);

  // Cargar reservaciones pendientes e historial
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPendientes = await fetch("https://backend-admindepts.onrender.com/api/reservaciones/pendientes");
        const pendientesData = await resPendientes.json();
        setPendientes(pendientesData);

        const resHistorial = await fetch("https://backend-admindepts.onrender.com/api/reservaciones");
        const historialData = await resHistorial.json();
        setHistorial(historialData);
      } catch (err) {
        setError("Error al cargar datos.");
      }
    };
    fetchData();
  }, []);

  const actualizarEstado = async (id, estado) => {
    try {
      await fetch(`https://backend-admindepts.onrender.com/api/reservaciones/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado }),
      });
      window.location.reload();
    } catch (err) {
      alert("Error al actualizar reservación.");
    }
  };

  const eliminarReservacion = async (id) => {
    if (!confirm("¿Estás seguro de eliminar esta reservación?")) return;
    try {
      await fetch(`https://backend-admindepts.onrender.com/api/reservaciones/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      alert("Error al eliminar reservación.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa] p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Reservaciones Pendientes</h2>
        <div className="space-y-4">
          {pendientes.map((res) => (
            <div key={res._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p><strong>Nombre:</strong> {res.nombre}</p>
                <p><strong>Fechas:</strong> {res.fechaInicio.slice(0,10)} a {res.fechaFin.slice(0,10)}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => actualizarEstado(res._id, "aceptada")}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >Aceptar</button>
                <button
                  onClick={() => actualizarEstado(res._id, "rechazada")}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >Rechazar</button>
              </div>
            </div>
          ))}
          {pendientes.length === 0 && <p className="text-gray-600">No hay reservaciones pendientes.</p>}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Historial Completo</h2>
        <div className="space-y-4">
          {historial.map((res) => (
            <div key={res._id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p><strong>Nombre:</strong> {res.nombre}</p>
                <p><strong>Fechas:</strong> {res.fechaInicio.slice(0,10)} a {res.fechaFin.slice(0,10)}</p>
                <p><strong>Estado:</strong> {res.estado}</p>
              </div>
              <button
                onClick={() => eliminarReservacion(res._id)}
                className="bg-gray-900 text-white px-4 py-1 rounded hover:bg-gray-800"
              >Eliminar</button>
            </div>
          ))}
          {historial.length === 0 && <p className="text-gray-600">No hay reservaciones registradas.</p>}
        </div>
      </section>
    </div>
  );
}
