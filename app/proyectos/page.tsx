import Section from '@/components/ui/Section'
import { Suspense } from 'react'
import ProjectsBrowser from '@/components/sections/ProjectsBrowser'
import { projects } from '@/lib/data/projects'

export const metadata = { title: 'Proyectos' }

export default function ProyectosPage() {
  return (
    <Section id="proyectos" title="Proyectos" subtitle="Filtra por categoría para explorar casos.">
      <Suspense>
        <ProjectsBrowser projects={projects} />
      </Suspense>
    </Section>
  )
}
