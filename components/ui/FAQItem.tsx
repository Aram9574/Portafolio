'use client';
import { useState } from 'react';

export default function FAQItem({ q, a }:{ q:string; a:string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-rule py-4">
      <button onClick={()=>setOpen(!open)} className="w-full text-left font-medium text-ink">
        {q}
      </button>
      {open && <p className="mt-2 text-sm text-ink-2">{a}</p>}
    </div>
  );
}

