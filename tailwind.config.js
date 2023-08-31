/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        grey: "#1E1E1E",
        gray: "#716F6F ",
      },
    },
  },
  plugins: [],
};
