import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { PropertyPricePredictor } from "../components/PropertyPricePredictor";

export function DemoPage() {
  return (
    <>
      {/* Hero Demo */}
      <Section id="demo-hero" title="" className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
            <span className="text-quai-teal">Demo Interactiva</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Explora nuestras soluciones de IA en acción. Prueba el modelo de predicción de precios de propiedades en tiempo real.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </Section>

      {/* Demo interactiva */}
      <Section id="demo" title="Predicción de Precios de Propiedades">
        <PropertyPricePredictor />
      </Section>

      {/* Información adicional */}
      <Section id="demo-info" title="¿Cómo funciona?">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🤖 Tecnología</h3>
            <p className="text-slate-300 leading-relaxed">
              Este modelo utiliza Machine Learning entrenado con datos reales del mercado inmobiliario. Combina múltiples
              características como ubicación, tamaño, comodidades y características estructurales para generar una
              estimación precisa del precio de mercado.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">📊 Aplicaciones</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Valuación automatizada de portafolios inmobiliarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Detección de oportunidades de inversión</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Optimización de estrategias de pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Análisis de tendencias de mercado en tiempo real</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🚀 ¿Quieres una solución personalizada?</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Podemos adaptar esta tecnología a tu sector y necesidades específicas. Contáctanos para una consultoría
              gratuita y descubre cómo la IA puede transformar tu negocio.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-quai-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
            >
              Agenda una demo personalizada
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
