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
      <HoverCard className="lg:col-span-2 h-[450px]">
        <Link href={`/proyectos/${mainProject.slug}`} className="block h-full group relative overflow-hidden" data-project-card>
          
          {/* Action Links Overlay */}
          <div className="absolute top-6 right-6 z-20 flex gap-3 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {mainProject.links?.repo && (
              <a href={mainProject.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white hover:text-emerald-400 hover:border-emerald-400 transition" onClick={e => e.stopPropagation()}>
                <Github className="w-5 h-5" />
              </a>
            )}
            {mainProject.links?.demo && (
              <a href={mainProject.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white hover:text-emerald-400 hover:border-emerald-400 transition" onClick={e => e.stopPropagation()}>
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <div className="absolute inset-0 z-0">
             <Image 
                src={mainProject.cover} 
                alt={mainProject.title} 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-end">
            <div className="flex flex-wrap gap-2 mb-4">
              {mainProject.tags.slice(0,3).map((tag: string) => (
                 <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white shadow-sm">
                   {tag}
                 </span>
              ))}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              {mainProject.title}
            </h3>
            <p className="text-emerald-100/90 font-medium max-w-xl text-lg opacity-80 group-hover:opacity-100 transition-opacity">
              {mainProject.shortDescription}
            </p>
          </div>
        </Link>
      </HoverCard>

      {/* Stack Derecho */}
      <div className="flex flex-col gap-6 lg:h-[450px]">
        {sideProjects.map((project, index) => (
          <HoverCard key={project.slug} className="flex-1 relative overflow-hidden">
             <Link href={`/proyectos/${project.slug}`} className="block h-full group" data-project-card>
              
              {/* Action Links Overlay */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white hover:text-emerald-400" onClick={e => e.stopPropagation()}>
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white hover:text-emerald-400" onClick={e => e.stopPropagation()}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity">
                 <Image src={project.cover} alt={project.title} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/90 z-0" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end border-t border-white/5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.slice(0,2).map((tag: string) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-emerald-100/80 text-xs line-clamp-2 md:line-clamp-none">
                  {project.shortDescription}
                </p>
              </div>
             </Link>
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
      className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-colors ${className}`}
    >
      {/* Foco de luz verde que sigue el cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-100 mix-blend-soft-light"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(52, 211, 153, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
