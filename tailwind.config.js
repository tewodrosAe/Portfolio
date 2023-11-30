/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'texts' :'#E0E8EA',
        'primary': '#1AA5B7',
        'secondary': '#A2B7BB',
        'accent': '#32CDE2',
        'title': '#909FA1',
        'title2': '#909FA14f',
        'stack': '#113D42',
        
        'circle1': 'rgba(50, 205, 226, 0.30) 0%',
        'circle2': 'rgba(226, 50, 187, 0.30) 100%' 
      },
      backgroundColor:{
        'primary': '#051414',
        'primarybright': '#052429',
        'secondary': '#123F48',
        'accent': '#32CDE2',
        'initial': '#040D0D',
      },
      fontFamily:{
        'primary': ['Roboto Serif'],
        'nav': ['Roboto Flex']
      },
      fontSize: {
        'nav': '0.72rem',
        'paragraph': '13px',
        'paragraphTwo': '0.96rem',
        'heading': 'clamp(40px,7.5vw, 60px)',
        'headingTwo': 'clamp(25px,5vw, 50px)'
      },
      borderColor:{
        'primary': '#1AA5B7',
        'secondary': '#113D42'
      },
      keyframes:{
        icons:{
          '0%,80%': { transform: 'translateX(20px)', opacity: 0 },
          '90%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'spin-slow': 'spin 5s linear',
      },
      blur:{
        'cursor': '200px'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right bottom,#052429cc,#123F48cc)'
      }
    }
  },
  plugins: [],
}