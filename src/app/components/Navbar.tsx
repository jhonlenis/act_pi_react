import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between items-center h-16 px-6">
        {/* Sección izquierda: links */}
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/Noticias"
              className="text-white hover:text-yellow-300"
            >
              Noticias
            </Link>
          </li>
          <li>
            <Link
              href="/Relevantes"
              className="text-white hover:text-yellow-300"
            >
              Noticias de último momento
            </Link>
          </li>
          <li>
            <Link
              href="/Deporte"
              className="text-white hover:text-yellow-300"
            >
              Deporte
            </Link>
          </li>
        </ul>

        {/* Sección derecha: logo */}
        <Image
          src="/chismofilia.png"
          alt="Logo Noticias Colombianas"
          width={60}
          height={50}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}
