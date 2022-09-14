/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      tomorrow: ["Tomorrow"],
    },
    extend: {
      backgroundImage: {
        "card-background": "url('./assets/card_vector.svg')",
      },
      colors: {
        primary: "#14172B",
        secondary: "#ffffff",
        grey: "#737BAE",
        "dark-grey": "#5A5F7D",
      },
    },
  },
  plugins: [],
};
