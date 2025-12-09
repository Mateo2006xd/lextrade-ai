// app/parametros/page.tsx

export default function ParametrosPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Flujo del Generador (Paso 1: Parámetros Iniciales)
      </h1>

      <form className="bg-white p-6 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Campo: Nombre de las Partes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nombre de las Partes:</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Ej: Vendedor S.A. y Comprador Ltda." required />
          </div>

          {/* Campo CRÍTICO: Producto para el Análisis de Riesgo */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Producto (Para Análisis de Riesgo):</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required>
              <option value="">Selecciona el Tipo</option>
              <option value="Fragil">Frágil (Vidrio, Electrónica de Alto Valor)</option>
              <option value="Granel">Granel (Minerales, Cereales)</option>
              <option value="Estandar">Estándar (Ropa, Juguetes)</option>
            </select>
          </div>

          {/* Campo: Jurisdicción Aplicable */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Jurisdicción Aplicable:</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Ej: Leyes de Singapur / CISG" />
          </div>

          {/* Campo: Moneda */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Moneda:</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="USD, EUR, etc." />
          </div>
        </div>

        <div className="mt-8 text-right">
          {/* Este botón llevará al Paso 2: Incoterm CRÍTICO */}
          <a 
            href="/incoterm"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Siguiente: Incoterm CRÍTICO
          </a>
        </div>
      </form>
    </div>
  );
}