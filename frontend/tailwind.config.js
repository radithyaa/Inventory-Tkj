/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".public/src/index.html", "./public/**/*.{html,js}"],
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
    extend: {
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        bounceY: "bounceY 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
