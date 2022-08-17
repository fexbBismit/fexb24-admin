
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
        wait: {
          out: '#FFE45E',
          in: '#FFF8D7',
          DEFAULT: '#F5B57E'
        },
        paid: {
          out: '#52FA77',
          in: '#D4FEDD',
          DEFAULT: '#1AD342'
        },
        cancel: {
          in: '#FDE8E8',
          DEFAULT: '#F9A4A4',
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
          darker: '#678398',
          dark: '#ECECEC',
          DEFAULT: '#EFEFEF',
          light: '#F6F6F6'
        },
        modal: {
          gray: '#EDF2F7',
          red: '#E53E3E'
        }
      }
    },
  },
  plugins: [],
}
