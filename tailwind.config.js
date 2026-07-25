/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001d40",
        gold: "#C3A24E",
        "gold-soft": "#d8be7a",
        cream: "#FBF9F4",
        "cream-2": "#F3EEE3",
        green: "#223e3f",
        ink: "#363d43",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
