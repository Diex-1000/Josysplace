"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [form, setForm] = useState({ usuario: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://backend-admindepts.onrender.com/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      const data = await res.json();
      console.log('Login exitoso:', data);

      // Redirigir al panel
      router.push('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf4] px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-gray-700 font-medium">Usuario</label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              value={form.usuario}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
