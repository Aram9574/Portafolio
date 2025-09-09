export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Clínica & Salud Digital',
    items: [
      'Medicina Familiar y Preventiva', 'Atención integral y salud comunitaria',
      'Resolución de problemas clínicos', 'Historia Clínica Electrónica (HCE)',
      'Protocolos clínicos y guías de práctica', 'Seguridad del paciente',
      'Geriatría y cuidados del adulto mayor', 'Salud digital y transformación sanitaria'
    ]
  },
  {
    title: 'Data & Machine Learning',
    items: [
      'Machine Learning', 'Deep Learning', 'NLP', 'Visión por computador',
      'Preprocesamiento', 'Validación cruzada',
      'Python', 'NumPy', 'Pandas', 'Seaborn', 'scikit-learn', 'Jupyter/Colab',
      'Evaluación (AUC/ROC, F1, PR)', 'SQL'
    ]
  },
  {
    title: 'Interoperabilidad & Estándares clínicos',
    items: [
      'HL7 v2', 'FHIR R4', 'SNOMED CT', 'OMOP',
      'DICOM', 'PACS', 'HIS', 'LIS', 'RIS', 'LOINC'
    ]
  },
  {
    title: 'Backend, MLOps & Cloud',
    items: [
      'Django', 'DRF', 'FastAPI (básico)', 'RESTful APIs',
      'Autenticación (JWT/OAuth)', 'PostgreSQL', 'SQLite', 'Migraciones y validación',
      'MLOps', 'Cloud Computing', 'Azure (DP-900)', 'Docker',
      'Git/GitHub', 'GitHub Actions (CI/CD)', 'Streamlit', 'Vercel/Render', 'RGPD by design'
    ]
  }
];
