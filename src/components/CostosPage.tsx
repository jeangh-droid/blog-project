import { motion } from 'motion/react';
import { 
  DollarSign, TrendingUp, Layers, Calculator, Info, Wallet
} from 'lucide-react';

const COST_DATA = {
  supuestos: [
    { rol: "PM / Analista", sueldo: 5000, dia: 227.27, hora: 28.41 },
    { rol: "Desarrollador", sueldo: 4000, dia: 181.82, hora: 22.73 },
    { rol: "QA", sueldo: 3300, dia: 150.00, hora: 18.75 }
  ],
  estimacion: [
    { sprint: "S1", name: "Preparación", pm: 6, dev: 11, qa: 1, costo: 3513.64 },
    { sprint: "S2", name: "Módulo Alumnos", pm: 4, dev: 12, qa: 3, costo: 3540.91 },
    { sprint: "S3", name: "Módulo Clases", pm: 4, dev: 14, qa: 2, costo: 3754.55 },
    { sprint: "S4", name: "Comunicaciones", pm: 3, dev: 14, qa: 3, costo: 3677.27 },
    { sprint: "S5", name: "Módulo Financiero", pm: 4, dev: 13, qa: 3, costo: 3722.73 },
    { sprint: "S6", name: "Indicadores", pm: 4, dev: 13, qa: 3, costo: 3722.73 },
    { sprint: "S7", name: "Admin y Seguridad", pm: 5, dev: 12, qa: 3, costo: 3768.18 },
    { sprint: "S8", name: "BD e Integración", pm: 3, dev: 15, qa: 3, costo: 3859.09 },
    { sprint: "S9", name: "Implementación Piloto", pm: 3, dev: 16, qa: 1, costo: 3740.91 },
    { sprint: "S10", name: "Validación Operativa", pm: 7, dev: 5, qa: 8, costo: 3700.00 },
    { sprint: "S11", name: "Despliegue", pm: 6, dev: 13, qa: 1, costo: 3877.27 },
    { sprint: "S12", name: "Cierre", pm: 14, dev: 3, qa: 1, costo: 3877.27 }
  ],
  servicios: [
    { concepto: "Infraestructura cloud (Cloud Run + Cloud SQL)", mes: 150, meses: 9, total: 1350 },
    { concepto: "WhatsApp Business API (proveedor BSP)", mes: 120, meses: 9, total: 1080 },
    { concepto: "Licencias / herramientas (GitHub, gestión)", mes: 50, meses: 9, total: 450 },
    { concepto: "Dominio web + SSL (pago anual)", mes: 120, meses: 1, total: 120 },
    { concepto: "Materiales y útiles (capacitación, impresiones)", mes: 300, meses: 1, total: 300 },
    { concepto: "Movilidad y visitas a la empresa (piloto)", mes: 500, meses: 1, total: 500 },
    { concepto: "Costos indirectos (internet, luz, administración)", mes: 200, meses: 9, total: 1800 }
  ],
  lineaBase: [
    { concepto: "Mano de obra", monto: 44754.55, formula: "= total estimación bottom-up", type: "item" },
    { concepto: "Servicios e infraestructura", monto: 3000.00, formula: "= subtotal servicios", type: "item" },
    { concepto: "Materiales y movilidad", monto: 800.00, formula: "= subtotal materiales", type: "item" },
    { concepto: "Costos indirectos", monto: 1800.00, formula: "= subtotal indirectos", type: "item" },
    { concepto: "COSTO DEL EDT", monto: 50354.55, formula: "Suma agregada de componentes", type: "subtotal" },
    { concepto: "Reserva de Contingencia (RC) 10%", monto: 5035.45, formula: "= 10% × Costo del EDT (Riesgos identificados)", type: "reserve" },
    { concepto: "LÍNEA BASE DE COSTOS", monto: 55390.00, formula: "= Costo del EDT + RC", type: "baseline" },
    { concepto: "Reserva de Gestión (RG) 5%", monto: 2769.50, formula: "= 5% × Línea Base (Riesgos no identificados)", type: "reserve" },
    { concepto: "PRESUPUESTO DEL PROYECTO", monto: 58159.50, formula: "= Línea Base + RG", type: "total" }
  ],
  curvaS: [
    { sprint: "S1", periodo: 3980.3, acumulado: 3980.3 }, 
    { sprint: "S2", periodo: 4007.58, acumulado: 7987.88 }, 
    { sprint: "S3", periodo: 4221.21, acumulado: 12209.09 }, 
    { sprint: "S4", periodo: 4143.94, acumulado: 16353.03 }, 
    { sprint: "S5", periodo: 4189.39, acumulado: 20542.42 }, 
    { sprint: "S6", periodo: 4189.39, acumulado: 24731.82 }, 
    { sprint: "S7", periodo: 4234.85, acumulado: 28966.67 }, 
    { sprint: "S8", periodo: 4325.76, acumulado: 33292.42 }, 
    { sprint: "S9", periodo: 4207.58, acumulado: 37500.0 }, 
    { sprint: "S10", periodo: 4166.67, acumulado: 41666.67 }, 
    { sprint: "S11", periodo: 4343.94, acumulado: 46010.61 }, 
    { sprint: "S12", periodo: 4343.94, acumulado: 50354.55 }
  ]
};

const formatCurrency = (val: number) => `S/ ${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// --- Componente de Gráfico Nativo en SVG (Curva S) ---
const SCurveChart = ({ data }: { data: typeof COST_DATA.curvaS }) => {
  const width = 900;
  const height = 400;
  const padX = 60;
  const padY = 40;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;
  
  const maxAcumulado = 60000; // Límite superior eje Y (Acumulado)
  const maxPeriodo = 10000;   // Límite para las barras (Periodo) para que no tapen la línea

  const getX = (i: number) => padX + i * (innerW / (data.length - 1));
  const getYAcum = (val: number) => padY + innerH - (val / maxAcumulado) * innerH;

  const linePath = data.map((d, i) => `${getX(i)},${getYAcum(d.acumulado)}`).join(' ');

  return (
    <div className="w-full overflow-x-auto bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[700px] h-auto font-sans">
        {/* Líneas horizontales del Grid */}
        {[0, 1, 2, 3, 4, 5].map(tick => {
          const y = padY + innerH - (tick / 5) * innerH;
          return (
            <g key={tick}>
              <line x1={padX} y1={y} x2={width - padX + 20} y2={y} stroke="#e2e8f0" strokeDasharray="4 4" />
              <text x={padX - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#64748b" fontWeight="bold" fontFamily="monospace">
                S/ {((tick * maxAcumulado) / 5).toLocaleString()}
              </text>
            </g>
          )
        })}

        {/* Barras de costo por período */}
        {data.map((d, i) => {
          const x = getX(i);
          const barH = (d.periodo / maxPeriodo) * innerH;
          const y = padY + innerH - barH;
          return (
            <g key={`bar-${i}`}>
              <rect x={x - 14} y={y} width="28" height={barH} fill="#e0f2fe" rx="3" className="hover:fill-[#bae6fd] transition-colors" />
              <text x={x} y={padY + innerH + 20} textAnchor="middle" fontSize="10" fill="#475569" fontWeight="bold" fontFamily="monospace">
                {d.sprint}
              </text>
            </g>
          );
        })}

        {/* Línea Principal de Curva S */}
        <polyline points={linePath} fill="none" stroke="#004A99" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Puntos y Etiquetas de Acumulado */}
        {data.map((d, i) => {
          const x = getX(i);
          const y = getYAcum(d.acumulado);
          return (
            <g key={`dot-${i}`}>
              <circle cx={x} cy={y} r="5" fill="#ffffff" stroke="#004A99" strokeWidth="2.5" />
              <text x={x} y={y - 12} textAnchor="middle" fontSize="9" fill="#004A99" fontWeight="bold" fontFamily="monospace">
                {Math.round(d.acumulado).toLocaleString()}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Leyenda del gráfico */}
      <div className="flex justify-center gap-8 mt-6 text-xs border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#e0f2fe] rounded-sm"></span>
          <span className="text-slate-600 font-medium">Costo por Periodo (Sprint)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-1 bg-[#004A99] relative flex items-center justify-center">
            <span className="w-3 h-3 bg-white border-2 border-[#004A99] rounded-full absolute"></span>
          </span>
          <span className="text-slate-600 font-medium">Costo Acumulado (Curva S)</span>
        </div>
      </div>
    </div>
  );
}

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

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Tabla 1: Supuestos y Tarifas */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-4 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <Calculator size={16} className="text-[#004A99]" />
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">1. Supuestos y Tarifas</h3>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex gap-4 text-[10px] font-mono font-bold text-slate-500 bg-slate-100 p-2 rounded">
              <span>DÍAS / MES: <strong className="text-slate-800">22</strong></span>
              <span>HORAS / DÍA: <strong className="text-slate-800">8</strong></span>
            </div>
            <table className="w-full text-left text-xs">
              <thead className="text-[9px] text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="pb-2">Rol</th>
                  <th className="pb-2 text-right">Tarifa/Día</th>
                  <th className="pb-2 text-right">Tarifa/Hr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {COST_DATA.supuestos.map((s, i) => (
                  <tr key={i}>
                    <td className="py-2.5 font-bold text-slate-700">{s.rol}</td>
                    <td className="py-2.5 text-right font-mono">{formatCurrency(s.dia)}</td>
                    <td className="py-2.5 text-right font-mono text-slate-500">{formatCurrency(s.hora)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Tabla 2: Estimación Bottom-up */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="lg:col-span-8 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <Layers size={16} className="text-[#004A99]" />
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">2. Estimación de Mano de Obra (Bottom-up)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[9px] text-slate-400 uppercase tracking-widest border-b border-slate-200 font-mono">
                <tr>
                  <th className="px-4 py-3">Sprint / Fase</th>
                  <th className="px-4 py-3 text-center">PM (días)</th>
                  <th className="px-4 py-3 text-center">DEV (días)</th>
                  <th className="px-4 py-3 text-center">QA (días)</th>
                  <th className="px-4 py-3 text-right">Costo MO (S/)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COST_DATA.estimacion.map((est, i) => (
                  <tr key={i} className="hover:bg-slate-50/50">
                    <td className="px-4 py-2.5">
                      <span className="font-bold text-[#004A99] font-mono mr-2">{est.sprint}</span>
                      <span className="text-slate-700">{est.name}</span>
                    </td>
                    <td className="px-4 py-2.5 text-center font-mono">{est.pm}</td>
                    <td className="px-4 py-2.5 text-center font-mono">{est.dev}</td>
                    <td className="px-4 py-2.5 text-center font-mono">{est.qa}</td>
                    <td className="px-4 py-2.5 text-right font-mono font-bold text-slate-600">{formatCurrency(est.costo)}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-bold border-t-2 border-slate-200">
                  <td className="px-4 py-3 text-slate-800 uppercase text-[10px] tracking-widest">TOTAL MANO DE OBRA</td>
                  <td className="px-4 py-3 text-center font-mono">63</td>
                  <td className="px-4 py-3 text-center font-mono">141</td>
                  <td className="px-4 py-3 text-center font-mono">32</td>
                  <td className="px-4 py-3 text-right font-mono text-[#004A99]">S/ 44,754.55</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Tabla 3: Servicios e Indirectos */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
            <Info size={16} className="text-[#004A99]" />
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">3. Servicios, Materiales e Indirectos</h3>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[9px] text-slate-400 uppercase tracking-widest border-b border-slate-200 font-mono">
              <tr>
                <th className="px-4 py-3">Concepto</th>
                <th className="px-4 py-3 text-right">Meses</th>
                <th className="px-4 py-3 text-right">Total (S/)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COST_DATA.servicios.map((srv, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-slate-700 font-light">{srv.concepto}</td>
                  <td className="px-4 py-3 text-right font-mono text-slate-400">{srv.meses}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-600">{formatCurrency(srv.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Tabla 4: Línea Base y Presupuesto */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden text-white"
        >
          <div className="p-4 border-b border-slate-800 bg-slate-800/50 flex items-center gap-2">
            <Wallet size={16} className="text-emerald-400" />
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">4. Línea Base y Presupuesto</h3>
          </div>
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-slate-800">
              {COST_DATA.lineaBase.map((lb, i) => (
                <tr key={i} className={`
                  ${lb.type === 'subtotal' ? 'bg-slate-800 font-bold' : ''}
                  ${lb.type === 'baseline' ? 'bg-[#004A99] font-bold text-white' : ''}
                  ${lb.type === 'total' ? 'bg-emerald-600 font-extrabold text-white text-sm' : ''}
                  ${lb.type === 'reserve' ? 'text-slate-400 italic' : ''}
                  ${lb.type === 'item' ? 'text-slate-300' : ''}
                `}>
                  <td className="px-5 py-3.5">
                    <span className="block">{lb.concepto}</span>
                    {lb.type !== 'baseline' && lb.type !== 'total' && (
                      <span className="text-[9px] font-mono opacity-60 font-normal mt-0.5 block">{lb.formula}</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-right font-mono tracking-wide">
                    {formatCurrency(lb.monto)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>
      </div>

      {/* Gráfico: Curva S */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="space-y-6 pt-8"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center justify-center gap-3">
            <TrendingUp size={24} className="text-[#004A99]" />
            Curva S — Línea Base de Costos en el Tiempo
          </h2>
          <p className="text-xs text-slate-500 font-light max-w-2xl mx-auto">
            El gráfico detalla la acumulación del costo a través de los 12 sprints (Mano de obra + Prorrateo lineal de costos no laborales). 
            La línea azul representa la Línea Base de Costos oficial.
          </p>
        </div>
        
        {/* Renderizado de la Curva S en SVG puro */}
        <SCurveChart data={COST_DATA.curvaS} />

      </motion.section>
    </main>
  );
}