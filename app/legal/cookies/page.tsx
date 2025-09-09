export const metadata = {
  title: 'Política de cookies',
  description:
    'Información sobre el uso de cookies en el sitio web de Alejandro Zakzuk.',
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-6">Política de cookies</h1>

      <div className="prose prose-invert max-w-3xl mx-auto text-center">
        <p>
          Este sitio utiliza cookies técnicas imprescindibles para el correcto funcionamiento.
          Opcionalmente, pueden emplearse cookies o mediciones anónimas para conocer el uso del
          sitio y mejorar la experiencia.
        </p>
        <p>
          Puedes desactivar o eliminar las cookies desde la configuración de tu navegador en
          cualquier momento. El uso continuado del sitio implica la aceptación de esta política.
        </p>
        <h2>¿Qué tipos de cookies puede usar este sitio?</h2>
        <ul className="inline-block text-left list-disc pl-6">
          <li><strong>Técnicas:</strong> necesarias para cargar y navegar por la web.</li>
          <li><strong>Analíticas anónimas:</strong> miden visitas y rendimiento sin identificar al usuario.</li>
        </ul>
        <p className="text-gray-400 text-sm">Última actualización: {new Date().toISOString().slice(0,10)}</p>
      </div>
    </main>
  );
}
