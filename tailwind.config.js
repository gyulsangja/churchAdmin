/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // darkMode: 'selector',
  theme: {
    extend: {
      fontSize:{
        base: '1rem',
      },
      colors:{
        point: '#6442d6',
        secBg: '#f8f1f6',
        asideBg: '#f2ecee',
        btnBg: '#dcdaf5',
        btnHoverBg: '#e5dee2',
        btnPointBg: '#f1d3f9',
        fontColor:  '#1c1b1d',
        lightGray: '#efefef',
        light: '#fff',
        dark: '#000',

        pointDark: '#9f86ff',
        secbgDark: '#1c1b1d',
        asideBgDark: '#211f21',
        btnBgDark: '#45455a',
        btnHoverBgDark: '#2d2c2e',
        btnPointBgDark: '#553f5d',
        fontColorDark: '#e6e1e3'
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.2, 0, 0, 1)',
      },
      transitionDuration: {
        200: '200ms',
      },

      fontFamily:{
        sans: ['Poppins', 'Pretendard', 'sans-serif'],
      },
      boxShadow:{
        custome: 'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px'
      }

    },
    variants: {
      extend: {
        transitionProperty: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}