import { ReactNode } from 'react';

export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-rule bg-paper p-6 shadow-soft transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_36px_80px_-32px_rgba(26,24,21,0.22),0_12px_28px_-16px_rgba(26,24,21,0.12)] ${className}`}>
      {children}
    </div>
  );
}
