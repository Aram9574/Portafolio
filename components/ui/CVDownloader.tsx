'use client';

import { FileDown, FileText } from 'lucide-react';
import { analyticsEvents } from '@/lib/analytics';

type Variant = 'stacked' | 'compact';

type CVOption = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
  icon?: 'download' | 'document';
};

const CV_OPTIONS: CVOption[] = [
  {
    label: 'Brief ejecutivo · 1 página',
    href: '/one-pager',
    description: 'Resumen para dirección, consultoras y compra pública. Imprime como PDF.',
    icon: 'document'
  },
  {
    label: 'CV completo · PDF',
    href: '/cv/CV_Aram_Zakzuk.pdf',
    description: 'Formación, experiencia clínica y proyectos técnicos.',
    external: true
  }
];

export default function CVDownloader({ variant = 'stacked' }: { variant?: Variant }) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-3">
        {CV_OPTIONS.map(opt => {
          const Icon = opt.icon === 'document' ? FileText : FileDown;
          return (
            <a
              key={opt.href}
              href={opt.href}
              target={opt.external ? '_blank' : undefined}
              rel={opt.external ? 'noopener noreferrer' : undefined}
              className="btn-ghost"
              aria-label={opt.label}
              onClick={() => analyticsEvents.downloadCV(opt.label)}
            >
              <Icon className="w-4 h-4" aria-hidden />
              {opt.label}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {CV_OPTIONS.map(opt => {
        const Icon = opt.icon === 'document' ? FileText : FileDown;
        return (
          <div key={opt.href} className="flex flex-col gap-2">
            <a
              href={opt.href}
              target={opt.external ? '_blank' : undefined}
              rel={opt.external ? 'noopener noreferrer' : undefined}
              className="btn-ghost justify-center"
              aria-label={opt.label}
              onClick={() => analyticsEvents.downloadCV(opt.label)}
            >
              <Icon className="w-4 h-4" aria-hidden />
              {opt.label}
            </a>
            <p className="text-xs text-ink-2 leading-snug">{opt.description}</p>
          </div>
        );
      })}
    </div>
  );
}
