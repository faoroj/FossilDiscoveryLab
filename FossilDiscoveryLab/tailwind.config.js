/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#EC8F5E",
        secondary: "#9FBB73",
        tertiaryPrimary: "rgba(236, 143, 94, 0.5)",
        tertiarySecondary: "rgba(159, 187, 115, 0.5)",
        lightGrey: "#D9D9D9",
        grey: "#4E4E4E",
        mediumGrey: "rgba(23, 26, 32, 0.8)",
        black: "#171A20",
        white: "#ECECEC",
        flat: "White",
        mediumBlack: "#1E1E1E",
      },
      fontFamily: {
        inter: ["Inter", "regular"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      custom:"880px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
