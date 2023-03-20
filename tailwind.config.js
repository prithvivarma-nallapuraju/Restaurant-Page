/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-hero': "url('../Assets/hero-background.jpeg')"
      },
      fontFamily:{
        'Cormorant-Garamond': ['Cormorant Garamond', 'sans-serif']
      },
      brightness:{
        25:'.25',
        40:'.40'
      },
      backgroundOpacity:{
        '88':'.88'
      },
      margin:{
        '76':'17rem'
      }
    },
  },
  plugins: [],
}
