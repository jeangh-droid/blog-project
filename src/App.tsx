import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
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
  TrendingUp,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Info,
  Share2,
  CreditCard,
  AlertTriangle,
  GitBranch,
  Goal,
  CheckCircle,
  Smartphone,
  Eye,
  ThumbsUp,
  ExternalLink,
  Database
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
            <NavLink to="/recopilacion" active={location.pathname === "/recopilacion"}>Recopilación</NavLink>
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

  if (!inputs) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 font-medium">Cargando datos de entrada...</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto py-40 px-6 space-y-24">
      {/* 4.1 Acta de constitución */}
      <section className="space-y-8">
        <SectionHeader title="4.1 Acta de constitución del proyecto" icon={<ClipboardList size={20}/>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard label="Proyecto" value={inputs.projectCharter.project} />
          <InfoCard label="Patrocinador" value={inputs.projectCharter.sponsor} />
          <InfoCard label="Interesados Clave" value={inputs.projectCharter.stakeholders} />
          <InfoCard label="Plazo Estimado" value={inputs.projectCharter.term} />
        </div>
      </section>

      {/* 4.2 Documentos de negocio */}
      <section className="space-y-8">
        <SectionHeader title="4.2 Documentos de negocio" icon={<FileText size={20}/>} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-[4px] shadow-sm space-y-4">
            <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest">Caso de Negocio</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic">"{inputs.businessDocuments.businessCase}"</p>
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-[4px] shadow-sm space-y-4">
            <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest">Beneficios Esperados</h4>
            <p className="text-sm text-slate-300 leading-relaxed font-light">{inputs.businessDocuments.expectedBenefits}</p>
          </div>
        </div>
      </section>

      {/* 4.3 Stakeholders Identificados */}
      <section className="space-y-8 text-center md:text-left">
        <SectionHeader title="4.3 Stakeholders identificados" icon={<Users size={20}/>} />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-slate-200 rounded-[4px] text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-left uppercase tracking-widest">
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Stakeholder</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Rol</th>
                <th className="px-6 py-4">Responsabilidad Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              
            </tbody>
          </table>
        </div>
      </section>

      {/* 4.4 Documentos del proyecto */}
      <section className="space-y-8">
        <SectionHeader title="4.4 Documentos del proyecto" icon={<FileText size={20}/>} />
        <div className="grid md:grid-cols-3 gap-8">
          <DocCard title="Registro de cambios" content={inputs.projectDocs.changeLog} />
          <DocCard title="Registro de incidentes" content={inputs.projectDocs.issueLog} />
          <DocCard title="Documentación de requisitos" content={inputs.projectDocs.requirementsDoc} />
        </div>
      </section>

      {/* 4.5 Acuerdos */}
      <section className="space-y-8">
        <SectionHeader title="4.5 Acuerdos" icon={<ShieldCheck size={20}/>} />
        <div className="p-10 bg-white border-l-4 border-[#004A99] rounded-[4px] shadow-sm italic text-slate-600 leading-relaxed">
          "{inputs.agreements}"
        </div>
      </section>

      {/* 4.6 Factores ambientales */}
      <section className="space-y-8">
        <SectionHeader title="4.6 Factores ambientales de la empresa" icon={<Layers size={20}/>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EEFCard label="Cultura" value={inputs.eefs.culture} />
          <EEFCard label="Entorno" value={inputs.eefs.environment} />
          <EEFCard label="TikTok" value={inputs.eefs.tiktok} />
          <EEFCard label="Equipo" value={inputs.eefs.team} />
        </div>
      </section>

      {/* Activos de los procesos */}
      <section className="space-y-8">
        <SectionHeader title="4.7 Activos de los procesos de la organización" icon={<TrendingUp size={20}/>} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
             <OPALine title="Conocimiento del dueño" content={inputs.opas.ownerKnowledge} />
             <OPALine title="Experiencia digital previa" content={inputs.opas.brotherExperience} />
          </div>
          <div className="space-y-4">
             <OPALine title="Contabilidad informal" content={inputs.opas.manualAccounting} />
             <OPALine title="Inexistencia de plantillas" content={inputs.opas.noTemplates} />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-[4px] space-y-2">
      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <p className="text-sm font-bold text-slate-900 leading-snug">{value}</p>
    </div>
  );
}

function DocCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-[4px] space-y-4 hover:shadow-md transition-all group">
      <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-[#004A99] transition-colors">
        <FileText size={16} />
      </div>
      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-light">{content}</p>
    </div>
  );
}

function EEFCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-[4px] space-y-3">
      <div className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest border-b border-slate-50 pb-2 inline-block">{label}</div>
      <p className="text-xs text-slate-600 leading-relaxed italic">{value}</p>
    </div>
  );
}

function OPALine({ title, content }: { title: string, content: string }) {
  return (
    <div className="flex gap-4 p-6 bg-white border border-slate-100 rounded-[4px]">
      <div className="mt-1"><ArrowRight size={14} className="text-[#004A99]" /></div>
      <div className="space-y-1">
        <h5 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">{title}</h5>
        <p className="text-xs text-slate-500 leading-relaxed font-light">{content}</p>
      </div>
    </div>
  );
}

function Accordion({ title, icon, children, defaultOpen = false }: { title: string, icon: ReactNode, children: ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="text-[#004A99]">{icon}</div>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-800">{title}</span>
        </div>
        {isOpen ? <ChevronDown size={20} className="text-slate-400" /> : <ChevronRight size={20} className="text-slate-400" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/30">
          {children}
        </div>
      </motion.div>
    </div>
  );
}


function RecopilacionPage() {
  const data = PROJECT_DATA.recopilacion;
  
  return (
    <main className="max-w-6xl mx-auto py-40 px-6 space-y-16">
      <header className="space-y-4 text-center max-w-3xl mx-auto mb-20">
        <SectionHeader title="Sección de Recopilación" icon={<Search size={24}/>} />
        <p className="text-slate-500 font-light leading-relaxed">
          Evidencias visuales, análisis de entorno y recopilación de información primaria/secundaria para el diagnóstico estratégico de Moto Driving.
        </p>
      </header>

      <div className="space-y-6">
        {/* Contexto del Negocio */}
        <Accordion title="Contexto del Negocio" icon={<Info size={18}/>} defaultOpen={true}>
          <div className="space-y-8">
            <p className="text-sm text-slate-600 leading-relaxed font-light">{data.contexto.descripcion}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                  <Smartphone size={14} /> Canales de Contacto
                </h4>
                <ul className="space-y-2">
                  {data.contexto.canales.map((c, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                      <div className="mt-1"><ArrowRight size={12} className="text-[#004A99]" /></div>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                  <CreditCard size={14} /> Sistema de Cobros
                </h4>
                <div className="p-4 bg-white border border-slate-200 rounded italic text-xs text-slate-600">
                  {data.contexto.sistemaCobros}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                <Share2 size={14} /> Presencia Digital (TikTok)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded text-center">
                  <div className="text-xs font-bold text-slate-900">{data.contexto.presenciaTikTok.perfil}</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest">Perfil</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded text-center">
                  <div className="text-xs font-bold text-slate-900">{data.contexto.presenciaTikTok.seguidores}</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest">Seguidores</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded text-center">
                  <div className="text-xs font-bold text-slate-900">{data.contexto.presenciaTikTok.likes}</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest">Me gusta</div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded text-center">
                  <div className="text-xs font-bold text-slate-900">{data.contexto.presenciaTikTok.vistas}</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest">Vistas</div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>

        {/* Recopilación de Información */}
        <Accordion title="Recopilación de Información" icon={<Database size={18}/>}>
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest">Información Primaria y Secundaria</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded text-[11px]">
                  <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest text-left">
                    <tr>
                      <th className="px-4 py-3">Fuente</th>
                      <th className="px-4 py-3">Descripción</th>
                      <th className="px-4 py-3">Medio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.informacion.primaria.map((inf, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 font-bold text-slate-900">{inf.fuente}</td>
                        <td className="px-4 py-3 text-slate-600">{inf.descripcion}</td>
                        <td className="px-4 py-3 text-[#004A99] font-medium">{inf.medio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                <Eye size={14} /> Evidencias Visuales y Documentales
              </h4>
              
              <div className="p-8 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center text-center space-y-6 hover:border-[#004A99]/30 transition-colors group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#004A99] group-hover:scale-110 transition-transform">
                  <FileText size={32} />
                </div>
                <div className="space-y-2 max-w-md">
                  <h5 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Repositorio de Evidencia Digital</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Acceda al portafolio completo de capturas de pantalla, métricas de TikTok, registros de WhatsApp y evidencia física recopilada durante el diagnóstico.
                  </p>
                </div>
                <a 
                  href="https://docs.google.com/document/d/10bg6UXZnHm3skAl3r2BRMrp--aMhE8Qom-Ixw3GWRng/edit?tab=t.0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#004A99] text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-[#003d80] transition-all shadow-md active:scale-95"
                >
                  <ExternalLink size={14} /> Abrir Documento de Evidencias
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Accordion>

        {/* Análisis del Problema */}
        <Accordion title="Análisis del Problema (Árbol de Problemas)" icon={<AlertTriangle size={18}/>}>
          <div className="space-y-12">
            <div className="p-8 bg-red-50 border border-red-100 rounded-lg text-center space-y-3">
              <div className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em]">Problema Central</div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">{data.analisisProblema.central}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-[11px] font-bold text-[#004A99] uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center gap-2">
                  <GitBranch size={14} /> Causas Directas e Indirectas
                </div>
                <div className="space-y-3">
                  {data.analisisProblema.causasDirectas.map((c, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-100 rounded">
                      <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Causa Directa</div>
                      <div className="text-xs font-bold text-slate-900 mb-1">{c.causa}</div>
                      <div className="text-[10px] text-slate-500 italic">Evidencia: {c.evidencia}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center gap-2">
                  <TrendingUp size={14} className="rotate-90"/> Efectos Directos e Indirectos
                </div>
                <div className="space-y-3">
                  {data.analisisProblema.efectosDirectos.map((e, i) => (
                    <div key={i} className="p-4 bg-slate-900 text-white rounded">
                      <div className="text-[9px] font-bold text-[#004A99] uppercase mb-1">Efecto Directo</div>
                      <div className="text-xs font-bold mb-1">{e.efecto}</div>
                      <div className="text-[10px] text-slate-400 italic">{e.descripcion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
               <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest text-center">Visualización del Árbol de Problemas</h4>
               <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest">[ Diagrama: Árbol de Problemas ]</div>
                  <img src="arbol_problemas.png" className="w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform" />
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Verificación del Árbol de Problemas</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded text-[10px]">
                  <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest text-left">
                    <tr>
                      <th className="px-4 py-3">Elemento</th>
                      <th className="px-4 py-3">Descripción</th>
                      <th className="px-4 py-3">Evidencia</th>
                      <th className="px-4 py-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.analisisProblema.verificacion.map((v, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 font-bold">{v.elemento}</td>
                        <td className="px-4 py-3 text-slate-600">{v.descripcion}</td>
                        <td className="px-4 py-3 text-slate-500 italic">{v.evidencia}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-bold uppercase">{v.estado}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Accordion>

        {/* Análisis de Objetivos */}
        <Accordion title="Análisis de Objetivos (Árbol de Objetivos)" icon={<Goal size={18}/>}>
          <div className="space-y-12">
            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-lg text-center space-y-3">
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Objetivo Central</div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">{data.analisisObjetivos.central}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-6">
                  <h4 className="text-[11px] font-bold text-[#004A99] uppercase tracking-widest border-b border-slate-200 pb-2">Medios (Cómo llegamos)</h4>
                  <div className="space-y-4">
                    <div className="p-5 bg-white border border-slate-200 rounded shadow-sm">
                      <h5 className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest mb-3">Medios Tecnológicos</h5>
                      <ul className="space-y-2">
                        {data.analisisObjetivos.mediosTecnologicos.map((m, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <div className="mt-1"><CheckCircle size={12} className="text-emerald-500" /></div> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 bg-white border border-slate-200 rounded shadow-sm">
                      <h5 className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest mb-3">Medios de Gestión</h5>
                      <ul className="space-y-2">
                        {data.analisisObjetivos.mediosGestion.map((m, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <div className="mt-1"><CheckCircle size={12} className="text-emerald-500" /></div> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2">Fines (Impacto esperado)</h4>
                  <div className="space-y-4">
                    <div className="p-5 bg-slate-900 text-white rounded shadow-sm">
                      <h5 className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest mb-3">Fines Operativos</h5>
                      <ul className="space-y-2">
                        {data.analisisObjetivos.finesOperativos.map((f, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <div className="mt-1"><ArrowRight size={12} className="text-[#004A99]" /></div> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 bg-slate-900 text-white rounded shadow-sm">
                      <h5 className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest mb-3">Fines Comerciales</h5>
                      <ul className="space-y-2">
                        {data.analisisObjetivos.finesComerciales.map((f, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <div className="mt-1"><ArrowRight size={12} className="text-[#004A99]" /></div> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest text-center">Visualización del Árbol de Objetivos</h4>
               <div className="w-full aspect-[16/9] bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-mono text-xs uppercase tracking-widest">[ Diagrama: Árbol de Objetivos ]</div>
                  <img src="arbol_objetivos.png" className="w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform" />
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Verificación del Árbol de Objetivos</h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded text-[10px]">
                  <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest text-left">
                    <tr>
                      <th className="px-4 py-3">Medio Propuesto</th>
                      <th className="px-4 py-3">Contribución</th>
                      <th className="px-4 py-3">Fin Asociado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.analisisObjetivos.verificacion.map((v, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 font-bold text-[#004A99]">{v.medio}</td>
                        <td className="px-4 py-3 text-slate-600">{v.contribucion}</td>
                        <td className="px-4 py-3 text-slate-500 italic">{v.fin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </main>
  );
}

function ToolsPage() {
  const data = PROJECT_DATA.recopilacion;
  const structured = PROJECT_DATA.tools.interviewStructured;
  const interviewQuestions = PROJECT_DATA.inputs?.questions;
  
  return (
    <main className="max-w-5xl mx-auto py-40 px-6 space-y-16">
      <SectionHeader title="Herramientas y Técnicas" icon={<Layers size={20}/>} />
      
      <div className="space-y-6">
        <Accordion title="Entrevista Semiestructurada" icon={<MessageSquare size={18}/>} defaultOpen={true}>
          <div className="space-y-8">
            <div className="p-6 bg-white border border-slate-200 rounded italic text-sm text-slate-600">
               "{PROJECT_DATA.inputs?.interviewContext || "Se realizó una entrevista de 33 minutos vía Google Meet con el dueño de Moto Driving para recopilar información operativa y financiera."}"
            </div>
            
            {structured && (
              <div className="space-y-12 pt-4">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                    <ThumbsUp size={14} /> Resumen del Diagnóstico
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed font-light border-l-4 border-slate-200 pl-6 italic">
                    {structured.summary}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {structured.categories.map((cat: any, i: number) => (
                    <div key={i} className="p-5 bg-white border border-slate-100 rounded space-y-2 hover:shadow-sm transition-shadow">
                      <h5 className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest">{cat.title}</h5>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-light">{cat.content}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-slate-900 text-white rounded space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#004A99]">Insights Clave del Sistema</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {structured.keyFindings.map((finding: string, i: number) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="text-[#004A99] font-bold text-base leading-none">0{i + 1}</span>
                        <p className="text-xs text-slate-300 leading-relaxed font-light">{finding}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {interviewQuestions && (
              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                  <ClipboardList size={14} /> Cuestionario de Levantamiento (Proceso Académico)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-slate-200 rounded text-[10px]">
                    <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest text-left">
                      <tr>
                        <th className="px-4 py-3">Categoría</th>
                        <th className="px-4 py-3">Pregunta Guía</th>
                        <th className="px-4 py-3">Objetivo del Análisis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {interviewQuestions.map((q: any, i: number) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3 font-bold text-[#004A99] uppercase tracking-tighter align-top">{q.category}</td>
                          <td className="px-4 py-3 text-slate-700 font-medium">{q.question}</td>
                          <td className="px-4 py-3 text-slate-500 italic text-[9px] leading-relaxed">{q.objective}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </Accordion>

        <Accordion title="Observación Directa" icon={<Search size={18}/>}>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-slate-200 rounded italic text-sm text-slate-600">
               Uso de observación participante para validar los flujos de inscripción y el estado de la flota vehicular.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {data.informacion.primaria.filter(inf => inf.fuente === 'Observación directa').map((inf, i) => (
                 <div key={i} className="p-4 bg-white border border-slate-100 rounded">
                    <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Mapeo de Evidencia</div>
                    <div className="text-xs text-slate-700">{inf.descripcion}</div>
                 </div>
               ))}
            </div>
          </div>
        </Accordion>

        <Accordion title="Análisis de Evidencia Digital" icon={<Share2 size={18}/>}>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-slate-200 rounded italic text-sm text-slate-600">
               Análisis de métricas de TikTok y patrones de comunicación en WhatsApp Business para determinar la madurez digital.
            </div>
            <div className="grid md:grid-cols-3 gap-4">
               <div className="p-4 bg-white border border-slate-100 rounded text-center">
                  <div className="text-sm font-bold text-slate-900 border-b border-slate-50 mb-1 pb-1">10.3K</div>
                  <div className="text-[9px] text-[#004A99] uppercase font-bold tracking-widest">Likes TikTok</div>
               </div>
               <div className="p-4 bg-white border border-slate-100 rounded text-center">
                  <div className="text-sm font-bold text-slate-900 border-b border-slate-50 mb-1 pb-1">22.8K</div>
                  <div className="text-[9px] text-[#004A99] uppercase font-bold tracking-widest">Seguidores</div>
               </div>
               <div className="p-4 bg-white border border-slate-100 rounded text-center">
                  <div className="text-sm font-bold text-slate-900 border-b border-slate-50 mb-1 pb-1">239K</div>
                  <div className="text-[9px] text-[#004A99] uppercase font-bold tracking-widest">Vistas Totales</div>
               </div>
            </div>
          </div>
        </Accordion>
      </div>
    </main>
  );
}

function StakeholdersPage() {
  const data = PROJECT_DATA.salida.planInvolucramiento;

  return (
    <main className="max-w-6xl mx-auto py-40 px-6 space-y-24">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <SectionHeader title="Plan de Involucramiento" icon={<TrendingUp size={24}/>} />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Salidas del Análisis de Negocio (PMBOK 7)</h2>
        <p className="text-slate-500 font-light leading-relaxed">
          {data.introduccion}
        </p>
      </header>

      {/* Dashboard Executive View */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          {/* Matriz de Involucramiento */}
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800">Matriz de Involucramiento Estratégico</h3>
              <div className="flex gap-2">
                 <div className="h-2 w-2 rounded-full bg-red-500"></div>
                 <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                 <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg text-xs">
                <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest text-left">
                  <tr>
                    <th className="px-6 py-4">Involucrado</th>
                    <th className="px-6 py-4">Interés</th>
                    <th className="px-6 py-4">Influencia</th>
                    <th className="px-6 py-4">Estrategia PMBOK 7</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.matriz.map((m, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{m.involucrado}</div>
                        <div className="text-[10px] text-slate-400 italic mt-1">Exp: {m.expectativa}</div>
                      </td>
                      <td className="px-6 py-4">
                        <PriorityBadge value={m.interes as any || 'Medio'} />
                      </td>
                      <td className="px-6 py-4">
                        <PriorityBadge value={m.influencia as any || 'Medio'} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-600 font-medium leading-relaxed">{m.estrategia}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="p-8 bg-slate-900 text-white rounded-xl shadow-xl space-y-6">
            <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-[0.2em] mb-4">Resumen de Estrategias</h4>
            <div className="space-y-6">
              {data.estrategia.map((e, i) => (
                <div key={i} className="space-y-2 border-l-2 border-[#004A99] pl-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#004A99]">Estrategia 0{i + 1}</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{e}</p>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-800">
               <button className="w-full py-3 bg-[#004A99] hover:bg-[#003d80] text-white text-[10px] font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2">
                 <FileText size={14} /> Exportar Plan de Gestión
               </button>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-xl space-y-4">
             <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
               <ShieldCheck size={14} className="text-emerald-500" /> Gobernanza del Proyecto
             </h4>
             <p className="text-[11px] text-slate-500 leading-relaxed italic">
               El plan asegura que las expectativas de los patrocinadores se alineen con las capacidades del circuito y el equipo operativo.
             </p>
          </div>
        </aside>
      </div>
    </main>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recopilacion" element={<RecopilacionPage />} />
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
