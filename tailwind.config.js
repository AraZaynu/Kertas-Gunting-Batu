/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        'premier': '#181C25',
        'graan':'#2DCAA7',
        'graan2': '#2BAA8E',
        'yel' : '#FFDE59',
        'redd'  : '#FF3131',
      },
      fontFamily: {
        IBM : "'IBM Plex Mono', monospace",
        IBMS : "'IBM Plex Sans', sans-serif",
        BGK : "'Press Start 2P', cursive;"
      },
    },
  },
  plugins: [],
}

