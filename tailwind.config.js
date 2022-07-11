module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./components/**/*.{js,jsx,tsx}",
    "./pages/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
