import { useState, useMemo } from "react";
import Plot from "react-plotly.js";

interface RFMData {
  ID_Cliente: string;
  Recencia: number;
  Frecuencia: number;
  Monetario: number;
  Cluster?: number;
}

interface ClusterMean {
  Cluster: number;
  Recencia: number;
  Frecuencia: number;
  Monetario: number;
}

export function CustomerClustering() {
  const [numClientes, setNumClientes] = useState(500);
  const [numTransacciones, setNumTransacciones] = useState(5000);
  const [numClusters, setNumClusters] = useState(4);
  const [showElbow, setShowElbow] = useState(false);

  // Generar datos RFM simulados
  const rfmData = useMemo(() => {
    const data: RFMData[] = [];
    
    for (let i = 1; i <= numClientes; i++) {
      const recencia = Math.floor(Math.random() * 365) + 1;
      const frecuencia = Math.floor(Math.random() * 50) + 1;
      const monetario = Math.round((Math.random() * 5000 + 100) * 100) / 100;
      
      data.push({
        ID_Cliente: `C${String(i).padStart(3, '0')}`,
        Recencia: recencia,
        Frecuencia: frecuencia,
        Monetario: monetario
      });
    }
    
    return data;
  }, [numClientes, numTransacciones]);

  // Clustering simple (k-means simplificado)
  const clusteredData = useMemo(() => {
    // Normalizar datos
    const maxRecencia = Math.max(...rfmData.map(d => d.Recencia));
    const maxFrecuencia = Math.max(...rfmData.map(d => d.Frecuencia));
    const maxMonetario = Math.max(...rfmData.map(d => d.Monetario));

    return rfmData.map(cliente => {
      const r = cliente.Recencia / maxRecencia;
      const f = cliente.Frecuencia / maxFrecuencia;
      const m = cliente.Monetario / maxMonetario;

      // Asignación simple de clusters basada en percentiles
      let cluster = 0;
      const score = (1 - r) * 0.3 + f * 0.3 + m * 0.4; // Score combinado
      
      if (numClusters === 2) {
        cluster = score > 0.5 ? 1 : 0;
      } else if (numClusters === 3) {
        if (score < 0.33) cluster = 0;
        else if (score < 0.66) cluster = 1;
        else cluster = 2;
      } else if (numClusters === 4) {
        if (score < 0.25) cluster = 0;
        else if (score < 0.5) cluster = 1;
        else if (score < 0.75) cluster = 2;
        else cluster = 3;
      } else {
        cluster = Math.floor(score * numClusters);
      }

      return { ...cliente, Cluster: cluster };
    });
  }, [rfmData, numClusters]);

  // Calcular medias por cluster
  const clusterMeans: ClusterMean[] = useMemo(() => {
    const means: ClusterMean[] = [];
    
    for (let i = 0; i < numClusters; i++) {
      const clusterData = clusteredData.filter(d => d.Cluster === i);
      if (clusterData.length > 0) {
        means.push({
          Cluster: i,
          Recencia: Math.round(clusterData.reduce((sum, d) => sum + d.Recencia, 0) / clusterData.length),
          Frecuencia: Math.round(clusterData.reduce((sum, d) => sum + d.Frecuencia, 0) / clusterData.length * 10) / 10,
          Monetario: Math.round(clusterData.reduce((sum, d) => sum + d.Monetario, 0) / clusterData.length * 100) / 100
        });
      }
    }
    
    return means;
  }, [clusteredData, numClusters]);

  // Datos para el método del codo (simulado)
  const elbowData = useMemo(() => {
    const data = [];
    for (let k = 1; k <= 10; k++) {
      // Inercia simulada que decrece
      const inertia = 100000 / Math.pow(k, 1.5) + Math.random() * 5000;
      data.push({ k, inertia });
    }
    return data;
  }, []);

  const clusterColors = ['#00D9FF', '#00FF88', '#FFB800', '#FF006E', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444', '#6366F1'];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Controles */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="text-lg font-semibold text-quai-teal mb-4">⚙️ Configuración del Análisis</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Número de Clientes (Simulados): <span className="text-quai-teal font-semibold">{numClientes}</span>
            </label>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={numClientes}
              onChange={(e) => setNumClientes(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-quai-teal"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Número de Transacciones: <span className="text-quai-teal font-semibold">{numTransacciones}</span>
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={numTransacciones}
              onChange={(e) => setNumTransacciones(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-quai-teal"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Número de Clusters (K): <span className="text-quai-teal font-semibold">{numClusters}</span>
            </label>
            <input
              type="range"
              min="2"
              max="10"
              value={numClusters}
              onChange={(e) => setNumClusters(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-quai-teal"
            />
          </div>
        </div>
      </div>

      {/* Datos RFM */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="text-lg font-semibold text-slate-50 mb-3">1. Datos RFM (Recencia, Frecuencia, Monetario)</h3>
        <p className="text-sm text-slate-400 mb-4">
          Estas métricas se calculan a partir de las transacciones de cada cliente para describir su comportamiento de compra.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-900/50 border-b border-slate-800">
              <tr>
                <th className="px-4 py-2 text-left text-slate-300">ID Cliente</th>
                <th className="px-4 py-2 text-left text-slate-300">Recencia (días)</th>
                <th className="px-4 py-2 text-left text-slate-300">Frecuencia</th>
                <th className="px-4 py-2 text-left text-slate-300">Monetario ($)</th>
              </tr>
            </thead>
            <tbody>
              {clusteredData.slice(0, 5).map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50">
                  <td className="px-4 py-2 text-slate-300">{row.ID_Cliente}</td>
                  <td className="px-4 py-2 text-slate-300">{row.Recencia}</td>
                  <td className="px-4 py-2 text-slate-300">{row.Frecuencia}</td>
                  <td className="px-4 py-2 text-slate-300">${row.Monetario.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">Mostrando 5 de {clusteredData.length} clientes</p>
      </div>

      {/* Método del codo */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="text-lg font-semibold text-slate-50 mb-3">2. Método del Codo para Encontrar K</h3>
        <p className="text-sm text-slate-400 mb-4">
          El método del codo ayuda a encontrar el número óptimo de clusters. Buscamos el punto de inflexión en el gráfico.
        </p>
        <label className="flex items-center gap-2 text-sm text-slate-300 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={showElbow}
            onChange={(e) => setShowElbow(e.target.checked)}
            className="w-4 h-4 rounded accent-quai-teal"
          />
          Mostrar gráfico del método del codo
        </label>
        {showElbow && (
          <Plot
            data={[
              {
                x: elbowData.map(d => d.k),
                y: elbowData.map(d => d.inertia),
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: '#00D9FF', size: 8 },
                line: { color: '#00D9FF', width: 2 }
              }
            ]}
            layout={{
              title: 'Método del Codo',
              xaxis: { title: 'Número de Clusters (K)', color: '#cbd5e1' },
              yaxis: { title: 'Inercia', color: '#cbd5e1' },
              paper_bgcolor: 'rgba(0,0,0,0)',
              plot_bgcolor: 'rgba(0,0,0,0)',
              font: { color: '#cbd5e1' }
            }}
            config={{ responsive: true }}
            className="w-full"
          />
        )}
      </div>

      {/* Análisis de clusters */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="text-lg font-semibold text-slate-50 mb-3">3. Análisis de los Clusters</h3>
        <p className="text-sm text-slate-400 mb-4">
          A continuación, se muestran las características promedio de cada segmento de clientes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-900/50 border-b border-slate-800">
              <tr>
                <th className="px-4 py-2 text-left text-slate-300">Cluster</th>
                <th className="px-4 py-2 text-left text-slate-300">Recencia (días)</th>
                <th className="px-4 py-2 text-left text-slate-300">Frecuencia</th>
                <th className="px-4 py-2 text-left text-slate-300">Monetario ($)</th>
              </tr>
            </thead>
            <tbody>
              {clusterMeans.map((row) => (
                <tr key={row.Cluster} className="border-b border-slate-800/50">
                  <td className="px-4 py-2">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: clusterColors[row.Cluster] }}
                    ></span>
                    <span className="text-slate-300">Cluster {row.Cluster}</span>
                  </td>
                  <td className="px-4 py-2 text-slate-300">{row.Recencia}</td>
                  <td className="px-4 py-2 text-slate-300">{row.Frecuencia}</td>
                  <td className="px-4 py-2 text-slate-300">${row.Monetario.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-slate-400 space-y-1">
          <p>• <strong>Recencia:</strong> Días desde la última compra. A menor valor, más reciente.</p>
          <p>• <strong>Frecuencia:</strong> Número de compras. A mayor valor, más compras.</p>
          <p>• <strong>Monetario:</strong> Gasto total. A mayor valor, más dinero gastado.</p>
        </div>
      </div>

      {/* Visualización 3D */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
        <h3 className="text-lg font-semibold text-slate-50 mb-3">4. Visualización de los Clusters</h3>
        <p className="text-sm text-slate-400 mb-4">
          Observa la distribución de los clientes en el espacio 3D de RFM. Cada color representa un cluster.
        </p>
        <Plot
          data={Array.from({ length: numClusters }, (_, i) => {
            const clusterData = clusteredData.filter(d => d.Cluster === i);
            return {
              x: clusterData.map(d => d.Recencia),
              y: clusterData.map(d => d.Frecuencia),
              z: clusterData.map(d => d.Monetario),
              type: 'scatter3d',
              mode: 'markers',
              name: `Cluster ${i}`,
              marker: {
                size: 4,
                color: clusterColors[i],
                opacity: 0.8
              }
            };
          })}
          layout={{
            title: 'Segmentación de Clientes (RFM)',
            scene: {
              xaxis: { title: 'Recencia', color: '#cbd5e1' },
              yaxis: { title: 'Frecuencia', color: '#cbd5e1' },
              zaxis: { title: 'Monetario', color: '#cbd5e1' }
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: { color: '#cbd5e1' },
            showlegend: true,
            legend: { x: 0, y: 1 }
          }}
          config={{ responsive: true }}
          className="w-full"
          style={{ height: '600px' }}
        />
      </div>
    </div>
  );
}
