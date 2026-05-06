import type { ProjectData } from './types';

export const PROJECT_DATA: ProjectData = {
  title: "Diagnóstico Estructural de Sistemas de Información bajo PMBOK",
  subtitle: "Análisis Integral de Procesos en una Escuela de Manejo",
  university: "Universidad Nacional Tecnológica de Lima Sur (UNTELS)",
  faculty: "Ingeniería de Sistemas",
  context: "La empresa es una escuela de manejo que opera con alta demanda, captando clientes principalmente a través de TikTok y gestionándolos mediante WhatsApp Business. Atiende entre 30 y 50 clientes semanales, pero todos sus procesos son manuales. La gestión de alumnos, horarios y pagos (realizados con Yape) se lleva sin registros formales, lo que genera desorden, errores y falta de control. Además, no cuentan con indicadores claros ni planificación del mantenimiento de vehículos. En conjunto, el negocio presenta problemas de organización, control y escalabilidad debido a la ausencia de herramientas digitales, a pesar de su crecimiento y potencial en el mercado.",
  objective: "Evaluar la madurez tecnológica y operativa de la escuela de manejo para identificar cuellos de botella en la gestión de alumnos, programación de recursos y control de pagos, utilizando el marco del PMBOK para garantizar un análisis estructurado.",
  justification: "La necesidad de estandarizar procesos en negocios en crecimiento es crítica para evitar la pérdida de información y mejorar la calidad del servicio al cliente. Desde una perspectiva académica, este estudio permite aplicar teorías de gestión en entornos reales.",
  framework: "Project Management Body of Knowledge (PMBOK) - Enfoque en Procesos de Inicio y Planificación.",
  scope: [
    "Modelado de procesos operativos (Inscripción, Clases, Pagos)",
    "Auditoría del uso de tecnología (Hojas de cálculo, Mensajería)",
    "Análisis de la gestión de datos e integridad de información",
    "Evaluación de la coordinación de recursos (Vehículos e Instructores)"
  ],
  nature: "Este trabajo es de carácter estrictamente académico y analítico. No persigue fines comerciales, no implica una implementación obligatoria ni genera costos para las partes involucradas.",
  inputs: {
    interviewContext: "Se realizó una entrevista semiestructurada de 33 minutos vía Google Meet con el dueño de la escuela de manejo. El propósito fue recopilar información operativa, financiera, técnica y estratégica del negocio para fundamentar el diagnóstico bajo un enfoque académico sistémico.",
    questions: [
      { category: "Operativo", question: "¿Cuántos alumnos atiende por semana en temporada normal y en temporada pico?", objective: "Analizar la capacidad de carga del sistema y la elasticidad de la demanda." },
      { category: "Operativo", question: "¿Cuántas horas semanales opera la academia actualmente?", objective: "Determinar la disponibilidad de recursos y el nivel de explotación de activos." },
      { category: "Operativo", question: "¿Cómo organiza los horarios de cada alumno? ¿Usa algún cuaderno, celular o lo hace de memoria?", objective: "Identificar la dependencia de procesos manuales y el riesgo de pérdida de información." },
      { category: "Operativo", question: "¿Con qué frecuencia se cruzan los horarios de dos o más alumnos? ¿Cómo lo resuelve?", objective: "Evaluar la eficiencia del algoritmo de programación actual y el impacto en la satisfacción del cliente." },
      { category: "Operativo", question: "¿Atiende a varios alumnos al mismo tiempo? ¿Cuántos como máximo?", objective: "Establecer los límites de la capacidad de servicio simultáneo." },
      { category: "Financiero", question: "¿Cómo registra los cobros que recibe por Yape? ¿Existe algún control o solo lo revisa en el celular?", objective: "Detectar vulnerabilidades en la conciliación de ingresos y registros de caja." },
      { category: "Financiero", question: "¿Ha tenido problemas con cobros no confirmados o pagos duplicados? ¿Con qué frecuencia?", objective: "Cuantificar el riesgo operativo y financiero por falta de validación automatizada." },
      { category: "Financiero", question: "¿Cobra por hora o por paquete de clases? ¿Existe alguna tarifa diferenciada?", objective: "Analizar la estructura de precios y la complejidad del modelo de facturación." },
      { category: "Financiero", question: "¿Quién lleva la contabilidad del negocio actualmente? ¿Cómo accede a los datos de ingresos?", objective: "Mapear el flujo de información contable y la accesibilidad de datos financieros." },
      { category: "Técnico", question: "¿Cuántos vehículos tiene actualmente en operación? ¿En qué estado se encuentran?", objective: "Evaluar la infraestructura crítica y su ciclo de vida." },
      { category: "Técnico", question: "¿Cómo lleva el control del mantenimiento de cada vehículo (aceite, llantas, revisiones)?", objective: "Analizar el nivel de proactividad en la gestión de activos fijos." },
      { category: "Técnico", question: "¿Ha tenido algún incidente por no realizar a tiempo un mantenimiento? ¿Qué pasó?", objective: "Identificar riesgos de seguridad y costos por paradas no programadas." },
      { category: "Técnico", question: "¿Con qué frecuencia aproximada hace cada tipo de mantenimiento por vehículo?", objective: "Establecer la recurrencia operativa de los procesos de soporte técnico." },
      { category: "Operativo", question: "¿Cómo llegan los alumnos a la academia? ¿Qué porcentaje viene de TikTok y cuánto por referidos?", objective: "Evaluar la efectividad de los canales de captación y dependencia de plataformas externas." },
      { category: "Operativo", question: "¿Por qué el live de TikTok fue reducido de 9 horas a 20 minutos? ¿Qué quejas recibieron?", objective: "Analizar la gestión de crisis y la adaptabilidad a políticas de plataformas digitales." },
      { category: "Operativo", question: "¿Qué hace con los leads que llegan durante el live? ¿Los contacta de inmediato o los pierde?", objective: "Medir la tasa de conversión y la eficiencia del embudo de ventas." },
      { category: "Operativo", question: "¿Cómo ordena a los nuevos alumnos una vez que contactan por WhatsApp?", objective: "Verificar la estructura de gestión de relaciones con clientes (CRM) informal." },
      { category: "Externo", question: "¿Qué tipo de accesorios o productos desea vender como nueva línea de negocio?", objective: "Evaluar la viabilidad de expansión y diversificación del portafolio." },
      { category: "Externo", question: "¿Cuál es el principal problema que tiene con el Turing y los demás inquilinos del circuito?", objective: "Mapear los riesgos de gobernanza y dependencias del entorno externo." },
      { category: "Externo", question: "¿Cuánto tiempo podría dedicar semanalmente a aprender y usar herramientas digitales?", objective: "Determinar la viabilidad del cambio organizacional y capacitación técnica." },
      { category: "Externo", question: "¿Estaría dispuesto a delegar la administración del sistema digital a su hermano?", objective: "Analizar la estructura de roles y permisos para una futura implementación." }
    ],
    projectCharter: {
      project: "Digitalización de procesos de la academia de manejo con Google Forms, Sheets, Calendar y Drive, sin costo de software.",
      sponsor: "Dueño de la academia.",
      stakeholders: "Dueño, hermano, prima, abuelo y alumnos.",
      term: "4 meses."
    },
    businessDocuments: {
      businessCase: "Academia informal con 30–50 alumnos semanales, operación 100% manual, cobros por Yape sin registro, cruces de horario frecuentes y mantenimiento de flota sin control.",
      expectedBenefits: "Cero cruces de horario, 100% de cobros registrados, alertas de mantenimiento automatizadas e inventario de accesorios habilitado."
    },
    identifiedStakeholders: [
      { id: "01", name: "Dueño", type: "Interno", role: "Director operativo e instructor principal", responsibility: "Patrocinador. Aprueba fases y usa Calendar y Sheets de caja." },
      { id: "02", name: "Hermano", type: "Interno", role: "Instructor secundario y encargado de redes", responsibility: "Champion del proyecto. Administra Forms, Sheets de alumnos y captación por TikTok." },
      { id: "03", name: "Prima", type: "Interno", role: "Contabilidad y representante legal", responsibility: "Valida el reporte mensual de caja generado en Sheets." },
      { id: "04", name: "Abuelo", type: "Interno", role: "Responsable de mantenimiento de flota", responsibility: "Ejecuta mantenimientos según alertas recibidas por WhatsApp desde Calendar." },
      { id: "05", name: "Alumnos", type: "Interno", role: "Clientes del servicio (30–50/semana)", responsibility: "Completan el Form de registro y reciben confirmación de horario por WhatsApp" },
      { id: "06", name: "Leads/TikTok", type: "Externo", role: "Potenciales clientes vía live", responsibility: "Reciben el link al Form por WhatsApp Business para formalizar su inscripción." },
      { id: "07", name: "Turing/Circuito", type: "Externo", role: "Administrador del espacio operativo", responsibility: "No participa. La digitalización reduce conflictos y mejora la relación con ellos." },
      { id: "08", name: "MTC", type: "Externo", role: "Regulador del sector de conducción", responsibility: "No involucrado. El proyecto alinea la academia con estándares mínimos del sector." }
    ],
    projectDocs: {
      changeLog: "No existe formalmente al inicio del proyecto. Se creará durante la implementación para documentar cualquier ajuste en el alcance, como agregar nuevas hojas al Sheets o modificar el flujo del Form de registro.",
      issueLog: "Se identificaron incidentes previos conocidos: cobros por Yape no confirmados, cruces de horario entre alumnos, olvidos de mantenimiento de vehículos y reducción del live de TikTok de 9h a 20 min por quejas de usuarios.",
      requirementsDoc: "Los requisitos fueron levantados en la entrevista al dueño: registrar nombre, DNI y teléfono de alumnos; controlar horarios de 2–3 alumnos por hora; registrar cada pago Yape con foto de comprobante; programar alertas de mantenimiento por vehículo; y habilitar un inventario básico de accesorios."
    },
    agreements: "El dueño aceptó participar en la entrevista de diagnóstico y comprometió su disposición a implementar el sistema digital propuesto por el equipo del proyecto.",
    eefs: {
      culture: "Cultura centralizada: Todas las decisiones dependen del dueño, sin delegación formal.",
      environment: "Entorno hostil: Alta competencia y conflictos activos con el Turing y otros inquilinos.",
      tiktok: "TikTok limitado: Live reducido de 9h a 20 min por quejas, afectando la captación.",
      team: "Equipo poco digitalizado: Solo el hermano tiene experiencia en herramientas digitales."
    },
    opas: {
      ownerKnowledge: "Conocimiento tácito del dueño: Toda la información de horarios, alumnos y cobros reside en la memoria del dueño; no existe ningún documento de respaldo.",
      brotherExperience: "Experiencia del hermano en redes: Manejo de TikTok y WhatsApp Business como único activo digital previo del negocio.",
      manualAccounting: "Contabilidad manual de la prima: Registros informales de ingresos llevados sin formato estándar ni herramienta digital.",
      noTemplates: "Sin plantillas ni registros previos: No existen proyectos anteriores, lecciones aprendidas ni documentación de procesos. Este proyecto es el primer intento de formalización digital de la academia."
    }
  },
  outputs: {
    stakeholderRegister: [
      { id: "INT-001", name: "Dueño del negocio", role: "Patrocinador / Tomador de decisiones", interest: "Alto", power: "Alto", strategy: "Gestionar de cerca" },
      { id: "INT-002", name: "Instructor de manejo", role: "Usuario del sistema / Ejecutor operativo", interest: "Alto", power: "Medio", strategy: "Mantener informado" },
      { id: "INT-003", name: "Alumnos / Clientes", role: "Beneficiario final del servicio", interest: "Medio", power: "Bajo", strategy: "Monitorear" },
      { id: "INT-004", name: "Proveedor de herramientas digitales", role: "Soporte técnico externo", interest: "Bajo", power: "Bajo", strategy: "Monitorear" }
    ],
    changeRequests: [
      { id: "SC-001", description: "Digitalizar el registro manual de alumnos en WhatsApp", area: "Gestión de alumnos", priority: "Alta", status: "Aprobada" },
      { id: "SC-002", description: "Implementar sistema de control de pagos por Yape", area: "Finanzas", priority: "Alta", status: "Aprobada" },
      { id: "SC-003", description: "Automatizar la programación de horarios de clases", area: "Operaciones", priority: "Media", status: "En evaluación" },
      { id: "SC-004", description: "Establecer control preventivo de mantenimiento de vehículos", area: "Logística / Flota", priority: "Media", status: "En evaluación" },
      { id: "SC-005", description: "Generar indicadores clave (KPIs) del negocio", area: "Dirección / Gestión", priority: "Media", status: "Propuesta" }
    ],
    planUpdates: [
      { document: "Plan de Gestión de Requisitos", update: "Incorporar requisitos funcionales del sistema digital (módulo de alumnos, pagos y horarios)", justification: "Se identificaron nuevas necesidades de digitalización durante el análisis del negocio" },
      { document: "Plan de Gestión de Comunicaciones", update: "Definir canales formales (WhatsApp Business, correo) y frecuencia de reporte al dueño", justification: "La gestión actual es informal; se requiere una estructura comunicacional para el proyecto" },
      { document: "Plan de Gestión de Riesgos", update: "Añadir riesgos operativos identificados: resistencia al cambio, fallas técnicas y baja adopción digital", justification: "El entorno informal del negocio eleva la probabilidad de riesgos durante la implementación" },
      { document: "Plan de Involucramiento de Interesados", update: "Actualizar estrategias de involucramiento según el registro de interesados generado", justification: "Se identificaron 4 grupos de interesados con distintos niveles de poder e interés" }
    ],
    docUpdates: [
      { document: "Registro de Supuestos", update: "Supuestos identificados durante el análisis del negocio", detail: "Se asume que el dueño adoptará las herramientas digitales propuestas y que contará con conectividad básica" },
      { document: "Registro de Incidentes", update: "Incidentes operativos detectados durante el levantamiento de información", detail: "Cruces de horarios, pagos no registrados, ausencia de base de datos y mantenimiento reactivo de vehículos" },
      { document: "Registro de Riesgos", update: "Riesgos iniciales del proyecto documentados", detail: "Resistencia al cambio del personal, pérdida de datos en la migración y baja disponibilidad del dueño para reuniones" }
    ]
  },
  tools: {
    interviews: "Entrevistas estructuradas con el personal clave para identificar puntos de dolor.",
    observation: "Observación directa de los procesos de atención al cliente y registro de datos.",
    registration: "Documentación técnica de los artefactos de información actuales (formularios, excels).",
    interviewAnalysis: "Se realizaron sesiones de preguntas abiertas con el encargado del negocio para entender la lógica detrás de la asignación de horarios y la gestión de la flota. El análisis se centró en la metodología de trabajo más que en la transcripción literal, identificando que la mayoría de decisiones se basan en la experiencia empírica más que en datos históricos.",
    interviewStructured: {
      summary: "Diagnóstico situacional de una escuela de manejo con alta demanda operativa (30-50 clientes/semana) y procesos netamente empíricos, familiares y manuales, con una fuerte dependencia de canales digitales informales para la captación.",
      categories: [
        {
          title: "Operación del negocio",
          content: "Estructura de mando centralizada en el dueño, apoyada por un núcleo familiar (hermano en redes, prima en contabilidad, abuelo en mantenimiento). Opera entre 60 y 120 horas semanales atendiendo a un volumen considerable de alumnos en un entorno de alta competencia y conflictos externos (circuito de manejo)."
        },
        {
          title: "Gestión de alumnos",
          content: "La captación es digital (TikTok Lives) y la gestión de prospectos se realiza a través de WhatsApp Business, donde se solicitan datos básicos (Nombre, DNI, teléfono). No existe una base de datos centralizada, los alumnos se 'ordenan' conforme llegan por mensajería."
        },
        {
          title: "Programación de clases",
          content: "La agenda es controlada directamente por el dueño, organizando flujos de 2 a 3 alumnos por hora. Aunque los cruces de horarios son poco frecuentes, la asignación es manual y carece de un sistema de reservas que brinde visibilidad al cliente o al equipo."
        },
        {
          title: "Gestión de pagos",
          content: "El modelo de ingresos se basa en el cobro por hora de instrucción, no por paquetes cerrados. El medio de pago predominante es Yape, lo cual genera dificultades de conciliación y control de caja al no contar con un registro formalizado de ingresos."
        },
        {
          title: "Uso de tecnología",
          content: "El ecosistema tecnológico se limita a WhatsApp Business para la gestión comercial y social media (TikTok). Existe una ausencia total de software de gestión (ERP/CRM), realizándose todo de forma física o mediante procesos manuales susceptibles a errores."
        },
        {
          title: "Recursos (vehículos e instructores)",
          content: "Flota compuesta por 2 automóviles (uno nuevo, el resto antiguos) y 4 motocicletas. La instrucción es realizada por el dueño y su hermano. El mantenimiento es reactivo y artesanal, con riesgos de omisión en servicios preventivos básicos (filtros, aceite, llantas)."
        },
        {
          title: "Problemas detectados",
          content: "Alto desorden administrativo, procesos manuales sin respaldo, falta de automatización y dependencia crítica de la presencia del dueño. Conflictos en el entorno operativo (inquilinos del circuito) e incidencias de seguridad previas que afectan la continuidad."
        },
        {
          title: "Objetivos o aspiraciones del negocio",
          content: "Deseo de profesionalización mediante una página web y uso de herramientas de oficina (Excel) para ventas de accesorios. Se busca expandir el modelo de negocio a la comercialización de cascos y repuestos, además de obtener reportes claros de rendimiento mensual."
        }
      ],
      keyFindings: [
        "Vulnerabilidad operativa: Alta dependencia del dueño para la toma de decisiones y control de procesos críticos.",
        "Informalidad digital: Gestión de clientes 100% dependiente de hilos de chat sin trazabilidad ni reportabilidad estadística.",
        "Mantenimiento en riesgo: La falta de una planificación de mantenimiento preventivo compromete la seguridad y la vida útil de los activos (vehículos).",
        "Falta de escalabilidad: El modelo actual está al límite de su capacidad manual, lo que impide un crecimiento sostenido hacia la venta de productos complementarios."
      ]
    }
  },
  stakeholders: [
    {
      role: "Dueño del Negocio",
      description: "Responsable de la dirección general y validación de hallazgos.",
      power: "Alto",
      interest: "Alto",
      strategy: "Gestión directa y validación constante de cada hito del diagnóstico."
    },
    {
      role: "Instructores",
      description: "Operadores directos que generan y consumen datos de clases.",
      power: "Medio",
      interest: "Alto",
      strategy: "Comunicación operativa para entender la viabilidad del registro de clases."
    },
    {
      role: "Personal Administrativo",
      description: "Encargados del registro de inscripciones y gestión de pagos.",
      power: "Medio",
      interest: "Alto",
      strategy: "Coordinación frecuente para mapear el flujo de caja e información."
    },
    {
      role: "Alumnos",
      description: "Usuarios finales del servicio cuya información es el núcleo del sistema.",
      power: "Bajo",
      interest: "Medio",
      strategy: "Interacción indirecta mediante el análisis de su experiencia de usuario."
    },
    {
      role: "Equipo del Proyecto",
      description: "Estudiantes de UNTELS encargados del diagnóstico sistemático.",
      power: "Alto",
      interest: "Alto",
      strategy: "Gestión interna del proyecto y producción del entregable académico."
    }
  ],
  methodology: [
    { id: "1", title: "Levantamiento", description: "Entrevistas y observación directa del flujo de trabajo." },
    { id: "2", title: "Modelado", description: "Representación de procesos actuales (As-Is)." },
    { id: "3", title: "Evaluación", description: "Auditoría de herramientas y silos de información." },
    { id: "4", title: "Diagnóstico", description: "Identificación de puntos críticos y brechas." },
    { id: "5", title: "Propuesta", description: "Formulación de recomendaciones de mejora." }
  ]
};
