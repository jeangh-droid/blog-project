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
  };
  outputs: {
    stakeholderAnalysis: StakeholderAnalysis[];
    stakeholderInvolvement: StakeholderInvolvement[];
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
