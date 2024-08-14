/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0F479C",
        secondary: "#7154BB",
      },
      backgroundImage: {
        "site-pattern": "url('./public/bg-animated.svg')",
      }
    },
    plugins: [],
  }
}