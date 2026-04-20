"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Project fetch error:", error);
  }, [error]);

  return (
    <Section id="error" className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <Card className="max-w-md p-8 border-danger bg-paper">
        <div className="mx-auto w-16 h-16 border border-danger flex items-center justify-center mb-6">
          <AlertTriangle className="w-8 h-8 text-danger" aria-hidden="true" />
        </div>
        <h1 className="display-m mb-3 text-ink">No se pudo cargar la documentación</h1>
        <p className="text-muted text-sm mb-8">
          Ha ocurrido un problema intentando procesar el repositorio del proyecto.
          Puede ser un error temporal de conexión o que el archivo README no esté accesible.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn-ghost inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reintentar
          </button>
          <Link
            href="/proyectos"
            className="btn-ink inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>
      </Card>
    </Section>
  );
}
