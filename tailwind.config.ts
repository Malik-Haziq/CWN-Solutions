import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F7F8F8',
        'bg-surface': '#FFFFFF',
        'bg-ink': '#0D1414',
        'border-subtle': '#E8EDED',
        'border-default': '#CDD6D6',
        'border-strong': '#A8B5B5',
        accent: '#3eb7bb',
        'accent-dark': '#2E9196',
        'accent-muted': '#EDF9F9',
        'text-primary': '#0D1414',
        'text-secondary': '#4A5E5E',
        'text-muted': '#8AA0A0',
        'text-inverse': '#F7F8F8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        'section-xs': '60px',
        'section-sm': '90px',
        'section-md': '130px',
        'section-lg': '180px',
      },
      fontSize: {
        'display-xl': [
          'clamp(52px, 7vw, 88px)',
          { lineHeight: '1.05', letterSpacing: '0' },
        ],
        'display-lg': [
          'clamp(38px, 5vw, 64px)',
          { lineHeight: '1.1', letterSpacing: '0' },
        ],
        'display-md': [
          'clamp(26px, 3.5vw, 40px)',
          { lineHeight: '1.2', letterSpacing: '0' },
        ],
        'display-sm': [
          'clamp(20px, 2.5vw, 28px)',
          { lineHeight: '1.3', letterSpacing: '0' },
        ],
        label: ['11px', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
    },
  },
  plugins: [],
};

export default config;
