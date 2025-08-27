// app/page.tsx
'use client';

import { useState } from 'react';

// Simulación de datos de usuario
type User = {
  id: number;
  name: string;
  email: string;
};

export default function Home() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'welcome'>('login');
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Simulación de función de login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí normalmente harías una llamada a tu API
    if (email === 'demo@example.com' && password === 'password') {
      setUser({ id: 1, name: 'Usuario Demo', email });
      setCurrentView('welcome');
      setMessage('');
    } else {
      setMessage('Credenciales incorrectas');
    }
  };

  // Simulación de función de registro
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí normalmente harías una llamada a tu API
    if (name && email && password) {
      setUser({ id: Date.now(), name, email });
      setCurrentView('welcome');
      setMessage('');
    } else {
      setMessage('Por favor completa todos los campos');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setEmail('');
    setPassword('');
    setName('');
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {currentView === 'welcome' && user ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
            <p className="text-gray-600 mb-2">Hola, {user.name}</p>
            <p className="text-gray-600 mb-6">Has iniciado sesión correctamente</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : currentView === 'login' ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h1>
            {message && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{message}</div>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
              >
                Iniciar Sesión
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              ¿No tienes cuenta?{' '}
              <button
                onClick={() => setCurrentView('register')}
                className="text-blue-500 hover:underline"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Crear Cuenta</h1>
            {message && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{message}</div>}
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="reg-email">
                  Email
                </label>
                <input
                  type="email"
                  id="reg-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="reg-password">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="reg-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
              >
                Crear Cuenta
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              ¿Ya tienes cuenta?{' '}
              <button
                onClick={() => setCurrentView('login')}
                className="text-blue-500 hover:underline"
              >
                Inicia sesión aquí
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}