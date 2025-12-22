import { Link } from "react-router-dom";
import { Section } from "../components/Section";

const servicios = [
  {
    title: "Consultoría estratégica",
    desc: "Modelos de negocio digitales y gestión del cambio."
  },
  {
    title: "Transformación digital",
    desc: "Diagnóstico tecnológico y roadmap digital enfocado en valor."
  },
  {
    title: "Automatización de procesos (RPA)",
    desc: "Optimización operativa y reducción de errores repetitivos."
  },
  {
    title: "Aplicación de IA",
    desc: "Modelos predictivos, chatbots y NLP para decisiones rápidas."
  },
  {
    title: "Integración de sistemas",
    desc: "APIs, ERP y CRMs conectados con infraestructura en la nube."
  }
];

const pasosMetodologia = [
  {
    title: "Diagnóstico / Demo",
    desc: "Mapeo y análisis de procesos actuales para identificar mejoras."
  },
  {
    title: "Co-diseño de soluciones",
    desc: "Diseño colaborativo de soluciones adaptadas al cliente."
  },
  {
    title: "Desarrollo",
    desc: "Configuración y despliegue de pruebas de concepto y MVP."
  },
  {
    title: "Pruebas / Entrega",
    desc: "Validación de resultados y ajustes para máxima performance."
  },
  {
    title: "Escalamiento y soporte",
    desc: "Ampliación progresiva y acompañamiento continuo."
  }
];

const entregas = [
  {
    title: "Proyecto fijo",
    desc: "Alcance definido y acordado desde el inicio."
  },
  {
    title: "Consultoría",
    desc: "Evaluación integral y propuesta conjunta de valor."
  },
  {
    title: "Proyecto híbrido",
    desc: "Alcance preliminar con iteraciones de mejora continua."
  },
  {
    title: "Acompañamiento",
    desc: "Soporte continuo, mantenimiento y capacitaciones."
  }
];

const casos = [
  {
    sector: "Energía",
    dolor: [
      { emoji: "📊", text: "Pérdida de eficiencia en operación" },
      { emoji: "📉", text: "Costos elevados de mantenimiento" },
      { emoji: "⚠️", text: "Fallas no previstas en equipos críticos" }
    ],
    solucion: [
      { emoji: "🤖", text: "Modelo predictivo de mantenimiento" },
      { emoji: "⚡", text: "Alertas tempranas automatizadas" },
      { emoji: "📈", text: "Dashboard de KPIs en tiempo real" }
    ],
    impacto: "40% reducción en paros no planificados"
  },
  {
    sector: "Salud",
    dolor: [
      { emoji: "📋", text: "Saturación en citas" },
      { emoji: "⏳", text: "Largos tiempos de espera" },
      { emoji: "📞", text: "Gestión manual de turnos" }
    ],
    solucion: [
      { emoji: "🤖", text: "Chatbot de agendar citas" },
      { emoji: "📲", text: "Notificaciones automáticas" },
      { emoji: "💬", text: "Respuestas a FAQs 24/7" }
    ],
    impacto: "60% reducción en tiempos de espera"
  }
];

const sectores = ["Energía", "Salud", "Finanzas", "Retail", "Logística"];
const tecnologias = ["Python", "Azure", "OpenAI", "Power BI", "UiPath", "SAP"];
const certificaciones = ["Microsoft Partner", "ISO 27001", "Scrum Master"];

export function HomePage() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Hero */}
      <Section id="inicio" title="" className="min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
              Transformamos procesos en{" "}
              <span className="text-quai-teal">resultados medibles</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              QuAI Analytics impulsa tu negocio con IA, automatización y datos en tiempo real.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/50768201544"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
              >
                <span>💬</span>
                Agenda una reunión por WhatsApp
              </a>
              <Link
                to="/demo"
                className="rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
              >
                Probar demo interactiva
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/image/image_2.png" alt="QuAI Analytics" className="w-full max-w-md rounded-2xl shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* Quiénes somos */}
      <Section id="quienes-somos" title="Quiénes somos">
        <div className="space-y-8">
          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Somos un equipo de ingenieros, analistas y consultores especializados en inteligencia artificial, ciencia de
            datos y automatización. Nuestra misión es llevar la transformación digital a empresas de cualquier sector,
            convirtiendo procesos manuales en soluciones inteligentes y escalables que generan valor inmediato.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-xl font-semibold text-quai-teal mb-3">🎯 Misión</h3>
              <p className="text-slate-300 leading-relaxed">
                Facilitar la transformación digital de empresas a través de soluciones prácticas de IA y automatización
                que generen impacto real y medible desde el día uno.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-xl font-semibold text-quai-teal mb-3">🔭 Visión</h3>
              <p className="text-slate-300 leading-relaxed">
                Ser referentes en LATAM como aliados estratégicos para empresas que buscan escalar mediante tecnología,
                datos e innovación continua.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Servicios */}
      <Section id="servicios" title="Servicios">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {servicios.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-quai-teal/50 transition-colors">
              <h3 className="text-lg font-semibold text-slate-50 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Metodología */}
      <Section id="metodologia" title="Metodología">
        <div className="max-w-5xl mx-auto space-y-6">
          {pasosMetodologia.map((p, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-quai-teal/20 border border-quai-teal flex items-center justify-center text-quai-teal font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Entregas */}
      <Section id="entregas" title="Entregas de valor">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {entregas.map((e, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 text-center hover:border-quai-teal/50 transition-colors">
              <h3 className="text-lg font-semibold text-slate-50 mb-2">{e.title}</h3>
              <p className="text-sm text-slate-400">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Casos */}
      <Section id="casos" title="Casos reales">
        <div className="space-y-8 max-w-5xl mx-auto">
          {casos.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-2xl font-semibold text-slate-50 mb-4">{c.sector}</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="rounded-xl bg-gradient-to-br from-red-950/30 to-slate-950 border border-red-900/30 p-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wide">
                    💢 Puntos de dolor
                  </h4>
                  <ul className="space-y-2">
                    {c.dolor.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span>{d.emoji}</span>
                        <span>{d.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-emerald-950/30 to-slate-950 border border-emerald-900/30 p-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">
                    ✨ Solución
                  </h4>
                  <ul className="space-y-2">
                    {c.solucion.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span>{s.emoji}</span>
                        <span>{s.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-quai-teal/10 to-transparent border border-quai-teal/30 p-4">
                <p className="text-quai-teal font-semibold">📊 Impacto: {c.impacto}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experiencia y Contacto */}
      <Section id="experiencia" title="Experiencia">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-lg font-semibold text-quai-teal mb-4">🏢 Sectores</h3>
              <div className="flex flex-wrap gap-2">
                {sectores.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-lg font-semibold text-quai-teal mb-4">🛠️ Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {tecnologias.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-lg font-semibold text-quai-teal mb-4">🏆 Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                {certificaciones.map((c, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-8">
            <h3 className="text-2xl font-semibold text-slate-50 mb-6">Nuestro Equipo</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-lg font-semibold text-quai-teal">Ricardo Álvarez</p>
                <p className="text-sm text-slate-400">Data Scientist & Co-Founder</p>
                <p className="text-sm text-slate-300">📧 ricardo.alvarez@quaianalytics.com</p>
                <p className="text-sm text-slate-400">Experto en Ciencias de Datos y Gestión Estratégica</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-quai-teal">Alexander Cuadra</p>
                <p className="text-sm text-slate-400">Data Engineer & Co-Founder</p>
                <p className="text-sm text-slate-300">📧 alexander.cuadra@quaianalytics.com</p>
                <p className="text-sm text-slate-400">Especialista en Analítica e Ingeniería de Datos.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
