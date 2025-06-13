/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#5f5f5f', // Replace with your hex code
        myGray: {
          100: '#045be6',
          900: '#045be6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Crimson:['serif'],
        Pacific:'poppins'
      },

    },
  },
  plugins: [daisyui],
}
