/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fadeInDown 0.7s ease-in-out',
        growDown: 'growDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        growDown: {
          '0%': {
            maxHeight: '0',
            opacity: 0,
          },
          '100%': {
            maxHeight: '500px', // 필요한 만큼 크게 설정
            opacity: 1,
          },
        },
      },
    },
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
