import { ReactNode } from 'react';

export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return (
    <div data-tilt data-tilt-max="5" className={`rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 hover:translate-y-[-2px] transition duration-200 ${className}`}>
      {children}
    </div>
  );
}
