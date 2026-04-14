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
  cover:string;
  links?:{demo?:string; repo?:string};
};

export const projects: Project[] = [
  {
    slug: 'tfm-deteccion-metabolica',
    title: 'Detección de patología metabólica mediante ML (TFM)',
    shortDescription: 'AUC-ROC de 0.942 en predicción de riesgo metabólico usando 253k+ registros del CDC e interpretabilidad SHAP.',
    context: 'Trabajo Final de Máster: La detección tardía de condiciones metabólicas eleva drásticamente los costes en salud. El objetivo fue construir y desplegar un modelo predictivo validado empíricamente usando una cohorte robusta de 253.680 registros del CDC.',
    solution: 'Pipeline completo de machine learning en Python (Scikit-learn/Pandas). Tratamiento del desbalance de clases. Entrenamiento de múltiples algoritmos seleccionando Random Forest como óptimo. Creación de un CDSS interactivo.',
    impact: 'AUC-ROC: 0.942. Aplicación de interpretabilidad clínica (XAI/SHAP) validando qué variables priorizan el riesgo empírico (p.ej.: IMC extremo, hipertensión).',
    regulatory: 'Diseño alineado a EU AI Act mediante la garantía de explicabilidad algorítmica de la caja negra.',
    tipo: 'estrella',
    tags: ['Machine Learning', 'Big Data', 'Python', 'SHAP', 'Hugging Face'],
    cover: '/images/projects/framingham.jpg',
    links: { 
      repo: 'https://github.com/Aram9574/diabetes-brfss-cdss',
      demo: 'https://huggingface.co/spaces/aram1585/diabetes-brfss-cdss'
    }
  },
  {
    slug: 'clinote-saas',
    title: 'Clinote — Clinical NLP Platform',
    shortDescription: 'SaaS NLP que facilita reducir el burnout clínico extrayendo entidades biomédicas estructuradas del texto libre.',
    context: 'La carga administrativa por redacción clínica (burnout) resta tiempo de atención directa al paciente. Clinote soluciona este flujo integrando IA generativa y extracción semántica.',
    solution: 'Plataforma SaaS en Next.js y TypeScript. Integra procesamiento de lenguaje natural (NLP) avanzado usando LLMs, autenticación moderna segura (Supabase) y almacenamiento de base de datos eficiente.',
    impact: 'Prototipo enfocado a agilizar radicalmente el triaje y el registro de la evolución clínica diaria.',
    tipo: 'estrella',
    tags: ['TypeScript', 'Next.js', 'NLP Clínico', 'SaaS', 'Supabase'],
    cover: '/images/projects/nlp-eventos-adversos.jpg',
    links: { repo: 'https://github.com/Aram9574/Clinote' }
  },
  {
    slug: 'erp-geriatrico-fhir',
    title: 'GeriCare — ERP Sanitario Interoperable',
    shortDescription: 'Infraestructura Django HL7/FHIR diseñada para mitigar errores cruzados de medicación geriátrica.',
    context: 'Centros geriátricos con historiales fragmentados requerían un sistema unificado para coordinar enfermería, medicina, fisioterapia y farmacia en un solo entorno.',
    solution: 'Arquitectura en Django y PostgreSQL modelada respetando el marco FHIR R4 para permitir el intercambio de datos clínicos (Patient, Observation, MedicationStatement).',
    impact: 'Orientado a mitigar errores preventivos de medicación y estandarizar la interoperabilidad para transferencias agudas.',
    tipo: 'estrella',
    tags: ['Python', 'Django', 'PostgreSQL', 'HL7/FHIR', 'Bootstrap'],
    cover: '/images/projects/erp-geriatrico-fhir.jpg',
    links: { repo: 'https://github.com/Aram9574/GeriCare' }
  },
  {
    slug: 'modelos-ia-clinicos',
    title: 'Modelos predictivos: Oncología y Cardiología',
    shortDescription: 'Repositorio de Data Science abordando detección de cáncer de mama y riesgo cardiovascular con scikit-learn.',
    context: 'Proyecto analítico enfocado en abordar datasets estándar biomédicos (Framingham CHD, Breast Cancer Wisconsin) para consolidar destrezas ML.',
    solution: 'Ciclos completos en Jupyter Notebook: limpieza, normalización PCA, imputación, y selección robusta. Evaluación rigurosa de curvas ROC/PR.',
    impact: 'Métricas de validación consolidadas en informes clínicos, demostrando el balance entre sensibilidad y especificidad vital para Screening.',
    tipo: 'academico',
    tags: ['Jupyter Notebook', 'Scikit-learn', 'Logistic Regression', 'PCA'],
    cover: '/images/projects/breast-cancer.jpg',
    links: { repo: 'https://github.com/Aram9574/Modelos_IA' }
  },
  {
    slug: 'portafolio-arquitectura',
    title: 'Portafolio Web (Alejandro Zakzuk)',
    shortDescription: 'Arquitectura fron-tend moderna en React/Next.js hospedando mi portafolio digital, con enfoque técnico y clínico.',
    context: 'Necesidad de un escaparate profesional indexable, estático/dinámico, que respalde la faceta tecnológica del perfil biomédico.',
    solution: 'Stack actual con TypeScript, entorno de componentes React, TailwindCSS para estilos utilitarios y despliegue rápido automatizado.',
    impact: 'Código de código abierto que evidencia habilidades técnicas full-stack en plataformas Javascript requeridas para prototipado HealthTech.',
    tipo: 'academico',
    tags: ['TypeScript', 'Next.js', 'React', 'TailwindCSS'],
    cover: '/images/projects/dashboard-clinico-kpis.jpg',
    links: { repo: 'https://github.com/Aram9574/Portafolio' }
  }
];
