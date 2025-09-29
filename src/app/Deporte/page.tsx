import React from "react";
import NoticiaCard from "@/app/components/DeportesCard";
import Navbar from "../components/Navbar";

const noticiasDeporte = [
  {
    titulo: "Colombia clasificó al Mundial: y de paso le dio intro a la fiesta",
    descripcion:
      "Con un 3-0 majestuoso frente a Bolivia, Colombia no solo aseguró su puesto en el Mundial 2026, sino que dejó a los bolivianos preguntándose ‘¿qué pasó?’ mientras nuestras gargantas gritaban gol. 🎉",
    imagen: "/mundial.png",
    fecha: "5 de septiembre de 2025",
  },
  {
    titulo: "Brasil le gana a Colombia en penales: fútbol con drama de telenovela",
    descripcion:
      "En la final femenina de la Copa América, empataron 4-4 y Brasil se impuso 5-4 en penales. Fue como ese episodio donde nadie sabe quién ganará hasta el final, pero con más patadas.",
    imagen: "/brasil.png",
    fecha: "3 de agosto de 2025",
  },
  {
    titulo: "El Oporto pesca talento colombiano: otro que se contagió de nuestro sabor",
    descripcion:
      "Los portugueses ficharon a dos jóvenes delanteros desde Colombia. Dicen que el contrato decía ‘traer talento y sazón’ y ellos cumplieron.",
    imagen: "/oporto.png",
    fecha: "2 de septiembre de 2025",
  },
  {
    titulo: "¿Qué tiene James que no tuvo el concierto? ¡Goles!",
    descripcion:
      "Mientras muchos esperan álbumes nuevos, James Rodríguez decidió hablar con la pelota: marcó un golazo en la clasificación colombiana. El balón se convirtió en su mejor letra. (No se necesita letra).",
    imagen: "/james.png",
    fecha: "5 de septiembre de 2025",
  },
  {
    titulo: "Selección femenina hizo su parte: pero Brasil dijo ‘no hoy’ en los penales",
    descripcion:
      "Casi cuatro goles seguidos, aguante en el arco, y un suspenso tan grande como esperar que te respondan un mensaje en WhatsApp. Brasil se lo llevó al final.",
    imagen: "/5-4.png",
    fecha: "3 de agosto de 2025",
  },
  {
    titulo: "Colombia exporta goles, tal como exporta café",
    descripcion:
      "Con jugadores jóvenes y talento fresco, Colombia no solo vende café al mundo: también está mandando goleadores al viejo continente. 🌍 (Yo quiero acción).",
    imagen: "/benfica.png",
    fecha: "2 de septiembre de 2025",
  },
  {
    titulo: "La prensa portuguesa descubrió lo que ya sabíamos: somos buen fútbol",
    descripcion:
      "Cuando dos futbolistas colombianos firman con Oporto, los periodistas allá empezaron a googlear ‘Colombia fútbol’. Nosotros ya lo sabemos.",
    imagen: "/talento.png",
    fecha: "2 de septiembre de 2025",
  },
  {
    titulo: "Colombia entró al Mundial con estilo… y todo el país se vino de celebración",
    descripcion:
      "Tres goles, cero complicaciones y miles de gritos. Si entramos al Mundial así, que vaya y que lo lleven con banda. ",
    imagen: "/fifa.png",
    fecha: "5 de septiembre de 2025",
  },
];

export default function NoticiasDeporteChistosoPage() {
  return (
    <>
    <Navbar/>
    <main className="bg-white max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Noticias Deportivas ⚽⚽⚽
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {noticiasDeporte.map((noticia, idx) => (
          <NoticiaCard
            key={idx}
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
