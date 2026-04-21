'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProjectBento({ projects }: { projects: any[] }) {
  if (!projects || projects.length < 3) return null;

  const [mainProject, ...sideProjects] = projects.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
      {/* Caja Principal */}
      <HoverCard className="lg:col-span-2 min-h-[450px] group flex flex-col p-10">
        <Link
          href={`/proyectos/${mainProject.slug}`}
          className="absolute inset-0 z-10"
          data-project-card
          aria-label={mainProject.title}
        />

        {/* Header: eyebrow + action links */}
        <div className="flex items-start justify-between mb-8">
          <div className="eyebrow">Caso 01</div>
          <div className="flex gap-3 z-20 relative">
            {mainProject.links?.repo && (
              <a
                href={mainProject.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-rule text-ink-2 hover:text-ink hover:border-ink transition"
                aria-label="Repositorio"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {mainProject.links?.demo && (
              <a
                href={mainProject.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-rule text-ink-2 hover:text-ink hover:border-ink transition"
                aria-label="Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Título y descripción */}
        <div className="flex-1 flex flex-col justify-center pointer-events-none">
          <h3 className="display-m mb-4 group-hover:italic transition-all">
            {mainProject.title}
          </h3>
          <p
            className="leading-relaxed max-w-2xl"
            style={{ fontSize: '0.95rem', color: 'var(--ink-2)' }}
          >
            {mainProject.shortDescription}
          </p>
        </div>

        {/* Footer: tags + arrow */}
        <div className="flex items-end justify-between border-t border-rule pt-5 mt-6">
          <div className="flex flex-wrap gap-2">
            {mainProject.tags.slice(0, 4).map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 border border-rule text-[0.65rem] font-mono uppercase tracking-wider text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-5 h-5 text-ink-2 group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
      </HoverCard>

      {/* Stack Derecho */}
      <div className="flex flex-col gap-6 lg:h-[450px]">
        {sideProjects.map((project, idx) => (
          <HoverCard
            key={project.slug}
            className="flex-1 relative group flex flex-col p-6"
          >
            <Link
              href={`/proyectos/${project.slug}`}
              className="absolute inset-0 z-10"
              data-project-card
              aria-label={project.title}
            />

            <div className="flex items-start justify-between mb-3">
              <div className="eyebrow" style={{ fontSize: '0.6rem' }}>
                Caso 0{idx + 2}
              </div>
              <div className="flex gap-1.5 z-20 relative">
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 border border-rule text-ink-2 hover:text-ink hover:border-ink transition"
                    aria-label="Repositorio"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 border border-rule text-ink-2 hover:text-ink hover:border-ink transition"
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center pointer-events-none">
              <h3
                className="font-display text-xl leading-tight mb-2 text-ink group-hover:italic transition-all"
                style={{ letterSpacing: '-0.01em' }}
              >
                {project.title}
              </h3>
              <p className="text-[0.8rem] leading-snug text-ink-2 line-clamp-3">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-rule pt-3 mt-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] uppercase tracking-wider text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-2 group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

function HoverCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border border-ink bg-paper overflow-hidden transition-colors ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(31, 111, 92, 0.15), transparent 50%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
