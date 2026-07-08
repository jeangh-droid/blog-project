import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, CheckCircle2, ChevronRight,
  Info, Folder, Calendar, Activity, Settings, ChevronDown, ChevronUp, Lock, Code, 
  Award, CheckCircle, AlertCircle, Check, ClipboardList, Clock
} from 'lucide-react';

export default function Sprint1PagosPage() {
  const [activeTab, setActiveTab] = useState<'plan' | 'requisitos' | 'enunciado' | 'edt' | 'diccionario' | 'cronograma'>('plan');

  // Req table states
  const [reqSearch, setReqSearch] = useState('');
  const [reqFilter, setReqFilter] = useState('Todos');

  // WBS Tree Active Node
  const [activeWbsNode, setActiveWbsNode] = useState<string>('1.1.1');

  // User Stories status toggles
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  // Cronograma states
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [roleFilter, setRoleFilter] = useState<string>('Todos');
  const [selectedActivity, setSelectedActivity] = useState<number>(1);
  const [cronogramaView, setCronogramaView] = useState<'interactive' | 'matrix'>('interactive');

  const cronogramaActivities = [
    { id: 1, name: 'Inicio del Sprint', responsible: 'PM', days: [1], description: 'Arranque oficial de las actividades del proyecto y definición de canales de comunicación.' },
    { id: 2, name: 'Reunión Kickoff', responsible: 'PM + Cliente', days: [1], description: 'Alineación de objetivos generales y expectativas clave con el dueño del negocio.' },
    { id: 3, name: 'Levantamiento de requisitos', responsible: 'Analista', days: [1, 2, 3], description: 'Entrevistas y recolección detallada de necesidades operativas con el dueño y la prima.' },
    { id: 4, name: 'Historias de Usuario', responsible: 'Analista', days: [3], description: 'Traducción de los requisitos levantados a Historias de Usuario formalizadas.' },
    { id: 5, name: 'Mockups', responsible: 'UX/UI', days: [4, 5], description: 'Diseño visual y de experiencia de usuario para los formularios y reportes del sistema.' },
    { id: 6, name: 'Diseño Base de Datos', responsible: 'Desarrollador', days: [5, 6], description: 'Modelado y estructuración de los campos de datos y relaciones dentro de Google Sheets.' },
    { id: 7, name: 'Desarrollo Registro Alumno', responsible: 'Desarrollador', days: [6, 7, 8], description: 'Configuración técnica de formularios de registro y conexión inicial de datos.' },
    { id: 8, name: 'Desarrollo Pago Alumno', responsible: 'Desarrollador', days: [8, 9], description: 'Implementación del control de pagos de alumnos y conciliación automática con Yape.' },
    { id: 9, name: 'Integración', responsible: 'Desarrollador', days: [9, 10], description: 'Enlace definitivo de componentes, flujos de almacenamiento en Drive y notificaciones.' },
    { id: 10, name: 'Pruebas funcionales', responsible: 'Analista + Cliente', days: [10, 11], description: 'Pruebas integrales de extremo a extremo con registros reales y validación del flujo.' },
    { id: 11, name: 'Sprint Review', responsible: 'Equipo', days: [11], description: 'Cierre del ciclo de trabajo, demostración del sistema funcionando, entrega de manuales de uso y retrospectiva del proyecto.' }
  ];

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case 'PM': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'PM + Cliente': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Analista': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'UX/UI': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Desarrollador': return 'bg-violet-100 text-violet-800 border-violet-200';
      case 'Analista + Cliente': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Equipo': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  // Requirement data from PDF
  const requirements = [
    { code: 'RQ-01', text: 'Registrar cada pago realizado por Yape, incluyendo alumno, monto, fecha y foto del comprobante.', source: 'Entrevista al dueño' },
    { code: 'RQ-02', text: 'Poder identificar de forma rápida qué alumnos ya pagaron y cuáles están pendientes.', source: 'Entrevista al dueño' },
    { code: 'RQ-03', text: 'Obtener un total de ingresos por semana y por mes sin cálculos manuales.', source: 'Entrevista al dueño' },
    { code: 'RQ-04', text: 'Que la prima (contabilidad) pueda revisar y validar los pagos registrados.', source: 'Entrevista al dueño' },
    { code: 'RQ-05', text: 'Guardar los comprobantes de pago de forma ordenada y fácil de ubicar.', source: 'Revisión documental' },
    { code: 'RQ-06', text: 'Que el registro de pagos no dependa de buscar mensajes antiguos en WhatsApp.', source: 'Registro de incidentes del negocio' },
    { code: 'RQ-07', text: 'Utilizar únicamente herramientas gratuitas, sin costo de licencia.', source: 'Acta de constitución del proyecto' },
  ];

  // User stories data
  const userStories = [
    {
      id: 'HU-01',
      role: 'Como dueño del negocio',
      want: 'quiero registrar cada pago recibido por Yape junto con la foto del comprobante',
      soThat: 'para tener evidencia confiable de todos los ingresos.',
      acceptance: 'El formulario exige foto de comprobante antes de enviar el registro; el pago queda guardado en la hoja de control.'
    },
    {
      id: 'HU-02',
      role: 'Como prima encargada de contabilidad',
      want: 'quiero ver el total de pagos por alumno y por mes de forma automática',
      soThat: 'para conciliar los ingresos reales del negocio.',
      acceptance: 'Los totales se recalculan solos al agregarse un nuevo pago, sin fórmulas manuales.'
    },
    {
      id: 'HU-03',
      role: 'Como dueño',
      want: 'quiero identificar rápidamente qué alumnos no han registrado su pago',
      soThat: 'para dar seguimiento oportuno al cobro.',
      acceptance: 'La hoja distingue visualmente los pagos registrados de los pendientes.'
    },
    {
      id: 'HU-04',
      role: 'Como prima',
      want: 'quiero generar un reporte mensual de caja',
      soThat: 'para presentar al dueño un resumen claro de los ingresos del mes.',
      acceptance: 'El reporte se genera a partir de la hoja de cálculo y muestra el total mensual consolidado.'
    },
    {
      id: 'HU-05',
      role: 'Como dueño',
      want: 'quiero que los comprobantes de pago estén organizados por fecha y alumno en Drive',
      soThat: 'para ubicarlos fácilmente ante cualquier reclamo.',
      acceptance: 'Existe una carpeta por mes con archivos nombrados de forma estándar (fecha_alumno).'
    },
    {
      id: 'HU-06',
      role: 'Como usuario del sistema (dueño o prima)',
      want: 'quiero recibir una capacitación y un manual breve',
      soThat: 'para poder operar el sistema sin apoyo externo.',
      acceptance: 'Tras la capacitación, el usuario registra un pago de prueba sin ayuda del equipo del proyecto.'
    }
  ];

  // EDT WBS Dictionary Details
  const wbsDictionary: Record<string, {
    title: string;
    level: string;
    responsible: string;
    description: string;
    deliverables: string[];
    acceptance: string;
    evidence: string[];
  }> = {
    '1.0': {
      title: "Sistema de Gestión Operativa MTDRIVING",
      level: "Nivel 1 · Proyecto (raíz)",
      responsible: "Equipo del Proyecto",
      description: "Solución digital para optimizar la gestión académica y operativa de la escuela de manejo mediante la centralización de información y la automatización de procesos.",
      deliverables: [
        "Prototipos navegables",
        "Código fuente (MVP)",
        "Base de datos",
        "Documento de arquitectura",
        "Informe final"
      ],
      acceptance: "Solución validada por el propietario del negocio y alineada con los requisitos aprobados.",
      evidence: [
        "EDT/WBS corregida (edt_mejorado.png)",
        "Blog de diagnóstico y propuesta — UNTELS, Ingeniería de Sistemas"
      ]
    },
    '1.1.1': {
      title: "Planificación",
      level: "Nivel 3 · Componente de 1.1",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Definición del acta de constitución, alcance, cronograma, presupuesto, comunicaciones y estrategia general del proyecto académico.",
      deliverables: [
        "Acta de constitución del proyecto",
        "Plan de gestión del alcance",
        "Cronograma preliminar de hitos"
      ],
      acceptance: "Documentos de planificación revisados y aprobados por el docente asesor.",
      evidence: [
        "Sección “Entradas → 4.1 Acta de constitución” del blog (patrocinador: dueño; plazo: 4 meses)",
        "Documentos de negocio y caso de negocio registrados en el sitio"
      ]
    },
    '1.1.2': {
      title: "Seguimiento y Control",
      level: "Nivel 3 · Componente de 1.1",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Monitoreo del avance, control de cambios y registro de incidencias durante el ciclo de vida del proyecto.",
      deliverables: [
        "Informes de avance",
        "Registro de cambios",
        "Registro de incidencias"
      ],
      acceptance: "Evidencia de seguimiento documentada y trazable.",
      evidence: [
        "Registro de cambios: “Cambiado a digital en Fase 1” (Entradas → 4.4)",
        "Registro de incidentes: “Cruces de horarios frecuentes” (Entradas → 4.4)"
      ]
    },
    '1.1.3': {
      title: "Gestión de Riesgos",
      level: "Nivel 3 · Componente de 1.1",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Identificación, análisis y planes de respuesta a los riesgos operativos y del proyecto.",
      deliverables: [
        "Matriz de riesgos (probabilidad × impacto)",
        "Plan de respuesta a riesgos"
      ],
      acceptance: "Riesgos priorizados formalmente con estrategia de respuesta asignada.",
      evidence: [
        "Riesgos identificados en el diagnóstico: alta dependencia del dueño, conflicto con el entorno físico (circuito Touring de Conchán) y resistencia al cambio del personal",
        "Hallazgos clave de la entrevista (Herramientas)"
      ]
    },
    '1.2.1': {
      title: "Levantamiento de Requisitos",
      level: "Nivel 3 · Componente de 1.2",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Recopilación de necesidades operativas, financieras y académicas mediante entrevista semiestructurada, observación directa, análisis documental y benchmarking.",
      deliverables: [
        "Documento de requisitos",
        "Registro de interesados",
        "Guion de entrevista"
      ],
      acceptance: "Requisitos validados por el cliente y respaldados con evidencia primaria.",
      evidence: [
        "Entrevista semiestructurada de 33 min vía Google Meet con el dueño (21 preguntas: operativas, financieras, técnicas y externas)",
        "Capturas de WhatsApp en /recoleccion (contacto inicial, consultas, seguimiento, horarios)",
        "Presencia digital: TikTok @mtdrivingschool (22.8K seguidores)"
      ]
    },
    '1.2.2': {
      title: "Design Thinking",
      level: "Nivel 3 · Componente de 1.2",
      responsible: "Diseñador UX/UI / Arquitecto — Leonardo Ávila",
      description: "Aplicación secuencial de las cinco etapas de Design Thinking (empatizar, definir, idear, prototipar, evaluar) centradas en el usuario final.",
      deliverables: [
        "Mapa de empatía",
        "Buyer Persona",
        "Diagrama de afinidad",
        "Técnica SCAMPER",
        "Storyboard de la solución"
      ],
      acceptance: "Herramientas de empatía y definición completadas y documentadas.",
      evidence: [
        "Evidencias gráficas de las 5 fases en /public/dtk (fase1 a fase5)",
        "Sección “Design Thinking” del blog con técnicas y herramientas por etapa"
      ]
    },
    '1.2.3': {
      title: "Declaración del Alcance",
      level: "Nivel 3 · Componente de 1.2",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Definición formal de lo que la solución incluye y excluye expresamente, con supuestos y restricciones.",
      deliverables: [
        "Declaración del alcance",
        "Lista de inclusiones y exclusiones"
      ],
      acceptance: "Declaración del alcance aprobada por las partes interesadas.",
      evidence: [
        "Sección “Alcance → Declaración de Alcance” del blog",
        "Alternativa seleccionada en el análisis BPM (Solución Híbrida Modular)"
      ]
    },
    '1.2.4': {
      title: "Especificación de Requisitos",
      level: "Nivel 3 · Componente de 1.2",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Especificación detallada de los requisitos funcionales y no funcionales, con su matriz de trazabilidad hacia objetivos e interesados.",
      deliverables: [
        "Documento de requisitos del sistema (32 RF + 12 RNF)",
        "Matriz de trazabilidad de requisitos"
      ],
      acceptance: "Requisitos trazables, consistentes y con valor de negocio.",
      evidence: [
        "Infografía recopilacion_requisitos.png",
        "Matriz de trazabilidad interactiva del blog (RF-01…RF-32 / RNF-01…RNF-12)"
      ]
    },
    '1.3.1': {
      title: "Arquitectura",
      level: "Nivel 3 · Componente de 1.3",
      responsible: "Diseñador UX/UI / Arquitecto — Leonardo Ávila",
      description: "Diseño de la estructura general de la solución en capas de presentación, lógica de negocio y persistencia, y definición del stack tecnológico.",
      deliverables: [
        "Diagrama de arquitectura por capas",
        "Definición de tecnologías"
      ],
      acceptance: "Arquitectura validada por el equipo de ingeniería y coherente con los RNF de modularidad.",
      evidence: [
        "Requisito RNF-11 (arquitectura modular) de la matriz de trazabilidad",
        "Diagrama de arquitectura del sistema (entregable a elaborar)"
      ]
    },
    '1.3.2': {
      title: "Diseño de Base de Datos",
      level: "Nivel 3 · Componente de 1.3",
      responsible: "Desarrollador Backend / BD — Carlos Curo",
      description: "Diseño lógico y conceptual de la base de datos que soporta alumnos, clases, pagos, comunicaciones y auditoría.",
      deliverables: [
        "Modelo entidad-relación (MER)",
        "Diccionario de datos"
      ],
      acceptance: "Modelo normalizado, íntegro y validado con los casos de negocio.",
      evidence: [
        "Modelo entidad-relación (entregable a elaborar)",
        "Necesidades de datos derivadas de la entrevista (alumnos, pagos por Yape, horarios)"
      ]
    },
    '1.3.3': {
      title: "Casos de Uso",
      level: "Nivel 3 · Componente de 1.3",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Definición del flujo de interacciones entre los actores (administrador, instructor, alumno) y el sistema.",
      deliverables: [
        "Diagramas UML de casos de uso",
        "Especificaciones narrativas de casos de uso"
      ],
      acceptance: "Casos de uso completos, trazables y consistentas con los RF.",
      evidence: [
        "Flujos de interacción registrados en /recoleccion (flujo_interaccion.png)",
        "Diagramas de casos de uso (entregable a elaborar)"
      ]
    },
    '1.3.4': {
      title: "Prototipo (Mockups)",
      level: "Nivel 3 · Componente de 1.3",
      responsible: "Diseñador UX/UI / Arquitecto — Leonardo Ávila",
      description: "Diseño visual de alta fidelidad de las pantallas y flujos de navegación clave para su aprobación por el usuario.",
      deliverables: [
        "Mockups estáticos",
        "Prototipo interactivo navegable"
      ],
      acceptance: "Interfaces revisadas y aprobadas por el cliente.",
      evidence: [
        "Prototipo funcional “Control de Pagos” (Sprint 1) publicado en el blog",
        "Requisitos de usabilidad RNF-08 a RNF-10"
      ]
    },
    '1.4.1': {
      title: "Módulo de Alumnos",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Backend / BD — Carlos Curo",
      description: "Gestión unificada de matrículas, expedientes académicos e información de contacto de los estudiantes (CRUD).",
      deliverables: [
        "1.4.1.1 Registro de alumno",
        "1.4.1.2 Consulta de alumno",
        "1.4.1.3 Actualización de datos",
        "1.4.1.4 Historial académico"
      ],
      acceptance: "Operaciones CRUD sobre alumnos funcionando con validaciones correctas.",
      evidence: [
        "Requisitos RF-01 a RF-03 de la matriz de trazabilidad",
        "Evidencia del problema: “Gestión manual de alumnos” con registros aislados (árbol de problemas)"
      ]
    },
    '1.4.2': {
      title: "Módulo de Clases",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Frontend / Integración — Jean Piers Quispe",
      description: "Gestión académica: asignación de instructores y vehículos, programación y control de asistencia de clases prácticas.",
      deliverables: [
        "1.4.2.1 Programación de clases",
        "1.4.2.2 Asignación instructor/vehículo",
        "1.4.2.3 Registro de asistencia",
        "1.4.2.4 Reprogramar / cancelar"
      ],
      acceptance: "Gestión de clases operativa que previene sobreposiciones de horario.",
      evidence: [
        "Requisitos RF-04 a RF-10",
        "Incidencia registrada: “Cruces de horarios frecuentes” (Entradas → 4.4)",
        "Capturas consulta_horarios.png"
      ]
    },
    '1.4.3': {
      title: "Módulo de Comunicaciones",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Frontend / Integración — Jean Piers Quispe",
      description: "Automatización de la comunicación con el estudiante: notificaciones, integración con WhatsApp Business API y mensajería masiva.",
      deliverables: [
        "1.4.3.1 Notificaciones automáticas",
        "1.4.3.2 Integración WhatsApp",
        "1.4.3.3 Mensajería masiva",
        "1.4.3.4 Historial de mensajes"
      ],
      acceptance: "Envío automatizado y trazable de comunicaciones a los estudiantes.",
      evidence: [
        "Requisitos RF-11 a RF-16",
        "Causa directa “Comunicación dispersa” del árbol de problemas",
        "Capturas de WhatsApp en /recoleccion (conversaciones_clientes, atencion_clientes)"
      ]
    },
    '1.4.4': {
      title: "Módulo Financiero",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Backend / BD — Carlos Curo",
      description: "Registro y control de pagos, cuotas, reportes financieros y ajustes, reemplazando el cobro informal por Yape.",
      deliverables: [
        "1.4.4.1 Registro de pagos",
        "1.4.4.2 Control de cuotas",
        "1.4.4.3 Reportes financieros",
        "1.4.4.4 Ajustes y anulaciones"
      ],
      acceptance: "Registro financiero con trazabilidad completa e integridad de caja.",
      evidence: [
        "Prototipo funcional “Control de Pagos” (Sprint 1) — evidencia directa del módulo",
        "Requisitos RF-17 a RF-22",
        "Capturas de pagos por Yape y transferencias en /recoleccion (confirmacion_pago, transferencia_pago_circuito)"
      ]
    },
    '1.4.5': {
      title: "Módulo de Indicadores",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Frontend / Integración — Jean Piers Quispe",
      description: "Tablero de indicadores de gestión (KPIs) académicos y financieros, con exportación de reportes.",
      deliverables: [
        "1.4.5.1 Indicadores académicos",
        "1.4.5.2 Indicadores financieros",
        "1.4.5.3 Dashboard gerencial",
        "1.4.5.4 Exportar PDF / Excel"
      ],
      acceptance: "Dashboard con KPIs en tiempo real y exportación funcional.",
      evidence: [
        "Requisitos RF-23 a RF-28",
        "Causa directa “Ausencia de indicadores” del árbol de problemas",
        "Fin operativo “Disponibilidad de KPIs” del árbol de objetivos"
      ]
    },
    '1.4.6': {
      title: "Administración y Seguridad",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Backend / BD — Carlos Curo",
      description: "Gestión de usuarios, roles y permisos, auditoría de operaciones y parámetros generales del sistema.",
      deliverables: [
        "1.4.6.1 Gestión de usuarios",
        "1.4.6.2 Roles y permisos",
        "1.4.6.3 Auditoría de operaciones",
        "1.4.6.4 Parámetros del sistema"
      ],
      acceptance: "Acceso restringido por rol y toda operación crítica registrada en auditoría.",
      evidence: [
        "Requisitos RF-29 a RF-32 y RNF-01 a RNF-03 (seguridad)",
        "Riesgo de gobernanza: delegación de administración al hermano (entrevista)"
      ]
    },
    '1.4.7': {
      title: "Base de Datos e Integración",
      level: "Nivel 3 · Componente de 1.4",
      responsible: "Desarrollador Backend / BD — Carlos Curo / Desarrollador Frontend / Integración — Jean Piers Quispe",
      description: "Construcción física de la base de datos e integración de todos los módulos como un único sistema unificado (APIs internas) con respaldo.",
      deliverables: [
        "1.4.7.1 Implementación de tablas",
        "1.4.7.2 Integración de módulos (API)",
        "1.4.7.3 Respaldo y restauración"
      ],
      acceptance: "Persistencia con integridad referencial y flujo de información extremo a extremo probado.",
      evidence: [
        "Causa directa “Falta de integración operativa” del árbol de problemas",
        "Requisitos RNF-04, RNF-07 y RNF-12"
      ]
    },
    '1.5.1': {
      title: "Pruebas Funcionales",
      level: "Nivel 3 · Componente de 1.5",
      responsible: "Equipo del Proyecto",
      description: "Ejecución de pruebas para constatar que cada requisito funcional se comporta según la declaración de alcance.",
      deliverables: [
        "Casos de prueba redactados",
        "Resultados de pruebas documentados"
      ],
      acceptance: "Cumplimiento del 100% de los requisitos definidos en el alcance.",
      evidence: [
        "Matriz de casos de prueba vinculada a los RF (entregable a elaborar)",
        "Reporte de resultados de pruebas"
      ]
    },
    '1.5.2': {
      title: "Corrección de Errores",
      level: "Nivel 3 · Componente de 1.5",
      responsible: "Equipo del Proyecto",
      description: "Diagnóstico y resolución de defectos críticos descubiertos durante el aseguramiento de calidad.",
      deliverables: [
        "Parches aplicados",
        "Registro de incidencias resueltas"
      ],
      acceptance: "Errores críticos y de alto bloqueo completamente reparados.",
      evidence: [
        "Registro de bugs / incidencias (bug tracker)",
        "Historial de correcciones"
      ]
    },
    '1.5.3': {
      title: "Validación con el Cliente",
      level: "Nivel 3 · Componente de 1.5",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Demostración guiada del sistema con el dueño del negocio para obtener la firma de aceptación operacional.",
      deliverables: [
        "Acta de validación firmada",
        "Registro de feedback del cliente"
      ],
      acceptance: "Conformidad firmada del propietario del negocio.",
      evidence: [
        "Acta de validación firmada por el dueño (entregable a elaborar)",
        "Acuerdo de colaboración académica firmado (Entradas → 4.5)"
      ]
    },
    '1.6.1': {
      title: "Entrega del MVP",
      level: "Nivel 3 · Componente de 1.6",
      responsible: "Equipo del Proyecto",
      description: "Suministro del Producto Mínimo Viable funcional y entrega de accesos al cliente.",
      deliverables: [
        "MVP funcional desplegado en la nube",
        "Manuales de uso rápido"
      ],
      acceptance: "MVP operativo, presentado y transferido.",
      evidence: [
        "Prototipo “Control de Pagos” como primer incremento del MVP",
        "Blog de diagnóstico y propuesta publicado"
      ]
    },
    '1.6.2': {
      title: "Informe Final",
      level: "Nivel 3 · Componente de 1.6",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Consolidación del análisis, diagnóstico y planificación en un informe técnico de fin de curso.",
      deliverables: [
        "Documento oficial de informe final"
      ],
      acceptance: "Documento de informe final revisado y aprobado por el docente asesor.",
      evidence: [
        "Informe técnico consolidado (entregable a elaborar)",
        "Todos los artefactos del blog como anexos"
      ]
    },
    '1.6.3': {
      title: "Lecciones Aprendidas",
      level: "Nivel 3 · Componente de 1.6",
      responsible: "Equipo del Proyecto",
      description: "Retrospectiva del equipo para registrar éxitos, errores de planificación y mejoras para futuros proyectos.",
      deliverables: [
        "Documento de lecciones aprendidas"
      ],
      acceptance: "Documento archivado en los activos de procesos del equipo.",
      evidence: [
        "Acta de reunión retrospectiva (entregable a elaborar)"
      ]
    }
  };

  const filteredRequirements = requirements.filter(req => {
    const matchesSearch = req.text.toLowerCase().includes(reqSearch.toLowerCase()) || req.code.toLowerCase().includes(reqSearch.toLowerCase());
    const matchesFilter = reqFilter === 'Todos' || req.source === reqFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="max-w-6xl mx-auto py-32 px-6 space-y-16">
      {/* Top Header Section */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-widest text-[#004A99]">
          <Activity size={12} /> Gestión de Control de Pagos
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Planificación de Control de Pagos
        </h1>
        <p className="text-sm text-slate-500 font-light max-w-2xl leading-relaxed">
          Documentación técnica del primer ciclo de desarrollo centrado exclusivamente en el <strong className="text-slate-800">Control de Pagos</strong> de la Escuela de Manejo MTDRIVING, utilizando herramientas gratuitas de Google Workspace para lograr trazabilidad y efectividad inmediata sin costos de licencia.
        </p>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-px">
        {[
          { id: 'plan', label: '1. Plan de Alcance' },
          { id: 'requisitos', label: '2. Requisitos y HU' },
          { id: 'enunciado', label: '3. Enunciado de Alcance' },
          { id: 'edt', label: '4. EDT / WBS' },
          { id: 'diccionario', label: '5. Diccionario' },
          { id: 'cronograma', label: '6. Cronograma' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider border-b-2 transition-all duration-200 ${
              activeTab === tab.id 
                ? 'border-[#004A99] text-[#004A99] bg-white font-extrabold' 
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT RENDER */}
      <div className="pt-4">
        
        {/* TAB 1: Plan de Alcance */}
        {activeTab === 'plan' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Split Grid */}
            <div className="grid md:grid-cols-12 gap-8">
              {/* Introduction & Details */}
              <div className="md:col-span-8 space-y-6">
                <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-[#004A99] rounded-sm"></div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      1. Introducción
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Este documento establece cómo el equipo definirá, desarrollará, monitoreará, controlará y validará el alcance del proceso de <strong className="text-slate-800">Control de Pagos</strong>. El objetivo prioritario es asegurar que el trabajo se mantenga acotado exclusivamente a este proceso de negocio y no se extienda a otras áreas de la escuela de manejo que quedan expresamente fuera de alcance en esta etapa inicial.
                  </p>
                  <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-800 text-[11px] rounded-r space-y-1">
                    <strong className="font-bold">Fuera de Alcance:</strong>
                    <p className="font-light">Registro de alumnos, asignación de horarios, mantenimiento de vehículos o captación en redes sociales.</p>
                  </div>
                </div>

                <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-[#004A99] rounded-sm"></div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      Procesos de Gestión del Alcance
                    </h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#004A99] text-[10px] font-bold flex items-center justify-center">2</span>
                        Definición del Alcance
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        Definido a partir de la entrevista al dueño y la revisión minuciosa de los documentos de negocio (acta de constitución, registro de incidentes y requerimientos). Se delimitó el trabajo exclusivamente a Control de Pagos debido a su alto impacto operativo y baja complejidad técnica.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#004A99] text-[10px] font-bold flex items-center justify-center">3</span>
                        Elaboración y Aprobación de la EDT
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        Descomposición formal del proceso de Control de Pagos en paquetes de trabajo bien definidos (WBS). Cada paquete se valida con el Product Owner antes del desarrollo.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#004A99] text-[10px] font-bold flex items-center justify-center">4</span>
                        Mantenimiento de la Línea Base
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        Toda modificación a los entregables, exclusiones o criterios de aceptación definidos debe tramitarse como una Solicitud de Cambio formal. El Product Owner aprueba o rechaza.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-[#004A99] text-[10px] font-bold flex items-center justify-center">5</span>
                        Aceptación Formal
                      </h4>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        Cada entregable se valida contra los criterios de aceptación en la reunión de revisión, contando con la validación del dueño y el área contable (la prima).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Roles & Herramientas */}
              <div className="md:col-span-4 space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-lg shadow-sm space-y-4">
                  <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    6. Roles y Responsabilidades
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-[#004A99] pl-3 space-y-0.5">
                      <span className="text-[10px] font-bold text-[#004A99] uppercase block font-mono">Product Owner</span>
                      <p className="text-[11px] text-slate-300 font-light">
                        Dueño del negocio. Define prioridades, valida requisitos y aprueba los entregables y cambios de alcance.
                      </p>
                    </div>
                    <div className="border-l-2 border-slate-400 pl-3 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block font-mono">Equipo de Proyecto</span>
                      <p className="text-[11px] text-slate-300 font-light">
                        Levanta requisitos, elabora la EDT (WBS), configura, desarrolla y prueba las herramientas digitales.
                      </p>
                    </div>
                    <div className="border-l-2 border-slate-400 pl-3 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block font-mono">Prima (Contabilidad)</span>
                      <p className="text-[11px] text-slate-300 font-light">
                        Valida los requisitos y entregables directamente relacionados con el control financiero y conciliaciones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3">
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <Settings size={14} className="text-[#004A99]" /> 7. Herramientas de Gestión
                  </h4>
                  <ul className="space-y-2 text-[11px] text-slate-600 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span> Entrevistas y reuniones periódicas de alineación con el dueño y la prima.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span> Product Backlog / Pila del Proyecto para priorizar y controlar las historias de usuario.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span> Documento formal de solicitudes de cambio para mantener el rigor del alcance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Requisitos y HU */}
        {activeTab === 'requisitos' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Techniques & Requirements Table */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Techniques Card */}
              <div className="lg:col-span-4 bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4">
                <span className="text-[9px] font-bold uppercase bg-blue-50 text-[#004A99] px-2.5 py-1 rounded">
                  1. Técnicas de Recopilación Utilizadas
                </span>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Para acotar de forma certera el alcance, el equipo utilizó técnicas del estándar PMI para descubrir las necesidades operativas de la escuela de manejo en su proceso de Control de Pagos:
                </p>
                <div className="space-y-3 pt-2">
                  {[
                    { name: 'Entrevista al dueño', app: 'Conversación estructurada sobre flujos actuales de cobro con Yape y notificaciones por WhatsApp.', res: 'Requisitos iniciales de registro y conciliación.' },
                    { name: 'Revisión de documentos', app: 'Auditoría a chats históricos de WhatsApp y capturas de Yape enviadas por los alumnos.', res: 'Confirmación de la total ausencia de un registro ordenado.' },
                    { name: 'Observación directa', app: 'Acompañamiento en tiempo real sobre cómo se confirma y archiva manualmente un pago en el día a día.', res: 'Identificación exacta del punto donde se pierde trazabilidad.' },
                    { name: 'Tormenta de ideas', app: 'Sesiones colaborativas con el dueño y la prima contadora para plantear el flujo ideal.', res: 'Ideación de alertas de pago y reportes automáticos.' }
                  ].map((tech, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded text-[11px] space-y-1">
                      <span className="font-bold text-slate-800 block">{tech.name}</span>
                      <p className="text-slate-500 font-light">{tech.app}</p>
                      <p className="text-[#004A99] font-mono text-[10px] mt-1">↳ Resultado: {tech.res}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Stories */}
              <div className="lg:col-span-8 space-y-8">
                {/* 2. Requisitos Identificados */}
                <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <ClipboardList size={16} className="text-[#004A99]" /> 2. Requisitos Identificados
                    </h3>
                    
                    {/* Search and filter tools */}
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Buscar ID o Requisito..." 
                        value={reqSearch}
                        onChange={e => setReqSearch(e.target.value)}
                        className="text-[11px] border border-slate-200 px-2.5 py-1 rounded bg-slate-50 focus:outline-none focus:border-[#004A99] focus:bg-white transition-all w-44"
                      />
                      <select
                        value={reqFilter}
                        onChange={e => setReqFilter(e.target.value)}
                        className="text-[11px] border border-slate-200 px-2.5 py-1 rounded bg-slate-50 text-slate-600 font-medium"
                      >
                        <option value="Todos">Todas las Fuentes</option>
                        <option value="Entrevista al dueño">Entrevista al dueño</option>
                        <option value="Revisión documental">Revisión documental</option>
                        <option value="Registro de incidentes del negocio">Registro de incidentes</option>
                        <option value="Acta de constitución del proyecto">Acta de constitución</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200">
                          <th className="py-2.5 px-3 w-20">Código</th>
                          <th className="py-2.5 px-3">Requisito del Sistema</th>
                          <th className="py-2.5 px-3 w-48">Fuente de Levantamiento</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredRequirements.map(req => (
                          <tr key={req.code} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-3 px-3 font-mono font-bold text-[#004A99]">{req.code}</td>
                            <td className="py-3 px-3 text-slate-600 font-light">{req.text}</td>
                            <td className="py-3 px-3">
                              <span className="inline-block bg-slate-100 text-slate-500 font-mono text-[9px] px-2 py-0.5 rounded">
                                {req.source}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. Historias de Usuario */}
                <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Code size={16} className="text-[#004A99]" /> 3. Historias de Usuario (Product Backlog)
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Los requisitos identificados se tradujeron formalmente en Historias de Usuario para alimentar el desarrollo de software ágil:
                  </p>

                  <div className="space-y-3">
                    {userStories.map(story => {
                      const isOpen = expandedStory === story.id;
                      return (
                        <div 
                          key={story.id} 
                          className="border border-slate-200 rounded transition-all duration-200 bg-white"
                        >
                          <button
                            onClick={() => setExpandedStory(isOpen ? null : story.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-xs font-bold text-[#004A99] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                {story.id}
                              </span>
                              <span className="text-xs font-bold text-slate-800 font-sans">
                                {story.role}, {story.want.slice(0, 45)}...
                              </span>
                            </div>
                            {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                          </button>

                          {isOpen && (
                            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                                <div className="p-2.5 bg-white border border-slate-200 rounded">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Como</span>
                                  <p className="text-slate-700 font-medium font-sans">{story.role.replace("Como ", "")}</p>
                                </div>
                                <div className="p-2.5 bg-white border border-slate-200 rounded">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Quiero</span>
                                  <p className="text-slate-700 font-medium font-sans">{story.want}</p>
                                </div>
                                <div className="p-2.5 bg-white border border-slate-200 rounded">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Para</span>
                                  <p className="text-slate-700 font-medium font-sans">{story.soThat.replace("para ", "")}</p>
                                </div>
                              </div>

                              <div className="p-3 bg-blue-50 border-l-4 border-[#004A99] rounded-r space-y-1">
                                <span className="text-[10px] font-bold text-[#004A99] uppercase tracking-wider block font-sans">Criterios de Aceptación:</span>
                                <p className="text-xs text-slate-600 font-light font-sans">{story.acceptance}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Enunciado de Alcance */}
        {activeTab === 'enunciado' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Upper Objective Header */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#004A99]" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  1. Objetivo del Enunciado del Alcance
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Implementar un <strong className="text-slate-800">sistema digital básico de control de pagos</strong> para el proceso de cobros por Yape de la escuela de manejo, que permita registrar, verificar y conciliar los ingresos de forma totalmente trazable, utilizando exclusivamente herramientas gratuitas de Google (Forms, Sheets, Drive).
              </p>
            </div>

            {/* Split Deliverables & Acceptance */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Deliverables */}
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Folder size={16} className="text-[#004A99]" /> 3. Entregables Clave
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: 'Formulario digital de registro de pagos', desc: 'Formulario en Google Forms para registrar de forma instantánea fecha, alumno, monto y captura de foto del comprobante de Yape por cada transacción recibida.' },
                    { name: 'Hoja de control de pagos', desc: 'Google Sheets vinculada en tiempo real al formulario, con fórmulas automáticas de totalización mensual/semanal, filtros dinámicos por alumno y validación de conciliación.' },
                    { name: 'Repositorio de comprobantes', desc: 'Carpeta estructurada en Google Drive para almacenar de forma jerárquica y automatizada todas las fotos e imágenes cargadas desde el formulario.' },
                    { name: 'Reporte mensual de caja', desc: 'Reporte consolidado dinámico a partir de la hoja de cálculo, mostrando el total de ingresos por mes de manera visual y clara para la dirección.' },
                    { name: 'Manual de uso del sistema de pagos', desc: 'Documento técnico instructivo breve con guía paso a paso para la operación diaria de registro y revisión, dirigido al dueño y a la prima.' },
                    { name: 'Capacitación a usuarios clave', desc: 'Sesión presencial o remota guiada y de práctica directa para el uso óptimo y autónomo del formulario y la hoja de control.' }
                  ].map((ent, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded text-xs space-y-1">
                      <strong className="text-slate-800 block font-bold">{ent.name}</strong>
                      <p className="text-slate-500 font-light leading-relaxed">{ent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acceptance Criteria */}
              <div className="space-y-6">
                <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" /> 4. Criterios de Aceptación
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-600 font-light">
                    {[
                      'El 100% de los pagos registrados durante el período de prueba debe contar obligatoriamente con la foto del comprobante de Yape asociada.',
                      'La hoja de cálculo genera automáticamente el consolidado del total de ingresos por alumno, por semana y por mes, sin cálculos manuales del usuario.',
                      'El dueño y la prima son capaces de registrar, verificar y validar un pago de manera autónoma y sin soporte técnico externo tras concluir la capacitación.',
                      'El reporte mensual de caja es validado y aprobado formalmente por el dueño del negocio.',
                      'Cero registros de pagos duplicados o pérdida de comprobantes de pago durante el período de prueba de operaciones.'
                    ].map((crit, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <p>{crit}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restricciones */}
                <div className="bg-slate-900 text-white p-6 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2 text-slate-300">
                    <AlertCircle size={16} className="text-amber-500" /> 5. Restricciones del Proyecto
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-300 font-light">
                    <li>• El sistema debe construirse exclusivamente empleando las herramientas gratuitas de <strong className="text-white">Google Forms, Google Sheets y Google Drive</strong> (sin costos de licenciamiento).</li>
                    <li>• El proyecto debe desarrollarse estrictamente dentro del plazo general asignado del cronograma general (<strong className="text-white">4 meses de límite total</strong>).</li>
                    <li>• La operatividad del sistema depende directamente de la conectividad a internet activa y de los dispositivos móviles/PCs del dueño y de la prima.</li>
                    <li>• Toda decisión sobre aprobación o cambios del alcance reside en el dueño del negocio (Product Owner).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exclusiones en un Banner Grande de Advertencia */}
            <div className="bg-red-50/50 border border-red-200/60 rounded-lg p-6 space-y-3">
              <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider flex items-center gap-2">
                <Lock size={14} className="text-red-500" /> 6. Exclusiones Explícitas del Proyecto
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-light text-slate-600 leading-relaxed">
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span> No se trabajarán en este proyecto los procesos de registro de alumnos, programación de horarios, mantenimiento de vehículos ni captación/marketing por TikTok.
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span> No se desarrollará un sistema web a medida, aplicativo móvil nativo, ni base de datos externa externa a la suite de Google Workspace.
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span> No se implementará integración automática por API con Yape ni con ninguna otra billetera digital (registro manual por el usuario).
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="text-red-500 font-bold">•</span> No se implementará ninguna pasarela de pagos en línea (tipo culqi o stripe) ni facturación electrónica regulada por SUNAT.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: EDT / WBS */}
        {activeTab === 'edt' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            {/* Header / Intro */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="text-[#1B4E8C] shrink-0" size={20} />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Estructura de Desglose del Trabajo (EDT) Interactiva
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                A continuación se muestra la representación jerárquica de la EDT del proyecto <strong>Sistema de Gestión Operativa MTDRIVING</strong>. El esquema refleja la descomposición completa del proyecto en 6 fases principales y sus componentes de alcance asociados (Nivel 3). En la parte inferior, se desglosa el componente de desarrollo (1.4) en sus correspondientes paquetes de trabajo (Nivel 4).
              </p>
              <div className="p-3 bg-[#EBF3FC] border-l-4 border-[#1B4E8C] text-[#1B4E8C] rounded-r text-[11px] font-medium flex gap-2 items-center">
                <Info size={14} className="shrink-0" />
                <span><strong>Interacción Técnica:</strong> Haga clic en cualquier componente de Nivel 3 o paquete de Nivel 4 para consultar su ficha técnica detallada directamente en el <strong>Diccionario de la EDT</strong>.</span>
              </div>
            </div>

            {/* Legend Component */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 px-6 shadow-sm flex flex-wrap items-center justify-between text-xs gap-4 font-sans">
              <span className="font-mono font-bold uppercase text-[#1B4E8C] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded text-[9px] tracking-wider">
                LEYENDA
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#0B2545] rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 1 · Proyecto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#1D70B8] rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 2 · Fases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#E2F0D9] border-2 border-[#A8D08D] rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 3 · Componentes del alcance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#FFF2CC] border-2 border-[#F4B084] rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 4 · Paquetes de trabajo</span>
                </div>
              </div>
            </div>

            {/* Tree Section: Nivel 1, 2 & 3 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm overflow-hidden">
              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="min-w-[1100px] space-y-6 relative py-4">
                  
                  {/* Nivel 1: Proyecto (Raíz) */}
                  <div className="flex justify-center">
                    <div className="bg-[#0B2545] text-white p-4 rounded-lg shadow-md text-center w-[400px] border border-slate-700 relative">
                      <span className="text-[10px] font-mono block text-blue-200 font-bold uppercase tracking-widest mb-1">
                        1.0 · PROYECTO
                      </span>
                      <strong className="text-xs font-bold font-sans tracking-wide">
                        Sistema de Gestión Operativa MTDRIVING
                      </strong>
                    </div>
                  </div>

                  {/* Vertical branch line from level 1 */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-8 bg-slate-300"></div>
                  </div>

                  {/* Horizontal Connector line across 6 columns */}
                  <div className="relative">
                    <div className="absolute top-0 left-[8.33%] right-[8.33%] h-0.5 bg-slate-300"></div>
                  </div>

                  {/* 6 Columns Grid for level 2 and 3 */}
                  <div className="grid grid-cols-6 gap-3.5 pt-4">
                    
                    {/* Fase 1.1 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.1 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Gestión del Proyecto</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.1.1', title: 'Planificación' },
                          { code: '1.1.2', title: 'Seguimiento y Control' },
                          { code: '1.1.3', title: 'Gestión de Riesgos' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fase 1.2 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.2 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Análisis y Definición</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.2.1', title: 'Levantamiento de Requisitos' },
                          { code: '1.2.2', title: 'Design Thinking' },
                          { code: '1.2.3', title: 'Declaración del Alcance' },
                          { code: '1.2.4', title: 'Especificación de Requisitos' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fase 1.3 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.3 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Diseño de la Solución</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.3.1', title: 'Arquitectura' },
                          { code: '1.3.2', title: 'Diseño de Base de Datos' },
                          { code: '1.3.3', title: 'Casos de Uso' },
                          { code: '1.3.4', title: 'Prototipo (Mockups)' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fase 1.4 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.4 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Desarrollo del Sistema</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.4.1', title: 'Módulo de Alumnos' },
                          { code: '1.4.2', title: 'Módulo de Clases' },
                          { code: '1.4.3', title: 'Módulo de Comunicaciones' },
                          { code: '1.4.4', title: 'Módulo Financiero' },
                          { code: '1.4.5', title: 'Módulo de Indicadores' },
                          { code: '1.4.6', title: 'Administración y Seguridad' },
                          { code: '1.4.7', title: 'Base de Datos e Integración' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fase 1.5 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.5 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Validación y Pruebas</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.5.1', title: 'Pruebas Funcionales' },
                          { code: '1.5.2', title: 'Corrección de Errores' },
                          { code: '1.5.3', title: 'Validación con el Cliente' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fase 1.6 */}
                    <div className="space-y-4 relative">
                      {/* Vertical link connector */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-300"></div>
                      
                      {/* Level 2 Card */}
                      <div className="bg-[#1D70B8] text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center">
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.6 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Cierre del Proyecto</strong>
                      </div>

                      {/* Line down to level 3 */}
                      <div className="flex justify-center -my-2">
                        <div className="w-0.5 h-4 bg-slate-200"></div>
                      </div>

                      {/* Level 3 items */}
                      <div className="space-y-2">
                        {[
                          { code: '1.6.1', title: 'Entrega del MVP' },
                          { code: '1.6.2', title: 'Informe Final' },
                          { code: '1.6.3', title: 'Lecciones Aprendidas' }
                        ].map(item => (
                          <button
                            key={item.code}
                            onClick={() => {
                              setActiveWbsNode(item.code);
                              setActiveTab('diccionario');
                            }}
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                          >
                            <span className="text-[8px] font-mono font-bold text-emerald-800 block mb-0.5">{item.code}</span>
                            <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-emerald-950">{item.title}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Level 4: Work Packages Section (Orange grid) */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-6 overflow-hidden">
              <div className="space-y-1">
                <span className="text-[10px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-extrabold tracking-wider">
                  Nivel 4 — Paquetes de trabajo
                </span>
                <p className="text-[11px] text-slate-500 font-light pt-1">
                  Descomposición del componente <strong className="text-slate-700">1.4 Desarrollo del Sistema</strong> en paquetes de trabajo con codificación correlativa.
                </p>
              </div>

              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="min-w-[1200px] grid grid-cols-7 gap-3.5 pt-2">
                  
                  {/* Column 1: Módulo de Alumnos */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.1</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Módulo de Alumnos</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.1.1', title: 'Registro de alumno', parent: '1.4.1' },
                        { code: '1.4.1.2', title: 'Consulta de alumno', parent: '1.4.1' },
                        { code: '1.4.1.3', title: 'Actualización de datos', parent: '1.4.1' },
                        { code: '1.4.1.4', title: 'Historial académico', parent: '1.4.1' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Módulo de Clases */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.2</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Módulo de Clases</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.2.1', title: 'Programación de clases', parent: '1.4.2' },
                        { code: '1.4.2.2', title: 'Asignación instructor/vehículo', parent: '1.4.2' },
                        { code: '1.4.2.3', title: 'Registro de asistencia', parent: '1.4.2' },
                        { code: '1.4.2.4', title: 'Reprogramar / cancelar', parent: '1.4.2' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Comunicaciones */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.3</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Comunicaciones</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.3.1', title: 'Notificaciones automáticas', parent: '1.4.3' },
                        { code: '1.4.3.2', title: 'Integración WhatsApp', parent: '1.4.3' },
                        { code: '1.4.3.3', title: 'Mensajería masiva', parent: '1.4.3' },
                        { code: '1.4.3.4', title: 'Historial de mensajes', parent: '1.4.3' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Financiero */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.4</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Financiero</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.4.1', title: 'Registro de pagos', parent: '1.4.4' },
                        { code: '1.4.4.2', title: 'Control de cuotas', parent: '1.4.4' },
                        { code: '1.4.4.3', title: 'Reportes financieros', parent: '1.4.4' },
                        { code: '1.4.4.4', title: 'Ajustes y anulaciones', parent: '1.4.4' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 5: Indicadores */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.5</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Indicadores</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.5.1', title: 'Indicadores académicos', parent: '1.4.5' },
                        { code: '1.4.5.2', title: 'Indicadores financieros', parent: '1.4.5' },
                        { code: '1.4.5.3', title: 'Dashboard gerencial', parent: '1.4.5' },
                        { code: '1.4.5.4', title: 'Exportar PDF / Excel', parent: '1.4.5' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 6: Admin. y Seguridad */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.6</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Admin. y Seguridad</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.6.1', title: 'Gestión de usuarios', parent: '1.4.6' },
                        { code: '1.4.6.2', title: 'Roles y permisos', parent: '1.4.6' },
                        { code: '1.4.6.3', title: 'Auditoría de operaciones', parent: '1.4.6' },
                        { code: '1.4.6.4', title: 'Parámetros del sistema', parent: '1.4.6' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 7: BD e Integración */}
                  <div className="space-y-3">
                    <div className="bg-[#1D70B8] text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center">
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.7</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">BD e Integración</strong>
                    </div>
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-slate-200"></div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { code: '1.4.7.1', title: 'Implementación de tablas', parent: '1.4.7' },
                        { code: '1.4.7.2', title: 'Integración de módulos (API)', parent: '1.4.7' },
                        { code: '1.4.7.3', title: 'Respaldo y restauración', parent: '1.4.7' }
                      ].map(wp => (
                        <button
                          key={wp.code}
                          onClick={() => {
                            setActiveWbsNode(wp.parent);
                            setActiveTab('diccionario');
                          }}
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </motion.div>
        )}

        {/* TAB 5: Diccionario */}
        {activeTab === 'diccionario' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Overview */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Diccionario de la EDT - Control de Pagos
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Describe detalladamente cada elemento del nivel más bajo de la EDT del proceso de Control de Pagos, especificando descripción, entregable asociado, responsable y criterios de aceptación.
              </p>
            </div>

            {/* Interactive Package Details */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Selector list */}
              <div className="md:col-span-4 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                <div className="bg-slate-50 p-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Paquetes de Trabajo
                </div>
                {Object.keys(wbsDictionary).map((code) => (
                  <button
                    key={code}
                    onClick={() => setActiveWbsNode(code)}
                    className={`w-full text-left p-3 flex justify-between items-center transition-colors hover:bg-slate-50 ${
                      activeWbsNode === code ? 'bg-blue-50/70 border-l-4 border-l-[#004A99]' : ''
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] font-bold text-[#004A99] block">{code}</span>
                      <span className="text-xs font-semibold text-slate-800 line-clamp-1">{wbsDictionary[code].title}</span>
                    </div>
                    <ChevronRight size={14} className="text-slate-400" />
                  </button>
                ))}
              </div>

              {/* Right Details Panel (Replica Grid Layout) */}
              <div className="md:col-span-8 bg-white border border-slate-300 rounded-lg shadow-md overflow-hidden">
                {activeWbsNode && wbsDictionary[activeWbsNode] ? (
                  <div className="flex flex-col h-full font-sans">
                    {/* Dark Blue Grid Header (Excel/PDF style) */}
                    <div className="bg-[#1B4E8C] text-white p-4 font-bold tracking-wider text-sm border-b border-slate-300 flex justify-between items-center flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono bg-white/20 px-2.5 py-0.5 rounded text-xs font-extrabold">
                          {activeWbsNode}
                        </span>
                        <span className="uppercase">{wbsDictionary[activeWbsNode].title}</span>
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-blue-200 bg-[#0F3560] px-2 py-0.5 rounded uppercase font-bold">
                        FICHA TÉCNICA EDT
                      </span>
                    </div>

                    {/* Table-like Grid Layout */}
                    <div className="divide-y divide-slate-200 text-xs">
                      {/* Row 1: Fase / Nivel */}
                      <div className="grid grid-cols-12 md:grid-cols-10 min-h-[44px]">
                        <div className="col-span-4 md:col-span-3 bg-slate-50 p-3 border-r border-slate-200 font-bold text-slate-700 flex items-center">
                          Fase / Nivel
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3 text-slate-600 font-medium flex items-center">
                          {wbsDictionary[activeWbsNode].level}
                        </div>
                      </div>

                      {/* Row 2: Responsable */}
                      <div className="grid grid-cols-12 md:grid-cols-10 min-h-[44px]">
                        <div className="col-span-4 md:col-span-3 bg-slate-50 p-3 border-r border-slate-200 font-bold text-slate-700 flex items-center">
                          Responsable
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3 text-slate-900 font-bold flex items-center">
                          {wbsDictionary[activeWbsNode].responsible}
                        </div>
                      </div>

                      {/* Row 3: Descripción del paquete */}
                      <div className="grid grid-cols-12 md:grid-cols-10">
                        <div className="col-span-4 md:col-span-3 bg-slate-50 p-3.5 border-r border-slate-200 font-bold text-slate-700 flex items-center">
                          Descripción
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3.5 text-slate-600 leading-relaxed font-light">
                          {wbsDictionary[activeWbsNode].description}
                        </div>
                      </div>

                      {/* Row 4: Entregables */}
                      <div className="grid grid-cols-12 md:grid-cols-10">
                        <div className="col-span-4 md:col-span-3 bg-slate-50 p-3.5 border-r border-slate-200 font-bold text-slate-700 flex items-center">
                          Entregables
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3.5 text-slate-600 leading-relaxed">
                          <ul className="list-disc pl-4 space-y-1 font-light">
                            {wbsDictionary[activeWbsNode].deliverables.map((del, i) => (
                              <li key={i}>{del}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Row 5: Criterio de aceptación */}
                      <div className="grid grid-cols-12 md:grid-cols-10">
                        <div className="col-span-4 md:col-span-3 bg-slate-50 p-3.5 border-r border-slate-200 font-bold text-slate-700 flex items-center">
                          Criterio de aceptación
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3.5 text-slate-700 italic font-normal leading-relaxed">
                          {wbsDictionary[activeWbsNode].acceptance}
                        </div>
                      </div>

                      {/* Row 6: Evidencia (Highlighted Row in light gold/yellow bg) */}
                      <div className="grid grid-cols-12 md:grid-cols-10 bg-[#FFF2CC]/40 border-t border-slate-200">
                        <div className="col-span-4 md:col-span-3 bg-[#FFF2CC] p-3.5 border-r border-amber-200 font-bold text-amber-900 flex items-center">
                          Evidencia (Soporte Real)
                        </div>
                        <div className="col-span-8 md:col-span-7 p-3.5 text-amber-950 font-medium">
                          <ul className="list-disc pl-4 space-y-1.5 leading-relaxed font-sans">
                            {wbsDictionary[activeWbsNode].evidence.map((ev, i) => (
                              <li key={i}>{ev}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-400 space-y-2 font-sans">
                    <Layers size={32} className="mx-auto text-slate-300" />
                    <p className="text-xs font-light">Selecciona un paquete de trabajo del listado para inspeccionar su ficha técnica en formato Grid.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 6: Cronograma */}
        {activeTab === 'cronograma' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Overview & Statistics */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#004A99] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
                    6. CRONOGRAMA
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider font-sans">
                  Cronograma de Actividades (Gantt)
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed font-sans">
                  Secuencia temporal de <strong>11 días de ejecución</strong> planificada para el desarrollo y despliegue del proceso de <strong>Control de Pagos</strong> de la escuela de manejo, estableciendo responsabilidades y plazos diarios con precisión.
                </p>
              </div>
              
              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 shrink-0">
                <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-center font-sans">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">Duración</span>
                  <span className="text-lg font-black text-[#004A99] block font-mono">11 Días</span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-center font-sans">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">Actividades</span>
                  <span className="text-lg font-black text-slate-800 block font-mono">11 Tareas</span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-center font-sans">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">Hitos Clave</span>
                  <span className="text-lg font-black text-emerald-600 block font-mono">3 Hitos</span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-center font-sans">
                  <span className="text-[9px] font-bold text-slate-400 block uppercase">Modelo</span>
                  <span className="text-lg font-black text-purple-600 block font-sans">Vanguardia</span>
                </div>
              </div>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-px">
              <button
                onClick={() => setCronogramaView('interactive')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all duration-200 cursor-pointer ${
                  cronogramaView === 'interactive' 
                    ? 'border-[#004A99] text-[#004A99] font-extrabold bg-white' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Gantt Interactivo (Modo Aplicación)
              </button>
              <button
                onClick={() => setCronogramaView('matrix')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all duration-200 cursor-pointer ${
                  cronogramaView === 'matrix' 
                    ? 'border-[#004A99] text-[#004A99] font-extrabold bg-white' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Matriz Original (Fidelidad Excel)
              </button>
            </div>

            {cronogramaView === 'interactive' ? (
              <div className="space-y-6">
                {/* Filters and Simulator bar */}
                <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                  {/* Active day selector / simulator */}
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase block font-sans">Simulador de Avance Diario</span>
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin">
                      <button 
                        onClick={() => setSelectedDay(null)}
                        className={`px-2.5 py-1.5 rounded text-[10px] font-bold transition-all shrink-0 cursor-pointer font-sans ${
                          selectedDay === null 
                            ? 'bg-slate-800 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Ver Todo el Cronograma
                      </button>
                      {Array.from({ length: 11 }, (_, i) => i + 1).map(day => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`w-9 h-8 rounded text-xs font-mono font-bold transition-all shrink-0 flex flex-col items-center justify-center cursor-pointer ${
                            selectedDay === day 
                              ? 'bg-[#004A99] text-white shadow' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <span className="text-[7px] font-sans text-opacity-85 block leading-none">D</span>
                          <span className="text-xs leading-none mt-0.5">{day}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Role filter */}
                  <div className="space-y-1.5 shrink-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase block font-sans">Filtrar por Integrante</span>
                    <div className="flex gap-1 overflow-x-auto max-w-full pb-1 scrollbar-thin">
                      {['Todos', 'PM', 'Analista', 'UX/UI', 'Desarrollador', 'Equipo'].map(role => (
                        <button
                          key={role}
                          onClick={() => setRoleFilter(role)}
                          className={`px-3 py-1.5 rounded text-[10px] font-bold transition-all cursor-pointer font-sans ${
                            roleFilter === role 
                              ? 'bg-blue-50 border border-blue-300 text-[#004A99]' 
                              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The Gantt Chart Container */}
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between font-sans">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#004A99]" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Gantt de Actividades del Proyecto
                      </span>
                    </div>
                    {selectedDay && (
                      <div className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded border border-blue-200 flex items-center gap-1">
                        <span className="animate-pulse">●</span> Simulando actividades activas del día {selectedDay}
                      </div>
                    )}
                  </div>

                  {/* Table area with horizontal scroll */}
                  <div className="overflow-x-auto animate-fadeIn">
                    <table className="w-full text-left border-collapse min-w-[850px]">
                      <thead>
                        <tr className="bg-slate-100/70 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500 font-sans tracking-wider">
                          <th className="py-3 px-4 w-[35%]">Actividad / Tarea</th>
                          <th className="py-3 px-4 w-[20%]">Responsable</th>
                          {Array.from({ length: 11 }, (_, i) => i + 1).map(day => (
                            <th 
                              key={day} 
                              className={`py-3 px-1 text-center w-[4%] font-mono text-[11px] ${
                                selectedDay === day ? 'bg-blue-50 text-[#004A99] font-extrabold border-x border-blue-100' : ''
                              }`}
                            >
                              D{day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-155">
                        {cronogramaActivities
                          .filter(activity => {
                            const matchesRole = roleFilter === 'Todos' || 
                              activity.responsible.toLowerCase().includes(roleFilter.toLowerCase()) ||
                              (roleFilter === 'PM' && activity.responsible.includes('PM')) ||
                              (roleFilter === 'Analista' && activity.responsible.includes('Analista'));
                            
                            const matchesDay = selectedDay === null || activity.days.includes(selectedDay);
                            return matchesRole && matchesDay;
                          })
                          .map(activity => {
                            const isCurrentlySelected = selectedActivity === activity.id;
                            return (
                              <tr 
                                key={activity.id}
                                className={`transition-colors hover:bg-slate-50/85 cursor-pointer ${
                                  isCurrentlySelected ? 'bg-blue-50/40' : ''
                                }`}
                                onClick={() => setSelectedActivity(activity.id)}
                              >
                                <td className="py-3.5 px-4">
                                  <div className="flex items-center gap-2.5">
                                    <span className="text-[10px] font-mono text-slate-400 font-semibold w-5 shrink-0 text-right">
                                      {String(activity.id).padStart(2, '0')}.
                                    </span>
                                    <div>
                                      <span className="text-xs font-bold text-slate-800 block font-sans">
                                        {activity.name}
                                      </span>
                                      <span className="text-[10px] text-slate-400 font-light line-clamp-1 font-sans">
                                        {activity.description}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3.5 px-4">
                                  <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border font-sans ${getRoleBadgeClass(activity.responsible)}`}>
                                    {activity.responsible}
                                  </span>
                                </td>
                                {Array.from({ length: 11 }, (_, i) => i + 1).map(day => {
                                  const isActiveDay = activity.days.includes(day);
                                  const isSimulatedActive = selectedDay ? activity.days.includes(selectedDay) : false;
                                  
                                  return (
                                    <td 
                                      key={day}
                                      className={`py-3.5 px-1 text-center border-r border-slate-100/50 ${
                                        selectedDay === day ? 'bg-blue-50/20' : ''
                                      }`}
                                    >
                                      {isActiveDay ? (
                                        <div 
                                          className={`h-6 mx-auto rounded transition-all flex items-center justify-center ${
                                            selectedDay === day 
                                              ? 'bg-[#004A99] text-white scale-110 shadow-sm' 
                                              : selectedDay && !isSimulatedActive 
                                                ? 'bg-slate-200 text-slate-400 opacity-40'
                                                : 'bg-[#004A99] text-white hover:bg-blue-800'
                                          }`}
                                          title={`${activity.name} - Día ${day}`}
                                        >
                                          <Check size={10} className="stroke-[3]" />
                                        </div>
                                      ) : (
                                        <div className="h-6 w-full flex items-center justify-center text-slate-200">
                                          •
                                        </div>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary row */}
                  <div className="bg-slate-50/80 p-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock size={14} className="text-[#004A99]" />
                      <span><strong>Duración Total Programada:</strong> 11 días hábiles de desarrollo iterativo.</span>
                    </div>
                    <div className="text-slate-400 text-[10px]">
                      Haga clic en cualquier fila para desplegar su ficha de detalles.
                    </div>
                  </div>
                </div>

                {/* Dynamic activity detail panel based on selection */}
                {cronogramaActivities.find(a => a.id === selectedActivity) && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm grid md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-8 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 font-sans">
                        <span className="bg-blue-50 border border-blue-200 text-[#004A99] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                          ACTIVIDAD {cronogramaActivities.find(a => a.id === selectedActivity)?.id}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${getRoleBadgeClass(cronogramaActivities.find(a => a.id === selectedActivity)?.responsible || '')}`}>
                          Responsable: {cronogramaActivities.find(a => a.id === selectedActivity)?.responsible}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 font-sans">
                        {cronogramaActivities.find(a => a.id === selectedActivity)?.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light font-sans">
                        {cronogramaActivities.find(a => a.id === selectedActivity)?.description}
                      </p>
                    </div>

                    <div className="md:col-span-4 bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Días Asignados</span>
                        <div className="flex flex-wrap gap-1">
                          {cronogramaActivities.find(a => a.id === selectedActivity)?.days.map(d => (
                            <span key={d} className="bg-white text-slate-700 font-mono text-xs font-bold border border-slate-200 w-6 h-6 rounded flex items-center justify-center">
                              D{d}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-200/55 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                        <span>Estado estimado:</span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <CheckCircle size={10} /> Completado
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Excel Replica Header / Info */}
                <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-900 p-4 rounded-r text-xs font-sans leading-relaxed flex gap-3 items-start">
                  <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block mb-0.5">Matriz Original de Planificación Excel</strong>
                    <p className="font-light text-slate-700">Esta planilla reproduce con precisión milimétrica la estructura, colores, cabeceras y marcaciones del cronograma original cargado por el equipo de PM para el proceso de pagos.</p>
                  </div>
                </div>

                {/* Replica Table wrapper with spreadsheet layout styling */}
                <div className="bg-white border border-slate-300 rounded shadow-md overflow-hidden font-sans">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-slate-300 min-w-[850px] text-xs font-sans">
                      <thead>
                        {/* Dark blue Excel Header row */}
                        <tr className="bg-[#1B4E8C] text-white font-bold text-center border border-slate-300">
                          <th className="py-2.5 px-4 text-left border border-slate-400 w-[30%]">Actividad</th>
                          <th className="py-2.5 px-4 text-left border border-slate-400 w-[20%]">Responsable</th>
                          {Array.from({ length: 11 }, (_, i) => i + 1).map(day => (
                            <th key={day} className="py-2.5 px-1 border border-slate-400 w-[4.5%] font-bold">
                              D{day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-300">
                        {/* exact mapping of rows in screenshot */}
                        {[
                          { name: 'Inicio del Sprint', resp: 'PM', days: [1] },
                          { name: 'Reunión Kickoff', resp: 'PM + Cliente', days: [1] },
                          { name: 'Levantamiento de requisitos', resp: 'Analista', days: [1, 2, 3] },
                          { name: 'Historias de Usuario', resp: 'Analista', days: [3] },
                          { name: 'Mockups', resp: 'UX/UI', days: [4, 5] },
                          { name: 'Diseño Base de Datos', resp: 'Desarrollador', days: [5, 6] },
                          { name: 'Desarrollo Registro Alumno', resp: 'Desarrollador', days: [6, 7, 8] },
                          { name: 'Desarrollo Pago Alumno', resp: 'Desarrollador', days: [8, 9] },
                          { name: 'Integración', resp: 'Desarrollador', days: [9, 10] },
                          { name: 'Pruebas funcionales', resp: 'Analista + Cliente', days: [10, 11] },
                          { name: 'Sprint Review', resp: 'Equipo', days: [11] },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-slate-50/50">
                            <td className="py-2 px-4 border border-slate-300 text-slate-800 font-normal">
                              {row.name}
                            </td>
                            <td className="py-2 px-4 border border-slate-300 text-slate-700 font-normal">
                              {row.resp}
                            </td>
                            {Array.from({ length: 11 }, (_, i) => i + 1).map(day => {
                              const isActive = row.days.includes(day);
                              return (
                                <td 
                                  key={day} 
                                  className={`py-2 px-1 border border-slate-300 text-center relative ${
                                    isActive ? 'bg-[#5B9BD5]' : ''
                                  }`}
                                >
                                  {isActive && <span className="sr-only">Active</span>}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                        {/* Total Duration Row exactly as in the image */}
                        <tr className="bg-slate-50 font-bold border-t-2 border-slate-400">
                          <td className="py-2 px-4 border border-slate-300 text-slate-900 font-bold underline decoration-double">
                            Duración Total Programada
                          </td>
                          <td className="py-2 px-4 border border-slate-300 text-slate-900 font-bold" colSpan={12}>
                            11 días
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

      </div>
    </main>
  );
}
