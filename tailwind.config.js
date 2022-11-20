/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
      },
      colors: {
        'body': '#E5E5E5',
        'gray': {
          500: '#918E9B',
        }
      },
    },
  },
  plugins: [],
}
