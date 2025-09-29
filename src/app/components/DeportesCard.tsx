import React from "react";

interface NoticiaCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
}

export default function NoticiaCard({
  titulo,
  descripcion,
  imagen,
  fecha,
}: NoticiaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{titulo}</h2>
        <p className="text-sm text-gray-500 mb-2">{fecha}</p>
        <p className="text-gray-600 text-sm">{descripcion}</p>
      </div>
    </div>
  );
}
