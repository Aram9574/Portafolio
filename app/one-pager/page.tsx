import type { Metadata } from 'next'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Brief ejecutivo · Aram Zakzuk, MD',
  description:
    'Brief de una página para dirección, consultoras y compra pública. Healthcare & Clinical AI Consultant basado en Madrid.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: '/one-pager',
  },
}

export default function OnePagerPage() {
  return (
    <div className="one-pager">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page { size: A4; margin: 14mm 14mm 12mm 14mm; }
            @media print {
              nav, header, footer, .no-print { display: none !important; }
              body { background: #EFE8D9 !important; }
              main { padding-top: 0 !important; }
              .one-pager { padding: 0 !important; }
            }
            .one-pager {
              font-family: 'IBM Plex Sans', system-ui, sans-serif;
              color: #111110;
              background: #EFE8D9;
              padding: 48px 56px;
              max-width: 900px;
              margin: 0 auto;
            }
            .op-serif { font-family: 'Fraunces', 'Times New Roman', serif; }
            .op-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.12em; text-transform: uppercase; }
            .op-rule { border-top: 1px solid #111110; }
            .op-accent { background: #C4F542; padding: 0 4px; }
          `,
        }}
      />

      {/* Cabecera */}
      <header className="flex items-start justify-between pb-4 op-rule border-b">
        <div>
          <h1 className="op-serif text-[32px] leading-none font-medium tracking-tight">Aram Zakzuk, MD</h1>
          <p className="op-mono text-[10px] mt-2 opacity-70">
            Healthcare &amp; Clinical AI Consultant · Madrid
          </p>
        </div>
        <div className="op-mono text-[9px] opacity-60 text-right">
          alejandrozakzuk.com<br />
          zakzukaram@gmail.com<br />
          linkedin.com/in/aramzakzuk
        </div>
      </header>

      {/* Propuesta de valor */}
      <section className="mt-5">
        <p className="op-serif italic text-[15px] leading-relaxed">
          El perfil que las organizaciones sanitarias y las consultoras buscan cuando necesitan que alguien
          entienda el problema antes de proponer la solución.
        </p>
        <p className="text-[11px] leading-relaxed mt-3 opacity-85">
          Médico con 6 años de práctica clínica (Méderi, Colombia · 2018–2024) + Máster en IA aplicada a Sanidad
          (CEMP) + Máster en Salud Digital (Universidad Europea) + AI in Healthcare Specialization (Stanford).
          No developer, no data scientist: la capacidad técnica fundamenta el criterio consultor.
        </p>
      </section>

      {/* Dónde aporto valor */}
      <section className="mt-5 pt-4 op-rule border-t">
        <div className="op-mono text-[9px] opacity-70 mb-3">Dónde aporto valor</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <div>
            <div className="op-mono text-[9px] opacity-60">01</div>
            <div className="op-serif text-[13px] mt-1 font-medium">Evaluación y estrategia de adopción de Clinical AI</div>
            <p className="text-[10px] leading-snug opacity-75 mt-1">
              Auditoría de soluciones, análisis de encaje asistencial y estrategia de adopción en hospitales
              reales.
            </p>
          </div>
          <div>
            <div className="op-mono text-[9px] opacity-60">02</div>
            <div className="op-serif text-[13px] mt-1 font-medium">Asesoramiento regulatorio EU AI Act · MDR · SaMD</div>
            <p className="text-[10px] leading-snug opacity-75 mt-1">
              Clasificación bajo Reglamento 2024/1689, análisis de conformidad y hoja de ruta de cumplimiento.
            </p>
          </div>
          <div>
            <div className="op-mono text-[9px] opacity-60">03</div>
            <div className="op-serif text-[13px] mt-1 font-medium">Viabilidad clínica de CDSS, datos e interoperabilidad</div>
            <p className="text-[10px] leading-snug opacity-75 mt-1">
              Análisis clínico de CDSS, Healthcare Data Analytics e interoperabilidad (HL7 FHIR · SNOMED-CT · EHDS).
            </p>
          </div>
          <div>
            <div className="op-mono text-[9px] opacity-60">04</div>
            <div className="op-serif text-[13px] mt-1 font-medium">Traducción clínica–técnica en transformación digital</div>
            <p className="text-[10px] leading-snug opacity-75 mt-1">
              Puente entre comités médicos, equipos técnicos y compra pública en proyectos de transformación
              digital sanitaria.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos que fundamentan el criterio */}
      <section className="mt-5 pt-4 op-rule border-t">
        <div className="op-mono text-[9px] opacity-70 mb-3">Proyectos que fundamentan el criterio</div>
        <ul className="text-[10.5px] leading-snug space-y-2">
          <li>
            <span className="op-serif font-medium text-[11.5px]">ClinAI Classifier</span>
            <span className="opacity-75"> · Herramienta open source que clasifica sistemas de IA sanitarios bajo
            EU AI Act. Pipeline Claude Sonnet 4.5 + motor de reglas con invariante de no-degradación. Demo en
            Hugging Face.</span>
          </li>
          <li>
            <span className="op-serif font-medium text-[11.5px]">CDSS estratificación diabética (TFM)</span>
            <span className="opacity-75"> · Random Forest sobre 253.680 registros reales del CDC BRFSS.
            <span className="op-accent">AUC-ROC 0.942</span>. Explicabilidad XAI/SHAP. Cumplimiento RGPD + EU AI Act + EHDS
            desde el día uno.</span>
          </li>
          <li>
            <span className="op-serif font-medium text-[11.5px]">Predicción de ocupación hospitalaria</span>
            <span className="opacity-75"> · Modelo de demanda de camas con reducción estimada del 30–40% de
            varianza sobre baseline naive. Variables clínicas + operativas.</span>
          </li>
        </ul>
      </section>

      {/* Sectores + regulación */}
      <section className="mt-5 pt-4 op-rule border-t grid grid-cols-2 gap-6">
        <div>
          <div className="op-mono text-[9px] opacity-70 mb-2">Sectores</div>
          <p className="text-[10px] leading-relaxed opacity-85">
            HealthTech · MedTech · Life Sciences · Digital Health · Industria Farmacéutica · Medical Device ·
            Hospitales · Aseguradoras · Administración pública · CCAA · Ministerio de Sanidad
          </p>
        </div>
        <div>
          <div className="op-mono text-[9px] opacity-70 mb-2">Regulación e interoperabilidad</div>
          <p className="text-[10px] leading-relaxed opacity-85">
            EU AI Act (Reglamento 2024/1689) · MDR · SaMD · ISO 13485 · RGPD · EHDS · HL7 FHIR R4 · SNOMED-CT ·
            LOINC · Marcado CE
          </p>
        </div>
      </section>

      {/* Formación */}
      <section className="mt-5 pt-4 op-rule border-t">
        <div className="op-mono text-[9px] opacity-70 mb-2">Formación</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[10px]">
          <div><span className="op-serif font-medium">Máster en IA aplicada a Sanidad</span><span className="opacity-70"> · CEMP · 2025–2026</span></div>
          <div><span className="op-serif font-medium">Máster en Salud Digital / eHealth</span><span className="opacity-70"> · Universidad Europea · 2025–2026</span></div>
          <div><span className="op-serif font-medium">AI in Healthcare Specialization</span><span className="opacity-70"> · Stanford University · 2025–2026</span></div>
          <div><span className="op-serif font-medium">Medicina</span><span className="opacity-70"> · Universidad del Rosario · 2018–2024</span></div>
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-6 pt-4 op-rule border-t flex items-center justify-between">
        <div className="text-[10px]">
          <div className="op-mono text-[9px] opacity-60 mb-1">Siguiente paso</div>
          <div className="op-serif text-[13px] font-medium">
            Primera conversación de 15 minutos · sin coste
          </div>
        </div>
        <div className="text-right text-[10px] op-mono opacity-85">
          calendly.com/zakzukaram<br />
          <span className="opacity-60">Respuesta en 24h laborables</span>
        </div>
      </footer>

      <PrintButton />
    </div>
  )
}
