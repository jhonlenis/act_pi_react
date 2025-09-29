import React from "react";
import NoticiaCard from "@/app/components/NoticiasCard";
import Navbar from "../components/Navbar";

const noticias = [
  {
    titulo: "Perro interrumpe partido de fútbol",
    descripcion:
      "En plena final barrial, un perro decidió que la pelota era suya y no hubo árbitro que lo sacara. El público lo ovacionó como 'el mejor delantero'.",
    imagen: "/Perro.png",
    fecha: "28 de septiembre de 2025",
  },
  {
    titulo: "Político olvida discurso y lee la carta de amor de su hijo",
    descripcion:
      "Durante un evento oficial, un concejal abrió el papel equivocado y terminó declarando su 'amor eterno' a 'Danielita'.",
    imagen: "/concejal.png",
    fecha: "27 de septiembre de 2025",
  },
  {
    titulo: "Gallina toma bus en Medellín",
    descripcion:
      "Usuarios reportaron que la gallina 'Carmela' subió, pagó con maíz (literal) y se sentó tranquila a mirar por la ventana.",
    imagen: "/gallina.png",
    fecha: "26 de septiembre de 2025",
  },
  {
    titulo: "Ciclista se detiene en carrera para comprar arepa",
    descripcion:
      "Mientras todos peleaban por llegar a la meta, un ciclista prefirió la arepa con queso de la esquina. 'El verdadero ganador', dijeron en redes.",
    imagen: "/ciclista.png",
    fecha: "25 de septiembre de 2025",
  },
  {
    titulo: "Vecino anuncia por altavoz que hará siesta",
    descripcion:
      "Cansado del ruido, un vecino de Cali anunció con megáfono: 'Por favor no molestar, el rey va a dormir'.",
    imagen: "/rey.png",
    fecha: "24 de septiembre de 2025",
  },
  {
    titulo: "Jugador celebra gol con pasito de Shakira",
    descripcion:
      "Después de anotar un golazo, un delantero se puso a bailar 'Hips Don't Lie'. El público gritó más por el baile que por el gol.",
    imagen: "/shakira.png",
    fecha: "23 de septiembre de 2025",
  },
  {
    titulo: "Abuela gana torneo de videojuegos",
    descripcion:
      "Una abuelita de 82 años derrotó a 15 jóvenes en un torneo de Free Fire. Ahora la llaman 'La patrona del lobby'.",
    imagen: "/abuela.png",
    fecha: "22 de septiembre de 2025",
  },
  {
    titulo: "Papagayo da el clima en noticiero local",
    descripcion:
      "Un periodista perdió la voz y el loro de la oficina tomó el micrófono. 'Calor calor, lluvia lluvia', repitió en vivo.",
    imagen: "/loro.png",
    fecha: "21 de septiembre de 2025",
  },
];

export default function NoticiasPage() {
  return (
    <>
      <Navbar />
    <main className="bg-white max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Noticias 📰
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {noticias.map((noticia, index) => (
          <NoticiaCard
            key={index}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            imagen={noticia.imagen}
            fecha={noticia.fecha}
          />
        ))}
      </div>
    </main> 
    </>
  );
}
