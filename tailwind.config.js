module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'dark-gray': 'rgba(24, 27, 35, 1)',
        'text-primary': 'rgba(7, 27, 83, 1)',
        'text-secondary': 'rgba(88, 105, 149, 1)',
        'card-outlining-strong': 'rgba(176, 184, 205, 1)',
        'disabled-buttons': 'rgba(176, 184, 205, 1)',
        'card-outlining-lite': 'rgba(216, 220, 230, 1)',
        'unselected-option': 'rgba(216, 220, 230, 1)',
        'page-break': 'rgba(216, 220, 230, 1)',
        'bg-primary': 'rgba(246, 249, 255, 1)',

        'blue-strong': 'rgba(19, 78, 242, 1)',
        'blue-primary': 'rgba(76, 123, 254, 1)',
        'blue-hover': 'rgba(132, 163, 250, 1)',
        'blue-selected': 'rgba(194, 209, 255, 1)',
        'blue-illustration': 'rgba(230, 236, 255, 1)',

        'orange-strong': 'rgba(250, 142, 43, 1)',

        'green-strong': 'rgba(104, 189, 138, 1)',
        'green-lite': 'rgba(169, 232, 171, 1)',

        'red-strong': 'rgba(248, 38, 38, 1)',
        'red-lite': 'rgba(249, 138, 138, 1)'
      
      },
    },
  },
  plugins: [],
}