import { FileDown } from 'lucide-react';

type Variant = 'stacked' | 'compact';

type CVOption = {
  label: string;
  href: string;
  description: string;
};

const CV_OPTIONS: CVOption[] = [
  {
    label: 'CV Ejecutivo',
    href: '/cv/CV_Aram_Zakzuk_Ejecutivo.pdf',
    description: 'Dirección, consultoras y comités médicos.'
  },
  {
    label: 'CV Clínico',
    href: '/cv/CV_Aram_Zakzuk_Clinico.pdf',
    description: 'Hospitales y servicios asistenciales.'
  },
  {
    label: 'CV Técnico',
    href: '/cv/CV_Aram_Zakzuk.pdf',
    description: 'HealthTech, IA clínica y roles técnicos.'
  }
];

export default function CVDownloader({ variant = 'stacked' }: { variant?: Variant }) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-3">
        {CV_OPTIONS.map(opt => (
          <a
            key={opt.href}
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label={`Descargar ${opt.label} en PDF`}
          >
            <FileDown className="w-4 h-4" aria-hidden />
            {opt.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {CV_OPTIONS.map(opt => (
        <div key={opt.href} className="flex flex-col gap-2">
          <a
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost justify-center"
            aria-label={`Descargar ${opt.label} en PDF`}
          >
            <FileDown className="w-4 h-4" aria-hidden />
            {opt.label}
          </a>
          <p className="text-xs text-ink-2 leading-snug">{opt.description}</p>
        </div>
      ))}
    </div>
  );
}
