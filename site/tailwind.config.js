/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.tsx", "./pages/**/*.tsx", "./portfolio/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      logo: "Archivo",
    },
  },
});
