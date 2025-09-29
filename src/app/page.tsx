"use client";

import { useEffect, useState } from "react";
import { auth, googleAuthProvider } from "@/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleAuthProvider);
  } catch (err) {
    console.error("Error en login:", err);
  }
};

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold">Bienvenido</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Ingresar con Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <img
        src={user.photoURL ?? ""}
        alt="Foto de perfil"
        className="w-20 h-20 rounded-full"
      />
      <p className="text-lg">Hola, {user.displayName}</p>
      <p className="text-sm text-gray-500">{user.email}</p>

      <button
        onClick={handleLogout}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Cerrar sesión
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => window.location.href = '/Noticias'}>
        Ir a Página Principal
      </button>

    </div>
  );
}
