const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}\',\'./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tab-port':'900px',
      'md':'768px',
      'sm':'640px',
      'lg':'1024px',
    },
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#8c8c8c',
      'secondary': '#ffed4a',
      'dark__blue': '#4b7ed6',
      'color-primary':'#fc4174'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': { fontFamily: theme('fontFamily.Yekan Bakh') },
      })
    })
  ]
}
