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
    org: 'Centro Europeo de Másters y Posgrados',
    location: 'Madrid, España',
    highlights: [
      'Aplicación de modelos de Machine Learning, NLP y Deep Learning para la optimización de procesos clínicos y gestión hospitalaria.'
    ]
  },
  {
    title: 'Máster en Salud Digital/eHealth',
    org: 'Universidad Europea',
    location: 'Madrid, España',
    highlights: [
      'Transformación digital sanitaria e interoperabilidad clínica (HL7, FHIR, SNOMED CT) con enfoque en datos, gestión y sistemas inteligentes.'
    ]
  },
  {
    title: 'Médico',
    org: 'Universidad del Rosario',
    location: 'Bogotá, Colombia',
    highlights: [
      'Profundización en medicina familiar y preventiva · enfoque comunitario y promoción de la salud pública'
    ]
  },
  {
    title: 'Especialización en IA aplicada a la Sanidad',
    org: 'Stanford University Online',
    location: 'Bogotá, Colombia',
    highlights: [
      'Machine Learning y Deep Learning aplicados a datos clínicos · diagnóstico asistido · salud preventiva y ética en IA médica'
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
