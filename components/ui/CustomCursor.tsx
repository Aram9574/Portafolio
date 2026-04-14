'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  useEffect(() => {
    // Only track on non-touch devices to avoid mobile issues
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering any link/button or project card
      if (target.closest('a') || target.closest('button')) {
        if (target.closest('[data-project-card]')) {
          setIsHoveringProject(true);
        } else {
          setIsHoveringLink(true);
        }
      } else {
        setIsHoveringLink(false);
        setIsHoveringProject(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Disabled on mobile to prevent double-tap issues
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center font-bold text-[8px] text-black overflow-hidden"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHoveringProject ? 5 : isHoveringLink ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.1,
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHoveringProject ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          VER
        </motion.span>
      </motion.div>
    </>
  );
}
