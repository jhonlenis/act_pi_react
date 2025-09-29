import React from "react";
import NoticiaCard from "@/app/components/NoticiasRelCard";
import Navbar from "../components/Navbar";

// Noticias reales recientes de Colombia (basadas en titulares) con narración humorística agregada
const noticiasUltimoMomento = [
  {
    titulo: "El ruidoso ocaso del Ministerio de la Igualdad",
    descripcion:
      "Dicen que se apagaron las luces del Ministerio y nadie sabe quién fue el que tocó el interruptor. El caos incluyó demandas, protestas y confusión generalizada. ¿Quién gobierna ahora? En Twitter ya hay memes. (Sí, política nivel sitcom) ", 
    imagen: "/luz.png",
    fecha: "22 de septiembre de 2025",
  },
  {
    titulo: "Intentan vender obras de Débora Arango y terminan en drama cultural",
    descripcion:
      "Querían vender dos obras icónicas y todo se convirtió en una telenovela de museos: arte, escándalos y un rechazo ministerial. Spoiler: las pinturas no iban a ninguna parte, pero los chismes sí volaron pesado.",
    imagen: "/obra.png",
    fecha: "25 de septiembre de 2025",
  },
  {
    titulo: "Natalidad en Colombia cae y los bebés se toman vacaciones anticipadas",
    descripcion:
      "Según estadísticas, en 2024 nacieron muchísimos menos bebés de lo esperado. Algunos especulan que la cigüeña pidió permiso sabático y otros dicen que fue una huelga indefinida. El sistema de pensiones está mirando esto como ‘drama poblacional’.",
    imagen: "/bebes.png",
    fecha: "26 de septiembre de 2025",
  },
  {
    titulo: "Colombia Mayor anuncia fechas de pago y los abuelos hacen fiesta anticipada",
    descripcion:
      "Se dijo que el ciclo pago empieza el 30 de septiembre. Los beneficiarios ya están sacando carteles, trompetas y témpanos de celebración. Eso sí, no todos están seguros si se trata del pago o de una broma del gobierno.",
    imagen: "/fiesta.png",
    fecha: "25 de septiembre de 2025",
  },
  {
    titulo: "Artistas B King y Regio Clown hallados sin vida: redes lloran, medios buscan respuestas",
    descripcion:
      "El mundo artístico colombiano está de luto. Lo que empezó como misterio se volvió trending topic inmediato. Entre tanto, Internet ya especula teorías más raras que un episodio de serie dramática.",
    imagen: "/artista.png",
    fecha: "22 de septiembre de 2025",
  },
  {
    titulo: "iPhone 17: ¿cuántos salarios mínimos pediría tu bolsillo de Colombia?",
    descripcion:
      "Llegó el iPhone 17 y con él empezó la competencia: redes vs finanzas. ¿Cuántos salarios necesitas? La respuesta podría hacer que guardes el móvil en una alcancía primero.",
    imagen: "/iphone.png",
    fecha: "20 de septiembre de 2025",
  },
  {
    titulo: "Ministros obligados a renunciar tras elección de Camargo",
    descripcion:
      "Se corrió el rumor, se lanzó el decreto y tres ministros se pusieron de maletas. La política nacional parece una partida de ‘Risk’, pero con más jalones de orejas.",
    imagen: "/renuncia.png",
    fecha: "hace pocos días",
  },
  {
    titulo: "Congestión diplomática con EE. UU.: Colombia y Trump tienen cita incómoda",
    descripcion:
      "Problemas fronterizos, deportaciones y discursos cruzados. Colombia y EE. UU. hablarán cara a cara, con café diplomático y tensión. ¿Quién llevará las palomitas? Internet ya eligió bando.",
    imagen: "/colombia.png",
    fecha: "enero de 2025",  // ajustar si hay fecha más reciente
  },
];

export default function NoticiasUltimoMomentoPage() {
  return (
    <>
      <Navbar/>
    <main className="bg-white max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Noticias de Último Momento
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {noticiasUltimoMomento.map((noticia, index) => (
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
