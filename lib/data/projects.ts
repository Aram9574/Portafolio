export type Project = {
  slug:string;
  title:string;
  shortDescription:string;
  context:string;
  solution:string;
  impact:string;
  regulatory?:string;
  conclusion?:string;
  lessons?:string;
  nextSteps?:string;
  tipo?: 'estrella' | 'academico';
  tags:string[];
  cover?:string;
  links?:{demo?:string; repo?:string};
};

export const projects: Project[] = [
  {
    slug: 'clinai-classifier',
    title: 'ClinAI Classifier — Clasificador EU AI Act para IA en salud',
    shortDescription: 'Herramienta open source que clasifica sistemas de IA sanitarios bajo el EU AI Act (Reglamento 2024/1689). Pipeline de dos etapas con agente LLM + motor de reglas estático.',
    context: 'Los fabricantes de IA sanitaria deben clasificar sus sistemas bajo el EU AI Act antes de desplegar. No existía una herramienta abierta que diera un veredicto auditable con base legal citada.',
    solution: 'Pipeline de dos etapas: agente de clasificación con Claude Sonnet 4.5 + motor de reglas con invariante de no-degradación. Devuelve nivel de riesgo (PROHIBITED / HIGH_RISK / LIMITED_RISK / MINIMAL_RISK), categorías del Anexo III, flags del Artículo 5, base legal con artículos citados y flag SaMD. Genera informe PDF listo para auditoría.',
    impact: 'Herramienta abierta verificable en producción (demo en Hugging Face). Diseñada con criterio clínico real por un médico con formación técnica avanzada en IA aplicada a sanidad.',
    regulatory: 'Cubre EU AI Act (Reglamento 2024/1689) · Anexo III · Artículo 5 · SaMD · MDR.',
    tipo: 'estrella',
    tags: ['Python', 'FastAPI', 'Streamlit', 'Claude API', 'WeasyPrint', 'Docker', 'EU AI Act'],
    links: {
      demo: 'https://huggingface.co/spaces/aram1585/clinai-classifier',
      repo: 'https://github.com/aramzakzuk/clinai-classifier'
    }
  },
  {
    slug: 'tfm-deteccion-metabolica',
    title: 'CDSS estratificación de riesgo diabético (TFM)',
    shortDescription: 'AUC-ROC 0.942 sobre 253.680 registros reales del CDC BRFSS. Explicabilidad clínica XAI/SHAP. Desplegado en Hugging Face con cumplimiento RGPD + EU AI Act + EHDS.',
    context: 'Estratificación temprana de riesgo diabético. Modelo validado empíricamente sobre la base nacional del CDC (EE.UU.) con 253.680 registros reales.',
    solution: 'Pipeline completo de clasificación multiclase con Random Forest. Análisis de equidad algorítmica por subgrupos demográficos (sexo, edad, etnia). Interpretabilidad XAI/SHAP para validación clínica directa por facultativos. Evaluación clínicamente honesta de los límites del modelo.',
    impact: 'AUC-ROC 0.942 (top 5% de modelos publicados en literatura para dataset NIDDK). Clasificación de variables por importancia clínica que permite triaje preventivo automatizado con precisión por clase documentada.',
    regulatory: 'Diseño bajo RGPD + EU AI Act + EHDS como restricciones desde el día uno, no checklist legal a posteriori.',
    tipo: 'estrella',
    tags: ['Random Forest', 'XAI/SHAP', 'Python', 'Scikit-learn', 'Hugging Face', 'EU AI Act'],
    links: {
      repo: 'https://github.com/Aram9574/diabetes-brfss-cdss',
      demo: 'https://huggingface.co/spaces/aram1585/diabetes-brfss-cdss'
    }
  },
  {
    slug: 'prediccion-ocupacion-hospitalaria',
    title: 'Predicción de ocupación hospitalaria mediante IA',
    shortDescription: 'Modelo de demanda de camas con reducción estimada de varianza en planificación del 30–40% sobre baseline naive. Variables clínicas y operativas.',
    context: 'La fragmentación entre urgencias, ingresos y altas convierte la planificación de camas en un ejercicio reactivo. El coste operativo y asistencial es alto.',
    solution: 'Modelo predictivo de demanda de camas construido sobre históricos de ocupación, ingresos, altas, estancia media e índices de urgencias. Variables clínicas y operativas combinadas.',
    impact: 'Reducción estimada de varianza en planificación de recursos del 30–40% sobre baseline naive, aplicable a gestión anticipada de capacidad asistencial.',
    tipo: 'estrella',
    tags: ['Python', 'Time Series', 'Healthcare Data Analytics', 'Hospital Operations']
  },
  {
    slug: 'erp-geriatrico-fhir',
    title: 'GeriCare — Prototipo ERP con HL7/FHIR R4',
    shortDescription: 'Prototipo de capa de interoperabilidad basada en HL7/FHIR R4 para centralización de datos clínicos en residencias geriátricas. Proyecto personal.',
    context: 'Explorar la modelación de recursos FHIR R4 aplicada a un ERP sanitario para entornos geriátricos con datos fragmentados entre especialistas.',
    solution: 'Back-end en Django modelado sobre FHIR R4 con módulos de medicación, constantes vitales y perfiles de paciente. Prototipo de interoperabilidad.',
    impact: 'Prototipo de demostración técnica sobre estándares FHIR. No desplegado en producción ni validado en entornos clínicos reales.',
    tipo: 'academico',
    tags: ['Python', 'Django', 'PostgreSQL', 'HL7/FHIR R4', 'Prototipo'],
    links: { repo: 'https://github.com/Aram9574/GeriCare' }
  }
];
