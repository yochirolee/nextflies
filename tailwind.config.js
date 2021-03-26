const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        "red-airbnb": "#FF385C",
      },
      height: {
        search: "66px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
