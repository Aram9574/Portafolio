'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={copy}
      className="ml-2 p-1.5 border border-rule bg-paper hover:border-ink transition-colors group"
      title="Copiar al portapapeles"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-ink" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-muted group-hover:text-ink" />
      )}
    </button>
  );
}
