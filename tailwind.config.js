/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        runRight: {
          '0%': { left: '-100px' },  
          '100%': { left: 'calc(100% - 100px)' }, 
        },
        runLeft: {
          '0%': { right: '-100px' },  
          '100%': { right: 'calc(100% - 100px)' }, 
        },
      },
      animation: {
        runRight: 'runRight 7s linear infinite',
        runLeft: 'runLeft 7s linear infinite',
      },
    },
  },
  plugins: [],
}
