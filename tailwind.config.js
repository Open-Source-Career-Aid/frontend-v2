/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4C7BFE',
      },
      fontSize: {
        'xxs': '0.4rem' 
      },
      borderRadius: {
        'custom': '10px',
      },
      overflow: {
        visible: 'visible',  // This creates a utility class `.overflow-visible`
      },
    },
  },
  plugins: [],
}