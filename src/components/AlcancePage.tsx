import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, Search, CheckCircle2, ChevronRight,
  Info, Folder, Calendar, Activity, UserCheck, 
  Users, Settings, TrendingUp, Maximize2, 
  ExternalLink, Lock, ListTodo, Award, CheckCircle,
   ShieldCheck, Eye, AlertCircle, ArrowUpRight
} from 'lucide-react';
import { useLightbox } from '../App';

const scheduleTasks = [
  { id: '1.4', title: 'IMPLEMENTACIÓN DEL SISTEMA', duration: '24 sem', start: '01/09/25', end: '13/02/26', type: 'parent', weekStart: 0, durationWeeks: 24, responsible: 'Jesús López / Todo el Equipo', progress: 100, deliverables: ['Código fuente de los módulos integrados', 'Base de datos productiva', 'Manuales técnicos y de usuario'] },
  { id: '1.4.1', title: 'Preparación para la Implementación', duration: '3 sem', start: '01/09/25', end: '19/09/25', type: 'phase', weekStart: 0, durationWeeks: 3, responsible: 'Carlos Curo / Jesús López', progress: 100, deliverables: ['Servidores configurados', 'Base de datos vacía', 'Repositorio Git inicializado'] },
  { id: '1.4.1.1', title: 'Reunión de inicio de implementación', duration: '2 días', start: '01/09/25', end: '02/09/25', type: 'task', parentId: '1.4.1', weekStart: 0, durationWeeks: 0.4, responsible: 'Todo el Equipo', progress: 100, deliverables: ['Acta de reunión de inicio de fase de desarrollo'] },
  { id: '1.4.1.2', title: 'Definición del plan de trabajo detallado', duration: '3 días', start: '03/09/25', end: '05/09/25', type: 'task', parentId: '1.4.1', weekStart: 0.4, durationWeeks: 0.6, responsible: 'Jesús López', progress: 100, deliverables: ['Cronograma de desarrollo detallado por horas'] },
  { id: '1.4.1.3', title: 'Configuración de servidores y entorno', duration: '5 días', start: '08/09/25', end: '12/09/25', type: 'task', parentId: '1.4.1', weekStart: 1, durationWeeks: 1, responsible: 'Carlos Curo', progress: 100, deliverables: ['Servidores de desarrollo y pre-producción levantados'] },
  { id: '1.4.1.4', title: 'Configuración de base de datos', duration: '3 días', start: '15/09/25', end: '17/09/25', type: 'task', parentId: '1.4.1', weekStart: 2, durationWeeks: 0.6, responsible: 'Carlos Curo', progress: 100, deliverables: ['Esquemas de base de datos creados en motor PostgreSQL'] },
  { id: '1.4.1.5', title: 'Configuración de repositorios y control de versiones', duration: '2 días', start: '18/09/25', end: '19/09/25', type: 'task', parentId: '1.4.1', weekStart: 2.6, durationWeeks: 0.4, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Repositorio GitHub configurado con ramas protegidas'] },
  { id: '1.4.1.6', title: 'Validación del entorno con el cliente', duration: '2 días', start: '18/09/25', end: '19/09/25', type: 'task', parentId: '1.4.1', weekStart: 2.6, durationWeeks: 0.4, responsible: 'Jesús López', progress: 100, deliverables: ['Acta de conformidad de entorno de desarrollo'] },
  
  { id: '1.4.2', title: 'Implementación del Módulo de Alumnos', duration: '4 sem', start: '22/09/25', end: '17/10/25', type: 'phase', weekStart: 3, durationWeeks: 4, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Módulo de Alumnos (Registro, Búsqueda, Expedientes)'] },
  { id: '1.4.2.1', title: 'Reunión de levantamiento funcional del módulo', duration: '2 días', start: '22/09/25', end: '23/09/25', type: 'task', parentId: '1.4.2', weekStart: 3, durationWeeks: 0.4, responsible: 'Jesús López', progress: 100, deliverables: ['Especificaciones funcionales de pantallas de Alumnos'] },
  { id: '1.4.2.2', title: 'Ajustes a requerimientos específicos', duration: '3 días', start: '24/09/25', end: '26/09/25', type: 'task', parentId: '1.4.2', weekStart: 3.4, durationWeeks: 0.6, responsible: 'Leonardo Ávila', progress: 100, deliverables: ['Wireframes finales actualizados'] },
  { id: '1.4.2.3', title: 'Desarrollo del módulo', duration: '10 días', start: '29/09/25', end: '10/10/25', type: 'task', parentId: '1.4.2', weekStart: 4, durationWeeks: 2, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Vistas y controladores del expediente de alumno listos'] },
  { id: '1.4.2.4', title: 'Integración con la base de datos', duration: '4 días', start: '13/10/25', end: '16/10/25', type: 'task', parentId: '1.4.2', weekStart: 6, durationWeeks: 0.8, responsible: 'Carlos Curo', progress: 100, deliverables: ['Conexiones API para consulta de estudiantes'] },
  { id: '1.4.2.5', title: 'Pruebas internas', duration: '4 días', start: '13/10/25', end: '16/10/25', type: 'task', parentId: '1.4.2', weekStart: 6, durationWeeks: 0.8, responsible: 'Jesús López', progress: 100, deliverables: ['Plan de pruebas de Alumnos completado sin errores críticos'] },
  { id: '1.4.2.6', title: 'Capacitación al personal administrativo', duration: '3 días', start: '15/10/25', end: '17/10/25', type: 'task', parentId: '1.4.2', weekStart: 6.6, durationWeeks: 0.6, responsible: 'Jesús López / Leonardo Ávila', progress: 100, deliverables: ['Manual de usuario de Alumnos entregado'] },
  { id: '1.4.2.7', title: 'Recepcion de observaciones del cliente', duration: '2 días', start: '15/10/25', end: '16/10/25', type: 'task', parentId: '1.4.2', weekStart: 6.6, durationWeeks: 0.4, responsible: 'Jesús López', progress: 100, deliverables: ['Ficha de observaciones firmada por el dueño de la escuela'] },
  
  { id: '1.4.3', title: 'Implementación del Módulo de Clases', duration: '4 sem', start: '20/10/25', end: '14/11/25', type: 'phase', weekStart: 7, durationWeeks: 4, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Módulo de Clases (Programador, Horarios, Asistencia)'] },
  { id: '1.4.3.2', title: 'Desarrollo de programación de clases', duration: '8 días', start: '22/10/25', end: '31/10/25', type: 'task', parentId: '1.4.3', weekStart: 7.4, durationWeeks: 1.6, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Algoritmo de asignación de horas sin traslapes desarrollado'] },
  { id: '1.4.3.3', title: 'Gestión de horarios e instructores', duration: '5 días', start: '03/11/25', end: '07/11/25', type: 'task', parentId: '1.4.3', weekStart: 9, durationWeeks: 1, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Vista de grilla de programación de instructores funcional'] },
  
  { id: '1.4.4', title: 'Implementación del Módulo Financiero', duration: '5 sem', start: '17/11/25', end: '19/12/25', type: 'phase', weekStart: 11, durationWeeks: 5, responsible: 'Carlos Curo', progress: 100, deliverables: ['Módulo Financiero (Registro de pagos, cuotas, reportes de caja)'] },
  { id: '1.4.4.2', title: 'Desarrollo del registro de pagos', duration: '8 días', start: '19/11/25', end: '28/11/25', type: 'task', parentId: '1.4.4', weekStart: 11.4, durationWeeks: 1.6, responsible: 'Carlos Curo', progress: 100, deliverables: ['Formularios de cobro y validación de Yape/Plin desarrollados'] },
  { id: '1.4.4.3', title: 'Desarrollo del control de cuotas', duration: '5 días', start: '01/12/25', end: '05/12/25', type: 'task', parentId: '1.4.4', weekStart: 13, durationWeeks: 1, responsible: 'Carlos Curo', progress: 100, deliverables: ['Sistema de control de estados de cuota (Pendiente, Pagado, Vencido)'] },
  
  { id: '1.4.5', title: 'Implementación de Reportes e Indicadores', duration: '4 sem', start: '22/12/25', end: '16/01/26', type: 'phase', weekStart: 16, durationWeeks: 4, responsible: 'Leonardo Ávila', progress: 100, deliverables: ['Módulo de Reportes (Dashboard gerencial, KPIs, Exportación)'] },
  { id: '1.4.5.2', title: 'Desarrollo de dashboard', duration: '8 días', start: '24/12/25', end: '06/01/26', type: 'task', parentId: '1.4.5', weekStart: 16.4, durationWeeks: 1.6, responsible: 'Leonardo Ávila', progress: 100, deliverables: ['Gráficos de rendimiento de ingresos y asistencia mensuales'] },
  
  { id: '1.4.6', title: 'Integración y Despliegue', duration: '4 sem', start: '19/01/26', end: '13/02/26', type: 'phase', weekStart: 20, durationWeeks: 4, responsible: 'Todo el Equipo', progress: 100, deliverables: ['Sistema MTDRIVING desplegado en Cloud Run, Base de datos migrada'] },
  { id: '1.4.6.1', title: 'Integración completa del sistema', duration: '8 días', start: '19/01/26', end: '28/01/26', type: 'task', parentId: '1.4.6', weekStart: 20, durationWeeks: 1.6, responsible: 'Jean Piers Quispe', progress: 100, deliverables: ['Enlace completo entre vistas de Alumnos, Clases y Pagos'] },
  { id: '1.4.6.5', title: 'Puesta en producción', duration: '2 días', start: '12/02/26', end: '13/02/26', type: 'task', parentId: '1.4.6', weekStart: 23.4, durationWeeks: 0.6, responsible: 'Carlos Curo / Jesús López', progress: 100, deliverables: ['Contenedor Docker subido a Cloud Run e inicio de operaciones'] }
];

export default function AlcancePage() {
  const { openLightbox } = useLightbox();
  const [activeTab, setActiveTab ] = useState<'plan' | 'requisitos' | 'matriz' | 'declaracion' | 'edt' | 'diccionario' | 'prototipo' | 'cronograma'>('plan');

  // Interactive states
  const [reqSearch, setReqSearch] = useState('');
  const [reqPriorityFilter, setReqPriorityFilter] = useState('Todos');
  const [reqCategoryFilter, setReqCategoryFilter] = useState('Todos');
  
  const [activeWbsNode, setActiveWbsNode] = useState<string>('1.0');

  const [activeScheduleTask, setActiveScheduleTask] = useState<string>('1.4');
  const [scheduleSearch, setScheduleSearch] = useState<string>('');
  const [scheduleFilter, setScheduleFilter] = useState<string>('Todos');

  // WBS Dictionary data
  // WBS Dictionary data
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
    '1.1': {
      title: "Gestión del Proyecto",
      level: "Nivel 2 · Fase de Dirección",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Habilita la correcta dirección del proyecto, asegurando que se cumplan las metas de cronograma, costo, alcance y calidad.",
      deliverables: [
        "Acta de constitución del proyecto",
        "Informes de avance",
        "Matriz de riesgos",
        "Lecciones aprendidas"
      ],
      acceptance: "Hitos cumplidos y reportes aprobados por patrocinadores.",
      evidence: [
        "Informes de avance semanales",
        "Registro de cambios en Fase 1 (Entradas 4.4)"
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
    '1.2': {
      title: "Análisis y Definición",
      level: "Nivel 2 · Fase de Análisis",
      responsible: "Líder de Proyecto / Analista de Sistemas — Jesús López",
      description: "Fase orientada a entender en profundidad la problemática del negocio y a definir formalmente los requisitos operacionales.",
      deliverables: [
        "Documento de requisitos",
        "Registro de interesados",
        "Matriz de trazabilidad de requisitos"
      ],
      acceptance: "Requisitos validados por el cliente y respaldados con evidencia primaria.",
      evidence: [
        "Entrevista con el dueño",
        "Matriz de trazabilidad interactiva"
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
    '1.3': {
      title: "Diseño de la Solución",
      level: "Nivel 2 · Fase de Diseño",
      responsible: "Diseñador UX/UI / Arquitecto — Leonardo Ávila",
      description: "Diseño de la estructura general de la solución en capas de presentación, lógica de negocio y persistencia, y definición del stack tecnológico.",
      deliverables: [
        "Diagrama de arquitectura por capas",
        "Definición de tecnologías",
        "Modelo entidad-relación (MER)",
        "Prototipo interactivo navegable"
      ],
      acceptance: "Diseño completo y aprobado para el desarrollo.",
      evidence: [
        "Diagrama de arquitectura por capas",
        "Prototipo de alta fidelidad"
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
      acceptance: "Interfaces de usuario revisadas y aprobadas por el cliente.",
      evidence: [
        "Prototipo funcional “Control de Pagos” (Sprint 1) publicado en el blog",
        "Requisitos de usabilidad RNF-08 a RNF-10"
      ]
    },
    '1.4': {
      title: "Desarrollo del Sistema",
      level: "Nivel 2 · Fase de Desarrollo",
      responsible: "Equipo del Proyecto",
      description: "Fase dedicada a la codificación de los 7 módulos del sistema unificado e implementación física de la base de datos de control.",
      deliverables: [
        "Módulo de Alumnos",
        "Módulo de Clases",
        "Módulo de Comunicaciones",
        "Módulo Financiero",
        "Módulo de Indicadores",
        "Administración y Seguridad",
        "Base de Datos e Integración"
      ],
      acceptance: "Módulos desarrollados e integrados sin errores de compilación.",
      evidence: [
        "Repositorio con el código de los módulos",
        "Pruebas de compilación exitosas"
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
        "Requisitos RNF-04, RNF-07 and RNF-12"
      ]
    },
    '1.5': {
      title: "Validación y Pruebas",
      level: "Nivel 2 · Fase de Pruebas",
      responsible: "Equipo del Proyecto",
      description: "Fase destinada a certificar la corrección técnica de la solución digital mediante pruebas funcionales detalladas.",
      deliverables: [
        "Planes de prueba",
        "Registro de incidencias",
        "Acta de validación con el cliente"
      ],
      acceptance: "Sistema funcionando de acuerdo con la especificación de requisitos sin fallos graves.",
      evidence: [
        "Casos de prueba detallados",
        "Acta de validación operacional firmada"
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
    '1.6': {
      title: "Cierre del Proyecto",
      level: "Nivel 2 · Fase de Cierre",
      responsible: "Director del Proyecto / Docente Asesor",
      description: "Fase final que marca el término formal de las actividades académicas y de entrega del sistema.",
      deliverables: [
        "Informe oficial de cierre",
        "Lecciones aprendidas sistematizadas",
        "Suministro del MVP final"
      ],
      acceptance: "Aprobación formal del proyecto académico.",
      evidence: [
        "Informe final aprobado",
        "Lecciones aprendidas sistematizadas"
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

  // Requirements Traceability Matrix Dataset
  const trackingMatrix = [
    { code: 'RF-01', name: 'Registrar nuevos alumnos', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-02 (Reducir registros manuales)', edt: '1.4.1 (Módulo Alumnos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-02', name: 'Actualizar información de alumnos', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-02 (Reducir registros manuales)', edt: '1.4.1 (Módulo Alumnos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-03', name: 'Consultar historial académico', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar calidad educativa', stakeholder: 'Instructor (INT-03) / Alumno (INT-04)', businessReq: 'RN-03 (Mejorar seguimiento académico)', edt: '1.4.1 (Módulo Alumnos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-04', name: 'Registrar asistencia a clases', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar calidad educativa', stakeholder: 'Instructor (INT-03)', businessReq: 'RN-03 (Mejorar seguimiento académico)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-05', name: 'Programar clases teóricas', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-02 (Reducir registros manuales)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-06', name: 'Programar clases prácticas', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02) / Instructor (INT-03)', businessReq: 'RN-02 (Reducir registros manuales)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-07', name: 'Gestionar horarios de instructores', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-02 (Reducir registros manuales)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-08', name: 'Visualizar calendario académico', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar calidad educativa', stakeholder: 'Instructor (INT-03) / Alumno (INT-04)', businessReq: 'RN-03 (Mejorar seguimiento académico)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-09', name: 'Registrar observaciones académicas', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar calidad educativa', stakeholder: 'Instructor (INT-03)', businessReq: 'RN-03 (Mejorar seguimiento académico)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-10', name: 'Generar reportes de asistencia', cat: 'Funcional', sub: 'Gestión Académica', traceObj: 'Mejorar calidad educativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-03 (Mejorar seguimiento académico)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-11', name: 'Enviar recordatorios automáticos de clases', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Automatizar canales de contacto', stakeholder: 'Alumno (INT-04)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-12', name: 'Enviar notificaciones de pagos pendientes', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Automatizar sistema de cobros', stakeholder: 'Área Financiera (INT-05)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.2 (Módulo Clases)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-13', name: 'Registrar consultas de estudiantes', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Solucionar gestión desorganizada', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-14', name: 'Gestionar historial de comunicaciones', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Automatizar canales de contacto', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-15', name: 'Integrar comunicación mediante WhatsApp Business', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Automatizar canales de contacto', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-16', name: 'Emitir mensajes masivos informativos', cat: 'Funcional', sub: 'Comunicación', traceObj: 'Transición a escala comercial', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-17', name: 'Registrar pagos de alumnos', cat: 'Funcional', sub: 'Financiero', traceObj: 'Automatizar sistema de cobros', stakeholder: 'Área Financiera (INT-05)', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-18', name: 'Registrar cuotas pendientes', cat: 'Funcional', sub: 'Financiero', traceObj: 'Automatizar sistema de cobros', stakeholder: 'Área Financiera (INT-05)', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-19', name: 'Consultar historial de pagos', cat: 'Funcional', sub: 'Financiero', traceObj: 'Automatizar sistema de cobros', stakeholder: 'Área Financiera (INT-05) / Alumno (INT-04)', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-20', name: 'Generar reportes financieros', cat: 'Funcional', sub: 'Financiero', traceObj: 'Optimizar toma de decisiones', stakeholder: 'Gerente General (INT-01) / Finanzas', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-21', name: 'Controlar ingresos por período', cat: 'Funcional', sub: 'Financiero', traceObj: 'Optimizar toma de decisiones', stakeholder: 'Gerente General (INT-01) / Finanzas', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-22', name: 'Registrar anulaciones o ajustes de pago', cat: 'Funcional', sub: 'Financiero', traceObj: 'Automatizar sistema de cobros', stakeholder: 'Área Financiera (INT-05)', businessReq: 'RN-05 (Mejorar control financiero)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-23', name: 'Mostrar cantidad de alumnos matriculados', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Respaldar con datos de gestión', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-24', name: 'Mostrar porcentaje de asistencia', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Respaldar con datos de gestión', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-25', name: 'Mostrar ingresos mensuales', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Respaldar con datos de gestión', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-26', name: 'Mostrar pagos pendientes', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Respaldar con datos de gestión', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-27', name: 'Generar dashboard gerencial', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Optimizar toma de decisiones', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-28', name: 'Exportar reportes en PDF y Excel', cat: 'Funcional', sub: 'Indicadores', traceObj: 'Respaldar con datos de gestión', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-06 (Disponer de indicadores)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-29', name: 'Gestionar usuarios del sistema', cat: 'Funcional', sub: 'Administración', traceObj: 'Soporte y gobernanza', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-30', name: 'Gestionar roles y permisos', cat: 'Funcional', sub: 'Administración', traceObj: 'Soporte y gobernanza', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RF-31', name: 'Registrar auditoría de operaciones', cat: 'Funcional', sub: 'Administración', traceObj: 'Soporte y gobernanza', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RF-32', name: 'Gestionar parámetros generales del sistema', cat: 'Funcional', sub: 'Administración', traceObj: 'Soporte y gobernanza', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Bajo' },
    { code: 'RNF-01', name: 'Requerir autenticación de usuario (password)', cat: 'No Funcional', sub: 'Seguridad', traceObj: 'Proteger base de datos', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RNF-02', name: 'Acceso restringido según roles', cat: 'No Funcional', sub: 'Seguridad', traceObj: 'Proteger base de datos', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Alto' },
    { code: 'RNF-03', name: 'Toda operación crítica en auditoría', cat: 'No Funcional', sub: 'Seguridad', traceObj: 'Trazabilidad y seguridad', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-01 (Centralizar información)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-04', name: 'Disponibilidad mínima del 95%', cat: 'No Funcional', sub: 'Disponibilidad', traceObj: 'Continuidad de coordinaciones', stakeholder: 'Alumno (INT-04) / Admin', businessReq: 'RN-08 (Facilitar crecimiento)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-05', name: 'Acceso en horario operativo', cat: 'No Funcional', sub: 'Disponibilidad', traceObj: 'Continuidad de coordinaciones', stakeholder: 'Instructor (INT-03) / Alumno', businessReq: 'RN-08 (Facilitar crecimiento)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-06', name: 'Tiempo de respuesta < 3 seg', cat: 'No Funcional', sub: 'Rendimiento', traceObj: 'Mejorar eficiencia operativa', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-07 (Reducir tiempos admin)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-07', name: 'Gestionar al menos 1000 alumnos', cat: 'No Funcional', sub: 'Rendimiento', traceObj: 'Soportar crecimiento corporativo', stakeholder: 'Gerente General (INT-01)', businessReq: 'RN-08 (Facilitar crecimiento)', edt: '1.4.3 (Base de Datos)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-08', name: 'Interfaz intuitiva para administradores', cat: 'No Funcional', sub: 'Usabilidad', traceObj: 'Facilidad de onboarding', stakeholder: 'Administrador (INT-02)', businessReq: 'RN-07 (Reducir tiempos admin)', edt: '1.3.4 (Mockups)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-09', name: 'Navegación sencilla y consistente', cat: 'No Funcional', sub: 'Usabilidad', traceObj: 'Facilidad de onboarding', stakeholder: 'Instructor (INT-03) / Alumno', businessReq: 'RN-07 (Reducir tiempos admin)', edt: '1.3.4 (Mockups)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-10', name: 'Compatibilidad con dispositivos móviles', cat: 'No Funcional', sub: 'Usabilidad', traceObj: 'Coordinación móvil', stakeholder: 'Instructor (INT-03) / Alumno', businessReq: 'RN-04 (Automatizar comunicación)', edt: '1.3.4 (Mockups)', status: 'Aprobado', priority: 'Medio' },
    { code: 'RNF-11', name: 'Arquitectura modular para ampliaciones', cat: 'No Funcional', sub: 'Mantenibilidad', traceObj: 'Facilitar crecimiento', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-08 (Facilitar crecimiento)', edt: '1.3.1 (Arquitectura)', status: 'Aprobado', priority: 'Bajo' },
    { code: 'RNF-12', name: 'Código documentado para mantenimiento', cat: 'No Funcional', sub: 'Mantenibilidad', traceObj: 'Asegurar transferencia tecnológica', stakeholder: 'Soporte TI (INT-06)', businessReq: 'RN-08 (Facilitar crecimiento)', edt: '1.4.4 (Integración)', status: 'Aprobado', priority: 'Bajo' },
  ];

  const filteredMatrix = trackingMatrix.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(reqSearch.toLowerCase()) || 
                          item.code.toLowerCase().includes(reqSearch.toLowerCase()) ||
                          item.stakeholder.toLowerCase().includes(reqSearch.toLowerCase());
    const matchesPriority = reqPriorityFilter === 'Todos' || item.priority === reqPriorityFilter;
    const matchesCategory = reqCategoryFilter === 'Todos' || item.cat === reqCategoryFilter;
    return matchesSearch && matchesPriority && matchesCategory;
  });

  const filteredTasks = scheduleTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(scheduleSearch.toLowerCase()) || 
                          task.id.includes(scheduleSearch);
    
    if (scheduleFilter === 'Todos') return matchesSearch;
    if (scheduleFilter === 'Preparación') return matchesSearch && (task.id.startsWith('1.4.1') || task.parentId === '1.4.1');
    if (scheduleFilter === 'Alumnos') return matchesSearch && (task.id.startsWith('1.4.2') || task.parentId === '1.4.2');
    if (scheduleFilter === 'Clases') return matchesSearch && (task.id.startsWith('1.4.3') || task.parentId === '1.4.3');
    if (scheduleFilter === 'Finanzas') return matchesSearch && (task.id.startsWith('1.4.4') || task.parentId === '1.4.4');
    if (scheduleFilter === 'Reportes') return matchesSearch && (task.id.startsWith('1.4.5') || task.parentId === '1.4.5');
    if (scheduleFilter === 'Despliegue') return matchesSearch && (task.id.startsWith('1.4.6') || task.parentId === '1.4.6');
    return matchesSearch;
  });

  const activeTaskData = scheduleTasks.find(t => t.id === activeScheduleTask);

  return (
    <main className="max-w-6xl mx-auto py-32 px-6 space-y-16">
      {/* Top Header */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-widest text-[#004A99]">
          <Layers size={12} /> Gestión del Alcance del Proyecto
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Alcance del Proyecto MTDRIVING
        </h1>
        <p className="text-sm text-slate-500 font-light max-w-2xl leading-relaxed">
          Planificación estructural, recopilación unificada de requisitos, matriz de trazabilidad orientada a objetivos, declaración de límites y Estructura de Desglose del Trabajo con su diccionario, alineados con el estándar PMBOK y PMI.
        </p>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-px">
        {[
          { id: 'plan', label: '1. Plan de Gestión' },
          { id: 'requisitos', label: '2. Recopilación de Requisitos' },
          { id: 'matriz', label: '3. Matriz de Trazabilidad' },
          { id: 'declaracion', label: '4. Declaración de Alcance' },
          { id: 'edt', label: '5. EDT / WBS' },
          { id: 'diccionario', label: '6. Diccionario de EDT' },
          { id: 'prototipo', label: '7. Prototipo' },
          { id: 'cronograma', label: '8. Cronograma' },
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

      {/* RENDER ACTIVE TAB */}
      <div className="pt-4">
        
        {/* TAB 1: Plan de Gestión del Alcance */}
        {activeTab === 'plan' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Purpose & Obj Card */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Award size={16} className="text-[#004A99]" /> 1. Propósito
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    El presente Plan de Gestión del Alcance establece los procedimientos, criterios y responsabilidades que serán utilizados para definir, validar y controlar el alcance del proyecto <strong className="text-slate-800">“Diseño y Desarrollo de una Solución Digital para la Gestión Operativa de la Escuela de Manejo MTDRIVING”</strong>.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Este plan tiene como finalidad asegurar que el proyecto incluya únicamente el trabajo necesario para cumplir los objetivos establecidos, evitando desviaciones, cambios no controlados y expectativas no alineadas entre los interesados.
                  </p>
                </div>

                <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                    <ListTodo size={16} className="text-[#004A99]" /> 2. Objetivos de la Gestión del Alcance
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs font-light text-slate-600">
                    <div className="p-3 bg-slate-50 rounded border-l-4 border-[#004A99] space-y-1">
                      <strong className="text-slate-800 font-bold">Claridad del Trabajo</strong>
                      <p className="text-[11px]">Definir claramente el trabajo requerido para alcanzar los objetivos del proyecto.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400 space-y-1">
                      <strong className="text-slate-800 font-bold">Proceso Formal</strong>
                      <p className="text-[11px]">Establecer un proceso formal para la recopilación y análisis riguroso de requisitos.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400 space-y-1">
                      <strong className="text-slate-800 font-bold">Línea Base</strong>
                      <p className="text-[11px]">Elaborar una línea base del alcance mediante la Declaración del Alcance y la EDT.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400 space-y-1">
                      <strong className="text-slate-800 font-bold">Garantizar Validación</strong>
                      <p className="text-[11px]">Garantizar la validación total de los entregables por parte de los interesados.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border-l-4 border-slate-400 sm:col-span-2 space-y-1">
                      <strong className="text-slate-800 font-bold">Control de Cambios</strong>
                      <p className="text-[11px]">Controlar las modificaciones al alcance de manera formal durante el ciclo de vida del proyecto.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar with roles & baseline */}
              <div className="space-y-6">
                <div className="p-6 bg-slate-900 text-white rounded-lg shadow-sm space-y-4">
                  <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest flex items-center gap-2 bg-white px-2.5 py-1 rounded w-max">
                    <ShieldCheck size={12} /> 8. Línea Base
                  </h4>
                  <p className="text-[11px] text-slate-300 font-light">
                    La línea base del alcance estará conformada por los siguientes documentos que constituyen la referencia oficial:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> Declaración del Alcance
                    </li>
                    <li className="flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> Estructura de Desglose (EDT)
                    </li>
                    <li className="flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> Diccionario de la EDT
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3">
                  <h4 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-1.5">
                    <CheckCircle size={14} className="text-emerald-500" /> 9. Criterios de Éxito
                  </h4>
                  <ul className="space-y-2 text-[11px] font-light text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Entregables definidos sean completados y aceptados formalmente.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Modificaciones del alcance sean estrictamente gestionadas por Change Control.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Objetivos del proyecto se cumplan dentro de las restricciones.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Validación de partes interesadas respondiendo a necesidades documentadas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scope Definition, EDT, Validation, Control Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Box 3 & 4 */}
              <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-6">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2 mb-3">
                    <Search size={16} className="text-[#004A99]" /> 3. Definición del Alcance
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                    La definición del alcance se realiza a partir de la información obtenida durante el análisis del negocio. Se emplean diversas técnicas estructuradas para garantizar solidez metodológica:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Entrevistas con el Propietario', 'Observación directa', 'Revisión Documental', 'Mapa de Empatía', 'Buyer Persona', 'Diagrama de Afinidad', 'Técnica SCAMPER', 'Storyboard', 'Juicio de Expertos', 'Reuniones de trabajo'].map((tech, idx) => (
                      <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2 mb-3">
                    <Layers size={16} className="text-[#004A99]" /> 4. Elaboración de la EDT / WBS
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    La Estructura de Desglose del Trabajo (EDT) será desarrollada mediante un proceso de descomposición progresiva de los entregables identificados en la Declaración del Alcance. Tendrá un enfoque técnico orientado a entregables y servirá como base directa para la planificación del cronograma, estimación de recursos, costos, asignación de responsabilidades y el seguimiento estructurado del avance comercial.
                  </p>
                </div>
              </div>

              {/* Box 5 & 6 */}
              <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-6">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2 mb-3">
                    <UserCheck size={16} className="text-[#004A99]" /> 5. Validación del Alcance
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
                    Se realizarán revisiones periódicas de refinamiento con los principales involucrados de la Escuela de Manejo MTDRIVING. Los entregables serán rigurosamente evaluados considerando los siguientes factores críticos de aceptación:
                  </p>
                  <ul className="space-y-1.5 text-xs font-light text-slate-600">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#004A99]" /> Cumplimiento de requerimientos validados y firmados.
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#004A99]" /> Coherencia formal con los objetivos de digitalización.
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#004A99]" /> Alineación con necesidades operativas identificadas.
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#004A99]" /> Conformidad documentada mediante actas de revisión formal.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2 mb-3">
                    <Settings size={16} className="text-[#004A99]" /> 6. Control del Alcance
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-3">
                    Cualquier solicitud de modificación relacionada con la línea base deberá canalizarse mediante un proceso formal de control de cambios. Se evaluará meticulosamente el impacto e interrupción en:
                  </p>
                  <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold text-slate-600">
                    <div className="bg-slate-50 border border-slate-200 p-2 rounded">Alcance</div>
                    <div className="bg-slate-50 border border-slate-200 p-2 rounded">Tiempo</div>
                    <div className="bg-slate-50 border border-slate-200 p-2 rounded">Costos</div>
                    <div className="bg-slate-50 border border-slate-200 p-2 rounded">Recursos</div>
                    <div className="bg-slate-50 border border-slate-200 p-2 rounded">Riesgos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 1 Section 7: Roles & Responsabilidades */}
            <div className="bg-slate-50 p-8 border border-slate-200 rounded-lg space-y-6">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.2em] mb-4 text-center">
                7. Roles y Responsabilidades asignadas
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 border border-slate-200 rounded shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-xs font-mono uppercase bg-blue-50 px-2.5 py-1 rounded w-max">
                    Patrocinador / Cliente
                  </div>
                  <ul className="space-y-2 text-[11px] font-light text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Proporcionar información relevante y verídica del negocio.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Validar entregables sustantivos y dar retroalimentación oportuna.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Aprobar cambios significativos que alteren el cronograma o costo.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-slate-200 rounded shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs font-mono uppercase bg-indigo-50 px-2.5 py-1 rounded w-max">
                    Equipo del Proyecto
                  </div>
                  <ul className="space-y-2 text-[11px] font-light text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Recopilar, analizar y documentar minuciosamente los requisitos.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Elaborar Declaración de Alcance y construir Estructura EDT.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Controlar desviaciones y gestionar formalmente el control de cambios.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-slate-200 rounded shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-violet-800 font-bold text-xs font-mono uppercase bg-violet-50 px-2.5 py-1 rounded w-max">
                    Docente Asesor
                  </div>
                  <ul className="space-y-2 text-[11px] font-light text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Supervisar la consistencia metodológica del proyecto académico.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Validar la alineación del proyecto con la malla de ingeniería de sistemas.
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#004A99] font-bold">•</span> Evaluar rigor, entregables e informes de hitos del cronograma.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Recopilación de Requisitos */}
        {activeTab === 'requisitos' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Top Infographic and Objective Row */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-4 h-full">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-50 text-[#004A99] px-2.5 py-1 rounded">
                  4.1 Objetivo del Proceso
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Determinar, documentar y gestionar a nivel macro las necesidades de los interesados de la Escuela de Manejo para definir los requisitos específicos del sistema propuesto. El fin primario es asegurar que la solución tecnológica implementada contribuya activamente a mejorar la eficiencia operativa del negocio, el control administrativo, y la calidad percibida del servicio educativo brindado.
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">4.2 Técnicas Utilizadas (PMBOK)</h4>
                  <ul className="space-y-2 text-[11px] text-slate-600 font-light">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> <strong>Entrevistas</strong> (Gerente, Admin, Instructores, Alumnos)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> <strong>Observación Directa</strong> (Registro, Programación, Pagos)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> <strong>Análisis Documental</strong> (Inscripciones, Comprobantes)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" /> <strong>Benchmarking</strong> (CRMs Educativos, Apps líderes)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Infographic block of Page 12 screenshot translated to gorgeous interactive component */}
              <div className="md:col-span-8 space-y-4">
                <div className="p-1 px-4 bg-[#004A99] rounded-t-lg flex justify-between items-center text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]">PMBOK 7th ED - GUÍA METODOLÓGICA</span>
                  <span className="text-[9px] font-bold bg-white/10 px-2 py-0.5 rounded font-mono">RECOPILACIÓN DE REQUISITOS</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-b-lg p-6 shadow-sm space-y-6">
                  {/* Grid showing Outputs */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* ENTRADAS */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#004A99] border-b border-slate-200 pb-1 flex items-center gap-1.5">
                        <Folder size={12} /> Entradas (Inputs)
                      </div>
                      <ul className="space-y-1 text-[10px] font-light text-slate-600">
                        <li>• Acta de constitución</li>
                        <li>• Plan de gestión del alcance</li>
                        <li>• Registro de supuestos</li>
                        <li>• Registro de interesados</li>
                        <li>• Caso de negocio del software</li>
                        <li>• Activos de procesos</li>
                      </ul>
                    </div>

                    {/* HERRAMIENTAS */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-700 border-b border-slate-200 pb-1 flex items-center gap-1.5">
                        <Settings size={12} /> Herramientas y Técnicas
                      </div>
                      <ul className="space-y-1 text-[10px] font-light text-slate-600">
                        <li>• Juicio de expertos</li>
                        <li>• Toma de decisiones</li>
                        <li>• Cuestionarios y encuestas</li>
                        <li>• Diagramas de flujo</li>
                        <li>• Modelado de procesos</li>
                        <li>• Mapas mentales / SCAMPER</li>
                      </ul>
                    </div>

                    {/* SALIDAS */}
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded space-y-2 bg-emerald-50/50 border-emerald-100">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 border-b border-emerald-200 pb-1 flex items-center gap-1.5">
                        <CheckCircle size={12} /> Salidas (Outputs)
                      </div>
                      <ul className="space-y-1 text-[10px] font-light text-slate-600">
                        <li>• <strong className="text-emerald-950 font-bold">Documento de requisitos</strong> (requisitos clasificados por funcionalidad y prioridad)</li>
                        <li>• <strong className="text-emerald-950 font-bold">Matriz de trazabilidad</strong> (garantiza control extremo a extremo)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Attachment Box to view real original screenshot */}
                  <div className="p-4 bg-slate-50 border border-slate-200 border-dashed rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Eye size={14} className="text-[#004A99]" /> Infografía ORIGINAL del Proceso
                      </p>
                      <p className="text-[10px] text-slate-500 font-light">Se incluye la representación visual del proceso de recopilación de requisitos.</p>
                    </div>
                    <button
                      onClick={() => openLightbox('recopilacion_requisitos.png', 'Infografía: Proceso de Recopilación de Requisitos')}
                      className="bg-white border border-slate-300 hover:border-[#004A99] active:scale-95 text-[#004A99] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded shadow-sm hover:shadow transition-all duration-200"
                    >
                      Ampliar Infografía
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stakeholders Identity Check (INT-01 to INT-06) */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-[#004A99] uppercase tracking-[0.2em]">4.3 Identificación de Interesados clave</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[
                  { code: 'INT-01', name: 'Gerente General', role: 'Toma de decisiones estratégica', desc: 'Giovanni Steven / Martín' },
                  { code: 'INT-02', name: 'Administrador', role: 'Gestión operativa diaria', desc: 'Coordinador de Instructores' },
                  { code: 'INT-03', name: 'Instructor(es)', role: 'Desarrollo de clases y rutas', desc: 'Evaluador de alumnos' },
                  { code: 'INT-04', name: 'Alumno / Cliente', role: 'Usuario principal receptor', desc: 'Estudiantes de manejo' },
                  { code: 'INT-05', name: 'Área Financiera', role: 'Gestión económica y cobros', desc: 'Administración de caja' },
                  { code: 'INT-06', name: 'Equipo de TI', role: 'Soporte y mantenimiento', desc: 'Desarrolladores SaaS' },
                ].map(stk => (
                  <div key={stk.code} className="p-4 bg-white border border-slate-200 rounded shadow-xs space-y-2">
                    <span className="font-mono text-[9px] font-bold text-[#004A99] bg-blue-50 px-2 py-0.5 rounded">{stk.code}</span>
                    <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1">{stk.name}</h4>
                    <p className="text-[10px] text-slate-500 font-light leading-snug">{stk.role}</p>
                    <p className="text-[9px] text-[#004A99] font-mono italic leading-none">{stk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business requirements (RN-01 to RN-08) */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold text-[#004A99] uppercase tracking-[0.2em]">4.4 Requisitos del Negocio (Business Requirements)</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { code: 'RN-01', desc: 'Centralizar toda la información institucional en un sistema único.' },
                  { code: 'RN-02', desc: 'Reducir significativamente la dependencia de registros manuales aislados.' },
                  { code: 'RN-03', desc: 'Mejorar el seguimiento académico y de calificaciones de los alumnos.' },
                  { code: 'RN-04', desc: 'Automatizar las comunicaciones periódicas con los estudiantes.' },
                  { code: 'RN-05', desc: 'Mejorar el control financiero global y conciliación de caja.' },
                  { code: 'RN-06', desc: 'Disponer de indicadores y KPIs en tiempo real para toma de decisiones.' },
                  { code: 'RN-07', desc: 'Reducir los tiempos de administración operativa redundante.' },
                  { code: 'RN-08', desc: 'Facilitar la escalabilidad y expansión futura de la organización.' },
                ].map(rn => (
                  <div key={rn.code} className="p-4 bg-slate-50 border border-slate-200 rounded flex gap-3">
                    <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 h-max px-1.5 py-0.5 rounded">{rn.code}</span>
                    <p className="text-[11px] text-slate-600 font-light leading-relaxed">{rn.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick overview of functional modules with collapsible tables or count indicators */}
            <div className="p-6 bg-slate-900 text-white rounded-lg space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-bold text-[#004A99] uppercase tracking-wider">Clasificación General de Requisitos</h4>
                  <p className="text-[10px] text-slate-400 font-light">Se registraron un total de 32 requisitos funcionales (RF) y 12 requisitos no funcionales (RNF).</p>
                </div>
                <button
                  onClick={() => setActiveTab('matriz')}
                  className="bg-white/10 text-white hover:bg-[#004A99] hover:text-white border border-white/10 active:scale-95 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded transition-all"
                >
                  Ver Todo en la Matriz
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded border border-white/5 space-y-1">
                  <span className="text-xl font-bold font-mono">10</span>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Gestión Académica</p>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/5 space-y-1">
                  <span className="text-xl font-bold font-mono">6</span>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Módulo Comunicación</p>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/5 space-y-1">
                  <span className="text-xl font-bold font-mono">6</span>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Módulo Financiero</p>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/5 space-y-1">
                  <span className="text-xl font-bold font-mono">6</span>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">KPIs & Indicadores</p>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/5 col-span-2 md:col-span-1 space-y-1">
                  <span className="text-xl font-bold font-mono">16</span>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">TI & No Funcionales</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Matriz de Trazabilidad */}
        {activeTab === 'matriz' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Top info and action link */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded">
                  Matriz PMBOK 7ma Edición
                </span>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Filtre por prioridad o categoría, o busque palabras específicas para verificar cómo se trazan los requisitos con el alcance y los interesados del negocio de Moto Driving.
                </p>
              </div>

              <a
                href="https://docs.google.com/spreadsheets/d/1wjFF0VR-uQsmoFrAf9d-ouJM_15ltuIx/edit?usp=sharing&ouid=108466627605254718658&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#004A99] hover:bg-[#003873] active:scale-95 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded shadow-md transition-all duration-250"
              >
                <ExternalLink size={14} /> Abrir Hoja de Cálculo Real (Google Sheets) <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Filter controls */}
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Search bar */}
              <div className="relative w-full sm:w-72">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar código, nombre o interesado..."
                  value={reqSearch}
                  onChange={(e) => setReqSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded pl-9 pr-4 py-1.5 text-xs outline-none focus:border-[#004A99] transition-all"
                />
              </div>

              {/* Select filters */}
              <div className="flex gap-4 w-full sm:w-auto items-center justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">Prioridad:</span>
                  <select
                    value={reqPriorityFilter}
                    onChange={(e) => setReqPriorityFilter(e.target.value)}
                    className="bg-white border border-slate-200 rounded text-xs p-1 px-2 font-mono"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Alto">Alto</option>
                    <option value="Medio">Medio</option>
                    <option value="Bajo">Bajo</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">Categoría:</span>
                  <select
                    value={reqCategoryFilter}
                    onChange={(e) => setReqCategoryFilter(e.target.value)}
                    className="bg-white border border-slate-200 rounded text-xs p-1 px-2 font-mono"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Funcional">Funcional</option>
                    <option value="No Funcional">No Funcional</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Matrix Data Table */}
            <div className="overflow-x-auto bg-white border border-slate-200 rounded-lg shadow-sm">
              <table className="w-full text-left text-xs divide-y divide-slate-100">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 font-mono">
                    <th className="px-4 py-3">Código</th>
                    <th className="px-4 py-3 min-w-[200px]">Requisito del Sistema</th>
                    <th className="px-4 py-3">Categoría</th>
                    <th className="px-4 py-3">Submódulo</th>
                    <th className="px-4 py-3 min-w-[150px]">Interesado Origen</th>
                    <th className="px-4 py-3">Requisito Negocio</th>
                    <th className="px-4 py-3">Entregable EDT</th>
                    <th className="px-4 py-3">Prioridad</th>
                    <th className="px-4 py-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-[11px] font-light text-slate-600">
                  {filteredMatrix.length > 0 ? (
                    filteredMatrix.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-4 py-3 font-mono font-bold text-[#004A99] whitespace-nowrap">{row.code}</td>
                        <td className="px-4 py-3 font-bold text-slate-900 leading-tight">{row.name}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-[2px] text-[9px] font-bold font-mono uppercase ${row.cat === 'Funcional' ? 'bg-indigo-50 text-indigo-700' : 'bg-amber-50 text-amber-700'}`}>
                            {row.cat}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">{row.sub}</td>
                        <td className="px-4 py-3 font-medium text-slate-800">{row.stakeholder}</td>
                        <td className="px-4 py-3 font-mono text-[10px] whitespace-nowrap">{row.businessReq}</td>
                        <td className="px-4 py-3 font-mono text-[10px] whitespace-nowrap text-indigo-600 font-medium">{row.edt}</td>
                        <td className="px-4 py-3">
                          <span className={`px-1.5 py-0.5 rounded-[2px] text-[8px] font-extrabold uppercase font-mono ${
                            row.priority === 'Alto' ? 'bg-red-50 text-red-600' : 
                            row.priority === 'Medio' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-400'
                          }`}>
                            {row.priority}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-emerald-600 font-mono text-[9px] font-bold uppercase bg-emerald-50 px-1.5 py-0.5 rounded">
                            <CheckCircle2 size={10} /> {row.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="px-4 py-12 text-center text-slate-400 font-light italic">
                        No se encontraron registros que coincidan con la búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* TAB 4: Declaración del Alcance */}
        {activeTab === 'declaracion' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Main title block */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#004A99] px-2.5 py-1 rounded">
                DECLARACIÓN FORMAL DEL ALCANCE
              </span>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">PROYECTO:</span>
                <p className="text-sm font-extrabold text-slate-900 uppercase">Diseño y Desarrollo de una Solución Digital para la Gestión Operativa de la Escuela de Manejo MTDRIVING</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Descripción del Alcance</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  El presente proyecto tiene como finalidad diseñar y desarrollar una solución digital orientada a mejorar la gestión operativa de la escuela de manejo MTDRIVING, mediante la centralización de información relacionada con alumnos, programación de clases y procesos administrativos básicos.
                </p>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  La solución propuesta busca reducir la dependencia de registros manuales y herramientas de mensajería como medio principal de gestión, contribuyendo a una mejor organización de la información, optimización de procesos y fortalecimiento de la capacidad operativa del negocio. Para ello, el proyecto contempla actividades de análisis del negocio, identificación de necesidades, levantamiento y gestión de requisitos, aplicación de herramientas de Design Thinking, diseño de la solución tecnológica, elaboración de prototipos y desarrollo de un producto mínimo viable (MVP) que permita validar la factibilidad técnica y funcional de la propuesta.
                </p>
              </div>
            </div>

            {/* Deliverables List (numbered 6 to 21 from the document) */}
            <div className="p-8 bg-slate-900 text-white rounded-lg shadow-md space-y-4">
              <h3 className="text-sm font-extrabold text-[#004A99] uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                <Layers size={16} /> Entregables Comprometidos del Proyecto (PMI-Alineado)
              </h3>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">Sometidos a control de cambios y validación formal con el propietario del negocio:</p>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono leading-relaxed pt-2">
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">6. Diagnóstico Inicial</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Diagnóstico de la situación actual y procesos de MTDRIVING.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">7. Involucrados</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Identificación, registro y análisis estructural de interesados.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">8. Árbol de Causas</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Árbol de problemas, efectos y árbol correspondiente de objetivos.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">9. Mapa Empatía</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Herramienta de empatía con el cliente del negocio de manejo.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">10. Buyer Persona</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Modelado del perfil e inquietudes del estudiante ideal.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">11. Afinidad</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Diagrama de afinidad y organización de ideas innovadoras.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">12. SCAMPER</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Aplicación de técnica para redefinir el circuito y horarios.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">13. Storyboard</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Secuencia gráfica del flujo unificado de onboarding y pago.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">14. Gestión Alcance</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Elaboración de plan formal y controles de línea base.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">15. Gestión Requisitos</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Controles de levantamiento secundario y primario de requisitos.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">16. Requisitos</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Documento técnico clasificador de especificaciones funcionales.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">17. Trazabilidad</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Matriz extrema de relación entre negocio y código final.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">18. Estructura EDT</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Estructura general EDT/WBS y paquetes desglosados.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">19. Prototipo UI</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Diseño de mockups digitales y flujo interactivo navegable.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">20. Desarrolado (MVP)</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Código de software MVP y bases de datos desplegadas.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded space-y-1">
                  <span className="text-[#004A99] font-extrabold">21. Informe de Cierre</span>
                  <p className="text-slate-400 text-[9px] font-mono font-light">Informe técnico consolidado sometido a aprobación.</p>
                </div>
              </div>
            </div>

            {/* In scope vs Out of scope */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* In Scope */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
                <div className="p-4 bg-blue-50 border-b border-slate-200 flex items-center gap-2 text-[#004A99] font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> Alcance Incluido (In-Scope)
                </div>
                <ul className="p-6 space-y-3.5 text-xs font-light text-slate-600 list-none">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                    <span>Análisis estructural de los procesos tradicionales y cuellos de botella de la escuela de manejo Moto Driving.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                    <span>Identificación secuencial de oportunidades de mejora utilizando marcos de innovación centrada en el cliente.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                    <span>Diseño formal del modelo lúdico, diagramas de arquitectura de base de datos relacional y mockup interactivo.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                    <span>Desarrollo técnico de un MVP para validar la lógica del registro unificado de matrícula, agendas y asistencia.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                    <span>Validación de la coherencia metodológica y satisfacción operacional con el dueño de MTDRIVING.</span>
                  </li>
                </ul>
              </div>

              {/* Out of Scope */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
                <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
                  <Lock size={16} /> Alcance Excluido (Out-of-Scope)
                </div>
                <ul className="p-6 space-y-3.5 text-xs font-light text-slate-600 list-none">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Despliegue operativo definitivo en entornos virtuales de alta producción.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Implementación o desarrollo de aplicación móvil nativa (Android / iOS).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Integración con APIs comerciales pagadas de WhatsApp Business API.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Facturación electrónica conectada formalmente con SUNAT.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Vinculación con pasarelas transaccionales de pago (Niubiz, Culqi).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold font-mono">✗</span>
                    <span className="text-slate-400">Sistemas de contabilidad, costos integrados avanzados u operaciones comerciales de hardware.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Acceptance criteria, Restrictions & Supposed */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Acceptance Criteria */}
              <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Criterios de Aceptación del Proyecto</h4>
                <ul className="space-y-3 text-xs text-slate-600 font-light pl-4 list-disc">
                  <li>Todos los documentos académicos (diagnóstico, EDT, actas) se aprueben formalmente por el docente del curso de proyectos.</li>
                  <li>El prototipo navegable represente con exactitud los casos de uso principales aprobados (agenda, matrícula, y cobros).</li>
                  <li>El MVP demuestre de manera práctica la viabilidad técnica de la digitalización de procesos clave reduciendo la gestión manual.</li>
                  <li>El propietario valide que el flujo de software responde de inmediato a su problemática real analizada en la empatía.</li>
                </ul>
              </div>

              {/* Limit & Assumptions */}
              <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Restricciones identificadas</h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-light pl-4 list-disc mb-4">
                    <li>Periodo de ejecución estrictamente limitado al calendario lectivo y académico del ciclo en curso.</li>
                    <li>Desarrollo de prototipo dependiente de infraestructura de costo cero del equipo (GitHub, Vercel, Firebase Free plan).</li>
                    <li>El MVP priorizará exclusivamente flujos de registro de matrículas y control básico de clases.</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#004A99] font-mono">Supuestos clave del proyecto</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-light pl-4 list-disc">
                    <li>El propietario de MTDRIVING proporcionará acceso ilimitado a sus coordinaciones de WhatsApp y registros históricos.</li>
                    <li>Los estudiantes están equipados con smartphones con acceso a internet para utilizar el onboarding digital.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Evaluation Observations (Page 15) */}
            <div className="bg-blue-50/50 p-6 border border-blue-200 border-l-4 rounded-lg space-y-2">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <AlertCircle size={14} className="text-[#004A99]" /> Observaciones Críticas de la Evaluación
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Dado que el proyecto se encuentra estrictamente en el marco de <strong>Formulación y Evaluación de Proyectos de TI</strong>, esta versión de alcance centrado de forma rigurosa en entregables y roles es considerablemente más consistente metodológicamente debido a:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-[10px] font-mono p-2 text-slate-700 list-none">
                <li className="flex items-start gap-1"><span className="text-[#004A99]">▶</span> Foco directo en entregables finales tangibles.</li>
                <li className="flex items-start gap-1"><span className="text-[#004A99]">▶</span> Perfecta alineación estructural con la EDT.</li>
                <li className="flex items-start gap-1"><span className="text-[#004A99]">▶</span> Sello formal PMBOK 7ma de calidad técnica.</li>
                <li className="flex items-start gap-1"><span className="text-[#004A99]">▶</span> Integración nativa de Design Thinking y Scrum.</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* TAB 5: EDT/WBS */}
        {activeTab === 'edt' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            {/* Header / Intro */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="text-[#004A99] shrink-0" size={20} />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Estructura de Desglose del Trabajo (EDT) Interactiva
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                A continuación se muestra la representación jerárquica de la EDT del proyecto <strong>Sistema de Gestión Operativa MTDRIVING</strong>. El esquema refleja la descomposición completa del proyecto en 6 fases principales y sus componentes de alcance asociados (Nivel 3). En la parte inferior, se desglosa el componente de desarrollo (1.4) en sus correspondientes paquetes de trabajo (Nivel 4).
              </p>
              <div className="p-3 bg-blue-50 border-l-4 border-[#004A99] text-[#004A99] rounded-r text-[11px] font-medium flex gap-2 items-center">
                <Info size={14} className="shrink-0" />
                <span><strong>Interacción Técnica:</strong> Haga clic en cualquier componente de Nivel 3 o paquete de Nivel 4 para consultar su ficha técnica detallada directamente en el <strong>Diccionario de la EDT</strong>.</span>
              </div>
            </div>

            {/* Legend Component */}
            <div className="bg-white border border-slate-200 rounded-lg p-3.5 px-6 shadow-sm flex flex-wrap items-center justify-between text-xs gap-4 font-sans">
              <span className="font-mono font-bold uppercase text-[#004A99] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded text-[9px] tracking-wider">
                LEYENDA
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-slate-950 rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 1 · Proyecto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-600 rounded shadow-sm"></span>
                  <span className="text-slate-600 font-medium">Nivel 2 · Fases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-[#E2F0D9] border-2 border-[#A8D08D] rounded shadow-sm animate-pulse"></span>
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
                    <button
                      onClick={() => { setActiveWbsNode('1.0'); setActiveTab('diccionario'); }}
                      className="bg-slate-950 text-white p-4 rounded-lg shadow-md text-center w-[400px] border border-slate-800 relative hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[10px] font-mono block text-blue-200 font-bold uppercase tracking-widest mb-1">
                        1.0 · PROYECTO
                      </span>
                      <strong className="text-xs font-bold font-sans tracking-wide">
                        Sistema de Gestión Operativa MTDRIVING
                      </strong>
                    </button>
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.1'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.1 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Gestión del Proyecto</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.2'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.2 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Análisis y Definición</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.3'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.3 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Diseño de la Solución</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.4'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.4 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Desarrollo del Sistema</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.5'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.5 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Validación y Pruebas</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                      <button 
                        onClick={() => { setActiveWbsNode('1.6'); setActiveTab('diccionario'); }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md text-center min-h-[58px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                      >
                        <span className="text-[8px] font-mono block text-blue-100 font-bold uppercase">1.6 FASE</span>
                        <strong className="text-[9px] font-sans font-bold uppercase leading-tight">Cierre del Proyecto</strong>
                      </button>

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
                            className="w-full text-left bg-[#E2F0D9] hover:bg-[#D4E8C9] border-2 border-[#A8D08D] hover:border-[#8EBF72] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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
                <span className="text-[10px] font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded font-extrabold tracking-wider">
                  Nivel 4 — Paquetes de trabajo
                </span>
                <p className="text-[11px] text-slate-500 font-light pt-1">
                  Descomposición del componente <strong className="text-slate-700">1.4 Desarrollo del Sistema</strong> en paquetes de trabajo con codificación correlativa. Haga clic para ver su ficha en el diccionario.
                </p>
              </div>

              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="min-w-[1200px] grid grid-cols-7 gap-3.5 pt-2">
                  
                  {/* Column 1: Módulo de Alumnos */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.1'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.1</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Módulo de Alumnos</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Módulo de Clases */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.2'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.2</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Módulo de Clases</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Comunicaciones */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.3'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.3</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Comunicaciones</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Financiero */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.4'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.4</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Financiero</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 5: Indicadores */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.5'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.5</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Indicadores</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 6: Admin. y Seguridad */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.6'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.6</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">Admin. y Seguridad</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
                        >
                          <span className="text-[8px] font-mono font-bold text-amber-800 block mb-0.5">{wp.code}</span>
                          <p className="text-[10px] font-bold text-slate-800 leading-tight font-sans group-hover:text-amber-950">{wp.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 7: BD e Integración */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => { setActiveWbsNode('1.4.7'); setActiveTab('diccionario'); }}
                      className="w-full bg-[#004A99] hover:bg-blue-800 text-white p-2.5 rounded-lg text-center shadow-md min-h-[52px] flex flex-col justify-center items-center hover:scale-105 active:scale-95 transition-all"
                    >
                      <span className="text-[8px] font-mono block text-blue-100 font-bold">1.4.7</span>
                      <strong className="text-[9px] font-sans font-bold leading-tight uppercase">BD e Integración</strong>
                    </button>
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
                          className="w-full text-left bg-[#FFF2CC] hover:bg-[#FCE4B5] border-2 border-[#F4B084] hover:border-[#E89C65] p-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[70px]"
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

        {/* TAB 6: Diccionario EDT */}
        {activeTab === 'diccionario' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Split layout: node selector at left, content at right */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Selector left */}
              <div className="space-y-3">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-50 text-[#004A99] px-2.5 py-1 rounded block w-max">
                  Seleccionar Nodo de la EDT
                </span>
                <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden divide-y divide-slate-150 max-h-[500px] overflow-y-auto">
                  {Object.entries(wbsDictionary).map(([code, value]) => (
                    <button
                      key={code}
                      onClick={() => setActiveWbsNode(code)}
                      className={`w-full text-left p-3 text-xs flex items-center justify-between transition-colors ${
                        activeWbsNode === code 
                          ? 'bg-blue-50/70 border-l-4 border-l-[#004A99] font-bold text-[#004A99]' 
                          : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-l-4 border-l-transparent'
                      }`}
                    >
                      <span className="font-mono">{code} {value.title}</span>
                      <ChevronRight size={14} className={activeWbsNode === code ? 'text-[#004A99]' : 'text-slate-300'} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content right panel */}
              {activeWbsNode && wbsDictionary[activeWbsNode] && (
                <div className="md:col-span-2 space-y-6">
                  {/* Title card */}
                  <div className="bg-slate-900 text-white rounded-lg p-6 shadow-sm space-y-2 relative overflow-hidden">
                    <span className="font-mono text-[#004A99] font-bold text-[8px] bg-white rounded px-2.5 py-1 uppercase tracking-widest">
                      DICCIONARIO EDT - CÓDIGO {activeWbsNode}
                    </span>
                    <h3 className="text-xl font-bold">{wbsDictionary[activeWbsNode].title}</h3>
                    <p className="text-[11px] text-slate-400 font-mono">Responsable Primario: <strong className="text-slate-200 font-bold">{wbsDictionary[activeWbsNode].responsible}</strong></p>
                  </div>

                  {/* Details Card */}
                  <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">1. Descripción del Paquete</h4>
                      <p className="text-xs text-slate-700 font-light leading-relaxed">
                        {wbsDictionary[activeWbsNode].description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">2. Entregables Asociados</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {wbsDictionary[activeWbsNode].deliverables.map((del, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-150 flex items-center gap-2.5 text-[11px] text-slate-600 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004A99]" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <h4 className="text-[10px] font-bold text-[#004A99] uppercase tracking-widest font-mono">3. Criterio de Aceptación definido</h4>
                      <p className="text-xs text-slate-700 font-light leading-relaxed bg-slate-50 border border-slate-200 p-3 rounded">
                        {wbsDictionary[activeWbsNode].acceptance}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* TAB 7: Prototipo */}
        {activeTab === 'prototipo' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Main Video Section */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm space-y-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono bg-blue-50 text-[#004A99] border border-blue-200 px-2.5 py-0.5 rounded font-extrabold tracking-wider uppercase">
                  Demostración del Sistema
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Video Demostrativo del Prototipo (Módulos de Alumnos, Clases y Pagos)
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  A continuación se presenta el video explicativo y de navegación interactiva del prototipo del <strong>Sistema de Gestión Operativa MTDRIVING</strong>, detallando el flujo de registro de alumnos, asignación de clases y el módulo de control financiero/pagos.
                </p>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-slate-300 bg-slate-950 shadow-inner flex flex-col items-center justify-center group">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-34281-large.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos en HTML5.
                </video>
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-white flex items-center gap-2 border border-white/10 pointer-events-none group-hover:opacity-100 transition-opacity">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Prototipo Interactivo MVP
                </div>
              </div>

              {/* Core Features list shown in the video */}
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <span className="p-1 rounded bg-blue-50 text-[#004A99]">01</span> Matrícula y Alumnos
                  </h4>
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed font-mono">
                    Demostración del registro de nuevos estudiantes, carga de documentación habilitante y visualización de expedientes académicos centralizados.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <span className="p-1 rounded bg-emerald-50 text-emerald-700">02</span> Programador de Clases
                  </h4>
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed font-mono">
                    Flujo interactivo de reserva de horas prácticas de manejo, asignación dinámica de instructores y vehículos homologados sin sobreposiciones.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-2">
                    <span className="p-1 rounded bg-amber-50 text-amber-700">03</span> Gestión de Pagos
                  </h4>
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed font-mono">
                    Control financiero con estados de cuenta en tiempo real, emisión automatizada de recibos y pasarela de simulación de cobro seguro.
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluation Observations / Metadata */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <Activity size={16} className="text-[#004A99]" />
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Ficha de Evaluación Técnica del Prototipo</h4>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-white border border-slate-150 rounded space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">TECNOLOGÍA</span>
                  <strong className="text-slate-800 font-bold block">React 18 + Tailwind</strong>
                </div>
                <div className="p-3 bg-white border border-slate-150 rounded space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">TIPO DE DISEÑO</span>
                  <strong className="text-slate-800 font-bold block">Figma Wireframe & UI</strong>
                </div>
                <div className="p-3 bg-white border border-slate-150 rounded space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">DURACIÓN DEL VIDEO</span>
                  <strong className="text-slate-800 font-bold block">02:45 minutos</strong>
                </div>
                <div className="p-3 bg-white border border-slate-150 rounded space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono block">ESTADO DEL ENTREGABLE</span>
                  <strong className="text-emerald-700 font-bold block">Aprobado / Validado</strong>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 8: Cronograma */}
        {activeTab === 'cronograma' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header Metrics Row */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004A99] flex items-center justify-center shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Duración Total</span>
                  <strong className="text-xs font-bold text-slate-800">24 semanas (6 meses)</strong>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Fases del Proyecto</span>
                  <strong className="text-xs font-bold text-slate-800">6 Fases de Desarrollo</strong>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Hitos Clave</span>
                  <strong className="text-xs font-bold text-slate-800">4 Entregables MVP</strong>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Fecha de Inicio</span>
                  <strong className="text-xs font-bold text-slate-800">01 de Septiembre 2025</strong>
                </div>
              </div>
            </div>

            {/* Main Interactive Gantt Explorer Card */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#004A99]" /> Explorer del Cronograma de Implementación
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Interactúe con la grilla del cronograma para analizar las dependencias de los entregables y las duraciones de cada fase.
                    </p>
                  </div>
                  {/* Search Input */}
                  <div className="relative w-full md:w-64">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                      <Search size={14} />
                    </span>
                    <input 
                      type="text" 
                      placeholder="Buscar tarea..." 
                      value={scheduleSearch}
                      onChange={(e) => setScheduleSearch(e.target.value)}
                      className="w-full text-xs pl-9 pr-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-[#004A99] focus:ring-1 focus:ring-[#004A99]"
                    />
                  </div>
                </div>

                {/* Filter Tabs by Phase */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {['Todos', 'Preparación', 'Alumnos', 'Clases', 'Finanzas', 'Reportes', 'Despliegue'].map((filterName) => (
                    <button
                      key={filterName}
                      onClick={() => setScheduleFilter(filterName)}
                      className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                        scheduleFilter === filterName
                          ? 'bg-slate-900 text-white font-extrabold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                      }`}
                    >
                      {filterName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Responsive Columns Layout */}
              <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                {/* Left Task Table Column */}
                <div className="lg:col-span-5 p-4 overflow-y-auto max-h-[500px]">
                  <div className="space-y-2">
                    {filteredTasks.map((task) => (
                      <button
                        key={task.id}
                        onClick={() => setActiveScheduleTask(task.id)}
                        className={`w-full text-left p-3 rounded border text-xs transition-all duration-200 flex items-center justify-between gap-3 ${
                          activeScheduleTask === task.id
                            ? 'bg-slate-50 border-[#004A99] ring-2 ring-blue-50/50'
                            : 'bg-white hover:bg-slate-50 border-slate-150'
                        }`}
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded ${
                              task.type === 'parent' ? 'bg-slate-900 text-white' :
                              task.type === 'phase' ? 'bg-blue-100 text-[#004A99]' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {task.id}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">{task.duration}</span>
                          </div>
                          <p className={`truncate font-sans ${task.type !== 'task' ? 'font-bold text-slate-800' : 'text-slate-600 font-normal pl-1'}`}>
                            {task.title}
                          </p>
                        </div>
                        <ChevronRight size={14} className={`text-slate-400 shrink-0 transition-transform ${activeScheduleTask === task.id ? 'transform translate-x-1' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Timeline Chart Column */}
                <div className="lg:col-span-7 p-6 overflow-x-auto">
                  <div className="min-w-[700px] space-y-4">
                    {/* Month headers */}
                    <div className="grid grid-cols-6 border-b border-slate-200 pb-2 text-[10px] font-bold text-slate-500 font-mono text-center">
                      <div className="bg-slate-50 py-1 rounded">Set 25</div>
                      <div className="bg-slate-50 py-1 rounded">Oct 25</div>
                      <div className="bg-slate-50 py-1 rounded">Nov 25</div>
                      <div className="bg-slate-50 py-1 rounded">Dic 25</div>
                      <div className="bg-slate-50 py-1 rounded">Ene 26</div>
                      <div className="bg-slate-50 py-1 rounded">Feb 26</div>
                    </div>

                    {/* Timeline Grid Rows */}
                    <div className="space-y-3 relative py-2">
                      {/* Vertical Grid Line backgrounds */}
                      <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-6 pointer-events-none opacity-40">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="border-r border-dashed border-slate-200 h-full"></div>
                        ))}
                      </div>

                      {/* Displaying tasks timeline bars */}
                      {filteredTasks.map((task) => {
                        const barWidth = `${(task.durationWeeks / 24) * 100}%`;
                        const barLeft = `${(task.weekStart / 24) * 100}%`;
                        return (
                          <div 
                            key={task.id} 
                            onClick={() => setActiveScheduleTask(task.id)}
                            className={`group cursor-pointer flex flex-col justify-center py-1 rounded transition-colors ${
                              activeScheduleTask === task.id ? 'bg-slate-50/70' : 'hover:bg-slate-50/30'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1 px-1 font-mono">
                              <span className="truncate max-w-[200px] font-semibold text-slate-700">{task.id} {task.title}</span>
                              <span>{task.start} - {task.end}</span>
                            </div>
                            {/* Bar container */}
                            <div className="w-full bg-slate-100 h-5 rounded-full relative overflow-hidden shadow-inner border border-slate-150">
                              <div 
                                style={{ width: barWidth, left: barLeft }}
                                className={`absolute top-0 bottom-0 rounded-full h-full flex items-center px-3 text-[9px] font-bold text-white transition-all duration-300 ${
                                  task.type === 'parent' ? 'bg-slate-800' :
                                  task.parentId === '1.4.1' || task.id === '1.4.1' ? 'bg-blue-500' :
                                  task.parentId === '1.4.2' || task.id === '1.4.2' ? 'bg-emerald-500' :
                                  task.parentId === '1.4.3' || task.id === '1.4.3' ? 'bg-purple-500' :
                                  task.parentId === '1.4.4' || task.id === '1.4.4' ? 'bg-orange-500' :
                                  task.parentId === '1.4.5' || task.id === '1.4.5' ? 'bg-cyan-500' : 'bg-red-500'
                                } shadow-sm`}
                              >
                                <span className="truncate">{task.duration}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Details Display Box */}
              {activeTaskData && (
                <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-100 text-[#004A99] px-2.5 py-1 rounded font-mono">
                        Ficha Técnica de Tarea (Código {activeTaskData.id})
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-sans">{activeTaskData.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono bg-white p-2.5 rounded border border-slate-150">
                      <div>
                        <span className="text-[9px] text-slate-400 block">DURACIÓN</span>
                        <strong className="text-slate-800">{activeTaskData.duration}</strong>
                      </div>
                      <div className="border-l border-slate-200 h-6"></div>
                      <div>
                        <span className="text-[9px] text-slate-400 block">FECHA DE INICIO</span>
                        <strong className="text-slate-800">{activeTaskData.start}</strong>
                      </div>
                      <div className="border-l border-slate-200 h-6"></div>
                      <div>
                        <span className="text-[9px] text-slate-400 block">FECHA DE FIN</span>
                        <strong className="text-slate-800">{activeTaskData.end}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-2 text-xs font-light">
                    <div className="p-4 bg-white border border-slate-150 rounded space-y-2.5">
                      <h5 className="font-bold text-slate-800 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px] font-mono">
                        Responsable y Ejecutor
                      </h5>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-[#004A99]" />
                        <span className="text-slate-600 font-normal font-sans">{activeTaskData.responsible}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-sans pt-1">
                        Este rol es responsable de coordinar el desarrollo de las tareas, la recopilación de entradas y la entrega de artefactos correspondientes en las fechas estipuladas.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-150 rounded space-y-2.5">
                      <h5 className="font-bold text-slate-800 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px] font-mono">
                        Entregables y Evidencia (Salidas)
                      </h5>
                      <ul className="space-y-1.5">
                        {activeTaskData.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 font-sans leading-relaxed">
                            <span className="text-[#004A99] font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Gantt Original Chart Callout (With Lightbox support) */}
            <div className="bg-slate-900 text-white rounded-lg p-8 space-y-6 flex flex-col md:flex-row justify-between items-center gap-8 shadow-md border border-slate-800">
              <div className="space-y-3 max-w-2xl text-center md:text-left">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-600/80 text-white px-2.5 py-1 rounded font-mono">
                  Línea Base del Cronograma de Implementación
                </span>
                <h3 className="text-lg font-bold">Carta Gantt Completa de Implementación Académica</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Consulte el diagrama de Gantt original en alta resolución, que detalla la relación lógica Fin a Comienzo (FC), la ruta crítica para el MVP y el cronograma de hitos. El diagrama representa fielmente la secuencia lógica requerida para la puesta en producción del software.
                </p>
              </div>
              <button
                onClick={() => openLightbox('/cronograma.jpeg', 'Diagrama: Cronograma de Implementación - Sistema de Gestión Operativa MTDRIVING')}
                className="inline-flex items-center gap-2 bg-white border border-slate-100 hover:bg-slate-50 active:scale-95 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-5 py-4 rounded shadow-md hover:shadow-lg transition-all shrink-0 font-mono"
              >
                <Maximize2 size={14} /> Ver Carta Gantt Original
              </button>
            </div>

            {/* Scheduling Methodology Notes */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <Info size={16} className="text-[#004A99]" />
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Fundamentos de Gestión de Cronograma</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-600 font-light leading-relaxed">
                <div className="space-y-1.5">
                  <strong className="text-slate-800 font-bold block">Relaciones de Precedencia (FS)</strong>
                  <p>
                    Las tareas siguen una lógica de <span className="font-semibold text-slate-700">Comienzo a Fin (Finish-to-Start)</span>. Por ejemplo, el desarrollo de clases (1.4.3) no puede iniciar hasta concluir y validar el módulo de alumnos (1.4.2), lo cual elimina sobreposiciones.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <strong className="text-slate-800 font-bold block">La Ruta Crítica (Critical Path)</strong>
                  <p>
                    La ruta crítica del proyecto comprende las fases 1.4.1 (Preparación), 1.4.2 (Alumnos), 1.4.3 (Clases) y 1.4.4 (Financiero). Cualquier retraso en estos módulos principales pospone la fecha final de entrega.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <strong className="text-slate-800 font-bold block">Estrategia de Mitigación de Holgura</strong>
                  <p>
                    Se han programado holguras lógicas de 2 a 3 días entre fases para resolver observaciones recopiladas de los usuarios de prueba, evitando desbordes de recursos y sobretiempos durante las sprints.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
