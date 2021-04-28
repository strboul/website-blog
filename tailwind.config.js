module.exports = {
  purge: ["./src/pages/**/*.jsx", "./src/components/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
