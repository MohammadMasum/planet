/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'blue': '#2418FB',
        'rose': '#D82AE4',
        'orange': '#FB6D20',
        'orange-light': '#F5A315',
        'gray': '#BFBFBF',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif']
      },
    },
  },
  plugins: [],
}
