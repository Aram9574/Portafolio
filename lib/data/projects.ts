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
    title: 'Detección temprana de condición metabólica mediante ML',
    shortDescription: 'Modelo de clasificación clínica con AUC-ROC de 0.942. Incluye análisis XAI/SHAP e integración del marco regulatorio europeo (RGPD, EU AI Act, EHDS).',
    context: 'La detección tardía de condiciones metabólicas es uno de los problemas más costosos para los sistemas de salud. El diagnóstico suele llegar cuando la enfermedad ya ha progresado, aumentando la carga asistencial y reduciendo las opciones terapéuticas. El objetivo de este proyecto fue construir un modelo predictivo capaz de identificar pacientes en riesgo antes de que aparezcan síntomas clínicos evidentes.',
    solution: 'Pipeline completo de clasificación supervisada: Preprocesamiento y limpieza de datos clínicos; Selección de variables con criterio clínico y estadístico; Entrenamiento comparativo de múltiples algoritmos (Logistic Regression, Decision Tree, Random Forest, XGBoost); Optimización de hiperparámetros; Evaluación con métricas clínicamente relevantes: AUC-ROC, sensibilidad, especificidad, valor predictivo positivo.',
    impact: 'Mejor modelo: Random Forest. AUC-ROC: 0.942. Análisis de interpretabilidad: XAI/SHAP para identificar las variables clínicas con mayor poder predictivo y explicar las predicciones individuales del modelo.',
    regulatory: 'El proyecto incorporó un análisis de cumplimiento normativo europeo aplicado al despliegue de modelos de IA en entornos clínicos: RGPD (gestión de datos de salud), EU AI Act (IA de alto riesgo en ámbito sanitario) y EHDS (consideraciones para el uso secundario de datos clínicos).',
    conclusion: 'Este proyecto demuestra que es posible construir modelos predictivos clínicamente útiles con datasets reales, combinando rigor metodológico, interpretabilidad y cumplimiento regulatorio desde el diseño. El AUC-ROC de 0.942 representa una capacidad discriminativa alta para el contexto clínico de detección temprana.',
    tipo: 'estrella',
    tags: ['Machine Learning', 'Random Forest', 'XAI/SHAP', 'EU AI Act', 'Python', 'Scikit-learn'],
    cover: '/images/projects/framingham.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'riesgo-metabolico-cdc',
    title: 'Clasificación de riesgo metabólico CDC BRFSS',
    shortDescription: 'CDSS interactivo basado en Big Data (253k registros) para la clasificación de perfiles de riesgo diabético.',
    context: 'Análisis masivo de 253.680 registros del CDC para clasificar perfiles de riesgo metabólico y predecir diabetes.',
    solution: 'Pipeline de Big Data con Pandas/Scikit-learn, manejo de desbalance de clases y optimización de hiperparámetros. Desplegado como CDSS interactivo.',
    impact: 'Identificación de patrones de riesgo a gran escala con alta precisión estadística. Incluye validación de modelos y dashboard de visualización.',
    tipo: 'estrella',
    tags: ['Big Data','CDC','Python','Hugging Face'],
    cover: '/images/projects/prediccion-readmisiones.jpg',
    links: { 
      repo: 'https://github.com/Aram9574',
      demo: 'https://huggingface.co/spaces/aram1585/diabetes-brfss-cdss'
    }
  },
  {
    slug: 'ocupacion-hospitalaria-ia',
    title: 'Predicción de ocupación hospitalaria mediante IA',
    shortDescription: 'Diseño de sistema predictivo para gestión de camas hospitalarias. Arquitectura del modelo, variables clínicas y metodología propuesta. Máster en IA Aplicada a Sanidad (CEMP, 2025).',
    context: 'Proyecto de diseño de sistema predictivo para gestión de camas hospitalarias. Desarrollo conceptual y técnico: arquitectura del modelo, variables clínicas seleccionadas, metodología propuesta y marco de implementación. Asociado al Máster en IA Aplicada a Sanidad (CEMP, 2025).',
    solution: 'Series temporales y modelos de regresión avanzados para predecir picos de demanda asistencial.',
    impact: 'Mejora en la planificación de camas y reducción de cuellos de botella en servicios críticos.',
    tipo: 'estrella',
    tags: ['Predictive Analytics','Gestión Hospitalaria','Python'],
    cover: '/images/projects/longitud-estancia-ml.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'erp-geriatrico-fhir',
    title: 'ERP Sanitario',
    shortDescription: 'Plataforma integral para centros de salud con interoperabilidad HL7/FHIR y gestión clínica completa.',
    context: 'Plataforma para centros de salud: pacientes, medicación, fisioterapia, evaluaciones y más.',
    solution: 'Django + DRF, integración HL7/FHIR para interoperabilidad, PostgreSQL, despliegue en Render.',
    impact: 'Reducción de tiempos de registro en 38% y menor error de medicación (incidentes de medicación evitados (near miss)) en 22%.',
    tipo: 'academico',
    tags: ['HL7/FHIR','Django','DRF','PostgreSQL','Bootstrap'],
    cover: '/images/projects/erp-geriatrico-fhir.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'ml-riesgo-cardiovascular',
    title: 'Clasificación de riesgo cardiovascular',
    shortDescription: 'Aplicación de ML sobre el dataset Framingham para predecir riesgo coronario a 10 años.',
    context: 'Predicción a 10 años de riesgo para enfermedad coronaria usando dataset Framingham.',
    solution: 'Scikit-learn: imputación, normalización, selección de variables, LR y árboles; validación estratificada.',
    impact: 'AUC 0.79 en validación; informe con umbral clínico y matriz de confusión.',
    tipo: 'academico',
    tags: ['Scikit-learn','Pandas','Modelado clínico'],
    cover: '/images/projects/framingham.jpg',
    links: { repo: 'https://github.com/Aram9574/Modelos_IA/blob/main/Riesgo_Cardiovascular_RandomForest-2.ipynb' }
  },
  {
    slug: 'bcancer-logistic-regression',
    title: 'Clasificación de cáncer de mama',
    shortDescription: 'Pipeline de regresión logística para la detección temprana de patología mamaria maligna.',
    context: 'Proyecto con regresión logística en dataset de cáncer de mama.',
    solution: 'Pipeline reproducible, notebook con métricas y curvas ROC/PR, README orientado a salud.',
    impact: 'F1 0.91 global; recomendaciones para mejorar sensibilidad en la clase riesgo.',
    tipo: 'academico',
    tags: ['Logistic Regression','Python','ML Ops básico'],
    cover: '/images/projects/breast-cancer.jpg',
    links: { repo: 'https://github.com/Aram9574/Modelos_IA/blob/main/Regresión%20Logística%20Cancer%20de%20mama.ipynb' }
  },
  {
    slug: 'prediccion-readmisiones',
    title: 'Predicción de readmisiones hospitalarias',
    shortDescription: 'Estimación de riesgo de reingreso a 30 días mediante XGBoost y análisis de explicabilidad SHAP.',
    context: 'Modelo para estimar riesgo de reingreso a 30 días usando EHR y antecedentes clínicos.',
    solution: 'Pipelines con scikit-learn/XGBoost, manejo de desbalance y validación temporal.',
    impact: 'Priorización de seguimiento postalta y reducción de reingresos evitables.',
    tipo: 'academico',
    tags: ['Python','Pandas','XGBoost','SHAP'],
    cover: '/images/projects/prediccion-readmisiones.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'dashboard-clinico-kpis',
    title: 'Dashboard clínico de KPIs',
    shortDescription: 'Visualización interactiva de indicadores asistenciales y operativos para gestión en tiempo real.',
    context: 'Visualización de indicadores asistenciales: tiempos de espera, ocupación y seguimiento.',
    solution: 'Streamlit/Plotly sobre datos agregados de HIS; despliegue en Vercel/Render.',
    impact: 'Mejor visibilidad operativa y toma de decisiones en tiempo casi real.',
    tipo: 'academico',
    tags: ['Streamlit','Plotly','Pandas'],
    cover: '/images/projects/dashboard-clinico-kpis.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'automatizaciones-ia-salud',
    title: 'Automatizaciones IA para equipos de salud',
    shortDescription: 'Desarrollo de bots y scripts para automatización de tareas administrativas clínicas mediante NLP.',
    context: 'Jobs automáticos: resúmenes, extracción de entidades y alertas básicas.',
    solution: 'Tareas programadas, NLP básico y notificaciones; logs y monitorización.',
    impact: 'Ahorro de tiempo administrativo y mejor priorización del trabajo.',
    tipo: 'academico',
    tags: ['Python','NLP','APIs'],
    cover: '/images/projects/automatizaciones-ia-salud.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'longitud-estancia-ml',
    title: 'Predicción de longitud de estancia',
    shortDescription: 'Modelo predictivo para estimar días de ingreso por episodio y optimizar planificación de altas.',
    context: 'Estimación de días de estancia por episodio para planificación de camas.',
    solution: 'Modelos baselines + gradiente boosting; validación por servicio y cohorte.',
    impact: 'Mejor planificación operativa y uso eficiente de recursos.',
    tipo: 'academico',
    tags: ['scikit-learn','Modelado clínico','Métricas'],
    cover: '/images/projects/longitud-estancia-ml.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'nlp-eventos-adversos',
    title: 'Detección de eventos adversos (NLP)',
    shortDescription: 'Identificación automática de incidentes de seguridad del paciente a partir de texto libre clínico.',
    context: 'Identificación de potenciales eventos adversos a partir de notas clínicas.',
    solution: 'Preprocesamiento, regex clínicas y clasificación supervisada; revisión médica.',
    impact: 'Soporte a seguridad del paciente y vigilancia proactiva.',
    tipo: 'academico',
    tags: ['NLP','Clasificación','Seguridad del paciente'],
    cover: '/images/projects/nlp-eventos-adversos.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  },
  {
    slug: 'integracion-lis-fhir',
    title: 'Integración LIS ↔ FHIR',
    shortDescription: 'Middleware de interoperabilidad para mapear resultados de laboratorio a recursos FHIR R4.',
    context: 'Interfaz de laboratorio (LIS) con mapeo a recursos FHIR para resultados.',
    solution: 'Modelado Observation/Patient/ServiceRequest, validaciones y endpoints.',
    impact: 'Interoperabilidad de resultados y menos trabajo manual de registro.',
    tipo: 'academico',
    tags: ['FHIR R4','HL7 v2','Interoperabilidad'],
    cover: '/images/projects/integracion-lis-fhir.jpg',
    links: { repo: 'https://github.com/Aram9574' }
  }
];
