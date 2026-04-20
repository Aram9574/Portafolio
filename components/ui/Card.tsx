import { ReactNode } from 'react';

export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-rule bg-paper p-6 transition duration-200 ${className}`}>
      {children}
    </div>
  );
}
