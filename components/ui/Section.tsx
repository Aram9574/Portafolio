import { ReactNode } from 'react';

export default function Section({
  id, title, subtitle, children, className = ''
}: { id?: string; title?: string; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl" data-aos="fade-up">
        {title && <h2 className="scroll-mt-24 text-3xl md:text-4xl font-semibold tracking-tight mb-4">{title}</h2>}
        {subtitle && <p className="text-muted-foreground mb-8 max-w-3xl">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
