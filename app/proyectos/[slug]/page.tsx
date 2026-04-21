import Section from '@/components/ui/Section'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { projects } from '@/lib/data/projects'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

type Props = { params: { slug: string } }

// Nota: el slug 'prediccion-ocupacion-hospitalaria' tiene ruta estática propia
// en app/proyectos/prediccion-ocupacion-hospitalaria/page.tsx (case study editorial).
const STATIC_OVERRIDES = new Set(['prediccion-ocupacion-hospitalaria'])

export function generateStaticParams() {
  return projects
    .filter(p => !STATIC_OVERRIDES.has(p.slug))
    .map(p => ({ slug: p.slug }))
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
  if (STATIC_OVERRIDES.has(params.slug)) return notFound()
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
        <h1 className="display-l text-ink" data-aos="fade-down">{project.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="100">
          {project.tags.map((s) => <span key={s} className="chip-ed">{s}</span>)}
        </div>
        {project.cover && (
          <div className="mt-6 relative w-full aspect-[16/9] border border-rule overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
            <Image src={project.cover} alt={project.title} fill className="object-cover" />
          </div>
        )}
      </Section>

      <Section id="detalle" className="pt-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1 min-w-0 space-y-6">
            {readmeContent ? (
              <div className="prose prose-stone max-w-none bg-paper border border-rule p-6 md:p-8 overflow-hidden">
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
              </div>
            ) : (
              <>
                <Card>
                  <h2 className="text-ink font-semibold mb-1">Problema</h2>
                  <p className="text-sm text-ink-2">{project.context}</p>
                </Card>
                <Card>
                  <h2 className="text-ink font-semibold mb-1">Solución</h2>
                  <p className="text-sm text-ink-2">{project.solution}</p>
                </Card>
                <Card>
                  <h2 className="text-ink font-semibold mb-1">Resultado</h2>
                  <p className="text-sm text-ink-2">{project.impact}</p>
                </Card>
                {project.regulatory && (
                  <Card>
                    <h2 className="text-ink font-semibold mb-1">Marco regulatorio</h2>
                    <p className="text-sm text-ink-2">{project.regulatory}</p>
                  </Card>
                )}
                {project.conclusion && (
                  <Card>
                    <h2 className="text-ink font-semibold mb-1">Conclusión</h2>
                    <p className="text-sm text-ink-2">{project.conclusion}</p>
                  </Card>
                )}
                {project.lessons && (
                  <Card>
                    <h2 className="text-ink font-semibold mb-1">Lecciones</h2>
                    <p className="text-sm text-ink-2">{project.lessons}</p>
                  </Card>
                )}
                {project.nextSteps && (
                  <Card>
                    <h3 className="text-ink font-semibold mb-1">Próximos pasos</h3>
                    <p className="text-sm text-ink-2">{project.nextSteps}</p>
                  </Card>
                )}
              </>
            )}
          </div>
          <aside className="w-full lg:w-80 shrink-0 sticky top-24 space-y-6" data-aos="fade-left" data-aos-delay="300">
            <Card>
              <h3 className="text-ink font-semibold">¿Quieres algo similar?</h3>
              <p className="mt-2 text-sm text-ink-2">Escríbeme para explorar un piloto adaptado a tu centro.</p>
              <a href="/contacto" className="btn-ink mt-4 inline-flex">Contactar</a>
              {project.links?.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn-ghost mt-2 inline-flex w-full justify-center">Repositorio GitHub</a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ink mt-3 inline-flex w-full justify-center text-sm"
                >
                  {project.links.demo.includes('huggingface.co') ? 'Ver demo en Hugging Face' : 'Ver demo en vivo'}
                </a>
              )}
            </Card>
          </aside>
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": project.title,
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web",
            "description": project.shortDescription || project.context,
            "creator": {
              "@type": "Person",
              "name": "Aram Zakzuk"
            },
            ...(project.cover ? { "image": `https://alejandrozakzuk.com${project.cover}` } : {}),
            ...(project.links?.repo ? { "codeRepository": project.links.repo } : {}),
            ...(project.links?.demo ? { "url": project.links.demo } : {})
          })
        }}
      />
    </>
  )
}
