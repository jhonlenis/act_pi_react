import { Noticia } from "@/app/data/noticiasData";

type Props = {
  noticia: Noticia;
};

export default function NoticiasCard({ noticia }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center text-center p-4">
      {noticia.imagen && (
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          className="rounded-lg mb-4 w-full h-64 object-cover"
        />
      )}
      <h2 className="text-2xl font-bold mb-3">{noticia.titulo}</h2>
      <p className="text-gray-700 text-base">{noticia.contenido}</p>
    </div>
  );
}
