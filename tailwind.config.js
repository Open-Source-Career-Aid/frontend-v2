module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
// --dark-gray: 0 0 0 0.9;

//     --text-primary: 224 84 18 1;
//     --text-secondary: 224 26 47 1;

//     --card-outlining-dark: 223 22 75 1;
//     --disabled-buttons: 223 22 75 1;

//     --card-outlining-light: 223 21 87 1;
//     --unselected-option: 223 21 87 1;
//     --page-break: 223 21 87 1;
    extend: {
      colors: {
        'dark-gray': 'rgba(--dark-gray)',
        'text-primary': 'rgba(--text-primary)',
        'text-secondary': 'rgba(--text-secondary)',
        'card-outlining-dark': 'rgba(--card-outlining-dark)',
        'disabled-buttons': 'rgba(--disabled-buttons)',
        'card-outlining-light': 'rgba(--card-outlining-light)',
        'unselected-option': 'rgba(--unselected-option)',
        'page-break': 'rgba(--page-break)',
      },
    },
  },
  plugins: [],
}