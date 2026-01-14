import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components/Section";

const demos = [
  {
    id: "property-price",
    title: "Predicción de Precios",
    description: "Modelo de ML para estimar precios de propiedades inmobiliarias en tiempo real",
    path: "/demo/property-price",
    tags: ["Machine Learning", "Real Estate", "Predicción"]
  },
  {
    id: "chatbot",
    title: "Asistente Virtual IA",
    description: "Chatbot inteligente con procesamiento de lenguaje natural para atención al cliente",
    path: "/demo/chatbot",
    tags: ["NLP", "Chatbot", "Automatización"]
  },
  {
    id: "calendar-assistant",
    title: "Asistente de Calendario",
    description: "Gestión inteligente de citas y eventos con integración a Google Calendar",
    path: "/demo/calendar-assistant",
    tags: ["IA", "Automatización", "Productividad"]
  },
  {
    id: "customer-clustering",
    title: "Segmentación de Clientes",
    description: "Análisis RFM y clustering con K-Means para identificar segmentos de clientes",
    path: "/demo/customer-clustering",
    tags: ["Machine Learning", "Marketing", "CRM"]
  }
];

export function DemoPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Demo */}
      <Section id="demo-hero" title="" className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
            <span className="text-quai-teal">Demos Interactivas</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Explora nuestras soluciones de IA en acción. Elige una demo para comenzar.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </Section>

      {/* Selector de Demos */}
      <Section id="demos" title="Selecciona una Demo">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {demos.map((demo) => (
            <div
              key={demo.id}
              onClick={() => navigate(demo.path)}
              className="group rounded-2xl border border-slate-800 bg-slate-950/50 p-8 hover:border-quai-teal/50 hover:bg-slate-900/50 transition-all cursor-pointer"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-50 group-hover:text-quai-teal transition-colors">
                  {demo.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {demo.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {demo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-quai-teal font-semibold pt-2">
                  <span>Probar ahora</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Próximamente */}
      <Section id="coming-soon" title="Próximamente">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 text-center">
            <p className="text-slate-400 mb-4">Estamos trabajando en más demos interactivas</p>
            <div className="flex flex-wrap gap-3 justify-center text-sm text-slate-500">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">Análisis de Sentimientos</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">OCR Inteligente</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">Detección de Anomalías</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">Generación de Reportes</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to action */}
      <Section id="demo-cta" title="">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">¿Te interesa una solución personalizada?</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Estas demos son solo el comienzo. Podemos crear soluciones de IA adaptadas específicamente 
              a las necesidades de tu negocio.
            </p>
            <a
              href="https://wa.me/50768201544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
            >
              <span>→</span>
              Agenda una consultoría gratuita
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
