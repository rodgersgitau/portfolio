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
        purpleGray: "#a7a6ba",
        brightGray: "#E8E9EB",
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
