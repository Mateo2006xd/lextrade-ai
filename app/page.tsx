import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        Generador Inteligente de Contratos Internacionales
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mb-8">
        Crea contratos 100% compatibles con Incoterms 2020. Reduce disputas legales y errores.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Proyecto: LexTrade AI
        </h2>
        <p className="mb-6 text-gray-600">
          Nuestra función principal es la **Reducción de riesgo legal** y optimización de cláusulas contractuales para transacciones internacionales basadas en Incoterms 2020[cite: 9].
        </p>
        {/* Este botón llevará al Flujo del Generador (Paso 1: Parámetros) */}
        <a 
          href="/parametros" 
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition duration-300 shadow-lg"
        >
          Empezar Contrato Gratis
        </a>
      </div>
    </div>
  );
}
