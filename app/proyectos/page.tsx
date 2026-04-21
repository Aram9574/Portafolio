import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { Suspense } from 'react'
import ProjectsBrowser from '@/components/sections/ProjectsBrowser'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Proyectos IA clínica · CDSS AUC 0.942 · 253K registros',
  description:
    'CDSS diabetes AUC-ROC 0.942 sobre 253.680 registros CDC BRFSS, ClinAI Classifier alineado con EU AI Act y prototipo HL7 FHIR. Aram Zakzuk, MD.',
  alternates: { canonical: '/proyectos' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/proyectos',
    title: 'Proyectos que fundamentan el criterio · Aram Zakzuk, MD',
    description:
      'ClinAI Classifier, CDSS diabetes (AUC 0.942), ocupación hospitalaria y prototipo FHIR. Validación técnica del criterio consultor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos · Aram Zakzuk, MD',
    description:
      'ClinAI Classifier, CDSS diabetes (AUC 0.942), ocupación hospitalaria y prototipo FHIR.',
  },
}

export default function ProyectosPage() {
  return (
    <Section id="proyectos" title="Proyectos" subtitle="Filtra por categoría para explorar casos.">
      <Suspense>
        <ProjectsBrowser projects={projects} />
      </Suspense>
    </Section>
  )
}
