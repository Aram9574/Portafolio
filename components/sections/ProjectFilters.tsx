'use client';
export default function ProjectFilters({ tags, active, onChange }:{
  tags: string[]; active: string | 'All'; onChange: (t:string)=>void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {['All', ...tags].map(t => (
        <button key={t}
          onClick={()=>onChange(t)}
          className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${active===t ? 'border-ink bg-ink text-bone' : 'border-hairline-strong text-ink-2 bg-paper hover:text-ink hover:border-ink'}`}>
          {t === 'All' ? 'Todos' : t}
        </button>
      ))}
    </div>
  );
}
