'use client';

import { useEffect, useMemo, useState } from 'react';

export default function BackgroundSpotlight() {
  const baseGradientClass =
    "fixed inset-0 -z-50 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_20%,#0f172a_0%,#0b1223_40%,#0a0f1d_65%,#0a0a0a_100%)]";

  const defaultSpotStyle = useMemo<React.CSSProperties>(() => ({
    top: '12vh',
    left: '12vw',
    width: '52vw',
    height: '52vw',
    transform: 'translate(-20%, -10%)',
    background:
      'radial-gradient(closest-side, rgba(16, 185, 129, 0.35), rgba(16,185,129,0.18) 40%, rgba(16,185,129,0.0) 70%)',
    filter: 'blur(40px)',
    willChange: 'transform',
  }), []);

  const mobileSpotStyle = useMemo<React.CSSProperties>(() => ({
    top: '18vh',
    left: '50vw',
    width: '80vw',
    height: '80vw',
    transform: 'translate(-50%, -10%)',
    background:
      'radial-gradient(closest-side, rgba(16, 185, 129, 0.35), rgba(16,185,129,0.18) 40%, rgba(16,185,129,0.0) 70%)',
    filter: 'blur(40px)',
    willChange: 'transform',
  }), []);

  const [spotStyle, setSpotStyle] = useState<React.CSSProperties>(defaultSpotStyle);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setSpotStyle(mq.matches ? mobileSpotStyle : defaultSpotStyle);
    update();
    // Prefer change event if supported
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    // Fallback to resize
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [defaultSpotStyle, mobileSpotStyle]);

  return (
    <>
      {/* Base oscura en degradado sutil */}
      <div aria-hidden className={baseGradientClass} />
      {/* Foco verde: luz suave con blur */}
      <div
        aria-hidden
        className="fixed -z-40 pointer-events-none"
        style={{
          position: 'fixed',
          top: '0',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(closest-side, rgba(16, 185, 129, 0.35), rgba(16,185,129,0.18) 40%, rgba(16,185,129,0.0) 70%)',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
