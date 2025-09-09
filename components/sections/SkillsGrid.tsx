'use client';
import { useState } from 'react';
import { skills } from '@/lib/data/skills';
import { cn } from '@/lib/utils';

export default function SkillsGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.title}>
            <div className="text-sm text-muted-foreground mb-2">{group.title}</div>
            <div
              className={cn(
                'flex flex-wrap gap-2 overflow-hidden transition-all',
                expanded ? 'max-h-none' : 'max-h-[4.25rem]'
              )}
            >
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">+ {item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="px-5 py-2 rounded-full bg-emerald-500/90 text-black font-medium hover:brightness-110 transition"
        >
          {expanded ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      </div>
    </>
  );
}
