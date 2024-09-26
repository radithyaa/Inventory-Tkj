/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      poppins: ["Poppins", "sans-serif"], // Fixed the syntax for specifying font families
    },
    colors: {
      bookmark1: "#FFFFFF",
      bookmark2: "#232323",
      bookmark3: "#F9322C",
    },
    extend: {},
  },
  plugins: [],
};
