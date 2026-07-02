import type { ReactNode } from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
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
  ThumbsUp,
  ExternalLink,
  Database,
  Lightbulb,
  Compass,
  Workflow
} from 'lucide-react';
import { PROJECT_DATA } from './constants';
import { DESIGN_THINKING_DATA } from './designThinking';
import AlcancePage from './components/AlcancePage';
import Sprint1PagosPage from './components/Spring1PagosPage';
import type { IdentifiedStakeholder } from './types';

export const LightboxContext = createContext<{
  openLightbox: (src: string, alt?: string) => void;
}>({
  openLightbox: () => {},
});

export function useLightbox() {
  return useContext(LightboxContext);
}

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
            <NavLink to="/recopilacion" active={location.pathname === "/recopilacion"}>Recopilación</NavLink>
            <NavLink to="/design-thinking" active={location.pathname === "/design-thinking"}>Design Thinking</NavLink>
            <NavLink to="/alcance" active={location.pathname === "/alcance"}>Alcance</NavLink>
            <NavLink to="/control-pagos" active={location.pathname === "/control-pagos"}>Control de Pagos</NavLink>
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
        {/* Equipo del Proyecto */}
        <section className="scroll-mt-24 space-y-8">
          <SectionHeader title="Estudiantes del Proyecto" icon={<Users size={20}/>} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Jesús López Rodríguez",
                code: "2223050507",
                email: "2223050507@untels.edu.pe",
                role: "Líder de Proyecto / Analista de Sistemas",
                initials: "JL"
              },
              {
                name: "Leonardo Ávila Tribeño",
                code: "2223110288",
                email: "2223110288@untels.edu.pe",
                role: "Diseñador UX/UI / Arquitecto de Software",
                initials: "LA"
              },
              {
                name: "Carlos Agustín Curo Ramos",
                code: "2113010682",
                email: "2113010682@untels.edu.pe",
                role: "Desarrollador Backend / Base de Datos",
                initials: "CC"
              },
              {
                name: "Jean Piers Quispe Chambi",
                code: "2223010312",
                email: "2223010312@untels.edu.pe",
                role: "Desarrollador Frontend / Integración de Sistemas",
                initials: "JQ"
              }
            ].map((student, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-[4px] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#004A99] font-bold text-xs flex items-center justify-center font-mono group-hover:bg-[#004A99] group-hover:text-white transition-all">
                      {student.initials}
                    </div>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-500 py-1 px-2 rounded">
                      Código: {student.code}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#004A99] transition-colors">{student.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{student.role}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-slate-400 block text-[9px] uppercase tracking-widest font-sans mb-1">Correo Institucional</span>
                  <a 
                    href={`mailto:${student.email}`} 
                    className="text-[11px] text-slate-500 font-mono break-all hover:text-[#004A99] hover:underline transition-colors"
                  >
                    {student.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
              {inputs.identifiedStakeholders.map((person:IdentifiedStakeholder, i:number) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-[#004A99]">{person.id}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">{person.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-[2px] text-[9px] font-bold uppercase ${person.type === 'Interno' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                      {person.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{person.role}</td>
                  <td className="px-6 py-4 text-slate-500 leading-relaxed">{person.responsibility}</td>
                </tr>
              ))}
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
  const { openLightbox } = useLightbox();
  const data = PROJECT_DATA.recopilacion;
const evidences = [
  {
    title: "Contacto Inicial con Clientes",
    description:
      "Las siguientes evidencias muestran cómo los clientes potenciales se comunican con la escuela de manejo para solicitar información sobre los servicios.",
    items: [
      {
        src: "/recoleccion/contacto_cliente_inicial.png",
        title: "Contacto Inicial",
        subtitle: "contacto_cliente_inicial.png",
      },
      {
        src: "/recoleccion/conversaciones_clientes.png",
        title: "Conversaciones con Clientes",
        subtitle: "conversaciones_clientes.png",
      },
      {
        src: "/recoleccion/consultas_servicios.png",
        title: "Consultas sobre Servicios",
        subtitle: "consultas_servicios.png",
      },
    ],
  },

  {
    title: "Interés en los Servicios",
    description:
      "Se presentan conversaciones de usuarios interesados en adquirir los servicios ofrecidos por la escuela de manejo.",
    items: [
      {
        src: "/recoleccion/interes_servicio.png",
        title: "Interés en el Servicio",
        subtitle: "interes_servicio.png",
      },
      {
        src: "/recoleccion/solicitud_informacion.png",
        title: "Solicitud de Información",
        subtitle: "solicitud_informacion.png",
      },
      {
        src: "/recoleccion/consulta_horarios.png",
        title: "Consulta de Horarios",
        subtitle: "consulta_horarios.png",
      },
    ],
  },

  {
    title: "Seguimiento de Clientes",
    description:
      "Las siguientes capturas evidencian el flujo constante de interacción con potenciales clientes y el seguimiento realizado.",
    items: [
      {
        src: "/recoleccion/seguimiento_clientes.png",
        title: "Seguimiento de Clientes",
        subtitle: "seguimiento_clientes.png",
      },
      {
        src: "/recoleccion/atencion_clientes.png",
        title: "Atención al Cliente",
        subtitle: "atencion_clientes.png",
      },
      {
        src: "/recoleccion/flujo_interaccion.png",
        title: "Flujo de Interacción",
        subtitle: "flujo_interaccion.png",
      },
    ],
  },

  {
    title: "Acuerdos y Pagos",
    description:
      "Estas evidencias muestran coordinaciones relacionadas con pagos realizados por Moto Driving hacia el encargado que alquila el espacio utilizado como circuito de práctica de la escuela de manejo.",
    items: [
      {
        src: "/recoleccion/pago_alquiler_circuito.png",
        title: "Pago de Alquiler del Circuito",
        subtitle: "pago_alquiler_circuito.png",
      },
      {
        src: "/recoleccion/confirmacion_pago.png",
        title: "Confirmación de Pago",
        subtitle: "confirmacion_pago.png",
      },
      {
        src: "/recoleccion/transferencia_pago_circuito.png",
        title: "Transferencia de Pago",
        subtitle: "transferencia_pago_circuito.png",
      },
    ],
  },
];
  return (
    <main className="max-w-6xl mx-auto py-40 px-6 space-y-24">
      <header className="max-w-3xl mx-auto text-center mb-16 space-y-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <SectionHeader title="Recopilación y Análisis de Información" icon={<Search size={24}/>} />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-light leading-relaxed text-lg"
        >
          Diagnóstico estratégico integral de Moto Driving mediante el levantamiento de información primaria, secundaria y análisis de sistemas.
        </motion.p>
      </header>

      {/* Analytical Section */}
      <div className="space-y-6">
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
                {Object.entries(data.contexto.presenciaTikTok).map(([key, value]) => (
                  <div key={key} className="p-4 bg-white border border-slate-200 rounded text-center">
                    <div className="text-xs font-bold text-slate-900">{value as string}</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="Plan de Levantamiento de Información" icon={<Database size={18}/>}>
          <div className="space-y-6">
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
                  <img 
                    src="arbol_problemas.png" 
                    alt="Árbol de Problemas"
                    className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform cursor-zoom-in" 
                    onClick={() => openLightbox("arbol_problemas.png", "Árbol de Problemas")}
                  />
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
                  <img 
                    src="arbol_objetivos.png" 
                    alt="Árbol de Objetivos"
                    className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform cursor-zoom-in" 
                    onClick={() => openLightbox("arbol_objetivos.png", "Árbol de Objetivos")}
                  />
               </div>
            </div>

            {/* SMART Verification */}
            {PROJECT_DATA.salida.verificacionSMART && (
              <div className="space-y-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded-[4px] flex items-center justify-center text-[#004A99] shadow-sm">
                    <CheckCircle size={16} />
                  </div>
                  <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Verificación SMART del Árbol de Objetivos</h4>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECT_DATA.salida.verificacionSMART.map((s, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white border border-slate-200 rounded-xl space-y-3 hover:shadow-md transition-shadow group/card"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-slate-100 group-hover/card:bg-[#004A99] group-hover/card:text-white text-[#004A99] rounded-full flex items-center justify-center font-bold text-sm transition-colors">
                          {s.letter}
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${s.complies ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                          {s.complies ? 'Sí' : 'No'}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 text-[10px] uppercase tracking-wider">{s.name}</h5>
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest block opacity-70">Justificación:</span>
                        <p className="text-[10px] text-slate-500 leading-relaxed font-light italic">
                          {s.justification}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Accordion>

        {/* Análisis de Alternativas mediante BPM */}
        <Accordion title="Análisis de Alternativas mediante BPM" icon={<Workflow size={18}/>}>
          <div className="space-y-12 py-4">
            {/* Metodología general */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2">
                <Workflow size={14} /> Metodología empleada: Business Process Management (BPM)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                La metodología BPM fue utilizada para identificar, analizar, rediseñar y optimizar los procesos críticos de la <strong>Escuela de Manejo Ámbar</strong>. Esta metodología permite mejorar la eficiencia operativa mediante la digitalización progresiva de los procesos institucionales y el monitoreo continuo mediante indicadores de desempeño.
              </p>
            </div>

            {/* Fases BPM Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-[#004A99]">1</div>
                <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fase 1: Identificación de procesos críticos</h5>
                <p className="text-[10px] text-slate-400 font-light pb-2">Se identificaron los procesos con mayores deficiencias:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Gestión de alumnos", "Programación de clases", "Seguimiento académico", "Gestión financiera", "Comunicación con estudiantes", "Elaboración de reportes"].map((proc, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-[9px] border border-slate-100">{proc}</span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3">
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-xs font-bold text-red-600">2</div>
                <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fase 2: Modelado AS-IS (situación actual)</h5>
                <p className="text-[10px] text-slate-400 font-light pb-1">Se identificaron conductas ineficientes:</p>
                <ul className="space-y-1 text-[10px] text-slate-500 font-light">
                  {["Registros aislados", "Procesos no estandarizados", "Dependencia de WhatsApp", "Ausencia de indicadores", "Alta dependencia de actividades manuales", "Falta de trazabilidad financiera"].map((p, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-400" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-slate-100 text-[9px] font-bold text-slate-800">
                  <span className="text-red-600 uppercase tracking-widest text-[8px] block mb-0.5 font-bold">Consecuencias directas:</span>
                  Sobrecarga administrativa, insatisfacción del cliente, decisiones sin datos confiables, dificultad para escalar operaciones.
                </div>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-xs font-bold text-emerald-600">3</div>
                <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fase 3: Diseño TO-BE (situación futura)</h5>
                <p className="text-[10px] text-slate-400 font-light pb-2">Propuesta basada en la integración gradual de herramientas digitales que permiten:</p>
                <ul className="space-y-1.5 text-[10px] text-slate-600">
                  {[
                    "Centralizar información.",
                    "Automatizar procesos repetitivos.",
                    "Mejorar la comunicación con estudiantes.",
                    "Generar indicadores de gestión.",
                    "Facilitar la toma de decisiones."
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <div className="mt-0.5 text-emerald-500"><CheckCircle size={10} /></div>
                      <span className="font-light">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Generación de alternativas */}
            <div className="space-y-6 pt-4">
              <div className="text-center md:text-left">
                <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-l-4 border-[#004A99] pl-3">Generación de Alternativas</h4>
                <p className="text-[10px] text-slate-400 font-light mt-1">A partir del análisis de flujos BPM, se plantearon tres alternativas viables para la escuela.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Alt 1 */}
                <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Alternativa 1</span>
                      <h5 className="font-bold text-slate-900 text-xs">Digitalización Básica</h5>
                    </div>
                    <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                      Implementación de herramientas simples para digitalizar operaciones sin desarrollo personalizado.
                    </p>
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest block">Componentes:</span>
                      <ul className="space-y-1 text-[10px] text-slate-600 font-light">
                        <li>• Formularios digitales</li>
                        <li>• Hojas de cálculo compartidas</li>
                        <li>• Almacenamiento en la nube (Drive)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-[9px] mt-4">
                    <div>
                      <span className="text-emerald-600 font-bold uppercase tracking-wider block">Ventajas:</span>
                      <span className="text-slate-500 font-light">Bajo costo, implementación rápida.</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-bold uppercase tracking-wider block">Desventajas:</span>
                      <span className="text-slate-500 font-light">Escasa integración, limitada escalabilidad.</span>
                    </div>
                  </div>
                </div>

                {/* Alt 2 (Selected) */}
                <div className="p-6 bg-gradient-to-b from-white to-emerald-50/20 border-2 border-emerald-500 rounded-xl space-y-4 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between md:col-span-1">
                  <div>
                    <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 font-bold text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                      Seleccionada
                    </span>
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest font-mono">Alternativa 2</span>
                      <h5 className="font-bold text-[#004A99] text-xs">Solución Híbrida Modular</h5>
                    </div>
                    <p className="text-[10px] text-slate-600 leading-relaxed font-light mt-2">
                      Implementación progresiva de módulos tecnológicos orientados a resolver los procesos críticos identificados mediante BPM.
                    </p>
                    
                    <div className="space-y-2 pt-3">
                      <span className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest block">Módulos de la Solución:</span>
                      <div className="space-y-2">
                        <div className="bg-white/90 p-2.5 rounded border border-slate-100 space-y-1">
                          <span className="text-[9px] font-bold text-slate-800 block">Módulo de Gestión Académica</span>
                          <p className="text-[9px] text-slate-500 font-light leading-snug">Registro de alumnos, programación de clases y seguimiento de asistencia.</p>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded border border-slate-100 space-y-1">
                          <span className="text-[9px] font-bold text-slate-800 block">Módulo de Comunicación</span>
                          <p className="text-[9px] text-slate-500 font-light leading-snug">Integración con WhatsApp Business, recordatorios automáticos y seguimiento de consultas.</p>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded border border-slate-100 space-y-1">
                          <span className="text-[9px] font-bold text-slate-800 block">Módulo de Gestión Financiera</span>
                          <p className="text-[9px] text-slate-500 font-light leading-snug">Registro de pagos, control de ingresos e historial de transacciones.</p>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded border border-slate-100 space-y-1">
                          <span className="text-[9px] font-bold text-slate-800 block">Módulo de Indicadores / KPIs</span>
                          <p className="text-[9px] text-slate-500 font-light leading-snug">Dashboard de KPIs, reportes en tiempo real y trazabilidad completa de las operaciones.</p>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded border border-slate-100 space-y-1">
                          <span className="text-[9px] font-bold text-slate-800 block">Programa de Capacitación</span>
                          <p className="text-[9px] text-slate-500 font-light leading-snug">Capacitación al personal administrativo e instructores y estandarización de procesos.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 text-[9px] mt-4 space-y-1">
                    <span className="text-emerald-700 font-bold uppercase tracking-wider block">Ventajas:</span>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Alta escalabilidad, implementación gradual, menor inversión inicial, mayor facilidad de adopción y reducción de riesgos tecnológicos.
                    </p>
                  </div>
                </div>

                {/* Alt 3 */}
                <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-slate-400 tracking-widest uppercase font-mono">Alternativa 3</span>
                      <h5 className="font-bold text-slate-900 text-xs">Sistema Integral Especializado</h5>
                    </div>
                    <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                      Implementación de una plataforma completamente integrada e integral desde el inicio.
                    </p>
                    <div className="space-y-2">
                      <span className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest block">Componentes:</span>
                      <ul className="space-y-1 text-[10px] text-slate-600 font-light">
                        <li>• ERP especializado integral</li>
                        <li>• Integración total de procesos</li>
                        <li>• Automatización avanzada instantánea</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-[9px] mt-4">
                    <div>
                      <span className="text-emerald-600 font-bold uppercase tracking-wider block">Ventajas:</span>
                      <span className="text-slate-500 font-light">Máxima integración.</span>
                    </div>
                    <div>
                      <span className="text-red-500 font-bold uppercase tracking-wider block">Desventajas:</span>
                      <span className="text-slate-500 font-light">Alto costo, mayor complejidad, mayor resistencia al cambio.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evaluación Multicriterio */}
            <div className="space-y-4 pt-4">
              <div>
                <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest border-l-4 border-[#004A99] pl-3">Matriz de Evaluación Multicriterio</h4>
                <p className="text-[10px] text-slate-400 font-light mt-1">Criterios ponderados utilizados para evaluar las tres alternativas sugeridas.</p>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
                <table className="w-full text-left border-collapse text-[10px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 uppercase tracking-widest border-b border-slate-200">
                      <th className="px-4 py-3 font-semibold">Criterio de Evaluación</th>
                      <th className="px-4 py-3 font-semibold text-center">Peso</th>
                      <th className="px-4 py-3 font-semibold text-center">Alt 1 (Básica)</th>
                      <th className="px-4 py-3 font-semibold text-center bg-emerald-50/45 text-emerald-700">Alt 2 (Híbrida - Seleccionada)</th>
                      <th className="px-4 py-3 font-semibold text-center">Alt 3 (Integral)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {[
                      { name: "Viabilidad económica", weight: "15%", a1: 5, a2: 4, a3: 2 },
                      { name: "Facilidad de implementación", weight: "10%", a1: 5, a2: 4, a3: 2 },
                      { name: "Facilidad de adopción", weight: "15%", a1: 4, a2: 4, a3: 2 },
                      { name: "Impacto operativo", weight: "15%", a1: 2, a2: 4, a3: 5 },
                      { name: "Seguimiento comercial", weight: "10%", a1: 2, a2: 4, a3: 5 },
                      { name: "Reducción de informalidad", weight: "15%", a1: 2, a2: 4, a3: 5 },
                      { name: "Vulnerabilidad frente al entorno físico", weight: "10%", a1: 5, a2: 3, a3: 4 },
                      { name: "Escalabilidad del servicio", weight: "10%", a1: 4, a2: 4, a3: 4 }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-medium text-slate-900">{row.name}</td>
                        <td className="px-4 py-2.5 text-center text-slate-400 tracking-wider font-mono">{row.weight}</td>
                        <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-500">{row.a1} / 5</td>
                        <td className="px-4 py-2.5 text-center font-mono font-bold bg-emerald-50/20 text-emerald-600">{row.a2} / 5</td>
                        <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-500">{row.a3} / 5</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50 border-t border-slate-200">
                      <td className="px-4 py-3.5 font-bold text-slate-900">Resultados Obtenidos</td>
                      <td className="px-4 py-3.5 text-center font-mono text-slate-400 font-bold">100%</td>
                      <td className="px-4 py-3.5 text-center font-mono text-xs font-bold text-slate-500 bg-slate-100/30">29 Puntos</td>
                      <td className="px-4 py-3.5 text-center font-mono text-xs font-bold bg-emerald-500 text-white rounded shadow-sm">31 Puntos</td>
                      <td className="px-4 py-3.5 text-center font-mono text-xs font-bold text-slate-500 bg-slate-100/30">29 Puntos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alternativa Seleccionada Highlight */}
            <div className="p-6 bg-[#004A99]/5 border border-[#004A99]/10 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-[#004A99]">
                <CheckCircle size={16} />
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#004A99]">Alternativa Seleccionada</h5>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-light">
                La <strong>Alternativa 2: Solución Híbrida Modular</strong> obtuvo el mayor puntaje (<strong>31 puntos</strong>), siendo la opción más adecuada para resolver las causas identificadas en el árbol de problemas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold text-[#004A99] uppercase tracking-widest block">Contribución Directa:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Estandarización operativa", "Integración de procesos", "Seguimiento académico", "Control financiero", "Disponibilidad de indicadores", "Escalabilidad de operaciones"].map((f, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded text-[9px] font-medium shadow-sm">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white border border-[#004A99]/20 rounded-lg space-y-2">
                  <span className="text-[8px] font-bold text-[#004A99] uppercase tracking-widest block font-bold">Logro del Objetivo Central del Proyecto:</span>
                  <p className="text-[10px] text-slate-600 font-light leading-relaxed italic">
                    "Mejorar la eficiencia operativa y la calidad del servicio educativo mediante la digitalización estratégica e integración de los procesos clave de la Escuela de Manejo Ámbar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Visual Evidence Section */}
      <div className="pt-24 space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Evidencias de Recopilación de Información</h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto">Registro visual del levantamiento realizado.</p>
        </div>

        <div className="space-y-40">
          {evidences.map((section, idx) => (
            <section key={idx} className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 border-l-4 border-[#004A99] pl-8"
              >
                <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
                <p className="text-slate-500 font-light max-w-2xl">{section.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-102 cursor-zoom-in transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onClick={() => openLightbox(item.src, item.title)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                        <p className="text-white text-[10px] font-bold uppercase tracking-widest">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
          
          <div className="pt-20 border-t border-slate-100 text-center">
              <a 
                href="https://docs.google.com/document/d/10bg6UXZnHm3skAl3r2BRMrp--aMhE8Qom-Ixw3GWRng/edit?tab=t.0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-400 hover:text-[#004A99] transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <ExternalLink size={16} /> Ver repositorio completo en Google Docs
              </a>
          </div>
        </div>
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


function DesignThinkingPage() {
  const { openLightbox } = useLightbox();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sandboxState, setSandboxState] = useState<Record<number, 'traditional' | 'innovative'>>({
    1: 'traditional',
    2: 'traditional',
    3: 'traditional',
    4: 'traditional',
    5: 'traditional',
  });

  const sandboxContent: Record<number, { traditional: string, innovative: string, benefit: string, titleTrad: string, titleInnov: string }> = {
    1: {
      titleTrad: "Suposiciones Informales",
      titleInnov: "Empatía Basada en Evidencia",
      traditional: "Se asume que los clientes prefieren WhatsApp por comodidad informal. No existe registro real de las demoras de respuesta ni de las frustraciones con la flota de motos.",
      innovative: "Mapeo exhaustivo mediante entrevistas profundas. Se descubren tiempos de espera de hasta 3 horas y alta ansiedad de los alumnos por cruce de horarios en el circuito físico.",
      benefit: "Diagnóstico profundo con data real directa del contexto del estudiante."
    },
    2: {
      titleTrad: "Problema Mal Enmarcado",
      titleInnov: "Punto de Vista (POV) Crítico",
      traditional: "Se asume vaga y genéricamente que 'hay retrasos internos' o se culpa a los alumnos por demorarse, sin identificar qué fallas sistémicas causan la desorganización.",
      innovative: "FOV articulado: 'El dueño de Moto Driving necesita un entorno consolidado y trazable porque el descontrol de Yape y WhatsApp sabotea sus finanzas y ahuyenta a estudiantes.'",
      benefit: "Precisión absoluta sobre la raíz del problema, optimizando la asignación de recursos."
    },
    3: {
      titleTrad: "Fórmulas Tradicionales",
      titleInnov: "Ideación Estratégica (SCAMPER)",
      traditional: "Intentar desarrollar un sistema manual pesado en Excel o idear un software costoso codificado desde cero con recursos que un negocio local no posee.",
      innovative: "Aplicación sistemática de SCAMPER: sustituir registros físicos por SaaS rápido, combinar notificaciones y automatizar el WhatsApp mediante la API del negocio.",
      benefit: "Enfoque en soluciones viables, ágiles y de bajísimo costo para la PYME."
    },
    4: {
      titleTrad: "Código Inmediato a Ciegas",
      titleInnov: "Modelos Tangibles de Interacción",
      traditional: "Contratar programadores apresuradamente y esperar que el cliente entienda una aplicación compleja sin evaluar previamente flujos lógicos con usuarios.",
      innovative: "Bocetos de baja fidelidad y mockups interactivos web para modelar el flujo de navegación y la interacción de la plataforma propuesta.",
      benefit: "Validación de la lógica del sistema interactivo antes de escribir una sola línea de código."
    },
    5: {
      titleTrad: "Lanzamiento y Esperanza",
      titleInnov: "Pruebas de Usabilidad e Iteración",
      traditional: "Desplegar el bot de WhatsApp y esperar que no falle. Frente a errores de usuario o descontento del personal, el sistema es rechazado inmediatamente.",
      innovative: "Conducción de pruebas de usabilidad guiadas con alumnos reales. Los cuellos de botella se registran en una Malla Receptora para corregir el software antes del alta.",
      benefit: "Garantía de adopción operativa cercana al 100% mitigando resistencia al cambio."
    }
  };

  const phaseIcons = (p: number) => {
    switch (p) {
      case 1: return <Compass size={18} />;
      case 2: return <AlertTriangle size={18} />;
      case 3: return <Lightbulb size={18} />;
      case 4: return <Workflow size={18} />;
      case 5: return <CheckCircle size={18} />;
      default: return <Layers size={18} />;
    }
  };

  const handleToggleSandbox = (phaseNum: number, state: 'traditional' | 'innovative') => {
    setSandboxState(prev => ({
      ...prev,
      [phaseNum]: state
    }));
  };

  return (
    <main className="max-w-6xl mx-auto py-40 px-6 space-y-24">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center space-y-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <SectionHeader title="Metodología Design Thinking" icon={<Lightbulb size={24}/>} />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-slate-900"
        >
          Cinco Fases de Innovación Aplicadas a Moto Driving
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-light leading-relaxed text-sm md:text-base"
        >
          Proceso secuencial centrado en las personas para diagnosticar cuellos de botella, idear alternativas viables, conceptualizar prototipos rápidos y asegurar la óptima adopción organizacional.
        </motion.p>
      </header>

      {/* Stepper Navigation */}
      <div className="flex overflow-x-auto gap-3 pb-8 justify-start lg:justify-center scrollbar-none border-b border-slate-200">
        {DESIGN_THINKING_DATA.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(idx);
              const element = document.getElementById(`fase-${p.phase}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 border flex-shrink-0 transition-all ${
              activeTab === idx
                ? 'bg-[#004A99] text-white border-[#004A99] shadow-md scale-102'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="opacity-70">Fase {p.phase}</span>
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="font-semibold">{p.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Continuous Sequential Timeline Flow */}
      <div className="relative space-y-36">
        {/* Connecting Vertical Timeline Line */}
        <div className="absolute left-[20px] md:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#004A99] via-purple-500 to-[#06B6D4] opacity-30 pointer-events-none hidden md:block" />

        {DESIGN_THINKING_DATA.map((p, idx) => {
          const isEven = idx % 2 === 0;
          const currentSandbox = sandboxContent[p.phase];

          return (
            <section 
              id={`fase-${p.phase}`}
              key={idx} 
              className="scroll-mt-32 relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start"
            >
              {/* Timeline dot marker (desktop center, mobile left) */}
              <div className="absolute left-[20px] md:left-1/2 top-4 -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-100 shadow flex items-center justify-center bg-white z-10"
                style={{ borderColor: p.colorTheme.primary }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.colorTheme.primary }} />
              </div>

              {/* Textual & Structural Details (Staggers side dependent on index) */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'} pl-10 md:pl-0`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md"
                      style={{ backgroundColor: p.colorTheme.bg, color: p.colorTheme.primary }}
                    >
                      Fase {p.phase} — {p.subtitle}
                    </span>
                    <div className="text-slate-400 font-mono text-[10px] tracking-widest uppercase">Paso Secuencial</div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-sm">
                    {p.description}
                  </p>
                </div>

                {/* Deep Concept Card */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                    style={{ color: p.colorTheme.primary }}
                  >
                    {phaseIcons(p.phase)} {p.conceptTitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {p.conceptDescription}
                  </p>
                </div>

                {/* Collapsible Accordion tools and techniques */}
                <div className="space-y-3">
                  <Accordion title="Técnicas Clave Empleadas" icon={<Layers size={16}/>} defaultOpen={true}>
                    <div className="grid gap-3 pt-2">
                      {p.techniques.map((tech, tIdx) => (
                        <div key={tIdx} className="bg-white border border-slate-200/60 p-4 rounded-lg shadow-sm space-y-1">
                          <h5 className="text-[11px] font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {tech.name}
                          </h5>
                          <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Accordion>

                  <Accordion title="Herramientas del Marco" icon={<Database size={16}/>}>
                    <div className="grid gap-3 pt-2">
                      {p.tools.map((tool, tIdx) => (
                        <div key={tIdx} className="bg-white border border-slate-200/60 p-4 rounded-lg shadow-sm space-y-1">
                          <h5 className="text-[11px] font-bold text-slate-900 flex items-center gap-2">
                            <ArrowRight size={12} style={{ color: p.colorTheme.primary }} /> {tool.name}
                          </h5>
                          <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </div>
              </motion.div>

              {/* Visual Asset & Interactive Sandbox (Opposite side) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`space-y-8 ${isEven ? 'md:order-2' : 'md:order-1'} pl-10 md:pl-0`}
              >
                {/* Premium Responsive Card with Image */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden bg-slate-100">
                    {p.images && p.images.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50">
                        {p.images.map((imgSrc, imgIdx) => (
                          <div key={imgIdx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white border border-slate-200 group/subimg">
                            <img
                              src={imgSrc}
                              alt={imgIdx === 0 ? "Mapa de Empatía" : "Buyer Persona"}
                              className="w-full h-full object-cover opacity-95 group-hover/subimg:scale-105 cursor-zoom-in transition-transform duration-500"
                              referrerPolicy="no-referrer"
                              onClick={() => openLightbox(imgSrc, imgIdx === 0 ? "Mapa de Empatía" : "Buyer Persona")}
                            />
                            <div className="absolute bottom-2 left-2 bg-slate-900/75 backdrop-blur-sm text-[8px] font-mono font-bold text-white px-2 py-0.5 rounded uppercase tracking-widest pointer-events-none">
                              {imgIdx === 0 ? "Mapa de Empatía" : "Buyer Persona"}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover opacity-95 group-hover:scale-102 cursor-zoom-in transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          onClick={() => openLightbox(p.image, p.title)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                          <div className="space-y-1">
                            <span className="text-[9px] text-[#004A99] bg-white font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                              Fase {p.phase} Visual
                            </span>
                            <h4 className="text-white text-xs font-bold uppercase tracking-wide pt-2 opacity-90">Herramienta Principal Seleccionada</h4>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Innovación Design Thinking</span>
                    <span style={{ color: p.colorTheme.primary }}>MOTO DRIVING</span>
                  </div>
                </div>

                {/* Interactive Innovation Sandbox / Status-Quo Comparison Simulator */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Comparativa Operacional</h4>
                    <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                      <button
                        onClick={() => handleToggleSandbox(p.phase, 'traditional')}
                        className={`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md transition-colors ${
                          sandboxState[p.phase] === 'traditional'
                            ? 'bg-white text-red-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Tradicional (Bottleneck)
                      </button>
                      <button
                        onClick={() => handleToggleSandbox(p.phase, 'innovative')}
                        className={`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md transition-colors ${
                          sandboxState[p.phase] === 'innovative'
                            ? 'bg-white text-emerald-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Design Thinking (Propuesta)
                      </button>
                    </div>
                  </div>

                  <div className="min-h-[100px] flex flex-col justify-between">
                    <div>
                      {sandboxState[p.phase] === 'traditional' ? (
                        <div className="space-y-2">
                          <h5 className="text-[11px] font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600" /> {currentSandbox.titleTrad}
                          </h5>
                          <p className="text-xs text-slate-500 italic leading-relaxed font-light">
                            "{currentSandbox.traditional}"
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <h5 className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle size={12} className="text-emerald-600" /> {currentSandbox.titleInnov}
                          </h5>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">
                            {currentSandbox.innovative}
                          </p>
                        </div>
                      )}
                    </div>

                    {sandboxState[p.phase] === 'innovative' && (
                      <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 flex justify-between items-center bg-emerald-50/40 p-2.5 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-700 uppercase tracking-widest">Retorno / Impacto:</span>
                        <span className="italic font-light text-slate-600">{currentSandbox.benefit}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Synthesis Section / Conclusion Card */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white rounded-2xl p-10 md:p-14 space-y-8 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-4 h-full">
            {Array.from({length: 16}).map((_, i) => (
              <div key={i} className="border border-white" />
            ))}
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <span className="text-[9px] font-bold text-[#004A99] bg-white px-2.5 py-1 rounded uppercase tracking-[0.2em]">
            Síntesis del Enfoque Académico
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            La Sinergia de Scrum, PMI y Design Thinking
          </h3>
          <p className="text-slate-300 font-light leading-relaxed text-xs md:text-sm">
            La integración de Design Thinking en las fases iniciales del proyecto de la Escuela de Manejo Moto Driving asegura que los requerimientos tecnológicos no sean arbitrarios, sino el resultado de un proceso validado con el usuario real. Cada fase del marco alimenta directamente un dominio de desempeño del PMBOK 7ma edición: Empatizar nutre el dominio de Partes Interesadas, Definir el dominio de Planificación, Idear y Prototipar el dominio de Entrega, y Evaluar el dominio de Medición. Al basar el desarrollo en necesidades humanas validadas, la gobernanza estructural del PMBOK 7 y el desarrollo incremental con Scrum garantizan que la arquitectura final sea robusta, sostenible y de adopción inmediata en el mercado.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div>METODOLOGÍA DE INVENCIÓN Y DISRUPCIÓN DIGITAL</div>
          <a 
            href="https://docs.google.com/document/d/10bg6UXZnHm3skAl3r2BRMrp--aMhE8Qom-Ixw3GWRng/edit?tab=t.0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#004A99] transition-colors"
          >
            <ExternalLink size={14} /> Documento del Diagnóstico Completo
          </a>
        </div>
      </motion.section>
    </main>
  );
}


export default function App() {
  const [lightbox, setLightbox] = useState<{ src: string; alt?: string } | null>(null);

  const openLightbox = (src: string, alt?: string) => {
    setLightbox({ src, alt });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recopilacion" element={<RecopilacionPage />} />
            <Route path="/entradas" element={<InputsPage />} />
            <Route path="/herramientas" element={<ToolsPage />} />
            <Route path="/salidas" element={<StakeholdersPage />} />
            <Route path="/design-thinking" element={<DesignThinkingPage />} />
            <Route path="/alcance" element={<AlcancePage />} />
            <Route path="/control-pagos" element={<Sprint1PagosPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>

      {/* Global Deluxe Lightbox Overlay Modal */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex flex-col justify-center items-center p-4 md:p-8 cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Top Panel - Absolute positioned */}
          <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none z-10">
            <div className="text-white space-y-0.5 pointer-events-auto">
              <span className="text-[9px] font-bold text-white bg-[#004A99] px-2.5 py-1 rounded uppercase tracking-widest font-mono">
                Vista Ampliada
              </span>
              {lightbox.alt && (
                <p className="text-xs font-semibold tracking-wide text-slate-200 mt-2 uppercase font-mono bg-slate-950/40 px-2 py-1 rounded block w-max">
                  {lightbox.alt}
                </p>
              )}
            </div>
            <button 
              onClick={closeLightbox}
              className="pointer-events-auto p-2.5 bg-white/10 hover:bg-white/25 active:scale-95 text-white rounded-full transition-all duration-200 outline-none hover:shadow-lg backdrop-blur-sm border border-white/10"
              title="Cerrar (Esc)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main expanded image container */}
          <div 
            className="relative max-w-full max-h-[85vh] bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()} // Guard click inside
          >
            <img 
              src={lightbox.src} 
              alt={lightbox.alt || "Imagen expandida"} 
              className="max-w-full max-h-[85vh] object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtitle / Tip footer */}
          <div className="absolute bottom-6 text-[10px] text-slate-400 font-mono tracking-widest uppercase bg-slate-950/65 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            Haga clic en cualquier lado o presione Cerrar para regresar
          </div>
        </div>
      )}
    </LightboxContext.Provider>
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
