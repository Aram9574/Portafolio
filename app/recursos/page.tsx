import Section from '@/components/ui/Section'
import PostItem from '@/components/ui/PostItem'
import { resources } from '@/lib/data/resources'

export const metadata = { title: 'Recursos' }

export default function RecursosPage() {
  return (
    <>
      <Section id="recursos" title="Plantillas y guías" subtitle="Selección de recursos prácticos para equipos clínicos y técnicos.">
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map(r => (
            <PostItem key={r.id} title={r.title} meta={`${r.type}${r.tags ? ' · ' + r.tags.join(', ') : ''}`} href={r.link} />
          ))}
        </div>
      </Section>

      <Section id="blog" title="Blog corto (próximamente)">
        <p className="text-sm text-muted-foreground">Notas breves sobre IA clínica, interoperabilidad y desarrollo.</p>
      </Section>

      <Section id="newsletter" title="Newsletter (pronto)">
        <form className="flex gap-2 max-w-md">
          <input type="email" placeholder="tu@email" className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none" />
          <button className="px-4 py-2 rounded-xl border border-white/10">Apuntarme</button>
        </form>
      </Section>
    </>
  )
}

