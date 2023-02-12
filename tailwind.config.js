/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      xxs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "1.5rem",
          xxl: "7rem",
        },
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          xxl: "1440px",
        },
        center: true,
      },
      colors: {
        "primary": "#6C0A64",
        "primary-shade":"#7a1c73",
        "secondary":"#F694D9",
        "secondary-shade":"#ed9fd6",
        "heading-one":"#051F33",
        "heading-two": "#303972",
        "description-one":"#849AAF",
        "login-color": "#4D44B5",
        "icon-color-one": "#C1BBEB",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
],
daisyui: {
  styled: true,
  themes: true,
  base: false,
  utils: true,
  logs: true,
  rtl: false,
  prefix: "",
  darkTheme: "dark",
},
}
