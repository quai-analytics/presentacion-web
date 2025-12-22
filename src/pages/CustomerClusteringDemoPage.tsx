import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { CustomerClustering } from "../components/CustomerClustering";

export function CustomerClusteringDemoPage() {
  return (
    <>
      {/* Hero Demo */}
      <Section id="clustering-demo-hero" title="" className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
            <span className="text-quai-teal">Segmentación de Clientes con IA</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Descubre cómo agrupar clientes usando análisis RFM y clustering K-Means para estrategias de marketing personalizadas.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
            >
              ← Ver todas las demos
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </Section>

      {/* Demo */}
      <Section id="clustering" title="Clustering de Clientes">
        <CustomerClustering />
      </Section>

      {/* Información adicional */}
      <Section id="clustering-info" title="¿Cómo funciona?">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🤖 Algoritmo K-Means</h3>
            <p className="text-slate-300 leading-relaxed">
              Esta demo utiliza el algoritmo K-Means para segmentar clientes basándose en métricas RFM (Recurrencia, Frecuencia, Monetario).
              El análisis RFM es una técnica probada en marketing que identifica los clientes más valiosos y permite personalizar
              estrategias para cada segmento.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">📊 Aplicaciones</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Campañas de email marketing dirigidas a cada segmento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Programas de fidelización para clientes de alto valor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Ofertas de reactivación para clientes en riesgo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Optimización de presupuesto publicitario por segmento</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">💡 Interpretación de Clusters</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Clientes Champions:</p>
                <p className="text-xs text-slate-300">Baja recurrencia, alta frecuencia, alto monetario</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Clientes en Riesgo:</p>
                <p className="text-xs text-slate-300">Alta recurrencia, baja frecuencia, variable monetario</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Clientes Potenciales:</p>
                <p className="text-xs text-slate-300">Baja recurrencia, baja frecuencia, bajo monetario</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Clientes Leales:</p>
                <p className="text-xs text-slate-300">Variable recurrencia, alta frecuencia, variable monetario</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🚀 ¿Quieres segmentar tus clientes?</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Podemos implementar un sistema de segmentación de clientes conectado a tu CRM o base de datos,
              con dashboards automatizados y recomendaciones accionables. Contáctanos para una consultoría gratuita.
            </p>
            <a
              href="https://wa.me/50768201544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              <span>💬</span>
              Agenda una demo personalizada
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
