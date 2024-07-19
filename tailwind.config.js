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
        green_color:"#283a2c",
        gray_color :"#f1efec"
      },
      backgroundImage: {
        africa: "url('./src/assets/Discover/africa.jpg')",
        asia: "url('./src/assets/Discover/asia.jpg')",
        europe: "url('./src/assets/Discover/europe.jpg')",
        america: "url('./src/assets/Discover/america.jpg')",
      }
    },
  },
  plugins: [],
}

