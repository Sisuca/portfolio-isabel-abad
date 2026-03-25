import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // FONDOS: Tonos negros suaves para evitar el "agujero negro" visual
        background: '#0a0a0a',      // Negro suave (antes #000000)
        'bg-secondary': '#141414',  // Gris muy oscuro para diferenciar capas (antes #0a0a0a)
        
        // TEXTOS: Blanco roto para descanso visual
        'text-primary': '#f0f0f0',    // Blanco cálido/suave (antes #ffffff)
        'text-secondary': '#a1a1aa',  // Gris claro para lectura secundaria
        'text-dark': '#0a0a0a',       // Para textos sobre fondos verdes
        
        // ACENTOS
        accent: '#9eff00',
        
        // BORDES: Gris oscuro pero visible
        'gray-800': '#2b2b2b',      // Más claro que antes (#1f2937) para que se vea
        'gray-700': '#404040',      // Un poco más claro para contraste con el fondo
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'hero-mobile': ['5rem', { lineHeight: '1' }],
        'hero-desktop': ['192px', { lineHeight: '0.9' }],
        'h2-label': ['16px', { lineHeight: '18px' }],  // CAMBIADO
        'h3': ['48px', { lineHeight: '60px' }],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'scroll-infinite': 'scroll 20s linear infinite',
      }
    },
  },
  plugins: [],
}
