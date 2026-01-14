import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { CalendarAssistant } from "../components/CalendarAssistant";

// URLs desde variables de entorno
const WEBHOOK_URL = import.meta.env.VITE_CALENDAR_ASSISTANT_WEBHOOK_URL || "";
const CALENDAR_IFRAME_URL = import.meta.env.VITE_GOOGLE_CALENDAR_IFRAME_URL || "";

export function CalendarDemoPage() {
  return (
    <>
      {/* Hero Demo */}
      <Section id="calendar-demo-hero" title="" className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
            <span className="text-quai-teal">Asistente de Calendario IA</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Gestiona tus citas y eventos usando lenguaje natural. El asistente se conecta directamente con Google Calendar.
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

      {/* Calendar Assistant Demo */}
      <Section id="calendar-assistant" title="Asistente de Citas">
        {WEBHOOK_URL && CALENDAR_IFRAME_URL ? (
          <CalendarAssistant 
            webhookUrl={WEBHOOK_URL} 
            calendarIframeUrl={CALENDAR_IFRAME_URL}
          />
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-yellow-800/50 bg-yellow-950/20 p-8">
              <p className="text-yellow-400 text-lg mb-2">Configuración pendiente</p>
              <p className="text-slate-300 mb-4">
                Para activar el asistente de calendario, configura las variables de entorno:
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li><code className="text-quai-teal">VITE_CALENDAR_ASSISTANT_WEBHOOK_URL</code></li>
                <li><code className="text-quai-teal">VITE_GOOGLE_CALENDAR_IFRAME_URL</code></li>
              </ul>
            </div>
          </div>
        )}
      </Section>

      {/* Información adicional */}
      <Section id="calendar-info" title="¿Cómo funciona?">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🤖 Inteligencia Artificial + Automatización</h3>
            <p className="text-slate-300 leading-relaxed">
              Este asistente combina procesamiento de lenguaje natural (NLP) con automatización vía n8n para interpretar
              tus solicitudes y gestionar eventos directamente en Google Calendar. Entiende contexto, fechas relativas,
              y puede crear, modificar o eliminar citas con comandos en lenguaje natural.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">Aplicaciones</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Gestión de agenda automatizada para equipos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Coordinación de reuniones y eventos vía chat</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Recordatorios automáticos y seguimiento de citas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Integración con CRM y sistemas de gestión</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">💡 Ejemplos de comandos</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Crear evento:</p>
                <p className="text-xs text-slate-300 italic">"Agenda una reunión mañana a las 3pm con el equipo"</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Modificar:</p>
                <p className="text-xs text-slate-300 italic">"Cambia mi cita del lunes a las 10am"</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Eliminar:</p>
                <p className="text-xs text-slate-300 italic">"Cancela la reunión de hoy a las 2pm"</p>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 p-3">
                <p className="text-sm text-slate-400 mb-1">Consultar:</p>
                <p className="text-xs text-slate-300 italic">"¿Qué tengo agendado para esta semana?"</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">¿Quieres tu propio asistente?</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Podemos crear un asistente personalizado integrado con tus sistemas (Google Workspace, Microsoft 365, CRMs)
              y adaptado a tus procesos específicos de negocio. Contáctanos para una consultoría gratuita.
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
