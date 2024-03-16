/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        DiloWorld: ['"DiloWorld"', "sans-serif"],
        daruma: ['"Darumadrop One"', "sans-serif"],
        londrina: ['"Londrina Solid"', "sans-serif"],
        barlow: ['"Barlow Condensed"',"sans-serif"]
      },
      colors: {
        'primary': "#FFD213",
        'secondary': '#ffffff',
        'tertiary': '#952627',
        'black': '#000000'
      }
    },
  },
  plugins: [],
}

