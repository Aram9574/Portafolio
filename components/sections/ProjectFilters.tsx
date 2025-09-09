'use client';
export default function ProjectFilters({ tags, active, onChange }:{
  tags: string[]; active: string | 'All'; onChange: (t:string)=>void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {['All', ...tags].map(t => (
        <button key={t}
          onClick={()=>onChange(t)}
          className={`px-3 py-1 rounded-full text-sm border ${active===t ? 'border-emerald-400 text-emerald-300' : 'border-white/10 text-muted-foreground hover:text-white'} bg-white/5`}>
          {t === 'All' ? 'Todos' : t}
        </button>
      ))}
    </div>
  );
}
