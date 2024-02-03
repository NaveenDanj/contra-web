/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    backgroundImage : {
      astral : 'url(\'/public/background/astral.jpg\')'
    },
    fontFamily: {
      rajdhani: ['Rajdhani', 'sans-serif'],
    },
  },

  plugins: [],
  prefix: 'tw-'
};
