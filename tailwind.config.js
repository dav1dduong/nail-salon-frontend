/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#e1e8f0",
        "custom-beige": "#a2c4d8",
      },
      backgroundImage: {
        "grid-black":
          "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%)",
      },
      fontFamily: {
        cursive: ["Alex Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
