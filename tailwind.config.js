
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
          light: '#E6D2FB',
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
          dark: '#838383',
          DEFAULT: '#BCBCBC',
          light: '#E4E4E4',
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
