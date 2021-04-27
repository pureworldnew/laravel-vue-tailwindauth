const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...defaultColors,
  ...{
    "category-back": {
      500: "#eeeeee"
    },
    "custom-red": {
      400: "#e70f0f"
    },
    "custombtn-red": {
      400: "#d70000"
    },
    "category-title": {
      600: "#222222"
    },
    "category-subtitle": {
      600: "#666666"
    },
    "product-red": {
      600: "#d80000"
    },
    "view-details": {
      600: "#ededed"
    },
    "newsletter-color": {
      400: "#f4f7f9"
    },
    "footer-color": {
      400: "#2e353b"
    },
    "contact-bc": {
      400: "#6d6d6d"
    }
  }
};
module.exports = {
  purge: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    fontFamily: {
      guurantee: ["Montserrat", "sans-serif"]
    },
    extend: {
      backgroundImage: theme => ({
        "apply-part": "url('/img/apply.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
