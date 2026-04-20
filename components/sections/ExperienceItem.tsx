import { ArrowUpRight, Hospital, HeartPulse, Microscope } from "lucide-react";
import Metric from "@/components/ui/Metric";

type Item = {
  icon?: 'hospital' | 'heart' | 'lab';
  title: string;
  context: string;
  bullets?: string[];
  metrics?: { value: string; label: string }[];
  ctaHref?: string; // opcional: link a caso o proyecto
  ctaText?: string;
};

const ICONS = {
  hospital: Hospital,
  heart: HeartPulse,
  lab: Microscope,
};

export default function ExperienceItem({ icon = 'hospital', title, context, bullets = [], metrics = [], ctaHref, ctaText }: Item) {
  const Icon = ICONS[icon];
  return (
    <article className="border border-rule bg-paper p-6 hover:bg-bone transition">
      <div className="flex items-start gap-4">
        <div className="shrink-0 border border-rule bg-bone p-3">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="grow">
          <h3 className="font-display text-lg text-ink">{title}</h3>
          <p className="text-sm text-ink-2 mt-1">{context}</p>

          {bullets.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-ink-2 list-disc pl-5">
              {bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          )}

          {metrics.length > 0 && (
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {metrics.map((m, i) => (<Metric key={i} value={m.value} label={m.label} />))}
            </div>
          )}

          {ctaHref && (
            <div className="mt-4">
              <a
                href={ctaHref}
                className="ed-link inline-flex items-center gap-1 text-sm"
                rel="noopener noreferrer"
              >
                {ctaText || 'Ver caso'}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
