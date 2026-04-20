import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function Loading() {
  return (
    <>
      <Section id="project-hero-skeleton">
        {/* Title skeleton */}
        <div className="h-10 md:h-12 w-3/4 md:w-1/2 bg-[rgba(26,24,21,0.08)] animate-pulse mb-3" />

        {/* Tags skeleton */}
        <div className="mt-3 flex gap-2">
          <div className="h-6 w-16 bg-[rgba(26,24,21,0.08)] animate-pulse" />
          <div className="h-6 w-20 bg-[rgba(26,24,21,0.08)] animate-pulse" />
          <div className="h-6 w-14 bg-[rgba(26,24,21,0.08)] animate-pulse" />
        </div>

        {/* Image skeleton */}
        <div className="mt-6 relative w-full aspect-[16/9] overflow-hidden bg-[rgba(26,24,21,0.08)] animate-pulse" />
      </Section>

      <Section id="detalle-skeleton" className="pt-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="flex-1 min-w-0 space-y-6">
            {/* Main content skeleton */}
            <div className="bg-[rgba(26,24,21,0.08)] border border-rule p-6 md:p-8 h-96 animate-pulse" />
          </div>

          <aside className="w-full lg:w-80 shrink-0 sticky top-24 space-y-6">
            {/* Sidebar skeleton */}
            <Card className="animate-pulse">
              <div className="h-6 w-3/4 bg-[rgba(26,24,21,0.12)] mb-2" />
              <div className="h-4 w-full bg-[rgba(26,24,21,0.08)] mb-1" />
              <div className="h-4 w-5/6 bg-[rgba(26,24,21,0.08)] mb-4" />
              <div className="h-10 w-full bg-[rgba(26,24,21,0.12)] mt-4" />
              <div className="h-10 w-full bg-[rgba(26,24,21,0.12)] mt-2 cursor-wait" />
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
