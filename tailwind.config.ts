import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="ink"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: 'var(--bone)',
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        danger: 'var(--danger)',
        muted: 'var(--muted)',
        'muted-2': 'var(--muted-2)',

        bg: 'var(--bg)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        'primary-600': 'var(--primary-600)',
        success: 'var(--success)',
        warning: 'var(--warning)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        xl: '0px',
        '2xl': '0px'
      },
      boxShadow: {
        // Sombra ambiente difusa: simula peso óptico sin línea negra dura.
        // Aplicar selectivamente con `shadow-soft` en cards de proyecto, blog y CTAs.
        soft: '0 24px 60px -28px rgba(26, 24, 21, 0.18), 0 8px 20px -12px rgba(26, 24, 21, 0.08)'
      },
      transitionTimingFunction: {
        // Curva editorial premium: arranque rápido, salida muy suave.
        // Inspirada en Linear/Apple — más "haptic" que el ease-out por defecto.
        out: 'cubic-bezier(0.32, 0.72, 0, 1)',
        // Variante con anticipación sutil (overshoot al final) para hovers y micro-interacciones.
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

export default config
