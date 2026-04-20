import Image from 'next/image';
import { Card } from '@/components/ui/Card';

export default function ProjectCard({
  title,
  description,
  tags,
  cover,
  href,
  tipo,
}: {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  href: string;
  tipo?: 'estrella' | 'academico';
}) {
  return (
    <Card className="overflow-hidden hover:border-ink transition">
      <div className="relative aspect-[16/9] border border-rule overflow-hidden mb-4">
        <Image src={cover} alt={title} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
      </div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        {tipo === 'academico' && (
          <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-paper text-ink-2 border border-rule font-mono uppercase tracking-wide">
            Académico
          </span>
        )}
      </div>
      <p className="text-sm text-ink-2 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
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
