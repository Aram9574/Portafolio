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
            <div className="eyebrow mb-2">{group.title}</div>
            <div
              className={cn(
                'flex flex-wrap gap-2 overflow-hidden transition-all',
                expanded ? 'max-h-none' : 'max-h-[4.25rem]'
              )}
            >
              {group.items.map((item) => (
                <span key={item} className="chip-ed text-sm">+ {item}</span>
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
          className="btn-ink"
        >
          {expanded ? 'Mostrar menos' : 'Mostrar más'}
        </button>
      </div>
    </>
  );
}
