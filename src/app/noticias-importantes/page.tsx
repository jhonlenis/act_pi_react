import noticiasData from "../data/Noticias.json";

export default function NoticiasImportantesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-red-600">
        🚨 Noticias Importantes
      </h1>
      <ul className="space-y-2">
        {noticiasData.importantes.map((noticia, index) => (
          <li
            key={index}
            className="bg-red-100 p-3 rounded-lg shadow hover:bg-red-200 transition"
          >
            {noticia}
          </li>
        ))}
      </ul>
    </div>
  );
}
