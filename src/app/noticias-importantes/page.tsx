import NoticiaCard from "../components/NoticiasCard";

const noticiasImportantes = [
  { titulo: "Congreso en vacaciones", contenido: "El Congreso entró a receso. Nadie notó la diferencia." },
  { titulo: "Café récord", contenido: "Colombia bate récord mundial sirviendo el tinto más grande: alcanzó para toda la cuadra." },
  { titulo: "Trancón eterno", contenido: "Se confirma que el trancón de la 30 en Bogotá ya tiene personalidad jurídica." },
  { titulo: "Selección Colombia", contenido: "James Rodríguez pidió que los partidos duren solo el primer tiempo. 'Después me canso', dijo." },
  { titulo: "Subida de precios", contenido: "Subió el aguacate. Economistas recomiendan abrazar un mango." },
];

export default function NoticiasImportantes() {
  return (
    <div className="flex flex-col items-start text-left mt-10 ml-10 space-y-6">
      <h1 className="text-4xl font-bold text-purple-700">Noticias Importantes 📰</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6 w-full">
        {noticiasImportantes.map((noticia, index) => (
          <NoticiaCard key={index} titulo={noticia.titulo} contenido={noticia.contenido} />
        ))}
      </div>
    </div>
  );
}
