export type Publication = {
  slug: string
  title: string
  date: string
  excerpt: string
  image?: string
  topic: 'IA clínica' | 'Interoperabilidad' | 'Proyectos'
}

export const publications: Publication[] = [
  {
    slug: 'ejemplo-ia-clinica',
    title: 'Aplicaciones de IA en triaje clínico: estado actual',
    date: '2024-06-01',
    excerpt: 'Panorama de modelos de clasificación para priorización y seguridad del paciente.',
    topic: 'IA clínica'
  },
  {
    slug: 'hl7-fhir-intro',
    title: 'HL7 FHIR: una introducción práctica',
    date: '2024-05-10',
    excerpt: 'Conceptos clave, perfiles básicos y validaciones mínimas para empezar.',
    topic: 'Interoperabilidad'
  }
]

