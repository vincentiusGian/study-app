
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'oxford': "url(/src/assets/oxford.png)",
      }, 
      fontFamily: {
        'poppins': 'poppins',
      }
    },
  },
  plugins: [require("daisyui")],
}

