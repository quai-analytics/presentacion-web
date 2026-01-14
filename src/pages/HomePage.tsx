import { Link, useNavigate } from "react-router-dom";
import { Section } from "../components/Section";
import { Icons } from "../components/Icons";

const servicios = [
  {
    icon: Icons.Strategy,
    title: "Consultoría estratégica",
    desc: "Modelos de negocio digitales y gestión del cambio."
  },
  {
    icon: Icons.Rocket,
    title: "Transformación digital",
    desc: "Diagnóstico tecnológico y roadmap digital enfocado en valor."
  },
  {
    icon: Icons.Automation,
    title: "Automatización de procesos (RPA)",
    desc: "Optimización operativa y reducción de errores repetitivos."
  },
  {
    icon: Icons.AI,
    title: "Aplicación de IA",
    desc: "Modelos predictivos, chatbots y NLP para decisiones rápidas."
  },
  {
    icon: Icons.Integration,
    title: "Integración de sistemas",
    desc: "APIs, ERP y CRMs conectados con infraestructura en la nube."
  }
];

const pasosMetodologia = [
  {
    icon: Icons.Search,
    title: "Diagnóstico / Demo",
    desc: "Mapeo y análisis de procesos actuales para identificar mejoras.",
    duracion: "1-2 semanas"
  },
  {
    icon: Icons.Design,
    title: "Co-diseño de soluciones",
    desc: "Diseño colaborativo de soluciones adaptadas al cliente.",
    duracion: "2-3 semanas"
  },
  {
    icon: Icons.Cog,
    title: "Desarrollo",
    desc: "Configuración y despliegue de pruebas de concepto y MVP.",
    duracion: "4-8 semanas"
  },
  {
    icon: Icons.Check,
    title: "Pruebas / Entrega",
    desc: "Validación de resultados y ajustes para máxima performance.",
    duracion: "1-2 semanas"
  },
  {
    icon: Icons.TrendingUp,
    title: "Escalamiento y soporte",
    desc: "Ampliación progresiva y acompañamiento continuo.",
    duracion: "Continuo"
  }
];

const entregas = [
  {
    icon: Icons.Target,
    title: "Proyecto fijo",
    desc: "Alcance definido y acordado desde el inicio."
  },
  {
    icon: Icons.Lightbulb,
    title: "Consultoría",
    desc: "Evaluación integral y propuesta conjunta de valor."
  },
  {
    icon: Icons.Repeat,
    title: "Proyecto híbrido",
    desc: "Alcance preliminar con iteraciones de mejora continua."
  },
  {
    icon: Icons.Users,
    title: "Acompañamiento",
    desc: "Soporte continuo, mantenimiento y capacitaciones."
  }
];

const casos = [
  {
    sector: "Energía",
    dolor: [
      { text: "Pérdida de eficiencia en operación" },
      { text: "Costos elevados de mantenimiento" },
      { text: "Fallas no previstas en equipos críticos" }
    ],
    solucion: [
      { text: "Modelo predictivo de mantenimiento" },
      { text: "Alertas tempranas automatizadas" },
      { text: "Dashboard de KPIs en tiempo real" }
    ],
    impacto: "40% reducción en paros no planificados"
  },
  {
    sector: "Salud",
    dolor: [
      { text: "Saturación en citas" },
      { text: "Largos tiempos de espera" },
      { text: "Gestión manual de turnos" }
    ],
    solucion: [
      { text: "Chatbot de agendar citas" },
      { text: "Notificaciones automáticas" },
      { text: "Respuestas a FAQs 24/7" }
    ],
    impacto: "60% reducción en tiempos de espera"
  },
  {
    sector: "Gastronomía",
    dolor: [
      { text: "Ceguera operativa: reportes diarios dependen de digitación manual" },
      { text: "Tiempo perdido: 2-3 horas diarias transcribiendo facturas" },
      { text: "Datos aislados en PCs locales y hojas de cálculo" }
    ],
    solucion: [
      { text: "Conexión segura VPN sin cambiar el ERP actual" },
      { text: "Dashboards de BI que se actualizan automáticamente" },
      { text: "Automatización OCR: IA lee facturas y propone asientos contables" }
    ],
    impacto: "Automatización de 2-3 horas diarias + visibilidad operativa completa"
  }
];

const demosPorCategoria = {
  "Agentes AI": [
    {
      id: "chatbot",
      title: "Asistente Virtual con IA",
      description: "Chatbot inteligente con procesamiento de lenguaje natural para atención al cliente 24/7, capaz de responder preguntas frecuentes y escalar casos complejos.",
      path: "/demo/chatbot",
      tags: ["NLP", "Chatbot", "Automatización"],
      integraciones: [
        "WhatsApp Business API",
        "Facebook Messenger / Instagram",
        "Slack / Microsoft Teams",
        "CRM (HubSpot, Zoho)",
        "Base de conocimiento interna"
      ]
    },
    {
      id: "calendar-assistant",
      title: "Asistente de Calendario Inteligente",
      description: "Gestión automatizada de citas y eventos con procesamiento de lenguaje natural. Agenda, reprograma y cancela citas mediante conversación.",
      path: "/demo/calendar-assistant",
      tags: ["IA", "Automatización", "Productividad"],
      integraciones: [
        "Google Calendar / Outlook Calendar",
        "Microsoft 365 / Google Workspace",
        "Zoom / Microsoft Teams (para videollamadas)",
        "Sistemas de reservas propietarios",
        "Notificaciones por email y SMS"
      ]
    },
    {
      id: "ocr",
      title: "OCR y Extracción de Datos",
      description: "Reconocimiento óptico de caracteres para digitalizar documentos, facturas, contratos y formularios con extracción automática de datos estructurados.",
      path: null,
      tags: ["OCR", "Automatización", "Procesamiento de Documentos"],
      integraciones: [
        "Servicios de Computer Vision",
        "Sistemas de gestión documental (DMS)",
        "ERP para facturación electrónica",
        "Bases de datos SQL / NoSQL",
        "APIs de validación de datos"
      ]
    }
  ],
  "Aprendizaje Automático": [
    {
      id: "property-price",
      title: "Predicción de Precios Inmobiliarios",
      description: "Modelo de Machine Learning que estima precios de propiedades en tiempo real basándose en características clave como área, ubicación, habitaciones y más.",
      path: "/demo/property-price",
      tags: ["Machine Learning", "Real Estate", "Predicción"],
      integraciones: [
        "APIs de plataformas inmobiliarias",
        "CRM para gestión de propiedades",
        "Power BI / Tableau para dashboards",
        "Webhooks para actualizaciones automáticas"
      ]
    },
    {
      id: "customer-clustering",
      title: "Segmentación de Clientes (RFM)",
      description: "Análisis RFM y clustering con K-Means para identificar segmentos de clientes según recencia, frecuencia y valor monetario de sus compras.",
      path: "/demo/customer-clustering",
      tags: ["Machine Learning", "Marketing", "CRM"],
      integraciones: [
        "CRM ",
        "Plataformas de e-commerce (Shopify, WooCommerce, etc.)",
        "ERPs",
        "Herramientas de email marketing",
        "Business Intelligence (Power BI, Tableau)"
      ]
    }
  ],
  "Business Intelligence": [
    {
      id: "dashboard-bi",
      title: "Dashboard de BI en Tiempo Real",
      description: "Dashboards interactivos conectados a bases de datos para generar insights en tiempo real. Visualización de KPIs, métricas de negocio y análisis predictivo.",
      path: null,
      tags: ["BI", "Analytics", "Visualización"],
      integraciones: [
        "Power BI / Tableau / Looker",
        "Bases de datos SQL (PostgreSQL, MySQL, SQL Server)",
        "Data warehouses (Snowflake, BigQuery, Redshift)",
        "APIs REST para datos externos",
        "Excel / Google Sheets para reportes",
        "Integración para alertas automáticas"
      ]
    },
    {
      id: "crm-implementation",
      title: "Implementación de CRM",
      description: "Configuración e implementación de sistemas CRM para centralizar la gestión de clientes, ventas y marketing. Personalización según procesos de negocio.",
      path: null,
      tags: ["CRM", "Ventas", "Automatización"],
      integraciones: [
        "Zoho CRM / Zoho One",
        "HubSpot CRM & Marketing Hub",
        "Integraciones con email y calendarios",
        "Automatización de flujos de trabajo",
        "APIs para conectar con sistemas existentes"
      ]
    },
    {
      id: "fleet-tracking",
      title: "Seguimiento de Flota en Tiempo Real",
      description: "Sistema de rastreo y monitoreo en tiempo real para vehículos de carga (camiones, aviones, buques). Optimiza rutas, combustible, entregas y seguridad marítima.",
      path: null,
      tags: ["BI", "Logística", "GPS"],
      integraciones: [
        "APIs de GPS y rastreo (Google Maps, Mapbox)",
        "Sistemas telemáticos de vehículos",
        "Sistemas AIS (Automatic Identification System) para buques",
        "Dashboards en tiempo real",
        "Alertas automáticas de retrasos"
      ]
    }
  ]
};

const metricas = [
  { numero: "40%", texto: "Reducción en costos operativos", icon: Icons.BarChart },
  { numero: "3-6", texto: "Meses para ver ROI", icon: Icons.Zap },
  { numero: "24/7", texto: "Soporte y monitoreo", icon: Icons.Shield },
  { numero: "100+", texto: "Proyectos entregados", icon: Icons.Check }
];

const sectores = ["Energía", "Salud", "Finanzas", "Retail", "Logística"];
const tecnologias = ["Python", "Azure", "OpenAI", "Power BI", "UiPath", "SAP"];
const certificaciones = ["Microsoft Partner", "ISO 27001", "Scrum Master"];

export function HomePage() {
  const navigate = useNavigate();
  
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
                <span>→</span>
                Agenda una reunión por WhatsApp
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/image_2.png" alt="QuAI Analytics" className="w-full max-w-md rounded-2xl shadow-2xl" />
          </div>
        </div>
      </Section>

      {/* Métricas */}
      <section className="py-12 border-y border-slate-800/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metricas.map((m, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-quai-teal">{m.numero}</div>
                <div className="text-sm text-slate-400">{m.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-xl font-semibold text-quai-teal mb-3">Misión</h3>
              <p className="text-slate-300 leading-relaxed">
                Facilitar la transformación digital de empresas a través de soluciones prácticas de IA y automatización
                que generen impacto real y medible desde el día uno.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-xl font-semibold text-quai-teal mb-3">Visión</h3>
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
            <div key={i} className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 hover:border-quai-teal/50 hover:shadow-lg hover:shadow-quai-teal/10 transition-all">
              <div className="w-8 h-8 mb-4 text-slate-400 group-hover:text-quai-teal group-hover:scale-110 transition-all">
                <s.icon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Metodología */}
      <Section id="metodologia" title="Metodología">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Línea vertical conectora */}
            <div className="hidden md:block absolute left-[29px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-quai-teal via-quai-teal/50 to-transparent"></div>
            
            <div className="space-y-6">
              {pasosMetodologia.map((p, i) => (
                <div key={i} className="relative flex gap-6 items-start group">
                  {/* Número circular */}
                  <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-quai-teal flex items-center justify-center text-white shadow-lg shadow-quai-teal/20 group-hover:scale-110 transition-transform z-10 font-bold text-2xl">
                    {i + 1}
                  </div>
                  
                  {/* Card de contenido */}
                  <div className="flex-1 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 hover:border-quai-teal/50 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-slate-50">{p.title}</h3>
                      <span className="shrink-0 text-xs text-quai-teal bg-quai-teal/10 px-3 py-1 rounded-full border border-quai-teal/30">
                        {p.duracion}
                      </span>
                    </div>
                    <p className="text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Entregas */}
      <Section id="entregas" title="Entregas de valor">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {entregas.map((e, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 text-center hover:border-quai-teal/50 hover:shadow-lg hover:shadow-quai-teal/10 transition-all group">
              <div className="w-8 h-8 mb-3 mx-auto text-slate-400 group-hover:text-quai-teal group-hover:scale-110 transition-all">
                <e.icon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">{e.title}</h3>
              <p className="text-sm text-slate-400">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Soluciones Realizadas */}
      <Section id="demos" title="Soluciones Realizadas">
        <div className="space-y-12 max-w-6xl mx-auto">
          <p className="text-center text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Conoce nuestras soluciones implementadas. Cada solución incluye posibles integraciones para adaptarse a tu negocio.
          </p>
          
          {Object.entries(demosPorCategoria).map(([categoria, demos]) => (
            <div key={categoria} className="space-y-6">
              <h3 className="text-2xl font-bold text-quai-teal border-b border-slate-800 pb-3">
                {categoria}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {demos.map((demo) => (
                  <div key={demo.id} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-quai-teal/50 transition-all flex flex-col">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-50 mb-2">{demo.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm mb-3">
                          {demo.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {demo.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="rounded-xl bg-gradient-to-br from-quai-teal/10 to-slate-950 border border-quai-teal/30 p-4">
                        <h5 className="text-xs font-semibold text-quai-teal mb-2 uppercase tracking-wide">
                          Posibles Integraciones
                        </h5>
                        <ul className="space-y-1.5">
                          {demo.integraciones.map((integracion, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                              <span className="text-quai-teal mt-0.5">✓</span>
                              <span>{integracion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Casos - Diagnóstico de Proyectos Reales */}
      <Section id="casos" title="Diagnóstico de Casos Reales">
        <div className="space-y-8 max-w-5xl mx-auto">
          {casos.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/80 p-8 hover:border-quai-teal/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-quai-teal/20 flex items-center justify-center border border-quai-teal/50 text-white">
                  {i === 0 ? <Icons.Zap className="w-6 h-6" /> : i === 1 ? <Icons.Plus className="w-6 h-6" /> : <Icons.Tomato className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold text-slate-50">{c.sector}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="rounded-xl bg-gradient-to-br from-red-950/30 to-slate-950 border border-red-900/30 p-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wide">
                    Desafíos encontrados
                  </h4>
                  <ul className="space-y-2">
                    {c.dolor.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{d.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-emerald-950/30 to-slate-950 border border-emerald-900/30 p-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wide">
                    Soluciones propuestas
                  </h4>
                  <ul className="space-y-2">
                    {c.solucion.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{s.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-quai-teal/10 to-transparent border border-quai-teal/30 p-4">
                <p className="text-quai-teal font-semibold">Impacto: {c.impacto}</p>
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
              <h3 className="text-lg font-semibold text-quai-teal mb-4">Sectores</h3>
              <div className="flex flex-wrap gap-2">
                {sectores.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-lg font-semibold text-quai-teal mb-4">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {tecnologias.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
              <h3 className="text-lg font-semibold text-quai-teal mb-4">Certificaciones</h3>
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
                <p className="text-sm text-slate-300">ricardo.alvarez@quaianalytics.com</p>
                <p className="text-sm text-slate-400">Experto en Ciencias de Datos y Gestión Estratégica</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-quai-teal">Alexander Cuadra</p>
                <p className="text-sm text-slate-400">Data Engineer & Co-Founder</p>
                <p className="text-sm text-slate-300">alexander.cuadra@quaianalytics.com</p>
                <p className="text-sm text-slate-400">Especialista en Analítica e Ingeniería de Datos.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
