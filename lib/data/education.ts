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
    title: 'Máster en Aplicaciones de IA en Sanidad',
    org: 'Centro Europeo de Másters y Posgrados',
    location: 'Madrid, España',
    start: 'febrero 2025',
    end: 'marzo 2026',
    status: 'en-curso',
    highlights: [
      'Modelos de Machine Learning, NLP y Deep Learning aplicados a la optimización clínica y gestión hospitalaria.'
    ]
  },
  {
    title: 'Máster en Salud Digital/eHealth',
    org: 'Universidad Europea',
    location: 'Madrid, España',
    start: 'octubre 2025',
    end: 'octubre 2026',
    status: 'en-curso',
    highlights: [
      'Transformación digital sanitaria e interoperabilidad clínica (HL7, FHIR, SNOMED CT) con enfoque en EHDS y sistemas inteligentes.'
    ]
  },
  {
    title: 'Especialización en IA aplicada a la Sanidad',
    org: 'Stanford University',
    location: 'Online',
    start: 'febrero 2025',
    end: 'julio 2025',
    highlights: [
      'Machine Learning y Deep Learning aplicados a datos clínicos, diagnóstico asistido y ética en IA médica.'
    ]
  },
  {
    title: 'Médico',
    org: 'Universidad del Rosario',
    location: 'Bogotá, Colombia',
    start: '2018',
    end: '2024',
    highlights: [
      'Práctica clínica hospitalaria continua desde el 4º año · Enfoque en Medicina Interna y Urgencias.'
    ]
  }
];

export const certifications: CertificationItem[] = [
  { title: 'Inteligencia Artificial Avanzada', issuer: 'Comunidad de Madrid', year: '2025' },
  { title: 'SNOMED CT Foundation Course', issuer: 'SNOMED International', year: '2025' },
  { title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)', issuer: 'Microsoft', year: '2025' },
  { title: 'Prompt Engineering', issuer: 'Google', year: '2025' },
  { title: 'Asistente al Congreso Inforsalud 2025', issuer: 'SEIS', year: '2025', note: 'Sociedad Española de Informática de la Salud' },
  { title: 'ACLS y BLS', issuer: 'American Heart Association', year: '2024' }
];
