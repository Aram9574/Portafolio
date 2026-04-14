import Section from '@/components/ui/Section'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { projects } from '@/lib/data/projects'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.shortDescription || project.context
  }
}

export const dynamicParams = false

export default async function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return notFound()

  let readmeContent = null;
  if (project.links?.repo && project.links.repo.includes('github.com')) {
    try {
      const urlParts = project.links.repo.split('github.com/')[1].split('/');
      const user = urlParts[0];
      const repo = urlParts[1];
      
      if (user && repo) {
        const res = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/README.md`, { next: { revalidate: 3600 } });
        if (res.ok) {
          readmeContent = await res.text();
        } else {
          const resMaster = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`, { next: { revalidate: 3600 } });
          if (resMaster.ok) {
            readmeContent = await resMaster.text();
          }
        }
      }
    } catch (e) {
      console.error("Failed to fetch README", e);
    }
  }

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
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1 min-w-0 space-y-6">
            {readmeContent ? (
              <div className="prose prose-invert prose-emerald max-w-none bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl overflow-hidden">
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
              </div>
            ) : (
              <>
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
                {project.regulatory && (
                  <Card>
                    <h2 className="text-white font-semibold mb-1">Marco regulatorio</h2>
                    <p className="text-sm text-muted-foreground">{project.regulatory}</p>
                  </Card>
                )}
                {project.conclusion && (
                  <Card>
                    <h2 className="text-white font-semibold mb-1">Conclusión</h2>
                    <p className="text-sm text-muted-foreground">{project.conclusion}</p>
                  </Card>
                )}
                {project.lessons && (
                  <Card>
                    <h2 className="text-white font-semibold mb-1">Lecciones</h2>
                    <p className="text-sm text-muted-foreground">{project.lessons}</p>
                  </Card>
                )}
                {project.nextSteps && (
                  <Card>
                    <h3 className="text-white font-semibold mb-1">Próximos pasos</h3>
                    <p className="text-sm text-muted-foreground">{project.nextSteps}</p>
                  </Card>
                )}
              </>
            )}
          </div>
          <aside className="w-full lg:w-80 shrink-0 sticky top-24 space-y-6">
            <Card>
              <h3 className="text-white font-semibold">¿Quieres algo similar?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Escríbeme para explorar un piloto adaptado a tu centro.</p>
              <a href="/contacto" className="btn-primary mt-4 inline-flex">Contactar</a>
              {project.links?.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn-outline mt-2 inline-flex w-full justify-center">Repositorio GitHub</a>
              )}
              {project.links?.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-3 inline-flex w-full justify-center px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition text-sm"
                >
                  {project.links.demo.includes('huggingface.co') ? 'Ver demo en Hugging Face' : 'Ver demo en vivo'}
                </a>
              )}
            </Card>
          </aside>
        </div>
      </Section>
    </>
  )
}
