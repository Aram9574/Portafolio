import Section from '@/components/ui/Section'
import PublicationsBrowser from '@/components/sections/PublicationsBrowser'
import { publications } from '@/lib/data/publications'

export const metadata = { title: 'Publicaciones' }

export default function PublicacionesPage() {
  return (
    <Section id="publicaciones" title="Publicaciones y divulgación" subtitle="Filtra por tipo o busca por título/etiquetas.">
      <PublicationsBrowser publications={publications as any} />
    </Section>
  )
}
