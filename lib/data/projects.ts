export type Project = {
  slug:string; title:string; context:string; solution:string; impact:string; tags:string[]; cover:string; links?:{demo?:string; repo?:string};
};

export const projects: Project[] = [
  {
    slug: 'erp-geriatrico-fhir',
    title: 'ERP Sanitario',
    context: 'Plataforma para centros de salud: pacientes, medicación, fisioterapia, evaluaciones y mas.',
    solution: 'Django + DRF, integración HL7/FHIR para interoperabilidad, PostgreSQL, despliegue en Render.',
    impact: 'Reducción de tiempos de registro en 38% y menor error de medicación (near-miss) en 22%.',
    tags: ['HL7/FHIR','Django','DRF','PostgreSQL','Bootstrap'],
    cover: '/images/projects/erp-geriatrico-fhir.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'ml-riesgo-cardiovascular',
    title: 'Clasificación de riesgo cardiovascular',
    context: 'Predicción a 10 años de riesgo para enfermedad coronaria usando dataset Framingham.',
    solution: 'Scikit-learn: imputación, normalización, selección de variables, LR y árboles; validación estratificada.',
    impact: 'AUC 0.79 en validación; informe con umbral clínico y matriz de confusión.',
    tags: ['Scikit-learn','Pandas','Modelado clínico'],
    cover: '/images/projects/framingham.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'bcancer-logistic-regression',
    title: 'Clasificación de cáncer de mama',
    context: 'Proyecto con regresión logística en dataset de cáncer de mama.',
    solution: 'Pipeline reproducible, notebook con métricas y curvas ROC/PR, README orientado a salud.',
    impact: 'F1 0.91 global; recomendaciones para mejorar sensibilidad en la clase riesgo.',
    tags: ['Logistic Regression','Python','ML Ops básico'],
    cover: '/images/projects/breast-cancer.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'prediccion-readmisiones',
    title: 'Predicción de readmisiones hospitalarias',
    context: 'Modelo para estimar riesgo de reingreso a 30 días usando EHR y antecedentes clínicos.',
    solution: 'Pipelines con scikit-learn/XGBoost, manejo de desbalance y validación temporal.',
    impact: 'Priorización de seguimiento postalta y reducción de reingresos evitables.',
    tags: ['Python','Pandas','XGBoost','SHAP'],
    cover: '/images/projects/prediccion-readmisiones.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'dashboard-clinico-kpis',
    title: 'Dashboard clínico de KPIs',
    context: 'Visualización de indicadores asistenciales: tiempos de espera, ocupación y seguimiento.',
    solution: 'Streamlit/Plotly sobre datos agregados de HIS; despliegue en Vercel/Render.',
    impact: 'Mejor visibilidad operativa y toma de decisiones en tiempo casi real.',
    tags: ['Streamlit','Plotly','Pandas'],
    cover: '/images/projects/dashboard-clinico-kpis.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'automatizaciones-ia-salud',
    title: 'Automatizaciones IA para equipos de salud',
    context: 'Jobs automáticos: resúmenes, extracción de entidades y alertas básicas.',
    solution: 'Tareas programadas, NLP básico y notificaciones; logs y monitorización.',
    impact: 'Ahorro de tiempo administrativo y mejor priorización del trabajo.',
    tags: ['Python','NLP','APIs'],
    cover: '/images/projects/automatizaciones-ia-salud.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'longitud-estancia-ml',
    title: 'Predicción de longitud de estancia',
    context: 'Estimación de días de estancia por episodio para planificación de camas.',
    solution: 'Modelos baselines + gradiente boosting; validación por servicio y cohorte.',
    impact: 'Mejor planificación operativa y uso eficiente de recursos.',
    tags: ['scikit-learn','Modelado clínico','Métricas'],
    cover: '/images/projects/longitud-estancia-ml.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'nlp-eventos-adversos',
    title: 'Detección de eventos adversos (NLP)',
    context: 'Identificación de potenciales eventos adversos a partir de notas clínicas.',
    solution: 'Preprocesamiento, regex clínicas y clasificación supervisada; revisión médica.',
    impact: 'Soporte a seguridad del paciente y vigilancia proactiva.',
    tags: ['NLP','Clasificación','Seguridad del paciente'],
    cover: '/images/projects/nlp-eventos-adversos.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'integracion-lis-fhir',
    title: 'Integración LIS ↔ FHIR',
    context: 'Interfaz de laboratorio (LIS) con mapeo a recursos FHIR para resultados.',
    solution: 'Modelado Observation/Patient/ServiceRequest, validaciones y endpoints.',
    impact: 'Interoperabilidad de resultados y menos trabajo manual de registro.',
    tags: ['FHIR R4','HL7 v2','Interoperabilidad'],
    cover: '/images/projects/integracion-lis-fhir.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  }
];
