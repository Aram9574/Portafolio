import Section from '@/components/ui/Section'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { projects } from '@/lib/data/projects'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export const dynamicParams = false

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <>
      <Section id="project-hero">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{project.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {project.tags.map((s) => <span key={s} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>)}
        </div>
        {project.cover && (
          <div className="mt-6 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image src={project.cover} alt={project.title} fill className="object-cover" />
          </div>
        )}
      </Section>

      <Section id="detalle" className="pt-0">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <h2 className="text-white font-semibold mb-1">Problema</h2>
              <p className="text-sm text-muted-foreground">{project.context}</p>
            </Card>
            <Card>
              <h2 className="text-white font-semibold mb-1">Solución</h2>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </Card>
            <Card>
              <h2 className="text-white font-semibold mb-1">Resultado</h2>
              <p className="text-sm text-muted-foreground">{project.impact}</p>
            </Card>
            <Card>
              <h2 className="text-white font-semibold mb-1">Lecciones</h2>
              <p className="text-sm text-muted-foreground">Iteraciones, riesgos y aprendizajes clave.</p>
            </Card>
            <Card>
              <h2 className="text-white font-semibold mb-1">Próximos pasos</h2>
              <p className="text-sm text-muted-foreground">Extensiones y roadmap sugerido.</p>
            </Card>
          </div>
          <aside className="space-y-6">
            <Card>
              <h3 className="text-white font-semibold">¿Quieres algo similar?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Escríbeme para explorar un piloto adaptado a tu centro.</p>
              <a href="/contacto" className="btn-primary mt-4 inline-flex">Contactar</a>
              {project.links?.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn-outline mt-2 inline-flex">Repositorio</a>
              )}
              {project.links?.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="mt-1 inline-block text-emerald-400 text-sm hover:underline">Demo →</a>
              )}
            </Card>
          </aside>
        </div>
      </Section>
    </>
  )
}
