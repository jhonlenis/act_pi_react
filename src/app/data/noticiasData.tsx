export type Noticia = {
  titulo: string;
  contenido: string;
  imagen?: string;
};

export const noticias: Noticia[] = [
  {
    titulo: "Silla bailarina",
    contenido:
      "En Medellín una silla empezó a moverse sola en una fiesta. Resulta que tenía bluetooth y estaba emparejada con la música.",
    imagen: "/silla.jpg",
  },
  {
    titulo: "Tamal futurista",
    contenido:
      "En Bogotá alguien hizo un tamal vegano con hologramas de carne.",
    imagen: "/tamal.jpg",
  },
  {
    titulo: "Chancla con WiFi",
    contenido:
      "Un inventor creó una chancla que busca sola a quien la pierde usando señal WiFi.",
    imagen: "/chancla.jpg",
  },
];
