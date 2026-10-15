/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        narindra: {
          orange: "#ff5500",
          "orange-light": "#ff7a30",
          "orange-dark": "#d94400",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        hero: ["'Barlow Condensed'", "sans-serif"],
        display: ["'Baloo 2'", "'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
