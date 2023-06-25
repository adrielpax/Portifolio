/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
    "./pages/**/*.tsx"
    // "./node_modules/flowbite/**/cle*.js"
  ],
  theme: {
    extend: {
      sans: "Roboto, sans-serif",
    },
  },
  // plugins: [require("flowbite/plugin")],
});
