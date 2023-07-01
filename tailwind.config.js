/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'Oleo-Script':['"Oleo Script"', 'cursive']
    },
  },
  plugins: [require('daisyui')],
}

