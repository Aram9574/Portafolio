'use client';

import { useState } from 'react';
import { Mail, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
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
        body: JSON.stringify({ email, source: 'Newsletter Home' }),
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
    <section id="newsletter" className="py-24 rule-b">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 07 — Newsletter</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div data-aos="fade-right">
              <div className="eyebrow mb-6 flex items-center gap-2">
                <Sparkles className="w-3 h-3" aria-hidden /> Curando el Futuro
              </div>
              <h2 className="display-l mb-6">
                Insights de IA Clínica<br />
                <span className="italic">directo a tu bandeja.</span>
              </h2>
              <p className="lead">
                Únete a +400 profesionales del ecosistema HealthTech. Análisis técnicos sobre FHIR, despliegue de LLMs en hospitales y regulación EU AI Act.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-delay="100" className="lg:pt-12">
              {status === 'success' ? (
                <div className="border border-[var(--ink)] bg-[var(--paper)] p-8">
                  <CheckCircle2 className="w-10 h-10 text-[var(--ink)] mb-4" />
                  <h3 className="display-m mb-3">Suscripción confirmada.</h3>
                  <p className="caption normal-case tracking-normal italic" style={{fontSize: '0.9rem'}}>"La mejor forma de predecir el futuro es construyéndolo."</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--ink)]" />
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-[var(--paper)] border-2 border-[var(--ink)] text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--ink)] focus:ring-offset-2 focus:ring-offset-[var(--bone)] font-mono text-sm transition h-[60px]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-ink w-full justify-center h-[60px] disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Suscribirse al Newsletter →</>
                    )}
                  </button>
                  <p className="caption text-center" style={{fontSize: '0.65rem'}}>
                    Cero spam · Un mail cada 15 días · Cancela cuando quieras
                  </p>
                  {status === 'error' && (
                    <p className="text-sm text-[var(--danger)] text-center font-mono">Algo salió mal. Inténtalo de nuevo.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
