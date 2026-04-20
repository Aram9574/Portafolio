'use client';

import { useState } from 'react';
import { Download, ShieldCheck, Mail, CheckCircle2, Loader2 } from 'lucide-react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="lead-magnet" className="py-24 rule-b">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 08 — Recurso</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            <div data-aos="fade-right">
              <div className="eyebrow mb-6 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" aria-hidden /> Gratis · CTOs y Dir. Médicos
              </div>
              <h2 className="display-l mb-6">
                Checklist de Despliegue Seguro de IA <span className="italic">en entornos clínicos.</span>
              </h2>
              <p className="lead mb-8">
                El 80% de los proyectos de IA clínica fracasan en implementación, no en desarrollo. Esta guía condensa el protocolo que uso para validar viabilidad técnica y regulatoria antes de desplegar.
              </p>
              <ul className="space-y-4 border-t border-[var(--rule)] pt-6">
                <li className="flex items-start gap-4">
                  <span className="font-mono text-xs text-[var(--muted)] pt-1">01</span>
                  <span className="text-[var(--ink-2)]">Interoperabilidad obligatoria <span className="font-mono text-sm">(HL7/FHIR v4)</span></span>
                </li>
                <li className="flex items-start gap-4 border-t border-[var(--rule)] pt-4">
                  <span className="font-mono text-xs text-[var(--muted)] pt-1">02</span>
                  <span className="text-[var(--ink-2)]">Restricciones clave del <span className="font-mono text-sm">EU AI Act & GDPR</span> Sanitario</span>
                </li>
                <li className="flex items-start gap-4 border-t border-[var(--rule)] pt-4">
                  <span className="font-mono text-xs text-[var(--muted)] pt-1">03</span>
                  <span className="text-[var(--ink-2)]">Defensibilidad estadística y médica del modelo <span className="font-mono text-sm">(XAI)</span></span>
                </li>
              </ul>
            </div>

            <div className="lg:pt-12" data-aos="fade-left" data-aos-delay="200">
              <div className="border border-[var(--ink)] bg-[var(--paper)] p-8">
                {status === 'success' ? (
                  <div>
                    <CheckCircle2 className="w-10 h-10 text-[var(--ink)] mb-4" />
                    <h3 className="display-m mb-3">Enviado.</h3>
                    <p className="caption normal-case tracking-normal" style={{fontSize: '0.9rem'}}>
                      Revisa tu correo. Si no lo ves, echa un vistazo a la carpeta de spam.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="eyebrow mb-2">¿A dónde te lo envío?</div>
                    <p className="caption normal-case tracking-normal mb-6" style={{fontSize: '0.85rem'}}>
                      Únete a otros líderes técnicos de HealthTech. Cero spam, solo ingeniería útil.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                        <input
                          type="email"
                          required
                          placeholder="tu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-transparent border border-[var(--ink)] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none font-mono text-sm h-[52px]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-ink w-full justify-center h-[52px] disabled:opacity-50"
                      >
                        {status === 'loading' ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <><Download className="w-4 h-4" /> Descargar documento</>
                        )}
                      </button>

                      {status === 'error' && (
                        <p className="text-sm text-[var(--danger)] font-mono text-center">
                          Error de conexión. Intenta de nuevo.
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
