export interface QuestionEntry {
  category: string;
  question: string;
  objective: string;
}

export interface RecopilacionEvidencia {
  fuente: string;
  descripcion: string;
  medio: string;
}

export interface ArbolItem {
  id: string;
  texto: string;
  children?: ArbolItem[];
}

export interface PlanInvolucramiento {
  involucrado: string;
  interes: string;
  influencia: string;
  expectativa: string;
  estrategia: string;
}

export interface IdentifiedStakeholder {
  id: string;
  name: string;
  type: string;
  role: string;
  responsibility: string;
}

export interface SmartCriterion {
  letter: string;
  name: string;
  complies: boolean;
  justification: string;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  university: string;
  faculty: string;
  context: string;
  objective: string;
  justification: string;
  framework: string;
  scope: string[];
  nature: string;
  recopilacion: {
    contexto: {
      descripcion: string;
      canales: string[];
      presenciaTikTok: {
        perfil: string;
        seguidores: string;
        likes: string;
        vistas: string;
        link: string;
      };
      sistemaCobros: string;
    };
    informacion: {
      primaria: RecopilacionEvidencia[];
      secundaria: string[];
    };
    analisisProblema: {
      central: string;
      causasDirectas: { causa: string; evidencia: string }[];
      causasIndirectas: string[];
      efectosDirectos: { efecto: string; descripcion: string }[];
      efectosIndirectos: string[];
      verificacion: { elemento: string; descripcion: string; evidencia: string; estado: string }[];
    };
    analisisObjetivos: {
      transicion: string;
      central: string;
      mediosTecnologicos: string[];
      mediosGestion: string[];
      finesOperativos: string[];
      finesComerciales: string[];
      verificacion: { medio: string; contribucion: string; fin: string }[];
    };
  };
  salida: {
    planInvolucramiento: {
      introduccion: string;
      estrategia: string[];
      matriz: PlanInvolucramiento[];
    };
    verificacionSMART?: SmartCriterion[];
  };
  // Legacy fields to be removed or kept as needed
  inputs?: {
    interviewContext: string;
    questions: QuestionEntry[];
    [key: string]: any;
  };
  outputs?: any;
  tools?: any;
  stakeholders?: any;
  methodology?: any;
}
