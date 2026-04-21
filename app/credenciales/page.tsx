import Section from '@/components/ui/Section';
import CertificationBadge from '@/components/sections/CertificationBadge';
import { certifications, type CertificationItem } from '@/lib/data/education';

export const metadata = {
  title: 'Credenciales y certificaciones · Aram Zakzuk',
  description:
    'Formación continua verificable de Aram Zakzuk: Stanford AI in Healthcare, SNOMED International, Microsoft Azure, Comunidad de Madrid, SEIS, DELF B1, TOEFL iBT y ACLS/BLS.',
};

type Group = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  filter: (c: CertificationItem) => boolean;
};

const GROUPS: Group[] = [
  {
    id: 'regulatoria',
    eyebrow: '01 · Regulación y técnica',
    title: 'Formación regulatoria y técnica',
    description:
      'Credenciales oficiales de referencia en interoperabilidad, datos y marco regulatorio español y europeo.',
    filter: c => c.category === 'regulatoria',
  },
  {
    id: 'stanford',
    eyebrow: '02 · Stanford',
    title: 'Stanford AI in Healthcare',
    description:
      'Especialización completa de Stanford University en IA aplicada a sanidad: fundamentos, evaluación y despliegue clínico.',
    filter: c => c.category === 'stanford',
  },
  {
    id: 'congresos',
    eyebrow: '03 · Congresos',
    title: 'Congresos y comunidad',
    description: 'Participación en foros sectoriales de informática de la salud.',
    filter: c => c.category === 'congresos',
  },
  {
    id: 'idiomas',
    eyebrow: '04 · Idiomas',
    title: 'Idiomas',
    description: 'Certificaciones oficiales de idiomas.',
    filter: c => c.category === 'idiomas',
  },
  {
    id: 'salud',
    eyebrow: '05 · Salud y emergencias',
    title: 'Salud y emergencias',
    description: 'Certificaciones clínicas vigentes en soporte vital.',
    filter: c => c.category === 'salud',
  },
];

export default function CredencialesPage() {
  return (
    <>
      <Section
        id="credenciales-hero"
        index="№ 00 — Credenciales"
        title="Credenciales y certificaciones"
        subtitle="Formación continua verificable. Cada credencial enlaza a su registro oficial cuando existe, para que cualquier comité, comprador público o equipo técnico pueda contrastarla en su fuente."
      >
        <div className="border border-rule bg-paper px-5 py-4 max-w-3xl">
          <div className="eyebrow mb-2">Instituciones emisoras</div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Stanford University · SNOMED International · Microsoft · Comunidad de Madrid · SEIS · American Heart Association · Ministère de l&apos;Éducation nationale · TOEFL / ETS.
          </p>
        </div>
      </Section>

      {GROUPS.map(group => {
        const items = certifications.filter(group.filter);
        if (items.length === 0) return null;
        return (
          <Section
            key={group.id}
            id={group.id}
            index={group.eyebrow}
            title={group.title}
            subtitle={group.description}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map(cert => (
                <CertificationBadge
                  key={`${cert.issuer}-${cert.title}`}
                  {...cert}
                />
              ))}
            </div>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {items
                .filter(cert => cert.note || cert.credentialId)
                .map(cert => (
                  <li
                    key={`note-${cert.issuer}-${cert.title}`}
                    className="text-xs text-ink-2 border-t border-rule pt-3"
                  >
                    <span className="font-mono uppercase tracking-widest text-[0.65rem] text-muted">
                      {cert.title}
                    </span>
                    {cert.note && (
                      <p className="mt-1 leading-relaxed">{cert.note}</p>
                    )}
                    {cert.credentialId && (
                      <p className="mt-1 font-mono text-[0.7rem] text-muted">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </li>
                ))}
            </ul>
          </Section>
        );
      })}

      <Section id="credenciales-cta">
        <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-8 items-end">
          <div className="md:col-span-8">
            <h2 className="display-l">
              ¿Necesitas validar una credencial o ver el CV completo?
            </h2>
            <p className="lead mt-4">
              Puedo compartir la documentación original y el contexto clínico de cada certificación. Revisamos el encaje para tu hospital, consultora o administración en una llamada de 15 minutos.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <a href="/contacto#agenda" className="btn-ink">
              Reservar llamada →
            </a>
            <a href="/sobre-mi" className="btn-ghost">
              Ver perfil
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
