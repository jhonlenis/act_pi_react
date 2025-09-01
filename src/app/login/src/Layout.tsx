"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("⚠️ Credenciales incorrectas, intenta de nuevo");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 animate-gradient bg-[length:200%_200%]" />

      {/* Contenedor con blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/20"
      >
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          Bienvenido 👋
        </h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-300" size={20} />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-300" size={20} />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white shadow-lg transition duration-300"
          >
            Ingresar
          </motion.button>
        </form>

        {/* Mensaje de error */}
        {error && (
          <p className="mt-4 text-red-300 font-medium text-center">{error}</p>
        )}

        {/* Registro */}
        <div className="mt-6 text-center text-gray-200">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-yellow-300 hover:underline">
            Regístrate
          </Link>
        </div>
      </motion.div>

      {/* Estilos animación gradiente */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
