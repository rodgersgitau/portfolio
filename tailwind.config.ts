import type { Config } from "tailwindcss";

import forms from "@tailwindcss/forms";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./public/**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--text))",
        background: "hsl(var(--background))",
        primary: {
          foreground: "hsl(270, 40%, 98%)",
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          foreground: "hsl(270, 40%, 98%)",
          DEFAULT: "hsl(var(--secondary))",
        },
        accent: {
          foreground: "hsl(270, 40%, 98%)",
          DEFAULT: "hsl(var(--accent))",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [animate, typography, forms, aspectRatio, containerQueries],
} satisfies Config;
