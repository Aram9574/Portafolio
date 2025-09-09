'use client';

export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-30 pointer-events-none opacity-[0.035] mix-blend-soft-light"
      style={{
        backgroundImage: 'url(/images/noise-8bit.png)',
        backgroundSize: '256px 256px',
        backgroundRepeat: 'repeat'
      }}
    />
  );
}

