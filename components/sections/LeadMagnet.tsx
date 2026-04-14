'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
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
    <Section id="lead-magnet">
      <div 
        className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/5 to-black/40 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Recurso Gratuito para CTOs y Directores Médicos
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Checklist de Despliegue Seguro de IA en Entornos Clínicos
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Asegurar la viabilidad técnica y legal de un modelo en un hospital no es opcional. Descarga mi guía de un folio con el protocolo que utilizo para validar:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                Interoperabilidad obligatoria (HL7/FHIR v4)
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                Restricciones clave del EU AI Act & GDPR Sanitario
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                Defensibilidad estadística y médica del modelo (XAI)
              </li>
            </ul>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute inset-0 bg-emerald-400/10 blur-2xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">¡Enviado a tu bandeja!</h3>
                  <p className="text-sm text-gray-400">
                    Revisa tu correo. Si no lo ves, echa un vistazo a la carpeta de spam.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-semibold text-white mb-2">¿A dónde te la envío?</h3>
                  <p className="text-xs text-gray-400 mb-6">Únete a otros líderes técnicos de HealthTech. Cero spam, solo ingeniería útil.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-white placeholder:text-gray-600 transition"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-400 text-black font-bold rounded-lg hover:bg-emerald-300 transition disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition" />
                          Descargar Documento
                        </>
                      )}
                    </button>
                    
                    {status === 'error' && (
                      <p className="text-xs text-red-400 text-center mt-2">
                        Hubo un error de conexión. Por favor intenta de nuevo.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
