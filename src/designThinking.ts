export interface DesignThinkingPhase {
  phase: number;
  title: string;
  subtitle: string;
  description: string;
  conceptTitle: string;
  conceptDescription: string;
  techniques: {
    name: string;
    description: string;
  }[];
  tools: {
    name: string;
    description: string;
  }[];
  image: string;
  images?: string[];
  colorTheme: {
    primary: string;
    bg: string;
    border: string;
    accent: string;
    text: string;
  };
}

export const DESIGN_THINKING_DATA: DesignThinkingPhase[] = [
  {
    phase: 1,
    title: "Fase 1 — Comprendiendo las necesidades del usuario",
    subtitle: "Empatizar",
    description: "Esta etapa crucial busca comprender profundamente a los usuarios, sus comportamientos, necesidades, frustraciones y expectativas. El norte no es asumir, sino descubrir de primera mano cómo interactúa el cliente con la Escuela de Manejo Moto Driving.",
    conceptTitle: "El Poder de la Empatía",
    conceptDescription: "Dentro del marco de Design Thinking, la empatía es el acto intencional de hacer a un lado nuestras propias asunciones para sumergirnos en la realidad cotidiana de los alumnos, instructores y el administrativo de Moto Driving. Esto nos permite decodificar no solo lo que dicen, sino también lo que sienten y experimentan frente a los cuellos de botella del servicio.",
    techniques: [
      {
        name: "Entrevistas Profundas",
        description: "Coordinación directa de conversaciones abiertas para explorar la experiencia personal del usuario, identificando emociones y puntos críticos."
      },
      {
        name: "Observación Directa",
        description: "Acompañamiento pasivo de los flujos de inscripción y coordinación diaria de clases por WhatsApp para observar el comportamiento auténtico sin filtros."
      },
      {
        name: "Investigación de Campo",
        description: "Visita al circuito físico de prácticas para entender el contexto logístico, el estado de la flota de motocicletas y la atención in situ."
      }
    ],
    tools: [
      {
        name: "Mapa de Empatía",
        description: "Matriz visual organizada en cuatro cuadrantes para consolidar de manera sistemática lo que el usuario: (1) ¿Qué dice?, (2) ¿Qué hace?, (3) ¿Qué piensa? y (4) ¿Qué siente?."
      },
      {
        name: "Buyer Persona",
        description: "Fichas arquetípicas basadas en datos de campo que personifican al cliente ideal de la escuela de manejo, detallando su perfil demográfico, metas, dolores cotidianos e intereses."
      }
    ],
    image: "/dtk/fase1.png",
    images: [
      "/dtk/fase1.2.png",
      "/dtk/fase1.png"
    ],
    colorTheme: {
      primary: "#004A99",
      bg: "bg-blue-50/55",
      border: "border-blue-200",
      accent: "text-blue-600",
      text: "text-[#004A99]"
    }
  },
  {
    phase: 2,
    title: "Fase 2 — Definir",
    subtitle: "Identificando el Problema Clave",
    description: "En esta fase filtramos y sintetizamos la abundancia de data cruda recolectada durante la etapa de empatía. El objetivo es estructurar un diagnóstico exacto e identificar el problema principal que la propuesta de sistemas debe resolver.",
    conceptTitle: "Sintetizar la Información",
    conceptDescription: "Consiste en agrupar de manera estructurada los hallazgos dispersos de las entrevistas, identificando patrones y 'insights'. A partir de esto, se formula el POV (Point Of View) — declaración del problema enfocada en el usuario que responde a la fórmula: [Usuario] necesita [Necesidad] porque [Insight/Revelación].",
    techniques: [
      {
        name: "Sintetizar Información",
        description: "Destilar las notas y grabaciones de entrevistas para mapear redundancias operativas, separando síntomas superficiales de causas raíz."
      },
      {
        name: "Formulación de POV (Point of View)",
        description: "Establecer la declaración accionable del problema de forma articulada. En Moto Driving: 'El dueño del negocio necesita un entorno consolidado y trazable porque el uso manual de herramientas de uso personal sabotea su control financiero y ahuyenta clientes potenciales ante respuestas tardías.'"
      },
      {
        name: "How Might We (HMW)",
        description: "Una vez formulado el POV, se traduce el problema en una pregunta abierta y optimista que invita a generar soluciones sin cerrarse a una sola respuesta. Esta pregunta es el puente directo hacia la fase de Idear: '¿Cómo podríamos brindarle a Martín un sistema centralizado y automatizado que reemplace el control manual y reduzca su dependencia de WhatsApp como única herramienta de gestión del negocio?'"
      }
    ],
    tools: [
      {
        name: "Brainstorming del Diagnóstico",
        description: "Lluvia de ideas inicial en equipo para problematizar síntomas observados en la administración de horarios del circuito."
      },
      {
        name: "Diagrama de Afinidad",
        description: "Manejo interactivo de post-its digitales para agrupar problemas de comunicación, operacionales y financieros por temas de impacto prioritario."
      }
    ],
    image: "/dtk/fase2.png",
    colorTheme: {
      primary: "#D97706",
      bg: "bg-amber-50/55",
      border: "border-amber-200",
      accent: "text-amber-600",
      text: "text-amber-800"
    }
  },
  {
    phase: 3,
    title: "Fase 3 — Idear",
    subtitle: "Generando Soluciones Creativas",
    description: "Con el problema central definido, se abre el espacio a la creatividad. Esta etapa busca generar la mayor cantidad y diversidad de soluciones antes de aplicar filtros rigurosos de viabilidad y costos.",
    conceptTitle: "Pensamiento Divergente a Convergente",
    conceptDescription: "Idear requiere suspender el juicio crítico inmediato. Nos apalancamos en metodologías estructuradas de innovación para romper esquemas tradicionales y proponer soluciones tecnológicas que realmente agreguen valor a la escuela de manejo.",
    techniques: [
      {
        name: "Técnica SCAMPER",
        description: "Sistema de pensamiento lateral para formular preguntas disruptivas: ¿Sustituir formularios físicos? ¿Combinar pagos con calendarios? ¿Adaptar flujos de WhatsApp API? ¿Modificar visuales? ¿Eliminar pasos redundantes?"
      },
      {
        name: "Storyboarding de Ideas",
        description: "Secuenciar visualmente soluciones alternativas para imaginar cómo se integra la tecnología en las actividades de los alumnos y del personal administrativo en el circuito."
      }
    ],
    tools: [
      {
        name: "Matriz de Selección de Proyectos",
        description: "Cuadrante de Viabilidad vs. Impacto que nos permite discernir y priorizar qué ideas del SCAMPER deben ir a la fase de prototipado."
      },
      {
        name: "Narrativa de Experiencia de Usuario",
        description: "Desarrollo del recorrido ideal simplificado que el estudiante experimentará con la nueva automatización del canal de atención."
      }
    ],
    image: "/dtk/fase3.png",
    colorTheme: {
      primary: "#7C3AED",
      bg: "bg-purple-50/55",
      border: "border-purple-200",
      accent: "text-purple-600",
      text: "text-purple-800"
    }
  },
  {
    phase: 4,
    title: "Fase 4 — Prototipar",
    subtitle: "Creando Representaciones Tangibles",
    description: "Las mejores ideas seleccionadas en el SCAMPER cobran vida. En esta etapa se construyen modelos visuales o de interacción de bajo costo para probar la funcionalidad elemental y recopilar feedback rápido.",
    conceptTitle: "Construir para Pensar",
    conceptDescription: "Un prototipo es una aproximación tangible de la solución. Permite evaluar aspectos como la facilidad de uso del software SaaS propuesto y la automatización del WhatsApp Business API antes de invertir en código de backend real.",
    techniques: [
      {
        name: "Prototipado Rápido de Baja Fidelidad",
        description: "Esquemas rápidos de pantallas y flujos clave en papel que permiten validar la secuencia de navegación y la lógica interactiva antes del desarrollo."
      },
      {
        name: "Mockups Digitales",
        description: "Diseño interactivo de pantallas clave de la interfaz de usuario en herramientas de prototipado para evaluar la arquitectura de información del panel de control académico."
      }
    ],
    tools: [
      {
        name: "Bocetos y Wireframes (Lápiz y Papel)",
        description: "Esquemas iniciales rápidos de baja fidelidad para definir la distribución de la información sin distracciones estéticas."
      },
      {
        name: "Flujogramas de Interacción de la API",
        description: "Modelos lógicos secuenciales que mapean los árboles de decisión y respuestas automáticas del bot de WhatsApp ante consultas frecuentes de prospectos."
      }
    ],
    image: "/dtk/fase4.png",
    colorTheme: {
      primary: "#10B981",
      bg: "bg-emerald-50/55",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      text: "text-emerald-800"
    }
  },
  {
    phase: 5,
    title: "Fase 5 — Evaluar",
    subtitle: "Validando y Refinando las Soluciones",
    description: "La fase final del ciclo. Sometemos nuestros prototipos a la interacción directa con usuarios reales (el administrativo, instructores y alumnos) para validar la efectividad de la propuesta y detectar cuellos de botella.",
    conceptTitle: "Iteración Basada en Evidencia",
    conceptDescription: "Evaluar no es defender nuestra propuesta; es escuchar críticamente al usuario para aprender. Los hallazgos y críticas honestas nos permiten rediseñar flujos engorrosos de agendamiento y perfeccionar la automatización antes de la implementación real.",
    techniques: [
      {
        name: "Pruebas de Usabilidad con Usuarios",
        description: "Sesiones de observación donde asignamos tareas a voluntarios, como 'agendar clase' o 'subir voucher' en el prototipo digital, registrando retrasos y confusiones."
      },
      {
        name: "Sesiones de Feedback Estructuradas",
        description: "Reuniones de revisión de diseño con el dueño del negocio para garantizar que el MVP (Mínimo Producto Viable) propuesto se alinee a su presupuesto de operación."
      },
      {
        name: "Priorización con Modelo Kano",
        description: "Se clasificaron las funcionalidades del sistema propuesto según su impacto en la satisfacción del cliente: funciones básicas u obligatorias (Control de Pagos, Gestión de Alumnos), funciones esperadas que mejoran el desempeño operativo (Agenda de Clases, Reportes e Indicadores), y funciones atractivas que diferencian la propuesta (Dashboard Gerencial en tiempo real, Gestión de Prospectos/CRM). Esta priorización permite enfocar los recursos de desarrollo en lo que realmente genera valor percibido para Martín antes de pasar a la implementación."
      }
    ],
    tools: [
      {
        name: "Malla Receptora de Información",
        description: "Matriz dividida en cuatro áreas clave: (1) Aspectos interesantes/relevantes, (2) Críticas constructivas, (3) Preguntas/dudas que surgieron y (4) Nuevas ideas generadas."
      },
      {
        name: "Encuestas Breves de Satisfacción del Prototipo",
        description: "Cuestionarios rápidos sobre facilidad de navegación, claridad estética y efectividad de respuestas del flujo automatizado simulado."
      }
    ],
    image: "/dtk/fase5.png",
    colorTheme: {
      primary: "#06B6D4",
      bg: "bg-cyan-50/55",
      border: "border-cyan-200",
      accent: "text-cyan-600",
      text: "text-cyan-800"
    }
  }
];
