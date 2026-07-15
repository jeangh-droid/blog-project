import { motion } from 'motion/react';
import { 
  DollarSign, Eye, Folder
} from 'lucide-react';

export default function CostosPage() {
  return (
    <main className="max-w-6xl mx-auto py-32 px-6 space-y-16">
      {/* Cabecera */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-[10px] font-bold uppercase tracking-widest text-emerald-800">
          <DollarSign size={12} /> Gestión de los Costos
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Línea Base de Costos
        </h1>
        <p className="text-sm text-slate-500 font-light max-w-3xl leading-relaxed">
          Procesos de estimación de costos ascendente (bottom-up), determinación del presupuesto y representación de la Curva S para el proyecto MTDRIVING, alineado con las buenas prácticas del PMBOK.
        </p>
      </div>

      {/* Visualización del PDF de Costos */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="space-y-6 pt-8"
      >
        <div className="bg-slate-900 text-white rounded-lg p-8 space-y-6 flex flex-col md:flex-row justify-between items-center gap-8 shadow-md border border-slate-800">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-[9px] font-bold uppercase tracking-widest bg-emerald-600/80 text-white px-2.5 py-1 rounded font-mono">
              Línea Base de Costos (Documento)
            </span>
            <h3 className="text-lg font-bold">Documento PDF Completo de Costos y Curva S</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Descargue o visualice el documento original en formato PDF que detalla la estimación de costos, la Curva S y las fórmulas empleadas para el cálculo del presupuesto.
            </p>
          </div>
          <div className="flex flex-col gap-3">
              <a
                href="/Linea_Base_de_Costos_MTDRIVING.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-4 rounded shadow-md hover:shadow-lg transition-all shrink-0 font-mono"
              >
                <Folder size={14} /> Descargar PDF
              </a>
          </div>
        </div>

        {/* Inline PDF Viewer */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden h-[800px] flex flex-col">
           <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
             <Eye size={16} className="text-[#004A99]" />
             <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Visualizador de Documento de Costos</h3>
           </div>
           <div className="flex-1 w-full bg-slate-100/50">
             <iframe 
               src="/Linea_Base_de_Costos_MTDRIVING.pdf#toolbar=0" 
               title="Línea Base de Costos"
               className="w-full h-full border-none"
             />
           </div>
        </div>
      </motion.section>
    </main>
  );
}