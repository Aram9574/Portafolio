import EducationItemCard from "./EducationItem";
import CertificationBadge from "./CertificationBadge";
import { education, certifications } from "@/lib/data/education";

export default function EducationSection() {
  return (
    <section id="educacion" className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="scroll-mt-24 text-3xl font-bold mb-6">Educación</h2>

        {/* Timeline simple en 2 columnas */}
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (<EducationItemCard key={i} {...e} />))}
        </div>

        {/* Badges de certificaciones */}
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {certifications.map((c, i) => (<CertificationBadge key={i} {...c} />))}
        </div>
      </div>
    </section>
  );
}
