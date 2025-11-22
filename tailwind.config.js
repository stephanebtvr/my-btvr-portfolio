/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,scss}', './src/app/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        bordeaux: '#7a3e3e',
        rougebrique: '#b87373',
        roseclair: '#f8eaea',
        rosepale: '#f1dada',
        jaunechaud: 'oklch(79.5% 0.184 86.047)',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
