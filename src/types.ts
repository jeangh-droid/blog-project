export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
}

export interface Stakeholder {
  role: string;
  description: string;
  power: 'Alto' | 'Medio' | 'Bajo';
  interest: 'Alto' | 'Medio' | 'Bajo';
  strategy: string;
}

export interface InterviewCategory {
  title: string;
  content: string;
}

export interface InterviewAnalysis {
  summary: string;
  categories: InterviewCategory[];
  keyFindings: string[];
}

export interface QuestionEntry {
  category: string;
  question: string;
  objective: string;
}

export interface StakeholderAnalysis {
  name: string;
  role: string;
  interests: string;
  power: 'Alto' | 'Medio' | 'Bajo';
  interest: 'Alto' | 'Medio' | 'Bajo';
}

export interface StakeholderInvolvement {
  name: string;
  currentLevel: 'Desconocedor' | 'Resistente' | 'Neutral' | 'Apoya' | 'Lidera';
  desiredLevel: 'Desconocedor' | 'Resistente' | 'Neutral' | 'Apoya' | 'Lidera';
  strategy: string;
  actions: string;
}

export interface IdentifiedStakeholder {
  id: string;
  name: string;
  type: string;
  role: string;
  responsibility: string;
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
  inputs: {
    interviewContext: string;
    questions: QuestionEntry[];
    projectCharter: {
      project: string;
      sponsor: string;
      stakeholders: string;
      term: string;
    };
    businessDocuments: {
      businessCase: string;
      expectedBenefits: string;
    };
    identifiedStakeholders: IdentifiedStakeholder[];
    projectDocs: {
      changeLog: string;
      issueLog: string;
      requirementsDoc: string;
    };
    agreements: string;
    eefs: {
      culture: string;
      environment: string;
      tiktok: string;
      team: string;
    };
    opas: {
      ownerKnowledge: string;
      brotherExperience: string;
      manualAccounting: string;
      noTemplates: string;
    };
  };
  outputs: {
    stakeholderRegister: {
      id: string;
      name: string;
      role: string;
      interest: 'Alto' | 'Medio' | 'Bajo';
      power: 'Alto' | 'Medio' | 'Bajo';
      strategy: string;
    }[];
    changeRequests: {
      id: string;
      description: string;
      area: string;
      priority: string;
      status: string;
    }[];
    planUpdates: {
      document: string;
      update: string;
      justification: string;
    }[];
    docUpdates: {
      document: string;
      update: string;
      detail: string;
    }[];
  };
  tools: {
    interviews: string;
    observation: string;
    registration: string;
    interviewAnalysis: string;
    interviewStructured?: InterviewAnalysis;
  };
  stakeholders: Stakeholder[];
  methodology: MethodologyStep[];
}
