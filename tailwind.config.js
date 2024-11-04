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
        point: '#6442d',
        secbg: '#f8f1f6',
        asideBg: '#f2ecee',
        btnBg: '#dcdaf5',
        btnHoverBg: '#e5dee2',
        btnPointBg: '#f1d3f9',
        fontColor:  '#1c1b1d',
        light: '#fff',
        dark: '#000',

        pointDark: '#9f86ff',
        secbgDark: '#1c1b1d',
        asideBgDark: '#211f21',
        btnBgDark: '#45455a',
        btnHoverBgDark: '#2d2c2e',
        btnPointBgDark: '#553f5d',
        fontColorDark: '#e6e1e3'


        // point: {
        //   light: '#6442d',
        //   dark: '#9f86ff'
        // },
        // secbg: {
        //   light: '#f8f1f6',
        //   dark: '#1c1b1d'
        // },
        // asideBg: {
        //   light: '#f2ecee',
        //   dark: '#211f21'
        // },
        // btnBg: {
        //   light: '#dcdaf5',
        //   dark: '#45455a'
        // },
        // btnHoverBg: {
        //   light: '#e5dee2',
        //   dark: '#2d2c2e'
        // },
        // btnPointBg:{
        //   light: '#f1d3f9',
        //   dark: '#553f5d'
        // },
        // fontColor: {
        //   light: '#1c1b1d',
        //   dark: '#e6e1e3'
        // },
        // light: '#fff',
        // dark: '#000',
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