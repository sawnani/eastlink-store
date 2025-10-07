/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        eastlink: {
          blue: "#1e40af",
          light: "#f0f4ff",
        },
      },
    },
  },
  plugins: [],
};