/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ascii-pattern": "url('/images/ascii-pattern.svg')",
      },
      gridTemplateColumns: {
        "fit-25": "repeat(auto-fit, minmax(25rem, 1fr))",
        "fill-25": "repeat(auto-fill, minmax(25rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
