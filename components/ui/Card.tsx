import { ReactNode } from 'react';

export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-hairline bg-paper p-6 transition-colors duration-200 ease-out hover:border-hairline-strong ${className}`}>
      {children}
    </div>
  );
}
