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
        // Design Language: una sola sans (Inter) para display y texto; mono para datos/código.
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        // Escala del Design Language: 4 / 8 / 12 / 16 / pill.
        none: '0px',
        sm: '6px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '16px',
        full: '9999px'
      },
      transitionTimingFunction: {
        // Curva estándar única del Design Language: salida suave, sin overshoot.
        out: 'cubic-bezier(0.2, 0, 0, 1)',
        standard: 'cubic-bezier(0.2, 0, 0, 1)'
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms'
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
