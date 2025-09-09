import Image from 'next/image';
import { Card } from '@/components/ui/Card';

export default function ProjectCard({
  title,
  context,
  // opcional, no usado pero aceptado para compatibilidad
  solution,
  impact,
  tags,
  cover,
  href,
}: {
  title: string;
  context: string;
  solution?: string;
  impact?: string;
  tags: string[];
  cover: string;
  href: string;
}) {
  return (
    <Card className="overflow-hidden hover:border-emerald-400/40 transition">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
        <Image src={cover} alt={title} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{context}</p>
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
        {tags.map((t) => (
          <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
            {t}
          </span>
        ))}
      </div>
      <a href={href} className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:underline">
        Ver detalles <span aria-hidden>→</span>
      </a>
    </Card>
  );
}
