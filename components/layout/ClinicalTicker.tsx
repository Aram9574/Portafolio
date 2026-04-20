const ITEMS = [
  'Clinical Decision Support Systems (CDSS)',
  'Machine Learning aplicado a medicina',
  'Healthcare Data Analytics',
  'Artificial Intelligence in Healthcare',
  'HL7 FHIR',
  'SNOMED-CT',
  'Python',
  'Scikit-learn',
  'Natural Language Processing (NLP)',
  'Deep Learning',
  'Explainable AI',
  'SQL',
  'Microsoft Azure',
  'EU AI Act',
  'Medical Device Regulation (MDR)',
  'ISO 13485',
  'Software as a Medical Device (SaMD)',
  'Digital Health',
  'Real-World Evidence (RWE)',
  'Medicina de precisión',
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
