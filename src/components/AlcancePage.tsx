import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, Search, CheckCircle2, ChevronRight,
  Folder, UserCheck, Settings, Maximize2, 
  ExternalLink, Lock, ListTodo, Award, CheckCircle,
  ShieldCheck, Eye, AlertCircle, ArrowUpRight
} from 'lucide-react';
import { useLightbox } from '../App';

export default function AlcancePage() {
  const { openLightbox } = useLightbox();
  const [activeTab, setActiveTab ] = useState<'plan' | 'requisitos' | 'matriz' | 'declaracion' | 'edt' | 'diccionario'>('plan');

  // Interactive states
  const [reqSearch, setReqSearch] = useState('');
  const [reqPriorityFilter, setReqPriorityFilter] = useState('Todos');
  const [reqCategoryFilter, setReqCategoryFilter] = useState('Todos');
  
  const [activeWbsNode, setActiveWbsNode] = useState<string>('1.0');

  // WBS Dictionary data
  const wbsDictionary: Record<string, {
    title: string;
    description: string;
    responsible: string;
    deliverables: string[];
    acceptance: string;
  }> = {
    '1.0': {
      title: "Sistema de Gestión Operativa MTDRIVING",
      description: "Solución digital destinada a optimizar la gestión académica y operativa de la escuela de manejo mediante la centralización de información y automatización de procesos.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Prototipos Navegables", "Código Fuente (MVP)", "Base de Datos NoSQL/Relacional", "Documento de Arquitectura"],
      acceptance: "Solución validada por el propietario de MTDRIVING y alineada con los requisitos aprobados."
    },
    '1.1': {
      title: "Gestión del Proyecto",
      description: "Habilita la correcta dirección del proyecto, asegurando que se cumplan las metas de cronograma, costo, alcance y calidad.",
      responsible: "Director del Proyecto / Gestor PMO",
      deliverables: ["Actas de reunión", "Plan de gestión inicial", "Monitoreo del avance"],
      acceptance: "Hitos cumplidos y reportes aprobados por patrocinadores."
    },
    '1.1.1': {
      title: "Planificación",
      description: "Definición de alcance, cronograma, riesgos, comunicaciones y estrategias del proyecto.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Acta de planificación", "Plan de Gestión del Alcance", "Plan de Gestión de Riesgos"],
      acceptance: "Documentos aprobados por el docente asesor."
    },
    '1.1.2': {
      title: "Seguimiento y Control",
      description: "Monitoreo del avance, control de cambios y seguimiento de hitos clave del proyecto.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Informes de avance", "Registro de incidencias"],
      acceptance: "Evidencia de seguimiento documentado."
    },
    '1.1.3': {
      title: "Gestión de Riesgos",
      description: "Identificación, análisis cualitativo y cuantitativo, y formulación de planes de respuesta a riesgos operativos.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Matriz de riesgos", "Plan de respuesta"],
      acceptance: "Riesgos evaluados y priorizados formalmente."
    },
    '1.2': {
      title: "Análisis y Definición",
      description: "Fase orientada a entender en profundidad la problemática del negocio y a definir formalmente los requisitos operacionales.",
      responsible: "Analista de Sistemas / Consultor UX",
      deliverables: ["Documento de requerimientos", "Mapa de empatía", "Definición del onboarding"],
      acceptance: "Requerimientos firmados por el cliente."
    },
    '1.2.1': {
      title: "Levantamiento de Requisitos",
      description: "Recopilación de necesidades operativas, financieras y académicas mediante entrevistas semiestructuradas, benchmarking de competidores y observación directa del negocio.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Documento de requisitos", "Registro de interesados"],
      acceptance: "Requisitos validados al 100% por el cliente."
    },
    '1.2.2': {
      title: "Design Thinking",
      description: "Aplicación secuencial de herramientas de innovación centradas en el usuario final del sistema.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Mapa de empatía", "Buyer Persona", "Diagrama de afinidad", "Técnica SCAMPER", "Storyboard de la solución"],
      acceptance: "Herramientas de empatía y definición completadas y documentadas adecuadamente."
    },
    '1.2.3': {
      title: "Alcance del Proyecto",
      description: "Definición formal del alcance de la solución, determinando qué elementos y módulos están incluidos y cuáles quedan expresamente excluidos.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Declaración del alcance", "Estructura de Desglose del Trabajo (EDT)"],
      acceptance: "Declaración del alcance aprobada formalmente por todas las partes interesadas."
    },
    '1.2.4': {
      title: "Requisitos del Sistema",
      description: "Especificación técnica detallada de los requisitos funcionales, de interfaz, seguridad, y rendimiento acordados para la solución.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Documento de requisitos del sistema", "Matriz de trazabilidad"],
      acceptance: "Requisitos trazables con valor comercial y consistentes metodológicamente."
    },
    '1.3': {
      title: "Diseño de la Solución",
      description: "Fase de especificación de la arquitectura técnica, modelo de datos y mockups del sistema interactivo.",
      responsible: "Arquitecto de Software / Diseñador UX/UI",
      deliverables: ["Esquemas de UI", "Diagramas de arquitectura", "Modelo entidad-relación de datos"],
      acceptance: "Línea base técnica revisada por equipo TI."
    },
    '1.3.1': {
      title: "Arquitectura",
      description: "Diseño de la estructura general de la solución digital, determinando las capas de presentación, lógica de negocio y persistencia de datos.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Diagrama de arquitectura", "Definición de tecnologías"],
      acceptance: "Arquitectura validada por el equipo de ingeniería."
    },
    '1.3.2': {
      title: "Base de Datos",
      description: "Diseño lógico y conceptual de la base de datos que soportará el registro de alumnos, coordinaciones de clases, pagos y auditoría.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Modelo entidad-relación", "Diccionario de datos"],
      acceptance: "Modelo de datos normalizado, íntegro y validado con los casos de negocio."
    },
    '1.3.3': {
      title: "Casos de Uso",
      description: "Definición del flujo de interacciones entre los diferentes actores (administrador, instructor, alumno) y el sistema propuesto.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Diagramas de casos de uso", "Especificaciones narrativas de casos de uso"],
      acceptance: "Casos de uso completos, trazables y consistentes."
    },
    '1.3.4': {
      title: "Mockups",
      description: "Diseño visual de alta fidelidad de las pantallas y flujos de navegación clave para la aprobación final del usuario.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Mockups estáticos", "Prototipo interactivo navegable"],
      acceptance: "Interfaces de usuario revisadas y aprobadas por el cliente."
    },
    '1.4': {
      title: "Desarrollo del Sistema",
      description: "Fase de construcción y codificación de los módulos de software acordados y la base de datos física.",
      responsible: "Líder de Desarrollo / Fullstack Devs",
      deliverables: ["Código funcional", "Esquema de BD implementado", "Filtros de auditoría"],
      acceptance: "Compilación sin errores y verificación funcional."
    },
    '1.4.1': {
      title: "Módulo Alumnos",
      description: "Gestión unificada de matrículas de estudiantes, expedientes académicos e información de contacto.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Registro de alumnos", "Consulta de alumnos", "Actualización de datos (CRUD)"],
      acceptance: "Operaciones CRUD sobre alumnos funcionando con validaciones correctas."
    },
    '1.4.2': {
      title: "Módulo Clases",
      description: "Gestión académica, asignación de instructores, vehículos y control de programación/reprogramación de clases prácticas.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Agenda de clases en tiempo real", "Módulo de programación", "Historial de clases"],
      acceptance: "Gestión de clases operativa, previniendo sobreposiciones de horarios."
    },
    '1.4.3': {
      title: "Base de Datos Implementada",
      description: "Construcción física y despliegue del modelo de base de datos relacional y de auditoría.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Scripts SQL de creación", "Tablas y vistas", "Relaciones y restricciones"],
      acceptance: "Persistencia correcta con integridad referencial activa."
    },
    '1.4.4': {
      title: "Integración de Módulos",
      description: "Fase de integración que asegura que el flujo de información entre alumnos, cobros, asistencia y coordinaciones funcione como un único sistema unificado.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Sistema integrado", "APIs de comunicación interna"],
      acceptance: "Flujo correcto de información extremo a extremo probado."
    },
    '1.5': {
      title: "Validación y Pruebas",
      description: "Fase destinada a certificar la corrección técnica del software, identificando defectos antes de la entrega final.",
      responsible: "Analista de Aseguramiento de Calidad (QA)",
      deliverables: ["Planes de prueba", "Reporte de vulnerabilidades", "Matriz de resultados de QA"],
      acceptance: "Sin bugs de prioridad crítica o alta."
    },
    '1.5.1': {
      title: "Pruebas Funcionales",
      description: "Ejecución de actividades de testing orientadas a constatar que cada requisito funcional se comporta según la declaración de alcance.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Casos de prueba redactados", "Resultados de pruebas documentados"],
      acceptance: "Cumplimiento del 100% de los requisitos definidos en el alcance."
    },
    '1.5.2': {
      title: "Corrección de Errores",
      description: "Diagnóstico y resolución de bugs y defectos críticos descubiertos en el periodo de aseguramiento de calidad.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Parches aplicados", "Registro de incidencias resueltas"],
      acceptance: "Errores críticos y de alto bloqueo completamente reparados."
    },
    '1.5.3': {
      title: "Validación con el Cliente",
      description: "Presentación formal y demo guiada del sistema con el dueño del negocio para obtener la firma de aceptación operacional.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Acta de validación firmada", "Feedback del cliente"],
      acceptance: "Conformidad firmada del propietario de MTDRIVING."
    },
    '1.6': {
      title: "Cierre del Proyecto",
      description: "Fase final que marca el término formal de las actividades académicas y contractuales acordadas.",
      responsible: "Director del Proyecto / Docente Asesor",
      deliverables: ["Informe de cierre", "Repositorio de código empaquetado", "Soporte documentado"],
      acceptance: "Entrega académica formalizada con nota aprobatoria."
    },
    '1.6.1': {
      title: "Entrega del MVP",
      description: "Suministro del Mínimo Producto Viable funcional (Front-end e interfaces de simulación) y entrega de accesos.",
      responsible: "Equipo del Proyecto",
      deliverables: ["MVP funcional en la nube", "Manuales de uso rápido"],
      acceptance: "MVP operativo, presentado y transferido eficientemente."
    },
    '1.6.2': {
      title: "Informe Final",
      description: "Consolidación de todo el análisis, diagnóstico y planificación del proyecto en un informe técnico de fin de carrera.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Documento oficial de informe final"],
      acceptance: "Documento revisado y aprobado satisfactoriamente por el docente asesor."
    },
    '1.6.3': {
      title: "Lecciones Aprendidas",
      description: "Reunión retrospectiva con el equipo para registrar los éxitos, errores de planificación y mejoras para futuros proyectos de TI.",
      responsible: "Equipo del Proyecto",
      deliverables: ["Documento de lecciones aprendidas sistematizadas"],
      acceptance: "Documento archivado en los activos de procesos del equipo."
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
                  Objetivo del Proceso
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Determinar, documentar y gestionar a nivel macro las necesidades de los interesados de la Escuela de Manejo para definir los requisitos específicos del sistema propuesto. El fin primario es asegurar que la solución tecnológica implementada contribuya activamente a mejorar la eficiencia operativa del negocio, el control administrativo, y la calidad percibida del servicio educativo brindado.
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Técnicas Utilizadas (PMBOK)</h4>
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
              <h3 className="text-xs font-extrabold text-[#004A99] uppercase tracking-[0.2em]">Identificación de Interesados clave</h3>
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
            className="space-y-8"
          >
            {/* Top overview row with visual zoom */}
            <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-50 text-[#004A99] px-2.5 py-1 rounded">
                  Estructura de Desglose del Trabajo (EDT)
                </span>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Interactúe haciendo clic en cualquier nodo para ver instantáneamente su Diccionario EDT correspondiente.
                </p>
              </div>

              {/* Zoom Trigger Button */}
              <button
                onClick={() => openLightbox('edt.png', 'Diagrama: Estructura de Desglose del Trabajo (EDT/WBS) completo')}
                className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-[#004A99] active:scale-95 text-[#004A99] text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded shadow-sm hover:shadow transition-all"
              >
                <Maximize2 size={12} /> Ver EDT Original en Pantalla Completa
              </button>
            </div>

            {/* Visual legend representation */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded flex flex-wrap justify-center gap-6 text-[9px] font-semibold tracking-wider uppercase font-mono shadow-xs">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-900 border border-slate-950 block rounded-xs" /> Nivel 1: Proyecto</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 border border-blue-600 block rounded-xs" /> Nivel 2: Fases de Dirección</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-500 border border-emerald-600 block rounded-xs" /> Nivel 3: Paquetes de Componentes</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-400 border border-amber-500 block rounded-xs" /> Nivel 4: Módulos Técnicos</span>
            </div>

            {/* Tree Org-Chart Layout */}
            <div className="space-y-6">
              
              {/* LEVEL 1: ROOT */}
              <div className="flex justify-center">
                <button
                  onClick={() => { setActiveWbsNode('1.0'); setActiveTab('diccionario'); }} 
                  className={`p-4 text-center cursor-pointer transition-all duration-200 group border text-white rounded-lg shadow-md max-w-sm w-full ${
                    activeWbsNode === '1.0' ? 'bg-slate-950 ring-4 ring-[#004A99]' : 'bg-slate-900 hover:bg-slate-950'
                  }`}
                >
                  <span className="font-mono text-[9px] font-bold text-slate-400 block bg-white/5 p-1 rounded-sm border border-white/5 mb-1">1.0 PROYECTO PRINCIPAL</span>
                  <h3 className="text-xs font-bold leading-tight">SISTEMA DE GESTIÓN OPERATIVA MTDRIVING</h3>
                  <p className="text-[8px] text-slate-300 italic font-light pt-1 group-hover:underline">Haga clic para ver definición</p>
                </button>
              </div>

              {/* Tree Connection Arrow */}
              <div className="flex justify-center text-slate-300 font-mono text-lg leading-none -my-2">↓</div>

              {/* LEVEL 2: SIX COLUMNS */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {[
                  { code: '1.1', title: 'GESTIÓN DEL PROYECTO', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.1.1', '1.1.2', '1.1.3'] },
                  { code: '1.2', title: 'ANÁLISIS Y DEFINICIÓN', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.2.1', '1.2.2', '1.2.3', '1.2.4'] },
                  { code: '1.3', title: 'DISEÑO DE LA SOLUCIÓN', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.3.1', '1.3.2', '1.3.3', '1.3.4'] },
                  { code: '1.4', title: 'DESARROLLO DEL SISTEMA', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.4.1', '1.4.2', '1.4.3', '1.4.4'] },
                  { code: '1.5', title: 'VALIDACIÓN Y PRUEBAS', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.5.1', '1.5.2', '1.5.3'] },
                  { code: '1.6', title: 'CIERRE DEL PROYECTO', bg: 'bg-blue-600 hover:bg-blue-700', children: ['1.6.1', '1.6.2', '1.6.3'] },
                ].map(node => (
                  <div key={node.code} className="space-y-4">
                    {/* Node level 2 */}
                    <button
                      onClick={() => { setActiveWbsNode(node.code); setActiveTab('diccionario'); }}
                      className="p-3 text-center cursor-pointer transition-all border text-white rounded-lg shadow-sm w-full block group min-h-[90px] bg-blue-600 hover:bg-blue-700"
                    >
                      <span className="font-mono text-[8px] font-bold block text-blue-200 tracking-widest uppercase mb-1">Nivel 2 (Fase)</span>
                      <strong className="text-[10px] tracking-tight block border-t border-white/10 pt-1 leading-tight">{node.code} {node.title}</strong>
                      <p className="text-[7px] text-blue-200 font-mono italic pt-2 opacity-80 group-hover:underline">Ver detalles</p>
                    </button>

                    {/* Node connection arrow */}
                    <div className="text-center text-slate-300 font-mono text-sm leading-none -my-2">↓</div>

                    {/* Node level 3 Children */}
                    <div className="space-y-2">
                      {node.children.map(childCode => {
                        const childData = wbsDictionary[childCode];
                        return (
                          <button
                            key={childCode}
                            onClick={() => { setActiveWbsNode(childCode); setActiveTab('diccionario'); }}
                            className="p-2 border border-emerald-200 hover:border-emerald-400 bg-white hover:bg-emerald-50/50 cursor-pointer text-slate-800 rounded shadow-xs w-full text-left font-sans block group"
                          >
                            <span className="font-mono text-[8px] font-extrabold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded uppercase block w-max leading-none mb-1">{childCode} COMPONENTE</span>
                            <strong className="text-[10px] text-slate-900 leading-snug block font-semibold">{childData ? childData.title : 'Cargando...'}</strong>
                            <p className="text-[7px] text-slate-400 font-light italic leading-none pt-1">Ver diccionario</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note about work packages of level 4 */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 space-y-2 flex gap-4">
              <AlertCircle size={24} className="text-amber-500 shrink-0 self-center" />
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-800 block">Detalle de Paquetes de Trabajo de Nivel 4 (EDT/WBS)</span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Bajo los componentes sustantivos, se desglosan sub-paquetes o paquetes de trabajo detallados de nivel 4 tales como: <strong className="text-slate-800">1.4.1.1 Registro de Alumnos</strong>, <strong className="text-slate-800">1.4.1.2 Consultas de Alumnos Académicos</strong>, <strong className="text-slate-800">1.4.3.1 Diseño de Datos</strong>, <strong className="text-slate-800">1.4.3.2 Creación de Tablas</strong>, <strong className="text-slate-800">1.5.1.1 Integración de Módulos (Tests)</strong>. Todos ellos están estructurados y se pueden contrastar en detalle en la vista original.
                </p>
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
      </div>
    </main>
  );
}
