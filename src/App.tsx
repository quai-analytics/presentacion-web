import { Section } from "./components/Section";
import { PropertyPricePredictor } from "./components/PropertyPricePredictor";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "mision-vision", label: "Misión y visión" },
  { id: "servicios", label: "Servicios" },
  { id: "beneficios", label: "Beneficios" },
  { id: "metodologia", label: "Metodología" },
  { id: "entregas", label: "Entregas" },
  { id: "casos", label: "Casos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "demo", label: "Demo" },
  { id: "contacto", label: "Contacto" }
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

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

const beneficios = [
  "Ahorro de tiempo automatizando tareas repetitivas.",
  "Reducción de costos y reprocesos operativos.",
  "Decisiones más rápidas con visión 360 de KPIs.",
  "Mejor experiencia del cliente con respuestas inmediatas.",
  "Escalabilidad sin crecer en costos fijos.",
  "Mayor seguridad y control con trazabilidad completa."
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
      "Gestión ineficiente de clientes con poca clasificación.",
      "Falta de visibilidad en métricas clave para decidir.",
      "Contabilidad ingresada manualmente con errores y pérdida de tiempo."
    ],
    solucion: [
      "Clasificación automática de clientes con bots inteligentes.",
      "Dashboards personalizados para KPIs en tiempo real.",
      "Automatización contable e integración con sistemas existentes."
    ],
    impacto: [
      "Reducción del 65% del tiempo administrativo.",
      "Disminución de errores contables gracias a la automatización.",
      "Mayor control de indicadores y mejor experiencia del cliente."
    ]
  },
  {
    sector: "Salud",
    dolor: [
      "Citas agendadas manualmente con retrasos y errores.",
      "Procesos manuales de revisión diaria consumen tiempo del personal.",
      "Historial clínico disperso y difícil acceso a información del paciente."
    ],
    solucion: [
      "Automatización de agendas con chatbots y formularios integrados al calendario.",
      "Flujos automatizados que integran registro y notificaciones.",
      "Centralización de datos clínicos con búsqueda inteligente y dashboards médicos."
    ],
    impacto: [
      "Reducción del 60% en tiempo administrativo.",
      "Mayor precisión en la asignación de citas.",
      "Mejor experiencia del paciente con recordatorios automáticos."
    ]
  }
];

const stack = {
  sectores: "Finanzas, Retail, Logística, Real Estate, Educación, Entretenimiento, Tecnología",
  tecnologias: [
    "OpenAI",
    "Azure",
    "AWS",
    "Tableau",
    "Power BI",
    "UiPath",
    "n8n",
    "Git",
    "Google Cloud"
  ],
  certificaciones:
    "Uso de AWS, Azure, GCP y Databricks; estudios en analítica de datos con IA"
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-quai-navy via-slate-950 to-slate-950 text-slate-50">
      {/* Barra superior */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-quai-navy/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src="/quai_analytics_logo.png" alt="QuAI Analytics" className="h-9 w-auto" />
            <div>
              <p className="text-sm font-semibold tracking-wide">QuAI Analytics</p>
              <p className="text-[11px] text-slate-400">Propuesta de Valor</p>
            </div>
          </div>
          <nav className="hidden gap-5 text-xs md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-300 hover:text-quai-teal transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero / Portada */}
      <Section
        id="inicio"

        title="Transformamos tus datos en decisiones inteligentes."
        description="Consultora en Panamá que convierte procesos manuales en soluciones de IA, automatización y analítica avanzada para generar resultados rápidos y medibles."
        dark
      >
        <div className="grid gap-10 md:grid-cols-[2fr,1fr] items-start">
          <div className="space-y-2 text-sm md:text-base text-slate-200">
            <p>
              Ayudamos a negocios a transformar datos en decisiones inteligentes con soluciones de Inteligencia
              Artificial, Automatización y Analítica avanzada.
            </p>
            <p>
              Nuestro enfoque: optimizar procesos, reducir ineficiencias y convertir lo manual en flujos inteligentes
              que produzcan resultados medibles.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("contacto")}
                className="rounded-full bg-quai-teal px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
              >
                Agendar conversación
              </button>
              <button
                onClick={() => scrollTo("servicios")}
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-quai-teal hover:text-quai-teal transition-colors"
              >
                Ver servicios
              </button>
            </div>
          </div>
          <div className="aspect-square rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl">
            <div className="h-full rounded-xl bg-gradient-to-br from-quai-teal/20 via-slate-900 to-slate-950 p-6 flex flex-col justify-center items-center text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-quai-teal mb-2">Consultoría QuAI</p>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">IA · Automatización · Analítica</h3>
                <p className="text-sm text-slate-200">
                  Transformamos operaciones para que tus equipos se enfoquen en decidir, no en digitar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quiénes somos */}
      <Section
        id="quienes-somos"
        eyebrow="Índice"
        title="Quiénes somos"
        description="Consultora que ayuda a negocios a transformar datos en decisiones inteligentes mediante IA, automatización y analítica avanzada."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
            <h3 className="text-lg font-semibold mb-3">¿Qué vendemos y hacemos?</h3>
            <p className="text-sm text-slate-200 mb-3">
              Soluciones a la medida que resuelven problemas específicos del negocio: no vendemos un portafolio fijo,
              diseñamos y entregamos proyectos según la necesidad del cliente.
            </p>
            <p className="text-sm text-slate-200">
              En resumen: ahorramos tiempo y dinero automatizando lo repetitivo y analizando tu información para que
              tomes mejores decisiones.
            </p>
          </div>
          <div className="rounded-2xl border border-quai-teal/50 bg-slate-950/90 p-6">
            <h3 className="text-lg font-semibold mb-3">¿Qué es la IA en negocio?</h3>
            <p className="text-sm text-slate-200 mb-3">
              La IA aprende de datos, reconoce patrones y actúa automáticamente, como lo haría una persona, pero a escala
              y sin programar cada paso.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Responde basado en tus datos, no solo en internet.</li>
              <li>• Puede consultar inventarios, agendar citas o generar reportes.</li>
              <li>• No es solo consulta: ejecuta tareas y genera acciones.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Misión y visión */}
      <Section id="mision-vision" eyebrow="Propósito" title="Misión y visión">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
            <h3 className="text-base font-semibold mb-2">Misión</h3>
            <p className="text-sm text-slate-200">
              Transformar los datos de nuestros clientes en decisiones inteligentes que impulsen su crecimiento, mediante
              soluciones de IA y analítica avanzadas.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
            <h3 className="text-base font-semibold mb-2">Visión</h3>
            <p className="text-sm text-slate-200">
              Ser el socio estratégico que digitaliza y automatiza los procesos de negocio en la región, generando valor
              tangible y medible.
            </p>
          </div>
        </div>
      </Section>

      {/* Servicios */}
      <Section
        id="servicios"
        eyebrow="Servicios"
        title="Lo que hacemos"
        description="Soluciones diseñadas a la medida: consultoría, automatización, IA e integración."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Beneficios */}
      <Section id="beneficios" eyebrow="Beneficios" title="Valor para tu negocio">
        <div className="grid gap-3 md:grid-cols-2">
          {beneficios.map((b) => (
            <div
              key={b}
              className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200"
            >
              {b}
            </div>
          ))}
        </div>
      </Section>

      {/* Metodología */}
      <Section
        id="metodologia"
        eyebrow="Metodología"
        title="Cómo trabajamos"
        description="Un proceso colaborativo que va de diagnóstico a escalamiento."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {pasosMetodologia.map((step, idx) => (
            <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold text-quai-teal mb-1">Paso {idx + 1}</p>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-200">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Entregas de valor */}
      <Section id="entregas" eyebrow="Entregas de valor" title="Opciones de trabajo">
        <div className="grid gap-6 md:grid-cols-2">
          {entregas.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Casos reales */}
      <Section id="casos" eyebrow="Casos reales" title="Posibles casos de uso">
        <div className="grid gap-6 md:grid-cols-2">
          {casos.map((caso) => (
            <div key={caso.sector} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Sector {caso.sector}</h3>
                <span className="text-xs text-quai-teal font-semibold">Caso</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-red-900/60 bg-gradient-to-br from-red-950 via-slate-950 to-slate-950 p-6">
                  <p className="text-sm font-semibold text-slate-100 mb-2">Puntos de dolor</p>
                  <ul className="text-sm text-slate-200 space-y-1">
                    {caso.dolor.map((d) => (
                      <li key={d}>• 😖 {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 p-6">
                  <p className="text-sm font-semibold text-slate-100 mb-2">Solución</p>
                  <ul className="text-sm text-slate-200 space-y-1">
                    {caso.solucion.map((s) => (
                      <li key={s}>• 🤖 {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-sm font-semibold text-slate-100">Impacto</p>
                <ul className="text-sm text-slate-200 space-y-1">
                  {caso.impacto.map((i) => (
                    <li key={i}>• 📈 {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experiencia */}
      <Section
        id="experiencia"
        eyebrow="Experiencia"
        title="Equipo y tecnología"
        description="Más de 10 años en proyectos de datos e IA en múltiples sectores."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-base font-semibold mb-2">Sectores</h3>
            <p className="text-sm text-slate-200">{stack.sectores}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-base font-semibold mb-2">Tecnologías</h3>
            <p className="text-sm text-slate-200">{stack.tecnologias.join(", ")}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <h3 className="text-base font-semibold mb-2">Certificaciones</h3>
            <p className="text-sm text-slate-200">{stack.certificaciones}</p>
          </div>
        </div>
      </Section>

      {/* Demo interactiva */}
      <Section
        id="demo"
        eyebrow="Demo interactiva"
        title="Predicción de precios en tiempo real"
        description="Ejemplo de cómo la IA puede automatizar valuaciones de propiedades con datos reales del mercado panameño."
      >
        <PropertyPricePredictor />
      </Section>

      {/* Contacto */}
      <Section
        id="contacto"
        eyebrow="Contacto"
        title="¿Listo para hablar?"
        description="Agenda 30 minutos para revisar necesidades, priorizar casos de uso y planificar un piloto."
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-200">
            <p>
              Escríbenos para explorar cómo aplicar IA, automatización y analítica avanzada en tu negocio. Podemos
              mostrarte una demo rápida y acordar los primeros pasos.
            </p>
            <p className="text-slate-300">info@quaianalytics.com · (+507) 6820-1544</p>
            <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} QuAI Analytics. Presentación QuAI V2.</p>
          </div>
          <div className="rounded-2xl border border-quai-teal/60 bg-slate-950/90 p-5 text-sm space-y-3">
            <p className="text-xs uppercase tracking-wide text-quai-teal font-semibold">Equipo</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[140px] space-y-1">
                <p className="text-slate-100 font-semibold">Ricardo Alvarez</p>
                <p className="text-slate-300 text-xs">Científico de Datos</p>
              </div>
              <div className="flex-1 min-w-[140px] space-y-1">
                <p className="text-slate-100 font-semibold">Alexander Cuadra</p>
                <p className="text-slate-300 text-xs">Ingeniero de Datos</p>
              </div>
            </div>
            <a
              href="https://wa.me/50768201544?text=Hola,%20me%20interesa%20explorar%20una%20soluci%C3%B3n%20con%20QuAI%20Analytics.%20%F0%9F%92%AC"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-full bg-quai-teal px-4 py-2.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-quai-teal/40 hover:bg-quai-teal/90 transition-colors"
            >
              💬 Contactar por WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}


