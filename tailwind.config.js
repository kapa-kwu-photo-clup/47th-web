/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black_22: '#222222',
      lightGray: '#f5f5f5',
      //계절 컬러
      springPink: '#cf569b',
      summerGreen_01: '#b2d35a',
      summerGreen_02: '#60b636',
      fallPurple: '#845da5',
      winterBlue: '#4682B4',
    },
  },
  plugins: [],
};
