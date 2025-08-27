import FlipCard from "./components/FlipCard";
import NoticiaCard from "./components/NoticiasCard";

const noticias = [
  {
    titulo: "Arepa voladora",
    contenido:
      "En Medellín un señor lanzó una arepa al aire y cayó directo en la mano de un turista gringo. El turista ahora dice que fue 'el mejor delivery de su vida'.",
    imagen: "https://images.unsplash.com/photo-1612216353064-fd3e04131a5d?fit=crop&w=700&q=80",
  },
  {
    titulo: "Gallo fiestero",
    contenido:
      "Un gallo en Cali canta reguetón a las 3AM. Los vecinos ya no se quejan porque ahora bailan.",
    imagen: "", // puedes agregar una imagen si quieres
  },
  {
    titulo: "Bus fantasma",
    contenido:
      "En Bogotá un bus del SITP llegó puntual. Los pasajeros aseguran que fue un milagro y piden canonizar al conductor.",
    imagen: "", 
  },
  {
    titulo: "Café con sorpresa",
    contenido:
      "En el Eje Cafetero, un barista sirvió un tinto con un mensaje motivacional en la espuma: 'usted sí puede pagar fiado'.",
    imagen: "", 
  },
  {
    titulo: "Vaca influencer",
    contenido:
      "En Boyacá una vaca se volvió famosa en TikTok por hacer caras cuando le toman selfies.",
    imagen: "", 
  },
  {
    titulo: "Trancón gourmet",
    contenido:
      "Un vendedor de empanadas en un trancón de la 30 ya tiene más clientes que un restaurante en la zona rosa.",
    imagen: "", 
  },
  {
    titulo: "Chancla perdida",
    contenido:
      "Una mamá en Bucaramanga lanzó la chancla y nunca volvió. Expertos creen que entró a otra dimensión.",
    imagen: "", 
  },
  {
    titulo: "Perro político",
    contenido:
      "En Pasto un perro callejero fue elegido 'presidente del barrio'. Prometió huesos gratis y menos pirotecnia.",
    imagen:
      "https://images.unsplash.com/photo-1601758123927-196d2ccc90ec?fit=crop&w=700&q=80",
  },
  {
    titulo: "Sancocho espacial",
    contenido:
      "En Villavicencio intentaron cocinar un sancocho con fuego de cohete artesanal. El sancocho salió volando antes que estuviera.",
    imagen: "", 
  },
  {
    titulo: "Ciclista dormido",
    contenido:
      "En Tunja un ciclista fue visto pedaleando mientras dormía. Nadie se explica cómo llegó a la meta.",
    imagen: "", 
  },
  {
    titulo: "Plátano fashion",
    contenido:
      "En la Costa un señor salió con un plátano maduro en el bolsillo como accesorio de moda.",
    imagen: "", 
  },
  {
    titulo: "Semáforo bailarín",
    contenido:
      "Un semáforo en Bucaramanga dejó de funcionar y un policía lo reemplazó bailando salsa choke.",
    imagen: "", 
  },
  {
    titulo: "WhatsApp caído",
    contenido:
      "Colombia entera colapsó porque se cayó WhatsApp. Algunos jóvenes conocieron a sus vecinos por primera vez.",
    imagen:
      "https://images.unsplash.com/photo-1600269452121-7c05d6f8d65c?fit=crop&w=700&q=80",
  },
  {
    titulo: "Taxi motivador",
    contenido:
      "En Barranquilla un taxista da discursos de autoestima en lugar de cobrar la carrera completa.",
    imagen: "", 
  },
  {
    titulo: "Panadero influencer",
    contenido:
      "Un panadero en Pereira sube fotos de pandebonos y ya tiene 2 millones de seguidores.",
    imagen: "", 
  },
  {
    titulo: "Mono gamer",
    contenido:
      "En la Amazonía un mono fue visto jugando Free Fire en un celular robado.",
    imagen:
      "https://images.unsplash.com/photo-1615461066845-0cfce4df3c17?fit=crop&w=700&q=80",
  },
  {
    titulo: "Pollo rebelde",
    contenido:
      "En Ibagué un pollo asado salió corriendo de la brasa y entró a un gimnasio. Ahora es entrenador fitness.",
    imagen: "", 
  },
  {
    titulo: "Arequipe explosivo",
    contenido:
      "En Manizales un tarro de arequipe explotó en una tienda porque alguien dijo 'no hay postre'.",
    imagen: "", 
  },
  {
    titulo: "Bicicleta musical",
    contenido:
      "En Bogotá un señor adaptó una bicicleta para que suene como una vuvuzela cuando pedalea.",
    imagen: "", 
  },
  {
    titulo: "Tinto político",
    contenido:
      "En el Congreso un representante propuso que el café sea la moneda oficial del país.",
    imagen: "", 
  },
  {
    titulo: "Patacón volador",
    contenido:
      "En Cartagena un patacón voló con el viento y aterrizó en un plato de ceviche. Ahora lo llaman 'fusión costeña'.",
    imagen: "", 
  },
  {
    titulo: "Chiva DJ",
    contenido:
      "En Antioquia una chiva rumbera puso vallenato remix con electrónica. Hasta las vacas bailaron.",
    imagen: "", 
  },
  {
    titulo: "Coca-Cola con aguardiente",
    contenido:
      "En Cali un tendero lanzó una nueva bebida energética llamada 'Despecho 5000'.",
    imagen: "", 
  },
  {
    titulo: "Tortuga rápida",
    contenido:
      "En Santa Marta una tortuga se escapó corriendo. Los vecinos aseguran que se metió Red Bull.",
    imagen: "", 
  },
  {
    titulo: "Guayabo eterno",
    contenido:
      "Un caleño despertó con guayabo de 3 días y pidió incapacidad laboral.",
    imagen: "", 
  },
  {
    titulo: "Chocoramo espacial",
    contenido:
      "Un astronauta colombiano llevó un Chocoramo al espacio y ahora flota en la estación espacial.",
    imagen: "", 
  },
  {
    titulo: "Perrito alcalde",
    contenido:
      "En un pueblo pequeño eligieron a un perrito como alcalde. Primer decreto: paseos obligatorios a las 5pm.",
    imagen: "", 
  },
  {
    titulo: "Mototaxi volador",
    contenido:
      "En Sincelejo inventaron el primer mototaxi con alas. Primer vuelo: hasta la tienda de la esquina.",
    imagen: "", 
  },
  {
    titulo: "Empanada sospechosa",
    contenido:
      "Una empanada en Cúcuta salió tan grande que los vecinos creen que fue fabricada por alienígenas.",
    imagen: "", 
  },
  {
    titulo: "Mango asesino",
    contenido:
      "Un mango cayó de un árbol y tumbó a un ciclista. El mango huyó de la escena.",
    imagen: "", 
  },
  {
    titulo: "Sancocho XXL",
    contenido:
      "En Tolima hicieron un sancocho tan grande que usaron una piscina como olla.",
    imagen: "", 
  },
  {
    titulo: "Gallina actriz",
    contenido:
      "En Huila una gallina participó en una novela y pidió contrato exclusivo.",
    imagen: "", 
  },
  {
    titulo: "Tamal futurista",
    contenido:
      "En Bogotá alguien hizo un tamal vegano con hologramas de carne.",
    imagen:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?fit=crop&w=700&q=80",
  },
  {
    titulo: "Chanclas con WiFi",
    contenido:
      "Un inventor costeño creó unas chanclas que se conectan a internet. El problema: solo agarran señal en la playa.",
    imagen: "", 
  },
  {
    titulo: "Silla bailarina",
    contenido:
      "En Medellín una silla empezó a moverse sola en una fiesta. Resulta que tenía bluetooth y estaba emparejada con la música.",
    imagen:
      "https://images.unsplash.com/photo-1598300042247-2d7d72673c89?fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] p-6">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
        Bienvenido a Chismofilia 📰
      </h1>

      {/* 📌 GRID de noticias */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((n, i) => (
          <FlipCard
            key={i}
            front={<NoticiaCard titulo={n.titulo} imagen={n.imagen} />}
            back={<NoticiaCard titulo={n.titulo} contenido={n.contenido} imagen={n.imagen} />}
          />
        ))}
      </div>
    </main>
  );
}
