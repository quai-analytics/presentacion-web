import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { ChatBot } from "../components/ChatBot";

// URL del webhook - puede configurarse desde variables de entorno
const WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || "";

export function ChatDemoPage() {
  return (
    <>
      {/* Hero Demo */}
      <Section id="chat-demo-hero" title="" className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
            <span className="text-quai-teal">Chat con Asistente IA</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Prueba nuestro asistente virtual inteligente. Pregúntale sobre propiedades, servicios o cualquier otra consulta.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/50 px-6 py-3 text-sm font-semibold text-slate-50 hover:bg-slate-900 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </Section>

      {/* Chat Demo */}
      <Section id="chat" title="Asistente Virtual">
        {WEBHOOK_URL ? (
          <ChatBot webhookUrl={WEBHOOK_URL} />
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-yellow-800/50 bg-yellow-950/20 p-8">
              <p className="text-yellow-400 text-lg mb-2">⚠️ Configuración pendiente</p>
              <p className="text-slate-300">
                Para activar el chat, configura la variable de entorno <code className="text-quai-teal">VITE_CHATBOT_WEBHOOK_URL</code>
              </p>
            </div>
          </div>
        )}
      </Section>

      {/* Información adicional */}
      <Section id="chat-info" title="¿Cómo funciona?">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🤖 Inteligencia Artificial</h3>
            <p className="text-slate-300 leading-relaxed">
              Este chatbot utiliza modelos de lenguaje natural (NLP) conectados a través de n8n para procesar y
              responder preguntas en tiempo real. Cada sesión mantiene el contexto de la conversación para ofrecer
              respuestas más precisas y personalizadas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">📊 Aplicaciones</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Atención al cliente 24/7 automatizada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Calificación y enrutamiento de leads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Respuestas a preguntas frecuentes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-quai-teal text-xl mt-0.5">✓</span>
                <span>Agendamiento de citas y seguimiento automatizado</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
            <h3 className="text-lg font-semibold text-quai-teal mb-3">🚀 ¿Quieres tu propio chatbot?</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Podemos crear un asistente virtual personalizado para tu negocio, entrenado con tu información específica
              e integrado con tus sistemas. Contáctanos para una consultoría gratuita.
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
