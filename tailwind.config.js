/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-light': '#BBE9FF',
        'custom-blue-dark': '#443C68',
      },
    },
  },
  plugins: [],
}

