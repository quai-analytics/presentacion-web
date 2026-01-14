import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DemoPage } from "./pages/DemoPage";
import { PropertyPriceDemoPage } from "./pages/PropertyPriceDemoPage";
import { ChatDemoPage } from "./pages/ChatDemoPage";
import { CalendarDemoPage } from "./pages/CalendarDemoPage";
import { CustomerClusteringDemoPage } from "./pages/CustomerClusteringDemoPage";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "servicios", label: "Servicios" },
  { id: "metodologia", label: "Metodología" },
  { id: "entregas", label: "Entregas" },
  { id: "casos", label: "Casos" },
  { id: "demos", label: "Demos" },
  { id: "experiencia", label: "Experiencia" }
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-quai-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/quai_analytics_logo.png" alt="QuAI Analytics" className="h-9 w-auto" />
          <div>
            <p className="text-sm font-semibold tracking-wide">QuAI Analytics</p>
            <p className="text-[11px] text-slate-400">Propuesta de Valor</p>
          </div>
        </Link>
        <nav className="hidden gap-5 text-xs md:flex items-center">
          {isHomePage ? (
            <>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-slate-300 hover:text-quai-teal transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-slate-300 hover:text-quai-teal transition-colors"
              >
                Inicio
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-quai-navy via-slate-950 to-slate-950 text-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/demo/property-price" element={<PropertyPriceDemoPage />} />
          <Route path="/demo/chatbot" element={<ChatDemoPage />} />
          <Route path="/demo/calendar-assistant" element={<CalendarDemoPage />} />
          <Route path="/demo/customer-clustering" element={<CustomerClusteringDemoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


