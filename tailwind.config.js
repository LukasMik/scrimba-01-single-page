/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#F7ECFB',
        'gray': '#D5D4D8',
        'purple': {
          300: '#A626D3',
          400: '#672280',
        }
      },
      spacing: {
        136: '34rem',
      }
    },
  },
  plugins: [],
}
