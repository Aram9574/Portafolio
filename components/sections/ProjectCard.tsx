import { Card } from '@/components/ui/Card';

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  tipo,
}: {
  title: string;
  description: string;
  tags: string[];
  cover?: string;
  href: string;
  tipo?: 'estrella' | 'academico';
}) {
  return (
    <Card className="hover:border-ink transition">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        {tipo === 'academico' && (
          <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-paper text-ink-2 border border-rule font-mono uppercase tracking-wide">
            Académico
          </span>
        )}
      </div>
      <p className="text-sm text-ink-2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="chip-ed">
            {t}
          </span>
        ))}
      </div>
      <a href={href} className="ed-link inline-flex items-center gap-1 text-sm">
        Ver detalles <span aria-hidden>→</span>
      </a>
    </Card>
  );
}
