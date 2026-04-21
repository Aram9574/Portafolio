export default function PostEHDS() {
  return (
    <div className="prose-ed">
      <p className="lead">
        El Reglamento (UE) 2025/327 sobre el Espacio Europeo de Datos Sanitarios
        (EHDS) se aprobó en 2025 y entra en aplicación escalonada entre 2026 y
        2029. La mayoría de los hospitales españoles no tiene un roadmap real
        para cumplirlo. Muchos creen que con el RGPD basta. No basta.
      </p>

      <h2 className="display-m mt-14 mb-4">Qué es el EHDS en una frase ejecutiva</h2>
      <p>
        El EHDS convierte los datos sanitarios europeos en una infraestructura
        común: el ciudadano accede a su historia clínica en cualquier país de la
        UE (uso primario) y los investigadores, gestores y reguladores acceden
        a datos seudonimizados bajo permiso para investigación y política
        sanitaria (uso secundario). El centro sanitario deja de ser propietario
        opaco y pasa a ser nodo acreditado de una red.
      </p>

      <h2 className="display-m mt-14 mb-4">Calendario real</h2>
      <p>
        Cuidado con las fechas. Las obligaciones no son simultáneas. El
        calendario aproximado para centros sanitarios y responsables de datos
        es el siguiente.
      </p>

      <div className="not-prose my-8 border border-ink">
        <table className="w-full text-sm">
          <thead className="bg-ink text-bone font-mono uppercase tracking-widest text-[0.7rem]">
            <tr>
              <th className="text-left px-4 py-3 border-r border-bone/20">Fase</th>
              <th className="text-left px-4 py-3 border-r border-bone/20">Año</th>
              <th className="text-left px-4 py-3">Obligación principal</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule font-mono text-xs">01</td>
              <td className="px-4 py-3 border-r border-rule">2026</td>
              <td className="px-4 py-3">Entrada en vigor y designación de HDAB nacional</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule font-mono text-xs">02</td>
              <td className="px-4 py-3 border-r border-rule">2027</td>
              <td className="px-4 py-3">Uso primario obligatorio (acceso del paciente) para categorías prioritarias</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule font-mono text-xs">03</td>
              <td className="px-4 py-3 border-r border-rule">2028</td>
              <td className="px-4 py-3">Uso secundario operativo vía HealthData@EU</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule font-mono text-xs">04</td>
              <td className="px-4 py-3 border-r border-rule">2029</td>
              <td className="px-4 py-3">Interoperabilidad transfronteriza plena MyHealth@EU</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Planificar asumiendo que el plazo duro es 2029 es un error estratégico.
        Las obligaciones de uso primario de 2027 implican un rediseño serio del
        HIS y de la plataforma de consentimiento, y 18 meses no son suficientes
        para un hospital grande.
      </p>

      <h2 className="display-m mt-14 mb-4">Los cuatro pilares</h2>

      <h3 className="font-display italic text-xl mt-8 mb-2">01. Uso primario</h3>
      <p>
        El paciente tiene derecho de acceso electrónico, portabilidad y
        rectificación sobre su historia clínica electrónica en un formato
        interoperable. Categorías prioritarias: resumen clínico, prescripción y
        dispensación, imagen médica, resultados de laboratorio e informes de
        alta. Si tu HIS no exporta a formato FHIR R4 con SNOMED-CT, no cumples.
      </p>

      <h3 className="font-display italic text-xl mt-8 mb-2">02. Uso secundario</h3>
      <p>
        Investigadores, autoridades de política sanitaria y reguladores pueden
        solicitar acceso a datos seudonimizados para fines tasados: investigación
        científica, evaluación de políticas, entrenamiento y validación de
        sistemas de IA, estadística oficial. El centro sanitario actúa como
        proveedor de datos y responde al HDAB nacional, no directamente al
        solicitante.
      </p>

      <h3 className="font-display italic text-xl mt-8 mb-2">03. Gobernanza</h3>
      <p>
        Cada Estado miembro designa un Health Data Access Body (HDAB). En España
        previsiblemente se articulará a través del Ministerio de Sanidad con
        participación de las comunidades autónomas. El HDAB emite los permisos
        de datos, audita cumplimiento y sanciona. El interlocutor del hospital
        es el HDAB, no Bruselas.
      </p>

      <h3 className="font-display italic text-xl mt-8 mb-2">04. Infraestructura</h3>
      <p>
        MyHealth@EU es el hub de uso primario; HealthData@EU es el hub de uso
        secundario. El centro sanitario se conecta a nodos nacionales. Esto
        requiere APIs, endpoints seguros, catálogos de datos publicados y
        procesos de seudonimización auditables. No es trivial y no es barato.
      </p>

      <h2 className="display-m mt-14 mb-4">Por qué tu HIS actual no está listo</h2>
      <p>
        La mayoría de los sistemas de información hospitalarios españoles
        acumulan dos décadas de deuda técnica: datos estructurados en tablas
        propietarias, codificaciones mixtas (CIE-9, CIE-10, clasificaciones
        internas), ausencia de FHIR nativo, consentimientos en papel o en PDFs
        escaneados, integraciones punto a punto entre subsistemas. El EHDS no
        es compatible con esa arquitectura.
      </p>

      <h2 className="display-m mt-14 mb-4">Checklist de 10 puntos para un CIO hospitalario</h2>
      <ol className="space-y-4 my-8 list-decimal list-inside">
        <li>
          <strong>Mapeo exhaustivo de fuentes de datos clínicos.</strong>{' '}
          Inventario de HIS, RIS, LIS, farmacia, anatomía patológica, dispositivos.
          Nada debe quedar fuera del catálogo.
        </li>
        <li>
          <strong>Adopción de FHIR R4 como lingua franca.</strong>{' '}
          Los nuevos módulos se compran ya FHIR-native; los legacy se envuelven
          con un motor de integración.
        </li>
        <li>
          <strong>Normalización terminológica a SNOMED-CT y LOINC.</strong>{' '}
          CIE-10 no es suficiente para uso secundario granular.
        </li>
        <li>
          <strong>Plataforma de consentimiento granular electrónica.</strong>{' '}
          Un consentimiento global ya no vale. El paciente puede opt-out por
          categoría y finalidad.
        </li>
        <li>
          <strong>Catálogo de datos publicado con metadatos según DCAT-AP-Health.</strong>{' '}
          Sin catálogo no hay descubrimiento, y sin descubrimiento no hay uso
          secundario.
        </li>
        <li>
          <strong>Procesos de seudonimización y auditoría reproducibles.</strong>{' '}
          Documentados, auditables, con registros de acceso inmutables.
        </li>
        <li>
          <strong>DPO y responsable de interoperabilidad coordinados.</strong>{' '}
          No son roles separados. Designa un owner único del proyecto EHDS.
        </li>
        <li>
          <strong>Preparación para reporte al HDAB nacional.</strong>{' '}
          Canal formal, plantillas, SLAs internos.
        </li>
        <li>
          <strong>Auditoría EU AI Act de los sistemas de IA clínica en uso.</strong>{' '}
          Cualquier CDSS conectado al HIS entra en el perímetro. Clasifica antes
          de que llegue la inspección.
        </li>
        <li>
          <strong>Roadmap presupuestado con hitos trimestrales y KPI.</strong>{' '}
          El EHDS sin presupuesto es una aspiración.
        </li>
      </ol>

      <h2 className="display-m mt-14 mb-4">El gap habitual</h2>
      <p>
        El fallo recurrente es creer que cumplir RGPD cubre el EHDS. No es así.
        RGPD protege datos personales; EHDS obliga a compartirlos de forma
        estandarizada, interoperable y bajo gobernanza pública. Son marcos
        complementarios, no equivalentes. El hospital que trate el EHDS como un
        anexo RGPD llegará tarde a 2027.
      </p>

      <div className="mt-16 border-t-2 border-ink pt-10">
        <div className="eyebrow mb-4">Siguiente paso</div>
        <h3 className="display-m mb-4">
          ¿Tu centro tiene un roadmap EHDS real o una intención de roadmap?
        </h3>
        <p className="mb-6">
          Asesoro a hospitales, consultoras y administración pública en el
          diseño de ese roadmap con criterio clínico, técnico y regulatorio. La
          primera sesión de 15 minutos sirve para ver si encajamos.
        </p>
        <a href="/contacto#agenda" className="btn-ink">
          Reservar llamada de 15 min →
        </a>
      </div>
    </div>
  );
}
