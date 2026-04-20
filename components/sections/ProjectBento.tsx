'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectBento({ projects }: { projects: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Efecto Parallax en el contenedor completo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.2 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  if (!projects || projects.length < 3) return null;

  const [mainProject, ...sideProjects] = projects.slice(0, 3);

  return (
    <motion.div 
      ref={containerRef}
      style={{ scale, opacity }}
      className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10"
    >
      {/* Caja Principal (Izquierda) */}
      <HoverCard className="lg:col-span-2 h-[450px] group">
        <Link href={`/proyectos/${mainProject.slug}`} className="absolute inset-0 z-10" data-project-card aria-label={mainProject.title} />

        {/* Action Links Overlay */}
        <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {mainProject.links?.repo && (
            <a href={mainProject.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--bone)] border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--accent)] transition">
              <Github className="w-5 h-5" />
            </a>
          )}
          {mainProject.links?.demo && (
            <a href={mainProject.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--bone)] border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--accent)] transition">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Imagen: ocupa la mitad superior, no cubre el texto */}
        <div className="absolute top-0 left-0 right-0 h-[55%] z-0 overflow-hidden border-b border-[var(--ink)]">
           <Image
              src={mainProject.cover}
              alt={mainProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
           />
        </div>

        {/* Texto: mitad inferior sobre crema */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] z-[5] p-8 flex flex-col justify-between pointer-events-none bg-[var(--paper)]">
          <div className="eyebrow">Caso 01</div>
          <div>
            <h3 className="display-m mb-3 group-hover:italic transition-all">
              {mainProject.title}
            </h3>
            <p className="caption normal-case tracking-normal leading-relaxed" style={{fontSize: '0.85rem', color: 'var(--ink-2)'}}>
              {mainProject.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {mainProject.tags.slice(0,3).map((tag: string) => (
                 <span key={tag} className="px-2 py-1 border border-[var(--rule)] text-[0.65rem] font-mono uppercase tracking-wider text-[var(--muted)]">
                   {tag}
                 </span>
              ))}
            </div>
          </div>
        </div>
      </HoverCard>

      {/* Stack Derecho */}
      <div className="flex flex-col gap-6 lg:h-[450px]">
        {sideProjects.map((project, idx) => (
          <HoverCard key={project.slug} className="flex-1 relative overflow-hidden group">
            <Link href={`/proyectos/${project.slug}`} className="absolute inset-0 z-10" data-project-card aria-label={project.title} />

            <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {project.links?.repo && (
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[var(--bone)] border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--accent)]">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.links?.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[var(--bone)] border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--accent)]">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Flex: imagen izquierda, texto derecha */}
            <div className="flex h-full bg-[var(--paper)]">
              <div className="relative w-2/5 overflow-hidden border-r border-[var(--ink)]">
                <Image src={project.cover} alt={project.title} fill sizes="(max-width: 1024px) 40vw, 13vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-3/5 p-4 flex flex-col justify-between pointer-events-none">
                <div className="eyebrow" style={{fontSize: '0.6rem'}}>Caso 0{idx + 2}</div>
                <div>
                  <h3 className="font-display text-lg leading-tight mb-2 text-[var(--ink)] group-hover:italic transition-all" style={{letterSpacing: '-0.01em'}}>
                    {project.title}
                  </h3>
                  <p className="text-[0.72rem] leading-snug text-[var(--ink-2)] line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0,2).map((tag: string) => (
                    <span key={tag} className="text-[0.58rem] uppercase tracking-wider text-[var(--muted)] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </HoverCard>
        ))}
      </div>
    </motion.div>
  );
}

// Componente Wrapper para crear el Efecto Glow del Ratón ("Apple Glass")
function HoverCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
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
      className={`relative border border-[var(--ink)] bg-[var(--paper)] overflow-hidden transition-colors ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(196, 245, 66, 0.18), transparent 50%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
