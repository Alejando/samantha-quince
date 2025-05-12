/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: '#4ECDC4',
        yellow: '#FFD166',
        pink: '#FF6B6B',
        orange: '#FF9F1C',
      },
      fontFamily: {
        'dancing': ["'Dancing Script'", 'cursive'],
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      backgroundImage: {
        'pool-pattern': 'url("/images/pool-pattern.svg")',
      },
    },
  },
  safelist: [
    'font-dancing',
    'font-poppins',
    'gradient-text',
    'float',
    'bounce'
  ],
  plugins: [],
}
