/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode:'class',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      sans:'Roboto, sans-serif'
    },
  },
})
