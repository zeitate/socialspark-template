
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        brand:{ start:'#9333EA', end:'#EC4899' }
      },
      boxShadow:{ soft:'0 10px 30px rgba(2,6,23,.06)' },
      maxWidth:{ container:'1200px' }
    },
  },
  plugins: [],
}
