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
        portfolio: {
          blue: '#305393',
          ink: '#14213D',
          mist: '#F5F7FA',
          wash: '#E8EEF8',
          amber: '#E8A33D',
          teal: '#1F7A74',
          slate: '#5B6B82',
          periwinkle: '#8FB0E8',
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
