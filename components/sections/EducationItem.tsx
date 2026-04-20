import { GraduationCap, School } from "lucide-react";
import type { EducationItem } from "@/lib/data/education";

export default function EducationItemCard({ title, org, location, start, end, status, highlights = [] }: EducationItem) {
  const Icon = status === 'en-curso' ? GraduationCap : School;
  return (
    <article className="relative border border-rule bg-paper p-5 hover:bg-bone transition">
      <div className="flex items-start gap-4">
        <div className="shrink-0 border border-rule bg-bone p-3">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="grow">
          <h3 className="font-display text-lg text-ink">{title}</h3>
          <p className="text-sm text-ink-2">{org}{location ? ` — ${location}` : ''}</p>
          <p className="text-xs text-muted mt-1">
            {start ? `${start} ` : ''}{start && (end || status) ? '· ' : ''}{end ? `Finalizado ${end}` : status === 'en-curso' ? 'En curso' : ''}
          </p>
          {highlights.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-ink-2 list-disc pl-5">
              {highlights.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
