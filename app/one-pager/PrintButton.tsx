'use client'

import { analyticsEvents } from '@/lib/analytics'

export default function PrintButton() {
  return (
    <div className="no-print mt-10 pt-6 border-t border-[#111110]/20 flex flex-wrap items-center gap-4">
      <button
        onClick={() => {
          analyticsEvents.printOnePager()
          window.print()
        }}
        className="btn-ink cursor-pointer"
        type="button"
      >
        Imprimir o guardar como PDF →
      </button>
      <p className="text-[11px] opacity-70 max-w-md">
        Pulsa el botón o usa <code className="op-mono opacity-90">⌘P</code> /{' '}
        <code className="op-mono opacity-90">Ctrl+P</code>. En el diálogo de impresión selecciona
        &ldquo;Guardar como PDF&rdquo; para obtener el brief ejecutivo en una hoja A4.
      </p>
    </div>
  )
}
