import { GraduationCap, School } from "lucide-react";
import type { EducationItem } from "@/lib/data/education";

export default function EducationItemCard({ title, org, location, start, end, status, highlights = [] }: EducationItem) {
  const Icon = status === 'en-curso' ? GraduationCap : School;
  return (
    <article className="relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-emerald-400/40 transition">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-emerald-400/10 p-3">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="grow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{org}{location ? ` — ${location}` : ''}</p>
          <p className="text-xs text-gray-400 mt-1">
            {start ? `${start} ` : ''}{start && (end || status) ? '· ' : ''}{end ? `Finalizado ${end}` : status === 'en-curso' ? 'En curso' : ''}
          </p>
          {highlights.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-gray-300 list-disc pl-5">
              {highlights.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

