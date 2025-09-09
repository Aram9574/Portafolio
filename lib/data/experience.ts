export const experienceItems = [
  {
    icon: 'hospital',
    title: 'Geriatric ERP (Residencias)',
    context: 'Gestión integral con HL7/FHIR básico en residencias. Interfaz para censo, medicación, fisioterapia, stock e incidentes.',
    bullets: [
      'Reducción de tiempo de registro ~38%',
      'Trazabilidad de medicación → stock (consumo automático)',
      'Preparado para interoperabilidad FHIR/HL7 y RGPD'
    ],
    metrics: [
      { value: '-38%', label: 'tiempo de registro' },
      { value: 'HL7/FHIR', label: 'interoperabilidad' },
      { value: '1 MVP', label: 'end-to-end' }
    ],
    ctaHref: '/proyectos/erp-geriatrico-fhir',
    ctaText: 'Ver proyecto'
  },
  {
    icon: 'heart',
    title: 'Riesgo cardiovascular',
    context: 'Modelo baseline con validación estratificada y umbrales ajustados por sensibilidad.',
    bullets: [
      'Entrenamiento y evaluación con AUC y métricas por clase',
      'Ajuste de umbral para mejorar recall en clase de riesgo'
    ],
    metrics: [
      { value: 'AUC 0.79', label: 'validación estratificada' },
      { value: '+15%', label: 'sensibilidad (clase riesgo)' },
      { value: 'SKLearn', label: 'pipeline reproducible' }
    ]
  },
  {
    icon: 'lab',
    title: 'Cáncer de mama',
    context: 'Clasificación logística con ingeniería de características y evaluación con matriz de confusión.',
    bullets: [
      'Optimización de umbral para balancear precisión/recall',
      'Notebook explicativo para clínicos (interpretabilidad)'
    ],
    metrics: [
      { value: 'AUC 0.85', label: 'rendimiento global' },
      { value: '↑ Recall', label: 'clase positiva' },
      { value: 'Docs', label: 'entregables claros' }
    ]
  }
];

