"use client";

import Image from "next/image";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// Noticias normales (30)
const noticiasNormales = [
  "🚗 Trancón histórico en Bogotá: conductor asegura que ya le salió barba mientras esperaba.",
  "⚽ Selección Colombia entrena con tanto entusiasmo que rompieron dos balones en un día.",
  "🦜 Loro en Medellín sorprende al barrio gritando ‘¡Plata o plomo!’ en las mañanas.",
  "🌧️ Lluvia en Cali dura tanto que vecinos ya proponen hacer regatas en la calle.",
  "🚴‍♂️ Ciclista en Boyacá sube una loma tan empinada que ni Google Maps la reconoce.",
  "🐶 Perro callejero se mete a TransMilenio y nadie lo baja: ahora es el nuevo líder de la ruta.",
  "📱 Influencer paisa transmite en vivo… y accidentalmente deja prendido el micrófono del baño.",
  "🍔 Vendedor de hamburguesas en Barranquilla anuncia combo con ‘salsita secreta’, resulta ser mayonesa con ajo.",
  "🛵 Domiciliario entrega pedido tan rápido que el cliente aún no había terminado de pagar.",
  "🎶 Grupo vallenato toca tan duro que vecinos en Bucaramanga empiezan a bailar sin querer.",
  "🛒 Tendero en Pasto pone letrero: ‘Fiado, pero solo con carta del Papa’.",
  "🍺 Hombre en Cartagena asegura que la cerveza estaba tan fría que casi se le congela el alma.",
  "🏠 Vecina en Armenia se queja del ruido, pero luego pide que suban el volumen.",
  "🚦 Semáforo en Sincelejo funciona tan mal que ya es atractivo turístico.",
  "📖 Profesor da clase virtual y su gato interrumpe explicando mejor que él.",
  "🎤 Karaoke en Ibagué se suspende porque nadie quiere soltar el micrófono.",
  "👮 Policía en Villavicencio multa a conductor… pero terminan tomándose una foto juntos.",
  "🚂 Tren turístico en La Dorada se retrasa porque conductor estaba comiendo arepa.",
  "📺 Canal local transmite película tan vieja que hasta el fantasma de la cinta pide vacaciones.",
  "🍦 Niño compra helado y lo pierde al instante: perro del barrio ahora es el más feliz.",
  "🚜 Campesino en Nariño asegura que su burro entiende mejor que los políticos.",
  "🏖️ Turista en Santa Marta se broncea tanto que lo confunden con una estatua.",
  "🎓 Estudiante en Tunja entrega trabajo tan tarde que el profe ya se había jubilado.",
  "📢 Alcalde promete WiFi gratis, pero solo funciona frente a la alcaldía.",
  "🐓 Gallo canta tan fuerte que vecinos ya no necesitan alarma.",
  "🚙 Taxi en Cúcuta lleva tantos pasajeros que parecía bus escolar.",
  "🍕 Pizzería anuncia ‘promoción especial’ y resulta que era un triángulo más pequeño.",
  "📷 Fotógrafo en Popayán capta rayo tan bonito que casi lo usa de fondo de pantalla en el momento.",
  "🚰 Acueducto arregla fuga, pero rompe tres más.",
  "🥁 Comparsa en carnaval de Barranquilla toca tan sabroso que hasta los policías se ponen a bailar.",
];

// Noticias importantes (15)
const noticiasImportantes = [
  "Congreso aprueba ley para que cada ciudadano reciba una arepa mensual subsidiada.",
  "📊 DANE confirma que el 80% de colombianos prefiere el tinto al desayuno sobre el jugo de naranja.",
  "🚀 Colombia anuncia misión espacial: el primer satélite será en forma de buñuelo.",
  "🏛️ Corte Constitucional debate si el reguetón debería ser considerado patrimonio cultural.",
  "🚲 Gobierno impulsa plan para que todos los domicilios se entreguen en bicicleta… incluso a 300 km.",
  "⚡ Electricaribe promete menos apagones, pero solo los martes con luna llena.",
  "📚 Ministerio de Educación incluirá en los colegios la materia obligatoria: ‘Cómo pelear en TransMilenio’",
  "🏖️ Se declara emergencia turística: colombianos invaden San Andrés buscando cocos gratis.",
  "🚔 Policía crea escuadrón especial contra ladrones de empanadas.",
  "📡 Bogotá instalará antenas 6G… aunque todavía no funciona bien el 4G.",
  "💸 Banco anuncia nueva tarjeta de crédito: límite depende de cuántas arepas pueda comer el cliente.",
  "🎶 Shakira declarada embajadora oficial de la felicidad nacional (y del despecho).",
  "⚽ FCF confirma: nuevo balón oficial de la liga tendrá GPS para que no se pierda tanto.",
  "🌽 Ministro de Agricultura afirma: ‘Sin mazorca no hay progreso’.",
  "🚌 TransMilenio anuncia vagón VIP: con aire acondicionado y sillas de verdad.",
];

export default function Home() {
  const [currentView, setCurrentView] = useState<"login" | "register" | "welcome" | "noticiasImportantes">("login");
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "demo@example.com" && password === "password") {
      setUser({ id: 1, name: "Usuario Demo", email });
      setCurrentView("welcome");
    } else {
      setMessage("Credenciales incorrectas");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      setUser({ id: Date.now(), name, email });
      setCurrentView("welcome");
    } else {
      setMessage("Por favor completa todos los campos");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    setName("");
    setCurrentView("login");
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-start w-full max-w-md">
        <Image
          className="dark:invert mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Login */}
        {currentView === "login" && (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
              Ingresar
            </button>
            <button
              type="button"
              onClick={() => setCurrentView("register")}
              className="text-sm text-gray-600 hover:underline"
            >
              ¿No tienes cuenta? Regístrate
            </button>
            {message && <p className="text-red-500">{message}</p>}
          </form>
        )}

        {/* Registro */}
        {currentView === "register" && (
          <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-3 py-2"
            />
            <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700">
              Registrarse
            </button>
            <button
              type="button"
              onClick={() => setCurrentView("login")}
              className="text-sm text-gray-600 hover:underline"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </button>
            {message && <p className="text-red-500">{message}</p>}
          </form>
        )}

        {/* Bienvenida + Noticias normales */}
        {currentView === "welcome" && user && (
          <div className="text-left w-full">
            <h1 className="text-xl font-bold mb-4">Bienvenido, {user.name} 🎉</h1>

            {/* Botones de navegación */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setCurrentView("welcome")}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Inicio
              </button>
              <button
                onClick={() => setCurrentView("noticiasImportantes")}
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
              >
                Noticias importantes
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Cerrar sesión
              </button>
            </div>

            {/* Noticias normales SIEMPRE al entrar */}
            <h2 className="text-lg font-semibold mb-2">📰 Noticias de hoy con humor 😆</h2>
            <div className="space-y-4">
              {noticiasNormales.map((n, i) => (
                <div key={i} className="border p-4 rounded-lg shadow">
                  <p>{n}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Noticias importantes */}
        {currentView === "noticiasImportantes" && (
          <div className="text-left w-full">
            <h1 className="text-xl font-bold mb-4">🔥 Noticias importantes de Colombia</h1>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setCurrentView("welcome")}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Inicio
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Cerrar sesión
              </button>
            </div>

            <div className="space-y-4">
              {noticiasImportantes.map((n, i) => (
                <div key={i} className="border p-4 rounded-lg shadow bg-yellow-50">
                  <p>{n}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
