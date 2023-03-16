/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#57455A",
        secondary:"#3D4265",
        primary_detail: "#EA5366"
      },
      fontFamily:{
        "inter": ['Inter Tight','sans-serif']
      }
    },
  },
  plugins: [],
}