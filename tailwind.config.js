/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#37352F',
        'gray': '#979A9B',
        'brown': '#937264', 
        'orange': '#FFA344',
        'yellow': '#FFDC49',
        'green': '#4DAB9A',
        'blue': '#529CCA',
        'purple': '#9A6DD7',
        'pink': '#E255A1',
        'red': '#FF7369'
      },
      screens: {
        'xxs': '10px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
