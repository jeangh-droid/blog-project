import type { ProjectData } from './types';

export const PROJECT_DATA: ProjectData = {
  title: "Diagnóstico Estratégico y Plan de Transformación Digital",
  subtitle: "Escuela de Manejo Moto Driving",
  university: "Recopilación de Pruebas, Análisis de Problemas y Plan de Objetivos",
  faculty: "Diagnóstico Académico",
  context: "La Escuela de Manejo Moto Driving es un negocio dedicado a la enseñanza de conducción de motocicletas en Lima, Perú. Opera principalmente a través de canales digitales informales para la captación y atención de clientes potenciales.",
  objective: "Mejorar la eficiencia operativa y la calidad del servicio educativo mediante la digitalización estratégica e integración de procesos clave.",
  justification: "La transición del diagnóstico a la solución busca transformar la gestión informal y desorganizada en un sistema estructurado, respaldado por datos y herramientas de gestión empresarial.",
  framework: "Project Management Body of Knowledge (PMBOK) 7th Edition",
  scope: [
    "Digitalización de canales de contacto",
    "Automatización de sistema de cobros",
    "Gestión centralizada de alumnos y horarios",
    "Control de mantenimiento de flota",
    "Análisis de involucrados y gestión del cambio"
  ],
  nature: "Este diagnóstico integra la recopilación de evidencias, el análisis de problemas mediante el árbol de causas y efectos, y la formulación de objetivos estratégicos para la transformación digital.",
  recopilacion: {
    contexto: {
      descripcion: "Negocio de enseñanza de motocicletas en Lima, enfocado en captación mediante TikTok y WhatsApp Business.",
      canales: [
        "Precio de la práctica: S/40 soles la hora.",
        "Moto semiautomática incluida.",
        "Instructor y circuito de práctica.",
        "Enseñanza desde cero (equilibrio, frenos, acelerador).",
        "Circuito con 4 ejercicios oficiales del examen.",
        "Horario: Lunes a domingo, 8:30 am a 5 pm (coordinación previa).",
        "Ubicación: Touring de Conchan km21."
      ],
      presenciaTikTok: {
        perfil: "@mtdrivingschool",
        seguidores: "22.8K",
        likes: "10.3K",
        vistas: "239K",
        link: "beacons.ai/motodrivingschool"
      },
      sistemaCobros: "Pagos informales vía app Yape a nombre de Giovanni Steven Salvador. Sin sistema de registro formal."
    },
    informacion: {
      primaria: [
        { fuente: "Observación directa", descripcion: "Procesos de gestión de alumnos, horarios y mantenimiento.", medio: "Registro visual y apuntes" },
        { fuente: "Reunión con el dueño", descripcion: "Validación de procesos y roles clave.", medio: "Acta de reunión" },
        { fuente: "Chats de WhatsApp", descripcion: "Solicitudes de servicios y respuestas manuales.", medio: "Capturas de pantalla" },
        { fuente: "Pagos por Yape", descripcion: "Cobros sin integración contable.", medio: "Capturas de pantalla" },
        { fuente: "TikTok del negocio", descripcion: "Canal de difusión y presencia digital activa.", medio: "Capturas de pantalla" }
      ],
      secundaria: [
        "Acta de constitución del proyecto.",
        "Análisis de interesados (stakeholders).",
        "Registros informales de operación.",
        "Evidencia digital en redes sociales (WhatsApp, Yape, TikTok)."
      ]
    },
    analisisProblema: {
      central: "Gestión informal y desorganizada de los procesos operativos, lo que genera pérdida de clientes, errores en el registro y baja eficiencia.",
      causasDirectas: [
        { causa: "Ausencia de sistema de gestión digital", evidencia: "Operación manejada por WhatsApp y Yape sin integración." },
        { causa: "Falta de automatización en atención", evidencia: "Mensaje de bienvenida manual dependiendo de disponibilidad." },
        { causa: "Registro de pagos informal", evidencia: "Cobros no consolidados en sistema contable." },
        { causa: "Gestión manual de horarios", evidencia: "Sin plataforma que organice turnos de clases." }
      ],
      causasIndirectas: [
        "Desconocimiento de herramientas de gestión empresarial.",
        "Bajo presupuesto inicial para tecnología.",
        "Crecimiento sin planificación estructural.",
        "Dependencia de apps de uso personal (Yape, WhatsApp)."
      ],
      efectosDirectos: [
        { efecto: "Pérdida de clientes potenciales", descripcion: "Falta de respuesta rápida motiva a optar por otra escuela." },
        { efecto: "Errores en el control de pagos", descripcion: "Dificultad para identificar alumnos morosos o pagos dobles." },
        { efecto: "Desorganización en horarios", descripcion: "Riesgo de cruces entre alumnos e instructores." },
        { efecto: "Falta de seguimiento académico", descripcion: "Sin registro del avance de formación del alumno." }
      ],
      efectosIndirectos: [
        "Deterioro de reputación por demoras o errores.",
        "Limitación del crecimiento y escalabilidad.",
        "Dificultad para toma de decisiones estratégicas.",
        "Sobrecarga operativa para el dueño.",
        "Riesgo financiero por falta de reportes confiables."
      ],
      verificacion: [
        { elemento: "Problema central", descripcion: "Gestión informal y desorganizada.", evidencia: "WhatsApp, Yape, observación directa.", estado: "Verificado" },
        { elemento: "Causa 1", descripcion: "Ausencia de sistema digital.", evidencia: "No existe CRM o ERP.", estado: "Verificado" },
        { elemento: "Causa 2", descripcion: "Atención no automatizada.", evidencia: "Mensaje manual confirmado.", estado: "Verificado" },
        { elemento: "Causa 3", descripcion: "Pagos informales.", evidencia: "Yape sin integración contable.", estado: "Verificado" },
        { elemento: "Causa 4", descripcion: "Gestión manual de horarios.", evidencia: "Sin plataforma de agendamiento.", estado: "Verificado" }
      ]
    },
    analisisObjetivos: {
      transicion: "Transformar el diagnóstico en una solución que proyecte positivamente la eficiencia operativa y el crecimiento estructurado del negocio.",
      central: "Mejorar la eficiencia operativa y la calidad del servicio mediante la digitalización estratégica e integración de procesos clave.",
      mediosTecnologicos: [
        "Implementar sistema integrado de gestión (Clases, Pagos, Inscripciones).",
        "Habilitar plataforma multicanal automatizada (WhatsApp).",
        "Desplegar dashboards de seguimiento académico en tiempo real."
      ],
      mediosGestion: [
        "Ejecutar programa de gestión del cambio y capacitación por roles.",
        "Definir política institucional de inversión y gobernanza tecnológica.",
        "Actualizar infraestructura TI y certificar proveedores (SLA)."
      ],
      finesOperativos: [
        "Alta satisfacción y lealtad del estudiante (oferta ágil).",
        "Optimización de procesos (personal enfocado en calidad decente).",
        "Toma de decisiones basadas en datos e información estratégica."
      ],
      finesComerciales: [
        "Reputación institucional fortalecida y mayor captación.",
        "Capacidad de escalar operaciones con eficiencia de costos.",
        "Posicionamiento como líder en calidad digital."
      ],
      verificacion: [
        { medio: "Sistema integrado", contribucion: "Centraliza y ordena procesos clave.", fin: "Escalabilidad con eficiencia." },
        { medio: "Plataforma multicanal", contribucion: "Mejora radical del servicio preventa.", fin: "Alta satisfacción y lealtad." },
        { medio: "Dashboards de control", contribucion: "Aporta métricas académicas reales.", fin: "Decisiones estratégicas confiables." },
        { medio: "Gestión del cambio", contribucion: "Garantiza adopción por parte de interesados.", fin: "Optimización real de procesos." },
        { medio: "Infraestructura TI", contribucion: "Brinda entorno tecnológico seguro.", fin: "Reputación y posicionamiento." }
      ]
    }
  },
  salida: {
    planInvolucramiento: {
      introduccion: "En concordancia con el enfoque de PMBOK 7, el análisis de involucrados considera a las personas y actores que influyen en la transformación digital.",
      estrategia: [
        "Propietario: Involucramiento estrecho en validación de hallazgos y decisiones clave.",
        "Personal/Instructores: Consulta sobre barreras operativo y flujos para evitar resistencia.",
        "Alumnos: Consideración de experiencia mediante análisis de evidencia indirecta."
      ],
      matriz: [
        { involucrado: "Dueño de MTDRIVING", interes: "Alto", influencia: "Alto", expectativa: "Ordenar el negocio y reducir carga operativa.", estrategia: "Participación activa y validación continua." },
        { involucrado: "Personal Administrativo / Familiar", interes: "Alto", influencia: "Medio", expectativa: "Facilitar coordinación de alumnos y pagos.", estrategia: "Consulta temprana y recogida de necesidades." },
        { involucrado: "Instructores", interes: "Medio-Alto", influencia: "Medio", expectativa: "Mejor organización de clases y horarios.", estrategia: "Coordinación operativa y retroalimentación constante." },
        { involucrado: "Alumnos / Clientes", interes: "Alto", influencia: "Bajo", expectativa: "Atención rápida, orden y buen servicio.", estrategia: "Monitoreo de experiencia y satisfacción." },
        { involucrado: "Proveedores Tecnológicos", interes: "Medio", influencia: "Bajo", expectativa: "Implementación técnica futura exitosa.", estrategia: "Evaluación como soporte técnico potencial." },
        { involucrado: "Entorno físico / Circuito", interes: "Medio", influencia: "Medio", expectativa: "Condiciona la operación diaria.", estrategia: "Gestión como restricción externa y riesgo." }
      ]
    }
  },
  tools: {
    interviewStructured: {
      summary: "Diagnóstico situacional de una escuela de manejo con alta demanda operativa (30-50 clientes/semana) y procesos netamente empíricos, familiares y manuales, con una fuerte dependencia de canales digitales informales para la captación.",
      categories: [
        { title: "Operación del negocio", content: "Estructura de mando centralizada en el dueño, apoyada por un núcleo familiar (hermano en redes, prima en contabilidad, abuelo en mantenimiento)." },
        { title: "Gestión de alumnos", content: "La captación es digital (TikTok Lives) y la gestión de prospectos se realiza a través de WhatsApp Business. No existe una base de datos centralizada." },
        { title: "Programación de clases", content: "La agenda es controlada directamente por el dueño, organizando flujos de 2 a 3 alumnos por hora de forma manual." },
        { title: "Gestión de pagos", content: "El medio de pago predominante es Yape, lo cual genera dificultades de conciliación y control de caja." },
        { title: "Uso de tecnología", content: "El ecosistema tecnológico se limita a WhatsApp Business y social media (TikTok). Ausencia total de software de gestión (ERP/CRM)." },
        { title: "Recursos (vehículos e instructores)", content: "Flota compuesta por 2 automóviles y 4 motocicletas. Mantenimiento reactivo y artesanal." },
        { title: "Problemas detectados", content: "Alto desorden administrativo, falta de automatización y dependencia crítica de la presencia del dueño." },
        { title: "Aspiraciones del negocio", content: "Deseo de profesionalización mediante una página web y herramientas de oficina para ventas de accesorios." }
      ],
      keyFindings: [
        "Vulnerabilidad operativa: Alta dependencia del dueño para la toma de decisiones.",
        "Informalidad digital: Gestión de clientes 100% dependiente de hilos de chat sin trazabilidad.",
        "Mantenimiento en riesgo: Falta de planificación de mantenimiento preventivo.",
        "Falta de escalabilidad: El modelo actual está al límite de su capacidad manual."
      ]
    }
  },
  inputs: {
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
      { id: "01", name: "dueño", type: "Interno", role: "Director operativo e instructor principal", responsibility: "Patrocinador. Aprueba fases y usa Calendar y Sheets de caja." },
      { id: "02", name: "hermano", type: "Interno", role: "Instructor secundario y encargado de redes", responsibility: "Champion del proyecto. Administra Forms, Sheets de alumnos y captación por TikTok." },
      { id: "03", name: "prima", type: "Interno", role: "Contabilidad y representante legal", responsibility: "Valida el reporte mensual de caja generado en Sheets." },
      { id: "04", name: "abuelo", type: "Interno", role: "Responsable de mantenimiento de flota", responsibility: "Ejecuta mantenimientos según alertas recibidas por WhatsApp desde Calendar." },
      { id: "05", name: "alumnos", type: "Interno", role: "Clientes del servicio (30–50/semana)", responsibility: "Completan el Form de registro y reciben confirmación de horario por WhatsApp" }
    ],
    projectDocs: {
      changeLog: "Cambiado a digital en Fase 1",
      issueLog: "Cruces de horarios frecuentes",
      requirementsDoc: "Registro automatizado, Control de flota"
    },
    agreements: "Acuerdo de confidencialidad y colaboración académica firmado por el dueño.",
    eefs: {
      culture: "Cultura de aprendizaje continuo",
      environment: "Escuela de manejo formal en proceso de digitalización",
      tiktok: "Activa con alta tracción",
      team: "Familiar y comprometido"
    },
    opas: {
      ownerKnowledge: "Know-how de 10 años en el rubro",
      brotherExperience: "Experto en manejo táctico y redes",
      manualAccounting: "Registro en cuaderno físico",
      noTemplates: "Sin formatos previos"
    },
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
    ]
  }
};
