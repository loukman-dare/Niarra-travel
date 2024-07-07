/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black_color:"#283a2c",
        white_color:"#fff",
        orange_color:"#fc6220",
        green_color:"#283a2c"
      }
    },
  },
  plugins: [],
}

