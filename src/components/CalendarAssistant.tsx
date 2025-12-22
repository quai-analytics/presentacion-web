import { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface CalendarAssistantProps {
  webhookUrl: string;
  calendarIframeUrl: string;
}

export function CalendarAssistant({ webhookUrl, calendarIframeUrl }: CalendarAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [iframeKey, setIframeKey] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generar session ID y iframe key al montar
  useEffect(() => {
    const id = crypto.randomUUID();
    setSessionId(id);
    setIframeKey(crypto.randomUUID());
  }, []);

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: input,
          sessionId: sessionId,
        }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.output || "Lo siento, no pude procesar tu solicitud.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: `Error al contactar al agente IA: ${error instanceof Error ? error.message : "Error desconocido"}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshCalendar = () => {
    setIframeKey(crypto.randomUUID());
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[2fr,3fr] gap-6">
        {/* Columna del Chat */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 overflow-hidden">
          <div className="border-b border-slate-800 px-6 py-4 bg-slate-900/50">
            <h3 className="text-lg font-semibold text-slate-50">💬 Asistente Personal</h3>
          </div>

          {/* Chat messages area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 py-12">
                <p className="text-lg mb-2">👋 ¡Hola! Soy tu asistente de calendario</p>
                <p className="text-sm">Puedo ayudarte a crear, modificar o eliminar eventos en tu calendario</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-quai-teal text-slate-950"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-slate-800 text-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                    <span className="text-sm text-slate-400">Pensando...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-slate-800 p-4 bg-slate-900/50">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej: Agenda una reunión mañana a las 3pm..."
                disabled={isLoading}
                className="flex-1 rounded-full bg-slate-800 border border-slate-700 px-6 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-quai-teal/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-full bg-quai-teal px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-quai-teal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>

        {/* Columna del Calendario */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 overflow-hidden">
          <div className="border-b border-slate-800 px-6 py-4 bg-slate-900/50 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-50">🗓️ Tu Calendario de Citas</h3>
            <button
              onClick={refreshCalendar}
              className="rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-quai-teal transition-colors"
            >
              Actualizar Calendario
            </button>
          </div>

          <div className="p-4">
            <iframe
              key={iframeKey}
              src={`${calendarIframeUrl}=${iframeKey}`}
              className="w-full h-[500px] rounded-lg border-0"
              title="Google Calendar"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/30 p-4">
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-quai-teal font-semibold">ℹ️ Información:</span> Este asistente inteligente se conecta con Google Calendar para ayudarte a gestionar tus citas con facilidad. 
          Conversa con él para crear, agendar, modificar o eliminar eventos usando lenguaje natural.
        </p>
        <p className="text-xs text-slate-500 mt-2">Session ID: {sessionId.slice(0, 8)}...</p>
      </div>
    </div>
  );
}
