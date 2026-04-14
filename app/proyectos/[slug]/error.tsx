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
      <Card className="max-w-md p-8 border-red-500/20 bg-red-500/5">
        <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold mb-3 text-white">No se pudo cargar la documentación</h1>
        <p className="text-muted text-sm mb-8">
          Ha ocurrido un problema intentando procesar el repositorio del proyecto. 
          Puede ser un error temporal de conexión o que el archivo README no esté accesible.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reintentar
          </button>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors"
          >
            <Home className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>
      </Card>
    </Section>
  );
}
