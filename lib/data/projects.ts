export type Project = {
  slug: string
  title: string
  category: 'ML' | 'Interoperabilidad' | 'ERP/Apps' | 'Otros'
  subtitle: string
  bullets: string[]
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'cancer-mama-ml',
    title: 'Clasificación de cáncer de mama (ML)',
    category: 'ML',
    subtitle: 'Modelo baseline con regresión logística',
    bullets: [
      'Matriz de confusión y métricas por clase',
      'Próximos pasos: calibración y re-muestreo'
    ],
    stack: ['Python', 'scikit-learn', 'Matplotlib/Plotly']
  },
  {
    slug: 'riesgo-cardiovascular',
    title: 'Riesgo cardiovascular a 10 años (Framingham)',
    category: 'ML',
    subtitle: 'EDA, imputación, normalización y evaluación',
    bullets: [
      'Balanceo de clases y ajuste de umbrales',
      'Comparativa baseline vs optimizados'
    ],
    stack: ['Python', 'scikit-learn']
  },
  {
    slug: 'gericare-erp',
    title: 'GeriCare ERP (Django/DRF)',
    category: 'ERP/Apps',
    subtitle: 'MVP para residencias: pacientes, medicación, valoraciones',
    bullets: [
      'Inventario y reportes CSV',
      'Pensado para RGPD e interoperabilidad'
    ],
    stack: ['Django', 'DRF', 'PostgreSQL/SQLite', 'Bootstrap']
  },
  {
    slug: 'automatizaciones-ia',
    title: 'Automations IA / Contenido',
    category: 'Otros',
    subtitle: 'Resúmenes IA en salud y job-alerts',
    bullets: [
      'Diseño de flujos y prompts',
      'Prototipos rápidos'
    ],
    stack: ['Python', 'Notion/Streamlit']
  }
]

