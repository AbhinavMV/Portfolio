module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        dark: "5px 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      },
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
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
