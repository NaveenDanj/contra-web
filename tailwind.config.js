/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },

  extend: {
    backgroundImage : {
      astral : 'url(\'/public/background/astral.jpg\')'
    }
  },

  plugins: [],
  prefix: 'tw-'
};
