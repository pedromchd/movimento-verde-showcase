/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("prettier-plugin-tailwindcss")
  ],
}
