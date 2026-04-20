export const metadata = {
  title: 'Accesibilidad',
  description:
    'Compromiso de accesibilidad digital del sitio web de Aram Zakzuk.',
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="display-l text-ink mb-6">Accesibilidad</h1>

      <div className="prose prose-stone max-w-3xl mx-auto text-center">
        <p>
          Este sitio se ha diseñado siguiendo buenas prácticas de accesibilidad con el objetivo de
          facilitar el acceso al contenido al mayor número de personas posible.
        </p>
        <h2>Medidas implementadas</h2>
        <ul className="inline-block text-left list-disc pl-6">
          <li>Contrastes adecuados y tipografía legible.</li>
          <li>Navegación compatible con teclado y foco visible.</li>
          <li>Etiquetas y descripciones en enlaces e iconos.</li>
          <li>Diseño adaptable (responsive) para distintos dispositivos.</li>
          <li>Respeto a <code>prefers-reduced-motion</code> para reducir animaciones si el usuario lo solicita.</li>
        </ul>
        <p>
          Si detectas barreras de accesibilidad o tienes sugerencias de mejora, escribe a{' '}
          <a href="mailto:zakzukaram@gmail.com">zakzukaram@gmail.com</a>.
        </p>
        <p className="text-muted text-sm font-mono">Última actualización: {new Date().toISOString().slice(0,10)}</p>
      </div>
    </main>
  );
}
