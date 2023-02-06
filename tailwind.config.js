/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#E07B02",
        "brand-secondary": "#E07B02",
        "brand-accent": "#53D258",
        "brand-gray": "#A9A9A9",
        "brand-gray-200": "rgba(233, 233, 233, 0.2)",
        "brand-gray-300": "#E9E9E9",
        "brand-gray-400": "rgba(169, 169, 169, 0.5)",
        "brand-warning": "#E4C65B",
        "brand-error": "#E25C5C",
        "brand-black": "#2C3131",
        "brand-stroke": "#CACACA",
      },
      fontFamily: {
        futura: [`Futura LT`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
