import { ReactNode } from 'react';

let sectionCount = 0;

export default function Section({
  id, title, subtitle, children, className = '', index
}: { id?: string; title?: string; subtitle?: string; children: ReactNode; className?: string; index?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 rule-b ${className}`}>
      <div className="container">
        {(title || index) && (
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 mb-12">
            <div className="col-span-12 md:col-span-3">
              {index && <div className="section-index">{index}</div>}
            </div>
            <div className="col-span-12 md:col-span-9">
              {title && <h2 className="display-l">{title}</h2>}
              {subtitle && <p className="lead mt-4">{subtitle}</p>}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
