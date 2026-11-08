/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        rose: { 50: '#fff5f7', 100: '#ffe4ea', 200: '#f9c7d2', 300: '#f0a3b5', 400: '#e07a93', 500: '#c9506f', 600: '#a63856' },
      },
      boxShadow: {
        rose: '0 10px 30px -12px rgba(201,80,111,.35)',
        roseLg: '0 24px 40px -14px rgba(201,80,111,.5)',
      },
    },
  },
  plugins: [],
}
