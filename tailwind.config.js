const { light } = require('@mui/material/styles/createPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        // point: '#6442d6',
        // primary: '#6947ff',
        // secondary: '#acaafb',
        // accent: '#271d65',
        // back:'#fbfbfc',
        // light:'#fff',
        // dark: '#000'
      },
      fontFamily:{
        sans: ['Poppins', 'Pretendard', 'sans-serif'],
      },
      boxShadow:{
        custome: 'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px'
      }

    },
  },
  plugins: [],
}