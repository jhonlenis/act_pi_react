"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-start bg-pink-600 text-white px-6 py-4 shadow-md">
      {/* Logo pequeño */}
      <Image src="/chismofilia.png" alt="Chismofilia" width={50} height={50} className="mr-4 rounded-full" />

      {/* Botones */}
      <div className="flex space-x-4">
        <Link href="/" passHref>
          <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform cursor-pointer">
            Inicio
          </button>
        </Link>

        <Link href="/noticias-importantes" passHref>
          <button className="px-4 py-2 bg-purple-400 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 hover:scale-105 transition-transform cursor-pointer">
            Noticias Importantes
          </button>
        </Link>
      </div>
    </nav>
  );
}
