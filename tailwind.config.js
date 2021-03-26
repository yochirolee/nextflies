const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
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
