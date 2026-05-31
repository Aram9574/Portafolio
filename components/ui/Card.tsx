import { ReactNode } from 'react';

export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-rule bg-paper p-6 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 ${className}`}>
      {children}
    </div>
  );
}
