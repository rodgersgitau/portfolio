/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1d1d20",
        brightGray: "#E8E9EB",
        primary: {
          50: "#FCE9F1",
          100: "#FACCE2",
          200: "#F5A5D2",
          300: "#EF7FBF",
          400: "#E957AD",
          500: "#D73E97",
          600: "#B93078",
          700: "#93255B",
          800: "#701A3D",
          900: "#4D0F21",
        },
      },
      backgroundImage: {
        "ascii-pattern": "url('/images/ascii-pattern.svg')",
        "ascii-pattern-dark": "url('/images/ascii-pattern-dark.svg')",
      },
      gridTemplateColumns: {
        "fit-25": "repeat(auto-fit, minmax(25rem, 1fr))",
        "fill-25": "repeat(auto-fill, minmax(25rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
