'use client';
import { useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ProjectFilters from '@/components/sections/ProjectFilters'
import ProjectCard from '@/components/sections/ProjectCard'
import type { Project } from '@/lib/data/projects'

const CATEGORIES = ['Hospital','Residencias','Interoperabilidad','ML clínico'] as const
type Category = typeof CATEGORIES[number]

function inferCategory(slug: string, tags: string[]): Category {
  const s = slug.toLowerCase()
  const t = tags.map(x => x.toLowerCase())
  if (s.includes('erp') || s.includes('geriatr')) return 'Residencias'
  if (t.includes('hl7/fhir')) return 'Interoperabilidad'
  if (s.includes('ml') || t.some(x => ['scikit-learn','logistic regression','python'].includes(x))) return 'ML clínico'
  return 'Hospital'
}

export default function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const search = useSearchParams();
  const initial = search.get('cat') as Category | null;
  const [active, setActive] = useState<string>(initial ?? 'All');
  const [q, setQ] = useState<string>(search.get('q') ?? '');

  useEffect(() => {
    const cat = search.get('cat');
    if ((cat && cat !== active) || (!cat && active !== 'All')) {
      setActive((cat as Category) ?? 'All');
    }
    const sq = search.get('q') ?? '';
    setQ(sq);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const list = useMemo(() => {
    const byCat = active==='All' ? projects : projects.filter(p => inferCategory(p.slug, p.tags) === active)
    if (!q.trim()) return byCat;
    const s = q.toLowerCase();
    return byCat.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.context.toLowerCase().includes(s) ||
      (p.solution?.toLowerCase().includes(s)) ||
      p.tags.join(' ').toLowerCase().includes(s)
    );
  }, [active, projects, q])

  const tagsForFilter = useMemo(
    () => Array.from(new Set(projects.map(p => inferCategory(p.slug, p.tags)))).filter(Boolean) as Category[],
    [projects]
  )

  const handleChange = (t: string) => {
    setActive(t);
    const params = new URLSearchParams(search.toString());
    if (t === 'All') params.delete('cat');
    else params.set('cat', t);
    if (q.trim()) params.set('q', q); else params.delete('q');
    router.replace(`?${params.toString()}`);
  };

  const handleSearch = (val: string) => {
    setQ(val);
    const params = new URLSearchParams(search.toString());
    if (active === 'All') params.delete('cat'); else params.set('cat', active);
    if (val.trim()) params.set('q', val); else params.delete('q');
    router.replace(`?${params.toString()}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        <ProjectFilters tags={tagsForFilter} active={active as any} onChange={handleChange} />
        <div className="md:ml-auto w-full md:w-64">
          <input
            value={q}
            onChange={(e)=>handleSearch(e.target.value)}
            placeholder="Buscar proyectos..."
            className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none"
          />
        </div>
      </div>
      <div className="text-sm text-gray-400 mb-2">{list.length} proyecto(s)</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {list.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            context={p.context}
            tags={p.tags}
            cover={p.cover}
            href={`/proyectos/${p.slug}`}
          />
        ))}
      </div>
    </>
  )
}
