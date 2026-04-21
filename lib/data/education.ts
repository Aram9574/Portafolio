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
  credentialId?: string;
  category?: 'regulatoria' | 'stanford' | 'congresos' | 'idiomas' | 'salud';
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
  {
    title: 'Inteligencia Artificial Avanzada',
    issuer: 'Comunidad de Madrid',
    year: 'oct 2025',
    link: 'https://auladigital-ea.comunidad.madrid/certificate/2c8b28d58976ea7a5631591cfe15f',
    category: 'regulatoria'
  },
  {
    title: 'SNOMED-CT Fundamentos',
    issuer: 'SNOMED International',
    year: 'jun 2025',
    category: 'regulatoria'
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    year: 'jul 2025',
    link: 'https://learn.microsoft.com/api/credentials/share/es-es/AlejandroZakzuk-2946/E770742B8185D8C0',
    category: 'regulatoria'
  },
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    year: 'sept 2025',
    link: 'https://www.coursera.org/account/accomplishments/specialization/4KO60AEB2EC7',
    category: 'regulatoria'
  },
  {
    title: 'AI in Healthcare Specialization',
    issuer: 'Stanford University',
    year: 'feb 2026',
    link: 'https://www.coursera.org/account/accomplishments/specialization/JPA2O5IFFDNP',
    credentialId: 'JPA2O5IFFDNP',
    category: 'stanford'
  },
  {
    title: 'Evaluations of AI Applications in Healthcare',
    issuer: 'Stanford University',
    year: 'jun 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/65E7NVHNXGZU',
    category: 'stanford'
  },
  {
    title: 'Fundamentals of Machine Learning for Healthcare',
    issuer: 'Stanford University',
    year: 'jun 2025',
    link: 'https://www.coursera.org/account/accomplishments/records/3QMWAU8A7RR6',
    category: 'stanford'
  },
  {
    title: 'Congreso Inforsalud 2025',
    issuer: 'SEIS',
    year: 'abr 2025',
    note: 'Sociedad Española de Informática de la Salud',
    category: 'congresos'
  },
  {
    title: 'DELF B1',
    issuer: "Ministère de l'Éducation nationale",
    year: 'oct 2017',
    note: 'Diploma oficial de francés',
    category: 'idiomas'
  },
  {
    title: 'TOEFL iBT',
    issuer: 'TOEFL / ETS',
    year: 'dic 2020',
    note: 'Certificación oficial de inglés',
    category: 'idiomas'
  },
  {
    title: 'ACLS y BLS',
    issuer: 'American Heart Association',
    year: '2024',
    note: 'Soporte Vital Cardiovascular Avanzado · Soporte Vital Básico',
    category: 'salud'
  }
];
