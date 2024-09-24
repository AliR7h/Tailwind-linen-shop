/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Lalezar" : "Lalezar",
        "Yekan" : "Yekan"
      },
    },
  },
  plugins: [],
}

// @layer base {
//   @font-face {
//       font-family: "Dana";
//       /* 400 */
//       src: local("Dana"), url("../fonts/Dana/woff2/DanaFaNum-Regular.woff2") format("woff2");
//       font-display: swap;
//   }
