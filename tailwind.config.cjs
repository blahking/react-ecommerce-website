/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px",
    },
    colors: {
      primary: "#0a1d37",
      white: "#fff",
      hero: "#d6e5fb",
      gray: "#999",
      footer: "rgba(255, 255, 255, 0.626)",
    },
    extend: {},
  },
  plugins: [],
};
