export type EducationItem = {
  title: string;
  org: string;
  location?: string;
  start?: string;
  end?: string;
  status?: 'en-curso' | 'finalizado';
  highlights?: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  year?: string;
  note?: string;
  link?: string;
};

export const education: EducationItem[] = [
  {
    title: 'Máster en Inteligencia Artificial Aplicada a la Sanidad',
    org: 'Centro Europeo de Másters y Posgrados (CEMP)',
    location: 'Madrid, España',
    start: '02/2025',
    highlights: [
      'Proyecto aplicado: predicción de ocupación de camas · stack ML+NLP+DL · enfoque práctico full-time'
    ]
  },
  {
    title: 'Máster en Integración del Conocimiento Médico',
    org: 'Universidad Católica de Murcia (UCAM)',
    location: 'Madrid, España',
    end: '01/2025',
    status: 'finalizado',
    highlights: [
      'Integración de conocimiento médico · complementado con preparación MIR CTO'
    ]
  },
  {
    title: 'Médico',
    org: 'Universidad del Rosario',
    location: 'Bogotá, Colombia',
    end: '12/2024',
    status: 'finalizado',
    highlights: [
      'Profundización medicina familiar y preventiva · salud comunitaria'
    ]
  },
  {
    title: 'Especialización en IA aplicada a la Sanidad',
    org: 'Stanford University Online',
    end: '06/2025',
    status: 'finalizado'
  }
];

export const certifications: CertificationItem[] = [
  { title: 'CS50 Python', issuer: 'Harvard University', year: '2025' },
  { title: 'SNOMED CT Foundation Course', issuer: 'SNOMED International', year: '2025' },
  { title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)', issuer: 'Microsoft', year: '2025' },
  { title: 'Prompt Engineering', issuer: 'Google', year: '2025' },
  { title: 'Asistente al Congreso Inforsalud 2025', issuer: 'SEIS', year: '2025', note: 'Sociedad Española de Informática de la Salud' },
  { title: 'ACLS y BLS', issuer: 'American Heart Association', year: '2024' }
];
