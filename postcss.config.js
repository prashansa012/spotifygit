/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  theme: {
    extend: {
      fontWeight:{
        'semibold':600
      }
    },
  },
  plugins: [ require('tailwindcss'),
  require('autoprefixer')],
}

