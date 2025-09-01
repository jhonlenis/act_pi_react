"use client";
import { useState } from "react";

const noticias = [
  { id: 1, texto: "Vecino asegura que su perro habla paisa, pero solo cuando hay bandeja paisa de por medio." },
  { id: 2, texto: "En Cali descubren salsa tan pegajosa que la gente no puede dejar de bailar por 3 horas seguidas." },
  { id: 3, texto: "Abuela en Medellín confunde el celular con el control del televisor y logra cambiar de canal en WhatsApp." },
  { id: 4, texto: "Taxista bogotano jura que su pito tiene melodía de vallenato." },
  { id: 5, texto: "En Barranquilla organizan carnaval hasta en la fila del banco." },
  { id: 6, texto: "Paisa intenta hacer dieta, pero solo logra reemplazar la arepa por dos más pequeñas." },
  { id: 7, texto: "Se vende nevera usada, enfría tanto que hasta las deudas se congelan." },
  { id: 8, texto: "Encuentran en Pasto al primer hombre que sabe armar la ruana en menos de 5 segundos." },
  { id: 9, texto: "Hombre asegura haber visto al diablo... pero resultó ser su suegra en chanclas." },
  { id: 10, texto: "Estudiante universitario sobrevive una semana solo con tinto y empanadas." },
  { id: 11, texto: "Inventan reloj que mide el tiempo según el número de tazas de café consumidas." },
  { id: 12, texto: "Gallo de finca canta tan duro que ya lo están contratando para conciertos." },
  { id: 13, texto: "En Bogotá, trancones tan largos que ya nombraron un alcalde en la fila." },
  { id: 14, texto: "Colombiano intenta ahorrar, pero la tiendita del barrio no da tregua." },
  { id: 15, texto: "Perrito en Bucaramanga aprende a bailar reguetón mejor que su dueño." },
  { id: 16, texto: "Abuelita en Tunja cura el mal de ojo con Wi-Fi bendito." },
  { id: 17, texto: "Pareja pelea porque él pidió bandeja paisa sin chicharrón: '¡eso es un crimen!'" },
  { id: 18, texto: "Vecino asegura que su ventilador canta carranga cuando hace calor." },
  { id: 19, texto: "Se arma discusión en supermercado por último paquete de buñuelos congelados." },
  { id: 20, texto: "Hombre compra sombrero vueltiao y automáticamente gana +100 en estilo." },
  { id: 21, texto: "Taxista en Cartagena ofrece tour y terapia psicológica incluida." },
  { id: 22, texto: "Estudiante hace fila para pagar matrícula y logra graduarse en la misma fila." },
  { id: 23, texto: "Policía multa a joven, pero terminan jugando parqués." },
  { id: 24, texto: "Se reporta avistamiento de OVNI, pero resultó ser una cometa con luces." },
  { id: 25, texto: "Inventan ruana impermeable: 'Ahora sí podemos ir a misa bajo la lluvia'." },
  { id: 26, texto: "Se descubre que el café colombiano es 50% cafeína y 50% chisme." },
  { id: 27, texto: "Niño asegura que su tarea se perdió en un aguacero, pero apareció en la lavadora." },
  { id: 28, texto: "En Boyacá organizan competencia de silbidos con eco." },
  { id: 29, texto: "Hombre se declara vegano, pero solo cuando está caro el pollo." },
  { id: 30, texto: "Anciano dice que antes todo era más barato, incluso quejas." },
  { id: 31, texto: "Feria de pueblo termina en campeonato nacional de tejo." },
  { id: 32, texto: "Colombiano inventa 'pico y chisme' para no aburrirse en cuarentena." },
  { id: 33, texto: "Se viraliza video de vaca bailando cumbia en Montería." },
  { id: 34, texto: "Estudiante descubre que el Wi-Fi del vecino es más estable que su relación." },
  { id: 35, texto: "Se confirma que la empanada con ají cura hasta la tusa." },
];

export default function NoticiasLibro() {
  const [pagina, setPagina] = useState(0);

  const siguiente = () => {
    if (pagina < noticias.length - 1) setPagina(pagina + 1);
  };

  const anterior = () => {
    if (pagina > 0) setPagina(pagina - 1);
  };

  return (
    <div className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 max-w-xl text-center relative">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Noticias Chismosas 📖</h2>
      <p className="text-gray-800 text-lg">{noticias[pagina].texto}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={anterior}
          className="btn bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 disabled:opacity-50"
          disabled={pagina === 0}
        >
          ◀ Anterior
        </button>
        <button
          onClick={siguiente}
          className="btn bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 disabled:opacity-50"
          disabled={pagina === noticias.length - 1}
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}