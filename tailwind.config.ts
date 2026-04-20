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
        soft: 'none'
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
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
