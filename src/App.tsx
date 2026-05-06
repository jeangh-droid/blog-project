import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  ClipboardList, 
  Target, 
  Layers, 
  ShieldCheck, 
  Search,
  Users,
  ArrowRight,
  FileText,
  UserCheck,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { PROJECT_DATA } from './constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col font-sans text-[#1A1C1E]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#004A99] rounded-sm flex items-center justify-center text-white font-bold text-xs">U</div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-900">UNTELS <span className="text-[#004A99]">DIAGNÓSTICO</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" active={location.pathname === "/"}>Inicio</NavLink>
            <NavLink to="/entradas" active={location.pathname === "/entradas"}>Entradas</NavLink>
            <NavLink to="/herramientas" active={location.pathname === "/herramientas"}>Herramientas</NavLink>
            <NavLink to="/salidas" active={location.pathname === "/salidas"}>Salidas</NavLink>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <div>&copy; 2026 UNTELS - FACULTAD DE INGENIERÍA Y GESTIÓN</div>
          <div className="flex gap-8">
            <span className="text-[#004A99]">INGENIERÍA DE SISTEMAS</span>
            <span>PROYECTO ACADÉMICO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section + Planeamiento */}
      <header className="bg-white border-b border-slate-200 pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-[#004A99]"
          >
            <ShieldCheck size={12} /> {PROJECT_DATA.university}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            {PROJECT_DATA.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light max-w-2xl"
          >
            {PROJECT_DATA.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-8 space-y-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#004A99] flex items-center gap-2">
              <MessageSquare size={14} /> Contexto del Problema
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl font-light italic bg-slate-50 p-6 border-l-4 border-slate-200">
              "{PROJECT_DATA.context}"
            </p>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {Array.from({length: 36}).map((_, i) => (
              <div key={i} className="border border-[#004A99]" />
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-20 px-6 space-y-32">
        <section className="scroll-mt-24 space-y-12">
          <SectionHeader title="Planeamiento del Proyecto" icon={<Target size={20}/>} />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-l-4 border-[#004A99] pl-4">Objetivo General</h3>
              <p className="text-slate-600 leading-relaxed font-light">{PROJECT_DATA.objective}</p>
              
              <h3 className="text-lg font-bold text-slate-900 border-l-4 border-[#004A99] pl-4">Justificación</h3>
              <p className="text-slate-600 leading-relaxed font-light">{PROJECT_DATA.justification}</p>
            </div>
            <div className="space-y-6">
              <div className="p-8 bg-white border border-slate-200 rounded-[4px] shadow-sm">
                <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers size={14} /> Marco Metodológico
                </h4>
                <p className="text-sm font-bold text-slate-900 mb-2">{PROJECT_DATA.framework}</p>
                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alcance del Diagnóstico:</p>
                  <ul className="space-y-2">
                    {PROJECT_DATA.scope.map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <ArrowRight size={12} className="text-[#004A99]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-slate-100 rounded-[4px] border-l-4 border-slate-300">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{PROJECT_DATA.nature}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function InputsPage() {
  const inputs = PROJECT_DATA.inputs;

  return (
    <main className="max-w-5xl mx-auto py-40 px-6 space-y-32">
      {/* Contexto de la Entrevista */}
      <section className="space-y-12">
        <SectionHeader title="Entradas del Proyecto" icon={<ClipboardList size={20}/>} />
        <div className="p-10 bg-white border border-slate-200 rounded-[4px] shadow-sm">
           <h4 className="text-xs font-bold text-[#004A99] uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
              <MessageSquare size={16} /> Contexto del Levantamiento
           </h4>
           <p className="text-md text-slate-600 leading-relaxed font-light italic">
              {inputs.interviewContext}
           </p>
        </div>

        {/* Tabla de Preguntas */}
        <div className="space-y-6 pt-12">
          <h4 className="text-xs font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
            <ClipboardList size={16} /> Cuestionario de Diagnóstico
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-slate-200 rounded-[4px] text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-left uppercase tracking-widest">
                  <th className="px-6 py-4">Categoría</th>
                  <th className="px-6 py-4">Pregunta</th>
                  <th className="px-6 py-4">Objetivo Analítico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inputs.questions.map((q, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 bg-slate-100 text-[#004A99] rounded-[2px] font-bold uppercase text-[9px]">
                        {q.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">{q.question}</td>
                    <td className="px-6 py-4 text-slate-600 leading-relaxed">{q.objective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function ToolsPage() {
  const structured = PROJECT_DATA.tools.interviewStructured;

  return (
    <main className="max-w-5xl mx-auto py-40 px-6 space-y-32">
      <section className="space-y-12">
        <SectionHeader title="Herramientas y Diagnóstico" icon={<Target size={20}/>} />
        
        <div className="grid md:grid-cols-3 gap-8">
          <ToolCard 
            title="Entrevistas" 
            icon={<Users size={20}/>} 
            description={PROJECT_DATA.tools.interviews} 
          />
          <ToolCard 
            title="Observación" 
            icon={<Search size={20}/>} 
            description={PROJECT_DATA.tools.observation} 
          />
          <ToolCard 
            title="Registro" 
            icon={<FileText size={20}/>} 
            description={PROJECT_DATA.tools.registration} 
          />
        </div>

        {structured && (
          <div className="space-y-20 pt-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={16} /> Resumen del Diagnóstico
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed font-light border-l-4 border-slate-200 pl-8 italic">
                {structured.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {structured.categories.map((cat, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-[4px] space-y-3 hover:shadow-sm transition-shadow">
                  <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest">{cat.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{cat.content}</p>
                </div>
              ))}
            </div>

            <div className="p-12 bg-slate-900 text-white rounded-[4px] space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#004A99]">Insights Clave del Sistema</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {structured.keyFindings.map((finding, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-[#004A99] font-bold text-lg">0{i + 1}</span>
                    <p className="text-sm text-slate-300 leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="p-10 bg-white border border-slate-200 rounded-[4px]">
           <h4 className="text-xs font-bold text-[#004A99] uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
              <MessageSquare size={16} /> Metodología de Análisis
           </h4>
           <p className="text-sm text-slate-600 leading-relaxed italic">
              {PROJECT_DATA.tools.interviewAnalysis}
           </p>
        </div>
      </section>
    </main>
  );
}

function StakeholdersPage() {
  const outputs = PROJECT_DATA.outputs;

  return (
    <main className="max-w-5xl mx-auto py-40 px-6 space-y-32">
      {/* 1. Análisis de los Interesados */}
      <section className="space-y-12">
        <SectionHeader title="Salidas: Análisis de Interesados" icon={<UserCheck size={20}/>} />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-slate-200 rounded-[4px] text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-left uppercase tracking-widest">
                <th className="px-6 py-4">Interesado</th>
                <th className="px-6 py-4">Rol</th>
                <th className="px-6 py-4">Intereses</th>
                <th className="px-6 py-4 text-center">Poder</th>
                <th className="px-6 py-4 text-center">Interés</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {outputs.stakeholderAnalysis.map((person, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">{person.name}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{person.role}</td>
                  <td className="px-6 py-4 text-slate-500">{person.interests}</td>
                  <td className="px-6 py-4 text-center">
                    <PriorityBadge value={person.power} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <PriorityBadge value={person.interest} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Clasificación Power-Interest */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="p-8 bg-slate-900 text-white rounded-[4px] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#004A99]">Matriz Poder-Interés</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Esta herramienta clasifica a los interesados según su nivel de influencia y preocupación por el proyecto, definiendo las estrategias de comunicación y gestión del cambio necesarias para el éxito del diagnóstico.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MatrixItem title="Gestionar de cerca" content="Dueño, Equipo UNTELS" />
            <MatrixItem title="Mantener Satisfecho" content="Personal Administrativo" />
            <MatrixItem title="Mantener Informado" content="Instructores" />
            <MatrixItem title="Monitorear" content="Alumnos" />
          </div>
        </div>
      </section>

      {/* 2. Plan de Involucramiento */}
      <section className="space-y-12">
        <SectionHeader title="Plan de Involucramiento" icon={<TrendingUp size={20}/>} />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-slate-200 rounded-[4px] text-[10px]">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-left uppercase tracking-widest">
                <th className="px-6 py-4">Actor</th>
                <th className="px-6 py-4">Nivel Actual</th>
                <th className="px-6 py-4">Estado Objetivo</th>
                <th className="px-6 py-4">Estrategia</th>
                <th className="px-6 py-4">Acciones concretas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {outputs.stakeholderInvolvement.map((plan, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{plan.name}</td>
                  <td className="px-6 py-4">
                    <InvolvementBadge level={plan.currentLevel} />
                  </td>
                  <td className="px-6 py-4">
                    <InvolvementBadge level={plan.desiredLevel} isDesired />
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{plan.strategy}</td>
                  <td className="px-6 py-4 text-slate-500">{plan.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function MatrixItem({ title, content }: { title: string, content: string }) {
  return (
    <div className="p-4 bg-white border border-slate-100 rounded-[4px]">
      <h5 className="text-[9px] font-bold uppercase tracking-widest text-[#004A99] mb-1">{title}</h5>
      <p className="text-[10px] text-slate-600">{content}</p>
    </div>
  );
}

function InvolvementBadge({ level, isDesired = false }: { level: string, isDesired?: boolean }) {
  const levels = {
    Desconocedor: 'bg-slate-100 text-slate-400',
    Resistente: 'bg-red-50 text-red-500',
    Neutral: 'bg-amber-50 text-amber-500',
    Apoya: 'bg-blue-50 text-[#004A99]',
    Lidera: 'bg-emerald-50 text-emerald-500'
  };
  return (
    <span className={`px-2 py-0.5 rounded-[2px] font-bold uppercase text-[8px] tracking-tighter ${levels[level as keyof typeof levels]}`}>
      {isDesired ? `→ ${level}` : level}
    </span>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entradas" element={<InputsPage />} />
          <Route path="/herramientas" element={<ToolsPage />} />
          <Route path="/salidas" element={<StakeholdersPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NavLink({ to, children, active }: { to: string, children: ReactNode, active: boolean }) {
  return (
    <Link 
      to={to} 
      className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
        active ? 'text-[#004A99]' : 'text-slate-500 hover:text-[#004A99]'
      }`}
    >
      {children}
    </Link>
  );
}

function SectionHeader({ title, icon }: { title: string, icon: any }) {
  return (
    <div className="flex items-center gap-4">
       <div className="w-10 h-10 bg-white border border-slate-200 rounded-[4px] flex items-center justify-center text-[#004A99] shadow-sm">
         {icon}
       </div>
       <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-900 border-b-2 border-[#004A99] pb-1">{title}</h2>
    </div>
  );
}

function ToolCard({ title, icon, description }: { title: string, icon: any, description: string }) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-[4px] space-y-4 hover:shadow-md transition-all group">
      <div className="text-slate-300 group-hover:text-[#004A99] transition-colors">{icon}</div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function PriorityBadge({ value }: { value: 'Alto' | 'Medio' | 'Bajo' }) {
  const colors = {
    Alto: 'bg-red-50 text-red-500 border-red-100',
    Medio: 'bg-amber-50 text-amber-500 border-amber-100',
    Bajo: 'bg-slate-50 text-slate-400 border-slate-100'
  };
  return (
    <span className={`px-2 py-0.5 rounded-[2px] border text-[9px] font-bold uppercase tracking-tighter ${colors[value]}`}>
      {value}
    </span>
  );
}
