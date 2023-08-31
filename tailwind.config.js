/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      NeutonBold: ["Neuton-Bold", "sans-serif"],
      NeutonRegular: ["Neuton-Regular", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#0A0A0A",
        grey: "#1E1E1E",
        gray: "#716F6F ",
        primary: "#64ffda",
        secondary: "#e6f1ff",
      },
    },
  },
  plugins: [],
};
