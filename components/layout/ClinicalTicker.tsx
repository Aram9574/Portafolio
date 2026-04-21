const ITEMS = [
  'Healthcare & Clinical AI Consultant',
  'Evaluación de Clinical AI',
  'Estrategia de adopción clínica',
  'EU AI Act · Reglamento 2024/1689',
  'Medical Device Regulation (MDR)',
  'Software as a Medical Device (SaMD)',
  'ISO 13485',
  'EHDS · Espacio Europeo de Datos Sanitarios',
  'HL7 FHIR',
  'SNOMED-CT',
  'Clinical Decision Support Systems (CDSS)',
  'Healthcare Data Analytics',
  'Interoperabilidad sanitaria',
  'Transformación Digital Sanitaria',
  'Salud Digital · eHealth',
  'Medical Affairs',
  'Traducción clínica–técnica',
  'HealthTech · MedTech · Life Sciences',
];

export default function ClinicalTicker() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track px-6">
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
