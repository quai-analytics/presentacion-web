import { useState } from "react";

interface PredictionResult {
  estimated: number;
  lowerBound: number;
  upperBound: number;
}

const locations = [
  "San Francisco",
  "Costa del Este",
  "Punta Pacífica",
  "Bella Vista",
  "Obarrio"
];

const buildings = [
  "Torre Central",
  "Ocean View",
  "Sky Residence",
  "Plaza Tower",
  "Metropolitan"
];

export function PropertyPricePredictor() {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [size, setSize] = useState(120);
  const [parkingSpaces, setParkingSpaces] = useState(1);
  const [hasPhotos, setHasPhotos] = useState("Sí");
  const [location, setLocation] = useState(locations[0]);
  const [building, setBuilding] = useState(buildings[0]);
  const [hasPool, setHasPool] = useState("no");
  const [isCommercial, setIsCommercial] = useState("no");
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    setIsLoading(true);

    // Preparar los datos para enviar al backend
    const inputData = {
      has_photos: hasPhotos,
      location: location,
      building: building,
      bathrooms: bathrooms,
      has_pool: hasPool,
      bedrooms: bedrooms,
      size_m2: size,
      parking_spaces: parkingSpaces
    };

    try {
      const baseUrl = (import.meta as any).env?.VITE_API_URL as string | undefined;
      if (baseUrl) {
        const response = await fetch(`${baseUrl.replace(/\/$/, '')}/predict`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inputData)
        });
        if (!response.ok) {
          const txt = await response.text();
          throw new Error(`API ${response.status}: ${txt}`);
        }
        const result = (await response.json()) as PredictionResult;
        setPrediction(result);
      } else {
        // Demo con datos simulados (fallback cuando no hay API configurada)
        await new Promise((resolve) => setTimeout(resolve, 800));
        const basePrice = 150000;
        const pricePerM2 = 2000;
        const bedroomValue = bedrooms * 25000;
        const bathroomValue = bathrooms * 15000;
        const parkingValue = parkingSpaces * 10000;
        const locationMultiplier = location === "Punta Pacífica" ? 1.3 : 1.0;
        const estimated = Math.round(
          (basePrice + size * pricePerM2 + bedroomValue + bathroomValue + parkingValue) * locationMultiplier
        );
        const marginOfError = 10000;
        setPrediction({
          estimated,
          lowerBound: estimated - marginOfError,
          upperBound: estimated + marginOfError
        });
      }
    } catch (error) {
      console.error("Error en predicción:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-50 mb-2">
            🏠 Predicción de Precios de Propiedades
          </h2>
          <p className="text-sm text-slate-300">
            ℹ️ Prueba de concepto que combina modelos de ML y data del mercado local para predecir el valor de tu
            propiedad en Panamá. Ajusta características y obtén al instante un precio estimado junto a su intervalo de
            confianza al 95%.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-slate-100 mb-4">Detalles de la Propiedad</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Columna 1 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Habitaciones (bedroom)
              </label>
              <input
                type="number"
                min={0}
                max={10}
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Baños (bathrooms)
              </label>
              <input
                type="number"
                min={0}
                max={10}
                value={bathrooms}
                onChange={(e) => setBathrooms(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Superficie en m² (size)
              </label>
              <input
                type="number"
                min={0}
                step={10}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Estacionamientos (parking_spaces)
              </label>
              <input
                type="number"
                min={0}
                max={10}
                value={parkingSpaces}
                onChange={(e) => setParkingSpaces(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              />
            </div>
          </div>

          {/* Columna 2 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                ¿Tiene fotos? (photos)
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setHasPhotos("Sí")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    hasPhotos === "Sí"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setHasPhotos("No")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    hasPhotos === "No"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Zona (location)
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Edificio
              </label>
              <select
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-slate-100 focus:border-quai-teal focus:outline-none"
              >
                {buildings.map((bld) => (
                  <option key={bld} value={bld}>
                    {bld}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                ¿Tiene piscina?
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setHasPool("sí")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    hasPool === "sí"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setHasPool("no")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    hasPool === "no"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                ¿Es de uso comercial? (commercial)
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsCommercial("sí")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isCommercial === "sí"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  Sí
                </button>
                <button
                  onClick={() => setIsCommercial("no")}
                  className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isCommercial === "no"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-quai-teal"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={isLoading}
              className="w-full mt-4 rounded-full bg-quai-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Calculando..." : "Calcular Precio de Venta"}
            </button>
          </div>
        </div>

        {/* Resultados */}
        {prediction && (
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-lg font-semibold text-slate-100 mb-4">Predicción de Precio de Propiedad</h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-xs text-slate-400 mb-1">📈 Estimado</p>
                <p className="text-2xl font-bold text-quai-teal">${prediction.estimated.toLocaleString()}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-xs text-slate-400 mb-1">⬇️ Límite Inferior</p>
                <p className="text-2xl font-bold text-slate-300">${prediction.lowerBound.toLocaleString()}</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-xs text-slate-400 mb-1">⬆️ Límite Superior</p>
                <p className="text-2xl font-bold text-slate-300">${prediction.upperBound.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
