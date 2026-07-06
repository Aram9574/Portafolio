---
slug: medicina-precision-ia-genomica
title: "Medicina de precisión con IA: qué se puede hacer hoy en un hospital español"
description: "Entre el paper de Nature y el comité de tumores real: qué herramientas de medicina de precisión con IA están listas para producción en hospitales españoles."
date: "2026-07-06"
readingTime: "7 min"
tags: ["Medicina de precisión", "Genómica", "Clinical AI"]
---

Leo cada semana papers sobre medicina de precisión que prometen revolucionar la oncología. Modelos que predicen respuesta a inmunoterapia con datos genómicos, algoritmos que identifican variantes raras, sistemas que integran multiómica con historia clínica. Luego entro en un comité de tumores real y veo que seguimos haciendo lo mismo que hace cinco años.

Me pregunto qué está pasando entre el laboratorio y la consulta. No porque falte ciencia. Falta porque las herramientas que funcionan en Nature no siempre están listas para el flujo de trabajo de un hospital español. Y porque hay una brecha enorme entre lo que un oncólogo necesita el lunes a las nueve de la mañana y lo que un equipo de investigación publicó hace tres meses.

Llevo un tiempo observando qué tecnologías de medicina de precisión con componente IA se están usando de verdad en hospitales españoles. No pilotos de investigación. Producción. Y me ha sorprendido encontrar un patrón: las herramientas que funcionan no son las más sofisticadas. Son las que resuelven un problema concreto del flujo clínico y se integran sin romper nada.

## Farmacogenética: el caso de uso más maduro

La farmacogenética es probablemente el área más consolidada. Varios hospitales españoles tienen paneles de genes que predicen metabolización de fármacos: CYP2D6, CYP2C19, TPMT, DPYD. Información útil antes de prescribir codeína, clopidogrel, azatioprina o fluoropirimidinas.

Los sistemas con IA aportan dos cosas aquí. Primero, interpretan variantes complejas. Un haplotipo de CYP2D6 puede tener varias combinaciones de alelos que determinan si el paciente es metabolizador ultrarrápido, normal o pobre. Los modelos de machine learning entrenados con bases de datos farmacogenéticas grandes (PharmGKB, CPIC) hacen esa clasificación automáticamente y devuelven una recomendación de dosis.

Segundo, cruzan el resultado genético con la medicación activa del paciente. Si alguien tiene un genotipo que indica metabolización lenta de clopidogrel y está tomándolo tras un infarto, el sistema lo señala. No es magia. Es cruzar dos bases de datos con un algoritmo de reglas clínicas. Pero funciona.

Veo que varios hospitales catalanes y alguno madrileño están probando esto. No todos los pacientes. Casos seleccionados: oncología (DPYD antes de fluoropirimidinas), cardiología (antiagregantes), psiquiatría (antidepresivos). El coste del panel genético está bajando. Lo que antes costaba varios cientos de euros por paciente ahora está en el orden de decenas.

## Soporte a decisión en oncología: más allá del tier de evidencia

En oncología molecular, el flujo clásico es: secuenciación del tumor → identificación de variantes → búsqueda manual en bases de datos (OncoKB, CIViC, ClinVar) → asignación de un tier de evidencia → discusión en comité de tumores.

Ese proceso lleva tiempo. Y es propenso a que se pierdan variantes poco frecuentes o terapias experimentales que podrían ser relevantes.

Los sistemas de soporte a decisión con IA que veo funcionando en producción hacen tres cosas:

1. **Priorizan variantes accionables.** No todas las mutaciones que aparecen en un panel de secuenciación son relevantes. Un modelo entrenado con bases de datos de oncología molecular puede ordenarlas por probabilidad de que cambien el manejo. Eso le ahorra al oncólogo leer una lista de veinte variantes de significado incierto.

2. **Buscan ensayos clínicos abiertos.** Algunos sistemas cruzan las variantes del paciente con registros de ensayos clínicos activos en ese momento. Si hay un estudio fase II para un inhibidor de FGFR en pacientes con fusiones de FGFR2, y tu paciente tiene esa fusión, el sistema lo sugiere.

3. **Generan informes estructurados.** El resultado no es una lista de genes y alelos. Es un informe que dice: "variante patogénica en BRCA2, tier 1A, terapia dirigida aprobada: olaparib". Con referencias a guías clínicas. Formato que el oncólogo puede llevar al comité sin tener que rehacer el trabajo.

Me sorprende que estas herramientas no estén más extendidas. Hay soluciones comerciales (IBM Watson for Genomics salió del mercado, pero quedan otras) y algunas desarrolladas internamente en hospitales grandes. El problema no es técnico. Es de integración con el flujo de trabajo y de quién paga la licencia.

## Scoring de riesgo poligénico: aún lejos de la práctica habitual

Los poligenetic risk scores (PRS) me parecen una de las aplicaciones más prometedoras de la genómica predictiva. La idea: combinar el efecto de cientos o miles de variantes genéticas comunes para estimar el riesgo de una enfermedad compleja. Cáncer de mama, enfermedad cardiovascular, diabetes tipo 2.

En teoría, podrías secuenciar a una persona sana, calcular su PRS para varias condiciones y ajustar las estrategias de prevención. Alguien con PRS alto para cáncer de mama podría entrar en programas de cribado más temprano.

En la práctica, me cuesta ver esto funcionando en un hospital español hoy. Primero, porque los modelos de PRS están entrenados mayoritariamente con poblaciones europeas del norte. Aplicarlos a población mediterránea sin validación local puede dar resultados sesgados.

Segundo, porque no está claro cómo integrar un PRS en la decisión clínica. Si el PRS dice que el riesgo de infarto es un 30% superior a la media, ¿qué haces? ¿Empiezas estatinas antes? ¿Pides pruebas de imagen? Las guías clínicas aún no incorporan PRS de forma sistemática.

Veo grupos de investigación trabajando en esto. Algún hospital terciario haciendo estudios piloto. Pero producción rutinaria, no. Me pregunto si el problema es que los PRS no aportan suficiente valor incremental sobre los factores de riesgo clásicos (edad, IMC, historia familiar, tensión arterial) para justificar el coste y la complejidad.

## Qué pide cada hospital (y qué paga)

He leído pliegos de compra de varios hospitales que buscan soluciones de medicina de precisión. El patrón que veo es este:

Los hospitales terciarios con servicio de genética clínica piden plataformas que integren secuenciación masiva, interpretación automática de variantes y soporte a decisión. Quieren que la herramienta hable con su sistema de historia clínica. Y que tenga un módulo de consentimiento informado para genómica.

Los hospitales más pequeños, sin genética clínica propia, piden dos cosas: o paneles de farmacogenética para casos específicos, o acceso a una plataforma externa que les interprete las secuenciaciones que envían fuera.

El presupuesto varía mucho. En hospitales grandes, he visto líneas de varios cientos de miles de euros para licencias de software más secuenciación. En hospitales pequeños, contratos por uso: pagas por cada panel genético interpretado.

Lo que nadie paga (todavía) es medicina de precisión generalizada. Secuenciar a todo el mundo que entre por urgencias para tener su perfil genómico disponible. Eso está en los roadmaps de algunos sistemas de salud internacionales. En España, ni se plantea.

## ¿Qué falta para que esto escale?

Veo tres cosas que están frenando la adopción más amplia de medicina de precisión con IA:

1. **Integración con sistemas legacy.** Las plataformas de genómica no hablan con los sistemas de información hospitalaria. Los datos genómicos viven en silos separados. Hacer un cruce entre la historia clínica de un paciente y su perfil genómico requiere trabajo manual. Eso limita el uso a casos muy seleccionados.

2. **Evidencia clínica en población española.** Muchos modelos están entrenados con datos de biobancos británicos o estadounidenses. Aplicarlos directamente a población española sin validación puede introducir sesgos. Me pregunto cuántos hospitales están validando internamente los algoritmos que compran.

3. **Falta de incentivos claros.** Un hospital que implanta farmacogenética ahorra eventos adversos. Pero ese ahorro no se ve en su presupuesto inmediato. Se ve en menos ingresos por toxicidad, menos días de hospitalización. Como el beneficio está difuso, cuesta justificar la inversión inicial.

---

## ¿Te ha resultado útil?

Si trabajas en innovación hospitalaria, genética clínica u oncología molecular y tienes experiencia con estas herramientas (o estás pensando en implantarlas), me interesa conocer tu punto de vista. Puedes escribirme en [/contacto](/contacto) o comentarlo directamente si nos cruzamos en algún evento del sector.