/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#435739",
        secondary: "#a7b194",
      },
    },
  },
  plugins: [],
};
