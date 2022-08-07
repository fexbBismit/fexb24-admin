
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: {
          dark: '#773DB4',
          DEFAULT: '#834DBB',
          lighter: '#EDDCFF'
        },
        lavender: {
          dark: '#8A37F5',
          DEFAULT: '#9747FF',
        },
        stat: {
          wait: '#FFE45E',
          paid: '#1AD342',
          cancel: '#F9A4A4'
        },
        blue: '#5EABE3',
        navy: '#0A2942',
        red: '#FF5F5F',
        drop: {
          DEFAULT: '#636B78',
          light: '#A1A6AD',
          lighter: '#EEEEEE'
        },
        gray: {
          DEFAULT: '#EFEFEF',
          light: '#F6F6F6'
        }
      }
    },
  },
  plugins: [],
}
