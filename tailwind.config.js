module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: ["dark"],
      colors: {
        blue: {
          light: "#06bcfb",
          dark: "#4884ee",
        },
        black: {
          500: "#202125",
          600: "#16181d",
          700: "#0a0b0e",
          light: "#16181d",
        },
      },
      fontFamily: {
        dancing: ["Dancing Script"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
